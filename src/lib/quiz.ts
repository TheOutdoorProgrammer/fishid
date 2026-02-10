import type { FeatureOption, Fish, TrueFalseQuestion as FishTrueFalseQuestion } from '@/fish/types';
import type {
  FeatureQuestion,
  HabitatQuestion,
  IdentifyQuestion,
  MatchQuestion,
  QuizQuestion,
  QuizType,
  SpotQuestion,
  TrueFalseQuestion as QuizTrueFalseQuestion,
} from '@/types';
import { FISH } from '@/fish';
import { SIMILAR_PAIRS } from '@/data/similarPairs';
import { shuffle } from '@/lib/utils';

type UsedTracker = {
  fish: Set<string>;
  tf: Set<string>;
  pairs: Set<string>;
};

type FishModule = {
  default?: Fish;
  featureOptions?: FeatureOption;
  trueFalseQuestions?: FishTrueFalseQuestion[];
};

type RequireContext = {
  keys: () => string[];
  (id: string): FishModule;
};

type QuizData = {
  featureOptionsById: Record<string, FeatureOption>;
  trueFalseQuestions: FishTrueFalseQuestion[];
};

const FISH_BY_ID = FISH as Record<string, Fish>;
const ALL_FISH = Object.values(FISH_BY_ID);
const QUESTION_TYPES: QuizType[] = ['identify', 'feature', 'habitat', 'tf', 'match', 'spot'];

function containsFishName(text: string, fishName: string): boolean {
  const t = (text || '').toLowerCase();
  const name = (fishName || '').toLowerCase();
  if (!t || !name) return false;
  return t.includes(name);
}

function uniqueStrings(arr: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const s of arr) {
    if (!s) continue;
    if (seen.has(s)) continue;
    seen.add(s);
    out.push(s);
  }
  return out;
}
const QUIZ_DATA = loadQuizData();

// Lesson quizzes should focus on questions that actually test a specific fish.
// (Match questions don’t map cleanly to a single fish for discovery/weak-spot tracking.)
const LESSON_QUESTION_TYPES: QuizType[] = ['identify', 'feature', 'habitat', 'tf', 'spot'];

export function buildLessonQuizQuestions(fishPool: Fish[], count: number): QuizQuestion[] {
  const pool = fishPool.length ? fishPool.slice() : ALL_FISH.slice();
  const used: UsedTracker = { fish: new Set(), tf: new Set(), pairs: new Set() };
  const questions: QuizQuestion[] = [];

  for (let i = 0; i < count; i += 1) {
    const type = LESSON_QUESTION_TYPES[i % LESSON_QUESTION_TYPES.length];
    if (type === 'identify') {
      questions.push(qIdentify(pool, used));
    } else if (type === 'feature') {
      questions.push(qFeature(pool, used));
    } else if (type === 'habitat') {
      questions.push(qHabitat(pool, used));
    } else if (type === 'tf') {
      questions.push(qTrueFalse(pool, used));
    } else {
      questions.push(qSpotDifference(pool, used));
    }
  }

  return shuffle(questions);
}

export function buildQuizQuestions(fishPool: Fish[], count: number): QuizQuestion[] {
  const pool = fishPool.length ? fishPool.slice() : ALL_FISH.slice();
  const used: UsedTracker = { fish: new Set(), tf: new Set(), pairs: new Set() };
  const questions: QuizQuestion[] = [];

  for (let i = 0; i < count; i += 1) {
    const type = QUESTION_TYPES[i % QUESTION_TYPES.length];
    if (type === 'identify') {
      questions.push(qIdentify(pool, used));
    } else if (type === 'feature') {
      questions.push(qFeature(pool, used));
    } else if (type === 'habitat') {
      questions.push(qHabitat(pool, used));
    } else if (type === 'tf') {
      questions.push(qTrueFalse(pool, used));
    } else if (type === 'match') {
      questions.push(qMatch(pool));
    } else {
      questions.push(qSpotDifference(pool, used));
    }
  }

  return shuffle(questions);
}

export function qIdentify(pool: Fish[], used: UsedTracker): IdentifyQuestion {
  const answer = pickUnused(pool, used.fish, ALL_FISH);
  used.fish.add(answer.id);

  // Prefer the current quiz pool for distractors (even if the pool is smaller than 4),
  // then top up from the full fish list.
  const poolIds = Array.from(new Set(pool.map((f) => f.id)));
  const allIds = Object.keys(FISH_BY_ID);

  const choices = new Set<string>([answer.id]);

  // 1) Pull from pool first (helps lessons like Catfish/Bass feel like the same "type")
  const poolShuffled = shuffle(poolIds.filter((id) => id !== answer.id));
  for (const id of poolShuffled) {
    if (choices.size >= 4) break;
    choices.add(id);
  }

  // 2) Top up from global list
  while (choices.size < Math.min(4, allIds.length)) {
    choices.add(allIds[Math.floor(Math.random() * allIds.length)]);
  }

  const options = shuffle(Array.from(choices)).map((id) => ({
    id,
    label: fishName(id),
  }));

  return {
    type: 'identify',
    prompt: 'What fish is this?',
    fishId: answer.id,
    options,
    correct: answer.id,
  };
}

export function qFeature(pool: Fish[], used: UsedTracker): FeatureQuestion {
  const fish = pickUnused(pool, used.fish, ALL_FISH);
  used.fish.add(fish.id);

  const fishNameText = fish.name;

  // Vary the "correct" feature so repeat questions don't always use the same line.
  const candidateCorrect = shuffle(
    uniqueStrings([fish.keyFeature, ...(fish.features || [])])
      .filter(Boolean)
      .filter((txt) => !containsFishName(txt, fishNameText))
  )[0];

  // Pull wrong features from other fish (prefer the current pool so it's harder / more relevant).
  const sourceFish = pool.length ? pool : ALL_FISH;
  const wrongCandidates = sourceFish
    .filter((f) => f.id !== fish.id)
    .flatMap((f) => [f.keyFeature, ...(f.features || [])])
    .filter((f) => Boolean(f) && f !== candidateCorrect)
    .filter((txt) => !containsFishName(txt, fishNameText));

  const wrong = uniqueStrings(shuffle(wrongCandidates)).slice(0, 3);

  // Fallback to existing per-fish options if needed.
  if (wrong.length < 3) {
    const optionsData = getFeatureOptions(fish);
    for (const w of optionsData.wrong) {
      if (wrong.length >= 3) break;
      if (!w) continue;
      if (w === candidateCorrect) continue;
      if (containsFishName(w, fishNameText)) continue;
      if (!wrong.includes(w)) wrong.push(w);
    }
  }

  const optionValues = uniqueStrings([candidateCorrect, ...wrong]).filter(Boolean);
  const options = shuffle(optionValues)
    .slice(0, 4)
    .map((option) => ({
      label: option,
      value: option,
    }));

  return {
    type: 'feature',
    prompt: `Which feature best identifies ${fish.name}?`,
    fishId: fish.id,
    options,
    correct: candidateCorrect,
  };
}

export function qHabitat(pool: Fish[], used: UsedTracker): HabitatQuestion {
  const fish = pickUnused(pool, used.fish, ALL_FISH);
  used.fish.add(fish.id);

  const fishNameText = fish.name;

  const correctSet = new Set((fish.habitat || []).map((h) => (h || '').trim()).filter(Boolean));
  const correctChoices = Array.from(correctSet);
  const correct = correctChoices.length
    ? correctChoices[Math.floor(Math.random() * correctChoices.length)]
    : '';

  const sourceFish = pool.length ? pool : ALL_FISH;

  // Build a pool of habitat tokens that are NOT correct for this fish.
  const wrongCandidates = sourceFish
    .filter((f) => f.id !== fish.id)
    .flatMap((f) => (f.habitat || []).map((h) => (h || '').trim()).filter(Boolean))
    .filter((h) => h && h !== correct)
    .filter((h) => !correctSet.has(h))
    .filter((h) => !containsFishName(h, fishNameText));

  const wrong = uniqueStrings(shuffle(wrongCandidates)).slice(0, 3);

  // Top up from global list if needed
  if (wrong.length < 3) {
    const globalCandidates = ALL_FISH
      .filter((f) => f.id !== fish.id)
      .flatMap((f) => (f.habitat || []).map((h) => (h || '').trim()).filter(Boolean))
      .filter((h) => h && h !== correct)
      .filter((h) => !correctSet.has(h))
      .filter((h) => !containsFishName(h, fishNameText));

    for (const h of uniqueStrings(shuffle(globalCandidates))) {
      if (wrong.length >= 3) break;
      if (!wrong.includes(h)) wrong.push(h);
    }
  }

  const optionValues = uniqueStrings([correct, ...wrong]).filter(Boolean);
  const options = shuffle(optionValues)
    .slice(0, 4)
    .map((option) => ({
      label: option,
      value: option,
    }));

  return {
    type: 'habitat',
    prompt: `Where would you most likely find ${fish.name}?`,
    fishId: fish.id,
    options,
    correct,
  };
}

export function qTrueFalse(pool: Fish[], used: UsedTracker): QuizTrueFalseQuestion {
  const poolIds = new Set(pool.map((fish) => fish.id));
  const poolTF = QUIZ_DATA.trueFalseQuestions.filter(
    (question) => poolIds.has(question.fishId) && !used.tf.has(question.statement)
  );
  const fallbackTF = QUIZ_DATA.trueFalseQuestions.filter((question) =>
    poolIds.has(question.fishId)
  );
  const source = poolTF.length
    ? poolTF
    : fallbackTF.length
      ? fallbackTF
      : QUIZ_DATA.trueFalseQuestions;

  const selected = source.length
    ? source[Math.floor(Math.random() * source.length)]
    : buildFallbackTrueFalse(pool, used);

  used.tf.add(selected.statement);

  return {
    type: 'tf',
    prompt: 'True or False',
    fishId: selected.fishId,
    statement: selected.statement,
    options: [
      { label: 'True', value: true },
      { label: 'False', value: false },
    ],
    correct: selected.answer,
    showImage: selected.showImage,
  };
}

export function qMatch(pool: Fish[]): MatchQuestion {
  const source = pool.length ? pool : ALL_FISH;
  const ids = shuffle(source)
    .slice(0, Math.min(3, source.length))
    .map((fish) => fish.id);

  const left = ids.map((id) => ({ id, label: fishName(id) }));
  const right = shuffle(ids.map((id) => ({ id, label: fishFeature(id) })));

  return {
    type: 'match',
    prompt: 'Match the fish to its key identifying feature.',
    pairs: ids,
    left,
    right,
  };
}

export function qSpotDifference(pool: Fish[], used: UsedTracker): SpotQuestion {
  const poolIds = new Set(pool.map((fish) => fish.id));
  const pairKey = (pair: { fish1: string; fish2: string }) => `${pair.fish1}:${pair.fish2}`;
  const inPool = (pair: { fish1: string; fish2: string }) =>
    poolIds.has(pair.fish1) || poolIds.has(pair.fish2);

  const candidates = SIMILAR_PAIRS.filter(
    (pair) => poolIds.has(pair.fish1) && poolIds.has(pair.fish2) && !used.pairs.has(pairKey(pair))
  );
  const fallback = SIMILAR_PAIRS.filter((pair) => inPool(pair) && !used.pairs.has(pairKey(pair)));
  const lastResort = SIMILAR_PAIRS.filter((pair) => !poolIds.size || inPool(pair));
  const source = candidates.length
    ? candidates
    : fallback.length
      ? fallback
      : lastResort.length
        ? lastResort
        : SIMILAR_PAIRS;

  const pair = source[Math.floor(Math.random() * source.length)];
  used.pairs.add(pairKey(pair));

  const askWhich = Math.random() < 0.5 ? pair.fish1 : pair.fish2;
  const options = shuffle([pair.fish1, pair.fish2]).map((id) => ({
    id,
    label: fishName(id),
  }));

  return {
    type: 'spot',
    prompt: `Spot the difference: Which one is the ${fishName(askWhich)}?`,
    fishId: askWhich,
    pair,
    hint: pair.hint,
    options,
    correct: askWhich,
  };
}

function loadQuizData(): QuizData {
  const featureOptionsById: Record<string, FeatureOption> = {};
  const trueFalseQuestions: FishTrueFalseQuestion[] = [];
  const context = getFishModuleContext();

  if (!context) {
    return { featureOptionsById, trueFalseQuestions };
  }

  context.keys().forEach((key) => {
    const module = context(key);
    const fish = module.default;

    if (fish?.id && module.featureOptions) {
      featureOptionsById[fish.id] = module.featureOptions;
    }

    if (module.trueFalseQuestions?.length) {
      trueFalseQuestions.push(...module.trueFalseQuestions);
    }
  });

  return { featureOptionsById, trueFalseQuestions };
}

function getFishModuleContext(): RequireContext | null {
  if (typeof require !== 'function') {
    return null;
  }

  const requireWithContext = require as unknown as {
    context?: (path: string, deep?: boolean, filter?: RegExp) => RequireContext;
  };

  return requireWithContext.context
    ? requireWithContext.context('../fish', true, /index\.ts$/)
    : null;
}

function pickUnused(pool: Fish[], used: Set<string>, fallback: Fish[]): Fish {
  const source = pool.length ? pool : fallback;
  const fresh = source.filter((fish) => !used.has(fish.id));

  if (fresh.length) {
    return fresh[Math.floor(Math.random() * fresh.length)];
  }

  return source[Math.floor(Math.random() * source.length)];
}

function getFeatureOptions(fish: Fish): FeatureOption {
  const fallback = buildFallbackFeatureOptions(fish, ALL_FISH);
  const options = QUIZ_DATA.featureOptionsById[fish.id];

  if (!options) {
    return fallback;
  }

  return {
    correct: options.correct || fallback.correct,
    wrong: options.wrong.length ? options.wrong : fallback.wrong,
  };
}

function buildFallbackFeatureOptions(fish: Fish, allFish: Fish[]): FeatureOption {
  const wrongCandidates = allFish
    .filter((candidate) => candidate.id !== fish.id)
    .map((candidate) => candidate.keyFeature)
    .filter((feature) => feature && feature !== fish.keyFeature);

  const wrong = shuffle(wrongCandidates).slice(0, 3);
  return { correct: fish.keyFeature, wrong };
}

function buildFallbackTrueFalse(pool: Fish[], used: UsedTracker): FishTrueFalseQuestion {
  const source = pool.length ? pool : ALL_FISH;
  const fish = pickUnused(source, used.fish, ALL_FISH);
  const useTrue = Math.random() < 0.5;
  const featureSource = useTrue ? fish : pickDifferentFish(fish);
  const feature = pickFeature(featureSource);
  const statement = `This fish has ${feature}.`;

  return {
    statement,
    answer: useTrue,
    fishId: fish.id,
    showImage: true, // Fallback questions reference "this fish" so they need the image
  };
}

function pickDifferentFish(fish: Fish): Fish {
  const candidates = ALL_FISH.filter((candidate) => candidate.id !== fish.id);
  return candidates.length ? candidates[Math.floor(Math.random() * candidates.length)] : fish;
}

function pickFeature(fish: Fish): string {
  if (fish.features.length) {
    return fish.features[Math.floor(Math.random() * fish.features.length)];
  }

  return fish.keyFeature;
}

function fishName(id: string): string {
  return FISH_BY_ID[id]?.name ?? id;
}

function fishFeature(id: string): string {
  return FISH_BY_ID[id]?.keyFeature ?? id;
}

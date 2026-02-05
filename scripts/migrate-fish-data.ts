import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

type FishRef = { label: string; url: string };
type FishColors = { primary: string; secondary: string; belly: string; fin: string };
type Fish = {
  id: string;
  name: string;
  scientific: string;
  image: string;
  quizImage: string;
  features: string[];
  keyFeature: string;
  habitat: string;
  size: string;
  funFact: string;
  refs: FishRef[];
  colors: FishColors;
};

type FeatureOption = { correct: string; wrong: string[] };
type TrueFalseQuestion = { statement: string; answer: boolean; fishId: string };

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataPath = path.join(repoRoot, 'js', 'data.js');
const fishRoot = path.join(repoRoot, 'src', 'fish');
const identifierPattern = /^[A-Za-z_$][A-Za-z0-9_$]*$/;

const indent = (level: number) => ' '.repeat(level * 2);

const escapeString = (value: string) =>
  value
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\r/g, '\\r')
    .replace(/\n/g, '\\n')
    .replace(/\t/g, '\\t')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

const formatString = (value: string) => `'${escapeString(value)}'`;

const formatStringArray = (items: string[], level: number) => {
  if (items.length === 0) {
    return '[]';
  }

  const baseIndent = indent(level);
  const itemIndent = indent(level + 1);
  const lines = items.map((item) => `${itemIndent}${formatString(item)}`);
  return `[\n${lines.join(',\n')}\n${baseIndent}]`;
};

const formatInlineArray = (items: string[]) => {
  if (items.length === 0) {
    return '[]';
  }

  return `[${items.map((item) => formatString(item)).join(', ')}]`;
};

const formatRefsArray = (refs: FishRef[], level: number) => {
  if (refs.length === 0) {
    return '[]';
  }

  const baseIndent = indent(level);
  const itemIndent = indent(level + 1);
  const lines = refs.map(
    (ref) =>
      `${itemIndent}{ label: ${formatString(ref.label)}, url: ${formatString(ref.url)} }`
  );
  return `[\n${lines.join(',\n')}\n${baseIndent}]`;
};

const formatTrueFalseArray = (items: TrueFalseQuestion[], level: number) => {
  if (items.length === 0) {
    return '[]';
  }

  const baseIndent = indent(level);
  const itemIndent = indent(level + 1);
  const lines = items.map(
    (question) =>
      `${itemIndent}{ statement: ${formatString(question.statement)}, answer: ${question.answer}, fishId: ${formatString(question.fishId)} }`
  );
  return `[\n${lines.join(',\n')}\n${baseIndent}]`;
};

const formatColors = (colors: FishColors) =>
  `{ primary: ${formatString(colors.primary)}, secondary: ${formatString(colors.secondary)}, belly: ${formatString(colors.belly)}, fin: ${formatString(colors.fin)} }`;

const renderTypesFile = () =>
  [
    'export type FishRef = {',
    '  label: string;',
    '  url: string;',
    '};',
    '',
    'export type FishColors = {',
    '  primary: string;',
    '  secondary: string;',
    '  belly: string;',
    '  fin: string;',
    '};',
    '',
    'export type Fish = {',
    '  id: string;',
    '  name: string;',
    '  scientific: string;',
    '  image: string;',
    '  quizImage: string;',
    '  features: string[];',
    '  keyFeature: string;',
    '  habitat: string;',
    '  size: string;',
    '  funFact: string;',
    '  refs: FishRef[];',
    '  colors: FishColors;',
    '};',
    '',
    'export type FeatureOption = {',
    '  correct: string;',
    '  wrong: string[];',
    '};',
    '',
    'export type TrueFalseQuestion = {',
    '  statement: string;',
    '  answer: boolean;',
    '  fishId: string;',
    '};',
    '',
  ].join('\n');

const renderBarrelFile = (fishIds: string[]) =>
  `${fishIds.map((id) => `export { ${id} } from './${id}';`).join('\n')}\n`;

const renderFishModule = (
  fish: Fish,
  featureOptions: FeatureOption,
  trueFalseQuestions: TrueFalseQuestion[]
) => {
  const features = formatStringArray(fish.features, 1);
  const refs = formatRefsArray(fish.refs, 1);

  return [
    "import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';",
    '',
    `export const ${fish.id}: Fish = {`,
    `  id: ${formatString(fish.id)},`,
    `  name: ${formatString(fish.name)},`,
    `  scientific: ${formatString(fish.scientific)},`,
    `  image: ${formatString(fish.image)},`,
    `  quizImage: ${formatString(fish.quizImage)},`,
    `  features: ${features},`,
    `  keyFeature: ${formatString(fish.keyFeature)},`,
    `  habitat: ${formatString(fish.habitat)},`,
    `  size: ${formatString(fish.size)},`,
    `  funFact: ${formatString(fish.funFact)},`,
    `  refs: ${refs},`,
    `  colors: ${formatColors(fish.colors)},`,
    '};',
    '',
    'export const featureOptions: FeatureOption = {',
    `  correct: ${formatString(featureOptions.correct)},`,
    `  wrong: ${formatInlineArray(featureOptions.wrong)},`,
    '};',
    '',
    `export const trueFalseQuestions: TrueFalseQuestion[] = ${formatTrueFalseArray(trueFalseQuestions, 0)};`,
    '',
    `export default ${fish.id};`,
    '',
  ].join('\n');
};

const loadData = async () => {
  const fileContents = await readFile(dataPath, 'utf8');
  const loader = new Function(`${fileContents}\nreturn { FISH, TRUE_FALSE, FEATURE_OPTIONS };`);
  const result = loader() as {
    FISH: Record<string, Fish>;
    TRUE_FALSE: TrueFalseQuestion[];
    FEATURE_OPTIONS: Record<string, FeatureOption>;
  };

  if (!result || typeof result !== 'object') {
    throw new Error('Unable to load data from js/data.js');
  }

  const { FISH, TRUE_FALSE, FEATURE_OPTIONS } = result;

  if (!FISH || typeof FISH !== 'object') {
    throw new Error('FISH object missing from js/data.js');
  }

  if (!Array.isArray(TRUE_FALSE)) {
    throw new Error('TRUE_FALSE array missing from js/data.js');
  }

  if (!FEATURE_OPTIONS || typeof FEATURE_OPTIONS !== 'object') {
    throw new Error('FEATURE_OPTIONS object missing from js/data.js');
  }

  return { fish: FISH, trueFalse: TRUE_FALSE, featureOptions: FEATURE_OPTIONS };
};

const assertFish = (fishId: string, fish: Fish) => {
  if (!identifierPattern.test(fishId)) {
    throw new Error(`Fish id "${fishId}" is not a valid TypeScript identifier.`);
  }

  if (!fish || typeof fish !== 'object') {
    throw new Error(`Fish "${fishId}" is missing or invalid.`);
  }

  if (fish.id !== fishId) {
    throw new Error(`Fish id mismatch: key "${fishId}" !== id "${fish.id}"`);
  }

  const requiredStringFields: Array<keyof Fish> = [
    'id',
    'name',
    'scientific',
    'image',
    'quizImage',
    'keyFeature',
    'habitat',
    'size',
    'funFact',
  ];

  for (const field of requiredStringFields) {
    if (typeof fish[field] !== 'string') {
      throw new Error(`Fish "${fishId}" is missing string field "${field}".`);
    }
  }

  if (!Array.isArray(fish.features) || fish.features.some((item) => typeof item !== 'string')) {
    throw new Error(`Fish "${fishId}" has invalid features array.`);
  }

  if (!Array.isArray(fish.refs)) {
    throw new Error(`Fish "${fishId}" is missing refs array.`);
  }

  if (
    fish.refs.some(
      (ref) =>
        !ref || typeof ref.label !== 'string' || typeof ref.url !== 'string'
    )
  ) {
    throw new Error(`Fish "${fishId}" has invalid refs entries.`);
  }

  if (!fish.colors || typeof fish.colors !== 'object') {
    throw new Error(`Fish "${fishId}" is missing colors object.`);
  }

  const colorFields: Array<keyof FishColors> = ['primary', 'secondary', 'belly', 'fin'];
  for (const field of colorFields) {
    if (typeof fish.colors[field] !== 'string') {
      throw new Error(`Fish "${fishId}" is missing color "${field}".`);
    }
  }

  return fish;
};

const assertFeatureOptions = (fishId: string, options: FeatureOption | undefined) => {
  if (!options || typeof options !== 'object') {
    throw new Error(`Feature options missing for fish "${fishId}".`);
  }

  if (typeof options.correct !== 'string' || !Array.isArray(options.wrong)) {
    throw new Error(`Feature options for fish "${fishId}" are invalid.`);
  }

  if (options.wrong.some((item) => typeof item !== 'string')) {
    throw new Error(`Feature options for fish "${fishId}" are invalid.`);
  }

  return options;
};

const writeFishModule = async (fishId: string, contents: string) => {
  const fishDir = path.join(fishRoot, fishId);
  await rm(fishDir, { recursive: true, force: true });
  await mkdir(fishDir, { recursive: true });
  await writeFile(path.join(fishDir, 'index.ts'), contents, 'utf8');
};

const main = async () => {
  const { fish, trueFalse, featureOptions } = await loadData();
  const fishIds = Object.keys(fish);

  await mkdir(fishRoot, { recursive: true });

  for (const fishId of fishIds) {
    const fishEntry = assertFish(fishId, fish[fishId]);
    const options = assertFeatureOptions(fishId, featureOptions[fishId]);
    const questions = trueFalse.filter((question) => question.fishId === fishId);
    const moduleContents = renderFishModule(fishEntry, options, questions);
    await writeFishModule(fishId, moduleContents);
  }

  await writeFile(path.join(fishRoot, 'types.ts'), renderTypesFile(), 'utf8');
  await writeFile(path.join(fishRoot, 'index.ts'), renderBarrelFile(fishIds), 'utf8');

  console.log(`Generated ${fishIds.length} fish modules in ${fishRoot}`);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

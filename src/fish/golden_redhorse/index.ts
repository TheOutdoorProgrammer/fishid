import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const golden_redhorse: Fish = {
  id: 'golden_redhorse',
  name: 'Golden Redhorse',
  scientific: 'Moxostoma erythrurum',
  image: [
    '/img/fish/golden_redhorse/1.jpg',
    '/img/fish/golden_redhorse/2.jpg'
  ],
  features: [
    'Golden-olive body color',
    'Distinctly red or orange tail fin',
    'Sucker mouth with fleshy plicate (grooved) lips',
    'No dark lateral stripe',
    'Forked red-orange tail',
    'Round cross-section body'
  ],
  keyFeature: 'Golden-olive sucker with bright red-orange tail fin',
  habitat: ['Streams and rivers with moderate current over gravel', 'clear streams and rivers', 'riffles, runs, and pools'],
  size: '12-18 inches typical',
  funFact: 'Golden redhorse are the most common redhorse species in Ohio. Their orange-red tail fin makes them one of the more attractive sucker species.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Moxostoma%20erythrurum' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Moxostoma+erythrurum' }
  ],
  colors: { primary: '#8B7830', secondary: '#A89048', belly: '#D8C888', fin: '#C06020' },
};

export const featureOptions: FeatureOption = {
  correct: 'Golden-olive sucker with bright red-orange tail fin',
  wrong: ['Silver body with V-shaped lower lip', 'Dark-edged scales with dusky fins', 'Very large body with thick lips'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Golden-olive sucker with bright red-orange tail fin.', answer: true, fishId: 'golden_redhorse' },
  { statement: 'This fish can be identified by: Golden-olive body color.', answer: true, fishId: 'golden_redhorse' },
  { statement: 'This fish can be identified by: Distinctly red or orange tail fin.', answer: true, fishId: 'golden_redhorse' },
  { statement: 'You might find this fish in streams and rivers with moderate current over gravel.', answer: true, fishId: 'golden_redhorse' }
];

export default golden_redhorse;

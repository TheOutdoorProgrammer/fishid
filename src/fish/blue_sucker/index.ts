import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const blue_sucker: Fish = {
  id: 'blue_sucker',
  name: 'Blue Sucker',
  scientific: 'Cycleptus elongatus',
  image: [
    '/img/fish/blue_sucker/1.jpg',
    '/img/fish/blue_sucker/2.jpg'
  ],
  features: [
    'Elongated, streamlined body (unusual for a sucker)',
    'Blue-gray to dark blue body color',
    'Small head relative to body',
    'Large, sickle-shaped dorsal fin',
    'Subterminal sucker mouth with fleshy lips',
    'Deeply forked tail'
  ],
  keyFeature: 'Elongated blue-gray sucker with small head and sickle-shaped dorsal fin',
  habitat: ['Ohio River', 'creeks', 'rivers', 'rocky rivers', 'streams', 'tributaries'],
  size: '20-30 inches typical',
  funFact: 'Blue suckers are the most streamlined of all suckers, adapted for life in fast current. They are threatened or endangered in many states due to dam construction.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Cycleptus%20elongatus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Cycleptus+elongatus' }
  ],
  colors: { primary: '#4A5A78', secondary: '#5A6A88', belly: '#A8B0C0', fin: '#3A4A68' },
};

export const featureOptions: FeatureOption = {
  correct: 'Elongated blue-gray sucker with small head and sickle-shaped dorsal',
  wrong: ['Deep-bodied with large forward mouth', 'Boxy head with dark saddles', 'Golden body with red-orange tail'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Elongated blue-gray sucker with small head and sickle-shaped dorsal fin.', answer: true, fishId: 'blue_sucker' },
  { statement: 'This fish can be identified by: Elongated, streamlined body (unusual for a sucker).', answer: true, fishId: 'blue_sucker' },
  { statement: 'This fish can be identified by: Blue-gray to dark blue body color.', answer: true, fishId: 'blue_sucker' },
  { statement: 'You might find this fish in large rivers with swift current over rocky bottoms.', answer: true, fishId: 'blue_sucker' }
];

export default blue_sucker;

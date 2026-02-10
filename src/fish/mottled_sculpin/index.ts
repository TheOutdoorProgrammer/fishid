import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const mottled_sculpin: Fish = {
  id: 'mottled_sculpin',
  name: 'Mottled Sculpin',
  scientific: 'Cottus bairdii',
  image: [
    '/img/fish/mottled_sculpin/1.jpg',
    '/img/fish/mottled_sculpin/2.jpg'
  ],
  features: [
    'Wide, flat head with fan-like pectoral fins',
    'No scales (smooth skin)',
    'Mottled brown pattern for camouflage',
    'Large pectoral fins spread flat on bottom',
    'Eyes on top of head',
    'No swim bladder (always sinks to bottom)'
  ],
  keyFeature: 'Wide flat head with fan-like pectoral fins and scaleless mottled body',
  habitat: ['creeks', 'rivers', 'rocky streams'],
  size: '3-4 inches typical',
  funFact: 'Mottled sculpin have no swim bladder so they always sink. They use their large pectoral fins to prop themselves on the stream bottom and dart between rocks to catch prey.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Cottus%20bairdii' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Cottus+bairdii' }
  ],
  colors: { primary: '#5A5038', secondary: '#706848', belly: '#B0A888', fin: '#4A4030' },
};

export const featureOptions: FeatureOption = {
  correct: 'Wide flat head with fan-like pectoral fins and scaleless mottled body',
  wrong: ['Small stout body with rounded tail and dark bar', 'Slender translucent body', 'Multiple isolated spines before dorsal'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Wide flat head with fan-like pectoral fins and scaleless mottled body.', answer: true, fishId: 'mottled_sculpin', showImage: true },
  { statement: 'This fish can be identified by: Wide, flat head with fan-like pectoral fins.', answer: true, fishId: 'mottled_sculpin', showImage: true },
  { statement: 'This fish can be identified by: No scales (smooth skin).', answer: true, fishId: 'mottled_sculpin', showImage: true },
  { statement: 'You might find this fish in cold.', answer: true, fishId: 'mottled_sculpin', showImage: true }
];

export default mottled_sculpin;

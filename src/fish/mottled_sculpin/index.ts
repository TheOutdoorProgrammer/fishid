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
  habitat: ['Cold', 'rocky streams with clean water', 'under stones'],
  size: '3-4 inches typical',
  funFact: 'Mottled sculpin have no swim bladder so they always sink. They use their large pectoral fins to prop themselves on the stream bottom and dart between rocks to catch prey.',
  refs: [
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
  { statement: 'Mottled sculpin have scales covering their body.', answer: false, fishId: 'mottled_sculpin' }
];

export default mottled_sculpin;

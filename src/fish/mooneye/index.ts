import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const mooneye: Fish = {
  id: 'mooneye',
  name: 'Mooneye',
  scientific: 'Hiodon tergisus',
  image: [
    '/img/fish/mooneye/1.jpg',
    '/img/fish/mooneye/2.jpg'
  ],
  features: [
    'Laterally compressed silver body',
    'Very large eye with golden iris',
    'Dorsal fin starts in FRONT of anal fin origin',
    'No adipose fin',
    'Sharply forked tail',
    'Distinct keel along belly'
  ],
  keyFeature: 'Large-eyed silver fish with dorsal fin starting ahead of anal fin',
  habitat: 'Large rivers and Lake Erie; prefers clear water with current',
  size: '10-14 inches typical',
  funFact: 'Mooneyes are named for their huge, reflective eyes. They are often confused with shad but lack the serrated belly and have a more streamlined body.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Hiodon%20tergisus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Hiodon+tergisus' }
  ],
  colors: { primary: '#8898A8', secondary: '#A0B0C0', belly: '#D8E0E8', fin: '#708090' },
};

export const featureOptions: FeatureOption = {
  correct: 'Large-eyed silver fish with dorsal fin starting ahead of anal fin',
  wrong: ['Trailing dorsal filament and shoulder spot', 'Serrated belly with large eye', 'Silver body with horizontal stripes'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Mooneye have an adipose fin like trout.', answer: false, fishId: 'mooneye' }
];

export default mooneye;

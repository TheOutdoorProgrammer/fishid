import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const bighead_carp: Fish = {
  id: 'bighead_carp',
  name: 'Bighead Carp',
  scientific: 'Hypophthalmichthys nobilis',
  image: [
    '/img/fish/bighead_carp/1.gif',
    '/img/fish/bighead_carp/2.jpg'
  ],
  features: [
    'Very large head relative to body',
    'Eyes set low on head',
    'Dark mottled pattern on body',
    'Large mouth without barbels',
    'Deep keel on belly',
    'Gray-brown with dark blotches'
  ],
  keyFeature: 'Enormous head with low-set eyes and dark mottled body pattern',
  habitat: ['Ohio River', 'creeks', 'rivers', 'streams', 'tributaries'],
  size: '30-48 inches typical, can exceed 100 pounds',
  funFact: 'Bighead carp are filter feeders that can consume 20% of their body weight in plankton daily, directly competing with native fish. They are one of the biggest threats to Great Lakes ecosystems.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Hypophthalmichthys%20nobilis' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Hypophthalmichthys+nobilis' }
  ],
  colors: { primary: '#5A6060', secondary: '#6A7070', belly: '#B0B8B0', fin: '#4A5050' },
};

export const featureOptions: FeatureOption = {
  correct: 'Enormous head with low-set eyes and dark mottled body pattern',
  wrong: ['Plain silver body with low-set eyes', 'Golden body with barbels', 'Elongated body with dark-edged scales'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Enormous head with low-set eyes and dark mottled body pattern.', answer: true, fishId: 'bighead_carp', showImage: true },
  { statement: 'This fish can be identified by: Very large head relative to body.', answer: true, fishId: 'bighead_carp', showImage: true },
  { statement: 'This fish can be identified by: Eyes set low on head.', answer: true, fishId: 'bighead_carp', showImage: true },
  { statement: 'You might find this fish in ohio river system.', answer: true, fishId: 'bighead_carp', showImage: true }
];

export default bighead_carp;

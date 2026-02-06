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
  habitat: 'Ohio River system; invasive Asian carp',
  size: '30-48 inches typical, can exceed 100 pounds',
  funFact: 'Bighead carp are filter feeders that can consume 20% of their body weight in plankton daily, directly competing with native fish. They are one of the biggest threats to Great Lakes ecosystems.',
  refs: [
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
  { statement: 'Bighead carp can consume 20% of their body weight in plankton daily.', answer: true, fishId: 'bighead_carp' }
];

export default bighead_carp;

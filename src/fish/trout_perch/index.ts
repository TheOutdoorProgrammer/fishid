import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const trout_perch: Fish = {
  id: 'trout_perch',
  name: 'Trout-Perch',
  scientific: 'Percopsis omiscomaycus',
  image: [
    '/img/fish/trout_perch/1.jpg',
    '/img/fish/trout_perch/2.jpg'
  ],
  features: [
    'Small, semi-translucent body',
    'Adipose fin present (trout-like feature)',
    'Rows of dark spots on back and sides',
    'Spiny rays in fins (perch-like feature)',
    'Large head relative to body',
    'Silver-olive coloring'
  ],
  keyFeature: 'Small fish combining trout features (adipose fin) and perch features (spiny fins)',
  habitat: 'Lake Erie and large rivers; deep sandy or gravelly bottoms',
  size: '3-5 inches typical',
  funFact: 'Trout-perch are named because they combine features of both trout (adipose fin) and perch (spiny fin rays). They are mostly nocturnal and are seldom seen by anglers.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Percopsis%20omiscomaycus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Percopsis+omiscomaycus' }
  ],
  colors: { primary: '#889078', secondary: '#A0A890', belly: '#C8D0C0', fin: '#788068' },
};

export const featureOptions: FeatureOption = {
  correct: 'Small fish combining trout features (adipose fin) and perch features (spiny fins)',
  wrong: ['Snake-like body', 'Circular sucker mouth', 'Wide flat head with fan pectoral fins'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Trout-perch have both an adipose fin and spiny fin rays.', answer: true, fishId: 'trout_perch' }
];

export default trout_perch;

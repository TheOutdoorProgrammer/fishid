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
  habitat: ['Great Lakes (including Lake Erie)', 'large rivers', 'deep sandy or gravelly bottoms'],
  size: '3-5 inches typical',
  funFact: 'Trout-perch are named because they combine features of both trout (adipose fin) and perch (spiny fin rays). They are mostly nocturnal and are seldom seen by anglers.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
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
  { statement: 'A key ID clue for this fish is: Small fish combining trout features (adipose fin) and perch features (spiny fins).', answer: true, fishId: 'trout_perch' },
  { statement: 'This fish can be identified by: Small, semi-translucent body.', answer: true, fishId: 'trout_perch' },
  { statement: 'This fish can be identified by: Adipose fin present (trout-like feature).', answer: true, fishId: 'trout_perch' },
  { statement: 'You might find this fish in great lakes (including lake erie).', answer: true, fishId: 'trout_perch' }
];

export default trout_perch;

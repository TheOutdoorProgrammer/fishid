import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const skipjack_herring: Fish = {
  id: 'skipjack_herring',
  name: 'Skipjack Herring',
  scientific: 'Alosa chrysochloris',
  image: [
    '/img/fish/skipjack_herring/1.jpg',
    '/img/fish/skipjack_herring/2.jpg'
  ],
  features: [
    'Elongated, compressed silver body',
    'Bluish-green back with brilliant silver sides',
    'Large mouth with projecting lower jaw',
    'No dark spot behind gill cover',
    'Deeply forked tail',
    'Serrated belly (scutes like shad)'
  ],
  keyFeature: 'Silver herring with projecting lower jaw and no shoulder spot',
  habitat: 'Ohio River and large tributaries; open water near surface',
  size: '12-16 inches typical',
  funFact: 'Skipjack herring are named for their habit of leaping out of the water while feeding. They are excellent cut bait for catching catfish and are found mainly in the Ohio River.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Alosa%20chrysochloris' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Alosa+chrysochloris' }
  ],
  colors: { primary: '#6080A0', secondary: '#78A0B8', belly: '#D8E0E8', fin: '#507088' },
};

export const featureOptions: FeatureOption = {
  correct: 'Silver herring with projecting lower jaw and no shoulder spot',
  wrong: ['Deep body with trailing dorsal filament', 'Single dark spot behind gill with serrated belly', 'Large eye with dorsal ahead of anal fin'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Skipjack herring are named for their habit of leaping from the water.', answer: true, fishId: 'skipjack_herring' }
];

export default skipjack_herring;

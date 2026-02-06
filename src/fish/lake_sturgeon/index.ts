import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const lake_sturgeon: Fish = {
  id: 'lake_sturgeon',
  name: 'Lake Sturgeon',
  scientific: 'Acipenser fulvescens',
  image: [
    '/img/fish/lake_sturgeon/1.jpg',
    '/img/fish/lake_sturgeon/2.jpg'
  ],
  features: [
    'Large, torpedo-shaped body with bony plates (scutes)',
    'Four barbels in front of mouth on underside of snout',
    'Shark-like heterocercal tail (upper lobe longer)',
    'Pointed snout (conical)',
    'Gray to olive body',
    'Five rows of bony plates along body'
  ],
  keyFeature: 'Large armored fish with bony plates, four barbels, and shark-like tail',
  habitat: 'Lake Erie and large rivers; historically abundant, now rare',
  size: '36-60 inches typical, can reach 6+ feet',
  funFact: 'Lake sturgeon can live over 150 years and reach over 200 pounds. They were once so abundant in Lake Erie that they were considered trash fish and burned as fuel! Now they are endangered.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Acipenser%20fulvescens' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Acipenser+fulvescens' }
  ],
  colors: { primary: '#5A6058', secondary: '#6A7068', belly: '#B0B8A8', fin: '#4A5048' },
};

export const featureOptions: FeatureOption = {
  correct: 'Large armored fish with bony plates, four barbels, and shark-like tail',
  wrong: ['Paddle-shaped rostrum', 'Diamond-shaped ganoid scales', 'Snake-like body with continuous fin'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Lake sturgeon can live over 150 years.', answer: true, fishId: 'lake_sturgeon' }
];

export default lake_sturgeon;

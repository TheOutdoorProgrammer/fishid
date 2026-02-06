import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const dusky_darter: Fish = {
  id: 'dusky_darter',
  name: 'Dusky Darter',
  scientific: 'Percina sciera',
  image: [
    '/img/fish/dusky_darter/1.jpg',
    '/img/fish/dusky_darter/2.jpg'
  ],
  features: [
    'Row of fused or connected dark blotches along side',
    'Dusky olive body',
    'Blotches often form a continuous dark band',
    'Two dorsal fins',
    'Moderately robust build',
    'Dark tearstain mark under eye'
  ],
  keyFeature: 'Olive darter with connected dark blotches forming band and tear mark under eye',
  habitat: ['Rocky pools', 'gentle riffles of medium rivers'],
  size: '3-4 inches typical',
  funFact: 'Dusky darters get their name from their dull, dusky coloration. They are most common in the Ohio River drainage and prefer slightly larger streams than many darters.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Percina%20sciera' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Percina+sciera' }
  ],
  colors: { primary: '#5A5838', secondary: '#706848', belly: '#B8A888', fin: '#4A4830' },
};

export const featureOptions: FeatureOption = {
  correct: 'Olive darter with connected dark blotches forming band and tear mark',
  wrong: ['Separate oval blotches', 'Blue and orange vertical bars', 'Golden body with broad dark bars'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Dusky darters are brightly colored like rainbow darters.', answer: false, fishId: 'dusky_darter' }
];

export default dusky_darter;

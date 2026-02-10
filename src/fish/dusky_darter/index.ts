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
  habitat: ['creeks', 'rivers', 'rocky pools', 'streams'],
  size: '3-4 inches typical',
  funFact: 'Dusky darters get their name from their dull, dusky coloration. They are most common in the Ohio River drainage and prefer slightly larger streams than many darters.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
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
  { statement: 'A key ID clue for this fish is: Olive darter with connected dark blotches forming band and tear mark under eye.', answer: true, fishId: 'dusky_darter', showImage: true },
  { statement: 'This fish can be identified by: Row of fused or connected dark blotches along side.', answer: true, fishId: 'dusky_darter', showImage: true },
  { statement: 'This fish can be identified by: Dusky olive body.', answer: true, fishId: 'dusky_darter', showImage: true },
  { statement: 'You might find this fish in rocky pools.', answer: true, fishId: 'dusky_darter', showImage: true }
];

export default dusky_darter;

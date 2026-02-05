import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const logperch: Fish = {
  id: 'logperch',
  name: 'Logperch',
  scientific: 'Percina caprodes',
  image: [],
  features: [
    'Largest darter commonly found in Ohio (up to 7 inches)',
    'Alternating long and short vertical bars on sides',
    'Pig-like snout (conical, used for flipping rocks)',
    'Olive-yellow body',
    'Tiger-like barring pattern',
    'Two dorsal fins'
  ],
  keyFeature: 'Large darter with pig-like snout and alternating long/short vertical bars',
  habitat: 'Lakes, rivers, and streams with gravel or sandy bottoms',
  size: '4-6 inches typical',
  funFact: 'Logperch use their distinctive conical snout to flip over small rocks and pebbles to find insect larvae underneath. Their alternating bar pattern is unique among darters.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Percina%20caprodes' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Percina+caprodes' }
  ],
  colors: { primary: '#8B8040', secondary: '#A89858', belly: '#D0C890', fin: '#7A7038' },
};

export const featureOptions: FeatureOption = {
  correct: 'Large darter with pig-like snout and alternating long/short vertical bars',
  wrong: ['Row of dark oval blotches', 'W/X-shaped dark markings', 'Blue and orange vertical bars'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Logperch use their pig-like snout to flip over pebbles.', answer: true, fishId: 'logperch' }
];

export default logperch;

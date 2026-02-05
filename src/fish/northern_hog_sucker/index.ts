import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const northern_hog_sucker: Fish = {
  id: 'northern_hog_sucker',
  name: 'Northern Hog Sucker',
  scientific: 'Hypentelium nigricans',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Hypentelium_nigricans.jpg/500px-Hypentelium_nigricans.jpg',
  quizImage: '',
  features: [
    'Large, concave head (squared-off/boxy look)',
    'Dark saddle marks across back (3-4 saddles)',
    'Widely spaced eyes on top of head',
    'Large fleshy lips pointing downward',
    'Brown-olive with mottled/banded pattern',
    'Often rests on stream bottom with pectoral fins spread'
  ],
  keyFeature: 'Boxy concave head with dark saddle marks and widely spaced eyes',
  habitat: 'Clear, rocky riffles of streams and rivers',
  size: '8-14 inches typical',
  funFact: 'Northern hog suckers use their large fleshy lips to vacuum invertebrates from between rocks. Their boxy head shape is unlike any other Ohio fish and makes them easy to identify.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Hypentelium%20nigricans' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Hypentelium+nigricans' }
  ],
  colors: { primary: '#6B5838', secondary: '#8B7858', belly: '#C8B890', fin: '#5A4830' },
};

export const featureOptions: FeatureOption = {
  correct: 'Boxy concave head with dark saddle marks and widely spaced eyes',
  wrong: ['Cylindrical body with smooth head', 'Deep silver body with long dorsal ray', 'Parallel rows of dark spots on sides'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Northern hog sucker have a flat, concave head with widely spaced eyes.', answer: true, fishId: 'northern_hog_sucker' }
];

export default northern_hog_sucker;

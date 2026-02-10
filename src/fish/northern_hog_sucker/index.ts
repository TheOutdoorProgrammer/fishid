import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const northern_hog_sucker: Fish = {
  id: 'northern_hog_sucker',
  name: 'Northern Hog Sucker',
  scientific: 'Hypentelium nigricans',
  image: [
    '/img/fish/northern_hog_sucker/1.jpg',
    '/img/fish/northern_hog_sucker/2.jpg'
  ],
  features: [
    'Large, concave head (squared-off/boxy look)',
    'Dark saddle marks across back (3-4 saddles)',
    'Widely spaced eyes on top of head',
    'Large fleshy lips pointing downward',
    'Brown-olive with mottled/banded pattern',
    'Often rests on stream bottom with pectoral fins spread'
  ],
  keyFeature: 'Boxy concave head with dark saddle marks and widely spaced eyes',
  habitat: ['creeks', 'rivers', 'rocky rivers', 'rocky streams', 'streams'],
  size: '8-14 inches typical',
  funFact: 'Northern hog suckers use their large fleshy lips to vacuum invertebrates from between rocks. Their boxy head shape is unlike any other Ohio fish and makes them easy to identify.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
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
  { statement: 'A key ID clue for this fish is: Boxy concave head with dark saddle marks and widely spaced eyes.', answer: true, fishId: 'northern_hog_sucker', showImage: true },
  { statement: 'This fish can be identified by: Large, concave head (squared-off/boxy look).', answer: true, fishId: 'northern_hog_sucker', showImage: true },
  { statement: 'This fish can be identified by: Dark saddle marks across back (3-4 saddles).', answer: true, fishId: 'northern_hog_sucker', showImage: true },
  { statement: 'You might find this fish in clear, rocky riffles of streams and rivers.', answer: true, fishId: 'northern_hog_sucker', showImage: true }
];

export default northern_hog_sucker;

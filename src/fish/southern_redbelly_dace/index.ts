import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const southern_redbelly_dace: Fish = {
  id: 'southern_redbelly_dace',
  name: 'Southern Redbelly Dace',
  scientific: 'Chrosomus erythrogaster',
  image: [
    '/img/fish/southern_redbelly_dace/1.jpg',
    '/img/fish/southern_redbelly_dace/2.jpg'
  ],
  features: [
    'Very small with two dark lateral stripes',
    'Bright red belly (especially breeding males)',
    'Yellow stripe between the two dark lateral bands',
    'Very small scales (almost microscopic)',
    'Rounded fins',
    'Breeding males brilliantly colored red and yellow'
  ],
  keyFeature: 'Tiny minnow with two dark stripes and brilliant red belly',
  habitat: ['cold streams', 'creeks', 'rivers', 'springs', 'streams'],
  size: '2-3 inches typical',
  funFact: 'Southern redbelly dace are one of Ohio\'s most beautiful small fish. Breeding males have electric red bellies and bright yellow flanks that rival tropical fish.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Chrosomus%20erythrogaster' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Chrosomus+erythrogaster' }
  ],
  colors: { primary: '#5A5030', secondary: '#706840', belly: '#D03020', fin: '#4A4028' },
};

export const featureOptions: FeatureOption = {
  correct: 'Tiny minnow with two dark stripes and brilliant red belly',
  wrong: ['Bold single dark stripe', 'Long snout overhanging mouth', 'Large upturned mouth'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Tiny minnow with two dark stripes and brilliant red belly.', answer: true, fishId: 'southern_redbelly_dace', showImage: true },
  { statement: 'This fish can be identified by: Very small with two dark lateral stripes.', answer: true, fishId: 'southern_redbelly_dace', showImage: true },
  { statement: 'This fish can be identified by: Bright red belly (especially breeding males).', answer: true, fishId: 'southern_redbelly_dace', showImage: true },
  { statement: 'You might find this fish in small headwater streams with cool.', answer: true, fishId: 'southern_redbelly_dace', showImage: true }
];

export default southern_redbelly_dace;

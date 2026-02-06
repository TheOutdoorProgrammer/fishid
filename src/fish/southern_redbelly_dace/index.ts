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
  habitat: ['Small headwater streams with cool', 'spring-fed water'],
  size: '2-3 inches typical',
  funFact: 'Southern redbelly dace are one of Ohio\'s most beautiful small fish. Breeding males have electric red bellies and bright yellow flanks that rival tropical fish.',
  refs: [
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
  { statement: 'Southern redbelly dace have bright red bellies during breeding.', answer: true, fishId: 'southern_redbelly_dace' }
];

export default southern_redbelly_dace;

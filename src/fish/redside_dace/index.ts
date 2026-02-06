import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const redside_dace: Fish = {
  id: 'redside_dace',
  name: 'Redside Dace',
  scientific: 'Clinostomus elongatus',
  image: [
    '/img/fish/redside_dace/1.jpg',
    '/img/fish/redside_dace/2.jpg'
  ],
  features: [
    'Elongated, streamlined body',
    'Vivid red stripe along side (breeding males)',
    'Large upturned mouth',
    'Olive to gold body',
    'Large eye',
    'Very large mouth for a minnow (extending past eye)'
  ],
  keyFeature: 'Elongated minnow with large upturned mouth and vivid red side stripe',
  habitat: ['Cool', 'clear headwater streams with overhanging vegetation'],
  size: '3-5 inches typical',
  funFact: 'Redside dace are aerial feeders that leap out of the water to catch insects! Their large mouth is adapted for surface and airborne feeding. They are threatened in Ohio.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Clinostomus%20elongatus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Clinostomus+elongatus' }
  ],
  colors: { primary: '#6B7050', secondary: '#808868', belly: '#C8C0A0', fin: '#5A6048' },
};

export const featureOptions: FeatureOption = {
  correct: 'Elongated minnow with large upturned mouth and vivid red side stripe',
  wrong: ['Two dark stripes with red belly', 'Bold dark stripe with tiny barbel', 'Translucent body with silver head chambers'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Redside dace leap out of the water to catch insects.', answer: true, fishId: 'redside_dace' }
];

export default redside_dace;

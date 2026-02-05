import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const longear_sunfish: Fish = {
  id: 'longear_sunfish',
  name: 'Longear Sunfish',
  scientific: 'Lepomis megalotis',
  image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Lepomis_megalotis_UMFS_2015.JPG',
  quizImage: '',
  features: [
    'Very long, flexible ear flap (opercular flap)',
    'Bright orange-red breast and belly',
    'Blue-green wavy lines on face',
    'Olive to rusty-orange body',
    'Ear flap bordered by white or light edge',
    'Small mouth'
  ],
  keyFeature: 'Extremely long ear flap with white border and bright orange belly',
  habitat: 'Clear streams and small rivers over gravel or rock',
  size: '4-7 inches typical',
  funFact: 'Longear sunfish have the longest ear flaps of any sunfish species. Males become brilliantly colored during spawning season with vivid orange and blue.',
  refs: [
    { label: 'Missouri Dept. of Conservation field guide', url: 'https://mdc.mo.gov/discover-nature/field-guide/longear-sunfish' },
    { label: 'Outdoor Alabama species page', url: 'https://www.outdooralabama.com/bream/longear-sunfish' },
    { label: 'Texas Parks & Wildlife species account', url: 'https://tpwd.texas.gov/huntwild/wild/species/longearsunfish/' }
  ],
  colors: { primary: '#8B5A20', secondary: '#A87030', belly: '#E87020', fin: '#6B4518' },
};

export const featureOptions: FeatureOption = {
  correct: 'Extremely long ear flap with white border and bright orange belly',
  wrong: ['Short ear flap with red spot at tip', 'Dark ear flap with no border marking', 'Large mouth with blue-green face streaks'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Longear sunfish have the longest ear flaps of any sunfish.', answer: true, fishId: 'longear_sunfish' }
];

export default longear_sunfish;

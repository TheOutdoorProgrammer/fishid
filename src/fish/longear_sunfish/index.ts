import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const longear_sunfish: Fish = {
  id: 'longear_sunfish',
  name: 'Longear Sunfish',
  scientific: 'Lepomis megalotis',
  image: [
    '/img/fish/longear_sunfish/1.jpg',
    '/img/fish/longear_sunfish/2.jpg'
  ],
  features: [
    'Very long, flexible ear flap (opercular flap)',
    'Bright orange-red breast and belly',
    'Blue-green wavy lines on face',
    'Olive to rusty-orange body',
    'Ear flap bordered by white or light edge',
    'Small mouth'
  ],
  keyFeature: 'Extremely long ear flap with white border and bright orange belly',
  habitat: ['Clear streams and small rivers over gravel or rock', 'clear streams and rivers', 'riffles, runs, and pools'],
  size: '4-7 inches typical',
  funFact: 'Longear sunfish have the longest ear flaps of any sunfish species. Males become brilliantly colored during spawning season with vivid orange and blue.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
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
  { statement: 'A key ID clue for this fish is: Extremely long ear flap with white border and bright orange belly.', answer: true, fishId: 'longear_sunfish' },
  { statement: 'This fish can be identified by: Very long, flexible ear flap (opercular flap).', answer: true, fishId: 'longear_sunfish' },
  { statement: 'This fish can be identified by: Bright orange-red breast and belly.', answer: true, fishId: 'longear_sunfish' },
  { statement: 'You might find this fish in clear streams and small rivers over gravel or rock.', answer: true, fishId: 'longear_sunfish' }
];

export default longear_sunfish;

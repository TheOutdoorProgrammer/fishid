import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const pumpkinseed: Fish = {
  id: 'pumpkinseed',
  name: 'Pumpkinseed',
  scientific: 'Lepomis gibbosus',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lepomis_gibbosus_PAQ.jpg/500px-Lepomis_gibbosus_PAQ.jpg',
  quizImage: '',
  features: [
    'Deep, compressed body with vibrant colors',
    'Wavy blue and orange lines on cheeks',
    'Bright red or orange spot on ear flap tip',
    'Olive to gold body with orange/blue speckles',
    'Orange belly and breast',
    'Small mouth, not extending past front of eye'
  ],
  keyFeature: 'Colorful sunfish with red/orange spot on ear flap and wavy facial lines',
  habitat: 'Clear ponds and lakes with vegetation, slow streams',
  size: '5-8 inches typical',
  funFact: 'Pumpkinseed are arguably the most colorful freshwater fish in Ohio. The bright red spot on their ear flap is the easiest way to tell them from bluegill.',
  refs: [
    { label: 'DFO Canada species profile', url: 'https://www.dfo-mpo.gc.ca/species-especes/profiles-profils/pumpkinseed-crapetsoleil-eng.html' },
    { label: 'Illinois DNR Wild About Fishes', url: 'https://dnr.illinois.gov/education/wildaboutpages/wildaboutfishes/wafsunfish/wafpumpkinseed.html' },
    { label: 'Wisconsin DNR species overview (PDF)', url: 'https://dnr.wisconsin.gov/sites/default/files/topic/Fishing/Species_pumpkinseed.pdf' }
  ],
  colors: { primary: '#7B8530', secondary: '#A0A848', belly: '#E8A030', fin: '#5A6828' },
};

export const featureOptions: FeatureOption = {
  correct: 'Colorful sunfish with red/orange spot on ear flap and wavy facial lines',
  wrong: ['All-dark ear flap with no markings', 'Extremely long flexible ear flap', 'Large mouth extending past eye'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Pumpkinseed have a bright red or orange spot on the tip of their ear flap.', answer: true, fishId: 'pumpkinseed' }
];

export default pumpkinseed;

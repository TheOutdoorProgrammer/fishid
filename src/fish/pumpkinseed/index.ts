import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const pumpkinseed: Fish = {
  id: 'pumpkinseed',
  name: 'Pumpkinseed',
  scientific: 'Lepomis gibbosus',
  image: [
    '/img/fish/pumpkinseed/1.jpg',
    '/img/fish/pumpkinseed/2.jpg'
  ],
  features: [
    'Deep, compressed body with vibrant colors',
    'Wavy blue and orange lines on cheeks',
    'Bright red or orange spot on ear flap tip',
    'Olive to gold body with orange/blue speckles',
    'Orange belly and breast',
    'Small mouth, not extending past front of eye'
  ],
  keyFeature: 'Colorful sunfish with red/orange spot on ear flap and wavy facial lines',
  habitat: ['weedy bays and backwaters (Ohio lakes)', 'Ohio creeks and small rivers', 'Ohio farm ponds and small lakes', 'Ohio inland lakes and reservoirs', 'Clear ponds'],
  size: '5-8 inches typical',
  funFact: 'Pumpkinseed are arguably the most colorful freshwater fish in Ohio. The bright red spot on their ear flap is the easiest way to tell them from bluegill.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
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
  { statement: 'A key ID clue for this fish is: Colorful sunfish with red/orange spot on ear flap and wavy facial lines.', answer: true, fishId: 'pumpkinseed' },
  { statement: 'This fish can be identified by: Deep, compressed body with vibrant colors.', answer: true, fishId: 'pumpkinseed' },
  { statement: 'This fish can be identified by: Wavy blue and orange lines on cheeks.', answer: true, fishId: 'pumpkinseed' },
  { statement: 'You might find this fish in clear ponds.', answer: true, fishId: 'pumpkinseed' }
];

export default pumpkinseed;

import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const yellow_bullhead: Fish = {
  id: 'yellow_bullhead',
  name: 'Yellow Bullhead',
  scientific: 'Ameiurus natalis',
  image: [],
  features: [
    'Yellowish-brown to olive body',
    'White or cream-colored chin barbels',
    'Rounded tail (not forked)',
    'No spots on body',
    'Rear edge of pectoral spine has small teeth (serrated)',
    'Adipose fin present'
  ],
  keyFeature: 'Yellow-brown bullhead with distinctive white chin barbels',
  habitat: 'Ponds, lakes, slow streams with muddy bottoms and vegetation',
  size: '8-14 inches typical',
  funFact: 'Yellow bullhead are the most common bullhead in Ohio. The easiest way to tell bullheads apart is by their chin barbels: yellow bullheads have white or cream barbels.',
  refs: [
    { label: 'USGS NAS factsheet', url: 'https://nas.er.usgs.gov/queries/factsheet.aspx?SpeciesID=733' },
    { label: 'Illinois DNR Wild About Fishes', url: 'https://dnr.illinois.gov/education/wildaboutpages/wildaboutfishes/wafbullhead/wafyellowbullhead.html' },
    { label: 'Connecticut DEEP freshwater fishes', url: 'https://portal.ct.gov/deep/fishing/freshwater/freshwater-fishes-of-connecticut/yellow-bullhead' },
    { label: 'Mississippi MDWFP Fish ID Guide', url: 'https://www.mdwfp.com/fishing-boating/fish-id-guide/yellow-bullhead' }
  ],
  colors: { primary: '#8B7830', secondary: '#A89040', belly: '#D8C878', fin: '#7A6828' },
};

export const featureOptions: FeatureOption = {
  correct: 'Yellow-brown bullhead with distinctive white chin barbels',
  wrong: ['Dark chin barbels with mottled body', 'Deeply forked tail with spots', 'Blue-gray body with no barbels'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Yellow bullhead have white chin barbels.', answer: true, fishId: 'yellow_bullhead' }
];

export default yellow_bullhead;

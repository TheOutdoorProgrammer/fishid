import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const brown_bullhead: Fish = {
  id: 'brown_bullhead',
  name: 'Brown Bullhead',
  scientific: 'Ameiurus nebulosus',
  image: [
    '/img/fish/brown_bullhead/1.jpg',
    '/img/fish/brown_bullhead/2.jpg'
  ],
  features: [
    'Dark brown to olive body, often mottled',
    'Dark-colored chin barbels (brown or gray)',
    'Rounded tail',
    'Mottled pattern on sides',
    'Rear edge of pectoral spine with sharp barbs',
    'Chin barbels dark, not white'
  ],
  keyFeature: 'Brown mottled bullhead with dark (not white) chin barbels',
  habitat: 'Ponds, lakes, slow streams; tolerates low oxygen',
  size: '8-14 inches typical',
  funFact: 'Brown bullhead can survive in incredibly harsh conditions including low oxygen and high temperatures. They are the bullhead species most often found in Lake Erie.',
  refs: [
    { label: 'USGS NAS factsheet', url: 'https://nas.er.usgs.gov/queries/factsheet.aspx?SpeciesID=734' },
    { label: 'Connecticut DEEP freshwater fishes', url: 'https://portal.ct.gov/deep/fishing/freshwater/freshwater-fishes-of-connecticut/brown-bullhead' },
    { label: 'Missouri Dept. of Conservation field guide', url: 'https://mdc.mo.gov/discover-nature/field-guide/brown-bullhead' }
  ],
  colors: { primary: '#5A4A28', secondary: '#706038', belly: '#B8A868', fin: '#4A3A20' },
};

export const featureOptions: FeatureOption = {
  correct: 'Brown mottled bullhead with dark chin barbels',
  wrong: ['White chin barbels with yellow body', 'Pale bar at tail base', 'Blue-gray body with deeply forked tail'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Brown bullhead have white chin barbels like yellow bullhead.', answer: false, fishId: 'brown_bullhead' }
];

export default brown_bullhead;

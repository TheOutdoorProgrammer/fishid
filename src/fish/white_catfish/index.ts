import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const white_catfish: Fish = {
  id: 'white_catfish',
  name: 'White Catfish',
  scientific: 'Ameiurus catus',
  image: [
    '/img/fish/white_catfish/1.jpg',
    '/img/fish/white_catfish/2.jpg'
  ],
  features: [
    'Blue-gray to white body',
    'Moderately forked tail (less forked than channel cat)',
    'White chin barbels',
    'No dark spots on body',
    'Broad, flat head',
    'Anal fin shorter than channel catfish (19-23 rays)'
  ],
  keyFeature: 'Blue-white catfish with moderately forked tail and white chin barbels',
  habitat: ['Ohio River', 'slow rivers', 'reservoirs', 'lower reaches'],
  size: '10-18 inches typical',
  funFact: 'White catfish are sometimes confused with channel catfish but lack the dark spots and have a less deeply forked tail. They are near the edge of their range in Ohio.',
  refs: [
    { label: 'Missouri Dept. of Conservation field guide', url: 'https://mdc.mo.gov/discover-nature/field-guide/white-catfish' },
    { label: 'Connecticut DEEP freshwater fishes', url: 'https://portal.ct.gov/deep/fishing/freshwater/freshwater-fishes-of-connecticut/white-catfish' },
    { label: 'USGS NAS factsheet', url: 'https://nas.er.usgs.gov/queries/factsheet.aspx?SpeciesID=729' },
    { label: 'New Jersey DEP (PDF)', url: 'https://dep.nj.gov/njfw/wp-content/uploads/njfw/White-Catfish.pdf' }
  ],
  colors: { primary: '#6A7A88', secondary: '#8090A0', belly: '#C8D0D8', fin: '#5A6A78' },
};

export const featureOptions: FeatureOption = {
  correct: 'Blue-white catfish with moderately forked tail and white chin barbels',
  wrong: ['Deeply forked tail with dark spots', 'Flat wide head with square tail', 'Mottled yellow-brown body'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'White catfish have deeply forked tails like channel catfish.', answer: false, fishId: 'white_catfish' }
];

export default white_catfish;

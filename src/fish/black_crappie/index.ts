import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const black_crappie: Fish = {
  id: 'black_crappie',
  name: 'Black Crappie',
  scientific: 'Pomoxis nigromaculatus',
  image: [
    '/img/fish/black_crappie/1.jpg',
    '/img/fish/black_crappie/2.jpg'
  ],
  features: [
    'Deep, compressed body (similar to bluegill)',
    'Silvery-green with irregular dark speckles/spots',
    '7-8 dorsal spines',
    'Spots are scattered randomly (not in bars)',
    'Large mouth for a panfish'
  ],
  keyFeature: 'Silvery body with random dark spots, 7-8 dorsal spines',
  habitat: ['Clear lakes, reservoirs with brush piles and structure'],
  size: '8-12 inches typical',
  funFact: 'Black crappie are sometimes called "papermouths" because their mouths tear easily. They\'re schooling fish - if you catch one, there are usually more!',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Fish of Ohio: Black Crappie', url: 'http://www.fishofohio.com/ohio-fish-black-crappie.htm' },
    { label: 'USGS specimen record (example)', url: 'https://nas.er.usgs.gov/queries/SpecimenViewer.aspx?SpecimenID=1406233' }
  ],
  colors: { primary: '#6B7B68', secondary: '#8B9B88', belly: '#D0D8C8', fin: '#5A6A58' },
};

export const featureOptions: FeatureOption = {
  correct: 'Silver body with random dark spots, 7-8 dorsal spines',
  wrong: ['Silver body with vertical dark bars', 'Golden body with dark vertical bars', 'Deep body with dark ear flap'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Black crappie have organized vertical bars on their sides.', answer: false, fishId: 'black_crappie' }
];

export default black_crappie;

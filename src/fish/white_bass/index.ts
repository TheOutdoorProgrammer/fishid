import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const white_bass: Fish = {
  id: 'white_bass',
  name: 'White Bass',
  scientific: 'Morone chrysops',
  image: [
    '/img/fish/white_bass/1.jpg',
    '/img/fish/white_bass/2.jpg'
  ],
  features: [
    'Silver body with dark horizontal stripes',
    'Deep, laterally compressed body',
    'Two dorsal fins (separated)',
    'Single tooth patch on tongue',
    'Stripes are thin and run lengthwise'
  ],
  keyFeature: 'Silver body with thin dark horizontal stripes',
  habitat: 'Lake Erie, large reservoirs, rivers during spawning runs',
  size: '10-15 inches typical',
  funFact: 'White bass make massive spawning runs up rivers in spring. When you find a school, you can catch them almost every cast! They\'re related to striped bass (saltwater fish).',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Fish of Ohio: White Bass', url: 'http://www.fishofohio.com/ohio-fish-white-bass.htm' },
    { label: 'USGS NAS factsheet', url: 'https://nas.er.usgs.gov/queries/factsheet.aspx?SpeciesID=779' }
  ],
  colors: { primary: '#8898A8', secondary: '#A0B0C0', belly: '#D8E0E8', fin: '#687888' },
};

export const featureOptions: FeatureOption = {
  correct: 'Silver body with thin dark horizontal stripes',
  wrong: ['Golden body with dark vertical bars', 'Green body with light spots', 'Bronze body with red eye'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'White bass have dark vertical bars on their body.', answer: false, fishId: 'white_bass' }
];

export default white_bass;

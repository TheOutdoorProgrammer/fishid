import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const black_bullhead: Fish = {
  id: 'black_bullhead',
  name: 'Black Bullhead',
  scientific: 'Ameiurus melas',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ameiurus_melas_by_Duane_Raver.png/500px-Ameiurus_melas_by_Duane_Raver.png',
  quizImage: '',
  features: [
    'Dark olive to black body',
    'Dark chin barbels (black or dark gray)',
    'Slightly notched or squared tail (not deeply forked)',
    'Pale crescent or bar at tail base',
    'No mottling (more uniform color than brown bullhead)',
    'Pectoral spine smooth (no sharp barbs)'
  ],
  keyFeature: 'Dark-bodied bullhead with pale bar at tail base and smooth pectoral spine',
  habitat: 'Ponds, lakes, ditches; extremely tolerant of poor conditions',
  size: '7-12 inches typical',
  funFact: 'Black bullhead are the hardiest of all bullheads. They can survive in water so muddy and oxygen-poor that virtually no other fish can live there.',
  refs: [
    { label: 'USGS NAS factsheet', url: 'https://nas.er.usgs.gov/queries/factsheet.aspx?SpeciesID=730' },
    { label: 'Oklahoma Department of Wildlife Conservation', url: 'https://www.wildlifedepartment.com/wildlife/field-guide/fish/black-bullhead-catfish' },
    { label: 'New York DEC SWAP species account (PDF)', url: 'https://extapps.dec.ny.gov/fs/programs/dfw/SWAP2025/Freshwater%20Fish/blackbullhead.pdf' }
  ],
  colors: { primary: '#3A3A28', secondary: '#4A4A38', belly: '#908868', fin: '#2A2A20' },
};

export const featureOptions: FeatureOption = {
  correct: 'Dark-bodied bullhead with pale bar at tail base and smooth pectoral spine',
  wrong: ['White chin barbels', 'Mottled brown body', 'Deeply forked tail with dark spots'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Black bullhead have a pale bar or crescent at the base of their tail.', answer: true, fishId: 'black_bullhead' }
];

export default black_bullhead;

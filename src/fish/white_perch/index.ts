import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const white_perch: Fish = {
  id: 'white_perch',
  name: 'White Perch',
  scientific: 'Morone americana',
  image: [
    '/img/fish/white_perch/1.jpg',
    '/img/fish/white_perch/2.jpg'
  ],
  features: [
    'Silver-green body with no distinct stripes',
    'Deep, compressed body shape',
    'Slightly forked tail',
    'No horizontal stripes (unlike white bass)',
    'Dark olive-green back fading to silver',
    'Separated dorsal fins'
  ],
  keyFeature: 'Silver body like white bass but WITHOUT horizontal stripes',
  habitat: ['Great Lakes', 'Lake Erie', 'lakes', 'reservoirs', 'tributaries'],
  size: '8-12 inches typical',
  funFact: 'White perch are actually invasive in Lake Erie, having arrived through canals from the Atlantic coast. Despite the name, they are not true perch but members of the temperate bass family.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Virginia DWR species profile', url: 'https://dwr.virginia.gov/wildlife/information/white-perch/' },
    { label: 'Wisconsin DNR species page', url: 'https://dnr.wisconsin.gov/topic/Fishing/species/whiteperch.html' },
    { label: 'USFWS ecological risk screening (PDF)', url: 'https://www.fws.gov/sites/default/files/documents/Ecological-Risk-Screening-Summary-White-Perch.pdf' },
    { label: 'NY Sea Grant factsheet (PDF)', url: 'https://www.seagrant.sunysb.edu/olei/Factsheets/White%20Perch.pdf' }
  ],
  colors: { primary: '#7A8A78', secondary: '#90A090', belly: '#D0D8D0', fin: '#607060' },
};

export const featureOptions: FeatureOption = {
  correct: 'Silver body like white bass but WITHOUT horizontal stripes',
  wrong: ['Distinct dark horizontal stripes', 'Golden body with vertical bars', 'Dark green body with lateral band'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Silver body like white bass but WITHOUT horizontal stripes.', answer: true, fishId: 'white_perch' },
  { statement: 'This fish can be identified by: Silver-green body with no distinct stripes.', answer: true, fishId: 'white_perch' },
  { statement: 'This fish can be identified by: Deep, compressed body shape.', answer: true, fishId: 'white_perch' },
  { statement: 'You might find this fish in great lakes (including lake erie).', answer: true, fishId: 'white_perch' }
];

export default white_perch;

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
  habitat: ['Lake Erie and tributaries; invasive species'],
  size: '8-12 inches typical',
  funFact: 'White perch are actually invasive in Lake Erie, having arrived through canals from the Atlantic coast. Despite the name, they are not true perch but members of the temperate bass family.',
  refs: [
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
  { statement: 'White perch are native to Lake Erie.', answer: false, fishId: 'white_perch' }
];

export default white_perch;

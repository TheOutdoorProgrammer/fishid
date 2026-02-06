import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const smallmouth_bass: Fish = {
  id: 'smallmouth_bass',
  name: 'Smallmouth Bass',
  scientific: 'Micropterus dolomieu',
  image: [
    '/img/fish/smallmouth_bass/1.jpg',
    '/img/fish/smallmouth_bass/2.jpg'
  ],
  features: [
    'Bronze to brown body color',
    'Vertical dark bars (may fade)',
    'Red/orange eye',
    'Jaw does NOT extend past the eye',
    'Connected dorsal fin with shallow notch'
  ],
  keyFeature: 'Bronze color, jaw ends at the eye, red eye',
  habitat: ['Rocky lakes, clear streams and rivers, Lake Erie'],
  size: '12-18 inches typical',
  funFact: 'Pound for pound, smallmouth bass are considered the hardest-fighting freshwater fish. They\'re nicknamed "bronzebacks" for their color.',
  refs: [
    { label: 'Wikipedia: Smallmouth bass', url: 'https://en.wikipedia.org/wiki/Smallmouth_bass' },
    { label: 'DFO Canada species profile', url: 'https://www.dfo-mpo.gc.ca/species-especes/profiles-profils/smallmouthbass-achiganpetitebouche-eng.html' },
    { label: 'USFWS species profile', url: 'https://www.fws.gov/species/smallmouth-bass-micropterus-dolomieui' }
  ],
  colors: { primary: '#8B6914', secondary: '#A07828', belly: '#D4C090', fin: '#6B5510' },
};

export const featureOptions: FeatureOption = {
  correct: 'Bronze color with jaw ending at the eye',
  wrong: ['Jaw extending well past the eye', 'Dark horizontal lateral stripe', 'Forked tail with barbels'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Smallmouth bass have a jaw that extends past the eye.', answer: false, fishId: 'smallmouth_bass' }
];

export default smallmouth_bass;

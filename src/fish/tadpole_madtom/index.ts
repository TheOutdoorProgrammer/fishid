import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const tadpole_madtom: Fish = {
  id: 'tadpole_madtom',
  name: 'Tadpole Madtom',
  scientific: 'Noturus gyrinus',
  image: [
    '/img/fish/tadpole_madtom/1.jpg',
    '/img/fish/tadpole_madtom/2.jpg'
  ],
  features: [
    'Tiny, dark-colored catfish',
    'Chubby tadpole-like body shape',
    'Adipose fin broadly connected to rounded tail',
    'Uniform dark brown to black color',
    'Very small size (under 4 inches)',
    'Pectoral spines without strong barbs'
  ],
  keyFeature: 'Tiny dark catfish with chubby tadpole shape and connected adipose fin',
  habitat: ['Muddy-bottomed ponds', 'marshes', 'slow streams with debris'],
  size: '2-4 inches typical',
  funFact: 'Tadpole madtoms are one of the smallest catfish in Ohio. They get their name from their resemblance to a tadpole and are mostly nocturnal.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Missouri Dept. of Conservation field guide', url: 'https://mdc.mo.gov/discover-nature/field-guide/tadpole-madtom' },
    { label: 'Illinois DNR Wild About Fishes', url: 'https://dnr.illinois.gov/education/wildaboutpages/wildaboutfishes/wafbullhead/waftadpolemadtom.html' },
    { label: 'Florida Museum fish account', url: 'https://www.floridamuseum.ufl.edu/fish/catfish/ictaluridae/tadpole-madtom/' }
  ],
  colors: { primary: '#4A4030', secondary: '#5A5040', belly: '#8A8068', fin: '#3A3028' },
};

export const featureOptions: FeatureOption = {
  correct: 'Tiny dark catfish with chubby tadpole shape',
  wrong: ['Large yellow-brown catfish', 'Four dark saddle markings', 'Deeply forked tail'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Tiny dark catfish with chubby tadpole shape and connected adipose fin.', answer: true, fishId: 'tadpole_madtom' },
  { statement: 'This fish can be identified by: Tiny, dark-colored catfish.', answer: true, fishId: 'tadpole_madtom' },
  { statement: 'This fish can be identified by: Chubby tadpole-like body shape.', answer: true, fishId: 'tadpole_madtom' },
  { statement: 'You might find this fish in muddy-bottomed ponds.', answer: true, fishId: 'tadpole_madtom' }
];

export default tadpole_madtom;

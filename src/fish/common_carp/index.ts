import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const common_carp: Fish = {
  id: 'common_carp',
  name: 'Common Carp',
  scientific: 'Cyprinus carpio',
  image: [
    '/img/fish/common_carp/1.jpg',
    '/img/fish/common_carp/2.jpg'
  ],
  features: [
    'Large, thick body with big scales',
    'Golden-bronze to olive color',
    'Two small barbels on each side of mouth',
    'Large, rubbery lips',
    'Forked tail',
    'Long dorsal fin with 15-20+ rays'
  ],
  keyFeature: 'Large golden-bronze body with big scales and mouth barbels',
  habitat: ['creeks', 'lakes', 'ponds', 'reservoirs', 'rivers'],
  size: '18-30 inches typical, can exceed 40',
  funFact: 'Carp are actually an invasive species from Asia, introduced to the US in the 1800s. In Europe, they\'re a prized sport fish. A large carp in Lake Erie can weigh over 30 pounds!',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'USGS NAS factsheet', url: 'https://nas.er.usgs.gov/queries/factsheet.aspx?speciesID=4' },
    { label: 'FishBase summary', url: 'https://fishbase.se/summary/Cyprinus-carpio.html' },
    { label: 'USFWS: Common carp', url: 'https://www.fws.gov/media/common-carp-3' }
  ],
  colors: { primary: '#8B7530', secondary: '#A89040', belly: '#D8C878', fin: '#7A6428' },
};

export const featureOptions: FeatureOption = {
  correct: 'Large golden-bronze body with big scales and barbels',
  wrong: ['Blue-gray body with forked tail', 'Elongated body with duck-bill snout', 'Silver body with dark spots'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Large golden-bronze body with big scales and mouth barbels.', answer: true, fishId: 'common_carp' },
  { statement: 'This fish can be identified by: Large, thick body with big scales.', answer: true, fishId: 'common_carp' },
  { statement: 'This fish can be identified by: Golden-bronze to olive color.', answer: true, fishId: 'common_carp' },
  { statement: 'You might find this fish in lakes.', answer: true, fishId: 'common_carp' }
];

export default common_carp;

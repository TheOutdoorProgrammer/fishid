import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const channel_catfish: Fish = {
  id: 'channel_catfish',
  name: 'Channel Catfish',
  scientific: 'Ictalurus punctatus',
  image: [
    '/img/fish/channel_catfish/1.jpg',
    '/img/fish/channel_catfish/2.jpg'
  ],
  features: [
    'Blue-gray to olive body',
    'Scattered dark spots (especially when young)',
    '8 barbels (whiskers) around mouth',
    'Deeply forked tail',
    'Adipose fin (small fin between dorsal and tail)',
    'Spine in dorsal and pectoral fins'
  ],
  keyFeature: 'Forked tail with barbels and dark spots',
  habitat: ['creeks', 'lakes', 'reservoirs', 'rivers'],
  size: '15-24 inches typical, can exceed 30',
  funFact: 'Channel catfish have about 100,000 taste buds covering their entire body! They can literally taste with their skin.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Ohio State AEL: Reservoir channel catfish project', url: 'https://ael.osu.edu/research/projects/reservoir-channel-catfish-assessment-stocking-and-ecology' },
    { label: 'ODNR Fish Ohio program', url: 'https://ohiodnr.gov/buy-and-apply/hunting-fishing-boating/fishing-resources/fishohio-program' }
  ],
  colors: { primary: '#5A6B78', secondary: '#7A8B98', belly: '#C8D0D8', fin: '#4A5A68' },
};

export const featureOptions: FeatureOption = {
  correct: 'Forked tail with whisker barbels and dark spots',
  wrong: ['Square tail with mottled coloring', 'Deep body with humped back', 'Golden scales with two mouth barbels'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Forked tail with barbels and dark spots.', answer: true, fishId: 'channel_catfish', showImage: true },
  { statement: 'This fish can be identified by: Blue-gray to olive body.', answer: true, fishId: 'channel_catfish', showImage: true },
  { statement: 'This fish can be identified by: Scattered dark spots (especially when young).', answer: true, fishId: 'channel_catfish', showImage: true },
  { statement: 'You might find this fish in rivers.', answer: true, fishId: 'channel_catfish', showImage: true }
];

export default channel_catfish;

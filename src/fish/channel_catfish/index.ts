import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const channel_catfish: Fish = {
  id: 'channel_catfish',
  name: 'Channel Catfish',
  scientific: 'Ictalurus punctatus',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Channel_Catfish_%28Ictalurus_punctatus%29_white_background.jpg/500px-Channel_Catfish_%28Ictalurus_punctatus%29_white_background.jpg',
  quizImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Channel_catfish_%28Ictalurus_punctatus%29.jpg/500px-Channel_catfish_%28Ictalurus_punctatus%29.jpg',
  features: [
    'Blue-gray to olive body',
    'Scattered dark spots (especially when young)',
    '8 barbels (whiskers) around mouth',
    'Deeply forked tail',
    'Adipose fin (small fin between dorsal and tail)',
    'Spine in dorsal and pectoral fins'
  ],
  keyFeature: 'Forked tail with barbels and dark spots',
  habitat: 'Rivers, lakes, reservoirs; prefers deeper channels',
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
  { statement: 'Channel catfish have a forked tail.', answer: true, fishId: 'channel_catfish' },
  { statement: 'Channel catfish have about 100,000 taste buds on their body.', answer: true, fishId: 'channel_catfish' }
];

export default channel_catfish;

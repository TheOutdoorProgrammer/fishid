import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const muskellunge: Fish = {
  id: 'muskellunge',
  name: 'Muskellunge',
  scientific: 'Esox masquinongy',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Esox_masquinongyeditcrop.jpg/500px-Esox_masquinongyeditcrop.jpg',
  quizImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Esox_masquinongy_%28muskellunge%29_1.jpg/500px-Esox_masquinongy_%28muskellunge%29_1.jpg',
  features: [
    'Very long, torpedo-shaped body (larger than pike)',
    'Light body with dark bars or spots',
    'Pointed snout (more pointed than pike)',
    'No scales on lower half of cheek',
    '6-9 sensory pores on each side of lower jaw',
    'Tail fin more pointed than pike'
  ],
  keyFeature: 'Dark markings on light body (opposite of pike), pointed tail',
  habitat: 'Large lakes, rivers with clear water; Lake Erie, inland reservoirs',
  size: '30-48 inches typical, Ohio record over 50 inches',
  funFact: 'Muskies are called "the fish of 10,000 casts" because they\'re notoriously difficult to catch. They\'re the largest member of the pike family.',
  refs: [
    { label: 'ODNR Muskie Angler Log', url: 'https://ohiodnr.gov/buy-and-apply/hunting-fishing-boating/fishing-resources/muskie-angler-log' },
    { label: 'Ohio State ENR Fish Taxonomy (Muskellunge)', url: 'https://u.osu.edu/enrfishtax/2019/11/06/muskellunge-recovery-in-ohio/' },
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' }
  ],
  colors: { primary: '#8B9B78', secondary: '#A0B090', belly: '#D8E0C8', fin: '#687858' },
};

export const featureOptions: FeatureOption = {
  correct: 'Light body with dark markings, pointed snout',
  wrong: ['Dark body with light bean-shaped spots', 'Golden body with vertical bars', 'Silver-gray with humped back'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Muskellunge have light spots on a dark body like pike.', answer: false, fishId: 'muskellunge' },
  { statement: 'Muskellunge are called the fish of 10,000 casts.', answer: true, fishId: 'muskellunge' }
];

export default muskellunge;

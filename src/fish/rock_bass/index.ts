import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const rock_bass: Fish = {
  id: 'rock_bass',
  name: 'Rock Bass',
  scientific: 'Ambloplites rupestris',
  image: [
    '/img/fish/rock_bass/1.jpg',
    '/img/fish/rock_bass/2.jpg'
  ],
  features: [
    'Stocky body, less compressed than sunfish',
    'Bright red eye',
    'Olive-brown with dark mottling/spots',
    'Six anal fin spines (most sunfish have 3)',
    'Large mouth for a panfish',
    'Dark spots in rows along sides'
  ],
  keyFeature: 'Red eye, stocky body with six anal spines and dark spots in rows',
  habitat: ['Ohio creeks and small rivers', 'Ohio inland lakes and reservoirs', 'Rocky streams', 'clear lakes near boulders', 'structure'],
  size: '6-10 inches typical',
  funFact: 'Rock bass have bright red eyes that make them easy to identify. They are sometimes called "redeyes" or "goggle-eyes" and are closely related to smallmouth bass.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'North Carolina Wildlife Resources Commission', url: 'https://www.ncwildlife.gov/species/rock-bass' },
    { label: 'USFWS species profile', url: 'https://www.fws.gov/species/rock-bass-ambloplites-rupestris' },
    { label: 'Outdoor Alabama species page', url: 'https://www.outdooralabama.com/bream/rock-bass' }
  ],
  colors: { primary: '#6B5A30', secondary: '#8B7848', belly: '#C8B880', fin: '#5A4A28' },
};

export const featureOptions: FeatureOption = {
  correct: 'Red eye, stocky body with six anal spines and dark spots in rows',
  wrong: ['Large mouth with dark eye streaks', 'Bronze body with vertical bars', 'Deep compressed body with dark ear flap'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Red eye, stocky body with six anal spines and dark spots in rows.', answer: true, fishId: 'rock_bass' },
  { statement: 'This fish can be identified by: Stocky body, less compressed than sunfish.', answer: true, fishId: 'rock_bass' },
  { statement: 'This fish can be identified by: Bright red eye.', answer: true, fishId: 'rock_bass' },
  { statement: 'You might find this fish in rocky streams.', answer: true, fishId: 'rock_bass' }
];

export default rock_bass;

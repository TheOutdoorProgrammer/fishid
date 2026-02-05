import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const rock_bass: Fish = {
  id: 'rock_bass',
  name: 'Rock Bass',
  scientific: 'Ambloplites rupestris',
  image: [],
  features: [
    'Stocky body, less compressed than sunfish',
    'Bright red eye',
    'Olive-brown with dark mottling/spots',
    'Six anal fin spines (most sunfish have 3)',
    'Large mouth for a panfish',
    'Dark spots in rows along sides'
  ],
  keyFeature: 'Red eye, stocky body with six anal spines and dark spots in rows',
  habitat: 'Rocky streams, clear lakes near boulders and structure',
  size: '6-10 inches typical',
  funFact: 'Rock bass have bright red eyes that make them easy to identify. They are sometimes called "redeyes" or "goggle-eyes" and are closely related to smallmouth bass.',
  refs: [
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
  { statement: 'Rock bass have six anal fin spines instead of the usual three.', answer: true, fishId: 'rock_bass' }
];

export default rock_bass;

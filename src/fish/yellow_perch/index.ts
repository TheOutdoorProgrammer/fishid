import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const yellow_perch: Fish = {
  id: 'yellow_perch',
  name: 'Yellow Perch',
  scientific: 'Perca flavescens',
  image: [
    '/img/fish/yellow_perch/1.jpg',
    '/img/fish/yellow_perch/2.jpg'
  ],
  features: [
    'Bright golden-yellow body',
    '6-8 dark vertical bars on sides',
    'Orange-tinted lower fins',
    'Two separate dorsal fins',
    'Small mouth, no canine teeth'
  ],
  keyFeature: 'Golden-yellow body with dark vertical bars',
  habitat: ['Lake Erie, inland lakes, prefers cool clear water'],
  size: '7-12 inches typical',
  funFact: 'Lake Erie is known as the "Walleye Capital of the World" but yellow perch are equally beloved. A Lake Erie perch fry is an Ohio tradition!',
  refs: [
    { label: 'Wikipedia: Yellow perch', url: 'https://en.wikipedia.org/wiki/Yellow_perch' },
    { label: 'DFO Canada species profile', url: 'https://www.dfo-mpo.gc.ca/species-especes/profiles-profils/yellowperch-perchaude-eng.html' },
    { label: 'Animal Diversity Web: Perca flavescens', url: 'https://animaldiversity.org/accounts/Perca_flavescens/' }
  ],
  colors: { primary: '#D4A820', secondary: '#E8C840', belly: '#F5E8A0', fin: '#D07020' },
};

export const featureOptions: FeatureOption = {
  correct: 'Golden body with 6-8 dark vertical bars',
  wrong: ['Random dark speckles scattered on body', 'Pink-red stripe along the side', 'Large mouth extending past the eye'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Yellow perch have horizontal stripes on their body.', answer: false, fishId: 'yellow_perch' }
];

export default yellow_perch;

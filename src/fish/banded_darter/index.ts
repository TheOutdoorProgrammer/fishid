import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const banded_darter: Fish = {
  id: 'banded_darter',
  name: 'Banded Darter',
  scientific: 'Etheostoma zonale',
  image: [
    '/img/fish/banded_darter/1.jpg',
    '/img/fish/banded_darter/2.jpg'
  ],
  features: [
    'Small body with distinct vertical bars',
    'Green to olive body with 8-12 dark vertical bars',
    'Bars are distinct and evenly spaced',
    'Greenish tint overall',
    'Two dorsal fins close together',
    'Rounded pectoral fins'
  ],
  keyFeature: 'Small green darter with bold, evenly spaced vertical bars',
  habitat: ['Rocky riffles and runs of clear streams'],
  size: '2-3 inches typical',
  funFact: 'Banded darters are named for their very distinct, evenly spaced vertical bars. They are one of the easier darters to identify because the bars are so bold and regular.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Etheostoma%20zonale' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Etheostoma+zonale' }
  ],
  colors: { primary: '#4A6838', secondary: '#5A7848', belly: '#B8C890', fin: '#3A5830' },
};

export const featureOptions: FeatureOption = {
  correct: 'Small green darter with bold, evenly spaced vertical bars',
  wrong: ['Alternating blue and orange bars', 'Row of dark oval blotches', 'Pig-like snout with alternating bar lengths'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Banded darters have irregularly spaced vertical bars.', answer: false, fishId: 'banded_darter' }
];

export default banded_darter;

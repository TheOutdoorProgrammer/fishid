import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const iowa_darter: Fish = {
  id: 'iowa_darter',
  name: 'Iowa Darter',
  scientific: 'Etheostoma exile',
  image: [
    '/img/fish/iowa_darter/1.png',
    '/img/fish/iowa_darter/2.jpg'
  ],
  features: [
    'Slender body with 9-12 dark vertical bars',
    'Olive to brown body',
    'Breeding males develop blue-green and orange coloring',
    'Bars may be narrow and distinct',
    'Two dorsal fins',
    'Small pointed snout'
  ],
  keyFeature: 'Slender darter with many narrow dark bars; breeding males turn blue-orange',
  habitat: ['Quiet, vegetated pools and lake margins; bog habitats'],
  size: '2-3 inches typical',
  funFact: 'Iowa darters are unusual among darters because they prefer quiet, vegetated water rather than fast riffles. They are often found in boggy habitats and glacial lakes.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Etheostoma%20exile' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Etheostoma+exile' }
  ],
  colors: { primary: '#5A5830', secondary: '#706840', belly: '#B8A880', fin: '#4A4828' },
};

export const featureOptions: FeatureOption = {
  correct: 'Slender darter with many narrow bars; breeding males turn blue-orange',
  wrong: ['Row of dark oval blotches', 'Nearly transparent body', 'Pig-like snout'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Iowa darters prefer fast-moving riffle habitat.', answer: false, fishId: 'iowa_darter' }
];

export default iowa_darter;

import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const johnny_darter: Fish = {
  id: 'johnny_darter',
  name: 'Johnny Darter',
  scientific: 'Etheostoma nigrum',
  image: [
    '/img/fish/johnny_darter/1.jpg',
    '/img/fish/johnny_darter/2.jpg'
  ],
  features: [
    'Small, pale body with dark W- and X-shaped markings',
    'Translucent to straw-colored base',
    'Dark markings form distinctive W and X patterns on sides',
    'Upturned mouth',
    'Two dorsal fins',
    'Very common - found in almost every Ohio stream'
  ],
  keyFeature: 'Pale darter with distinctive W- and X-shaped dark markings on sides',
  habitat: ['Sandy', 'silty pools of streams', 'very tolerant', 'widespread'],
  size: '2-3 inches typical',
  funFact: 'Johnny darters are the most common and widespread darter in Ohio. Males turn jet black during breeding season and guard eggs laid upside-down on rock surfaces.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Etheostoma%20nigrum' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Etheostoma+nigrum' }
  ],
  colors: { primary: '#887850', secondary: '#A89870', belly: '#C8C0A0', fin: '#786840' },
};

export const featureOptions: FeatureOption = {
  correct: 'Pale darter with distinctive W- and X-shaped dark markings',
  wrong: ['Alternating blue and orange bars', 'Fan-shaped tail with fleshy dorsal knobs', 'Bold evenly spaced vertical bars'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Johnny darters are one of the rarest darters in Ohio.', answer: false, fishId: 'johnny_darter' }
];

export default johnny_darter;

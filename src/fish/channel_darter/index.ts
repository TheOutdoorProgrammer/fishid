import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const channel_darter: Fish = {
  id: 'channel_darter',
  name: 'Channel Darter',
  scientific: 'Percina copelandi',
  image: [
    '/img/fish/channel_darter/1.jpg',
    '/img/fish/channel_darter/2.jpg'
  ],
  features: [
    'Small, slender darter',
    'Row of X-shaped or oval blotches on sides',
    'Olive-tan body',
    'Relatively large head for body size',
    'Two dorsal fins',
    'Premaxilla protractile (unique among Percina)'
  ],
  keyFeature: 'Small slender darter with X-shaped blotches and large head',
  habitat: ['Sandy or gravelly channels of medium to large rivers'],
  size: '1.5-2.5 inches typical',
  funFact: 'Channel darters are named for their preference for the main channel of rivers. They are one of the smaller Percina darters and can be challenging to identify.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Percina%20copelandi' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Percina+copelandi' }
  ],
  colors: { primary: '#887850', secondary: '#A89870', belly: '#C8C0A0', fin: '#786840' },
};

export const featureOptions: FeatureOption = {
  correct: 'Small slender darter with X-shaped blotches and large head',
  wrong: ['Pig-like snout with alternating bars', 'Blue and orange vertical bars', 'Fan-shaped tail with dorsal knobs'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Channel darters prefer the main channel of rivers.', answer: true, fishId: 'channel_darter' }
];

export default channel_darter;

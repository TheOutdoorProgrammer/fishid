import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const blackstripe_topminnow: Fish = {
  id: 'blackstripe_topminnow',
  name: 'Blackstripe Topminnow',
  scientific: 'Fundulus notatus',
  image: [
    '/img/fish/blackstripe_topminnow/1.jpg',
    '/img/fish/blackstripe_topminnow/2.jpg'
  ],
  features: [
    'Small surface-dwelling fish',
    'Bold dark lateral stripe from snout to tail',
    'Flat head and upturned mouth adapted for surface feeding',
    'Olive-tan body above stripe',
    'Yellow to white below stripe',
    'Rounded tail'
  ],
  keyFeature: 'Surface fish with bold dark stripe, flat head, and upturned mouth',
  habitat: ['Quiet pools', 'backwaters', 'stream edges', 'lives at water surface'],
  size: '2-3 inches typical',
  funFact: 'Blackstripe topminnows spend their lives at the water surface, using their upturned mouths to feed on insects that land on the water. They are sometimes called "top minnows" for this reason.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Fundulus%20notatus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Fundulus+notatus' }
  ],
  colors: { primary: '#706840', secondary: '#887858', belly: '#D0C8A0', fin: '#605838' },
};

export const featureOptions: FeatureOption = {
  correct: 'Surface fish with bold dark stripe, flat head, and upturned mouth',
  wrong: ['Multiple thin vertical bars', 'Rows of reddish-brown spots', 'Isolated spines before dorsal fin'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Blackstripe topminnows live on the bottom of streams.', answer: false, fishId: 'blackstripe_topminnow' }
];

export default blackstripe_topminnow;

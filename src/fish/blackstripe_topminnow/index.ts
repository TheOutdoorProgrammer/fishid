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
  habitat: ['backwaters', 'creeks', 'pools', 'rivers', 'streams'],
  size: '2-3 inches typical',
  funFact: 'Blackstripe topminnows spend their lives at the water surface, using their upturned mouths to feed on insects that land on the water. They are sometimes called "top minnows" for this reason.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
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
  { statement: 'A key ID clue for this fish is: Surface fish with bold dark stripe, flat head, and upturned mouth.', answer: true, fishId: 'blackstripe_topminnow', showImage: true },
  { statement: 'This fish can be identified by: Small surface-dwelling fish.', answer: true, fishId: 'blackstripe_topminnow', showImage: true },
  { statement: 'This fish can be identified by: Bold dark lateral stripe from snout to tail.', answer: true, fishId: 'blackstripe_topminnow', showImage: true },
  { statement: 'You might find this fish in quiet pools.', answer: true, fishId: 'blackstripe_topminnow', showImage: true }
];

export default blackstripe_topminnow;

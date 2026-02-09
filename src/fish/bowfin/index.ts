import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const bowfin: Fish = {
  id: 'bowfin',
  name: 'Bowfin',
  scientific: 'Amia calva',
  image: [
    '/img/fish/bowfin/1.jpg',
    '/img/fish/bowfin/2.jpg'
  ],
  features: [
    'Long dorsal fin extending most of body length',
    'Rounded tail fin (not forked)',
    'Dark spot (ocellus) at base of tail on males',
    'Large head with strong jaws and teeth',
    'Olive-green body with mottled pattern',
    'Gular plate (bony plate) under lower jaw'
  ],
  keyFeature: 'Long dorsal fin nearly reaching round tail, with dark spot at tail base (males)',
  habitat: ['backwaters', 'creeks', 'lakes', 'reservoirs', 'rivers', 'swamps', 'weedy lakes'],
  size: '18-24 inches typical, can exceed 30',
  funFact: 'Bowfin are living fossils dating back 150 million years. They can breathe air using their swim bladder and survive in water too oxygen-poor for most fish. Males guard their young.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Amia%20calva' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Amia+calva' }
  ],
  colors: { primary: '#3A4A28', secondary: '#4A5A38', belly: '#A8B088', fin: '#2A3A20' },
};

export const featureOptions: FeatureOption = {
  correct: 'Long dorsal fin nearly reaching round tail, with dark spot at tail base',
  wrong: ['Diamond-shaped armored scales', 'Paddle-shaped snout', 'Five rows of bony plates'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Long dorsal fin nearly reaching round tail, with dark spot at tail base (males).', answer: true, fishId: 'bowfin' },
  { statement: 'This fish can be identified by: Long dorsal fin extending most of body length.', answer: true, fishId: 'bowfin' },
  { statement: 'This fish can be identified by: Rounded tail fin (not forked).', answer: true, fishId: 'bowfin' },
  { statement: 'You might find this fish in weedy lakes.', answer: true, fishId: 'bowfin' }
];

export default bowfin;

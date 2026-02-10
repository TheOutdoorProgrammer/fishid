import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const sand_shiner: Fish = {
  id: 'sand_shiner',
  name: 'Sand Shiner',
  scientific: 'Notropis stramineus',
  image: [
    '/img/fish/sand_shiner/1.jpg',
    '/img/fish/sand_shiner/2.jpg'
  ],
  features: [
    'Small, slender body',
    'Pale straw to olive color',
    'Faint lateral stripe often with zig-zag on front',
    'Small mouth',
    'Somewhat translucent',
    'Forked tail'
  ],
  keyFeature: 'Small pale straw-colored minnow with faint zig-zag lateral stripe',
  habitat: ['creeks', 'lakes', 'pools', 'reservoirs', 'rivers', 'streams'],
  size: '2-3 inches typical',
  funFact: 'Sand shiners are named for their preference for sandy-bottomed habitats. They are one of the most widespread minnow species in the central United States.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Notropis%20stramineus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Notropis+stramineus' }
  ],
  colors: { primary: '#988868', secondary: '#B0A080', belly: '#D8D0B8', fin: '#887858' },
};

export const featureOptions: FeatureOption = {
  correct: 'Small pale straw-colored minnow with faint zig-zag lateral stripe',
  wrong: ['Bold dark stripe from snout to tail', 'Emerald-green translucent body', 'Deep golden body with belly keel'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Small pale straw-colored minnow with faint zig-zag lateral stripe.', answer: true, fishId: 'sand_shiner', showImage: true },
  { statement: 'This fish can be identified by: Small, slender body.', answer: true, fishId: 'sand_shiner', showImage: true },
  { statement: 'This fish can be identified by: Pale straw to olive color.', answer: true, fishId: 'sand_shiner', showImage: true },
  { statement: 'You might find this fish in sandy pools.', answer: true, fishId: 'sand_shiner', showImage: true }
];

export default sand_shiner;

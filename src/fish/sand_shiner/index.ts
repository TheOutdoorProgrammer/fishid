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
  habitat: ['Sandy pools and runs of streams; also lake margins'],
  size: '2-3 inches typical',
  funFact: 'Sand shiners are named for their preference for sandy-bottomed habitats. They are one of the most widespread minnow species in the central United States.',
  refs: [
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
  { statement: 'Sand shiners prefer deep-water rocky habitat.', answer: false, fishId: 'sand_shiner' }
];

export default sand_shiner;

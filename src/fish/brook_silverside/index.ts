import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const brook_silverside: Fish = {
  id: 'brook_silverside',
  name: 'Brook Silverside',
  scientific: 'Labidesthes sicculus',
  image: [
    '/img/fish/brook_silverside/1.jpg',
    '/img/fish/brook_silverside/2.jpg'
  ],
  features: [
    'Very slender, elongated body',
    'Bright silver lateral stripe',
    'Translucent body - can see through it',
    'Beak-like snout with upturned mouth',
    'Large eyes',
    'Two small dorsal fins set far back'
  ],
  keyFeature: 'Extremely slender translucent fish with bright silver stripe and beak-like snout',
  habitat: ['creeks', 'lakes', 'reservoirs', 'rivers', 'streams'],
  size: '2-4 inches typical',
  funFact: 'Brook silversides are surface-dwelling fish that leap out of the water to escape predators. They are annual fish - most live only one year and die after spawning.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Labidesthes%20sicculus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Labidesthes+sicculus' }
  ],
  colors: { primary: '#88A0A8', secondary: '#A0B8C0', belly: '#D0D8E0', fin: '#7090A0' },
};

export const featureOptions: FeatureOption = {
  correct: 'Extremely slender translucent fish with bright silver stripe and beak snout',
  wrong: ['Dark body with forward-migrating anus', 'Small stout body with rounded tail', 'Wide flat head with scaleless body'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Extremely slender translucent fish with bright silver stripe and beak-like snout.', answer: true, fishId: 'brook_silverside' },
  { statement: 'This fish can be identified by: Very slender, elongated body.', answer: true, fishId: 'brook_silverside' },
  { statement: 'This fish can be identified by: Bright silver lateral stripe.', answer: true, fishId: 'brook_silverside' },
  { statement: 'You might find this fish in lake margins.', answer: true, fishId: 'brook_silverside' }
];

export default brook_silverside;

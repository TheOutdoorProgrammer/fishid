import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const silverjaw_minnow: Fish = {
  id: 'silverjaw_minnow',
  name: 'Silverjaw Minnow',
  scientific: 'Ericymba buccata',
  image: [
    '/img/fish/silverjaw_minnow/1.jpg',
    '/img/fish/silverjaw_minnow/2.jpg'
  ],
  features: [
    'Translucent body',
    'Visible silvery chambers in lower jaw and snout',
    'Pale olive body with silvery lateral stripe',
    'Large head chambers visible through skin',
    'Subterminal mouth',
    'Forked tail'
  ],
  keyFeature: 'Translucent minnow with visible silver chambers in head and jaw',
  habitat: ['Sandy-bottomed streams', 'pools', 'clear streams and rivers'],
  size: '2-4 inches typical',
  funFact: 'Silverjaw minnows have unique enlarged head canals visible as silvery chambers through their translucent skin. No other minnow has this distinctive feature.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Ericymba%20buccata' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Ericymba+buccata' }
  ],
  colors: { primary: '#889888', secondary: '#A0B0A0', belly: '#D0D8D0', fin: '#708878' },
};

export const featureOptions: FeatureOption = {
  correct: 'Translucent minnow with visible silver chambers in head and jaw',
  wrong: ['Bold dark lateral stripe', 'Deep golden body', 'Steel-blue back with dorsal spot'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Translucent minnow with visible silver chambers in head and jaw.', answer: true, fishId: 'silverjaw_minnow' },
  { statement: 'This fish can be identified by: Translucent body.', answer: true, fishId: 'silverjaw_minnow' },
  { statement: 'This fish can be identified by: Visible silvery chambers in lower jaw and snout.', answer: true, fishId: 'silverjaw_minnow' },
  { statement: 'You might find this fish in sandy-bottomed streams.', answer: true, fishId: 'silverjaw_minnow' }
];

export default silverjaw_minnow;

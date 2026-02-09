import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const bluntnose_minnow: Fish = {
  id: 'bluntnose_minnow',
  name: 'Bluntnose Minnow',
  scientific: 'Pimephales notatus',
  image: [
    '/img/fish/bluntnose_minnow/1.jpg',
    '/img/fish/bluntnose_minnow/2.jpg'
  ],
  features: [
    'Small, slender body',
    'Blunt, rounded snout overhanging mouth',
    'Dark lateral stripe from snout to tail',
    'Distinct dark spot at tail base',
    'Cross-hatched scale pattern on back',
    'Subterminal mouth'
  ],
  keyFeature: 'Small minnow with dark lateral stripe, blunt snout, and spot at tail base',
  habitat: ['creeks', 'lakes', 'reservoirs', 'rivers', 'streams'],
  size: '2-4 inches typical',
  funFact: 'Bluntnose minnows are arguably the most common fish in Ohio streams. Males guard eggs that are laid on the undersides of flat rocks.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Pimephales%20notatus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Pimephales+notatus' }
  ],
  colors: { primary: '#7A7850', secondary: '#989668', belly: '#C8C0A0', fin: '#686848' },
};

export const featureOptions: FeatureOption = {
  correct: 'Small minnow with dark lateral stripe, blunt snout, and spot at tail base',
  wrong: ['Blunt head with spongy fat pad (breeding males)', 'Deep golden body with belly keel', 'Emerald-green sheen and translucent body'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Small minnow with dark lateral stripe, blunt snout, and spot at tail base.', answer: true, fishId: 'bluntnose_minnow' },
  { statement: 'This fish can be identified by: Small, slender body.', answer: true, fishId: 'bluntnose_minnow' },
  { statement: 'This fish can be identified by: Blunt, rounded snout overhanging mouth.', answer: true, fishId: 'bluntnose_minnow' },
  { statement: 'You might find this fish in streams.', answer: true, fishId: 'bluntnose_minnow' }
];

export default bluntnose_minnow;

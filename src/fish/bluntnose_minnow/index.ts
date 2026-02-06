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
  habitat: ['Streams, rivers, lake margins; extremely common in Ohio'],
  size: '2-4 inches typical',
  funFact: 'Bluntnose minnows are arguably the most common fish in Ohio streams. Males guard eggs that are laid on the undersides of flat rocks.',
  refs: [
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
  { statement: 'Bluntnose minnows are rare and hard to find in Ohio.', answer: false, fishId: 'bluntnose_minnow' }
];

export default bluntnose_minnow;

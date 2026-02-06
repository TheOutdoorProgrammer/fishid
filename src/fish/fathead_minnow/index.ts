import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const fathead_minnow: Fish = {
  id: 'fathead_minnow',
  name: 'Fathead Minnow',
  scientific: 'Pimephales promelas',
  image: [
    '/img/fish/fathead_minnow/1.jpg',
    '/img/fish/fathead_minnow/2.jpg'
  ],
  features: [
    'Small, stout body',
    'Blunt, rounded head',
    'Dark olive body with a dark lateral stripe',
    'Breeding males develop dark head with fatty pad and tubercles',
    'First dorsal ray is short and thick (splint-like)',
    'Incomplete lateral line'
  ],
  keyFeature: 'Small stout minnow with blunt head; breeding males have dark fat pad on head',
  habitat: ['Ohio creeks and small rivers', 'Ohio farm ponds and small lakes', 'Ohio inland lakes and reservoirs', 'Ponds', 'ditches'],
  size: '2-3 inches typical',
  funFact: 'Fathead minnows are extremely popular bait and feeder fish. Breeding males develop a dark spongy fat pad on their heads and tubercles, looking completely different from females.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Pimephales%20promelas' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Pimephales+promelas' }
  ],
  colors: { primary: '#6B6848', secondary: '#8B8868', belly: '#B8B098', fin: '#5A5840' },
};

export const featureOptions: FeatureOption = {
  correct: 'Small stout minnow with blunt head; breeding males have dark fat pad',
  wrong: ['Dark spot at tail base with cross-hatched pattern', 'Deep golden body with belly keel', 'Slender translucent body with green sheen'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Small stout minnow with blunt head; breeding males have dark fat pad on head.', answer: true, fishId: 'fathead_minnow' },
  { statement: 'This fish can be identified by: Small, stout body.', answer: true, fishId: 'fathead_minnow' },
  { statement: 'This fish can be identified by: Blunt, rounded head.', answer: true, fishId: 'fathead_minnow' },
  { statement: 'You might find this fish in ponds.', answer: true, fishId: 'fathead_minnow' }
];

export default fathead_minnow;

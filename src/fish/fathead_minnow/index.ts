import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const fathead_minnow: Fish = {
  id: 'fathead_minnow',
  name: 'Fathead Minnow',
  scientific: 'Pimephales promelas',
  image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Fathead_minnow_fish_pimephales_promelas.jpg',
  quizImage: '',
  features: [
    'Small, stout body',
    'Blunt, rounded head',
    'Dark olive body with a dark lateral stripe',
    'Breeding males develop dark head with fatty pad and tubercles',
    'First dorsal ray is short and thick (splint-like)',
    'Incomplete lateral line'
  ],
  keyFeature: 'Small stout minnow with blunt head; breeding males have dark fat pad on head',
  habitat: 'Ponds, ditches, quiet streams; very tolerant of poor conditions',
  size: '2-3 inches typical',
  funFact: 'Fathead minnows are extremely popular bait and feeder fish. Breeding males develop a dark spongy fat pad on their heads and tubercles, looking completely different from females.',
  refs: [
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
  { statement: 'Fathead minnow breeding males develop a spongy fat pad on their head.', answer: true, fishId: 'fathead_minnow' }
];

export default fathead_minnow;

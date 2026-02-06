import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const hornyhead_chub: Fish = {
  id: 'hornyhead_chub',
  name: 'Hornyhead Chub',
  scientific: 'Nocomis biguttatus',
  image: [
    '/img/fish/hornyhead_chub/1.jpg',
    '/img/fish/hornyhead_chub/2.jpg'
  ],
  features: [
    'Large, robust minnow',
    'Red-orange spot behind eye',
    'Olive-brown body',
    'Breeding males develop large tubercles (horns) on head',
    'Dark spot at dorsal fin base (faint)',
    'Subterminal mouth with small barbel at corner'
  ],
  keyFeature: 'Robust minnow with red-orange spot behind eye; breeding males have head tubercles',
  habitat: ['Pools of clear streams over gravel', 'moderate current'],
  size: '5-8 inches typical',
  funFact: 'Hornyhead chub males build large gravel nests and develop impressive horn-like tubercles on their heads during spawning. Many other minnow species use their nests to spawn.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Nocomis%20biguttatus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Nocomis+biguttatus' }
  ],
  colors: { primary: '#6B6040', secondary: '#8B8060', belly: '#C8C0A0', fin: '#5A5038' },
};

export const featureOptions: FeatureOption = {
  correct: 'Robust minnow with red-orange spot behind eye and head tubercles',
  wrong: ['Small barbel only with no eye spot', 'Hard scraping ridge on lower jaw', 'Deep golden body with belly keel'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Hornyhead chub males develop horn-like tubercles on their head.', answer: true, fishId: 'hornyhead_chub' }
];

export default hornyhead_chub;

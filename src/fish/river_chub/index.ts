import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const river_chub: Fish = {
  id: 'river_chub',
  name: 'River Chub',
  scientific: 'Nocomis micropogon',
  image: [
    '/img/fish/river_chub/1.jpg',
    '/img/fish/river_chub/2.jpg'
  ],
  features: [
    'Large, robust minnow (one of the biggest)',
    'Olive-brown body with large scales',
    'Breeding males develop pink coloring and large head tubercles',
    'Small barbel at corner of mouth',
    'Large mouth for a minnow',
    'Forked tail'
  ],
  keyFeature: 'Very large robust minnow with barbel at mouth corner; males build huge nests',
  habitat: ['Streams and rivers with gravel or rubble bottoms'],
  size: '6-10 inches typical, can reach 12',
  funFact: 'River chub build the largest nests of any minnow - massive gravel mounds up to 3 feet across! These nests become community spawning sites used by many other species.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Nocomis%20micropogon' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Nocomis+micropogon' }
  ],
  colors: { primary: '#6B6840', secondary: '#8B8858', belly: '#C8C8A0', fin: '#5A5838' },
};

export const featureOptions: FeatureOption = {
  correct: 'Very large minnow with barbel and massive gravel nests',
  wrong: ['Red-orange spot behind eye', 'Hard scraping ridge on lower jaw', 'Slender body with emerald sheen'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'River chub build the largest nests of any minnow species.', answer: true, fishId: 'river_chub' }
];

export default river_chub;

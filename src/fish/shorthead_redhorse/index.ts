import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const shorthead_redhorse: Fish = {
  id: 'shorthead_redhorse',
  name: 'Shorthead Redhorse',
  scientific: 'Moxostoma macrolepidotum',
  image: [
    '/img/fish/shorthead_redhorse/1.jpg'
  ],
  features: [
    'Olive-gold body with red-orange tail and dorsal fin',
    'Relatively short head compared to body',
    'Straight rear edge on dorsal fin',
    'Red-orange lower fins',
    'Plicate (grooved) lips',
    'Forked tail'
  ],
  keyFeature: 'Short head relative to body with bright red-orange fins and straight dorsal edge',
  habitat: 'Large streams and rivers with rocky or gravelly bottoms',
  size: '14-20 inches typical',
  funFact: 'Shorthead redhorse are common in Lake Erie tributaries. Their short head relative to body size helps distinguish them from other redhorse species.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Moxostoma%20macrolepidotum' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Moxostoma+macrolepidotum' }
  ],
  colors: { primary: '#7B7030', secondary: '#988848', belly: '#D0C088', fin: '#C06028' },
};

export const featureOptions: FeatureOption = {
  correct: 'Short head relative to body with bright red-orange fins and straight dorsal edge',
  wrong: ['Long head with thick plicate lips', 'Dark cross-hatched scale pattern', 'Small mouth with falcate dorsal'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Shorthead redhorse have a long head relative to their body.', answer: false, fishId: 'shorthead_redhorse' }
];

export default shorthead_redhorse;

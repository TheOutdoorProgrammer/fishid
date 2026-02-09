import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const shorthead_redhorse: Fish = {
  id: 'shorthead_redhorse',
  name: 'Shorthead Redhorse',
  scientific: 'Moxostoma macrolepidotum',
  image: [
    '/img/fish/shorthead_redhorse/1.jpg',
    '/img/fish/shorthead_redhorse/2.jpg'
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
  habitat: ['creeks', 'rivers', 'rocky rivers', 'rocky streams', 'streams'],
  size: '14-20 inches typical',
  funFact: 'Shorthead redhorse are common in Lake Erie tributaries. Their short head relative to body size helps distinguish them from other redhorse species.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
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
  { statement: 'A key ID clue for this fish is: Short head relative to body with bright red-orange fins and straight dorsal edge.', answer: true, fishId: 'shorthead_redhorse' },
  { statement: 'This fish can be identified by: Olive-gold body with red-orange tail and dorsal fin.', answer: true, fishId: 'shorthead_redhorse' },
  { statement: 'This fish can be identified by: Relatively short head compared to body.', answer: true, fishId: 'shorthead_redhorse' },
  { statement: 'You might find this fish in large streams and rivers with rocky or gravelly bottoms.', answer: true, fishId: 'shorthead_redhorse' }
];

export default shorthead_redhorse;

import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const greater_redhorse: Fish = {
  id: 'greater_redhorse',
  name: 'Greater Redhorse',
  scientific: 'Moxostoma valenciennesi',
  image: [
    '/img/fish/greater_redhorse/1.jpg',
    '/img/fish/greater_redhorse/2.jpg'
  ],
  features: [
    'Very large sucker species',
    'Olive-gold body with large scales',
    'Very thick, plicate (grooved) lips',
    'Red-orange fins',
    'Large head and robust body',
    'Forked tail'
  ],
  keyFeature: 'Very large sucker with extremely thick plicate lips and large scales',
  habitat: ['Large clean rivers', 'uncommon in Ohio', 'clear streams and rivers'],
  size: '18-28 inches typical',
  funFact: 'Greater redhorse are one of the rarest sucker species in Ohio. They require clean rivers with good water quality and are indicators of stream health.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Moxostoma%20valenciennesi' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Moxostoma+valenciennesi' }
  ],
  colors: { primary: '#7B7030', secondary: '#988848', belly: '#D0C088', fin: '#C06028' },
};

export const featureOptions: FeatureOption = {
  correct: 'Very large sucker with extremely thick plicate lips and large scales',
  wrong: ['Small mouth with falcate dorsal', 'Dark cross-hatched scales', 'V-shaped lower lip'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Very large sucker with extremely thick plicate lips and large scales.', answer: true, fishId: 'greater_redhorse' },
  { statement: 'This fish can be identified by: Very large sucker species.', answer: true, fishId: 'greater_redhorse' },
  { statement: 'This fish can be identified by: Olive-gold body with large scales.', answer: true, fishId: 'greater_redhorse' },
  { statement: 'You might find this fish in large clean rivers.', answer: true, fishId: 'greater_redhorse' }
];

export default greater_redhorse;

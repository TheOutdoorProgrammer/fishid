import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const river_redhorse: Fish = {
  id: 'river_redhorse',
  name: 'River Redhorse',
  scientific: 'Moxostoma carinatum',
  image: [
    '/img/fish/river_redhorse/1.jpg',
    '/img/fish/river_redhorse/2.jpg'
  ],
  features: [
    'Large, robust sucker',
    'Heavy pharyngeal teeth (molar-like for crushing)',
    'Olive-bronze body',
    'Large head with thick lips',
    'Red-orange fins',
    'Can reach over 10 pounds'
  ],
  keyFeature: 'Large robust sucker with heavy molar-like pharyngeal teeth',
  habitat: ['creeks', 'rivers', 'rocky rivers', 'streams'],
  size: '18-26 inches typical',
  funFact: 'River redhorse have massive molar-like teeth in their throat that they use to crush snail and mussel shells. They are one of the largest and most impressive sucker species.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Moxostoma%20carinatum' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Moxostoma+carinatum' }
  ],
  colors: { primary: '#7B6830', secondary: '#988048', belly: '#D0C088', fin: '#B85820' },
};

export const featureOptions: FeatureOption = {
  correct: 'Large robust sucker with heavy molar-like pharyngeal teeth',
  wrong: ['Small mouth with V-shaped lip', 'Dark-edged scales and dusky fins', 'Short head with straight dorsal edge'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Large robust sucker with heavy molar-like pharyngeal teeth.', answer: true, fishId: 'river_redhorse', showImage: true },
  { statement: 'This fish can be identified by: Large, robust sucker.', answer: true, fishId: 'river_redhorse', showImage: true },
  { statement: 'This fish can be identified by: Heavy pharyngeal teeth (molar-like for crushing).', answer: true, fishId: 'river_redhorse', showImage: true },
  { statement: 'You might find this fish in large clean rivers with rocky bottoms and moderate current.', answer: true, fishId: 'river_redhorse', showImage: true }
];

export default river_redhorse;

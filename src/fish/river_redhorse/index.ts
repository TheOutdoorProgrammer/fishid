import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const river_redhorse: Fish = {
  id: 'river_redhorse',
  name: 'River Redhorse',
  scientific: 'Moxostoma carinatum',
  image: [
    '/img/fish/river_redhorse/1.jpg'
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
  habitat: 'Large clean rivers with rocky bottoms and moderate current',
  size: '18-26 inches typical',
  funFact: 'River redhorse have massive molar-like teeth in their throat that they use to crush snail and mussel shells. They are one of the largest and most impressive sucker species.',
  refs: [
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
  { statement: 'River redhorse have heavy molar-like pharyngeal teeth for crushing shells.', answer: true, fishId: 'river_redhorse' }
];

export default river_redhorse;

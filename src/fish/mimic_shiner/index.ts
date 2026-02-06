import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const mimic_shiner: Fish = {
  id: 'mimic_shiner',
  name: 'Mimic Shiner',
  scientific: 'Notropis volucellus',
  image: [
    '/img/fish/mimic_shiner/1.jpg',
    '/img/fish/mimic_shiner/2.jpg'
  ],
  features: [
    'Small, slender body',
    'Pale silver-olive color',
    'Faint lateral stripe',
    'Large eye for body size',
    'Nearly identical to several other shiner species',
    'Forked tail'
  ],
  keyFeature: 'Plain silver shiner that closely resembles several other shiner species',
  habitat: ['Lakes and quiet pools of streams over sand or silt'],
  size: '2-3 inches typical',
  funFact: 'Mimic shiners get their name because they look so much like other shiner species that even experts have trouble telling them apart without microscopic examination.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Notropis%20volucellus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Notropis+volucellus' }
  ],
  colors: { primary: '#88A090', secondary: '#A0B8A8', belly: '#D0D8D0', fin: '#789880' },
};

export const featureOptions: FeatureOption = {
  correct: 'Plain silver shiner that closely resembles other shiner species',
  wrong: ['Bold emerald-green sheen', 'Steel-blue back with dorsal spot', 'Deep body with crescent scale marks'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Mimic shiners are easy to distinguish from other shiner species.', answer: false, fishId: 'mimic_shiner' }
];

export default mimic_shiner;

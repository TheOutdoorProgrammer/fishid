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
  habitat: ['creeks', 'lakes', 'pools', 'reservoirs', 'rivers', 'streams'],
  size: '2-3 inches typical',
  funFact: 'Mimic shiners get their name because they look so much like other shiner species that even experts have trouble telling them apart without microscopic examination.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
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
  { statement: 'A key ID clue for this fish is: Plain silver shiner that closely resembles several other shiner species.', answer: true, fishId: 'mimic_shiner', showImage: true },
  { statement: 'This fish can be identified by: Small, slender body.', answer: true, fishId: 'mimic_shiner', showImage: true },
  { statement: 'This fish can be identified by: Pale silver-olive color.', answer: true, fishId: 'mimic_shiner', showImage: true },
  { statement: 'You might find this fish in lakes and quiet pools of streams over sand or silt.', answer: true, fishId: 'mimic_shiner', showImage: true }
];

export default mimic_shiner;

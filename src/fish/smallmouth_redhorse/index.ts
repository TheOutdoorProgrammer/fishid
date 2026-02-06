import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const smallmouth_redhorse: Fish = {
  id: 'smallmouth_redhorse',
  name: 'Smallmouth Redhorse',
  scientific: 'Moxostoma breviceps',
  image: [
    '/img/fish/smallmouth_redhorse/1.jpg',
    '/img/fish/smallmouth_redhorse/2.jpg'
  ],
  features: [
    'Small mouth even for a sucker',
    'Silver to olive body',
    'Short, U-shaped lower lip',
    'Falcate (deeply curved) dorsal fin',
    'Red-orange lower fins',
    'Compressed body shape'
  ],
  keyFeature: 'Small-mouthed sucker with falcate dorsal fin and short U-shaped lower lip',
  habitat: ['Large streams and rivers; Lake Erie tributaries'],
  size: '10-16 inches typical',
  funFact: 'Smallmouth redhorse have the smallest mouth of any redhorse species. Their falcate (deeply curved) dorsal fin is a good identification feature.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Moxostoma%20breviceps' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Moxostoma+breviceps' }
  ],
  colors: { primary: '#708068', secondary: '#889880', belly: '#C8D0C0', fin: '#C06030' },
};

export const featureOptions: FeatureOption = {
  correct: 'Small-mouthed sucker with falcate dorsal fin and short U-shaped lip',
  wrong: ['Large forward-facing mouth', 'Very heavy molar-like throat teeth', 'Extremely thick plicate lips'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Smallmouth redhorse have the smallest mouth of any redhorse species.', answer: true, fishId: 'smallmouth_redhorse' }
];

export default smallmouth_redhorse;

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
  habitat: ['Lake Erie', 'creeks', 'lakes', 'reservoirs', 'rivers', 'streams', 'tributaries'],
  size: '10-16 inches typical',
  funFact: 'Smallmouth redhorse have the smallest mouth of any redhorse species. Their falcate (deeply curved) dorsal fin is a good identification feature.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
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
  { statement: 'A key ID clue for this fish is: Small-mouthed sucker with falcate dorsal fin and short U-shaped lower lip.', answer: true, fishId: 'smallmouth_redhorse', showImage: true },
  { statement: 'This fish can be identified by: Small mouth even for a sucker.', answer: true, fishId: 'smallmouth_redhorse', showImage: true },
  { statement: 'This fish can be identified by: Silver to olive body.', answer: true, fishId: 'smallmouth_redhorse', showImage: true },
  { statement: 'You might find this fish in large streams.', answer: true, fishId: 'smallmouth_redhorse', showImage: true }
];

export default smallmouth_redhorse;

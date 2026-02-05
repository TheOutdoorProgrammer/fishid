import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const spotted_bass: Fish = {
  id: 'spotted_bass',
  name: 'Spotted Bass',
  scientific: 'Micropterus punctulatus',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Micropterus_punctulatus.jpg/500px-Micropterus_punctulatus.jpg',
  quizImage: '',
  features: [
    'Green to olive body',
    'Rows of dark spots below lateral line',
    'Jaw does NOT extend past the eye',
    'Dark lateral band (may break into blotches)',
    'Rough tooth patch on tongue',
    'Connected dorsal fin'
  ],
  keyFeature: 'Rows of spots below lateral line with rough tooth patch on tongue',
  habitat: 'Rocky streams and reservoirs in southern Ohio',
  size: '10-15 inches typical',
  funFact: 'Spotted bass look like a cross between largemouth and smallmouth. The rows of spots below the lateral line and the rough tongue patch are the best way to identify them.',
  refs: [
    { label: 'Louisiana Dept. of Wildlife & Fisheries', url: 'https://www.wlf.louisiana.gov/species/detail/spotted-bass' },
    { label: 'Mississippi MDWFP Fish ID Guide', url: 'https://www.mdwfp.com/fishing-boating/fish-id-guide/spotted-bass' },
    { label: 'Bassmaster ID guide (PDF)', url: 'https://www.bassmaster.com/wp-content/uploads/2022/03/howtoidspottedbass_1.pdf' }
  ],
  colors: { primary: '#4A6830', secondary: '#5A7A40', belly: '#C8D0A0', fin: '#3A5828' },
};

export const featureOptions: FeatureOption = {
  correct: 'Rows of spots below lateral line with rough tongue patch',
  wrong: ['Jaw extending past the eye', 'Dark horizontal stripe only', 'Bronze body with no spots below lateral line'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Spotted bass have a smooth tongue patch.', answer: false, fishId: 'spotted_bass' }
];

export default spotted_bass;

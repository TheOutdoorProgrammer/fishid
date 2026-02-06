import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const spotted_bass: Fish = {
  id: 'spotted_bass',
  name: 'Spotted Bass',
  scientific: 'Micropterus punctulatus',
  image: [
    '/img/fish/spotted_bass/1.jpg',
    '/img/fish/spotted_bass/2.jpg'
  ],
  features: [
    'Green to olive body',
    'Rows of dark spots below lateral line',
    'Jaw does NOT extend past the eye',
    'Dark lateral band (may break into blotches)',
    'Rough tooth patch on tongue',
    'Connected dorsal fin'
  ],
  keyFeature: 'Rows of spots below lateral line with rough tooth patch on tongue',
  habitat: ['Ohio creeks and small rivers', 'Ohio inland lakes and reservoirs', 'Rocky streams', 'reservoirs in southern Ohio', 'clear streams and rivers'],
  size: '10-15 inches typical',
  funFact: 'Spotted bass look like a cross between largemouth and smallmouth. The rows of spots below the lateral line and the rough tongue patch are the best way to identify them.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
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
  { statement: 'A key ID clue for this fish is: Rows of spots below lateral line with rough tooth patch on tongue.', answer: true, fishId: 'spotted_bass' },
  { statement: 'This fish can be identified by: Green to olive body.', answer: true, fishId: 'spotted_bass' },
  { statement: 'This fish can be identified by: Rows of dark spots below lateral line.', answer: true, fishId: 'spotted_bass' },
  { statement: 'You might find this fish in rocky streams.', answer: true, fishId: 'spotted_bass' }
];

export default spotted_bass;

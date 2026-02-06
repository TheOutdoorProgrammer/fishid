import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const white_sucker: Fish = {
  id: 'white_sucker',
  name: 'White Sucker',
  scientific: 'Catostomus commersonii',
  image: [
    '/img/fish/white_sucker/1.jpg',
    '/img/fish/white_sucker/2.jpg'
  ],
  features: [
    'Cylindrical body, round in cross-section',
    'Downward-pointing sucker mouth with fleshy lips',
    'Olive-brown back fading to white belly',
    'No barbels',
    'Forked tail',
    'Scales get larger toward rear of body'
  ],
  keyFeature: 'Olive-brown cylindrical fish with downward sucker mouth and no barbels',
  habitat: ['Streams', 'rivers', 'lakes', 'one of most common fish in Ohio'],
  size: '12-18 inches typical',
  funFact: 'White suckers are one of the first fish to make spawning runs in spring. They crowd into small streams by the hundreds, often before the ice is fully melted.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Catostomus%20commersonii' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Catostomus+commersonii' }
  ],
  colors: { primary: '#6B6040', secondary: '#8B8060', belly: '#D8D0B8', fin: '#5A5038' },
};

export const featureOptions: FeatureOption = {
  correct: 'Olive-brown cylindrical fish with downward sucker mouth and no barbels',
  wrong: ['Boxy concave head with dark saddles', 'Deep body with long first dorsal ray', 'Golden body with barbels'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Olive-brown cylindrical fish with downward sucker mouth and no barbels.', answer: true, fishId: 'white_sucker' },
  { statement: 'This fish can be identified by: Cylindrical body, round in cross-section.', answer: true, fishId: 'white_sucker' },
  { statement: 'This fish can be identified by: Downward-pointing sucker mouth with fleshy lips.', answer: true, fishId: 'white_sucker' },
  { statement: 'You might find this fish in streams.', answer: true, fishId: 'white_sucker' }
];

export default white_sucker;

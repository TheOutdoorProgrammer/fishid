import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const white_sucker: Fish = {
  id: 'white_sucker',
  name: 'White Sucker',
  scientific: 'Catostomus commersonii',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Catostomus_commersonii.jpg/500px-Catostomus_commersonii.jpg',
  quizImage: '',
  features: [
    'Cylindrical body, round in cross-section',
    'Downward-pointing sucker mouth with fleshy lips',
    'Olive-brown back fading to white belly',
    'No barbels',
    'Forked tail',
    'Scales get larger toward rear of body'
  ],
  keyFeature: 'Olive-brown cylindrical fish with downward sucker mouth and no barbels',
  habitat: 'Streams, rivers, lakes; one of most common fish in Ohio',
  size: '12-18 inches typical',
  funFact: 'White suckers are one of the first fish to make spawning runs in spring. They crowd into small streams by the hundreds, often before the ice is fully melted.',
  refs: [
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
  { statement: 'White sucker are one of the rarest fish in Ohio.', answer: false, fishId: 'white_sucker' }
];

export default white_sucker;

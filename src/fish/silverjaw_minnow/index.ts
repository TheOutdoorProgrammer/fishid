import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const silverjaw_minnow: Fish = {
  id: 'silverjaw_minnow',
  name: 'Silverjaw Minnow',
  scientific: 'Ericymba buccata',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Ericymba_buccata_-_Gojilynx_-_606630924.jpeg/500px-Ericymba_buccata_-_Gojilynx_-_606630924.jpeg',
  quizImage: '',
  features: [
    'Translucent body',
    'Visible silvery chambers in lower jaw and snout',
    'Pale olive body with silvery lateral stripe',
    'Large head chambers visible through skin',
    'Subterminal mouth',
    'Forked tail'
  ],
  keyFeature: 'Translucent minnow with visible silver chambers in head and jaw',
  habitat: 'Sandy-bottomed streams and pools',
  size: '2-4 inches typical',
  funFact: 'Silverjaw minnows have unique enlarged head canals visible as silvery chambers through their translucent skin. No other minnow has this distinctive feature.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Ericymba%20buccata' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Ericymba+buccata' }
  ],
  colors: { primary: '#889888', secondary: '#A0B0A0', belly: '#D0D8D0', fin: '#708878' },
};

export const featureOptions: FeatureOption = {
  correct: 'Translucent minnow with visible silver chambers in head and jaw',
  wrong: ['Bold dark lateral stripe', 'Deep golden body', 'Steel-blue back with dorsal spot'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Silverjaw minnows have visible silver chambers in their head.', answer: true, fishId: 'silverjaw_minnow' }
];

export default silverjaw_minnow;

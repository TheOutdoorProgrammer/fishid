import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const blue_sucker: Fish = {
  id: 'blue_sucker',
  name: 'Blue Sucker',
  scientific: 'Cycleptus elongatus',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Blue_Sucker.jpg/500px-Blue_Sucker.jpg',
  quizImage: '',
  features: [
    'Elongated, streamlined body (unusual for a sucker)',
    'Blue-gray to dark blue body color',
    'Small head relative to body',
    'Large, sickle-shaped dorsal fin',
    'Subterminal sucker mouth with fleshy lips',
    'Deeply forked tail'
  ],
  keyFeature: 'Elongated blue-gray sucker with small head and sickle-shaped dorsal fin',
  habitat: 'Large rivers with swift current over rocky bottoms; Ohio River',
  size: '20-30 inches typical',
  funFact: 'Blue suckers are the most streamlined of all suckers, adapted for life in fast current. They are threatened or endangered in many states due to dam construction.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Cycleptus%20elongatus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Cycleptus+elongatus' }
  ],
  colors: { primary: '#4A5A78', secondary: '#5A6A88', belly: '#A8B0C0', fin: '#3A4A68' },
};

export const featureOptions: FeatureOption = {
  correct: 'Elongated blue-gray sucker with small head and sickle-shaped dorsal',
  wrong: ['Deep-bodied with large forward mouth', 'Boxy head with dark saddles', 'Golden body with red-orange tail'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Blue sucker have the typical deep body shape of most suckers.', answer: false, fishId: 'blue_sucker' }
];

export default blue_sucker;

import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const eastern_sand_darter: Fish = {
  id: 'eastern_sand_darter',
  name: 'Eastern Sand Darter',
  scientific: 'Ammocrypta pellucida',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Ammocrypta_pellucida.jpg/500px-Ammocrypta_pellucida.jpg',
  quizImage: '',
  features: [
    'Very slender, elongated body',
    'Nearly transparent/translucent body',
    'Row of small dark spots along lateral line',
    'Pointed snout',
    'Buries itself in sand with only eyes exposed',
    'Two widely separated dorsal fins'
  ],
  keyFeature: 'Nearly transparent darter that buries in sand with only eyes exposed',
  habitat: 'Sandy-bottomed pools and runs of clean streams',
  size: '2-3 inches typical',
  funFact: 'Eastern sand darters are almost invisible when buried in sand with just their eyes poking out. They are translucent enough to see their internal organs! Listed as threatened in Ohio.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Ammocrypta%20pellucida' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Ammocrypta+pellucida' }
  ],
  colors: { primary: '#C8B890', secondary: '#D8C8A0', belly: '#E0D8C0', fin: '#B8A880' },
};

export const featureOptions: FeatureOption = {
  correct: 'Nearly transparent darter that buries in sand with only eyes exposed',
  wrong: ['Bold blue and orange vertical bars', 'Fan-shaped tail with dorsal knobs', 'Green body with U/V marks'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Eastern sand darters bury themselves in sand with only their eyes exposed.', answer: true, fishId: 'eastern_sand_darter' }
];

export default eastern_sand_darter;

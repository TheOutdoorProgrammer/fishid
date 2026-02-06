import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const eastern_sand_darter: Fish = {
  id: 'eastern_sand_darter',
  name: 'Eastern Sand Darter',
  scientific: 'Ammocrypta pellucida',
  image: [
    '/img/fish/eastern_sand_darter/1.jpg',
    '/img/fish/eastern_sand_darter/2.jpg'
  ],
  features: [
    'Very slender, elongated body',
    'Nearly transparent/translucent body',
    'Row of small dark spots along lateral line',
    'Pointed snout',
    'Buries itself in sand with only eyes exposed',
    'Two widely separated dorsal fins'
  ],
  keyFeature: 'Nearly transparent darter that buries in sand with only eyes exposed',
  habitat: ['Ohio creeks and small rivers', 'Sandy-bottomed pools', 'runs of clean streams', 'clear streams and rivers'],
  size: '2-3 inches typical',
  funFact: 'Eastern sand darters are almost invisible when buried in sand with just their eyes poking out. They are translucent enough to see their internal organs! Listed as threatened in Ohio.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
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
  { statement: 'A key ID clue for this fish is: Nearly transparent darter that buries in sand with only eyes exposed.', answer: true, fishId: 'eastern_sand_darter' },
  { statement: 'This fish can be identified by: Very slender, elongated body.', answer: true, fishId: 'eastern_sand_darter' },
  { statement: 'This fish can be identified by: Nearly transparent/translucent body.', answer: true, fishId: 'eastern_sand_darter' },
  { statement: 'You might find this fish in sandy-bottomed pools.', answer: true, fishId: 'eastern_sand_darter' }
];

export default eastern_sand_darter;

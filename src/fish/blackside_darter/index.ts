import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const blackside_darter: Fish = {
  id: 'blackside_darter',
  name: 'Blackside Darter',
  scientific: 'Percina maculata',
  image: [
    '/img/fish/blackside_darter/1.jpg',
    '/img/fish/blackside_darter/2.jpg'
  ],
  features: [
    'Row of dark oval blotches along sides',
    'Olive-brown body',
    'Dark blotches may fuse into lateral stripe',
    'Distinct from logperch by blotch pattern',
    'Two dorsal fins',
    'Moderately robust body'
  ],
  keyFeature: 'Olive darter with row of dark oval blotches along side',
  habitat: ['creeks', 'rivers', 'rocky streams', 'streams'],
  size: '2-4 inches typical',
  funFact: 'Blackside darters are one of the most common Percina darters in Ohio. Their row of oval blotches is distinctive, though the blotches sometimes merge into a continuous band.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Percina%20maculata' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Percina+maculata' }
  ],
  colors: { primary: '#6B6038', secondary: '#8B8058', belly: '#C0B888', fin: '#5A5030' },
};

export const featureOptions: FeatureOption = {
  correct: 'Olive darter with row of dark oval blotches along side',
  wrong: ['Pig-like snout with alternating bar lengths', 'Blue and orange vertical bars', 'Nearly transparent body buried in sand'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Olive darter with row of dark oval blotches along side.', answer: true, fishId: 'blackside_darter', showImage: true },
  { statement: 'This fish can be identified by: Row of dark oval blotches along sides.', answer: true, fishId: 'blackside_darter', showImage: true },
  { statement: 'This fish can be identified by: Olive-brown body.', answer: true, fishId: 'blackside_darter', showImage: true },
  { statement: 'You might find this fish in pools and runs of streams with rocky or gravelly bottoms.', answer: true, fishId: 'blackside_darter', showImage: true }
];

export default blackside_darter;

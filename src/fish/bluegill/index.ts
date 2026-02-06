import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const bluegill: Fish = {
  id: 'bluegill',
  name: 'Bluegill',
  scientific: 'Lepomis macrochirus',
  image: [
    '/img/fish/bluegill/1.jpg',
    '/img/fish/bluegill/2.jpg'
  ],
  features: [
    'Deep, compressed (tall) body shape',
    'Dark blue-black ear flap (opercular flap)',
    'Orange-yellow breast/belly',
    'Olive to dark blue-green sides',
    'Dark vertical bars (faint)',
    'Small mouth'
  ],
  keyFeature: 'Deep body, dark ear flap, orange breast',
  habitat: ['Ponds', 'Lakes', 'Slow streams', 'Near vegetation'],
  size: '6-10 inches typical',
  funFact: 'Bluegill are one of the best fish for beginners to catch. Male bluegill guard their nests aggressively and will bite almost anything!',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Ohio State ENR Fish Taxonomy (Bluegill)', url: 'https://u.osu.edu/enrfishtax/2019/11/07/is-everything-a-bluegill/' },
    { label: 'Take Me Fishing: Bluegill', url: 'https://www.takemefishing.org/bluegill/' }
  ],
  colors: { primary: '#2E5B4E', secondary: '#3A7060', belly: '#E8A830', fin: '#2A4A3E' },
};

export const featureOptions: FeatureOption = {
  correct: 'Deep body with dark ear flap and orange breast',
  wrong: ['Elongated body with duck-bill snout', 'Silver body with horizontal stripes', 'Olive-gold body with glassy eyes'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Deep body, dark ear flap, orange breast.', answer: true, fishId: 'bluegill' },
  { statement: 'This fish can be identified by: Deep, compressed (tall) body shape.', answer: true, fishId: 'bluegill' },
  { statement: 'This fish can be identified by: Dark blue-black ear flap (opercular flap).', answer: true, fishId: 'bluegill' },
  { statement: 'You might find this fish in ponds.', answer: true, fishId: 'bluegill' }
];

export default bluegill;

import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const shovelnose_sturgeon: Fish = {
  id: 'shovelnose_sturgeon',
  name: 'Shovelnose Sturgeon',
  scientific: 'Scaphirhynchus platorynchus',
  image: [
    '/img/fish/shovelnose_sturgeon/1.jpg',
    '/img/fish/shovelnose_sturgeon/2.jpg'
  ],
  features: [
    'Flattened, shovel-shaped snout',
    'Four fringed barbels under snout',
    'Bony plates (scutes) on body',
    'Long, slender caudal peduncle covered in bony plates',
    'Brown to gray body',
    'Smaller than lake sturgeon'
  ],
  keyFeature: 'Flat shovel-shaped snout with fringed barbels and bony-plated tail stalk',
  habitat: ['Ohio River', 'creeks', 'rivers', 'tributaries'],
  size: '18-30 inches typical',
  funFact: 'Shovelnose sturgeon are the most abundant sturgeon in the Ohio River system. Unlike lake sturgeon, they are still relatively common. Their flat snout helps them feed in current.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Scaphirhynchus%20platorynchus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Scaphirhynchus+platorynchus' }
  ],
  colors: { primary: '#6A6050', secondary: '#7A7060', belly: '#B0A898', fin: '#5A5048' },
};

export const featureOptions: FeatureOption = {
  correct: 'Flat shovel-shaped snout with fringed barbels and bony-plated tail stalk',
  wrong: ['Conical pointed snout', 'Paddle-shaped rostrum', 'Long narrow gar-like snout'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Flat shovel-shaped snout with fringed barbels and bony-plated tail stalk.', answer: true, fishId: 'shovelnose_sturgeon' },
  { statement: 'This fish can be identified by: Flattened, shovel-shaped snout.', answer: true, fishId: 'shovelnose_sturgeon' },
  { statement: 'This fish can be identified by: Four fringed barbels under snout.', answer: true, fishId: 'shovelnose_sturgeon' },
  { statement: 'You might find this fish in ohio river.', answer: true, fishId: 'shovelnose_sturgeon' }
];

export default shovelnose_sturgeon;

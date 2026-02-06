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
  habitat: 'Ohio River and large tributaries; sandy or gravelly channels',
  size: '18-30 inches typical',
  funFact: 'Shovelnose sturgeon are the most abundant sturgeon in the Ohio River system. Unlike lake sturgeon, they are still relatively common. Their flat snout helps them feed in current.',
  refs: [
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
  { statement: 'Shovelnose sturgeon have a flat, shovel-shaped snout.', answer: true, fishId: 'shovelnose_sturgeon' }
];

export default shovelnose_sturgeon;

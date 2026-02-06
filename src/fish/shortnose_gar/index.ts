import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const shortnose_gar: Fish = {
  id: 'shortnose_gar',
  name: 'Shortnose Gar',
  scientific: 'Lepisosteus platostomus',
  image: [
    '/img/fish/shortnose_gar/1.jpg',
    '/img/fish/shortnose_gar/2.jpg'
  ],
  features: [
    'Shorter, broader snout than longnose gar',
    'Diamond-shaped ganoid scales',
    'Olive-green to brown body',
    'No spots on head or snout (unlike longnose)',
    'Dorsal fin set far back',
    'Spots mainly on rear fins and tail'
  ],
  keyFeature: 'Gar with shorter, broader snout and no spots on head',
  habitat: ['Ohio River and large tributaries; quiet backwaters'],
  size: '18-25 inches typical',
  funFact: 'Shortnose gar are less common than longnose gar in Ohio. The best way to tell them apart is the snout: shortnose gar have a snout that is less than twice the head length.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Lepisosteus%20platostomus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Lepisosteus+platostomus' }
  ],
  colors: { primary: '#5A6838', secondary: '#708048', belly: '#C8D0A0', fin: '#4A5830' },
};

export const featureOptions: FeatureOption = {
  correct: 'Gar with shorter broader snout and no spots on head',
  wrong: ['Very long narrow snout twice head length', 'Paddle-shaped rostrum', 'Bony plates with shark-like tail'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Shortnose gar have a snout longer than longnose gar.', answer: false, fishId: 'shortnose_gar' }
];

export default shortnose_gar;

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
  habitat: ['weedy bays and backwaters (Ohio lakes)', 'Ohio creeks and small rivers', 'Ohio River and large tributaries', 'Ohio River', 'large tributaries'],
  size: '18-25 inches typical',
  funFact: 'Shortnose gar are less common than longnose gar in Ohio. The best way to tell them apart is the snout: shortnose gar have a snout that is less than twice the head length.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
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
  { statement: 'A key ID clue for this fish is: Gar with shorter, broader snout and no spots on head.', answer: true, fishId: 'shortnose_gar' },
  { statement: 'This fish can be identified by: Shorter, broader snout than longnose gar.', answer: true, fishId: 'shortnose_gar' },
  { statement: 'This fish can be identified by: Diamond-shaped ganoid scales.', answer: true, fishId: 'shortnose_gar' },
  { statement: 'You might find this fish in ohio river.', answer: true, fishId: 'shortnose_gar' }
];

export default shortnose_gar;

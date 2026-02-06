import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const paddlefish: Fish = {
  id: 'paddlefish',
  name: 'Paddlefish',
  scientific: 'Polyodon spathula',
  image: [
    '/img/fish/paddlefish/1.jpg',
    '/img/fish/paddlefish/2.jpg'
  ],
  features: [
    'Extremely long, paddle-shaped rostrum (snout)',
    'Shark-like body shape with heterocercal tail',
    'Smooth, scaleless skin',
    'Very large mouth that opens wide for filter feeding',
    'Blue-gray to dark gray body',
    'Long gill rakers for filtering plankton'
  ],
  keyFeature: 'Unmistakable long paddle-shaped snout and smooth shark-like body',
  habitat: ['Ohio creeks and small rivers', 'Ohio inland lakes and reservoirs', 'Ohio River and large tributaries', 'Large rivers', 'reservoirs'],
  size: '36-60 inches typical, can exceed 5 feet',
  funFact: 'Paddlefish have been around since the age of dinosaurs. Their paddle-shaped rostrum is covered in electroreceptors that detect plankton, similar to a shark\'s electroreception!',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Polyodon%20spathula' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Polyodon+spathula' }
  ],
  colors: { primary: '#5A6878', secondary: '#6A7888', belly: '#A8B0B8', fin: '#4A5868' },
};

export const featureOptions: FeatureOption = {
  correct: 'Unmistakable long paddle-shaped snout and smooth shark-like body',
  wrong: ['Diamond-shaped armored scales', 'Five rows of bony plates', 'Long dorsal fin with tail spot'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Unmistakable long paddle-shaped snout and smooth shark-like body.', answer: true, fishId: 'paddlefish' },
  { statement: 'This fish can be identified by: Extremely long, paddle-shaped rostrum (snout).', answer: true, fishId: 'paddlefish' },
  { statement: 'This fish can be identified by: Shark-like body shape with heterocercal tail.', answer: true, fishId: 'paddlefish' },
  { statement: 'You might find this fish in large rivers.', answer: true, fishId: 'paddlefish' }
];

export default paddlefish;

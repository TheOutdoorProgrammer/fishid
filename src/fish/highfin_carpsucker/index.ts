import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const highfin_carpsucker: Fish = {
  id: 'highfin_carpsucker',
  name: 'Highfin Carpsucker',
  scientific: 'Carpiodes velifer',
  image: [
    '/img/fish/highfin_carpsucker/1.jpg',
    '/img/fish/highfin_carpsucker/2.jpg'
  ],
  features: [
    'Deep, compressed silver body',
    'Very tall dorsal fin (first rays extremely elongated)',
    'Small nipple-like projection on lower lip',
    'Subterminal sucker mouth',
    'Silver scales',
    'Forked tail'
  ],
  keyFeature: 'Silver carpsucker with exceptionally tall dorsal fin and nipple on lower lip',
  habitat: ['Ohio River', 'creeks', 'pools', 'rivers', 'streams', 'tributaries'],
  size: '12-18 inches typical',
  funFact: 'Highfin carpsuckers have the tallest dorsal fin of the carpsucker group. They can be distinguished from quillback by a small nipple-like projection on the lower lip.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Carpiodes%20velifer' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Carpiodes+velifer' }
  ],
  colors: { primary: '#8898A0', secondary: '#A0B0B8', belly: '#D0D8E0', fin: '#708088' },
};

export const featureOptions: FeatureOption = {
  correct: 'Silver carpsucker with exceptionally tall dorsal fin and nipple on lower lip',
  wrong: ['Long first ray only with no lip projection', 'Boxy head with dark saddle marks', 'Golden body with barbels'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Silver carpsucker with exceptionally tall dorsal fin and nipple on lower lip.', answer: true, fishId: 'highfin_carpsucker' },
  { statement: 'This fish can be identified by: Deep, compressed silver body.', answer: true, fishId: 'highfin_carpsucker' },
  { statement: 'This fish can be identified by: Very tall dorsal fin (first rays extremely elongated).', answer: true, fishId: 'highfin_carpsucker' },
  { statement: 'You might find this fish in large rivers with moderate current.', answer: true, fishId: 'highfin_carpsucker' }
];

export default highfin_carpsucker;

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
  habitat: ['Large rivers with moderate current', 'pools'],
  size: '12-18 inches typical',
  funFact: 'Highfin carpsuckers have the tallest dorsal fin of the carpsucker group. They can be distinguished from quillback by a small nipple-like projection on the lower lip.',
  refs: [
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
  { statement: 'Highfin carpsuckers have the same fin height as quillback.', answer: false, fishId: 'highfin_carpsucker' }
];

export default highfin_carpsucker;

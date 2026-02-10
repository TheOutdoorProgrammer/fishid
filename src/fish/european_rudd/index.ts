import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const european_rudd: Fish = {
  id: 'european_rudd',
  name: 'European Rudd',
  scientific: 'Scardinius erythrophthalmus',
  image: [
    '/img/fish/european_rudd/1.jpg',
    '/img/fish/european_rudd/2.jpg'
  ],
  features: [
    'Deep, compressed golden body',
    'Bright red-orange fins',
    'Orange-red eye',
    'Upturned mouth',
    'Keel on belly behind pelvic fins',
    'Similar to golden shiner but with red fins'
  ],
  keyFeature: 'Golden-bodied minnow with bright red-orange fins and red eye',
  habitat: ['Great Lakes', 'Lake Erie', 'lakes', 'reservoirs', 'tributaries'],
  size: '8-12 inches typical',
  funFact: 'European rudd were illegally introduced and are now invasive in parts of Ohio. They look similar to golden shiners but are easily identified by their bright red-orange fins.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Scardinius%20erythrophthalmus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Scardinius+erythrophthalmus' }
  ],
  colors: { primary: '#8B8030', secondary: '#A89840', belly: '#D0C878', fin: '#C03020' },
};

export const featureOptions: FeatureOption = {
  correct: 'Golden-bodied minnow with bright red-orange fins and red eye',
  wrong: ['Deep golden body with no red fins', 'Silver body with dark stripes', 'Steel-blue back with dark dorsal spot'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Golden-bodied minnow with bright red-orange fins and red eye.', answer: true, fishId: 'european_rudd', showImage: true },
  { statement: 'This fish can be identified by: Deep, compressed golden body.', answer: true, fishId: 'european_rudd', showImage: true },
  { statement: 'This fish can be identified by: Bright red-orange fins.', answer: true, fishId: 'european_rudd', showImage: true },
  { statement: 'You might find this fish in great lakes (including lake erie).', answer: true, fishId: 'european_rudd', showImage: true }
];

export default european_rudd;

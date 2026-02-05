import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const goldfish: Fish = {
  id: 'goldfish',
  name: 'Goldfish',
  scientific: 'Carassius auratus',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Carassius_auratus_-_Gold_fish_02.jpg/500px-Carassius_auratus_-_Gold_fish_02.jpg',
  quizImage: '',
  features: [
    'Deep, compressed body',
    'Gold to olive body (wild-type are dark)',
    'No barbels (unlike common carp)',
    'Long dorsal fin with serrated spine',
    'Forked tail',
    'Wild ones are dark olive, not bright gold'
  ],
  keyFeature: 'Carp-like fish without barbels; wild ones are dark olive (not pet-store gold)',
  habitat: 'Ponds, lakes, slow streams; released pet fish now established',
  size: '6-12 inches typical in wild, can reach 16+',
  funFact: 'Wild goldfish in Ohio are NOT the bright orange of pet stores. They revert to dark olive-bronze coloring within a generation. Released pet goldfish have established invasive populations in Ohio waters.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Carassius%20auratus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Carassius+auratus' }
  ],
  colors: { primary: '#5A6030', secondary: '#708040', belly: '#C0B878', fin: '#4A5028' },
};

export const featureOptions: FeatureOption = {
  correct: 'Carp-like fish without barbels; wild ones dark olive not bright gold',
  wrong: ['Large golden body with barbels', 'Bright orange body in the wild', 'Elongated body with dark-edged scales'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Wild goldfish in Ohio are bright orange like pet store fish.', answer: false, fishId: 'goldfish' }
];

export default goldfish;

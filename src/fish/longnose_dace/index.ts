import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const longnose_dace: Fish = {
  id: 'longnose_dace',
  name: 'Longnose Dace',
  scientific: 'Rhinichthys cataractae',
  image: [
    '/img/fish/longnose_dace/1.jpg',
    '/img/fish/longnose_dace/2.jpg'
  ],
  features: [
    'Small, elongated body',
    'Long snout that extends well past upper lip',
    'Small barbel at corner of mouth',
    'Dark olive-brown with mottled pattern',
    'Faint or no lateral stripe',
    'Breeding males develop red-orange on lips and fin bases'
  ],
  keyFeature: 'Elongated dace with distinctly long snout overhanging mouth',
  habitat: ['Ohio creeks and small rivers', 'Swift rocky riffles', 'well-oxygenated streams', 'clear streams and rivers'],
  size: '3-5 inches typical',
  funFact: 'Longnose dace are adapted for fast current and spend their time on the bottom of swift riffles, using their flattened bodies to resist being swept away.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Rhinichthys%20cataractae' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Rhinichthys+cataractae' }
  ],
  colors: { primary: '#5A5038', secondary: '#706848', belly: '#B8A888', fin: '#4A4030' },
};

export const featureOptions: FeatureOption = {
  correct: 'Elongated dace with distinctly long snout overhanging mouth',
  wrong: ['Bold dark stripe with tiny barbel', 'Two dark stripes with red belly', 'Large upturned mouth and vivid red side'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Elongated dace with distinctly long snout overhanging mouth.', answer: true, fishId: 'longnose_dace' },
  { statement: 'This fish can be identified by: Small, elongated body.', answer: true, fishId: 'longnose_dace' },
  { statement: 'This fish can be identified by: Long snout that extends well past upper lip.', answer: true, fishId: 'longnose_dace' },
  { statement: 'You might find this fish in swift rocky riffles.', answer: true, fishId: 'longnose_dace' }
];

export default longnose_dace;

import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const orangethroat_darter: Fish = {
  id: 'orangethroat_darter',
  name: 'Orangethroat Darter',
  scientific: 'Etheostoma spectabile',
  image: [
    '/img/fish/orangethroat_darter/1.jpg',
    '/img/fish/orangethroat_darter/2.jpg'
  ],
  features: [
    'Small with alternating blue and orange bars',
    'Bright orange throat and breast on breeding males',
    'Blue-green bars alternating with orange on sides',
    'Two dorsal fins',
    'Smaller and more delicate than rainbow darter',
    'Distinct orange throat patch'
  ],
  keyFeature: 'Small darter with bright orange throat and blue-orange barring',
  habitat: ['Rocky riffles of small to medium streams in western Ohio', 'clear streams and rivers', 'riffles, runs, and pools'],
  size: '2-3 inches typical',
  funFact: 'Orangethroat darters look similar to rainbow darters but are generally found in different streams. The bright orange throat is the key difference.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Etheostoma%20spectabile' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Etheostoma+spectabile' }
  ],
  colors: { primary: '#3060A0', secondary: '#D07020', belly: '#D08030', fin: '#2050A0' },
};

export const featureOptions: FeatureOption = {
  correct: 'Small darter with bright orange throat and blue-orange barring',
  wrong: ['W/X-shaped dark markings on pale body', 'Fan-shaped tail with fleshy knobs', 'Green body with U/V-shaped marks'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Small darter with bright orange throat and blue-orange barring.', answer: true, fishId: 'orangethroat_darter' },
  { statement: 'This fish can be identified by: Small with alternating blue and orange bars.', answer: true, fishId: 'orangethroat_darter' },
  { statement: 'This fish can be identified by: Bright orange throat and breast on breeding males.', answer: true, fishId: 'orangethroat_darter' },
  { statement: 'You might find this fish in rocky riffles of small to medium streams in western ohio.', answer: true, fishId: 'orangethroat_darter' }
];

export default orangethroat_darter;

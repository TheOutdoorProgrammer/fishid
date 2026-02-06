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
  habitat: 'Rocky riffles of small to medium streams in western Ohio',
  size: '2-3 inches typical',
  funFact: 'Orangethroat darters look similar to rainbow darters but are generally found in different streams. The bright orange throat is the key difference.',
  refs: [
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
  { statement: 'Orangethroat darters have a bright orange throat patch.', answer: true, fishId: 'orangethroat_darter' }
];

export default orangethroat_darter;

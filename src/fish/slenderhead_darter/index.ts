import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const slenderhead_darter: Fish = {
  id: 'slenderhead_darter',
  name: 'Slenderhead Darter',
  scientific: 'Percina phoxocephala',
  image: [
    '/img/fish/slenderhead_darter/1.jpg',
    '/img/fish/slenderhead_darter/2.jpg'
  ],
  features: [
    'Pointed, slender head and snout',
    'Row of small dark blotches on side',
    'Olive-yellow body',
    'Small dark bar under eye',
    'Two dorsal fins',
    'Streamlined body shape'
  ],
  keyFeature: 'Darter with distinctly pointed, narrow head and small side blotches',
  habitat: 'Riffles and runs of medium to large streams',
  size: '2-3 inches typical',
  funFact: 'Slenderhead darters are named for their distinctly pointed, narrow head. They prefer larger streams than many darter species and are most common in western Ohio.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Percina%20phoxocephala' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Percina+phoxocephala' }
  ],
  colors: { primary: '#7A7040', secondary: '#908858', belly: '#C8C090', fin: '#686038' },
};

export const featureOptions: FeatureOption = {
  correct: 'Darter with distinctly pointed narrow head and small side blotches',
  wrong: ['Pig-like conical snout', 'Connected dark blotches forming band', 'Blue breast with red sides'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Slenderhead darters have a distinctly pointed narrow head.', answer: true, fishId: 'slenderhead_darter' }
];

export default slenderhead_darter;

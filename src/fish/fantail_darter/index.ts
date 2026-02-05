import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const fantail_darter: Fish = {
  id: 'fantail_darter',
  name: 'Fantail Darter',
  scientific: 'Etheostoma flabellare',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Etheostoma_flabellare.jpg/500px-Etheostoma_flabellare.jpg',
  quizImage: '',
  features: [
    'Fan-shaped tail (rounded, not forked)',
    'Brown to olive body with dark bars and mottling',
    'Fleshy knobs on tips of dorsal spines in breeding males',
    'Two dorsal fins (spiny and soft)',
    'Flat head and belly for bottom-dwelling',
    'Brown-olive color provides camouflage'
  ],
  keyFeature: 'Brown darter with fan-shaped tail and fleshy knobs on dorsal spines (males)',
  habitat: 'Rocky riffles of small to medium streams; very common',
  size: '2-3 inches typical',
  funFact: 'Fantail darters get fleshy knobs on the tips of their dorsal spines during breeding. Males guard eggs laid on the undersides of flat rocks, doing "push-ups" to fan water over them.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Etheostoma%20flabellare' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Etheostoma+flabellare' }
  ],
  colors: { primary: '#6B5830', secondary: '#8B7850', belly: '#B8A880', fin: '#5A4828' },
};

export const featureOptions: FeatureOption = {
  correct: 'Brown darter with fan-shaped tail and fleshy knobs on dorsal spines',
  wrong: ['Alternating blue and orange vertical bars', 'Pale with W/X dark markings', 'U/V-shaped dark marks on green body'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Fantail darters get fleshy knobs on their dorsal spines during breeding.', answer: true, fishId: 'fantail_darter' }
];

export default fantail_darter;

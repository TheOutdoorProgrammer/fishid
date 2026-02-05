import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const blackside_darter: Fish = {
  id: 'blackside_darter',
  name: 'Blackside Darter',
  scientific: 'Percina maculata',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/..._The_fishes_of_Illinois_%281908%29_%2814801632653%29.jpg/500px-..._The_fishes_of_Illinois_%281908%29_%2814801632653%29.jpg',
  quizImage: '',
  features: [
    'Row of dark oval blotches along sides',
    'Olive-brown body',
    'Dark blotches may fuse into lateral stripe',
    'Distinct from logperch by blotch pattern',
    'Two dorsal fins',
    'Moderately robust body'
  ],
  keyFeature: 'Olive darter with row of dark oval blotches along side',
  habitat: 'Pools and runs of streams with rocky or gravelly bottoms',
  size: '2-4 inches typical',
  funFact: 'Blackside darters are one of the most common Percina darters in Ohio. Their row of oval blotches is distinctive, though the blotches sometimes merge into a continuous band.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Percina%20maculata' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Percina+maculata' }
  ],
  colors: { primary: '#6B6038', secondary: '#8B8058', belly: '#C0B888', fin: '#5A5030' },
};

export const featureOptions: FeatureOption = {
  correct: 'Olive darter with row of dark oval blotches along side',
  wrong: ['Pig-like snout with alternating bar lengths', 'Blue and orange vertical bars', 'Nearly transparent body buried in sand'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [];

export default blackside_darter;

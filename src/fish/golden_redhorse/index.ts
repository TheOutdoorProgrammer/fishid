import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const golden_redhorse: Fish = {
  id: 'golden_redhorse',
  name: 'Golden Redhorse',
  scientific: 'Moxostoma erythrurum',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Moxostoma_erythrurum.jpg/500px-Moxostoma_erythrurum.jpg',
  quizImage: '',
  features: [
    'Golden-olive body color',
    'Distinctly red or orange tail fin',
    'Sucker mouth with fleshy plicate (grooved) lips',
    'No dark lateral stripe',
    'Forked red-orange tail',
    'Round cross-section body'
  ],
  keyFeature: 'Golden-olive sucker with bright red-orange tail fin',
  habitat: 'Streams and rivers with moderate current over gravel',
  size: '12-18 inches typical',
  funFact: 'Golden redhorse are the most common redhorse species in Ohio. Their orange-red tail fin makes them one of the more attractive sucker species.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Moxostoma%20erythrurum' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Moxostoma+erythrurum' }
  ],
  colors: { primary: '#8B7830', secondary: '#A89048', belly: '#D8C888', fin: '#C06020' },
};

export const featureOptions: FeatureOption = {
  correct: 'Golden-olive sucker with bright red-orange tail fin',
  wrong: ['Silver body with V-shaped lower lip', 'Dark-edged scales with dusky fins', 'Very large body with thick lips'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Golden redhorse have bright red-orange tail fins.', answer: true, fishId: 'golden_redhorse' }
];

export default golden_redhorse;

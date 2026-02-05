import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const silver_chub: Fish = {
  id: 'silver_chub',
  name: 'Silver Chub',
  scientific: 'Macrhybopsis storeriana',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/FMIB_51127_Fall-Fish_or_Silver_Chub.jpeg/500px-FMIB_51127_Fall-Fish_or_Silver_Chub.jpeg',
  quizImage: '',
  features: [
    'Slender, elongated body',
    'Silver body with large eye',
    'Small barbel at corner of mouth',
    'Subterminal mouth',
    'Rounded snout',
    'Forked tail'
  ],
  keyFeature: 'Slender silver minnow with small barbel and large eye',
  habitat: 'Large rivers and Lake Erie; sandy or silty bottoms',
  size: '4-6 inches typical',
  funFact: 'Silver chub are important forage fish in Lake Erie and the Ohio River. They use their small barbels to detect food in murky bottom habitats.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Macrhybopsis%20storeriana' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Macrhybopsis+storeriana' }
  ],
  colors: { primary: '#8090A0', secondary: '#98A8B8', belly: '#D0D8E0', fin: '#708088' },
};

export const featureOptions: FeatureOption = {
  correct: 'Slender silver minnow with small barbel and large eye',
  wrong: ['Deep golden body with belly keel', 'Emerald-green translucent body', 'Red-orange spot behind eye'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Silver chub use barbels to detect food in murky water.', answer: true, fishId: 'silver_chub' }
];

export default silver_chub;

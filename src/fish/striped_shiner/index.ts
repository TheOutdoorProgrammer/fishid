import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const striped_shiner: Fish = {
  id: 'striped_shiner',
  name: 'Striped Shiner',
  scientific: 'Luxilus chrysocephalus',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Luxilus_chrysocephalus_67374238.jpg/500px-Luxilus_chrysocephalus_67374238.jpg',
  quizImage: '',
  features: [
    'Large, deep-bodied shiner',
    'Dark crescent-shaped markings on scales creating striped look',
    'Silver body with olive back',
    'Breeding males develop pink-rose body and blue head',
    'Large scales',
    'Forked tail'
  ],
  keyFeature: 'Large shiner with crescent scale marks; breeding males have pink body and blue head',
  habitat: 'Pools of small to medium streams over gravel',
  size: '4-7 inches typical',
  funFact: 'Striped shiners are among the most beautiful minnows when spawning. Males develop a stunning combination of pink body, blue head, and orange fins.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Luxilus%20chrysocephalus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Luxilus+chrysocephalus' }
  ],
  colors: { primary: '#7A8070', secondary: '#909888', belly: '#C8D0C0', fin: '#687060' },
};

export const featureOptions: FeatureOption = {
  correct: 'Large shiner with crescent scale marks; breeding males pink body blue head',
  wrong: ['Steel-blue back with dorsal fin spot', 'Slender translucent body with green sheen', 'Hard scraping ridge on lower jaw'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Striped shiners develop pink body and blue head during breeding.', answer: true, fishId: 'striped_shiner' }
];

export default striped_shiner;

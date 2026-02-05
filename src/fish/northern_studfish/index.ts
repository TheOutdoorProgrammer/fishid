import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const northern_studfish: Fish = {
  id: 'northern_studfish',
  name: 'Northern Studfish',
  scientific: 'Fundulus catenatus',
  image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Fundulus_catenatus.jpg',
  quizImage: '',
  features: [
    'Elongated body with flat head',
    'Rows of reddish-brown spots on olive body',
    'Upturned mouth',
    'Breeding males develop bright blue body with red spots',
    'Rounded tail',
    'Larger than other killifish'
  ],
  keyFeature: 'Large killifish with rows of red-brown spots; breeding males turn vivid blue',
  habitat: 'Clear rocky streams in southeastern Ohio',
  size: '4-6 inches typical',
  funFact: 'Northern studfish are one of Ohio\'s most colorful fish when in breeding dress. Males develop an electric blue body covered in red-orange spots.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Fundulus%20catenatus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Fundulus+catenatus' }
  ],
  colors: { primary: '#3060A0', secondary: '#C04020', belly: '#C8D0B8', fin: '#2050A0' },
};

export const featureOptions: FeatureOption = {
  correct: 'Large killifish with rows of red-brown spots; breeding males vivid blue',
  wrong: ['Bold single dark lateral stripe', 'Many thin vertical bars', 'Isolated spines before dorsal fin'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Northern studfish breeding males turn vivid blue with red spots.', answer: true, fishId: 'northern_studfish' }
];

export default northern_studfish;

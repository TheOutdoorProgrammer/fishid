import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const rosyface_shiner: Fish = {
  id: 'rosyface_shiner',
  name: 'Rosyface Shiner',
  scientific: 'Notropis rubellus',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Notropis_rubellus.jpg/500px-Notropis_rubellus.jpg',
  quizImage: '',
  features: [
    'Slender, streamlined body',
    'Silver with olive back',
    'Breeding males develop bright rosy-red face and head',
    'Large eye',
    'No lateral stripe or very faint',
    'Forked tail'
  ],
  keyFeature: 'Slender shiner whose breeding males have bright rosy-red head and face',
  habitat: 'Rocky riffles of clear streams; sensitive to pollution',
  size: '2-4 inches typical',
  funFact: 'Rosyface shiners are excellent water quality indicators - they need clean, clear, well-oxygenated streams to survive. Breeding males develop a stunning rosy-red head.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Notropis%20rubellus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Notropis+rubellus' }
  ],
  colors: { primary: '#708878', secondary: '#88A090', belly: '#C8D0C8', fin: '#607068' },
};

export const featureOptions: FeatureOption = {
  correct: 'Slender shiner whose breeding males have rosy-red head',
  wrong: ['Steel-blue back with dorsal spot', 'Deep body with crescent scale marks', 'Bold dark stripe with barbel'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Rosyface shiners can tolerate polluted water.', answer: false, fishId: 'rosyface_shiner' }
];

export default rosyface_shiner;

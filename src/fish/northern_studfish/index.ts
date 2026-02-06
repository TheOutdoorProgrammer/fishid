import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const northern_studfish: Fish = {
  id: 'northern_studfish',
  name: 'Northern Studfish',
  scientific: 'Fundulus catenatus',
  image: [
    '/img/fish/northern_studfish/1.jpg',
    '/img/fish/northern_studfish/2.jpg'
  ],
  features: [
    'Elongated body with flat head',
    'Rows of reddish-brown spots on olive body',
    'Upturned mouth',
    'Breeding males develop bright blue body with red spots',
    'Rounded tail',
    'Larger than other killifish'
  ],
  keyFeature: 'Large killifish with rows of red-brown spots; breeding males turn vivid blue',
  habitat: ['Ohio creeks and small rivers', 'Clear rocky streams in southeastern Ohio', 'clear streams and rivers', 'riffles, runs, and pools'],
  size: '4-6 inches typical',
  funFact: 'Northern studfish are one of Ohio\'s most colorful fish when in breeding dress. Males develop an electric blue body covered in red-orange spots.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
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
  { statement: 'A key ID clue for this fish is: Large killifish with rows of red-brown spots; breeding males turn vivid blue.', answer: true, fishId: 'northern_studfish' },
  { statement: 'This fish can be identified by: Elongated body with flat head.', answer: true, fishId: 'northern_studfish' },
  { statement: 'This fish can be identified by: Rows of reddish-brown spots on olive body.', answer: true, fishId: 'northern_studfish' },
  { statement: 'You might find this fish in clear rocky streams in southeastern ohio.', answer: true, fishId: 'northern_studfish' }
];

export default northern_studfish;

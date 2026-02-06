import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const rosyface_shiner: Fish = {
  id: 'rosyface_shiner',
  name: 'Rosyface Shiner',
  scientific: 'Notropis rubellus',
  image: [
    '/img/fish/rosyface_shiner/1.jpg',
    '/img/fish/rosyface_shiner/2.jpg'
  ],
  features: [
    'Slender, streamlined body',
    'Silver with olive back',
    'Breeding males develop bright rosy-red face and head',
    'Large eye',
    'No lateral stripe or very faint',
    'Forked tail'
  ],
  keyFeature: 'Slender shiner whose breeding males have bright rosy-red head and face',
  habitat: ['Rocky riffles of clear streams', 'sensitive to pollution', 'clear streams and rivers'],
  size: '2-4 inches typical',
  funFact: 'Rosyface shiners are excellent water quality indicators - they need clean, clear, well-oxygenated streams to survive. Breeding males develop a stunning rosy-red head.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
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
  { statement: 'A key ID clue for this fish is: Slender shiner whose breeding males have bright rosy-red head and face.', answer: true, fishId: 'rosyface_shiner' },
  { statement: 'This fish can be identified by: Slender, streamlined body.', answer: true, fishId: 'rosyface_shiner' },
  { statement: 'This fish can be identified by: Silver with olive back.', answer: true, fishId: 'rosyface_shiner' },
  { statement: 'You might find this fish in rocky riffles of clear streams.', answer: true, fishId: 'rosyface_shiner' }
];

export default rosyface_shiner;

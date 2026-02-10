import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const western_blacknose_dace: Fish = {
  id: 'western_blacknose_dace',
  name: 'Western Blacknose Dace',
  scientific: 'Rhinichthys obtusus',
  image: [
    '/img/fish/western_blacknose_dace/1.jpg',
    '/img/fish/western_blacknose_dace/2.jpg'
  ],
  features: [
    'Small, slender body',
    'Bold dark lateral stripe from snout to tail',
    'Small barbel at corner of mouth',
    'Olive-brown above, silver-white below',
    'Rounded snout',
    'Breeding males develop rusty-orange on sides and fins'
  ],
  keyFeature: 'Small dace with bold dark stripe from snout to tail and tiny mouth barbel',
  habitat: ['creeks', 'rivers', 'rocky streams', 'streams'],
  size: '2-3 inches typical',
  funFact: 'Western blacknose dace are one of the most common fish in small Ohio streams. The tiny barbel at the corner of the mouth helps distinguish them from similar small minnows.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Rhinichthys%20obtusus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Rhinichthys+obtusus' }
  ],
  colors: { primary: '#5A5838', secondary: '#707048', belly: '#C0B890', fin: '#4A4830' },
};

export const featureOptions: FeatureOption = {
  correct: 'Small dace with bold dark stripe from snout to tail and tiny barbel',
  wrong: ['Long snout overhanging mouth', 'Two dark lateral stripes with red belly', 'Deep golden body with belly keel'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Small dace with bold dark stripe from snout to tail and tiny mouth barbel.', answer: true, fishId: 'western_blacknose_dace', showImage: true },
  { statement: 'This fish can be identified by: Small, slender body.', answer: true, fishId: 'western_blacknose_dace', showImage: true },
  { statement: 'This fish can be identified by: Bold dark lateral stripe from snout to tail.', answer: true, fishId: 'western_blacknose_dace', showImage: true },
  { statement: 'You might find this fish in rocky riffles of small streams.', answer: true, fishId: 'western_blacknose_dace', showImage: true }
];

export default western_blacknose_dace;

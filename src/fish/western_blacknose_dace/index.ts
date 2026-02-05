import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const western_blacknose_dace: Fish = {
  id: 'western_blacknose_dace',
  name: 'Western Blacknose Dace',
  scientific: 'Rhinichthys obtusus',
  image: [
    '/img/fish/western_blacknose_dace/1.jpg'
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
  habitat: 'Rocky riffles of small streams; very common in Ohio',
  size: '2-3 inches typical',
  funFact: 'Western blacknose dace are one of the most common fish in small Ohio streams. The tiny barbel at the corner of the mouth helps distinguish them from similar small minnows.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Rhinichthys%20obtusus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Rhinichthys+obtusus' }
  ],
  colors: { primary: '#5A5838', secondary: '#707048', belly: '#C0B890', fin: '#4A4830' },
};

export const featureOptions: FeatureOption = {
  correct: 'Small dace with bold dark stripe from snout to tail and tiny barbel',
  wrong: ['Long snout overhanging mouth', 'Two dark lateral stripes with red belly', 'Deep golden body with belly keel'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [];

export default western_blacknose_dace;

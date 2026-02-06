import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const american_eel: Fish = {
  id: 'american_eel',
  name: 'American Eel',
  scientific: 'Anguilla rostrata',
  image: [
    '/img/fish/american_eel/1.jpg',
    '/img/fish/american_eel/2.jpg'
  ],
  features: [
    'Snake-like elongated body',
    'Continuous fin running along back, around tail, and under body',
    'Lower jaw projects past upper jaw',
    'Tiny embedded scales (appear scaleless)',
    'Brown to olive-green body',
    'Small pectoral fins, no pelvic fins'
  ],
  keyFeature: 'Snake-like body with continuous fin around tail and projecting lower jaw',
  habitat: 'Rivers, streams, Lake Erie; migrates to Sargasso Sea to spawn',
  size: '18-36 inches typical',
  funFact: 'American eels make one of nature\'s most incredible migrations. They are born in the Sargasso Sea (mid-Atlantic), swim to Ohio\'s rivers to grow up, then swim back to the ocean to spawn and die!',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Anguilla%20rostrata' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Anguilla+rostrata' }
  ],
  colors: { primary: '#4A5030', secondary: '#5A6040', belly: '#A8A890', fin: '#3A4028' },
};

export const featureOptions: FeatureOption = {
  correct: 'Snake-like body with continuous fin around tail and projecting lower jaw',
  wrong: ['Bony plates and shark-like tail', 'Paddle-shaped snout', 'Diamond-shaped armored scales'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'American eels are born in the Sargasso Sea and migrate to Ohio rivers.', answer: true, fishId: 'american_eel' }
];

export default american_eel;

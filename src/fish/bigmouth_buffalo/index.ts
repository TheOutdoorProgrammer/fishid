import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const bigmouth_buffalo: Fish = {
  id: 'bigmouth_buffalo',
  name: 'Bigmouth Buffalo',
  scientific: 'Ictiobus cyprinellus',
  image: [
    '/img/fish/bigmouth_buffalo/1.jpg',
    '/img/fish/bigmouth_buffalo/2.jpg'
  ],
  features: [
    'Very deep, compressed body (hump-backed)',
    'Large terminal mouth (facing forward, not downward)',
    'Olive-brown to bronze color',
    'No barbels',
    'Long dorsal fin',
    'Thin, smooth lips (not plicate like redhorse)'
  ],
  keyFeature: 'Deep-bodied buffalo with forward-facing large mouth and thin lips',
  habitat: ['Ohio River', 'creeks', 'lakes', 'reservoirs', 'rivers', 'tributaries'],
  size: '20-30 inches typical, can exceed 50 pounds',
  funFact: 'Bigmouth buffalo are filter feeders that can live over 100 years, making them one of the longest-lived freshwater fish in North America! One was aged at 112 years.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Ictiobus%20cyprinellus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Ictiobus+cyprinellus' }
  ],
  colors: { primary: '#5A5030', secondary: '#706840', belly: '#B8A878', fin: '#4A4028' },
};

export const featureOptions: FeatureOption = {
  correct: 'Deep-bodied buffalo with forward-facing large mouth and thin lips',
  wrong: ['Small downward-pointing mouth with thick lips', 'Dark uniform body with moderate mouth', 'Elongated body with small head'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Deep-bodied buffalo with forward-facing large mouth and thin lips.', answer: true, fishId: 'bigmouth_buffalo', showImage: true },
  { statement: 'This fish can be identified by: Very deep, compressed body (hump-backed).', answer: true, fishId: 'bigmouth_buffalo', showImage: true },
  { statement: 'This fish can be identified by: Large terminal mouth (facing forward, not downward).', answer: true, fishId: 'bigmouth_buffalo', showImage: true },
  { statement: 'You might find this fish in large rivers.', answer: true, fishId: 'bigmouth_buffalo', showImage: true }
];

export default bigmouth_buffalo;

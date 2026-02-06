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
  habitat: ['Large rivers, reservoirs, floodplain lakes'],
  size: '20-30 inches typical, can exceed 50 pounds',
  funFact: 'Bigmouth buffalo are filter feeders that can live over 100 years, making them one of the longest-lived freshwater fish in North America! One was aged at 112 years.',
  refs: [
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
  { statement: 'Bigmouth buffalo can live over 100 years.', answer: true, fishId: 'bigmouth_buffalo' }
];

export default bigmouth_buffalo;

import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const smallmouth_buffalo: Fish = {
  id: 'smallmouth_buffalo',
  name: 'Smallmouth Buffalo',
  scientific: 'Ictiobus bubalus',
  image: [
    '/img/fish/smallmouth_buffalo/1.jpg',
    '/img/fish/smallmouth_buffalo/2.jpg'
  ],
  features: [
    'Deep, compressed body similar to bigmouth buffalo',
    'Small, downward-pointing subterminal mouth',
    'Olive-brown to bronze body',
    'Thick, grooved lips',
    'High-backed body profile',
    'Long dorsal fin'
  ],
  keyFeature: 'Deep-bodied buffalo with small downward-pointing mouth and thick lips',
  habitat: 'Large rivers, pools with moderate current',
  size: '18-25 inches typical',
  funFact: 'Smallmouth buffalo are bottom feeders that use their small downward-facing mouth to vacuum up invertebrates. Unlike bigmouth buffalo, they cannot filter feed.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Ictiobus%20bubalus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Ictiobus+bubalus' }
  ],
  colors: { primary: '#5A5838', secondary: '#706848', belly: '#B8B080', fin: '#4A4830' },
};

export const featureOptions: FeatureOption = {
  correct: 'Deep-bodied buffalo with small downward-pointing mouth and thick lips',
  wrong: ['Large forward-facing mouth with thin lips', 'Elongated streamlined body', 'Dark body with moderate-sized mouth'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Smallmouth buffalo are filter feeders like bigmouth buffalo.', answer: false, fishId: 'smallmouth_buffalo' }
];

export default smallmouth_buffalo;

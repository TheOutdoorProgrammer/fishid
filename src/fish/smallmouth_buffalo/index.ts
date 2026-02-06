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
  habitat: ['Ohio creeks and small rivers', 'Ohio River and large tributaries', 'Large rivers', 'pools with moderate current', 'clear streams and rivers'],
  size: '18-25 inches typical',
  funFact: 'Smallmouth buffalo are bottom feeders that use their small downward-facing mouth to vacuum up invertebrates. Unlike bigmouth buffalo, they cannot filter feed.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
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
  { statement: 'A key ID clue for this fish is: Deep-bodied buffalo with small downward-pointing mouth and thick lips.', answer: true, fishId: 'smallmouth_buffalo' },
  { statement: 'This fish can be identified by: Deep, compressed body similar to bigmouth buffalo.', answer: true, fishId: 'smallmouth_buffalo' },
  { statement: 'This fish can be identified by: Small, downward-pointing subterminal mouth.', answer: true, fishId: 'smallmouth_buffalo' },
  { statement: 'You might find this fish in large rivers.', answer: true, fishId: 'smallmouth_buffalo' }
];

export default smallmouth_buffalo;

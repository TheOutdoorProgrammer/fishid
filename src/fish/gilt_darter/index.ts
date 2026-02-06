import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const gilt_darter: Fish = {
  id: 'gilt_darter',
  name: 'Gilt Darter',
  scientific: 'Percina evides',
  image: [
    '/img/fish/gilt_darter/1.jpg',
    '/img/fish/gilt_darter/2.jpg'
  ],
  features: [
    'Broad dark vertical bars on golden-orange body',
    'Bright orange-gold base color between bars',
    'Blue-green breast and lower head on breeding males',
    'Robust body',
    'Wide dark bars wider than interspaces',
    'Two dorsal fins'
  ],
  keyFeature: 'Golden-orange darter with broad dark bars and blue-green breast (males)',
  habitat: ['Ohio creeks and small rivers', 'Fast rocky riffles of clean rivers', 'endangered in Ohio', 'clear streams and rivers'],
  size: '2-3 inches typical',
  funFact: 'Gilt darters are one of Ohio\'s most endangered fish species. They require pristine rocky river habitat and are indicators of excellent water quality.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Percina%20evides' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Percina+evides' }
  ],
  colors: { primary: '#C08820', secondary: '#3A5A30', belly: '#2060A0', fin: '#A07018' },
};

export const featureOptions: FeatureOption = {
  correct: 'Golden-orange darter with broad dark bars and blue-green breast',
  wrong: ['Pointed narrow head', 'Bright orange throat', 'W/X-shaped dark markings'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Golden-orange darter with broad dark bars and blue-green breast (males).', answer: true, fishId: 'gilt_darter' },
  { statement: 'This fish can be identified by: Broad dark vertical bars on golden-orange body.', answer: true, fishId: 'gilt_darter' },
  { statement: 'This fish can be identified by: Bright orange-gold base color between bars.', answer: true, fishId: 'gilt_darter' },
  { statement: 'You might find this fish in fast rocky riffles of clean rivers.', answer: true, fishId: 'gilt_darter' }
];

export default gilt_darter;

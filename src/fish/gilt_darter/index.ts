import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const gilt_darter: Fish = {
  id: 'gilt_darter',
  name: 'Gilt Darter',
  scientific: 'Percina evides',
  image: [
    '/img/fish/gilt_darter/1.jpg'
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
  habitat: 'Fast rocky riffles of clean rivers; endangered in Ohio',
  size: '2-3 inches typical',
  funFact: 'Gilt darters are one of Ohio\'s most endangered fish species. They require pristine rocky river habitat and are indicators of excellent water quality.',
  refs: [
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
  { statement: 'Gilt darters are common throughout Ohio.', answer: false, fishId: 'gilt_darter' }
];

export default gilt_darter;

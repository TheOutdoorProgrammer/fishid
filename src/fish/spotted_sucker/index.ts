import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const spotted_sucker: Fish = {
  id: 'spotted_sucker',
  name: 'Spotted Sucker',
  scientific: 'Minytrema melanops',
  image: [
    '/img/fish/spotted_sucker/1.jpg',
    '/img/fish/spotted_sucker/2.jpg'
  ],
  features: [
    'Olive-brown body with rows of dark spots',
    'Each scale has a dark spot at its base creating parallel rows',
    'Subterminal sucker mouth',
    'Lateral line absent or incomplete',
    'Dark olive back fading to lighter sides',
    'Forked tail'
  ],
  keyFeature: 'Sucker with parallel rows of dark spots, one at base of each scale',
  habitat: ['Pools of clear streams', 'rivers over sand or gravel'],
  size: '10-16 inches typical',
  funFact: 'Spotted suckers are one of the easiest suckers to identify because of their distinctive rows of spots. The spots are actually at the base of each scale, creating neat parallel lines.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Minytrema%20melanops' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Minytrema+melanops' }
  ],
  colors: { primary: '#6B6038', secondary: '#8B8058', belly: '#C8C0A0', fin: '#5A5030' },
};

export const featureOptions: FeatureOption = {
  correct: 'Sucker with parallel rows of dark spots, one at base of each scale',
  wrong: ['Boxy head with dark saddle marks', 'Cylindrical body with no markings', 'Deep body with long first dorsal ray'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Spotted sucker lack parallel rows of dark spots.', answer: false, fishId: 'spotted_sucker' }
];

export default spotted_sucker;

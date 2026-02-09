import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const common_shiner: Fish = {
  id: 'common_shiner',
  name: 'Common Shiner',
  scientific: 'Luxilus cornutus',
  image: [
    '/img/fish/common_shiner/1.jpg',
    '/img/fish/common_shiner/2.jpg'
  ],
  features: [
    'Moderately deep, compressed body',
    'Silver body with olive back',
    'Large scales easily visible',
    'Breeding males turn rosy-pink with tubercles on head',
    'Mouth reaches to front of eye',
    'Forked tail'
  ],
  keyFeature: 'Silver minnow with large visible scales; breeding males turn rosy pink',
  habitat: ['creeks', 'pools', 'rivers', 'streams'],
  size: '4-7 inches typical',
  funFact: 'Common shiners are one of the showiest minnows when breeding. Males develop brilliant rosy-pink bodies and build nests in gravel over which many other minnow species also spawn.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Luxilus%20cornutus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Luxilus+cornutus' }
  ],
  colors: { primary: '#7A8070', secondary: '#909888', belly: '#C8D0C0', fin: '#687060' },
};

export const featureOptions: FeatureOption = {
  correct: 'Silver minnow with large visible scales; breeding males turn rosy pink',
  wrong: ['Bold dark stripe from snout to tail', 'Hard scraping ridge on lower jaw', 'Deep body with belly keel'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Silver minnow with large visible scales; breeding males turn rosy pink.', answer: true, fishId: 'common_shiner' },
  { statement: 'This fish can be identified by: Moderately deep, compressed body.', answer: true, fishId: 'common_shiner' },
  { statement: 'This fish can be identified by: Silver body with olive back.', answer: true, fishId: 'common_shiner' },
  { statement: 'You might find this fish in small to medium streams.', answer: true, fishId: 'common_shiner' }
];

export default common_shiner;

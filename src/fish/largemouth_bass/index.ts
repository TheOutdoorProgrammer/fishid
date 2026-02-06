import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const largemouth_bass: Fish = {
  id: 'largemouth_bass',
  name: 'Largemouth Bass',
  scientific: 'Micropterus salmoides',
  image: [
    '/img/fish/largemouth_bass/1.jpg',
    '/img/fish/largemouth_bass/2.jpg'
  ],
  features: [
    'Green to olive body with lighter belly',
    'Dark lateral stripe (horizontal band)',
    'Jaw extends PAST the eye',
    'Deeply notched dorsal fin (almost separated)',
    'Larger mouth compared to smallmouth'
  ],
  keyFeature: 'Large mouth extending past eye, dark horizontal stripe',
  habitat: ['weedy bays and backwaters (Ohio lakes)', 'Ohio creeks and small rivers', 'Ohio farm ponds and small lakes', 'Ohio inland lakes and reservoirs', 'Warm'],
  size: '12-20 inches typical',
  funFact: 'Largemouth bass are the most popular game fish in America. They can eat prey up to half their own body length!',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Ohio State AEL: Ohio reservoir largemouth bass', url: 'https://ael.osu.edu/understanding-differences-ohio-reservoir-largemouth-bass-populations' },
    { label: 'ODNR Fish Ohio program', url: 'https://ohiodnr.gov/buy-and-apply/hunting-fishing-boating/fishing-resources/fishohio-program' }
  ],
  colors: { primary: '#3D6B30', secondary: '#5A8548', belly: '#C8D8A8', fin: '#3A5828' },
};

export const featureOptions: FeatureOption = {
  correct: 'Jaw extends past eye with dark lateral stripe',
  wrong: ['Bronze body with vertical bars', 'White tip on the lower tail', 'Scattered dark spots on silver body'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Large mouth extending past eye, dark horizontal stripe.', answer: true, fishId: 'largemouth_bass' },
  { statement: 'This fish can be identified by: Green to olive body with lighter belly.', answer: true, fishId: 'largemouth_bass' },
  { statement: 'This fish can be identified by: Dark lateral stripe (horizontal band).', answer: true, fishId: 'largemouth_bass' },
  { statement: 'You might find this fish in warm.', answer: true, fishId: 'largemouth_bass' }
];

export default largemouth_bass;

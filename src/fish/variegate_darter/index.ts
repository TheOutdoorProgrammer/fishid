import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const variegate_darter: Fish = {
  id: 'variegate_darter',
  name: 'Variegate Darter',
  scientific: 'Etheostoma variatum',
  image: [
    '/img/fish/variegate_darter/1.jpg',
    '/img/fish/variegate_darter/2.jpg'
  ],
  features: [
    'Four dark saddle marks across back',
    'Alternating bars of blue-green and orange-red on sides',
    'More robust body than most darters',
    'Breeding males brilliantly colored',
    'Orange-red in spaces between dark bars',
    'Two dorsal fins'
  ],
  keyFeature: 'Robust darter with four saddle marks and alternating blue-green and orange bars',
  habitat: ['creeks', 'rivers', 'rocky rivers', 'streams'],
  size: '3-4 inches typical',
  funFact: 'Variegate darters are found primarily in the upper Ohio River drainage. They are one of the more colorful darter species and require clean, rocky rivers.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Etheostoma%20variatum' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Etheostoma+variatum' }
  ],
  colors: { primary: '#3060A0', secondary: '#C06020', belly: '#C8A060', fin: '#2050A0' },
};

export const featureOptions: FeatureOption = {
  correct: 'Robust darter with four saddle marks and blue-green/orange bars',
  wrong: ['Bright blue breast with red sides', 'Bright orange throat', 'Alternating bar lengths with pig snout'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Robust darter with four saddle marks and alternating blue-green and orange bars.', answer: true, fishId: 'variegate_darter', showImage: true },
  { statement: 'This fish can be identified by: Four dark saddle marks across back.', answer: true, fishId: 'variegate_darter', showImage: true },
  { statement: 'This fish can be identified by: Alternating bars of blue-green and orange-red on sides.', answer: true, fishId: 'variegate_darter', showImage: true },
  { statement: 'You might find this fish in large rocky riffles of clean rivers in eastern ohio.', answer: true, fishId: 'variegate_darter', showImage: true }
];

export default variegate_darter;

import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const steelhead: Fish = {
  id: 'steelhead',
  name: 'Steelhead Trout',
  scientific: 'Oncorhynchus mykiss',
  image: [
    '/img/fish/steelhead/1.jpg',
    '/img/fish/steelhead/2.png'
  ],
  features: [
    'Streamlined, torpedo-shaped body',
    'Chrome/silver sides (lake-run phase)',
    'Pink-red lateral stripe (spawning)',
    'Black spots on back and tail',
    'Square or slightly forked tail',
    'Adipose fin present'
  ],
  keyFeature: 'Chrome silver body with pink stripe and black spots on tail',
  habitat: ['Lake Erie', 'spawning runs up tributaries (Rocky River', 'Chagrin River', 'etc.)'],
  size: '20-30 inches typical',
  funFact: 'Steelhead are actually the same species as rainbow trout! The difference is that steelhead migrate to Lake Erie while rainbow trout stay in streams. They run up Ohio\'s tributaries every fall and spring.',
  refs: [
    { label: 'ODNR: Steelhead fishing', url: 'https://ohiodnr.gov/home/additional-resources/division-of-wildlife/steelhead-fishing-promo' },
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'ODNR Fish Ohio program', url: 'https://ohiodnr.gov/buy-and-apply/hunting-fishing-boating/fishing-resources/fishohio-program' }
  ],
  colors: { primary: '#7A8B95', secondary: '#95A8B5', belly: '#D8E0E8', fin: '#607078' },
};

export const featureOptions: FeatureOption = {
  correct: 'Chrome silver sides with spots on tail',
  wrong: ['Golden-bronze body with large scales', 'Olive body with dark saddle marks', 'Deep green body with orange breast'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Steelhead and rainbow trout are different species.', answer: false, fishId: 'steelhead' }
];

export default steelhead;

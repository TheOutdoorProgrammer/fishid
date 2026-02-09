import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const scarlet_shiner: Fish = {
  id: 'scarlet_shiner',
  name: 'Scarlet Shiner',
  scientific: 'Lythrurus fasciolaris',
  image: [
    '/img/fish/scarlet_shiner/1.jpg',
    '/img/fish/scarlet_shiner/2.jpg'
  ],
  features: [
    'Moderately deep body',
    'Olive back with silver sides',
    'Breeding males develop bright scarlet-red fins and body',
    'Dark crescent markings on scales',
    'Slightly compressed body',
    'Forked tail'
  ],
  keyFeature: 'Shiner with breeding males showing brilliant scarlet-red coloring',
  habitat: ['creeks', 'rivers', 'streams'],
  size: '3-4 inches typical',
  funFact: 'Scarlet shiners are named for the stunning scarlet-red color that breeding males develop. They are most common in streams of southeastern Ohio.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Lythrurus%20fasciolaris' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Lythrurus+fasciolaris' }
  ],
  colors: { primary: '#708870', secondary: '#88A088', belly: '#C8D0C0', fin: '#C03030' },
};

export const featureOptions: FeatureOption = {
  correct: 'Shiner with breeding males showing brilliant scarlet-red coloring',
  wrong: ['Bright red fins with steel-blue body', 'Rosy-pink head on breeding males', 'Deep golden body with belly keel'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Shiner with breeding males showing brilliant scarlet-red coloring.', answer: true, fishId: 'scarlet_shiner' },
  { statement: 'This fish can be identified by: Moderately deep body.', answer: true, fishId: 'scarlet_shiner' },
  { statement: 'This fish can be identified by: Olive back with silver sides.', answer: true, fishId: 'scarlet_shiner' },
  { statement: 'You might find this fish in pools of medium streams in southern ohio.', answer: true, fishId: 'scarlet_shiner' }
];

export default scarlet_shiner;

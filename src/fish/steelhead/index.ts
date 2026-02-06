import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const steelhead: Fish = {
  id: 'steelhead',
  name: 'Steelhead Trout',
  scientific: 'Oncorhynchus mykiss',
  image: ['/img/fish/steelhead/1.jpg', '/img/fish/steelhead/2.png'],
  features: [
    'Streamlined, torpedo-shaped body',
    'Chrome/silver sides (lake-run phase)',
    'Pink-red lateral stripe (often stronger during spawning)',
    'Black spots on back and tail',
    'Square or slightly forked tail',
    'Adipose fin present',
  ],
  keyFeature: 'Chrome-silver sides with black spots on the tail',
  habitat: ['Ohio creeks and small rivers', 'Ohio inland lakes and reservoirs', 'Lake Erie and tributaries (Ohio)', 'Great Lakes (Lake Erie)', 'open lake waters (lake-run phase)'],
  size: '20–30 inches typical',
  funFact:
    "Steelhead are the same species as rainbow trout—the term ‘steelhead’ refers to fish that migrate to a large lake or the ocean and return to streams to spawn. In Ohio, Lake Erie steelhead are supported by hatchery stocking.",
  refs: [
    {
      label: 'ODNR: Steelhead fishing (Lake Erie tributaries)',
      url: 'https://ohiodnr.gov/home/additional-resources/division-of-wildlife/steelhead-fishing-promo',
    },
    {
      label: "ODNR (PDF): Ohio's Steelhead Program",
      url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/fish-management/024FH_-_Ohios_Steelhead_Program.pdf',
    },
    {
      label: 'ODNR Sport Fish of Ohio Field Guide (PDF)',
      url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf',
    },
  ],
  colors: { primary: '#7A8B95', secondary: '#95A8B5', belly: '#D8E0E8', fin: '#607078' },
};

export const featureOptions: FeatureOption = {
  correct: 'Chrome-silver sides with black spots on the tail',
  wrong: ['Golden-bronze body with large scales', 'Olive body with dark saddle marks', 'Deep green body with orange breast'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Steelhead and rainbow trout are different species.', answer: false, fishId: 'steelhead' },
  {
    statement: 'Steelhead typically migrate from Lake Erie into tributary streams for spawning runs.',
    answer: true,
    fishId: 'steelhead',
  },
  {
    statement: 'Steelhead have an adipose fin (a small fleshy fin between the dorsal and tail).',
    answer: true,
    fishId: 'steelhead',
  },
  {
    statement: 'Steelhead die after spawning and cannot return to Lake Erie.',
    answer: false,
    fishId: 'steelhead',
  },
];

export default steelhead;

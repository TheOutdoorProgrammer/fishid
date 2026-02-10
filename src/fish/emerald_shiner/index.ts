import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const emerald_shiner: Fish = {
  id: 'emerald_shiner',
  name: 'Emerald Shiner',
  scientific: 'Notropis atherinoides',
  image: [
    '/img/fish/emerald_shiner/1.jpg',
    '/img/fish/emerald_shiner/2.jpg'
  ],
  features: [
    'Slender, streamlined body',
    'Bright silver with emerald-green sheen on back',
    'Large eye relative to head',
    'Translucent body (can see through it when alive)',
    'Forked tail',
    'Compressed body shape'
  ],
  keyFeature: 'Slender translucent silver minnow with emerald-green sheen on back',
  habitat: ['Great Lakes', 'Lake Erie', 'Ohio River', 'creeks', 'lakes', 'reservoirs', 'rivers', 'tributaries'],
  size: '2-4 inches typical',
  funFact: 'Emerald shiners are the most important forage fish in Lake Erie, forming massive schools that feed walleye, perch, and other game fish. They are also top-tier live bait.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Notropis%20atherinoides' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Notropis+atherinoides' }
  ],
  colors: { primary: '#508868', secondary: '#68A080', belly: '#D0D8D0', fin: '#408058' },
};

export const featureOptions: FeatureOption = {
  correct: 'Slender translucent silver minnow with emerald-green sheen',
  wrong: ['Deep golden body with belly keel', 'Steel-blue back with dorsal fin spot', 'Bold lateral stripe and blunt snout'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Slender translucent silver minnow with emerald-green sheen on back.', answer: true, fishId: 'emerald_shiner', showImage: true },
  { statement: 'This fish can be identified by: Slender, streamlined body.', answer: true, fishId: 'emerald_shiner', showImage: true },
  { statement: 'This fish can be identified by: Bright silver with emerald-green sheen on back.', answer: true, fishId: 'emerald_shiner', showImage: true },
  { statement: 'You might find this fish in great lakes (including lake erie).', answer: true, fishId: 'emerald_shiner', showImage: true }
];

export default emerald_shiner;

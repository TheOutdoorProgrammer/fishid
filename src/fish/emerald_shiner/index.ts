import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const emerald_shiner: Fish = {
  id: 'emerald_shiner',
  name: 'Emerald Shiner',
  scientific: 'Notropis atherinoides',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Emerald_shiner.jpg/500px-Emerald_shiner.jpg',
  quizImage: '',
  features: [
    'Slender, streamlined body',
    'Bright silver with emerald-green sheen on back',
    'Large eye relative to head',
    'Translucent body (can see through it when alive)',
    'Forked tail',
    'Compressed body shape'
  ],
  keyFeature: 'Slender translucent silver minnow with emerald-green sheen on back',
  habitat: 'Lake Erie, large rivers; open water in large schools',
  size: '2-4 inches typical',
  funFact: 'Emerald shiners are the most important forage fish in Lake Erie, forming massive schools that feed walleye, perch, and other game fish. They are also top-tier live bait.',
  refs: [
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
  { statement: 'Emerald shiners are the most important forage fish in Lake Erie.', answer: true, fishId: 'emerald_shiner' }
];

export default emerald_shiner;

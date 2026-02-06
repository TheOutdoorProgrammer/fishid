import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const central_mudminnow: Fish = {
  id: 'central_mudminnow',
  name: 'Central Mudminnow',
  scientific: 'Umbra limi',
  image: [
    '/img/fish/central_mudminnow/1.jpg',
    '/img/fish/central_mudminnow/2.jpg'
  ],
  features: [
    'Small, stout body with rounded tail',
    'Dark brown to olive with faint bars or mottling',
    'Dark bar at base of rounded tail',
    'Rounded dorsal fin set far back near tail',
    'Can breathe air and survive in mud',
    'No adipose fin'
  ],
  keyFeature: 'Small stout fish with rounded tail, dark tail-base bar, and air-breathing ability',
  habitat: 'Swamps, bogs, heavily vegetated ditches; can survive in mud',
  size: '2-4 inches typical',
  funFact: 'Central mudminnows can survive being frozen in ice and can breathe air by gulping it at the surface. They can also survive buried in mud when ponds dry up.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Umbra%20limi' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Umbra+limi' }
  ],
  colors: { primary: '#4A4830', secondary: '#5A5840', belly: '#908870', fin: '#3A3828' },
};

export const featureOptions: FeatureOption = {
  correct: 'Small stout fish with rounded tail, dark tail-base bar, and air-breathing',
  wrong: ['Slender translucent body with silver stripe', 'Wide flat head with fan pectoral fins', 'Multiple isolated spines before dorsal'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Central mudminnows can survive being frozen in ice.', answer: true, fishId: 'central_mudminnow' }
];

export default central_mudminnow;

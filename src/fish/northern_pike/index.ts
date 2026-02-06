import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const northern_pike: Fish = {
  id: 'northern_pike',
  name: 'Northern Pike',
  scientific: 'Esox lucius',
  image: [
    '/img/fish/northern_pike/1.jpg',
    '/img/fish/northern_pike/2.jpg'
  ],
  features: [
    'Long, torpedo-shaped body',
    'Dark green with light bean-shaped spots',
    'Duck-bill shaped snout',
    'Large sharp teeth',
    'Dorsal fin set far back near tail',
    '5 sensory pores on each side of lower jaw'
  ],
  keyFeature: 'Elongated body, duck-bill snout, light spots on dark background',
  habitat: ['Weedy lakes, rivers, marshes; Lake Erie tributaries'],
  size: '20-30 inches typical, can exceed 40',
  funFact: 'Northern pike are ambush predators that can strike at speeds up to 10 mph. They\'ve been known to eat ducklings, frogs, and even small muskrats!',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'ODNR Pike (state-listed species PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/state-listed-species/pike.pdf' },
    { label: 'ODNR Fish Ohio program', url: 'https://ohiodnr.gov/buy-and-apply/hunting-fishing-boating/fishing-resources/fishohio-program' }
  ],
  colors: { primary: '#3A5C2E', secondary: '#4A7038', belly: '#C8D8B0', fin: '#304A24' },
};

export const featureOptions: FeatureOption = {
  correct: 'Dark green with light spots, duck-bill snout',
  wrong: ['Light body with dark bars or spots', 'Bronze body with vertical bars', 'Silver body with pink stripe'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Northern pike have light spots on a dark body.', answer: true, fishId: 'northern_pike' }
];

export default northern_pike;

import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const creek_chub: Fish = {
  id: 'creek_chub',
  name: 'Creek Chub',
  scientific: 'Semotilus atromaculatus',
  image: [
    '/img/fish/creek_chub/1.jpg',
    '/img/fish/creek_chub/2.jpg'
  ],
  features: [
    'Large minnow with robust body',
    'Dark spot at base of dorsal fin',
    'Dark lateral stripe especially on young fish',
    'Large mouth for a minnow',
    'Breeding males develop pink/rose coloring and head tubercles',
    'Olive-brown back with silver sides'
  ],
  keyFeature: 'Large minnow with dark spot at dorsal fin base and big mouth',
  habitat: 'Small to medium streams; one of most common stream fish',
  size: '5-8 inches typical, can reach 12',
  funFact: 'Creek chub males build nests by carrying stones in their mouths to create gravel mounds. A single nest mound can contain thousands of pebbles!',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Semotilus%20atromaculatus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Semotilus+atromaculatus' }
  ],
  colors: { primary: '#6B6840', secondary: '#8B8858', belly: '#C8C8A0', fin: '#5A5838' },
};

export const featureOptions: FeatureOption = {
  correct: 'Large minnow with dark spot at dorsal fin base and big mouth',
  wrong: ['Hard scraping ridge on lower jaw', 'Deep golden body with decurved lateral line', 'Blunt head with fat pad'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Creek chub males carry stones in their mouths to build nests.', answer: true, fishId: 'creek_chub' }
];

export default creek_chub;

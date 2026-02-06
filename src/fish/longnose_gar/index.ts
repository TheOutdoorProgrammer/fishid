import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const longnose_gar: Fish = {
  id: 'longnose_gar',
  name: 'Longnose Gar',
  scientific: 'Lepisosteus osseus',
  image: [
    '/img/fish/longnose_gar/1.jpg',
    '/img/fish/longnose_gar/2.jpg'
  ],
  features: [
    'Very long, narrow snout (twice head length)',
    'Diamond-shaped ganoid (armored) scales',
    'Olive-green to brown body with spots',
    'Dorsal fin set far back near tail',
    'Elongated cylindrical body',
    'Can breathe air using swim bladder'
  ],
  keyFeature: 'Extremely long, narrow snout and diamond-shaped armored scales',
  habitat: ['Large rivers, lakes, and reservoirs; sluggish backwaters'],
  size: '24-36 inches typical, can exceed 5 feet',
  funFact: 'Longnose gar are living fossils that have remained virtually unchanged for 100 million years. Their diamond-shaped scales are so hard that Native Americans used them as arrowheads!',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Lepisosteus%20osseus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Lepisosteus+osseus' }
  ],
  colors: { primary: '#5A6838', secondary: '#708048', belly: '#C8D0A0', fin: '#4A5830' },
};

export const featureOptions: FeatureOption = {
  correct: 'Extremely long narrow snout and diamond-shaped armored scales',
  wrong: ['Short broad snout', 'Long dorsal fin reaching rounded tail', 'Paddle-shaped rostrum'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Longnose gar have remained virtually unchanged for 100 million years.', answer: true, fishId: 'longnose_gar' }
];

export default longnose_gar;

import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const grass_pickerel: Fish = {
  id: 'grass_pickerel',
  name: 'Grass Pickerel',
  scientific: 'Esox americanus vermiculatus',
  image: [
    '/img/fish/grass_pickerel/1.jpg',
    '/img/fish/grass_pickerel/2.jpg'
  ],
  features: [
    'Small, torpedo-shaped body (smallest pike)',
    'Fully scaled cheeks and gill covers',
    'Dark vertical bar under eye (tear-drop mark)',
    'Green to brown with dark wavy bars',
    'Short, duck-bill snout',
    'Dorsal fin set far back'
  ],
  keyFeature: 'Smallest pike family member with dark tear-drop under eye and fully scaled cheeks',
  habitat: 'Quiet, weedy streams, pond edges, ditches, and marshes',
  size: '6-10 inches typical, rarely exceeds 12',
  funFact: 'Grass pickerel are the smallest member of the pike family in Ohio. Despite their tiny size, they are fierce little predators that ambush prey from weed beds.',
  refs: [
    { label: 'USFWS species media', url: 'https://www.fws.gov/media/grass-pickerel-0' },
    { label: 'North American Native Fishes Association (PDF)', url: 'https://www.nanfa.org/ac/grass-pickerel.pdf' },
    { label: 'COSEWIC status report (Canada)', url: 'https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/grass-pickerel.html' },
    { label: 'Outdoor Nebraska article', url: 'https://magazine.outdoornebraska.gov/blogs/barbs-and-backlashes/grass-pickerel/' }
  ],
  colors: { primary: '#4A5830', secondary: '#5A6840', belly: '#C0C890', fin: '#3A4828' },
};

export const featureOptions: FeatureOption = {
  correct: 'Smallest pike with dark tear-drop under eye and fully scaled cheeks',
  wrong: ['Very large with light spots on dark body', 'Dark markings on light body', 'Long narrow snout twice head length'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Grass pickerel have fully scaled cheeks and gill covers.', answer: true, fishId: 'grass_pickerel' }
];

export default grass_pickerel;

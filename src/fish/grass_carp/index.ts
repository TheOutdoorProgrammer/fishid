import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const grass_carp: Fish = {
  id: 'grass_carp',
  name: 'Grass Carp',
  scientific: 'Ctenopharyngodon idella',
  image: [
    '/img/fish/grass_carp/1.jpg'
  ],
  features: [
    'Large, elongated torpedo-shaped body',
    'Large scales with dark edges',
    'Broad, flat head',
    'No barbels (unlike common carp)',
    'Terminal mouth level with eyes',
    'Olive-green body with silvery sides'
  ],
  keyFeature: 'Large elongated carp with dark-edged scales and no barbels',
  habitat: 'Lakes, ponds, slow rivers; stocked for vegetation control',
  size: '24-40 inches typical, can exceed 50 pounds',
  funFact: 'Grass carp eat their weight in vegetation daily! Triploid (sterile) grass carp are stocked in Ohio ponds to control aquatic weeds. Fertile grass carp are invasive and illegal to stock.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Ctenopharyngodon%20idella' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Ctenopharyngodon+idella' }
  ],
  colors: { primary: '#5A6838', secondary: '#708048', belly: '#C8D0A0', fin: '#4A5830' },
};

export const featureOptions: FeatureOption = {
  correct: 'Large elongated carp with dark-edged scales and no barbels',
  wrong: ['Golden body with two barbels', 'Deep body with long first dorsal ray', 'Eyes set very low on head'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Grass carp eat their weight in vegetation daily.', answer: true, fishId: 'grass_carp' }
];

export default grass_carp;

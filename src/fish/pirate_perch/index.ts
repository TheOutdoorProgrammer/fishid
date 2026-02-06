import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const pirate_perch: Fish = {
  id: 'pirate_perch',
  name: 'Pirate Perch',
  scientific: 'Aphredoderus sayanus',
  image: [
    '/img/fish/pirate_perch/1.jpg',
    '/img/fish/pirate_perch/2.jpg'
  ],
  features: [
    'Small, dark-bodied fish',
    'Anus located under the throat in adults (unique!)',
    'Single dorsal fin with spiny and soft portions',
    'Large head and mouth for body size',
    'Dark purple-brown to black body',
    'No lateral line'
  ],
  keyFeature: 'Dark small fish with unique forward-migrating anus positioned under throat',
  habitat: ['Swamps, backwaters, quiet streams with heavy vegetation and debris'],
  size: '3-5 inches typical',
  funFact: 'Pirate perch have one of the weirdest features in the fish world: as they mature, their anus migrates forward from the normal position to underneath the throat! Scientists still debate why.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Aphredoderus%20sayanus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Aphredoderus+sayanus' }
  ],
  colors: { primary: '#3A3030', secondary: '#4A4040', belly: '#807070', fin: '#2A2020' },
};

export const featureOptions: FeatureOption = {
  correct: 'Dark small fish with unique forward-migrating anus under throat',
  wrong: ['Adipose fin with spiny rays', 'Slender translucent body with silver stripe', 'Fan-like pectoral fins and flat head'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Pirate perch have their anus in the normal position behind the body.', answer: false, fishId: 'pirate_perch' }
];

export default pirate_perch;

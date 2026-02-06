import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const chinook_salmon: Fish = {
  id: 'chinook_salmon',
  name: 'Chinook Salmon',
  scientific: 'Oncorhynchus tshawytscha',
  image: [
    '/img/fish/chinook_salmon/1.jpg',
    '/img/fish/chinook_salmon/2.jpg'
  ],
  features: [
    'Large, streamlined silver body',
    'Black spots on back AND both lobes of tail',
    'Black gum line (mouth interior is dark)',
    'Silver sides (lake phase) turning dark during spawn',
    'Large size compared to other Pacific salmon',
    'Adipose fin present'
  ],
  keyFeature: 'Large salmon with black spots on both tail lobes and dark gum line',
  habitat: ['Lake Erie open waters', 'spawns in tributaries'],
  size: '24-36 inches typical in Lake Erie',
  funFact: 'Chinook (king) salmon are the largest Pacific salmon species, originally from the Pacific Northwest. They are stocked in Lake Erie and provide an exciting fall fishery.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Oncorhynchus%20tshawytscha' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Oncorhynchus+tshawytscha' }
  ],
  colors: { primary: '#5A6A70', secondary: '#708088', belly: '#C8D0D8', fin: '#4A5A60' },
};

export const featureOptions: FeatureOption = {
  correct: 'Large salmon with spots on both tail lobes and dark gum line',
  wrong: ['Spots on upper tail lobe only with white gums', 'No spots on tail', 'Small silver body with pink sheen'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Chinook salmon have a dark/black gum line.', answer: true, fishId: 'chinook_salmon' }
];

export default chinook_salmon;

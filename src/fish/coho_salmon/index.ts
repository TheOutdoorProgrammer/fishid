import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const coho_salmon: Fish = {
  id: 'coho_salmon',
  name: 'Coho Salmon',
  scientific: 'Oncorhynchus kisutch',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Oncorhynchus_kisutch.jpeg/500px-Oncorhynchus_kisutch.jpeg',
  quizImage: '',
  features: [
    'Silver body with dark back',
    'Black spots on back and UPPER lobe of tail only',
    'White gum line (light mouth)',
    'Smaller than chinook salmon',
    'Males develop hooked jaw (kype) when spawning',
    'Adipose fin present'
  ],
  keyFeature: 'Silver salmon with spots only on upper tail lobe and white gum line',
  habitat: 'Lake Erie; spawns in tributaries in fall',
  size: '20-28 inches typical',
  funFact: 'Coho salmon can be distinguished from chinook by checking the gum line: coho have white gums, chinook have black. Coho were once common in Lake Erie but numbers have declined.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Oncorhynchus%20kisutch' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Oncorhynchus+kisutch' }
  ],
  colors: { primary: '#5A6878', secondary: '#6A7888', belly: '#C8D0D8', fin: '#4A5868' },
};

export const featureOptions: FeatureOption = {
  correct: 'Silver salmon with spots only on upper tail lobe and white gum line',
  wrong: ['Spots on both tail lobes with black gums', 'No spots at all', 'Dark body with pale spots and forked tail'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Coho salmon have black gums like chinook salmon.', answer: false, fishId: 'coho_salmon' }
];

export default coho_salmon;

import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const silver_carp_invasive: Fish = {
  id: 'silver_carp_invasive',
  name: 'Silver Carp',
  scientific: 'Hypophthalmichthys molitrix',
  image: [
    '/img/fish/silver_carp_invasive/1.jpg',
    '/img/fish/silver_carp_invasive/2.jpg'
  ],
  features: [
    'Large, deep-bodied silver fish',
    'Eyes set very low on head (below mouth line)',
    'Large upturned mouth',
    'No barbels',
    'Smooth keel on belly',
    'Silver body with olive-green back'
  ],
  keyFeature: 'Large silver carp with eyes set very low on head, below the mouth line',
  habitat: ['Ohio River system; invasive, threatening Lake Erie'],
  size: '24-36 inches typical, can exceed 60 pounds',
  funFact: 'Silver carp are famous for leaping out of the water when startled by boat motors, sometimes injuring boaters. They are a major invasive threat to Lake Erie.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Hypophthalmichthys%20molitrix' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Hypophthalmichthys+molitrix' }
  ],
  colors: { primary: '#8098A8', secondary: '#A0B0B8', belly: '#D0D8D8', fin: '#708088' },
};

export const featureOptions: FeatureOption = {
  correct: 'Large silver carp with eyes set very low on head below mouth line',
  wrong: ['Dark mottled pattern with very large head', 'Golden body with barbels', 'Deep body with dark-edged scales only'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Silver carp are famous for leaping out of the water.', answer: true, fishId: 'silver_carp_invasive' }
];

export default silver_carp_invasive;

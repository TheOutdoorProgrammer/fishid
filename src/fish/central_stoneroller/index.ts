import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const central_stoneroller: Fish = {
  id: 'central_stoneroller',
  name: 'Central Stoneroller',
  scientific: 'Campostoma anomalum',
  image: [
    '/img/fish/central_stoneroller/1.jpg'
  ],
  features: [
    'Rounded snout overhanging mouth',
    'Hard cartilaginous ridge on lower jaw for scraping algae',
    'Olive-brown body with dark scales',
    'Breeding males develop orange fins and tubercles',
    'Dark lateral stripe',
    'Subterminal mouth'
  ],
  keyFeature: 'Round snout with hard scraping ridge on lower jaw for eating algae',
  habitat: 'Rocky riffles of streams; very common in Ohio',
  size: '4-7 inches typical',
  funFact: 'Central stonerollers are ecosystem engineers! They scrape algae off rocks, creating clean feeding areas used by other fish. Breeding males develop impressive horny tubercles on their heads.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Campostoma%20anomalum' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Campostoma+anomalum' }
  ],
  colors: { primary: '#6B6040', secondary: '#8B8060', belly: '#C8C0A0', fin: '#5A5038' },
};

export const featureOptions: FeatureOption = {
  correct: 'Round snout with hard scraping ridge on lower jaw',
  wrong: ['Dark spot at dorsal fin base', 'Deep golden body with belly keel', 'Bold dark stripe with dark tail spot'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Central stoneroller minnows scrape algae off rocks with a hard jaw ridge.', answer: true, fishId: 'central_stoneroller' }
];

export default central_stoneroller;

import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const central_stoneroller: Fish = {
  id: 'central_stoneroller',
  name: 'Central Stoneroller',
  scientific: 'Campostoma anomalum',
  image: [
    '/img/fish/central_stoneroller/1.jpg',
    '/img/fish/central_stoneroller/2.jpg'
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
  habitat: ['creeks', 'rivers', 'rocky streams', 'streams'],
  size: '4-7 inches typical',
  funFact: 'Central stonerollers are ecosystem engineers! They scrape algae off rocks, creating clean feeding areas used by other fish. Breeding males develop impressive horny tubercles on their heads.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
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
  { statement: 'A key ID clue for this fish is: Round snout with hard scraping ridge on lower jaw for eating algae.', answer: true, fishId: 'central_stoneroller' },
  { statement: 'This fish can be identified by: Rounded snout overhanging mouth.', answer: true, fishId: 'central_stoneroller' },
  { statement: 'This fish can be identified by: Hard cartilaginous ridge on lower jaw for scraping algae.', answer: true, fishId: 'central_stoneroller' },
  { statement: 'You might find this fish in rocky riffles of streams.', answer: true, fishId: 'central_stoneroller' }
];

export default central_stoneroller;

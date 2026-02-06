import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const round_goby: Fish = {
  id: 'round_goby',
  name: 'Round Goby',
  scientific: 'Neogobius melanostomus',
  image: [
    '/img/fish/round_goby/1.jpg',
    '/img/fish/round_goby/2.jpg'
  ],
  features: [
    'Small, bottom-dwelling body',
    'Fused pelvic fins forming a suction disc',
    'Prominent black spot on first dorsal fin',
    'Large, frog-like head with protruding eyes',
    'Dark mottled gray-brown body',
    'Males turn jet black during spawning'
  ],
  keyFeature: 'Small bottom fish with fused pelvic suction disc and black spot on first dorsal',
  habitat: ['Lake Erie rocky areas, now spreading to tributaries; invasive from Black Sea'],
  size: '4-7 inches typical',
  funFact: 'Round gobies arrived in Lake Erie in ship ballast water from the Black Sea region in the 1990s. They compete with native fish but also provide food for smallmouth bass and walleye.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Neogobius%20melanostomus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Neogobius+melanostomus' }
  ],
  colors: { primary: '#4A4A40', secondary: '#5A5A50', belly: '#989088', fin: '#3A3A30' },
};

export const featureOptions: FeatureOption = {
  correct: 'Small bottom fish with fused pelvic suction disc and black dorsal spot',
  wrong: ['Circular sucker mouth with sharp teeth', 'Snake-like body with continuous fin', 'Long dorsal fin with tail spot'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Round goby are native to Lake Erie.', answer: false, fishId: 'round_goby' }
];

export default round_goby;

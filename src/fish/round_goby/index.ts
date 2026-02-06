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
  habitat: ['Ohio inland lakes and reservoirs', 'Lake Erie and tributaries (Ohio)', 'Lake Erie rocky areas', 'now spreading to tributaries', 'invasive from Black Sea'],
  size: '4-7 inches typical',
  funFact: 'Round gobies arrived in Lake Erie in ship ballast water from the Black Sea region in the 1990s. They compete with native fish but also provide food for smallmouth bass and walleye.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
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
  { statement: 'A key ID clue for this fish is: Small bottom fish with fused pelvic suction disc and black spot on first dorsal.', answer: true, fishId: 'round_goby' },
  { statement: 'This fish can be identified by: Small, bottom-dwelling body.', answer: true, fishId: 'round_goby' },
  { statement: 'This fish can be identified by: Fused pelvic fins forming a suction disc.', answer: true, fishId: 'round_goby' },
  { statement: 'You might find this fish in lake erie rocky areas.', answer: true, fishId: 'round_goby' }
];

export default round_goby;

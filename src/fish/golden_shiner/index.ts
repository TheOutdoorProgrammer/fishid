import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const golden_shiner: Fish = {
  id: 'golden_shiner',
  name: 'Golden Shiner',
  scientific: 'Notemigonus crysoleucas',
  image: [
    '/img/fish/golden_shiner/1.jpg',
    '/img/fish/golden_shiner/2.jpg'
  ],
  features: [
    'Deep, laterally compressed body',
    'Golden to olive coloring',
    'Strongly decurved lateral line',
    'Fleshy keel on belly between pelvic and anal fins',
    'Small upturned mouth',
    'Forked tail'
  ],
  keyFeature: 'Deep-bodied golden minnow with strongly decurved lateral line and belly keel',
  habitat: ['Ohio creeks and small rivers', 'Ohio farm ponds and small lakes', 'Ohio inland lakes and reservoirs', 'Ponds', 'lakes'],
  size: '5-8 inches typical, can reach 12',
  funFact: 'Golden shiners are the most popular baitfish sold in the US. They are also one of the largest minnow species in Ohio and can form massive schools.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Notemigonus%20crysoleucas' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Notemigonus+crysoleucas' }
  ],
  colors: { primary: '#8B8530', secondary: '#A8A048', belly: '#D8D080', fin: '#7A7428' },
};

export const featureOptions: FeatureOption = {
  correct: 'Deep-bodied golden minnow with decurved lateral line and belly keel',
  wrong: ['Slender body with emerald-green sheen', 'Dark spot at dorsal fin base', 'Blunt head with dark lateral stripe'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Deep-bodied golden minnow with strongly decurved lateral line and belly keel.', answer: true, fishId: 'golden_shiner' },
  { statement: 'This fish can be identified by: Deep, laterally compressed body.', answer: true, fishId: 'golden_shiner' },
  { statement: 'This fish can be identified by: Golden to olive coloring.', answer: true, fishId: 'golden_shiner' },
  { statement: 'You might find this fish in ponds.', answer: true, fishId: 'golden_shiner' }
];

export default golden_shiner;

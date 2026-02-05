import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const golden_shiner: Fish = {
  id: 'golden_shiner',
  name: 'Golden Shiner',
  scientific: 'Notemigonus crysoleucas',
  image: [
    '/img/fish/golden_shiner/1.jpg'
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
  habitat: 'Ponds, lakes, quiet pools; prefers vegetated areas',
  size: '5-8 inches typical, can reach 12',
  funFact: 'Golden shiners are the most popular baitfish sold in the US. They are also one of the largest minnow species in Ohio and can form massive schools.',
  refs: [
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
  { statement: 'Golden shiners are the most popular baitfish sold in the US.', answer: true, fishId: 'golden_shiner' }
];

export default golden_shiner;

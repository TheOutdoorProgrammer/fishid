import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const brook_stickleback: Fish = {
  id: 'brook_stickleback',
  name: 'Brook Stickleback',
  scientific: 'Culaea inconstans',
  image: [
    '/img/fish/brook_stickleback/1.jpg',
    '/img/fish/brook_stickleback/2.jpg'
  ],
  features: [
    'Very small fish with 4-6 free dorsal spines',
    'No scales - smooth or with bony plates',
    'Olive-green to brown mottled body',
    'Narrow caudal peduncle (tail stalk)',
    'Males build mucus nests for eggs',
    'Large eye relative to body size'
  ],
  keyFeature: 'Tiny scaleless fish with 4-6 isolated spines in front of dorsal fin',
  habitat: 'Cool streams, springs, bog pools with vegetation',
  size: '1.5-2.5 inches typical',
  funFact: 'Brook stickleback males build elaborate nests from plant material glued together with kidney secretions. They aggressively guard the nest and fan eggs with their fins to keep them oxygenated.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Culaea%20inconstans' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Culaea+inconstans' }
  ],
  colors: { primary: '#4A5838', secondary: '#5A6848', belly: '#A0A888', fin: '#3A4830' },
};

export const featureOptions: FeatureOption = {
  correct: 'Tiny scaleless fish with 4-6 isolated spines before dorsal fin',
  wrong: ['Bold dark lateral stripe', 'Many thin vertical bars', 'Wide flat head with fan pectoral fins'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Brook stickleback males build nests from plant material glued with kidney secretions.', answer: true, fishId: 'brook_stickleback' }
];

export default brook_stickleback;

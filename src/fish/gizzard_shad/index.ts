import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const gizzard_shad: Fish = {
  id: 'gizzard_shad',
  name: 'Gizzard Shad',
  scientific: 'Dorosoma cepedianum',
  image: [
    '/img/fish/gizzard_shad/1.jpg',
    '/img/fish/gizzard_shad/2.jpg'
  ],
  features: [
    'Deep, laterally compressed silver body',
    'Last ray of dorsal fin extended into long filament',
    'Dark spot behind gill cover (especially young fish)',
    'Subterminal (downward-pointing) mouth with no teeth',
    'Blunt, rounded snout',
    'Deeply forked tail'
  ],
  keyFeature: 'Silver deep body with trailing dorsal filament and dark shoulder spot',
  habitat: ['Lakes', 'reservoirs', 'rivers', 'extremely abundant in Ohio'],
  size: '8-14 inches typical',
  funFact: 'Gizzard shad are the most abundant fish in many Ohio lakes. They have a gizzard-like stomach that grinds food, just like a bird. They are critical forage for game fish.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Dorosoma%20cepedianum' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Dorosoma+cepedianum' }
  ],
  colors: { primary: '#7888A0', secondary: '#90A0B8', belly: '#D0D8E0', fin: '#607088' },
};

export const featureOptions: FeatureOption = {
  correct: 'Silver deep body with trailing dorsal filament and dark shoulder spot',
  wrong: ['Slender body with large eye', 'Silver body with horizontal stripes', 'Deep body with vertical bars'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Gizzard shad have teeth and are active predators.', answer: false, fishId: 'gizzard_shad' }
];

export default gizzard_shad;

import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const alewife: Fish = {
  id: 'alewife',
  name: 'Alewife',
  scientific: 'Alosa pseudoharengus',
  image: [],
  features: [
    'Slender, laterally compressed body',
    'Large eye relative to head size',
    'Silver body with grayish-green back',
    'Single dark spot behind gill cover',
    'Saw-toothed (serrated) belly edge (scutes)',
    'Forked tail'
  ],
  keyFeature: 'Slender herring with large eye, single dark shoulder spot, and serrated belly',
  habitat: 'Lake Erie open waters; invasive from Atlantic coast',
  size: '5-9 inches typical',
  funFact: 'Alewife are invasive in the Great Lakes. They occasionally die in massive numbers that wash up on beaches. They are an important forage fish for salmon and trout.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Alosa%20pseudoharengus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Alosa+pseudoharengus' }
  ],
  colors: { primary: '#6878A0', secondary: '#8090B0', belly: '#D0D8E8', fin: '#586888' },
};

export const featureOptions: FeatureOption = {
  correct: 'Slender herring with large eye, single dark shoulder spot, and serrated belly',
  wrong: ['Deep body with trailing dorsal filament', 'Elongated body with projecting lower jaw', 'Large-eyed fish with dorsal fin ahead of anal fin'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Alewife are native to the Great Lakes.', answer: false, fishId: 'alewife' }
];

export default alewife;

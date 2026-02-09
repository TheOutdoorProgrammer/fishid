import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const rainbow_smelt: Fish = {
  id: 'rainbow_smelt',
  name: 'Rainbow Smelt',
  scientific: 'Osmerus mordax',
  image: [
    '/img/fish/rainbow_smelt/1.jpg',
    '/img/fish/rainbow_smelt/2.jpg'
  ],
  features: [
    'Small, slender, elongated body',
    'Translucent silver-green coloring',
    'Large mouth with prominent teeth for size',
    'Adipose fin present',
    'Iridescent purple and pink sheen on sides',
    'Forked tail'
  ],
  keyFeature: 'Small silvery fish with iridescent sheen, large teeth, and adipose fin',
  habitat: ['Lake Erie', 'lakes', 'reservoirs', 'tributaries'],
  size: '6-8 inches typical',
  funFact: 'Rainbow smelt smell like cucumbers when freshly caught! They are an invasive forage fish in Lake Erie that provide food for walleye, trout, and other predators.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Osmerus%20mordax' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Osmerus+mordax' }
  ],
  colors: { primary: '#88A098', secondary: '#A0B8B0', belly: '#D0D8D0', fin: '#708880' },
};

export const featureOptions: FeatureOption = {
  correct: 'Small silvery fish with iridescent sheen, large teeth, and adipose fin',
  wrong: ['Deep body with trailing dorsal filament', 'Slender body with large eye and no adipose fin', 'Large golden body with barbels'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Small silvery fish with iridescent sheen, large teeth, and adipose fin.', answer: true, fishId: 'rainbow_smelt' },
  { statement: 'This fish can be identified by: Small, slender, elongated body.', answer: true, fishId: 'rainbow_smelt' },
  { statement: 'This fish can be identified by: Translucent silver-green coloring.', answer: true, fishId: 'rainbow_smelt' },
  { statement: 'You might find this fish in deep open waters of lake erie.', answer: true, fishId: 'rainbow_smelt' }
];

export default rainbow_smelt;

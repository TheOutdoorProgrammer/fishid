import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const rainbow_smelt: Fish = {
  id: 'rainbow_smelt',
  name: 'Rainbow Smelt',
  scientific: 'Osmerus mordax',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Osmerus_mordax.jpg/500px-Osmerus_mordax.jpg',
  quizImage: '',
  features: [
    'Small, slender, elongated body',
    'Translucent silver-green coloring',
    'Large mouth with prominent teeth for size',
    'Adipose fin present',
    'Iridescent purple and pink sheen on sides',
    'Forked tail'
  ],
  keyFeature: 'Small silvery fish with iridescent sheen, large teeth, and adipose fin',
  habitat: 'Deep open waters of Lake Erie; comes to shore to spawn',
  size: '6-8 inches typical',
  funFact: 'Rainbow smelt smell like cucumbers when freshly caught! They are an invasive forage fish in Lake Erie that provide food for walleye, trout, and other predators.',
  refs: [
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
  { statement: 'Rainbow smelt smell like cucumbers when freshly caught.', answer: true, fishId: 'rainbow_smelt' }
];

export default rainbow_smelt;

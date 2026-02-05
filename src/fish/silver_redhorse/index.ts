import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const silver_redhorse: Fish = {
  id: 'silver_redhorse',
  name: 'Silver Redhorse',
  scientific: 'Moxostoma anisurum',
  image: [
    '/img/fish/silver_redhorse/1.jpg'
  ],
  features: [
    'Silver to olive body',
    'Large scales',
    'V-shaped lower lip (key ID feature)',
    'Paler fins than other redhorse',
    'Subterminal sucker mouth',
    'Forked tail'
  ],
  keyFeature: 'Silvery redhorse with distinctive V-shaped lower lip',
  habitat: 'Large streams and rivers with moderate current',
  size: '15-22 inches typical',
  funFact: 'Silver redhorse can be identified by their unique V-shaped lower lip, which distinguishes them from other redhorse species that have straighter or U-shaped lips.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Moxostoma%20anisurum' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Moxostoma+anisurum' }
  ],
  colors: { primary: '#808878', secondary: '#98A090', belly: '#D0D8C8', fin: '#687068' },
};

export const featureOptions: FeatureOption = {
  correct: 'Silvery redhorse with distinctive V-shaped lower lip',
  wrong: ['Golden body with bright red tail', 'Dark cross-hatched scale pattern', 'Small mouth with falcate dorsal fin'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Silver redhorse have a V-shaped lower lip.', answer: true, fishId: 'silver_redhorse' }
];

export default silver_redhorse;

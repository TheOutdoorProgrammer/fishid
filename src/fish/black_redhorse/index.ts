import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const black_redhorse: Fish = {
  id: 'black_redhorse',
  name: 'Black Redhorse',
  scientific: 'Moxostoma duquesnei',
  image: [
    '/img/fish/black_redhorse/1.jpg',
    '/img/fish/black_redhorse/2.jpg'
  ],
  features: [
    'Olive to dark bronze body',
    'Dark-edged scales giving a cross-hatched look',
    'Relatively small head',
    'Sucker mouth with plicate (grooved) lips',
    'Slate-gray to olive fins (not bright red)',
    'Forked tail'
  ],
  keyFeature: 'Dark-edged scales creating cross-hatch pattern and dusky (not red) fins',
  habitat: ['Clear streams and rivers over gravel; moderate current'],
  size: '12-18 inches typical',
  funFact: 'Black redhorse get their name not from their body color but from their dark-edged scales and dusky fins. They prefer cleaner water than many other sucker species.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Moxostoma%20duquesnei' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Moxostoma+duquesnei' }
  ],
  colors: { primary: '#5A5838', secondary: '#707048', belly: '#C0B890', fin: '#4A4830' },
};

export const featureOptions: FeatureOption = {
  correct: 'Dark-edged scales creating cross-hatch pattern and dusky fins',
  wrong: ['Bright red-orange tail fin', 'V-shaped lower lip', 'Very heavy molar-like throat teeth'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Black redhorse have bright red fins.', answer: false, fishId: 'black_redhorse' }
];

export default black_redhorse;

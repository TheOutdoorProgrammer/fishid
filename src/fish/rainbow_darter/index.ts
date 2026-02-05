import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const rainbow_darter: Fish = {
  id: 'rainbow_darter',
  name: 'Rainbow Darter',
  scientific: 'Etheostoma caeruleum',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Etheostoma_caeruleum.jpg/500px-Etheostoma_caeruleum.jpg',
  quizImage: '',
  features: [
    'Breeding males brilliantly colored with blue and orange bars',
    'Alternating blue and orange-red vertical bars on sides',
    'Blue anal and pelvic fins on males',
    'Small, elongated body shape',
    'Two dorsal fins',
    'Fan-shaped pectoral fins for perching on rocks'
  ],
  keyFeature: 'Stunningly colorful with alternating blue and orange vertical bars (males)',
  habitat: 'Rocky riffles of clear streams; very common in Ohio',
  size: '2-3 inches typical',
  funFact: 'Rainbow darters are considered one of the most beautiful freshwater fish in North America. Breeding males look like tiny tropical fish with their vivid blue and orange barring.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Etheostoma%20caeruleum' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Etheostoma+caeruleum' }
  ],
  colors: { primary: '#3060A0', secondary: '#D06020', belly: '#C8A060', fin: '#2050A0' },
};

export const featureOptions: FeatureOption = {
  correct: 'Stunningly colorful with alternating blue and orange vertical bars',
  wrong: ['Pale body with W/X-shaped dark markings', 'Fan-shaped tail with fleshy dorsal knobs', 'Bright orange throat with blue bars'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Rainbow darters are considered one of the most beautiful freshwater fish in North America.', answer: true, fishId: 'rainbow_darter' }
];

export default rainbow_darter;

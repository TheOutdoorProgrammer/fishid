import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const greenside_darter: Fish = {
  id: 'greenside_darter',
  name: 'Greenside Darter',
  scientific: 'Etheostoma blennioides',
  image: [],
  features: [
    'Largest Ohio darter (can reach 6 inches)',
    'Green to olive body with U or V-shaped dark bars on sides',
    'Blunt, rounded snout',
    'Red spots on sides (variable)',
    'Two dorsal fins, the first with green coloring',
    'Sturdy body for a darter'
  ],
  keyFeature: 'Largest darter with green body and U/V-shaped dark marks on sides',
  habitat: 'Rocky riffles of clear streams with moderate current',
  size: '3-5 inches typical, can reach 6',
  funFact: 'Greenside darters are the largest darter species in Ohio. They actually wrap their eggs around plant stems and green algae filaments on rocks, which is unusual for darters.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Etheostoma%20blennioides' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Etheostoma+blennioides' }
  ],
  colors: { primary: '#3A6830', secondary: '#4A8040', belly: '#B8C890', fin: '#305828' },
};

export const featureOptions: FeatureOption = {
  correct: 'Largest darter with green body and U/V-shaped dark marks',
  wrong: ['Alternating blue and orange bars', 'W/X-shaped dark markings', 'Transparent body that buries in sand'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Greenside darters are the smallest darter in Ohio.', answer: false, fishId: 'greenside_darter' }
];

export default greenside_darter;

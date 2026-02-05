import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const redfin_shiner: Fish = {
  id: 'redfin_shiner',
  name: 'Redfin Shiner',
  scientific: 'Lythrurus umbratilis',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Lythrurus_umbratilis.JPG/500px-Lythrurus_umbratilis.JPG',
  quizImage: '',
  features: [
    'Deep, compressed body',
    'Steel-blue back and upper sides',
    'Breeding males develop bright red fins',
    'Dark spot at base of dorsal fin',
    'Small upturned mouth',
    'Forked tail'
  ],
  keyFeature: 'Deep-bodied steel-blue shiner with bright red fins on breeding males',
  habitat: 'Quiet pools of streams, backwaters, pond edges',
  size: '2-3 inches typical',
  funFact: 'Redfin shiners lay their eggs in the nests of sunfish and other species, letting the host fish guard their eggs for them - a behavior called nest parasitism.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Lythrurus%20umbratilis' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Lythrurus+umbratilis' }
  ],
  colors: { primary: '#506888', secondary: '#6880A0', belly: '#C0C8D0', fin: '#C03030' },
};

export const featureOptions: FeatureOption = {
  correct: 'Deep-bodied steel-blue shiner with bright red fins on breeding males',
  wrong: ['Brilliant scarlet body on breeding males', 'Emerald-green translucent body', 'Crescent marks with pink and blue'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Redfin shiners lay their eggs in sunfish nests.', answer: true, fishId: 'redfin_shiner' }
];

export default redfin_shiner;

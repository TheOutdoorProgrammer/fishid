import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const redfin_shiner: Fish = {
  id: 'redfin_shiner',
  name: 'Redfin Shiner',
  scientific: 'Lythrurus umbratilis',
  image: [
    '/img/fish/redfin_shiner/1.jpg',
    '/img/fish/redfin_shiner/2.jpg'
  ],
  features: [
    'Deep, compressed body',
    'Steel-blue back and upper sides',
    'Breeding males develop bright red fins',
    'Dark spot at base of dorsal fin',
    'Small upturned mouth',
    'Forked tail'
  ],
  keyFeature: 'Deep-bodied steel-blue shiner with bright red fins on breeding males',
  habitat: ['backwaters', 'creeks', 'lakes', 'ponds', 'pools', 'reservoirs', 'rivers'],
  size: '2-3 inches typical',
  funFact: 'Redfin shiners lay their eggs in the nests of sunfish and other species, letting the host fish guard their eggs for them - a behavior called nest parasitism.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
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
  { statement: 'A key ID clue for this fish is: Deep-bodied steel-blue shiner with bright red fins on breeding males.', answer: true, fishId: 'redfin_shiner' },
  { statement: 'This fish can be identified by: Deep, compressed body.', answer: true, fishId: 'redfin_shiner' },
  { statement: 'This fish can be identified by: Steel-blue back and upper sides.', answer: true, fishId: 'redfin_shiner' },
  { statement: 'You might find this fish in quiet pools of streams.', answer: true, fishId: 'redfin_shiner' }
];

export default redfin_shiner;

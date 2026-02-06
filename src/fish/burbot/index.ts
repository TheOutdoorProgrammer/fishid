import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const burbot: Fish = {
  id: 'burbot',
  name: 'Burbot',
  scientific: 'Lota lota',
  image: [
    '/img/fish/burbot/1.jpg',
    '/img/fish/burbot/2.jpg'
  ],
  features: [
    'Elongated body with eel-like appearance',
    'Single barbel on chin',
    'Mottled brown-yellow pattern',
    'Two dorsal fins (first very short, second very long)',
    'Round tail fin',
    'Wide, flat head'
  ],
  keyFeature: 'Elongated eel-like body with single chin barbel and mottled pattern',
  habitat: ['Deep cold waters of Lake Erie', 'nocturnal predator', 'lakes and reservoirs'],
  size: '16-24 inches typical',
  funFact: 'Burbot are the only freshwater member of the cod family. They spawn under the ice in winter, making them one of the few fish that breed in the coldest months of the year!',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Lota%20lota' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Lota+lota' }
  ],
  colors: { primary: '#6B5A30', secondary: '#8B7848', belly: '#C8B878', fin: '#5A4A28' },
};

export const featureOptions: FeatureOption = {
  correct: 'Elongated eel-like body with single chin barbel and mottled pattern',
  wrong: ['Snake-like body with continuous fin', 'Circular sucker mouth', 'Fused pelvic fins forming suction disc'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Elongated eel-like body with single chin barbel and mottled pattern.', answer: true, fishId: 'burbot' },
  { statement: 'This fish can be identified by: Elongated body with eel-like appearance.', answer: true, fishId: 'burbot' },
  { statement: 'This fish can be identified by: Single barbel on chin.', answer: true, fishId: 'burbot' },
  { statement: 'You might find this fish in deep cold waters of lake erie.', answer: true, fishId: 'burbot' }
];

export default burbot;

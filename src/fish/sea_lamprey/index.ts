import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const sea_lamprey: Fish = {
  id: 'sea_lamprey',
  name: 'Sea Lamprey',
  scientific: 'Petromyzon marinus',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Petromyzon_marinus.jpg/500px-Petromyzon_marinus.jpg',
  quizImage: '',
  features: [
    'Eel-like body (but NOT a fish - jawless)',
    'Circular sucker mouth filled with sharp teeth',
    'Seven visible gill openings on each side',
    'No paired fins (no pectoral or pelvic fins)',
    'Mottled gray-brown body',
    'Single nostril on top of head'
  ],
  keyFeature: 'Eel-like jawless parasite with circular tooth-filled sucker mouth and 7 gill holes',
  habitat: 'Lake Erie; attaches to and parasitizes large fish',
  size: '12-24 inches typical',
  funFact: 'Sea lamprey nearly destroyed the Lake Erie fishery in the mid-1900s. They attach to fish with their sucker mouths and drain the body fluids. Control programs now keep them in check.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Petromyzon%20marinus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Petromyzon+marinus' }
  ],
  colors: { primary: '#5A5848', secondary: '#706858', belly: '#A8A090', fin: '#4A4838' },
};

export const featureOptions: FeatureOption = {
  correct: 'Eel-like jawless parasite with circular tooth-filled sucker and 7 gill holes',
  wrong: ['Fused pelvic fins forming suction disc', 'Diamond-shaped ganoid scales', 'Four barbels and bony plates'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Sea lamprey have jaws like a normal fish.', answer: false, fishId: 'sea_lamprey' }
];

export default sea_lamprey;

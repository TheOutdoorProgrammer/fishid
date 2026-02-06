import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const mooneye: Fish = {
  id: 'mooneye',
  name: 'Mooneye',
  scientific: 'Hiodon tergisus',
  image: [
    '/img/fish/mooneye/1.jpg',
    '/img/fish/mooneye/2.jpg'
  ],
  features: [
    'Laterally compressed silver body',
    'Very large eye with golden iris',
    'Dorsal fin starts in FRONT of anal fin origin',
    'No adipose fin',
    'Sharply forked tail',
    'Distinct keel along belly'
  ],
  keyFeature: 'Large-eyed silver fish with dorsal fin starting ahead of anal fin',
  habitat: ['Ohio creeks and small rivers', 'Ohio inland lakes and reservoirs', 'Ohio River and large tributaries', 'Lake Erie and tributaries (Ohio)', 'Large rivers'],
  size: '10-14 inches typical',
  funFact: 'Mooneyes are named for their huge, reflective eyes. They are often confused with shad but lack the serrated belly and have a more streamlined body.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Hiodon%20tergisus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Hiodon+tergisus' }
  ],
  colors: { primary: '#8898A8', secondary: '#A0B0C0', belly: '#D8E0E8', fin: '#708090' },
};

export const featureOptions: FeatureOption = {
  correct: 'Large-eyed silver fish with dorsal fin starting ahead of anal fin',
  wrong: ['Trailing dorsal filament and shoulder spot', 'Serrated belly with large eye', 'Silver body with horizontal stripes'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Large-eyed silver fish with dorsal fin starting ahead of anal fin.', answer: true, fishId: 'mooneye' },
  { statement: 'This fish can be identified by: Laterally compressed silver body.', answer: true, fishId: 'mooneye' },
  { statement: 'This fish can be identified by: Very large eye with golden iris.', answer: true, fishId: 'mooneye' },
  { statement: 'You might find this fish in large rivers.', answer: true, fishId: 'mooneye' }
];

export default mooneye;

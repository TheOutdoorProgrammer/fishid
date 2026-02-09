import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const black_buffalo: Fish = {
  id: 'black_buffalo',
  name: 'Black Buffalo',
  scientific: 'Ictiobus niger',
  image: [
    '/img/fish/black_buffalo/1.jpg',
    '/img/fish/black_buffalo/2.jpg'
  ],
  features: [
    'Deep body but less compressed than other buffalo',
    'Dark olive to blackish color',
    'Subterminal mouth',
    'Thick lips (intermediate between big and smallmouth)',
    'More cylindrical body than other buffalo species',
    'Long dorsal fin'
  ],
  keyFeature: 'Darkest buffalo species with thicker, more cylindrical body',
  habitat: ['Ohio River', 'creeks', 'pools', 'rivers', 'tributaries'],
  size: '18-26 inches typical',
  funFact: 'Black buffalo are the least common of the three buffalo species in Ohio. They are darker and more cylindrical than their relatives and prefer deeper river pools.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Ictiobus%20niger' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Ictiobus+niger' }
  ],
  colors: { primary: '#3A3828', secondary: '#4A4838', belly: '#908878', fin: '#2A2820' },
};

export const featureOptions: FeatureOption = {
  correct: 'Darkest buffalo species with thicker, more cylindrical body',
  wrong: ['Large forward-facing mouth', 'Deep compressed body with thin lips', 'Elongated blue-gray body'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Darkest buffalo species with thicker, more cylindrical body.', answer: true, fishId: 'black_buffalo' },
  { statement: 'This fish can be identified by: Deep body but less compressed than other buffalo.', answer: true, fishId: 'black_buffalo' },
  { statement: 'This fish can be identified by: Dark olive to blackish color.', answer: true, fishId: 'black_buffalo' },
  { statement: 'You might find this fish in large rivers.', answer: true, fishId: 'black_buffalo' }
];

export default black_buffalo;

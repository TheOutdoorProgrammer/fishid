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
  habitat: ['Large rivers', 'deep pools', 'Ohio River system'],
  size: '18-26 inches typical',
  funFact: 'Black buffalo are the least common of the three buffalo species in Ohio. They are darker and more cylindrical than their relatives and prefer deeper river pools.',
  refs: [
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
  { statement: 'Black buffalo are the most common buffalo species in Ohio.', answer: false, fishId: 'black_buffalo' }
];

export default black_buffalo;

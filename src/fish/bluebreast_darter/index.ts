import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const bluebreast_darter: Fish = {
  id: 'bluebreast_darter',
  name: 'Bluebreast Darter',
  scientific: 'Etheostoma camurum',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Etheostoma_camurum.jpg/500px-Etheostoma_camurum.jpg',
  quizImage: '',
  features: [
    'Breeding males with brilliant blue breast and belly',
    'Red-orange spots or bars on sides',
    'Robust body for a darter',
    'Blue edges on fins',
    'Dark body with bold red and blue pattern',
    'Two dorsal fins'
  ],
  keyFeature: 'Stunning darter with bright blue breast and red-orange side markings',
  habitat: 'Fast rocky riffles of clear rivers; clean water indicator',
  size: '2-4 inches typical',
  funFact: 'Bluebreast darters are one of Ohio\'s most beautiful fish. They require very clean water and are listed as a species of concern in Ohio.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Etheostoma%20camurum' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Etheostoma+camurum' }
  ],
  colors: { primary: '#2050A0', secondary: '#D06020', belly: '#2060B0', fin: '#1840A0' },
};

export const featureOptions: FeatureOption = {
  correct: 'Stunning darter with bright blue breast and red-orange side markings',
  wrong: ['Bright orange throat patch', 'W/X-shaped dark markings', 'Row of dark oval blotches'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Bluebreast darters are common and widespread in Ohio.', answer: false, fishId: 'bluebreast_darter' }
];

export default bluebreast_darter;

import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const bluebreast_darter: Fish = {
  id: 'bluebreast_darter',
  name: 'Bluebreast Darter',
  scientific: 'Etheostoma camurum',
  image: [
    '/img/fish/bluebreast_darter/1.jpg',
    '/img/fish/bluebreast_darter/2.jpg'
  ],
  features: [
    'Breeding males with brilliant blue breast and belly',
    'Red-orange spots or bars on sides',
    'Robust body for a darter',
    'Blue edges on fins',
    'Dark body with bold red and blue pattern',
    'Two dorsal fins'
  ],
  keyFeature: 'Stunning darter with bright blue breast and red-orange side markings',
  habitat: ['Fast rocky riffles of clear rivers', 'clean water indicator', 'clear streams and rivers'],
  size: '2-4 inches typical',
  funFact: 'Bluebreast darters are one of Ohio\'s most beautiful fish. They require very clean water and are listed as a species of concern in Ohio.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
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
  { statement: 'A key ID clue for this fish is: Stunning darter with bright blue breast and red-orange side markings.', answer: true, fishId: 'bluebreast_darter' },
  { statement: 'This fish can be identified by: Breeding males with brilliant blue breast and belly.', answer: true, fishId: 'bluebreast_darter' },
  { statement: 'This fish can be identified by: Red-orange spots or bars on sides.', answer: true, fishId: 'bluebreast_darter' },
  { statement: 'You might find this fish in fast rocky riffles of clear rivers.', answer: true, fishId: 'bluebreast_darter' }
];

export default bluebreast_darter;

import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const sauger: Fish = {
  id: 'sauger',
  name: 'Sauger',
  scientific: 'Sander canadensis',
  image: [
    '/img/fish/sauger/1.jpg',
    '/img/fish/sauger/2.jpg'
  ],
  features: [
    'Similar to walleye but smaller and darker',
    'Distinct dark spots/blotches on dorsal fin',
    'Dark saddle markings on back',
    'NO white tip on tail (key difference from walleye)',
    'Rougher scales than walleye',
    'More cylindrical body'
  ],
  keyFeature: 'Like a walleye but darker, spotted dorsal, NO white tail tip',
  habitat: ['Ohio River', 'large rivers', 'prefers deeper turbid water'],
  size: '10-16 inches typical (smaller than walleye)',
  funFact: 'Sauger are the smaller cousin of the walleye. The easiest way to tell them apart: check the tail! Walleye have a white tip on the lower tail lobe; sauger don\'t. Sauger also have spots on their dorsal fin.',
  refs: [
    { label: 'USFWS species profile', url: 'https://www.fws.gov/species/sauger-sander-canadensis' },
    { label: 'West Virginia DNR: Sauger', url: 'https://wvdnr.gov/plants-animals/sportfish/sauger/' },
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' }
  ],
  colors: { primary: '#5A5030', secondary: '#7A6840', belly: '#C8C090', fin: '#4A4028' },
};

export const featureOptions: FeatureOption = {
  correct: 'Dark body with spotted dorsal, no white tail tip',
  wrong: ['White tip on lower tail lobe', 'Bright golden body with orange fins', 'Deep body with dark ear flap'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Like a walleye but darker, spotted dorsal, NO white tail tip.', answer: true, fishId: 'sauger' },
  { statement: 'This fish can be identified by: Similar to walleye but smaller and darker.', answer: true, fishId: 'sauger' },
  { statement: 'This fish can be identified by: Distinct dark spots/blotches on dorsal fin.', answer: true, fishId: 'sauger' },
  { statement: 'You might find this fish in ohio river.', answer: true, fishId: 'sauger' }
];

export default sauger;

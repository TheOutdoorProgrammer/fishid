import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const brindled_madtom: Fish = {
  id: 'brindled_madtom',
  name: 'Brindled Madtom',
  scientific: 'Noturus miurus',
  image: [
    '/img/fish/brindled_madtom/1.jpg',
    '/img/fish/brindled_madtom/2.jpg'
  ],
  features: [
    'Small catfish with dark saddle markings',
    'Four dark saddle blotches on back',
    'Adipose fin connected to tail',
    'Light band at base of tail followed by dark band',
    'Yellowish-brown base color',
    'Mildly venomous pectoral spines'
  ],
  keyFeature: 'Small catfish with four dark saddle marks and banded tail pattern',
  habitat: ['creeks', 'rivers', 'rocky streams', 'streams'],
  size: '2-4 inches typical',
  funFact: 'Brindled madtoms are state-listed as species of concern in some areas. Like all madtoms, they have a venomous pectoral spine used for defense.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Missouri Dept. of Conservation field guide', url: 'https://mdc.mo.gov/discover-nature/field-guide/brindled-madtom' },
    { label: 'Illinois DNR Wild About Fishes', url: 'https://dnr.illinois.gov/education/wildaboutpages/wildaboutfishes/wafbullhead/wafbrindledmadtom.html' },
    { label: 'Kentucky Fish & Wildlife', url: 'https://fw.ky.gov/Fish/Pages/Brindled-Madtom.aspx' }
  ],
  colors: { primary: '#7A6838', secondary: '#907850', belly: '#B8A878', fin: '#685830' },
};

export const featureOptions: FeatureOption = {
  correct: 'Small catfish with four dark saddle marks and banded tail',
  wrong: ['Uniform dark coloring without saddles', 'Large size with yellow-brown body', 'Deeply forked tail'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Small catfish with four dark saddle marks and banded tail pattern.', answer: true, fishId: 'brindled_madtom', showImage: true },
  { statement: 'This fish can be identified by: Small catfish with dark saddle markings.', answer: true, fishId: 'brindled_madtom', showImage: true },
  { statement: 'This fish can be identified by: Four dark saddle blotches on back.', answer: true, fishId: 'brindled_madtom', showImage: true },
  { statement: 'You might find this fish in riffles of clear streams with rocky or gravelly bottoms.', answer: true, fishId: 'brindled_madtom', showImage: true }
];

export default brindled_madtom;

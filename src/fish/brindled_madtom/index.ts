import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const brindled_madtom: Fish = {
  id: 'brindled_madtom',
  name: 'Brindled Madtom',
  scientific: 'Noturus miurus',
  image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Noturus_miurus_%28Madtom%29.jpg',
  quizImage: '',
  features: [
    'Small catfish with dark saddle markings',
    'Four dark saddle blotches on back',
    'Adipose fin connected to tail',
    'Light band at base of tail followed by dark band',
    'Yellowish-brown base color',
    'Mildly venomous pectoral spines'
  ],
  keyFeature: 'Small catfish with four dark saddle marks and banded tail pattern',
  habitat: 'Riffles of clear streams with rocky or gravelly bottoms',
  size: '2-4 inches typical',
  funFact: 'Brindled madtoms are state-listed as species of concern in some areas. Like all madtoms, they have a venomous pectoral spine used for defense.',
  refs: [
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
  { statement: 'Brindled madtoms have four dark saddle markings on their back.', answer: true, fishId: 'brindled_madtom' }
];

export default brindled_madtom;

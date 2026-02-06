import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const stonecat: Fish = {
  id: 'stonecat',
  name: 'Stonecat',
  scientific: 'Noturus flavus',
  image: [
    '/img/fish/stonecat/1.jpg',
    '/img/fish/stonecat/2.jpg'
  ],
  features: [
    'Small, slender catfish',
    'Yellowish-brown to gray body',
    'Adipose fin continuous with tail (connected)',
    'Rounded tail',
    'No spots or mottling',
    'Venomous pectoral spine'
  ],
  keyFeature: 'Small catfish with adipose fin fused to rounded tail and yellow-brown color',
  habitat: 'Rocky riffles in streams and rivers; hides under flat rocks',
  size: '5-8 inches typical',
  funFact: 'Stonecats have a mildly venomous spine in their pectoral fins that can cause a painful sting like a bee sting. They are the largest of the madtom catfish.',
  refs: [
    { label: 'USGS NAS factsheet', url: 'https://nas.er.usgs.gov/queries/FactSheet.aspx?speciesID=745' },
    { label: 'NatureServe Explorer', url: 'https://explorer.natureserve.org/Taxon/ELEMENT_GLOBAL.2.101382/Noturus_flavus' },
    { label: 'Animal Diversity Web', url: 'https://animaldiversity.org/accounts/Noturus_flavus/' }
  ],
  colors: { primary: '#8B7850', secondary: '#A09068', belly: '#C8B890', fin: '#7A6848' },
};

export const featureOptions: FeatureOption = {
  correct: 'Small catfish with adipose fin fused to rounded tail',
  wrong: ['Deeply forked tail like channel cat', 'Flat wide head like flathead', 'Very small tadpole-shaped body'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Stonecat madtoms have a venomous pectoral spine.', answer: true, fishId: 'stonecat' }
];

export default stonecat;

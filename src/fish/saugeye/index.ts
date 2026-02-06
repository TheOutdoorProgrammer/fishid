import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const saugeye: Fish = {
  id: 'saugeye',
  name: 'Saugeye',
  scientific: 'Sander vitreus × S. canadensis',
  image: [
    '/img/fish/saugeye/1.jpg',
    '/img/fish/saugeye/2.jpg'
  ],
  features: [
    'Olive-gold body (similar to walleye)',
    'Dark blotches/saddle marks on back',
    'Distinct dark rows of spots on dorsal fin',
    'May or may not have white tail tip',
    'Large glassy eyes like walleye',
    'Hybrid between walleye and sauger'
  ],
  keyFeature: 'Looks like walleye but with spotted dorsal fin and darker blotches',
  habitat: ['Ohio reservoirs and lakes (heavily stocked by ODNR)'],
  size: '15-22 inches typical',
  funFact: 'Saugeye are a man-made hybrid created by crossing walleye with sauger. Ohio stocks millions of saugeye every year because they grow fast and tolerate warmer, murkier water than pure walleye.',
  refs: [
    { label: 'Wikipedia: Saugeye', url: 'https://en.wikipedia.org/wiki/Saugeye' },
    { label: 'West Virginia DNR: Saugeye', url: 'https://wvdnr.gov/plants-animals/sportfish/saugeye/' },
    { label: 'USGS NAS factsheet', url: 'https://nas.er.usgs.gov/queries/factsheet.aspx?SpeciesID=829' }
  ],
  colors: { primary: '#6B6030', secondary: '#8B7840', belly: '#D8D0A0', fin: '#5A5028' },
};

export const featureOptions: FeatureOption = {
  correct: 'Like walleye but with spotted dorsal fin',
  wrong: ['Pure white tip on lower tail', 'Bright yellow body with dark bars', 'Flat head with mottled brown pattern'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Saugeye are a hybrid between walleye and sauger.', answer: true, fishId: 'saugeye' }
];

export default saugeye;

import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const blue_catfish: Fish = {
  id: 'blue_catfish',
  name: 'Blue Catfish',
  scientific: 'Ictalurus furcatus',
  image: [],
  features: [
    'Slate blue to grayish-blue body',
    'NO dark spots (unlike channel catfish)',
    'Deeply forked tail',
    'Straight-edged anal fin (30-36 rays)',
    'Humped back profile',
    'Can grow very large (50+ pounds)'
  ],
  keyFeature: 'Blue-gray body with no spots, straight anal fin edge, deeply forked tail',
  habitat: 'Large rivers, reservoirs, Lake Erie tributaries; prefers deep channels with current',
  size: '25-40 inches typical, can exceed 100 pounds',
  funFact: 'Blue catfish are the largest catfish species in North America and can live over 25 years. They were originally stocked in Ohio rivers and have spread to Lake Erie tributaries!',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'ODNR Blue catfish reporting', url: 'https://ohiodnr.gov/wps/portal/gov/odnr/buy-and-apply/hunting-fishing-boating/fishing-resources/blue-catfish-reporting' },
    { label: 'USGS NAS factsheet', url: 'https://nas.er.usgs.gov/queries/FactSheet.aspx?SpeciesID=740' }
  ],
  colors: { primary: '#4A6080', secondary: '#5A7090', belly: '#C8D0D8', fin: '#3A5070' },
};

export const featureOptions: FeatureOption = {
  correct: 'Blue-gray body, no spots, straight anal fin edge',
  wrong: ['Dark spots on silvery body', 'Flat wide head with mottled colors', 'Yellowish body with rounded tail'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Blue catfish have dark spots like channel catfish.', answer: false, fishId: 'blue_catfish' },
  { statement: 'Blue catfish have a straight-edged anal fin with 30-36 rays.', answer: true, fishId: 'blue_catfish' }
];

export default blue_catfish;

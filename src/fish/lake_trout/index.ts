import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const lake_trout: Fish = {
  id: 'lake_trout',
  name: 'Lake Trout',
  scientific: 'Salvelinus namaycush',
  image: [
    '/img/fish/lake_trout/1.jpg',
    '/img/fish/lake_trout/2.jpg'
  ],
  features: [
    'Dark gray-green body covered in pale spots',
    'Deeply forked tail (unique among chars)',
    'Light spots on dark background (no red spots)',
    'Cream or white leading edge on lower fins',
    'Large head relative to body',
    'Adipose fin present'
  ],
  keyFeature: 'Dark body with pale spots and deeply forked tail',
  habitat: ['Deep, cold waters of Lake Erie', 'historically in deeper eastern basin', 'lakes and reservoirs'],
  size: '18-30 inches typical in Lake Erie',
  funFact: 'Lake trout were nearly wiped out in Lake Erie by sea lamprey and overfishing. Restoration efforts have brought small populations back to the deeper parts of the lake.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Michigan DNR species page', url: 'https://www.michigan.gov/dnr/education/michigan-species/fish-species/lake-trout' },
    { label: 'DFO Canada species profile', url: 'https://www.dfo-mpo.gc.ca/species-especes/profiles-profils/lake-trout-touladi-eng.html' },
    { label: 'USFWS species profile', url: 'https://www.fws.gov/species/lake-trout-salvelinus-namaycush' },
    { label: 'Alaska Dept. of Fish & Game', url: 'https://www.adfg.alaska.gov/index.cfm?adfg=laketrout.main' }
  ],
  colors: { primary: '#4A5A50', secondary: '#5A6A60', belly: '#B0B8A8', fin: '#3A4A40' },
};

export const featureOptions: FeatureOption = {
  correct: 'Dark body with pale spots and deeply forked tail',
  wrong: ['Red spots with blue halos', 'Pink lateral stripe with spots', 'Worm-like markings on back'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Dark body with pale spots and deeply forked tail.', answer: true, fishId: 'lake_trout' },
  { statement: 'This fish can be identified by: Dark gray-green body covered in pale spots.', answer: true, fishId: 'lake_trout' },
  { statement: 'This fish can be identified by: Deeply forked tail (unique among chars).', answer: true, fishId: 'lake_trout' },
  { statement: 'You might find this fish in deep, cold waters of lake erie.', answer: true, fishId: 'lake_trout' }
];

export default lake_trout;

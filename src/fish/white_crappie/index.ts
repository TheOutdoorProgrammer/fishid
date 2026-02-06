import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const white_crappie: Fish = {
  id: 'white_crappie',
  name: 'White Crappie',
  scientific: 'Pomoxis annularis',
  image: [
    '/img/fish/white_crappie/1.jpg',
    '/img/fish/white_crappie/2.jpg'
  ],
  features: [
    'Deep, compressed body',
    'Silvery-green with dark VERTICAL bars',
    '5-6 dorsal spines (fewer than black crappie)',
    'Bars are arranged in distinct vertical pattern',
    'Slightly more elongated than black crappie'
  ],
  keyFeature: 'Silvery body with vertical dark bars, 5-6 dorsal spines',
  habitat: ['Murky lakes', 'reservoirs', 'rivers', 'more turbidity-tolerant'],
  size: '8-12 inches typical',
  funFact: 'The key to telling crappie apart: Black crappie have random spots, White crappie have organized vertical bars. Count the dorsal spines: 5-6 = White, 7-8 = Black!',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Missouri Dept. of Conservation: White Crappie', url: 'https://mdc.mo.gov/discover-nature/field-guide/white-crappie' },
    { label: 'Iowa DNR Fish Iowa: White Crappie', url: 'https://programs.iowadnr.gov/lakemanagement/fishiowa/fishdetails/WHC' },
    { label: 'Animal Diversity Web: Pomoxis annularis', url: 'https://animaldiversity.org/accounts/Pomoxis_annularis/' }
  ],
  colors: { primary: '#7B8878', secondary: '#98A890', belly: '#D8E0D0', fin: '#687868' },
};

export const featureOptions: FeatureOption = {
  correct: 'Silver body with vertical bars, 5-6 dorsal spines',
  wrong: ['Silver body with random scattered spots', 'Green body with dark lateral stripe', 'Bronze body with red eye'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Silvery body with vertical dark bars, 5-6 dorsal spines.', answer: true, fishId: 'white_crappie' },
  { statement: 'This fish can be identified by: Deep, compressed body.', answer: true, fishId: 'white_crappie' },
  { statement: 'This fish can be identified by: Silvery-green with dark VERTICAL bars.', answer: true, fishId: 'white_crappie' },
  { statement: 'You might find this fish in murky lakes.', answer: true, fishId: 'white_crappie' }
];

export default white_crappie;

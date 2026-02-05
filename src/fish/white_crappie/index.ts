import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const white_crappie: Fish = {
  id: 'white_crappie',
  name: 'White Crappie',
  scientific: 'Pomoxis annularis',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/White_Crappie.jpg/500px-White_Crappie.jpg',
  quizImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/White_crappie_pomoxis_annularis_%28white_background%29.jpg/500px-White_crappie_pomoxis_annularis_%28white_background%29.jpg',
  features: [
    'Deep, compressed body',
    'Silvery-green with dark VERTICAL bars',
    '5-6 dorsal spines (fewer than black crappie)',
    'Bars are arranged in distinct vertical pattern',
    'Slightly more elongated than black crappie'
  ],
  keyFeature: 'Silvery body with vertical dark bars, 5-6 dorsal spines',
  habitat: 'Murky lakes, reservoirs, rivers; more turbidity-tolerant',
  size: '8-12 inches typical',
  funFact: 'The key to telling crappie apart: Black crappie have random spots, White crappie have organized vertical bars. Count the dorsal spines: 5-6 = White, 7-8 = Black!',
  refs: [
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
  { statement: 'White crappie have 5-6 dorsal spines, fewer than black crappie.', answer: true, fishId: 'white_crappie' }
];

export default white_crappie;

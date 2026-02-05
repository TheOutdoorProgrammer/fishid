import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const rainbow_trout: Fish = {
  id: 'rainbow_trout',
  name: 'Rainbow Trout',
  scientific: 'Oncorhynchus mykiss',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Close_up_of_rainbow_trout_fish_underwater_oncorhynchus_mykiss.jpg/500px-Close_up_of_rainbow_trout_fish_underwater_oncorhynchus_mykiss.jpg',
  quizImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Rainbow_Trout_%28Oncorhynchus_mykiss%29_Gavins_Point.jpg/500px-Rainbow_Trout_%28Oncorhynchus_mykiss%29_Gavins_Point.jpg',
  features: [
    'Streamlined body',
    'Pink-red stripe along lateral line',
    'Green-blue back with black spots',
    'Spots on tail, back, and dorsal fin',
    'Adipose fin present',
    'White-tipped fins'
  ],
  keyFeature: 'Prominent pink-red lateral stripe with spots everywhere',
  habitat: 'Cold streams, stocked in Ohio lakes and ponds',
  size: '10-16 inches typical (stream fish)',
  funFact: 'Rainbow trout and steelhead are the same species! Stream-resident fish are called rainbow trout, while those that migrate to Lake Erie are called steelhead.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'USGS NAS factsheet', url: 'https://nas.er.usgs.gov/queries/FactSheet.aspx?speciesID=910' },
    { label: 'Animal Diversity Web: Oncorhynchus mykiss', url: 'https://animaldiversity.org/accounts/Oncorhynchus_mykiss/' }
  ],
  colors: { primary: '#4A7868', secondary: '#5A9080', belly: '#D8E0D8', fin: '#3A6050' },
};

export const featureOptions: FeatureOption = {
  correct: 'Pink-red lateral stripe with spots everywhere',
  wrong: ['Chrome silver with no visible stripe', 'Golden body with dark vertical bars', 'Mottled brown with flat head'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Rainbow trout lack an adipose fin.', answer: false, fishId: 'rainbow_trout' }
];

export default rainbow_trout;

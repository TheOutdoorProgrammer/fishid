import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const white_bass: Fish = {
  id: 'white_bass',
  name: 'White Bass',
  scientific: 'Morone chrysops',
  image: ['/img/fish/white_bass/1.jpg', '/img/fish/white_bass/2.jpg'],
  features: [
    'Silver body with dark horizontal stripes',
    'Deep, laterally compressed body',
    'Two dorsal fins (separated)',
    'Single tooth patch on the tongue',
    'Stripes are thin and run lengthwise',
  ],
  keyFeature: 'Silver body with thin dark horizontal stripes (schooling fish)',
  habitat: ['large lakes and reservoirs', 'open-water schooling areas', 'rivers and tributaries during spring spawning runs'],
  size: '10–15 inches typical',
  funFact:
    'White bass often form large schools and can make noticeable spawning runs up rivers and tributaries in spring.',
  refs: [
    {
      label: 'ODNR Sport Fish of Ohio Field Guide (PDF)',
      url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf',
    },
    { label: 'Fish of Ohio: White Bass', url: 'http://www.fishofohio.com/ohio-fish-white-bass.htm' },
    { label: 'USGS NAS factsheet: White bass', url: 'https://nas.er.usgs.gov/queries/factsheet.aspx?SpeciesID=779' },
  ],
  colors: { primary: '#8898A8', secondary: '#A0B0C0', belly: '#D8E0E8', fin: '#687888' },
};

export const featureOptions: FeatureOption = {
  correct: 'Silver body with thin dark horizontal stripes',
  wrong: ['Golden body with dark vertical bars', 'Green body with light spots', 'Bronze body with red eye'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'White bass have dark vertical bars on their body.', answer: false, fishId: 'white_bass' },
  {
    statement: 'White bass often form schools in open water.',
    answer: true,
    fishId: 'white_bass',
  },
  {
    statement: 'White bass commonly make spawning runs in spring.',
    answer: true,
    fishId: 'white_bass',
  },
  {
    statement: 'White bass have a single tooth patch on the tongue.',
    answer: true,
    fishId: 'white_bass',
  },
];

export default white_bass;

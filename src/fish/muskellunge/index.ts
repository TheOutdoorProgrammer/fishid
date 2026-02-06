import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const muskellunge: Fish = {
  id: 'muskellunge',
  name: 'Muskellunge',
  scientific: 'Esox masquinongy',
  image: ['/img/fish/muskellunge/1.jpg', '/img/fish/muskellunge/2.jpg'],
  features: [
    'Very long, torpedo-shaped body (typically larger than northern pike)',
    'Light body with dark bars or spots (pattern varies)',
    'Pointed snout',
    'No scales on the lower half of the cheek (ID clue vs. pike)',
    '6–9 sensory pores on each side of the lower jaw',
    'Tail fin often appears more pointed than pike',
  ],
  keyFeature: 'Light body with dark markings and a long pointed snout',
  habitat: [
    'clear lakes with weed beds and structure',
    'vegetated bays and edges (ambush cover)',
    'slow rivers with pools',
    'large lakes/reservoirs (including parts of the Great Lakes)',
  ],
  size: '30–48 inches typical; Ohio record over 50 inches',
  funFact:
    'Muskies are sometimes called “the fish of 10,000 casts” because they can be difficult to hook consistently.',
  refs: [
    { label: 'ODNR: Muskie Angler Log', url: 'https://ohiodnr.gov/buy-and-apply/hunting-fishing-boating/fishing-resources/muskie-angler-log' },
    { label: 'Ohio State ENR Fish Taxonomy: Muskellunge recovery in Ohio', url: 'https://u.osu.edu/enrfishtax/2019/11/06/muskellunge-recovery-in-ohio/' },
    {
      label: 'ODNR Sport Fish of Ohio Field Guide (PDF)',
      url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf',
    },
    { label: 'USGS NAS factsheet: Muskellunge', url: 'https://nas.er.usgs.gov/queries/FactSheet.aspx?speciesID=679' },
  ],
  colors: { primary: '#8B9B78', secondary: '#A0B090', belly: '#D8E0C8', fin: '#687858' },
};

export const featureOptions: FeatureOption = {
  correct: 'Light body with dark markings, pointed snout',
  wrong: ['Dark body with light bean-shaped spots', 'Golden body with vertical bars', 'Silver-gray with humped back'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Muskellunge have light spots on a dark body like pike.', answer: false, fishId: 'muskellunge' },
  { statement: 'Muskellunge are called the fish of 10,000 casts.', answer: true, fishId: 'muskellunge' },
  {
    statement: 'Muskellunge are ambush predators that commonly use weeds/structure as cover.',
    answer: true,
    fishId: 'muskellunge',
  },
  {
    statement: 'Muskellunge are a type of catfish with barbels.',
    answer: false,
    fishId: 'muskellunge',
  },
];

export default muskellunge;

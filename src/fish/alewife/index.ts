import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const alewife: Fish = {
  id: 'alewife',
  name: 'Alewife',
  scientific: 'Alosa pseudoharengus',
  image: ['/img/fish/alewife/1.jpg', '/img/fish/alewife/2.jpg'],
  features: [
    'Slender, laterally compressed body',
    'Large eye relative to head size',
    'Silver body with grayish-green back',
    'Single dark spot behind the gill cover (shoulder spot)',
    'Saw-toothed (serrated) belly edge (scutes)',
    'Forked tail',
  ],
  keyFeature: 'Large eye + single shoulder spot + serrated belly (scutes)',
  habitat: ['Great Lakes open waters (pelagic schools)', 'nearshore waters seasonally', 'introduced/invasive in several Great Lakes'],
  size: '5–9 inches typical',
  funFact:
    'Alewife are an important forage fish for salmon and trout in the Great Lakes, and they have been associated with large die-offs that wash up on beaches.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'USGS NAS factsheet: Alewife', url: 'https://nas.er.usgs.gov/queries/factsheet.aspx?SpeciesID=490' },
    {
      label: 'USFWS (PDF): Ecological Risk Screening Summary — Alewife',
      url: 'https://www.fws.gov/sites/default/files/documents/Ecological-Risk-Screening-Summary-Alewife.pdf',
    },
    {
      label: 'InvasiveSpeciesInfo.gov: Alewife',
      url: 'https://www.invasivespeciesinfo.gov/aquatic/fish-and-other-vertebrates/alewife',
    },
  ],
  colors: { primary: '#6878A0', secondary: '#8090B0', belly: '#D0D8E8', fin: '#586888' },
};

export const featureOptions: FeatureOption = {
  correct: 'Large eye + single shoulder spot + serrated belly (scutes)',
  wrong: ['Deep body with trailing dorsal filament', 'Elongated body with projecting lower jaw', 'Large-eyed fish with dorsal fin ahead of anal fin'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Alewife are native to the Great Lakes.', answer: false, fishId: 'alewife' },
  {
    statement: 'Alewife have a serrated (saw-toothed) belly edge called scutes.',
    answer: true,
    fishId: 'alewife',
  },
  {
    statement: 'Alewife are an important forage fish for salmon and trout in the Great Lakes.',
    answer: true,
    fishId: 'alewife',
  },
  {
    statement: 'Alewife are bottom-dwelling fish that live mostly in rocky riffles.',
    answer: false,
    fishId: 'alewife',
  },
];

export default alewife;

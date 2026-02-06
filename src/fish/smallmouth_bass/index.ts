import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const smallmouth_bass: Fish = {
  id: 'smallmouth_bass',
  name: 'Smallmouth Bass',
  scientific: 'Micropterus dolomieu',
  image: ['/img/fish/smallmouth_bass/1.jpg', '/img/fish/smallmouth_bass/2.jpg'],
  features: [
    'Bronze to brown body color (“bronzeback”)',
    'Vertical dark bars (may fade in some fish)',
    'Red/orange eye (often)',
    'Jaw does NOT extend past the eye (vs. largemouth)',
    'Connected dorsal fin with a shallow notch',
  ],
  keyFeature: 'Jaw ends at the eye (not past it) with a bronze body',
  habitat: ['clear, rocky streams and rivers', 'gravel/cobble bottoms (common spawning substrate)', 'rocky shorelines in lakes (including the Great Lakes)'],
  size: '12–18 inches typical',
  funFact:
    'Smallmouth bass often favor clear water and rocky habitat, where they feed heavily on crayfish and small fish.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    {
      label: 'USFWS species profile: Smallmouth bass',
      url: 'https://www.fws.gov/species/smallmouth-bass-micropterus-dolomieui',
    },
    {
      label: 'ODNR video library: Smallmouth bass fishing tips',
      url: 'https://ohiodnr.gov/wps/portal/gov/odnr/discover-and-learn/education-training/wild-ohio-harvest-video-library/general-fishing/smallmouth-bass-fishing-tips',
    },
    {
      label: 'DFO Canada species profile: Smallmouth bass',
      url: 'https://www.dfo-mpo.gc.ca/species-especes/profiles-profils/smallmouthbass-achiganpetitebouche-eng.html',
    },
  ],
  colors: { primary: '#8B6914', secondary: '#A07828', belly: '#D4C090', fin: '#6B5510' },
};

export const featureOptions: FeatureOption = {
  correct: 'Jaw ends at the eye (not past it) with a bronze body',
  wrong: ['Jaw extending well past the eye', 'Dark horizontal lateral stripe', 'Forked tail with barbels'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Smallmouth bass have a jaw that extends past the eye.', answer: false, fishId: 'smallmouth_bass' },
  {
    statement: 'Smallmouth bass are often associated with clear water and rocky habitat.',
    answer: true,
    fishId: 'smallmouth_bass',
  },
  {
    statement: 'Smallmouth bass typically have a deep, forked tail like a shad.',
    answer: false,
    fishId: 'smallmouth_bass',
  },
  {
    statement: 'A common ID tip is that the smallmouth’s jaw ends at the eye, unlike largemouth bass.',
    answer: true,
    fishId: 'smallmouth_bass',
  },
];

export default smallmouth_bass;

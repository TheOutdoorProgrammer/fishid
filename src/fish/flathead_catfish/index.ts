import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const flathead_catfish: Fish = {
  id: 'flathead_catfish',
  name: 'Flathead Catfish',
  scientific: 'Pylodictis olivaris',
  image: [
    '/img/fish/flathead_catfish/1.jpg',
    '/img/fish/flathead_catfish/2.jpg'
  ],
  features: [
    'Flat, wide head (distinctive!)',
    'Mottled brown and yellow coloring',
    'Lower jaw protrudes past upper jaw',
    'Square or slightly rounded tail (NOT forked)',
    '8 barbels (whiskers)',
    'Small eyes set wide apart'
  ],
  keyFeature: 'Flat wide head, mottled brown/yellow, square tail (not forked)',
  habitat: ['Large rivers, reservoirs; prefers deep pools with cover'],
  size: '20-36 inches typical, Ohio record 76+ pounds',
  funFact: 'Flathead catfish are solitary ambush predators that prefer to eat live fish. Unlike channel cats, they rarely eat stinky bait. They can live over 20 years!',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'USFWS species profile', url: 'https://www.fws.gov/species/flathead-catfish-pylodictis-olivaris' },
    { label: 'Wikipedia: Flathead catfish', url: 'https://en.wikipedia.org/wiki/Flathead_catfish' }
  ],
  colors: { primary: '#7A6830', secondary: '#9A8848', belly: '#C8B870', fin: '#685828' },
};

export const featureOptions: FeatureOption = {
  correct: 'Flat wide head, mottled colors, square tail',
  wrong: ['Narrow head with forked tail and spots', 'Silver body with humped back', 'Green body with light spots'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Flathead catfish have a deeply forked tail.', answer: false, fishId: 'flathead_catfish' }
];

export default flathead_catfish;

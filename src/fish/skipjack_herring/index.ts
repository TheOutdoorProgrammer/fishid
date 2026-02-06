import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const skipjack_herring: Fish = {
  id: 'skipjack_herring',
  name: 'Skipjack Herring',
  scientific: 'Alosa chrysochloris',
  image: [
    '/img/fish/skipjack_herring/1.jpg',
    '/img/fish/skipjack_herring/2.jpg'
  ],
  features: [
    'Elongated, compressed silver body',
    'Bluish-green back with brilliant silver sides',
    'Large mouth with projecting lower jaw',
    'No dark spot behind gill cover',
    'Deeply forked tail',
    'Serrated belly (scutes like shad)'
  ],
  keyFeature: 'Silver herring with projecting lower jaw and no shoulder spot',
  habitat: ['Ohio creeks and small rivers', 'Ohio River and large tributaries', 'Ohio River', 'large tributaries', 'open water near surface'],
  size: '12-16 inches typical',
  funFact: 'Skipjack herring are named for their habit of leaping out of the water while feeding. They are excellent cut bait for catching catfish and are found mainly in the Ohio River.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Alosa%20chrysochloris' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Alosa+chrysochloris' }
  ],
  colors: { primary: '#6080A0', secondary: '#78A0B8', belly: '#D8E0E8', fin: '#507088' },
};

export const featureOptions: FeatureOption = {
  correct: 'Silver herring with projecting lower jaw and no shoulder spot',
  wrong: ['Deep body with trailing dorsal filament', 'Single dark spot behind gill with serrated belly', 'Large eye with dorsal ahead of anal fin'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Silver herring with projecting lower jaw and no shoulder spot.', answer: true, fishId: 'skipjack_herring' },
  { statement: 'This fish can be identified by: Elongated, compressed silver body.', answer: true, fishId: 'skipjack_herring' },
  { statement: 'This fish can be identified by: Bluish-green back with brilliant silver sides.', answer: true, fishId: 'skipjack_herring' },
  { statement: 'You might find this fish in ohio river.', answer: true, fishId: 'skipjack_herring' }
];

export default skipjack_herring;

import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const goldfish: Fish = {
  id: 'goldfish',
  name: 'Goldfish',
  scientific: 'Carassius auratus',
  image: [
    '/img/fish/goldfish/1.jpg',
    '/img/fish/goldfish/2.jpg'
  ],
  features: [
    'Deep, compressed body',
    'Gold to olive body (wild-type are dark)',
    'No barbels (unlike common carp)',
    'Long dorsal fin with serrated spine',
    'Forked tail',
    'Wild ones are dark olive, not bright gold'
  ],
  keyFeature: 'Carp-like fish without barbels; wild ones are dark olive (not pet-store gold)',
  habitat: ['Ohio creeks and small rivers', 'Ohio farm ponds and small lakes', 'Ohio inland lakes and reservoirs', 'Ponds', 'lakes'],
  size: '6-12 inches typical in wild, can reach 16+',
  funFact: 'Wild goldfish in Ohio are NOT the bright orange of pet stores. They revert to dark olive-bronze coloring within a generation. Released pet goldfish have established invasive populations in Ohio waters.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Carassius%20auratus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Carassius+auratus' }
  ],
  colors: { primary: '#5A6030', secondary: '#708040', belly: '#C0B878', fin: '#4A5028' },
};

export const featureOptions: FeatureOption = {
  correct: 'Carp-like fish without barbels; wild ones dark olive not bright gold',
  wrong: ['Large golden body with barbels', 'Bright orange body in the wild', 'Elongated body with dark-edged scales'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Carp-like fish without barbels; wild ones are dark olive (not pet-store gold).', answer: true, fishId: 'goldfish' },
  { statement: 'This fish can be identified by: Deep, compressed body.', answer: true, fishId: 'goldfish' },
  { statement: 'This fish can be identified by: Gold to olive body (wild-type are dark).', answer: true, fishId: 'goldfish' },
  { statement: 'You might find this fish in ponds.', answer: true, fishId: 'goldfish' }
];

export default goldfish;

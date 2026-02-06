import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const silver_chub: Fish = {
  id: 'silver_chub',
  name: 'Silver Chub',
  scientific: 'Macrhybopsis storeriana',
  image: [
    '/img/fish/silver_chub/1.jpg',
    '/img/fish/silver_chub/2.jpg'
  ],
  features: [
    'Slender, elongated body',
    'Silver body with large eye',
    'Small barbel at corner of mouth',
    'Subterminal mouth',
    'Rounded snout',
    'Forked tail'
  ],
  keyFeature: 'Slender silver minnow with small barbel and large eye',
  habitat: ['Ohio creeks and small rivers', 'Ohio inland lakes and reservoirs', 'Ohio River and large tributaries', 'Lake Erie and tributaries (Ohio)', 'Large rivers'],
  size: '4-6 inches typical',
  funFact: 'Silver chub are important forage fish in Lake Erie and the Ohio River. They use their small barbels to detect food in murky bottom habitats.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Macrhybopsis%20storeriana' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Macrhybopsis+storeriana' }
  ],
  colors: { primary: '#8090A0', secondary: '#98A8B8', belly: '#D0D8E0', fin: '#708088' },
};

export const featureOptions: FeatureOption = {
  correct: 'Slender silver minnow with small barbel and large eye',
  wrong: ['Deep golden body with belly keel', 'Emerald-green translucent body', 'Red-orange spot behind eye'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Slender silver minnow with small barbel and large eye.', answer: true, fishId: 'silver_chub' },
  { statement: 'This fish can be identified by: Slender, elongated body.', answer: true, fishId: 'silver_chub' },
  { statement: 'This fish can be identified by: Silver body with large eye.', answer: true, fishId: 'silver_chub' },
  { statement: 'You might find this fish in large rivers.', answer: true, fishId: 'silver_chub' }
];

export default silver_chub;

import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const quillback: Fish = {
  id: 'quillback',
  name: 'Quillback',
  scientific: 'Carpiodes cyprinus',
  image: [
    '/img/fish/quillback/1.jpg',
    '/img/fish/quillback/2.jpg'
  ],
  features: [
    'Deep, laterally compressed silver body',
    'First ray of dorsal fin extremely long (like a quill)',
    'Small, downward-pointing sucker mouth',
    'No barbels (unlike carp)',
    'Large silver scales',
    'Forked tail'
  ],
  keyFeature: 'Deep silver body with very long first dorsal ray (the quill)',
  habitat: ['creeks', 'lakes', 'reservoirs', 'rivers'],
  size: '15-22 inches typical',
  funFact: 'Quillback are often confused with carp, but they have no barbels and a small sucker mouth. The long first dorsal ray that gives them their name can be as long as the entire dorsal fin.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Carpiodes%20cyprinus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Carpiodes+cyprinus' }
  ],
  colors: { primary: '#8898A0', secondary: '#A0B0B8', belly: '#D0D8E0', fin: '#708088' },
};

export const featureOptions: FeatureOption = {
  correct: 'Deep silver body with very long first dorsal ray (the quill)',
  wrong: ['Golden body with barbels near mouth', 'Cylindrical body with sucker mouth only', 'Dark body with saddle markings'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Deep silver body with very long first dorsal ray (the quill).', answer: true, fishId: 'quillback' },
  { statement: 'This fish can be identified by: Deep, laterally compressed silver body.', answer: true, fishId: 'quillback' },
  { statement: 'This fish can be identified by: First ray of dorsal fin extremely long (like a quill).', answer: true, fishId: 'quillback' },
  { statement: 'You might find this fish in rivers.', answer: true, fishId: 'quillback' }
];

export default quillback;

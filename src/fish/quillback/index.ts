import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const quillback: Fish = {
  id: 'quillback',
  name: 'Quillback',
  scientific: 'Carpiodes cyprinus',
  image: [],
  features: [
    'Deep, laterally compressed silver body',
    'First ray of dorsal fin extremely long (like a quill)',
    'Small, downward-pointing sucker mouth',
    'No barbels (unlike carp)',
    'Large silver scales',
    'Forked tail'
  ],
  keyFeature: 'Deep silver body with very long first dorsal ray (the quill)',
  habitat: 'Rivers, lakes, reservoirs; slow to moderate current',
  size: '15-22 inches typical',
  funFact: 'Quillback are often confused with carp, but they have no barbels and a small sucker mouth. The long first dorsal ray that gives them their name can be as long as the entire dorsal fin.',
  refs: [
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
  { statement: 'Quillback have barbels near their mouth like common carp.', answer: false, fishId: 'quillback' }
];

export default quillback;

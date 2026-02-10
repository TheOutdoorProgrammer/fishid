import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const striped_shiner: Fish = {
  id: 'striped_shiner',
  name: 'Striped Shiner',
  scientific: 'Luxilus chrysocephalus',
  image: [
    '/img/fish/striped_shiner/1.jpg',
    '/img/fish/striped_shiner/2.jpg'
  ],
  features: [
    'Large, deep-bodied shiner',
    'Dark crescent-shaped markings on scales creating striped look',
    'Silver body with olive back',
    'Breeding males develop pink-rose body and blue head',
    'Large scales',
    'Forked tail'
  ],
  keyFeature: 'Large shiner with crescent scale marks; breeding males have pink body and blue head',
  habitat: ['creeks', 'rivers', 'streams'],
  size: '4-7 inches typical',
  funFact: 'Striped shiners are among the most beautiful minnows when spawning. Males develop a stunning combination of pink body, blue head, and orange fins.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Luxilus%20chrysocephalus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Luxilus+chrysocephalus' }
  ],
  colors: { primary: '#7A8070', secondary: '#909888', belly: '#C8D0C0', fin: '#687060' },
};

export const featureOptions: FeatureOption = {
  correct: 'Large shiner with crescent scale marks; breeding males pink body blue head',
  wrong: ['Steel-blue back with dorsal fin spot', 'Slender translucent body with green sheen', 'Hard scraping ridge on lower jaw'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Large shiner with crescent scale marks; breeding males have pink body and blue head.', answer: true, fishId: 'striped_shiner', showImage: true },
  { statement: 'This fish can be identified by: Large, deep-bodied shiner.', answer: true, fishId: 'striped_shiner', showImage: true },
  { statement: 'This fish can be identified by: Dark crescent-shaped markings on scales creating striped look.', answer: true, fishId: 'striped_shiner', showImage: true },
  { statement: 'You might find this fish in pools of small to medium streams over gravel.', answer: true, fishId: 'striped_shiner', showImage: true }
];

export default striped_shiner;

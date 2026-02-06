import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const spotfin_shiner: Fish = {
  id: 'spotfin_shiner',
  name: 'Spotfin Shiner',
  scientific: 'Cyprinella spiloptera',
  image: [
    '/img/fish/spotfin_shiner/1.jpg',
    '/img/fish/spotfin_shiner/2.jpg'
  ],
  features: [
    'Steel-blue sheen on back and sides',
    'Dark blotch on rear of dorsal fin',
    'Compressed, moderately deep body',
    'Silver with blue highlights',
    'Diamond-shaped scale pattern',
    'Forked tail'
  ],
  keyFeature: 'Steel-blue shiner with distinctive dark blotch on back of dorsal fin',
  habitat: ['Rocky pools', 'runs of streams', 'moderate to large streams'],
  size: '3-4 inches typical',
  funFact: 'Spotfin shiners get their name from the dark blotch on the back of the dorsal fin. Breeding males develop brilliant blue coloring that rivals any tropical fish.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Cyprinella%20spiloptera' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Cyprinella+spiloptera' }
  ],
  colors: { primary: '#5068A0', secondary: '#6880B0', belly: '#C8D0D8', fin: '#405890' },
};

export const featureOptions: FeatureOption = {
  correct: 'Steel-blue shiner with dark blotch on back of dorsal fin',
  wrong: ['Emerald-green translucent body', 'Deep golden body with belly keel', 'Crescent scale marks with pink breeding color'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Steel-blue shiner with distinctive dark blotch on back of dorsal fin.', answer: true, fishId: 'spotfin_shiner' },
  { statement: 'This fish can be identified by: Steel-blue sheen on back and sides.', answer: true, fishId: 'spotfin_shiner' },
  { statement: 'This fish can be identified by: Dark blotch on rear of dorsal fin.', answer: true, fishId: 'spotfin_shiner' },
  { statement: 'You might find this fish in rocky pools.', answer: true, fishId: 'spotfin_shiner' }
];

export default spotfin_shiner;

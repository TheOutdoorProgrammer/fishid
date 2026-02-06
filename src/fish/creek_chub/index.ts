import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const creek_chub: Fish = {
  id: 'creek_chub',
  name: 'Creek Chub',
  scientific: 'Semotilus atromaculatus',
  image: [
    '/img/fish/creek_chub/1.jpg',
    '/img/fish/creek_chub/2.jpg'
  ],
  features: [
    'Large minnow with robust body',
    'Dark spot at base of dorsal fin',
    'Dark lateral stripe especially on young fish',
    'Large mouth for a minnow',
    'Breeding males develop pink/rose coloring and head tubercles',
    'Olive-brown back with silver sides'
  ],
  keyFeature: 'Large minnow with dark spot at dorsal fin base and big mouth',
  habitat: ['Ohio creeks and small rivers', 'Small to medium streams', 'one of most common stream fish', 'clear streams and rivers'],
  size: '5-8 inches typical, can reach 12',
  funFact: 'Creek chub males build nests by carrying stones in their mouths to create gravel mounds. A single nest mound can contain thousands of pebbles!',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Semotilus%20atromaculatus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Semotilus+atromaculatus' }
  ],
  colors: { primary: '#6B6840', secondary: '#8B8858', belly: '#C8C8A0', fin: '#5A5838' },
};

export const featureOptions: FeatureOption = {
  correct: 'Large minnow with dark spot at dorsal fin base and big mouth',
  wrong: ['Hard scraping ridge on lower jaw', 'Deep golden body with decurved lateral line', 'Blunt head with fat pad'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Large minnow with dark spot at dorsal fin base and big mouth.', answer: true, fishId: 'creek_chub' },
  { statement: 'This fish can be identified by: Large minnow with robust body.', answer: true, fishId: 'creek_chub' },
  { statement: 'This fish can be identified by: Dark spot at base of dorsal fin.', answer: true, fishId: 'creek_chub' },
  { statement: 'You might find this fish in small to medium streams.', answer: true, fishId: 'creek_chub' }
];

export default creek_chub;

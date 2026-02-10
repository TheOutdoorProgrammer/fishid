import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const suckermouth_minnow: Fish = {
  id: 'suckermouth_minnow',
  name: 'Suckermouth Minnow',
  scientific: 'Phenacobius mirabilis',
  image: [
    '/img/fish/suckermouth_minnow/1.jpg',
    '/img/fish/suckermouth_minnow/2.jpg'
  ],
  features: [
    'Elongated body with flattened underside',
    'Fleshy sucker-like mouth on underside of head',
    'Dark lateral stripe',
    'Dark spot at base of tail',
    'Olive-brown body',
    'Flat belly adapted for bottom dwelling'
  ],
  keyFeature: 'Minnow with distinctive fleshy sucker-like mouth on bottom of head',
  habitat: ['creeks', 'rivers', 'rocky streams', 'streams'],
  size: '3-4 inches typical',
  funFact: 'Suckermouth minnows are named for their fleshy, downward-facing mouth that resembles a sucker fish. They live on the stream bottom and use this mouth to scrape food from rocks.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Phenacobius%20mirabilis' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Phenacobius+mirabilis' }
  ],
  colors: { primary: '#6B6040', secondary: '#8B8060', belly: '#C8C0A0', fin: '#5A5038' },
};

export const featureOptions: FeatureOption = {
  correct: 'Minnow with distinctive fleshy sucker-like mouth on bottom of head',
  wrong: ['Hard scraping ridge on jaw', 'Deep golden body with belly keel', 'Large upturned mouth'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Minnow with distinctive fleshy sucker-like mouth on bottom of head.', answer: true, fishId: 'suckermouth_minnow', showImage: true },
  { statement: 'This fish can be identified by: Elongated body with flattened underside.', answer: true, fishId: 'suckermouth_minnow', showImage: true },
  { statement: 'This fish can be identified by: Fleshy sucker-like mouth on underside of head.', answer: true, fishId: 'suckermouth_minnow', showImage: true },
  { statement: 'You might find this fish in riffles of streams with gravel or rocky bottoms.', answer: true, fishId: 'suckermouth_minnow', showImage: true }
];

export default suckermouth_minnow;

import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const green_sunfish: Fish = {
  id: 'green_sunfish',
  name: 'Green Sunfish',
  scientific: 'Lepomis cyanellus',
  image: [
    '/img/fish/green_sunfish/1.jpg',
    '/img/fish/green_sunfish/2.jpg'
  ],
  features: [
    'Stocky, thick body for a sunfish',
    'Dark olive-green to blue-green color',
    'Large mouth extending to middle of eye',
    'Blue-green streaks on face (cheeks and opercle)',
    'Dark ear flap with pale orange or yellow edge',
    'Yellow-orange belly and fin edges'
  ],
  keyFeature: 'Stocky sunfish with large mouth and blue-green facial streaks',
  habitat: ['Ohio creeks and small rivers', 'Ohio farm ponds and small lakes', 'Ohio inland lakes and reservoirs', 'Streams', 'ponds'],
  size: '4-8 inches typical',
  funFact: 'Green sunfish are one of the toughest panfish - they can survive in muddy, low-oxygen water where other sunfish cannot. They readily hybridize with bluegill.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Virginia DWR species profile', url: 'https://dwr.virginia.gov/wildlife/information/green-sunfish/' },
    { label: 'Mississippi MDWFP Fish ID Guide', url: 'https://www.mdwfp.com/fishing-boating/fish-id-guide/green-sunfish' },
    { label: 'Outdoor Alabama species page', url: 'https://www.outdooralabama.com/bream/green-sunfish' }
  ],
  colors: { primary: '#3B6B3A', secondary: '#4A8050', belly: '#D8C060', fin: '#2A5030' },
};

export const featureOptions: FeatureOption = {
  correct: 'Stocky sunfish with large mouth and blue-green facial streaks',
  wrong: ['Deep body with dark ear flap only', 'Wavy lines on face with red ear spot', 'Very long ear flap with white border'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Stocky sunfish with large mouth and blue-green facial streaks.', answer: true, fishId: 'green_sunfish' },
  { statement: 'This fish can be identified by: Stocky, thick body for a sunfish.', answer: true, fishId: 'green_sunfish' },
  { statement: 'This fish can be identified by: Dark olive-green to blue-green color.', answer: true, fishId: 'green_sunfish' },
  { statement: 'You might find this fish in streams.', answer: true, fishId: 'green_sunfish' }
];

export default green_sunfish;

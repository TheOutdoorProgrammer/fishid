import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const freshwater_drum: Fish = {
  id: 'freshwater_drum',
  name: 'Freshwater Drum',
  scientific: 'Aplodinotus grunniens',
  image: [
    '/img/fish/freshwater_drum/1.jpg',
    '/img/fish/freshwater_drum/2.jpg'
  ],
  features: [
    'Deep, humped body shape',
    'Silver-gray coloring',
    'Rounded (not forked) tail',
    'Long dorsal fin spanning most of back',
    'Downturned mouth',
    'Large otoliths (ear bones) called "lucky stones"'
  ],
  keyFeature: 'Deep silver body, humped back, rounded tail, downturned mouth',
  habitat: ['Lake Erie', 'large rivers', 'reservoirs', 'bottom dweller'],
  size: '12-20 inches typical',
  funFact: 'Freshwater drum can make a drumming sound by vibrating muscles against their swim bladder - that\'s how they got their name! Their ear bones ("lucky stones") are smooth, round, and often collected.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'ODNR: Freshwater drum recipe/info', url: 'https://ohiodnr.gov/discover-and-learn/education-training/wild-ohio-harvest-cookbook/fish-recipes/freshwater-drum-cocktail' },
    { label: 'Wikipedia: Freshwater drum', url: 'https://en.wikipedia.org/wiki/Freshwater_drum' }
  ],
  colors: { primary: '#8090A0', secondary: '#98A8B8', belly: '#D0D8E0', fin: '#687888' },
};

export const featureOptions: FeatureOption = {
  correct: 'Silver deep body with humped back and rounded tail',
  wrong: ['Elongated body with duck-bill snout', 'Golden body with vertical bars', 'Bronze body with red eye'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Freshwater drum can make a drumming sound with their swim bladder.', answer: true, fishId: 'freshwater_drum' }
];

export default freshwater_drum;

import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const walleye: Fish = {
  id: 'walleye',
  name: 'Walleye',
  scientific: 'Sander vitreus',
  image: [
    '/img/fish/walleye/1.jpg',
    '/img/fish/walleye/2.jpg'
  ],
  features: [
    'Large, glassy, reflective eyes (adapted for low light)',
    'Olive-gold body with dark saddle markings',
    'White tip on lower lobe of tail fin',
    'Two separate dorsal fins (spiny + soft)',
    'Sharp canine teeth'
  ],
  keyFeature: 'Large glassy eyes and white-tipped lower tail',
  habitat: 'Lake Erie, large reservoirs, rivers with rocky bottoms',
  size: '15-25 inches typical, up to 30+',
  funFact: 'Walleye are named for their pearlescent eyes, which reflect light like a cat\'s eyes. They are Ohio\'s most prized game fish and the official state fish of Ohio... wait, that\'s actually not true - but they should be!',
  refs: [
    { label: 'ODNR species page: Walleye', url: 'https://ohiodnr.gov/discover-and-learn/animals/fish/walleye' },
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'USGS NAS factsheet', url: 'https://nas.er.usgs.gov/queries/FactSheet.aspx?speciesID=831' }
  ],
  colors: { primary: '#7B6B3A', secondary: '#9B8B4A', belly: '#E8DEB8', fin: '#6B5B30' },
};

export const featureOptions: FeatureOption = {
  correct: 'Large glassy eyes and white-tipped lower tail',
  wrong: ['Dark ear flap on gill cover', 'Horizontal stripes along body', 'Flat, wide head shape'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Walleye have a white tip on the lower lobe of their tail.', answer: true, fishId: 'walleye' }
];

export default walleye;

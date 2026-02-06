import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const walleye: Fish = {
  id: 'walleye',
  name: 'Walleye',
  scientific: 'Sander vitreus',
  image: ['/img/fish/walleye/1.jpg', '/img/fish/walleye/2.jpg'],
  features: [
    'Large, glassy, reflective eyes (excellent low-light vision)',
    'Olive-gold body with dark saddle markings',
    'White tip on the lower lobe of the tail fin',
    'Two separate dorsal fins (spiny + soft)',
    'Sharp canine teeth',
  ],
  keyFeature: 'Large glassy eyes with a white-tipped lower tail lobe',
  habitat: ['Ohio creeks and small rivers', 'Ohio inland lakes and reservoirs', 'Lake Erie and tributaries (Ohio)', 'Great Lakes (including Lake Erie)', 'large lakes and reservoirs'],
  size: '15–25 inches typical, up to 30+ inches',
  funFact:
    'Walleye are named for their reflective eyes, which help them see well in low light. In Lake Erie, adults move to rocky reefs and shoals to spawn in spring.',
  refs: [
    { label: 'ODNR species page: Walleye', url: 'https://ohiodnr.gov/discover-and-learn/animals/fish/walleye' },
    {
      label: 'ODNR: Walleye telemetry (Lake Erie)',
      url: 'https://ohiodnr.gov/discover-and-learn/safety-conservation/fish-management/walleye-telemetry',
    },
    {
      label: 'ODNR Sport Fish of Ohio Field Guide (PDF)',
      url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf',
    },
    { label: 'USGS NAS factsheet: Walleye', url: 'https://nas.er.usgs.gov/queries/FactSheet.aspx?speciesID=831' },
  ],
  colors: { primary: '#7B6B3A', secondary: '#9B8B4A', belly: '#E8DEB8', fin: '#6B5B30' },
};

export const featureOptions: FeatureOption = {
  correct: 'Large glassy eyes with a white-tipped lower tail lobe',
  wrong: ['Dark ear flap on gill cover', 'Horizontal stripes along body', 'Flat, wide head shape'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Walleye have a white tip on the lower lobe of their tail.', answer: true, fishId: 'walleye' },
  {
    statement: 'Walleye have two separate dorsal fins (one spiny and one soft).',
    answer: true,
    fishId: 'walleye',
  },
  {
    statement: 'Walleye are best adapted for feeding in bright, midday sunlight.',
    answer: false,
    fishId: 'walleye',
  },
  {
    statement: 'In Lake Erie, walleye commonly use rocky reefs and shoals as spawning areas in spring.',
    answer: true,
    fishId: 'walleye',
  },
];

export default walleye;

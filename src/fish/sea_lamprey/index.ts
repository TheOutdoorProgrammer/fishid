import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const sea_lamprey: Fish = {
  id: 'sea_lamprey',
  name: 'Sea Lamprey',
  scientific: 'Petromyzon marinus',
  image: ['/img/fish/sea_lamprey/1.jpg', '/img/fish/sea_lamprey/2.jpg'],
  features: [
    'Eel-like body (jawless fish)',
    'Circular sucker mouth filled with sharp teeth',
    'Seven visible gill openings on each side',
    'No paired fins (no pectoral or pelvic fins)',
    'Mottled gray-brown body',
    'Single nostril on top of head',
  ],
  keyFeature: 'Circular tooth-filled sucker mouth with 7 gill openings (jawless parasite)',
  habitat: ['Ohio creeks and small rivers', 'Ohio inland lakes and reservoirs', 'Lake Erie and tributaries (Ohio)', 'Great Lakes (adult/parasitic phase in lakes)', 'parasitic on large fish in open water'],
  size: '12–24 inches typical',
  funFact:
    'In the Great Lakes, sea lamprey attach to fish with a suction-cup mouth and feed on blood and body fluids. Control programs focus on streams where larvae develop.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Great Lakes Fishery Commission: Sea lamprey', url: 'https://www.glfc.org/sea-lamprey.php' },
    { label: 'USFWS species profile: Sea lamprey', url: 'https://www.fws.gov/species/sea-lamprey-petromyzon-marinus' },
    { label: 'Michigan Invasive Species: Sea lamprey', url: 'https://www.michigan.gov/invasives/id-report/fish/sea-lamprey' },
  ],
  colors: { primary: '#5A5848', secondary: '#706858', belly: '#A8A090', fin: '#4A4838' },
};

export const featureOptions: FeatureOption = {
  correct: 'Circular tooth-filled sucker mouth with 7 gill openings (jawless parasite)',
  wrong: ['Fused pelvic fins forming suction disc', 'Diamond-shaped ganoid scales', 'Four barbels and bony plates'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Sea lamprey have jaws like a normal fish.', answer: false, fishId: 'sea_lamprey' },
  {
    statement: 'Sea lamprey have seven gill openings on each side of the body.',
    answer: true,
    fishId: 'sea_lamprey',
  },
  {
    statement: 'Sea lamprey larvae develop in streams before moving into the lakes.',
    answer: true,
    fishId: 'sea_lamprey',
  },
  {
    statement: 'Sea lamprey feed mainly by filtering plankton as adults.',
    answer: false,
    fishId: 'sea_lamprey',
  },
];

export default sea_lamprey;

import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const coho_salmon: Fish = {
  id: 'coho_salmon',
  name: 'Coho Salmon',
  scientific: 'Oncorhynchus kisutch',
  image: ['/img/fish/coho_salmon/1.jpg', '/img/fish/coho_salmon/2.jpg'],
  features: [
    'Silver body with darker back (ocean/lake phase)',
    'Black spots on the back and typically the UPPER lobe of the tail',
    'Light/white gum line on the lower jaw (useful vs. chinook)',
    'Adipose fin present',
    'Males often develop a hooked jaw (kype) when spawning',
  ],
  keyFeature: 'Light gum line and tail spotting mainly on the upper lobe (vs. chinook)',
  habitat: ['Ohio creeks and small rivers', 'Ohio inland lakes and reservoirs', 'Lake Erie and tributaries (Ohio)', 'Great Lakes (introduced/stocked populations)', 'open lake waters'],
  size: '20–28 inches typical',
  funFact:
    'Coho are often identified by checking the gum line and tail spots (compared with chinook). They are native to the Pacific, but have been introduced to the Great Lakes.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'NOAA Fisheries: Coho salmon (species profile)', url: 'https://www.fisheries.noaa.gov/species/coho-salmon' },
    { label: 'USGS NAS factsheet: Coho salmon', url: 'https://nas.er.usgs.gov/queries/FactSheet.aspx?speciesID=908' },
    { label: 'ODFW: Is it a coho or chinook? (ID tips)', url: 'https://myodfw.com/articles/it-coho-or-chinook' },
  ],
  colors: { primary: '#5A6878', secondary: '#6A7888', belly: '#C8D0D8', fin: '#4A5868' },
};

export const featureOptions: FeatureOption = {
  correct: 'Light gum line and tail spotting mainly on the upper lobe (vs. chinook)',
  wrong: ['Spots on both tail lobes with black gums', 'No spots at all', 'Dark body with pale spots and forked tail'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Coho salmon have black gums like chinook salmon.', answer: false, fishId: 'coho_salmon' },
  {
    statement: 'Coho salmon have an adipose fin.',
    answer: true,
    fishId: 'coho_salmon',
  },
  {
    statement: 'Coho salmon are native to the Great Lakes.',
    answer: false,
    fishId: 'coho_salmon',
  },
  {
    statement: 'Coho salmon often enter tributaries for spawning runs in the fall.',
    answer: true,
    fishId: 'coho_salmon',
  },
];

export default coho_salmon;

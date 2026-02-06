import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const brown_trout: Fish = {
  id: 'brown_trout',
  name: 'Brown Trout',
  scientific: 'Salmo trutta',
  image: [
    '/img/fish/brown_trout/1.jpg',
    '/img/fish/brown_trout/2.jpg'
  ],
  features: [
    'Golden-brown to olive body',
    'Black spots and red/orange spots with pale halos',
    'More square tail than many salmonids (often lightly spotted)',
    'Adipose fin present',
    'No strong pink stripe like rainbow/steelhead'
  ],
  keyFeature: 'Golden-brown body with red/orange spots (often with pale halos)',
  habitat: ['Ohio inland lakes and reservoirs', 'Lake Erie and tributaries (Ohio)', 'Great Lakes (including Lake Erie)', 'cold tributaries', 'also stocked in some Ohio waters'],
  size: '12-24 inches typical (can be larger in Lake Erie)',
  funFact: 'Brown trout are originally from Europe and were introduced to North America in the 1800s. They can become very wary and are often most active at dawn/dusk.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Illinois DNR: Brown Trout', url: 'https://dnr.illinois.gov/education/wildaboutpages/wildaboutfishes/wafsalmon/wafbrowntrout.html' },
    { label: 'Wikipedia: Brown trout', url: 'https://en.wikipedia.org/wiki/Brown_trout' },
    { label: 'USGS NAS factsheet', url: 'https://nas.er.usgs.gov/queries/FactSheet.aspx?speciesID=931' }
  ],
  colors: { primary: '#6B5A2A', secondary: '#8B7538', belly: '#D8C890', fin: '#4A3A18' },
};

export const featureOptions: FeatureOption = {
  correct: 'Golden-brown body with red/orange spots (often with pale halos)',
  wrong: ['Prominent pink-red stripe with spots everywhere', 'Forked tail with whisker barbels', 'Dark ear flap with orange breast'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Golden-brown body with red/orange spots (often with pale halos).', answer: true, fishId: 'brown_trout' },
  { statement: 'This fish can be identified by: Golden-brown to olive body.', answer: true, fishId: 'brown_trout' },
  { statement: 'This fish can be identified by: Black spots and red/orange spots with pale halos.', answer: true, fishId: 'brown_trout' },
  { statement: 'You might find this fish in great lakes (including lake erie).', answer: true, fishId: 'brown_trout' }
];

export default brown_trout;

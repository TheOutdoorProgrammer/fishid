import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const brown_trout: Fish = {
  id: 'brown_trout',
  name: 'Brown Trout',
  scientific: 'Salmo trutta',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Brown_Trout_%28Salmo_trutta%29_%2853678765394%29.jpg/500px-Brown_Trout_%28Salmo_trutta%29_%2853678765394%29.jpg',
  quizImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Brown_Trout_%28Salmo_trutta%29.jpg/500px-Brown_Trout_%28Salmo_trutta%29.jpg',
  features: [
    'Golden-brown to olive body',
    'Black spots and red/orange spots with pale halos',
    'More square tail than many salmonids (often lightly spotted)',
    'Adipose fin present',
    'No strong pink stripe like rainbow/steelhead'
  ],
  keyFeature: 'Golden-brown body with red/orange spots (often with pale halos)',
  habitat: 'Lake Erie and cold tributaries; also stocked in some Ohio waters',
  size: '12-24 inches typical (can be larger in Lake Erie)',
  funFact: 'Brown trout are originally from Europe and were introduced to North America in the 1800s. They can become very wary and are often most active at dawn/dusk.',
  refs: [
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
  { statement: 'Brown trout often have red or orange spots, sometimes with pale halos.', answer: true, fishId: 'brown_trout' }
];

export default brown_trout;

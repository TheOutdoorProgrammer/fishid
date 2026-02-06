import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const redear_sunfish: Fish = {
  id: 'redear_sunfish',
  name: 'Redear Sunfish',
  scientific: 'Lepomis microlophus',
  image: [
    '/img/fish/redear_sunfish/1.jpg',
    '/img/fish/redear_sunfish/2.jpg'
  ],
  features: [
    'Deep body, similar shape to bluegill',
    'Short ear flap with bright red or orange border',
    'Olive-green to golden sides',
    'No blue streaks on face (unlike pumpkinseed)',
    'Light-colored belly',
    'Feeds on snails (hence nickname)'
  ],
  keyFeature: 'Sunfish with red/orange margin on short ear flap - the shellcracker',
  habitat: 'Ponds and lakes with sandy or muddy bottoms',
  size: '7-10 inches typical, can reach 12+',
  funFact: 'Redear sunfish are nicknamed "shellcrackers" because they use special teeth in their throat to crush snail shells. They grow larger than most other sunfish.',
  refs: [
    { label: 'Virginia DWR species profile', url: 'https://dwr.virginia.gov/wildlife/information/redear-sunfish/' },
    { label: 'North Carolina Wildlife Resources Commission', url: 'https://www.ncwildlife.gov/species/redear-sunfish' },
    { label: 'USGS NAS factsheet', url: 'https://nas.er.usgs.gov/queries/factsheet.aspx?SpeciesID=390' },
    { label: 'Maryland DNR fish facts', url: 'https://dnr.maryland.gov/fisheries/pages/fish-facts.aspx?fishname=Redear+Sunfish' }
  ],
  colors: { primary: '#5A7A40', secondary: '#708E50', belly: '#D8D8A0', fin: '#4A6830' },
};

export const featureOptions: FeatureOption = {
  correct: 'Sunfish with red/orange margin on short ear flap',
  wrong: ['All-dark ear flap with no colored edge', 'Very long flexible ear flap', 'Wavy blue and orange lines on cheeks'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Redear sunfish are nicknamed "shellcrackers" because they eat snails.', answer: true, fishId: 'redear_sunfish' }
];

export default redear_sunfish;

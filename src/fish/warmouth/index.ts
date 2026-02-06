import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const warmouth: Fish = {
  id: 'warmouth',
  name: 'Warmouth',
  scientific: 'Lepomis gulosus',
  image: [
    '/img/fish/warmouth/1.jpg',
    '/img/fish/warmouth/2.jpg'
  ],
  features: [
    'Thick, robust body',
    'Large mouth for a sunfish (extends to middle of eye)',
    'Dark red-brown streaks radiating from red eye',
    'Mottled brown-olive body',
    'Short ear flap with red-orange spot',
    'Teeth on tongue'
  ],
  keyFeature: 'Thick-bodied sunfish with large mouth and dark streaks from red eye',
  habitat: ['Swamps, backwaters, heavily vegetated ponds with muddy bottoms'],
  size: '5-8 inches typical',
  funFact: 'Warmouth are often confused with rock bass but have a larger mouth and distinctive facial markings. They prefer muddier, more stagnant water than most sunfish.',
  refs: [
    { label: 'North Carolina Wildlife Resources Commission', url: 'https://www.ncwildlife.gov/species/warmouth' },
    { label: 'Kentucky Fish & Wildlife', url: 'https://fw.ky.gov/Fish/pages/warmouth.aspx' },
    { label: 'Texas Parks & Wildlife species account', url: 'https://tpwd.texas.gov/huntwild/wild/species/war/' },
    { label: 'Mississippi MDWFP Fish ID Guide', url: 'https://www.mdwfp.com/fishing-boating/fish-id-guide/warmouth' }
  ],
  colors: { primary: '#5A4A28', secondary: '#706038', belly: '#C8B878', fin: '#4A3A20' },
};

export const featureOptions: FeatureOption = {
  correct: 'Thick-bodied sunfish with large mouth and dark streaks from red eye',
  wrong: ['Bright red eye with six anal spines', 'Wavy blue-orange lines on cheeks', 'Deep compressed body with small mouth'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Warmouth have teeth on their tongue.', answer: true, fishId: 'warmouth' }
];

export default warmouth;

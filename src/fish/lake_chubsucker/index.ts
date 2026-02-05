import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const lake_chubsucker: Fish = {
  id: 'lake_chubsucker',
  name: 'Lake Chubsucker',
  scientific: 'Erimyzon sucetta',
  image: [
    '/img/fish/lake_chubsucker/1.jpg'
  ],
  features: [
    'Deeper body than creek chubsucker',
    'Olive-green to bronze body',
    'No lateral line',
    'Rounded tail (not forked)',
    'Young have bold dark lateral stripe',
    'Found in lake habitat vs creek chubsucker in streams'
  ],
  keyFeature: 'Deep-bodied round-tailed sucker without lateral line, prefers lakes',
  habitat: 'Glacial lakes, ponds, and backwaters with vegetation',
  size: '8-12 inches typical',
  funFact: 'Lake chubsuckers are becoming increasingly rare in Ohio and are considered a species of concern. They prefer clear, vegetated glacial lakes.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Erimyzon%20sucetta' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Erimyzon+sucetta' }
  ],
  colors: { primary: '#5A6030', secondary: '#707840', belly: '#C0C090', fin: '#4A5028' },
};

export const featureOptions: FeatureOption = {
  correct: 'Deep-bodied round-tailed sucker without lateral line, prefers lakes',
  wrong: ['Slender body in fast-flowing streams', 'Forked tail with lateral line present', 'Boxy head with dark saddle marks'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Lake chubsucker have a deeply forked tail.', answer: false, fishId: 'lake_chubsucker' }
];

export default lake_chubsucker;

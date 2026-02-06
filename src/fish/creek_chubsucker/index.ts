import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const creek_chubsucker: Fish = {
  id: 'creek_chubsucker',
  name: 'Creek Chubsucker',
  scientific: 'Erimyzon oblongus',
  image: [
    '/img/fish/creek_chubsucker/1.jpg',
    '/img/fish/creek_chubsucker/2.jpg'
  ],
  features: [
    'Small, chubby sucker with no lateral line',
    'Olive-green to brown body',
    'Young fish have a bold dark lateral stripe',
    'Rounded tail (not forked, unlike most suckers)',
    'Subterminal mouth',
    'Dorsal fin with rounded edge'
  ],
  keyFeature: 'Small round-tailed sucker with no lateral line; young have dark stripe',
  habitat: ['Small streams and headwaters with sand or gravel bottoms'],
  size: '6-10 inches typical',
  funFact: 'Creek chubsuckers are unusual among suckers because they have a rounded tail instead of a forked one. Young fish look completely different from adults with their bold stripe.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Erimyzon%20oblongus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Erimyzon+oblongus' }
  ],
  colors: { primary: '#5A5830', secondary: '#707040', belly: '#C0B890', fin: '#4A4828' },
};

export const featureOptions: FeatureOption = {
  correct: 'Small round-tailed sucker with no lateral line',
  wrong: ['Forked tail with large scales', 'Boxy head with saddle marks', 'Deep silver body with long dorsal ray'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Creek chubsucker have a deeply forked tail.', answer: false, fishId: 'creek_chubsucker' }
];

export default creek_chubsucker;

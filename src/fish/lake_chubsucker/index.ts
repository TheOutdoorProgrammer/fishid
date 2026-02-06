import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const lake_chubsucker: Fish = {
  id: 'lake_chubsucker',
  name: 'Lake Chubsucker',
  scientific: 'Erimyzon sucetta',
  image: [
    '/img/fish/lake_chubsucker/1.jpg',
    '/img/fish/lake_chubsucker/2.jpg'
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
  habitat: ['weedy bays and backwaters (Ohio lakes)', 'Ohio farm ponds and small lakes', 'Ohio inland lakes and reservoirs', 'Glacial lakes', 'ponds'],
  size: '8-12 inches typical',
  funFact: 'Lake chubsuckers are becoming increasingly rare in Ohio and are considered a species of concern. They prefer clear, vegetated glacial lakes.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
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
  { statement: 'A key ID clue for this fish is: Deep-bodied round-tailed sucker without lateral line, prefers lakes.', answer: true, fishId: 'lake_chubsucker' },
  { statement: 'This fish can be identified by: Deeper body than creek chubsucker.', answer: true, fishId: 'lake_chubsucker' },
  { statement: 'This fish can be identified by: Olive-green to bronze body.', answer: true, fishId: 'lake_chubsucker' },
  { statement: 'You might find this fish in glacial lakes.', answer: true, fishId: 'lake_chubsucker' }
];

export default lake_chubsucker;

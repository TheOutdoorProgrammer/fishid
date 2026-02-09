import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const johnny_darter: Fish = {
  id: 'johnny_darter',
  name: 'Johnny Darter',
  scientific: 'Etheostoma nigrum',
  image: [
    '/img/fish/johnny_darter/1.jpg',
    '/img/fish/johnny_darter/2.jpg'
  ],
  features: [
    'Small, pale body with dark W- and X-shaped markings',
    'Translucent to straw-colored base',
    'Dark markings form distinctive W and X patterns on sides',
    'Upturned mouth',
    'Two dorsal fins',
    'Very common - found in almost every Ohio stream'
  ],
  keyFeature: 'Pale darter with distinctive W- and X-shaped dark markings on sides',
  habitat: ['creeks', 'pools', 'rivers'],
  size: '2-3 inches typical',
  funFact: 'Johnny darters are the most common and widespread darter in Ohio. Males turn jet black during breeding season and guard eggs laid upside-down on rock surfaces.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Etheostoma%20nigrum' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Etheostoma+nigrum' }
  ],
  colors: { primary: '#887850', secondary: '#A89870', belly: '#C8C0A0', fin: '#786840' },
};

export const featureOptions: FeatureOption = {
  correct: 'Pale darter with distinctive W- and X-shaped dark markings',
  wrong: ['Alternating blue and orange bars', 'Fan-shaped tail with fleshy dorsal knobs', 'Bold evenly spaced vertical bars'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Pale darter with distinctive W- and X-shaped dark markings on sides.', answer: true, fishId: 'johnny_darter' },
  { statement: 'This fish can be identified by: Small, pale body with dark W- and X-shaped markings.', answer: true, fishId: 'johnny_darter' },
  { statement: 'This fish can be identified by: Translucent to straw-colored base.', answer: true, fishId: 'johnny_darter' },
  { statement: 'You might find this fish in sandy.', answer: true, fishId: 'johnny_darter' }
];

export default johnny_darter;

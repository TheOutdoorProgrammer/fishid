import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const brook_trout: Fish = {
  id: 'brook_trout',
  name: 'Brook Trout',
  scientific: 'Salvelinus fontinalis',
  image: [],
  features: [
    'Dark green body with distinctive worm-like markings (vermiculations) on back',
    'Red spots with blue halos on sides',
    'Leading edges of lower fins are white, then black',
    'Square or slightly forked tail',
    'Orange-red belly (especially in spawning males)',
    'Adipose fin present'
  ],
  keyFeature: 'Worm-like markings on back, red spots with blue halos, white-edged lower fins',
  habitat: 'Cold, clean headwater streams; very sensitive to water quality',
  size: '6-10 inches typical in Ohio streams',
  funFact: 'Brook trout are actually a char, not a true trout. They are Ohio\'s only native salmonid and require the coldest, cleanest water of any Ohio fish.',
  refs: [
    { label: 'Virginia DWR species profile', url: 'https://dwr.virginia.gov/wildlife/information/brook-trout/' },
    { label: 'USFWS species profile', url: 'https://www.fws.gov/species/brook-trout-salvelinus-fontinalis' },
    { label: 'Chesapeake Bay Program field guide', url: 'https://www.chesapeakebay.net/discover/field-guide/entry/brook-trout' },
    { label: 'National Wildlife Federation', url: 'https://www.nwf.org/Educational-Resources/Wildlife-Guide/Fish/Brook-Trout' }
  ],
  colors: { primary: '#2A4A30', secondary: '#3A6040', belly: '#D87030', fin: '#1A3A20' },
};

export const featureOptions: FeatureOption = {
  correct: 'Worm-like back markings, red spots with blue halos, white-edged fins',
  wrong: ['Red/orange spots with pale halos only', 'Chrome silver sides from lake', 'Golden-brown body with no back markings'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Brook trout are actually a char, not a true trout.', answer: true, fishId: 'brook_trout' }
];

export default brook_trout;

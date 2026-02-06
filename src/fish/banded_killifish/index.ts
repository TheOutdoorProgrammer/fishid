import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const banded_killifish: Fish = {
  id: 'banded_killifish',
  name: 'Banded Killifish',
  scientific: 'Fundulus diaphanus',
  image: [
    '/img/fish/banded_killifish/1.jpg',
    '/img/fish/banded_killifish/2.jpg'
  ],
  features: [
    'Small surface-dwelling fish',
    'Multiple thin dark vertical bars on sides',
    'Olive-brown above with silver sides',
    'Flat head with upturned mouth',
    'Rounded tail fin',
    'Body more compressed than topminnow'
  ],
  keyFeature: 'Small surface fish with many thin vertical bars and flat head',
  habitat: ['Sandy lake shores', 'quiet streams', 'found near surface'],
  size: '2-4 inches typical',
  funFact: 'Banded killifish are common along the sandy shores of Lake Erie. Despite their name, they are peaceful fish - "killifish" comes from the Dutch word "kilde" meaning small creek.',
  refs: [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Fundulus%20diaphanus' },
    { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Fundulus+diaphanus' }
  ],
  colors: { primary: '#708060', secondary: '#889878', belly: '#C8D0B8', fin: '#607050' },
};

export const featureOptions: FeatureOption = {
  correct: 'Small surface fish with many thin vertical bars and flat head',
  wrong: ['Bold single dark lateral stripe', 'Rows of reddish-brown spots', 'Isolated spines before dorsal fin'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Banded killifish got their name because they kill other fish.', answer: false, fishId: 'banded_killifish' }
];

export default banded_killifish;

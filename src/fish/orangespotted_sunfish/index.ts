import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const orangespotted_sunfish: Fish = {
  id: 'orangespotted_sunfish',
  name: 'Orangespotted Sunfish',
  scientific: 'Lepomis humilis',
  image: [
    '/img/fish/orangespotted_sunfish/1.png',
    '/img/fish/orangespotted_sunfish/2.jpg'
  ],
  features: [
    'Small, compressed body',
    'Olive with orange or reddish spots on sides',
    'Long, flexible dark ear flap',
    'Blue-green wavy lines on cheeks',
    'Males brightly colored with orange spots',
    'Very small mouth'
  ],
  keyFeature: 'Small sunfish covered in orange spots with long dark ear flap',
  habitat: ['Slow streams', 'backwaters', 'ditches', 'tolerates turbid water'],
  size: '3-5 inches typical',
  funFact: 'Orangespotted sunfish are one of the smallest sunfish in Ohio. They are often overlooked but are surprisingly beautiful, especially breeding males.',
  refs: [
    { label: 'ODNR Sport Fish of Ohio Field Guide (PDF)', url: 'https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf' },
    { label: 'Illinois DNR Wild About Fishes', url: 'https://dnr.illinois.gov/education/wildaboutpages/wildaboutfishes/wafsunfish/waforangespottedsunfish.html' },
    { label: 'Outdoor Alabama species page', url: 'https://www.outdooralabama.com/bream/orangespotted-sunfish' },
    { label: 'USFWS species media', url: 'https://www.fws.gov/media/orange-spotted-sunfish-0' },
    { label: 'USGS NAS factsheet', url: 'https://nas.er.usgs.gov/queries/factsheet.aspx?SpeciesID=383' }
  ],
  colors: { primary: '#5A7050', secondary: '#708860', belly: '#D0C080', fin: '#4A5A40' },
};

export const featureOptions: FeatureOption = {
  correct: 'Small sunfish covered in orange spots with long dark ear flap',
  wrong: ['Large sunfish with red ear spot', 'Stocky body with blue-green face streaks', 'Deep body with dark vertical bars'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'A key ID clue for this fish is: Small sunfish covered in orange spots with long dark ear flap.', answer: true, fishId: 'orangespotted_sunfish' },
  { statement: 'This fish can be identified by: Small, compressed body.', answer: true, fishId: 'orangespotted_sunfish' },
  { statement: 'This fish can be identified by: Olive with orange or reddish spots on sides.', answer: true, fishId: 'orangespotted_sunfish' },
  { statement: 'You might find this fish in slow streams.', answer: true, fishId: 'orangespotted_sunfish' }
];

export default orangespotted_sunfish;

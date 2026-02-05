import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const orangespotted_sunfish: Fish = {
  id: 'orangespotted_sunfish',
  name: 'Orangespotted Sunfish',
  scientific: 'Lepomis humilis',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orangespottednctc.png/500px-Orangespottednctc.png',
  quizImage: '',
  features: [
    'Small, compressed body',
    'Olive with orange or reddish spots on sides',
    'Long, flexible dark ear flap',
    'Blue-green wavy lines on cheeks',
    'Males brightly colored with orange spots',
    'Very small mouth'
  ],
  keyFeature: 'Small sunfish covered in orange spots with long dark ear flap',
  habitat: 'Slow streams, backwaters, ditches; tolerates turbid water',
  size: '3-5 inches typical',
  funFact: 'Orangespotted sunfish are one of the smallest sunfish in Ohio. They are often overlooked but are surprisingly beautiful, especially breeding males.',
  refs: [
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
  { statement: 'Orangespotted sunfish are one of the largest sunfish in Ohio.', answer: false, fishId: 'orangespotted_sunfish' }
];

export default orangespotted_sunfish;

import type { Fish, FeatureOption, TrueFalseQuestion } from '../types';

export const hybrid_striped_bass: Fish = {
  id: 'hybrid_striped_bass',
  name: 'Hybrid Striped Bass',
  scientific: 'Morone chrysops × M. saxatilis',
  image: [
    '/img/fish/hybrid_striped_bass/1.jpg',
    '/img/fish/hybrid_striped_bass/2.jpg'
  ],
  features: [
    'Silver body with broken or offset horizontal stripes',
    'Deep body, deeper than white bass',
    'Two tooth patches on tongue',
    'Stripes are often broken or misaligned',
    'Larger and deeper-bodied than white bass',
    'Separated dorsal fins'
  ],
  keyFeature: 'Like white bass but larger with broken/offset horizontal stripes',
  habitat: ['Large reservoirs where stocked; open water'],
  size: '15-20 inches typical, can exceed 10 pounds',
  funFact: 'Hybrid striped bass (wipers) are a cross between white bass and saltwater striped bass. They fight incredibly hard and are stocked in many Ohio reservoirs.',
  refs: [
    { label: 'Virginia DWR species profile', url: 'https://dwr.virginia.gov/wildlife/information/hybrid-striped-bass/' },
    { label: 'Texas Parks & Wildlife (PDF)', url: 'https://tpwd.texas.gov/publications/pwdpubs/media/pwd_lf_t3200_086.pdf' },
    { label: 'Iowa DNR species page', url: 'https://www.iowadnr.gov/things-do/fishing/iowa-fish-species/hybrid-striped-bass' },
    { label: 'New Jersey DEP overview', url: 'https://dep.nj.gov/njfw/fishing/freshwater/striped-bass-hybrid/' }
  ],
  colors: { primary: '#8090A0', secondary: '#98A8B8', belly: '#D8E0E8', fin: '#607080' },
};

export const featureOptions: FeatureOption = {
  correct: 'Like white bass but larger with broken/offset horizontal stripes',
  wrong: ['Continuous thin stripes on silver body', 'No stripes at all', 'Dark vertical bars on silver body'],
};

export const trueFalseQuestions: TrueFalseQuestion[] = [
  { statement: 'Hybrid striped bass have continuous unbroken horizontal stripes.', answer: false, fishId: 'hybrid_striped_bass' }
];

export default hybrid_striped_bass;

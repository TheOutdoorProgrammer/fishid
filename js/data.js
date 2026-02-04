// ===== FISH SPECIES DATA =====
const FISH = {
  walleye: {
    id: 'walleye', name: 'Walleye', scientific: 'Sander vitreus',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Walleye_%28Sander_vitreus%29_%281%29.jpg/500px-Walleye_%28Sander_vitreus%29_%281%29.jpg',
    features: [
      'Large, glassy, reflective eyes (adapted for low light)',
      'Olive-gold body with dark saddle markings',
      'White tip on lower lobe of tail fin',
      'Two separate dorsal fins (spiny + soft)',
      'Sharp canine teeth'
    ],
    keyFeature: 'Large glassy eyes and white-tipped lower tail',
    habitat: 'Lake Erie, large reservoirs, rivers with rocky bottoms',
    size: '15-25 inches typical, up to 30+',
    funFact: 'Walleye are named for their pearlescent eyes, which reflect light like a cat\'s eyes. They are Ohio\'s most prized game fish and the official state fish of Ohio... wait, that\'s actually not true - but they should be!',
    colors: { primary: '#7B6B3A', secondary: '#9B8B4A', belly: '#E8DEB8', fin: '#6B5B30' }
  },
  yellow_perch: {
    id: 'yellow_perch', name: 'Yellow Perch', scientific: 'Perca flavescens',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Yellow_Perch_%28Perca_flavescens%29_%28cropped%29.jpg/500px-Yellow_Perch_%28Perca_flavescens%29_%28cropped%29.jpg',
    features: [
      'Bright golden-yellow body',
      '6-8 dark vertical bars on sides',
      'Orange-tinted lower fins',
      'Two separate dorsal fins',
      'Small mouth, no canine teeth'
    ],
    keyFeature: 'Golden-yellow body with dark vertical bars',
    habitat: 'Lake Erie, inland lakes, prefers cool clear water',
    size: '7-12 inches typical',
    funFact: 'Lake Erie is known as the "Walleye Capital of the World" but yellow perch are equally beloved. A Lake Erie perch fry is an Ohio tradition!',
    colors: { primary: '#D4A820', secondary: '#E8C840', belly: '#F5E8A0', fin: '#D07020' }
  },
  smallmouth_bass: {
    id: 'smallmouth_bass', name: 'Smallmouth Bass', scientific: 'Micropterus dolomieu',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Smallmouth_Bass_%2849561724026%29.jpg/500px-Smallmouth_Bass_%2849561724026%29.jpg',
    features: [
      'Bronze to brown body color',
      'Vertical dark bars (may fade)',
      'Red/orange eye',
      'Jaw does NOT extend past the eye',
      'Connected dorsal fin with shallow notch'
    ],
    keyFeature: 'Bronze color, jaw ends at the eye, red eye',
    habitat: 'Rocky lakes, clear streams and rivers, Lake Erie',
    size: '12-18 inches typical',
    funFact: 'Pound for pound, smallmouth bass are considered the hardest-fighting freshwater fish. They\'re nicknamed "bronzebacks" for their color.',
    colors: { primary: '#8B6914', secondary: '#A07828', belly: '#D4C090', fin: '#6B5510' }
  },
  largemouth_bass: {
    id: 'largemouth_bass', name: 'Largemouth Bass', scientific: 'Micropterus salmoides',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Largemouth_Bass_%28Micropterus_salmoides%29_June_2023_%28cropped%29.jpg/500px-Largemouth_Bass_%28Micropterus_salmoides%29_June_2023_%28cropped%29.jpg',
    features: [
      'Green to olive body with lighter belly',
      'Dark lateral stripe (horizontal band)',
      'Jaw extends PAST the eye',
      'Deeply notched dorsal fin (almost separated)',
      'Larger mouth compared to smallmouth'
    ],
    keyFeature: 'Large mouth extending past eye, dark horizontal stripe',
    habitat: 'Warm, weedy lakes and ponds, slow rivers',
    size: '12-20 inches typical',
    funFact: 'Largemouth bass are the most popular game fish in America. They can eat prey up to half their own body length!',
    colors: { primary: '#3D6B30', secondary: '#5A8548', belly: '#C8D8A8', fin: '#3A5828' }
  },
  channel_catfish: {
    id: 'channel_catfish', name: 'Channel Catfish', scientific: 'Ictalurus punctatus',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Channel_Catfish_%28Ictalurus_punctatus%29_white_background.jpg/500px-Channel_Catfish_%28Ictalurus_punctatus%29_white_background.jpg',
    features: [
      'Blue-gray to olive body',
      'Scattered dark spots (especially when young)',
      '8 barbels (whiskers) around mouth',
      'Deeply forked tail',
      'Adipose fin (small fin between dorsal and tail)',
      'Spine in dorsal and pectoral fins'
    ],
    keyFeature: 'Forked tail with barbels and dark spots',
    habitat: 'Rivers, lakes, reservoirs; prefers deeper channels',
    size: '15-24 inches typical, can exceed 30',
    funFact: 'Channel catfish have about 100,000 taste buds covering their entire body! They can literally taste with their skin.',
    colors: { primary: '#5A6B78', secondary: '#7A8B98', belly: '#C8D0D8', fin: '#4A5A68' }
  },
  bluegill: {
    id: 'bluegill', name: 'Bluegill', scientific: 'Lepomis macrochirus',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Bluegill_%28cropped%29.jpg/500px-Bluegill_%28cropped%29.jpg',
    features: [
      'Deep, compressed (tall) body shape',
      'Dark blue-black ear flap (opercular flap)',
      'Orange-yellow breast/belly',
      'Olive to dark blue-green sides',
      'Dark vertical bars (faint)',
      'Small mouth'
    ],
    keyFeature: 'Deep body, dark ear flap, orange breast',
    habitat: 'Ponds, lakes, slow streams; near vegetation',
    size: '6-10 inches typical',
    funFact: 'Bluegill are one of the best fish for beginners to catch. Male bluegill guard their nests aggressively and will bite almost anything!',
    colors: { primary: '#2E5B4E', secondary: '#3A7060', belly: '#E8A830', fin: '#2A4A3E' }
  },
  black_crappie: {
    id: 'black_crappie', name: 'Black Crappie', scientific: 'Pomoxis nigromaculatus',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Black_crappie.jpg/500px-Black_crappie.jpg',
    features: [
      'Deep, compressed body (similar to bluegill)',
      'Silvery-green with irregular dark speckles/spots',
      '7-8 dorsal spines',
      'Spots are scattered randomly (not in bars)',
      'Large mouth for a panfish'
    ],
    keyFeature: 'Silvery body with random dark spots, 7-8 dorsal spines',
    habitat: 'Clear lakes, reservoirs with brush piles and structure',
    size: '8-12 inches typical',
    funFact: 'Black crappie are sometimes called "papermouths" because their mouths tear easily. They\'re schooling fish - if you catch one, there are usually more!',
    colors: { primary: '#6B7B68', secondary: '#8B9B88', belly: '#D0D8C8', fin: '#5A6A58' }
  },
  white_crappie: {
    id: 'white_crappie', name: 'White Crappie', scientific: 'Pomoxis annularis',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/White_Crappie.jpg/500px-White_Crappie.jpg',
    features: [
      'Deep, compressed body',
      'Silvery-green with dark VERTICAL bars',
      '5-6 dorsal spines (fewer than black crappie)',
      'Bars are arranged in distinct vertical pattern',
      'Slightly more elongated than black crappie'
    ],
    keyFeature: 'Silvery body with vertical dark bars, 5-6 dorsal spines',
    habitat: 'Murky lakes, reservoirs, rivers; more turbidity-tolerant',
    size: '8-12 inches typical',
    funFact: 'The key to telling crappie apart: Black crappie have random spots, White crappie have organized vertical bars. Count the dorsal spines: 5-6 = White, 7-8 = Black!',
    colors: { primary: '#7B8878', secondary: '#98A890', belly: '#D8E0D0', fin: '#687868' }
  },
  northern_pike: {
    id: 'northern_pike', name: 'Northern Pike', scientific: 'Esox lucius',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Esox_lucius_ZOO_1.jpg/500px-Esox_lucius_ZOO_1.jpg',
    features: [
      'Long, torpedo-shaped body',
      'Dark green with light bean-shaped spots',
      'Duck-bill shaped snout',
      'Large sharp teeth',
      'Dorsal fin set far back near tail',
      '5 sensory pores on each side of lower jaw'
    ],
    keyFeature: 'Elongated body, duck-bill snout, light spots on dark background',
    habitat: 'Weedy lakes, rivers, marshes; Lake Erie tributaries',
    size: '20-30 inches typical, can exceed 40',
    funFact: 'Northern pike are ambush predators that can strike at speeds up to 10 mph. They\'ve been known to eat ducklings, frogs, and even small muskrats!',
    colors: { primary: '#3A5C2E', secondary: '#4A7038', belly: '#C8D8B0', fin: '#304A24' }
  },
  muskellunge: {
    id: 'muskellunge', name: 'Muskellunge', scientific: 'Esox masquinongy',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Esox_masquinongyeditcrop.jpg/500px-Esox_masquinongyeditcrop.jpg',
    features: [
      'Very long, torpedo-shaped body (larger than pike)',
      'Light body with dark bars or spots',
      'Pointed snout (more pointed than pike)',
      'No scales on lower half of cheek',
      '6-9 sensory pores on each side of lower jaw',
      'Tail fin more pointed than pike'
    ],
    keyFeature: 'Dark markings on light body (opposite of pike), pointed tail',
    habitat: 'Large lakes, rivers with clear water; Lake Erie, inland reservoirs',
    size: '30-48 inches typical, Ohio record over 50 inches',
    funFact: 'Muskies are called "the fish of 10,000 casts" because they\'re notoriously difficult to catch. They\'re the largest member of the pike family.',
    colors: { primary: '#8B9B78', secondary: '#A0B090', belly: '#D8E0C8', fin: '#687858' }
  },
  steelhead: {
    id: 'steelhead', name: 'Steelhead Trout', scientific: 'Oncorhynchus mykiss',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Man_holding_a_steelhead_%28Oncorhynchus_mykiss%29_cropped.jpg/500px-Man_holding_a_steelhead_%28Oncorhynchus_mykiss%29_cropped.jpg',
    features: [
      'Streamlined, torpedo-shaped body',
      'Chrome/silver sides (lake-run phase)',
      'Pink-red lateral stripe (spawning)',
      'Black spots on back and tail',
      'Square or slightly forked tail',
      'Adipose fin present'
    ],
    keyFeature: 'Chrome silver body with pink stripe and black spots on tail',
    habitat: 'Lake Erie, spawning runs up tributaries (Rocky River, Chagrin River, etc.)',
    size: '20-30 inches typical',
    funFact: 'Steelhead are actually the same species as rainbow trout! The difference is that steelhead migrate to Lake Erie while rainbow trout stay in streams. They run up Ohio\'s tributaries every fall and spring.',
    colors: { primary: '#7A8B95', secondary: '#95A8B5', belly: '#D8E0E8', fin: '#607078' }
  },
  saugeye: {
    id: 'saugeye', name: 'Saugeye', scientific: 'Sander vitreus × S. canadensis',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Sander_canadensis_%C3%97_vitreus_-_Jensyn_Scott_-_376881973.jpeg/500px-Sander_canadensis_%C3%97_vitreus_-_Jensyn_Scott_-_376881973.jpeg',
    features: [
      'Olive-gold body (similar to walleye)',
      'Dark blotches/saddle marks on back',
      'Distinct dark rows of spots on dorsal fin',
      'May or may not have white tail tip',
      'Large glassy eyes like walleye',
      'Hybrid between walleye and sauger'
    ],
    keyFeature: 'Looks like walleye but with spotted dorsal fin and darker blotches',
    habitat: 'Ohio reservoirs and lakes (heavily stocked by ODNR)',
    size: '15-22 inches typical',
    funFact: 'Saugeye are a man-made hybrid created by crossing walleye with sauger. Ohio stocks millions of saugeye every year because they grow fast and tolerate warmer, murkier water than pure walleye.',
    colors: { primary: '#6B6030', secondary: '#8B7840', belly: '#D8D0A0', fin: '#5A5028' }
  },
  white_bass: {
    id: 'white_bass', name: 'White Bass', scientific: 'Morone chrysops',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/White_Bass_%28Morone_chrysops%29.jpg/500px-White_Bass_%28Morone_chrysops%29.jpg',
    features: [
      'Silver body with dark horizontal stripes',
      'Deep, laterally compressed body',
      'Two dorsal fins (separated)',
      'Single tooth patch on tongue',
      'Stripes are thin and run lengthwise'
    ],
    keyFeature: 'Silver body with thin dark horizontal stripes',
    habitat: 'Lake Erie, large reservoirs, rivers during spawning runs',
    size: '10-15 inches typical',
    funFact: 'White bass make massive spawning runs up rivers in spring. When you find a school, you can catch them almost every cast! They\'re related to striped bass (saltwater fish).',
    colors: { primary: '#8898A8', secondary: '#A0B0C0', belly: '#D8E0E8', fin: '#687888' }
  },
  common_carp: {
    id: 'common_carp', name: 'Common Carp', scientific: 'Cyprinus carpio',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Cyprinus_carpio_2008_G1_%28cropped%29.jpg/500px-Cyprinus_carpio_2008_G1_%28cropped%29.jpg',
    features: [
      'Large, thick body with big scales',
      'Golden-bronze to olive color',
      'Two small barbels on each side of mouth',
      'Large, rubbery lips',
      'Forked tail',
      'Long dorsal fin with 15-20+ rays'
    ],
    keyFeature: 'Large golden-bronze body with big scales and mouth barbels',
    habitat: 'Lakes, rivers, ponds; tolerates poor water quality',
    size: '18-30 inches typical, can exceed 40',
    funFact: 'Carp are actually an invasive species from Asia, introduced to the US in the 1800s. In Europe, they\'re a prized sport fish. A large carp in Lake Erie can weigh over 30 pounds!',
    colors: { primary: '#8B7530', secondary: '#A89040', belly: '#D8C878', fin: '#7A6428' }
  },
  flathead_catfish: {
    id: 'flathead_catfish', name: 'Flathead Catfish', scientific: 'Pylodictis olivaris',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Pylodictis_olivaris.jpg/500px-Pylodictis_olivaris.jpg',
    features: [
      'Flat, wide head (distinctive!)',
      'Mottled brown and yellow coloring',
      'Lower jaw protrudes past upper jaw',
      'Square or slightly rounded tail (NOT forked)',
      '8 barbels (whiskers)',
      'Small eyes set wide apart'
    ],
    keyFeature: 'Flat wide head, mottled brown/yellow, square tail (not forked)',
    habitat: 'Large rivers, reservoirs; prefers deep pools with cover',
    size: '20-36 inches typical, Ohio record 76+ pounds',
    funFact: 'Flathead catfish are solitary ambush predators that prefer to eat live fish. Unlike channel cats, they rarely eat stinky bait. They can live over 20 years!',
    colors: { primary: '#7A6830', secondary: '#9A8848', belly: '#C8B870', fin: '#685828' }
  },
  rainbow_trout: {
    id: 'rainbow_trout', name: 'Rainbow Trout', scientific: 'Oncorhynchus mykiss',
    features: [
      'Streamlined body',
      'Pink-red stripe along lateral line',
      'Green-blue back with black spots',
      'Spots on tail, back, and dorsal fin',
      'Adipose fin present',
      'White-tipped fins'
    ],
    keyFeature: 'Prominent pink-red lateral stripe with spots everywhere',
    habitat: 'Cold streams, stocked in Ohio lakes and ponds',
    size: '10-16 inches typical (stream fish)',
    funFact: 'Rainbow trout and steelhead are the same species! Stream-resident fish are called rainbow trout, while those that migrate to Lake Erie are called steelhead.',
    colors: { primary: '#4A7868', secondary: '#5A9080', belly: '#D8E0D8', fin: '#3A6050' }
  },
  brown_trout: {
    id: 'brown_trout', name: 'Brown Trout', scientific: 'Salmo trutta',
    features: [
      'Golden-brown to olive body',
      'Black spots and red/orange spots with pale halos',
      'More square tail than many salmonids (often lightly spotted)',
      'Adipose fin present',
      'No strong pink stripe like rainbow/steelhead'
    ],
    keyFeature: 'Golden-brown body with red/orange spots (often with pale halos)',
    habitat: 'Lake Erie and cold tributaries; also stocked in some Ohio waters',
    size: '12-24 inches typical (can be larger in Lake Erie)',
    funFact: 'Brown trout are originally from Europe and were introduced to North America in the 1800s. They can become very wary and are often most active at dawn/dusk.',
    colors: { primary: '#6B5A2A', secondary: '#8B7538', belly: '#D8C890', fin: '#4A3A18' }
  },
  freshwater_drum: {
    id: 'freshwater_drum', name: 'Freshwater Drum', scientific: 'Aplodinotus grunniens',
    features: [
      'Deep, humped body shape',
      'Silver-gray coloring',
      'Rounded (not forked) tail',
      'Long dorsal fin spanning most of back',
      'Downturned mouth',
      'Large otoliths (ear bones) called "lucky stones"'
    ],
    keyFeature: 'Deep silver body, humped back, rounded tail, downturned mouth',
    habitat: 'Lake Erie, large rivers, reservoirs; bottom dweller',
    size: '12-20 inches typical',
    funFact: 'Freshwater drum can make a drumming sound by vibrating muscles against their swim bladder - that\'s how they got their name! Their ear bones ("lucky stones") are smooth, round, and often collected.',
    colors: { primary: '#8090A0', secondary: '#98A8B8', belly: '#D0D8E0', fin: '#687888' }
  },
  sauger: {
    id: 'sauger', name: 'Sauger', scientific: 'Sander canadensis',
    features: [
      'Similar to walleye but smaller and darker',
      'Distinct dark spots/blotches on dorsal fin',
      'Dark saddle markings on back',
      'NO white tip on tail (key difference from walleye)',
      'Rougher scales than walleye',
      'More cylindrical body'
    ],
    keyFeature: 'Like a walleye but darker, spotted dorsal, NO white tail tip',
    habitat: 'Ohio River, large rivers; prefers deeper turbid water',
    size: '10-16 inches typical (smaller than walleye)',
    funFact: 'Sauger are the smaller cousin of the walleye. The easiest way to tell them apart: check the tail! Walleye have a white tip on the lower tail lobe; sauger don\'t. Sauger also have spots on their dorsal fin.',
    colors: { primary: '#5A5030', secondary: '#7A6840', belly: '#C8C090', fin: '#4A4028' }
  }
};

// ===== LESSON DEFINITIONS =====
const LESSONS = [
  {
    id: 1, title: 'Panfish', icon: '🐟', description: 'Bluegill, Crappie & Perch',
    fish: ['bluegill', 'black_crappie', 'white_crappie', 'yellow_perch'],
    unlocked: true
  },
  {
    id: 2, title: 'Bass', icon: '🐠', description: 'Largemouth, Smallmouth & White',
    fish: ['largemouth_bass', 'smallmouth_bass', 'white_bass'],
    unlocked: false
  },
  {
    id: 3, title: 'Catfish', icon: '🐡', description: 'Channel & Flathead',
    fish: ['channel_catfish', 'flathead_catfish'],
    unlocked: false
  },
  {
    id: 4, title: 'Pike Family', icon: '🦈', description: 'Northern Pike & Muskie',
    fish: ['northern_pike', 'muskellunge'],
    unlocked: false
  },
  {
    id: 5, title: 'Walleye Family', icon: '👁️', description: 'Walleye, Saugeye & Sauger',
    fish: ['walleye', 'saugeye', 'sauger'],
    unlocked: false
  },
  {
    id: 6, title: 'Trout & Salmon', icon: '🌊', description: 'Steelhead, Rainbow & Brown',
    fish: ['steelhead', 'rainbow_trout', 'brown_trout'],
    unlocked: false
  },
  {
    id: 7, title: 'Others', icon: '🎣', description: 'Carp & Drum',
    fish: ['common_carp', 'freshwater_drum'],
    unlocked: false
  }
];

// ===== SIMILAR FISH PAIRS (for spot-the-difference questions) =====
const SIMILAR_PAIRS = [
  { fish1: 'walleye', fish2: 'sauger', hint: 'Check the tail for a white tip!' },
  { fish1: 'largemouth_bass', fish2: 'smallmouth_bass', hint: 'Look at how far the jaw extends relative to the eye!' },
  { fish1: 'black_crappie', fish2: 'white_crappie', hint: 'Random spots vs. vertical bars!' },
  { fish1: 'northern_pike', fish2: 'muskellunge', hint: 'Light spots on dark (pike) vs. dark marks on light (muskie)!' },
  { fish1: 'channel_catfish', fish2: 'flathead_catfish', hint: 'Forked tail vs. square tail, and check the head shape!' },
  { fish1: 'steelhead', fish2: 'rainbow_trout', hint: 'Both are the same species! Steelhead are chrome silver from the lake.' },
  { fish1: 'walleye', fish2: 'saugeye', hint: 'Saugeye have spotted dorsal fins and darker blotches.' }
];

// ===== TRUE/FALSE STATEMENTS =====
const TRUE_FALSE = [
  { statement: 'Walleye have a white tip on the lower lobe of their tail.', answer: true, fishId: 'walleye' },
  { statement: 'Sauger have a white tip on their tail just like walleye.', answer: false, fishId: 'sauger' },
  { statement: 'Largemouth bass have a jaw that extends past the eye.', answer: true, fishId: 'largemouth_bass' },
  { statement: 'Smallmouth bass have a jaw that extends past the eye.', answer: false, fishId: 'smallmouth_bass' },
  { statement: 'Black crappie have organized vertical bars on their sides.', answer: false, fishId: 'black_crappie' },
  { statement: 'White crappie have 5-6 dorsal spines, fewer than black crappie.', answer: true, fishId: 'white_crappie' },
  { statement: 'Channel catfish have a forked tail.', answer: true, fishId: 'channel_catfish' },
  { statement: 'Flathead catfish have a deeply forked tail.', answer: false, fishId: 'flathead_catfish' },
  { statement: 'Northern pike have light spots on a dark body.', answer: true, fishId: 'northern_pike' },
  { statement: 'Muskellunge have light spots on a dark body like pike.', answer: false, fishId: 'muskellunge' },
  { statement: 'Bluegill have a distinctive dark ear flap.', answer: true, fishId: 'bluegill' },
  { statement: 'Yellow perch have horizontal stripes on their body.', answer: false, fishId: 'yellow_perch' },
  { statement: 'Common carp have barbels near their mouth.', answer: true, fishId: 'common_carp' },
  { statement: 'Freshwater drum can make a drumming sound with their swim bladder.', answer: true, fishId: 'freshwater_drum' },
  { statement: 'Steelhead and rainbow trout are different species.', answer: false, fishId: 'steelhead' },
  { statement: 'Saugeye are a hybrid between walleye and sauger.', answer: true, fishId: 'saugeye' },
  { statement: 'White bass have dark vertical bars on their body.', answer: false, fishId: 'white_bass' },
  { statement: 'Channel catfish have about 100,000 taste buds on their body.', answer: true, fishId: 'channel_catfish' },
  { statement: 'Muskellunge are called the fish of 10,000 casts.', answer: true, fishId: 'muskellunge' },
  { statement: 'Rainbow trout lack an adipose fin.', answer: false, fishId: 'rainbow_trout' },
  { statement: 'Brown trout often have red or orange spots, sometimes with pale halos.', answer: true, fishId: 'brown_trout' }
];

// ===== FEATURE QUIZ OPTIONS =====
const FEATURE_OPTIONS = {
  walleye: { correct: 'Large glassy eyes and white-tipped lower tail', wrong: ['Dark ear flap on gill cover', 'Horizontal stripes along body', 'Flat, wide head shape'] },
  yellow_perch: { correct: 'Golden body with 6-8 dark vertical bars', wrong: ['Random dark speckles scattered on body', 'Pink-red stripe along the side', 'Large mouth extending past the eye'] },
  smallmouth_bass: { correct: 'Bronze color with jaw ending at the eye', wrong: ['Jaw extending well past the eye', 'Dark horizontal lateral stripe', 'Forked tail with barbels'] },
  largemouth_bass: { correct: 'Jaw extends past eye with dark lateral stripe', wrong: ['Bronze body with vertical bars', 'White tip on the lower tail', 'Scattered dark spots on silver body'] },
  channel_catfish: { correct: 'Forked tail with whisker barbels and dark spots', wrong: ['Square tail with mottled coloring', 'Deep body with humped back', 'Golden scales with two mouth barbels'] },
  bluegill: { correct: 'Deep body with dark ear flap and orange breast', wrong: ['Elongated body with duck-bill snout', 'Silver body with horizontal stripes', 'Olive-gold body with glassy eyes'] },
  black_crappie: { correct: 'Silver body with random dark spots, 7-8 dorsal spines', wrong: ['Silver body with vertical dark bars', 'Golden body with dark vertical bars', 'Deep body with dark ear flap'] },
  white_crappie: { correct: 'Silver body with vertical bars, 5-6 dorsal spines', wrong: ['Silver body with random scattered spots', 'Green body with dark lateral stripe', 'Bronze body with red eye'] },
  northern_pike: { correct: 'Dark green with light spots, duck-bill snout', wrong: ['Light body with dark bars or spots', 'Bronze body with vertical bars', 'Silver body with pink stripe'] },
  muskellunge: { correct: 'Light body with dark markings, pointed snout', wrong: ['Dark body with light bean-shaped spots', 'Golden body with vertical bars', 'Silver-gray with humped back'] },
  steelhead: { correct: 'Chrome silver sides with spots on tail', wrong: ['Golden-bronze body with large scales', 'Olive body with dark saddle marks', 'Deep green body with orange breast'] },
  saugeye: { correct: 'Like walleye but with spotted dorsal fin', wrong: ['Pure white tip on lower tail', 'Bright yellow body with dark bars', 'Flat head with mottled brown pattern'] },
  white_bass: { correct: 'Silver body with thin dark horizontal stripes', wrong: ['Golden body with dark vertical bars', 'Green body with light spots', 'Bronze body with red eye'] },
  common_carp: { correct: 'Large golden-bronze body with big scales and barbels', wrong: ['Blue-gray body with forked tail', 'Elongated body with duck-bill snout', 'Silver body with dark spots'] },
  flathead_catfish: { correct: 'Flat wide head, mottled colors, square tail', wrong: ['Narrow head with forked tail and spots', 'Silver body with humped back', 'Green body with light spots'] },
  rainbow_trout: { correct: 'Pink-red lateral stripe with spots everywhere', wrong: ['Chrome silver with no visible stripe', 'Golden body with dark vertical bars', 'Mottled brown with flat head'] },
  brown_trout: { correct: 'Golden-brown body with red/orange spots (often with pale halos)', wrong: ['Prominent pink-red stripe with spots everywhere', 'Forked tail with whisker barbels', 'Dark ear flap with orange breast'] },
  freshwater_drum: { correct: 'Silver deep body with humped back and rounded tail', wrong: ['Elongated body with duck-bill snout', 'Golden body with vertical bars', 'Bronze body with red eye'] },
  sauger: { correct: 'Dark body with spotted dorsal, no white tail tip', wrong: ['White tip on lower tail lobe', 'Bright golden body with orange fins', 'Deep body with dark ear flap'] }
};

// ===== FISH SPECIES DATA =====
const FISH = {
  walleye: {
    id: 'walleye', name: 'Walleye', scientific: 'Sander vitreus',
    refs: [
      { label: "ODNR species page: Walleye", url: "https://ohiodnr.gov/discover-and-learn/animals/fish/walleye" },
      { label: "ODNR Sport Fish of Ohio Field Guide (PDF)", url: "https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf" },
      { label: "USGS NAS factsheet", url: "https://nas.er.usgs.gov/queries/FactSheet.aspx?speciesID=831" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Walleye_%28Sander_vitreus%29_%281%29.jpg/500px-Walleye_%28Sander_vitreus%29_%281%29.jpg',
    quizImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sander_vitreus.jpg/500px-Sander_vitreus.jpg',
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
    refs: [
      { label: "Wikipedia: Yellow perch", url: "https://en.wikipedia.org/wiki/Yellow_perch" },
      { label: "DFO Canada species profile", url: "https://www.dfo-mpo.gc.ca/species-especes/profiles-profils/yellowperch-perchaude-eng.html" },
      { label: "Animal Diversity Web: Perca flavescens", url: "https://animaldiversity.org/accounts/Perca_flavescens/" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Yellow_Perch_%28Perca_flavescens%29_%28cropped%29.jpg/500px-Yellow_Perch_%28Perca_flavescens%29_%28cropped%29.jpg',
    quizImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/D3149-1._yellow_perch_%28Perca_flavescens%29.jpg/500px-D3149-1._yellow_perch_%28Perca_flavescens%29.jpg',
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
    refs: [
      { label: "Wikipedia: Smallmouth bass", url: "https://en.wikipedia.org/wiki/Smallmouth_bass" },
      { label: "DFO Canada species profile", url: "https://www.dfo-mpo.gc.ca/species-especes/profiles-profils/smallmouthbass-achiganpetitebouche-eng.html" },
      { label: "USFWS species profile", url: "https://www.fws.gov/species/smallmouth-bass-micropterus-dolomieui" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Smallmouth_Bass_%2849561724026%29.jpg/500px-Smallmouth_Bass_%2849561724026%29.jpg',
    quizImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Micropterus_dolomieu2.jpg/500px-Micropterus_dolomieu2.jpg',
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
    refs: [
      { label: "ODNR Sport Fish of Ohio Field Guide (PDF)", url: "https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf" },
      { label: "Ohio State AEL: Ohio reservoir largemouth bass", url: "https://ael.osu.edu/understanding-differences-ohio-reservoir-largemouth-bass-populations" },
      { label: "ODNR Fish Ohio program", url: "https://ohiodnr.gov/buy-and-apply/hunting-fishing-boating/fishing-resources/fishohio-program" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Largemouth_Bass_%28Micropterus_salmoides%29_June_2023_%28cropped%29.jpg/500px-Largemouth_Bass_%28Micropterus_salmoides%29_June_2023_%28cropped%29.jpg',
    quizImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Largemouth_Bass_%28Micropterus_salmoides%29.jpg/500px-Largemouth_Bass_%28Micropterus_salmoides%29.jpg',
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
    refs: [
      { label: "ODNR Sport Fish of Ohio Field Guide (PDF)", url: "https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf" },
      { label: "Ohio State AEL: Reservoir channel catfish project", url: "https://ael.osu.edu/research/projects/reservoir-channel-catfish-assessment-stocking-and-ecology" },
      { label: "ODNR Fish Ohio program", url: "https://ohiodnr.gov/buy-and-apply/hunting-fishing-boating/fishing-resources/fishohio-program" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Channel_Catfish_%28Ictalurus_punctatus%29_white_background.jpg/500px-Channel_Catfish_%28Ictalurus_punctatus%29_white_background.jpg',
    quizImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Channel_catfish_%28Ictalurus_punctatus%29.jpg/500px-Channel_catfish_%28Ictalurus_punctatus%29.jpg',
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
    refs: [
      { label: "ODNR Sport Fish of Ohio Field Guide (PDF)", url: "https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf" },
      { label: "Ohio State ENR Fish Taxonomy (Bluegill)", url: "https://u.osu.edu/enrfishtax/2019/11/07/is-everything-a-bluegill/" },
      { label: "Take Me Fishing: Bluegill", url: "https://www.takemefishing.org/bluegill/" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Bluegill_%28cropped%29.jpg/500px-Bluegill_%28cropped%29.jpg',
    quizImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bluegill_%28Lepomis_macrochirus%29_%2853678765399%29.jpg/500px-Bluegill_%28Lepomis_macrochirus%29_%2853678765399%29.jpg',
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
    refs: [
      { label: "ODNR Sport Fish of Ohio Field Guide (PDF)", url: "https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf" },
      { label: "Fish of Ohio: Black Crappie", url: "http://www.fishofohio.com/ohio-fish-black-crappie.htm" },
      { label: "USGS specimen record (example)", url: "https://nas.er.usgs.gov/queries/SpecimenViewer.aspx?SpecimenID=1406233" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Black_crappie.jpg/500px-Black_crappie.jpg',
    quizImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Black_Crappie_%28Pomoxis_nigromaculatus%29.jpg/500px-Black_Crappie_%28Pomoxis_nigromaculatus%29.jpg',
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
    refs: [
      { label: "Missouri Dept. of Conservation: White Crappie", url: "https://mdc.mo.gov/discover-nature/field-guide/white-crappie" },
      { label: "Iowa DNR Fish Iowa: White Crappie", url: "https://programs.iowadnr.gov/lakemanagement/fishiowa/fishdetails/WHC" },
      { label: "Animal Diversity Web: Pomoxis annularis", url: "https://animaldiversity.org/accounts/Pomoxis_annularis/" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/White_Crappie.jpg/500px-White_Crappie.jpg',
    quizImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/White_crappie_pomoxis_annularis_%28white_background%29.jpg/500px-White_crappie_pomoxis_annularis_%28white_background%29.jpg',
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
    refs: [
      { label: "ODNR Sport Fish of Ohio Field Guide (PDF)", url: "https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf" },
      { label: "ODNR Pike (state-listed species PDF)", url: "https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/state-listed-species/pike.pdf" },
      { label: "ODNR Fish Ohio program", url: "https://ohiodnr.gov/buy-and-apply/hunting-fishing-boating/fishing-resources/fishohio-program" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Esox_lucius_ZOO_1.jpg/500px-Esox_lucius_ZOO_1.jpg',
    quizImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Esox_Lucius.JPG/500px-Esox_Lucius.JPG',
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
    refs: [
      { label: "ODNR Muskie Angler Log", url: "https://ohiodnr.gov/buy-and-apply/hunting-fishing-boating/fishing-resources/muskie-angler-log" },
      { label: "Ohio State ENR Fish Taxonomy (Muskellunge)", url: "https://u.osu.edu/enrfishtax/2019/11/06/muskellunge-recovery-in-ohio/" },
      { label: "ODNR Sport Fish of Ohio Field Guide (PDF)", url: "https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Esox_masquinongyeditcrop.jpg/500px-Esox_masquinongyeditcrop.jpg',
    quizImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Esox_masquinongy_%28muskellunge%29_1.jpg/500px-Esox_masquinongy_%28muskellunge%29_1.jpg',
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
    refs: [
      { label: "ODNR: Steelhead fishing", url: "https://ohiodnr.gov/home/additional-resources/division-of-wildlife/steelhead-fishing-promo" },
      { label: "ODNR Sport Fish of Ohio Field Guide (PDF)", url: "https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf" },
      { label: "ODNR Fish Ohio program", url: "https://ohiodnr.gov/buy-and-apply/hunting-fishing-boating/fishing-resources/fishohio-program" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Man_holding_a_steelhead_%28Oncorhynchus_mykiss%29_cropped.jpg/500px-Man_holding_a_steelhead_%28Oncorhynchus_mykiss%29_cropped.jpg',
    quizImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Steelhead_%28Oncorhynchus_mykiss%29.png/500px-Steelhead_%28Oncorhynchus_mykiss%29.png',
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
    refs: [
      { label: "Wikipedia: Saugeye", url: "https://en.wikipedia.org/wiki/Saugeye" },
      { label: "West Virginia DNR: Saugeye", url: "https://wvdnr.gov/plants-animals/sportfish/saugeye/" },
      { label: "USGS NAS factsheet", url: "https://nas.er.usgs.gov/queries/factsheet.aspx?SpeciesID=829" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Sander_canadensis_%C3%97_vitreus_-_Jensyn_Scott_-_376881973.jpeg/500px-Sander_canadensis_%C3%97_vitreus_-_Jensyn_Scott_-_376881973.jpeg',
    quizImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Saugeye.jpg/500px-Saugeye.jpg',
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
    refs: [
      { label: "ODNR Sport Fish of Ohio Field Guide (PDF)", url: "https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf" },
      { label: "Fish of Ohio: White Bass", url: "http://www.fishofohio.com/ohio-fish-white-bass.htm" },
      { label: "USGS NAS factsheet", url: "https://nas.er.usgs.gov/queries/factsheet.aspx?SpeciesID=779" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/White_Bass_%28Morone_chrysops%29.jpg/500px-White_Bass_%28Morone_chrysops%29.jpg',
    quizImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Morone_chrysops_white_bass_fish_%28white_background%29.jpg/500px-Morone_chrysops_white_bass_fish_%28white_background%29.jpg',
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
    refs: [
      { label: "USGS NAS factsheet", url: "https://nas.er.usgs.gov/queries/factsheet.aspx?speciesID=4" },
      { label: "FishBase summary", url: "https://fishbase.se/summary/Cyprinus-carpio.html" },
      { label: "USFWS: Common carp", url: "https://www.fws.gov/media/common-carp-3" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Cyprinus_carpio_2008_G1_%28cropped%29.jpg/500px-Cyprinus_carpio_2008_G1_%28cropped%29.jpg',
    quizImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Cyprinus_carpio.jpeg/500px-Cyprinus_carpio.jpeg',
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
    refs: [
      { label: "ODNR Sport Fish of Ohio Field Guide (PDF)", url: "https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf" },
      { label: "USFWS species profile", url: "https://www.fws.gov/species/flathead-catfish-pylodictis-olivaris" },
      { label: "Wikipedia: Flathead catfish", url: "https://en.wikipedia.org/wiki/Flathead_catfish" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Pylodictis_olivaris.jpg/500px-Pylodictis_olivaris.jpg',
    quizImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flathead_Catfish_%28Pylodictis_olivaris%29.jpg/500px-Flathead_Catfish_%28Pylodictis_olivaris%29.jpg',
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
  blue_catfish: {
    id: 'blue_catfish', name: 'Blue Catfish', scientific: 'Ictalurus furcatus',
    refs: [
      { label: "ODNR Sport Fish of Ohio Field Guide (PDF)", url: "https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf" },
      { label: "ODNR Blue catfish reporting", url: "https://ohiodnr.gov/wps/portal/gov/odnr/buy-and-apply/hunting-fishing-boating/fishing-resources/blue-catfish-reporting" },
      { label: "USGS NAS factsheet", url: "https://nas.er.usgs.gov/queries/FactSheet.aspx?SpeciesID=740" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Blue_catfish.jpg/500px-Blue_catfish.jpg',
    quizImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Ictalurus_furcatus.jpg/500px-Ictalurus_furcatus.jpg',
    features: [
      'Slate blue to grayish-blue body',
      'NO dark spots (unlike channel catfish)',
      'Deeply forked tail',
      'Straight-edged anal fin (30-36 rays)',
      'Humped back profile',
      'Can grow very large (50+ pounds)'
    ],
    keyFeature: 'Blue-gray body with no spots, straight anal fin edge, deeply forked tail',
    habitat: 'Large rivers, reservoirs, Lake Erie tributaries; prefers deep channels with current',
    size: '25-40 inches typical, can exceed 100 pounds',
    funFact: 'Blue catfish are the largest catfish species in North America and can live over 25 years. They were originally stocked in Ohio rivers and have spread to Lake Erie tributaries!',
    colors: { primary: '#4A6080', secondary: '#5A7090', belly: '#C8D0D8', fin: '#3A5070' }
  },
  rainbow_trout: {
    id: 'rainbow_trout', name: 'Rainbow Trout', scientific: 'Oncorhynchus mykiss',
    refs: [
      { label: "ODNR Sport Fish of Ohio Field Guide (PDF)", url: "https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf" },
      { label: "USGS NAS factsheet", url: "https://nas.er.usgs.gov/queries/FactSheet.aspx?speciesID=910" },
      { label: "Animal Diversity Web: Oncorhynchus mykiss", url: "https://animaldiversity.org/accounts/Oncorhynchus_mykiss/" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Close_up_of_rainbow_trout_fish_underwater_oncorhynchus_mykiss.jpg/500px-Close_up_of_rainbow_trout_fish_underwater_oncorhynchus_mykiss.jpg',
    quizImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Rainbow_Trout_%28Oncorhynchus_mykiss%29_Gavins_Point.jpg/500px-Rainbow_Trout_%28Oncorhynchus_mykiss%29_Gavins_Point.jpg',
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
    refs: [
      { label: "Illinois DNR: Brown Trout", url: "https://dnr.illinois.gov/education/wildaboutpages/wildaboutfishes/wafsalmon/wafbrowntrout.html" },
      { label: "Wikipedia: Brown trout", url: "https://en.wikipedia.org/wiki/Brown_trout" },
      { label: "USGS NAS factsheet", url: "https://nas.er.usgs.gov/queries/FactSheet.aspx?speciesID=931" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Brown_Trout_%28Salmo_trutta%29_%2853678765394%29.jpg/500px-Brown_Trout_%28Salmo_trutta%29_%2853678765394%29.jpg',
    quizImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Brown_Trout_%28Salmo_trutta%29.jpg/500px-Brown_Trout_%28Salmo_trutta%29.jpg',
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
    refs: [
      { label: "ODNR Sport Fish of Ohio Field Guide (PDF)", url: "https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf" },
      { label: "ODNR: Freshwater drum recipe/info", url: "https://ohiodnr.gov/discover-and-learn/education-training/wild-ohio-harvest-cookbook/fish-recipes/freshwater-drum-cocktail" },
      { label: "Wikipedia: Freshwater drum", url: "https://en.wikipedia.org/wiki/Freshwater_drum" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Freshwater_Drum%2C_North_Channel_Saint_Clair_River_imported_from_iNaturalist_photo_423155272.jpg/500px-Freshwater_Drum%2C_North_Channel_Saint_Clair_River_imported_from_iNaturalist_photo_423155272.jpg',
    quizImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Freshwater_Drum_%28Aplodinotus_grunniens%29_-_Leamington%2C_Ontario.jpg/500px-Freshwater_Drum_%28Aplodinotus_grunniens%29_-_Leamington%2C_Ontario.jpg',
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
    refs: [
      { label: "USFWS species profile", url: "https://www.fws.gov/species/sauger-sander-canadensis" },
      { label: "West Virginia DNR: Sauger", url: "https://wvdnr.gov/plants-animals/sportfish/sauger/" },
      { label: "ODNR Sport Fish of Ohio Field Guide (PDF)", url: "https://dam.assets.ohio.gov/image/upload/ohiodnr.gov/documents/wildlife/backyard-wildlife/Sport%20Fish%20of%20Ohio%20Field%20Guide%20pub334.pdf" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Saugernctc.jpg/500px-Saugernctc.jpg',
    quizImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Sauger_%28Sander_canadensis%29_%2851747095009%29.jpg/500px-Sauger_%28Sander_canadensis%29_%2851747095009%29.jpg',
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
  },
  green_sunfish: {
    id: 'green_sunfish', name: 'Green Sunfish', scientific: 'Lepomis cyanellus',
    refs: [
      { label: "Virginia DWR species profile", url: "https://dwr.virginia.gov/wildlife/information/green-sunfish/" },
      { label: "Mississippi MDWFP Fish ID Guide", url: "https://www.mdwfp.com/fishing-boating/fish-id-guide/green-sunfish" },
      { label: "Outdoor Alabama species page", url: "https://www.outdooralabama.com/bream/green-sunfish" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Lepomis_cyanellus.jpg/500px-Lepomis_cyanellus.jpg',
    quizImage: '',
    features: [
      'Stocky, thick body for a sunfish',
      'Dark olive-green to blue-green color',
      'Large mouth extending to middle of eye',
      'Blue-green streaks on face (cheeks and opercle)',
      'Dark ear flap with pale orange or yellow edge',
      'Yellow-orange belly and fin edges'
    ],
    keyFeature: 'Stocky sunfish with large mouth and blue-green facial streaks',
    habitat: 'Streams, ponds, ditches; very tolerant of poor water quality',
    size: '4-8 inches typical',
    funFact: 'Green sunfish are one of the toughest panfish - they can survive in muddy, low-oxygen water where other sunfish cannot. They readily hybridize with bluegill.',
    colors: { primary: '#3B6B3A', secondary: '#4A8050', belly: '#D8C060', fin: '#2A5030' }
  },
  pumpkinseed: {
    id: 'pumpkinseed', name: 'Pumpkinseed', scientific: 'Lepomis gibbosus',
    refs: [
      { label: "DFO Canada species profile", url: "https://www.dfo-mpo.gc.ca/species-especes/profiles-profils/pumpkinseed-crapetsoleil-eng.html" },
      { label: "Illinois DNR Wild About Fishes", url: "https://dnr.illinois.gov/education/wildaboutpages/wildaboutfishes/wafsunfish/wafpumpkinseed.html" },
      { label: "Wisconsin DNR species overview (PDF)", url: "https://dnr.wisconsin.gov/sites/default/files/topic/Fishing/Species_pumpkinseed.pdf" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lepomis_gibbosus_PAQ.jpg/500px-Lepomis_gibbosus_PAQ.jpg',
    quizImage: '',
    features: [
      'Deep, compressed body with vibrant colors',
      'Wavy blue and orange lines on cheeks',
      'Bright red or orange spot on ear flap tip',
      'Olive to gold body with orange/blue speckles',
      'Orange belly and breast',
      'Small mouth, not extending past front of eye'
    ],
    keyFeature: 'Colorful sunfish with red/orange spot on ear flap and wavy facial lines',
    habitat: 'Clear ponds and lakes with vegetation, slow streams',
    size: '5-8 inches typical',
    funFact: 'Pumpkinseed are arguably the most colorful freshwater fish in Ohio. The bright red spot on their ear flap is the easiest way to tell them from bluegill.',
    colors: { primary: '#7B8530', secondary: '#A0A848', belly: '#E8A030', fin: '#5A6828' }
  },
  longear_sunfish: {
    id: 'longear_sunfish', name: 'Longear Sunfish', scientific: 'Lepomis megalotis',
    refs: [
      { label: "Missouri Dept. of Conservation field guide", url: "https://mdc.mo.gov/discover-nature/field-guide/longear-sunfish" },
      { label: "Outdoor Alabama species page", url: "https://www.outdooralabama.com/bream/longear-sunfish" },
      { label: "Texas Parks & Wildlife species account", url: "https://tpwd.texas.gov/huntwild/wild/species/longearsunfish/" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Lepomis_megalotis.jpg/500px-Lepomis_megalotis.jpg',
    quizImage: '',
    features: [
      'Very long, flexible ear flap (opercular flap)',
      'Bright orange-red breast and belly',
      'Blue-green wavy lines on face',
      'Olive to rusty-orange body',
      'Ear flap bordered by white or light edge',
      'Small mouth'
    ],
    keyFeature: 'Extremely long ear flap with white border and bright orange belly',
    habitat: 'Clear streams and small rivers over gravel or rock',
    size: '4-7 inches typical',
    funFact: 'Longear sunfish have the longest ear flaps of any sunfish species. Males become brilliantly colored during spawning season with vivid orange and blue.',
    colors: { primary: '#8B5A20', secondary: '#A87030', belly: '#E87020', fin: '#6B4518' }
  },
  redear_sunfish: {
    id: 'redear_sunfish', name: 'Redear Sunfish', scientific: 'Lepomis microlophus',
    refs: [
      { label: "Virginia DWR species profile", url: "https://dwr.virginia.gov/wildlife/information/redear-sunfish/" },
      { label: "North Carolina Wildlife Resources Commission", url: "https://www.ncwildlife.gov/species/redear-sunfish" },
      { label: "USGS NAS factsheet", url: "https://nas.er.usgs.gov/queries/factsheet.aspx?SpeciesID=390" },
      { label: "Maryland DNR fish facts", url: "https://dnr.maryland.gov/fisheries/pages/fish-facts.aspx?fishname=Redear+Sunfish" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Redear_sunfish.jpg/500px-Redear_sunfish.jpg',
    quizImage: '',
    features: [
      'Deep body, similar shape to bluegill',
      'Short ear flap with bright red or orange border',
      'Olive-green to golden sides',
      'No blue streaks on face (unlike pumpkinseed)',
      'Light-colored belly',
      'Feeds on snails (hence nickname)'
    ],
    keyFeature: 'Sunfish with red/orange margin on short ear flap - the shellcracker',
    habitat: 'Ponds and lakes with sandy or muddy bottoms',
    size: '7-10 inches typical, can reach 12+',
    funFact: 'Redear sunfish are nicknamed "shellcrackers" because they use special teeth in their throat to crush snail shells. They grow larger than most other sunfish.',
    colors: { primary: '#5A7A40', secondary: '#708E50', belly: '#D8D8A0', fin: '#4A6830' }
  },
  orangespotted_sunfish: {
    id: 'orangespotted_sunfish', name: 'Orangespotted Sunfish', scientific: 'Lepomis humilis',
    refs: [
      { label: "Illinois DNR Wild About Fishes", url: "https://dnr.illinois.gov/education/wildaboutpages/wildaboutfishes/wafsunfish/waforangespottedsunfish.html" },
      { label: "Outdoor Alabama species page", url: "https://www.outdooralabama.com/bream/orangespotted-sunfish" },
      { label: "USFWS species media", url: "https://www.fws.gov/media/orange-spotted-sunfish-0" },
      { label: "USGS NAS factsheet", url: "https://nas.er.usgs.gov/queries/factsheet.aspx?SpeciesID=383" }
    ],
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
    colors: { primary: '#5A7050', secondary: '#708860', belly: '#D0C080', fin: '#4A5A40' }
  },
  warmouth: {
    id: 'warmouth', name: 'Warmouth', scientific: 'Lepomis gulosus',
    refs: [
      { label: "North Carolina Wildlife Resources Commission", url: "https://www.ncwildlife.gov/species/warmouth" },
      { label: "Kentucky Fish & Wildlife", url: "https://fw.ky.gov/Fish/pages/warmouth.aspx" },
      { label: "Texas Parks & Wildlife species account", url: "https://tpwd.texas.gov/huntwild/wild/species/war/" },
      { label: "Mississippi MDWFP Fish ID Guide", url: "https://www.mdwfp.com/fishing-boating/fish-id-guide/warmouth" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Lepomis_gulosus.jpg/500px-Lepomis_gulosus.jpg',
    quizImage: '',
    features: [
      'Thick, robust body',
      'Large mouth for a sunfish (extends to middle of eye)',
      'Dark red-brown streaks radiating from red eye',
      'Mottled brown-olive body',
      'Short ear flap with red-orange spot',
      'Teeth on tongue'
    ],
    keyFeature: 'Thick-bodied sunfish with large mouth and dark streaks from red eye',
    habitat: 'Swamps, backwaters, heavily vegetated ponds with muddy bottoms',
    size: '5-8 inches typical',
    funFact: 'Warmouth are often confused with rock bass but have a larger mouth and distinctive facial markings. They prefer muddier, more stagnant water than most sunfish.',
    colors: { primary: '#5A4A28', secondary: '#706038', belly: '#C8B878', fin: '#4A3A20' }
  },
  spotted_bass: {
    id: 'spotted_bass', name: 'Spotted Bass', scientific: 'Micropterus punctulatus',
    refs: [
      { label: "Louisiana Dept. of Wildlife & Fisheries", url: "https://www.wlf.louisiana.gov/species/detail/spotted-bass" },
      { label: "Mississippi MDWFP Fish ID Guide", url: "https://www.mdwfp.com/fishing-boating/fish-id-guide/spotted-bass" },
      { label: "Bassmaster ID guide (PDF)", url: "https://www.bassmaster.com/wp-content/uploads/2022/03/howtoidspottedbass_1.pdf" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Micropterus_punctulatus.jpg/500px-Micropterus_punctulatus.jpg',
    quizImage: '',
    features: [
      'Green to olive body',
      'Rows of dark spots below lateral line',
      'Jaw does NOT extend past the eye',
      'Dark lateral band (may break into blotches)',
      'Rough tooth patch on tongue',
      'Connected dorsal fin'
    ],
    keyFeature: 'Rows of spots below lateral line with rough tooth patch on tongue',
    habitat: 'Rocky streams and reservoirs in southern Ohio',
    size: '10-15 inches typical',
    funFact: 'Spotted bass look like a cross between largemouth and smallmouth. The rows of spots below the lateral line and the rough tongue patch are the best way to identify them.',
    colors: { primary: '#4A6830', secondary: '#5A7A40', belly: '#C8D0A0', fin: '#3A5828' }
  },
  rock_bass: {
    id: 'rock_bass', name: 'Rock Bass', scientific: 'Ambloplites rupestris',
    refs: [
      { label: "North Carolina Wildlife Resources Commission", url: "https://www.ncwildlife.gov/species/rock-bass" },
      { label: "USFWS species profile", url: "https://www.fws.gov/species/rock-bass-ambloplites-rupestris" },
      { label: "Outdoor Alabama species page", url: "https://www.outdooralabama.com/bream/rock-bass" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ambloplites_rupestris.jpg/500px-Ambloplites_rupestris.jpg',
    quizImage: '',
    features: [
      'Stocky body, less compressed than sunfish',
      'Bright red eye',
      'Olive-brown with dark mottling/spots',
      'Six anal fin spines (most sunfish have 3)',
      'Large mouth for a panfish',
      'Dark spots in rows along sides'
    ],
    keyFeature: 'Red eye, stocky body with six anal spines and dark spots in rows',
    habitat: 'Rocky streams, clear lakes near boulders and structure',
    size: '6-10 inches typical',
    funFact: 'Rock bass have bright red eyes that make them easy to identify. They are sometimes called "redeyes" or "goggle-eyes" and are closely related to smallmouth bass.',
    colors: { primary: '#6B5A30', secondary: '#8B7848', belly: '#C8B880', fin: '#5A4A28' }
  },
  hybrid_striped_bass: {
    id: 'hybrid_striped_bass', name: 'Hybrid Striped Bass', scientific: 'Morone chrysops × M. saxatilis',
    refs: [
      { label: "Virginia DWR species profile", url: "https://dwr.virginia.gov/wildlife/information/hybrid-striped-bass/" },
      { label: "Texas Parks & Wildlife (PDF)", url: "https://tpwd.texas.gov/publications/pwdpubs/media/pwd_lf_t3200_086.pdf" },
      { label: "Iowa DNR species page", url: "https://www.iowadnr.gov/things-do/fishing/iowa-fish-species/hybrid-striped-bass" },
      { label: "New Jersey DEP overview", url: "https://dep.nj.gov/njfw/fishing/freshwater/striped-bass-hybrid/" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/HybridBassCoosaRiver.jpg/500px-HybridBassCoosaRiver.jpg',
    quizImage: '',
    features: [
      'Silver body with broken or offset horizontal stripes',
      'Deep body, deeper than white bass',
      'Two tooth patches on tongue',
      'Stripes are often broken or misaligned',
      'Larger and deeper-bodied than white bass',
      'Separated dorsal fins'
    ],
    keyFeature: 'Like white bass but larger with broken/offset horizontal stripes',
    habitat: 'Large reservoirs where stocked; open water',
    size: '15-20 inches typical, can exceed 10 pounds',
    funFact: 'Hybrid striped bass (wipers) are a cross between white bass and saltwater striped bass. They fight incredibly hard and are stocked in many Ohio reservoirs.',
    colors: { primary: '#8090A0', secondary: '#98A8B8', belly: '#D8E0E8', fin: '#607080' }
  },
  white_perch: {
    id: 'white_perch', name: 'White Perch', scientific: 'Morone americana',
    refs: [
      { label: "Virginia DWR species profile", url: "https://dwr.virginia.gov/wildlife/information/white-perch/" },
      { label: "Wisconsin DNR species page", url: "https://dnr.wisconsin.gov/topic/Fishing/species/whiteperch.html" },
      { label: "USFWS ecological risk screening (PDF)", url: "https://www.fws.gov/sites/default/files/documents/Ecological-Risk-Screening-Summary-White-Perch.pdf" },
      { label: "NY Sea Grant factsheet (PDF)", url: "https://www.seagrant.sunysb.edu/olei/Factsheets/White%20Perch.pdf" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/White_perch.jpg/500px-White_perch.jpg',
    quizImage: '',
    features: [
      'Silver-green body with no distinct stripes',
      'Deep, compressed body shape',
      'Slightly forked tail',
      'No horizontal stripes (unlike white bass)',
      'Dark olive-green back fading to silver',
      'Separated dorsal fins'
    ],
    keyFeature: 'Silver body like white bass but WITHOUT horizontal stripes',
    habitat: 'Lake Erie and tributaries; invasive species',
    size: '8-12 inches typical',
    funFact: 'White perch are actually invasive in Lake Erie, having arrived through canals from the Atlantic coast. Despite the name, they are not true perch but members of the temperate bass family.',
    colors: { primary: '#7A8A78', secondary: '#90A090', belly: '#D0D8D0', fin: '#607060' }
  },
  yellow_bullhead: {
    id: 'yellow_bullhead', name: 'Yellow Bullhead', scientific: 'Ameiurus natalis',
    refs: [
      { label: "USGS NAS factsheet", url: "https://nas.er.usgs.gov/queries/factsheet.aspx?SpeciesID=733" },
      { label: "Illinois DNR Wild About Fishes", url: "https://dnr.illinois.gov/education/wildaboutpages/wildaboutfishes/wafbullhead/wafyellowbullhead.html" },
      { label: "Connecticut DEEP freshwater fishes", url: "https://portal.ct.gov/deep/fishing/freshwater/freshwater-fishes-of-connecticut/yellow-bullhead" },
      { label: "Mississippi MDWFP Fish ID Guide", url: "https://www.mdwfp.com/fishing-boating/fish-id-guide/yellow-bullhead" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Ameiurus_natalis.jpg/500px-Ameiurus_natalis.jpg',
    quizImage: '',
    features: [
      'Yellowish-brown to olive body',
      'White or cream-colored chin barbels',
      'Rounded tail (not forked)',
      'No spots on body',
      'Rear edge of pectoral spine has small teeth (serrated)',
      'Adipose fin present'
    ],
    keyFeature: 'Yellow-brown bullhead with distinctive white chin barbels',
    habitat: 'Ponds, lakes, slow streams with muddy bottoms and vegetation',
    size: '8-14 inches typical',
    funFact: 'Yellow bullhead are the most common bullhead in Ohio. The easiest way to tell bullheads apart is by their chin barbels: yellow bullheads have white or cream barbels.',
    colors: { primary: '#8B7830', secondary: '#A89040', belly: '#D8C878', fin: '#7A6828' }
  },
  brown_bullhead: {
    id: 'brown_bullhead', name: 'Brown Bullhead', scientific: 'Ameiurus nebulosus',
    refs: [
      { label: "USGS NAS factsheet", url: "https://nas.er.usgs.gov/queries/factsheet.aspx?SpeciesID=734" },
      { label: "Connecticut DEEP freshwater fishes", url: "https://portal.ct.gov/deep/fishing/freshwater/freshwater-fishes-of-connecticut/brown-bullhead" },
      { label: "Missouri Dept. of Conservation field guide", url: "https://mdc.mo.gov/discover-nature/field-guide/brown-bullhead" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Brown_bullhead_fish_ameiurus_nebulosus.jpg',
    quizImage: '',
    features: [
      'Dark brown to olive body, often mottled',
      'Dark-colored chin barbels (brown or gray)',
      'Rounded tail',
      'Mottled pattern on sides',
      'Rear edge of pectoral spine with sharp barbs',
      'Chin barbels dark, not white'
    ],
    keyFeature: 'Brown mottled bullhead with dark (not white) chin barbels',
    habitat: 'Ponds, lakes, slow streams; tolerates low oxygen',
    size: '8-14 inches typical',
    funFact: 'Brown bullhead can survive in incredibly harsh conditions including low oxygen and high temperatures. They are the bullhead species most often found in Lake Erie.',
    colors: { primary: '#5A4A28', secondary: '#706038', belly: '#B8A868', fin: '#4A3A20' }
  },
  black_bullhead: {
    id: 'black_bullhead', name: 'Black Bullhead', scientific: 'Ameiurus melas',
    refs: [
      { label: "USGS NAS factsheet", url: "https://nas.er.usgs.gov/queries/factsheet.aspx?SpeciesID=730" },
      { label: "Oklahoma Department of Wildlife Conservation", url: "https://www.wildlifedepartment.com/wildlife/field-guide/fish/black-bullhead-catfish" },
      { label: "New York DEC SWAP species account (PDF)", url: "https://extapps.dec.ny.gov/fs/programs/dfw/SWAP2025/Freshwater%20Fish/blackbullhead.pdf" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ameiurus_melas_by_Duane_Raver.png/500px-Ameiurus_melas_by_Duane_Raver.png',
    quizImage: '',
    features: [
      'Dark olive to black body',
      'Dark chin barbels (black or dark gray)',
      'Slightly notched or squared tail (not deeply forked)',
      'Pale crescent or bar at tail base',
      'No mottling (more uniform color than brown bullhead)',
      'Pectoral spine smooth (no sharp barbs)'
    ],
    keyFeature: 'Dark-bodied bullhead with pale bar at tail base and smooth pectoral spine',
    habitat: 'Ponds, lakes, ditches; extremely tolerant of poor conditions',
    size: '7-12 inches typical',
    funFact: 'Black bullhead are the hardiest of all bullheads. They can survive in water so muddy and oxygen-poor that virtually no other fish can live there.',
    colors: { primary: '#3A3A28', secondary: '#4A4A38', belly: '#908868', fin: '#2A2A20' }
  },
  white_catfish: {
    id: 'white_catfish', name: 'White Catfish', scientific: 'Ameiurus catus',
    refs: [
      { label: "Missouri Dept. of Conservation field guide", url: "https://mdc.mo.gov/discover-nature/field-guide/white-catfish" },
      { label: "Connecticut DEEP freshwater fishes", url: "https://portal.ct.gov/deep/fishing/freshwater/freshwater-fishes-of-connecticut/white-catfish" },
      { label: "USGS NAS factsheet", url: "https://nas.er.usgs.gov/queries/factsheet.aspx?SpeciesID=729" },
      { label: "New Jersey DEP (PDF)", url: "https://dep.nj.gov/njfw/wp-content/uploads/njfw/White-Catfish.pdf" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Ameiurus_catus.jpg/500px-Ameiurus_catus.jpg',
    quizImage: '',
    features: [
      'Blue-gray to white body',
      'Moderately forked tail (less forked than channel cat)',
      'White chin barbels',
      'No dark spots on body',
      'Broad, flat head',
      'Anal fin shorter than channel catfish (19-23 rays)'
    ],
    keyFeature: 'Blue-white catfish with moderately forked tail and white chin barbels',
    habitat: 'Ohio River, slow rivers and reservoirs; lower reaches',
    size: '10-18 inches typical',
    funFact: 'White catfish are sometimes confused with channel catfish but lack the dark spots and have a less deeply forked tail. They are near the edge of their range in Ohio.',
    colors: { primary: '#6A7A88', secondary: '#8090A0', belly: '#C8D0D8', fin: '#5A6A78' }
  },
  stonecat: {
    id: 'stonecat', name: 'Stonecat', scientific: 'Noturus flavus',
    refs: [
      { label: "USGS NAS factsheet", url: "https://nas.er.usgs.gov/queries/FactSheet.aspx?speciesID=745" },
      { label: "NatureServe Explorer", url: "https://explorer.natureserve.org/Taxon/ELEMENT_GLOBAL.2.101382/Noturus_flavus" },
      { label: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Noturus_flavus/" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Noturus_flavus.jpg/500px-Noturus_flavus.jpg',
    quizImage: '',
    features: [
      'Small, slender catfish',
      'Yellowish-brown to gray body',
      'Adipose fin continuous with tail (connected)',
      'Rounded tail',
      'No spots or mottling',
      'Venomous pectoral spine'
    ],
    keyFeature: 'Small catfish with adipose fin fused to rounded tail and yellow-brown color',
    habitat: 'Rocky riffles in streams and rivers; hides under flat rocks',
    size: '5-8 inches typical',
    funFact: 'Stonecats have a mildly venomous spine in their pectoral fins that can cause a painful sting like a bee sting. They are the largest of the madtom catfish.',
    colors: { primary: '#8B7850', secondary: '#A09068', belly: '#C8B890', fin: '#7A6848' }
  },
  tadpole_madtom: {
    id: 'tadpole_madtom', name: 'Tadpole Madtom', scientific: 'Noturus gyrinus',
    refs: [
      { label: "Missouri Dept. of Conservation field guide", url: "https://mdc.mo.gov/discover-nature/field-guide/tadpole-madtom" },
      { label: "Illinois DNR Wild About Fishes", url: "https://dnr.illinois.gov/education/wildaboutpages/wildaboutfishes/wafbullhead/waftadpolemadtom.html" },
      { label: "Florida Museum fish account", url: "https://www.floridamuseum.ufl.edu/fish/catfish/ictaluridae/tadpole-madtom/" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Noturus_gyrinus_89571583.jpg/500px-Noturus_gyrinus_89571583.jpg',
    quizImage: '',
    features: [
      'Tiny, dark-colored catfish',
      'Chubby tadpole-like body shape',
      'Adipose fin broadly connected to rounded tail',
      'Uniform dark brown to black color',
      'Very small size (under 4 inches)',
      'Pectoral spines without strong barbs'
    ],
    keyFeature: 'Tiny dark catfish with chubby tadpole shape and connected adipose fin',
    habitat: 'Muddy-bottomed ponds, marshes, slow streams with debris',
    size: '2-4 inches typical',
    funFact: 'Tadpole madtoms are one of the smallest catfish in Ohio. They get their name from their resemblance to a tadpole and are mostly nocturnal.',
    colors: { primary: '#4A4030', secondary: '#5A5040', belly: '#8A8068', fin: '#3A3028' }
  },
  brindled_madtom: {
    id: 'brindled_madtom', name: 'Brindled Madtom', scientific: 'Noturus miurus',
    refs: [
      { label: "Missouri Dept. of Conservation field guide", url: "https://mdc.mo.gov/discover-nature/field-guide/brindled-madtom" },
      { label: "Illinois DNR Wild About Fishes", url: "https://dnr.illinois.gov/education/wildaboutpages/wildaboutfishes/wafbullhead/wafbrindledmadtom.html" },
      { label: "Kentucky Fish & Wildlife", url: "https://fw.ky.gov/Fish/Pages/Brindled-Madtom.aspx" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Noturus_miurus_%28Madtom%29.jpg',
    quizImage: '',
    features: [
      'Small catfish with dark saddle markings',
      'Four dark saddle blotches on back',
      'Adipose fin connected to tail',
      'Light band at base of tail followed by dark band',
      'Yellowish-brown base color',
      'Mildly venomous pectoral spines'
    ],
    keyFeature: 'Small catfish with four dark saddle marks and banded tail pattern',
    habitat: 'Riffles of clear streams with rocky or gravelly bottoms',
    size: '2-4 inches typical',
    funFact: 'Brindled madtoms are state-listed as species of concern in some areas. Like all madtoms, they have a venomous pectoral spine used for defense.',
    colors: { primary: '#7A6838', secondary: '#907850', belly: '#B8A878', fin: '#685830' }
  },
  grass_pickerel: {
    id: 'grass_pickerel', name: 'Grass Pickerel', scientific: 'Esox americanus vermiculatus',
    refs: [
      { label: "USFWS species media", url: "https://www.fws.gov/media/grass-pickerel-0" },
      { label: "North American Native Fishes Association (PDF)", url: "https://www.nanfa.org/ac/grass-pickerel.pdf" },
      { label: "COSEWIC status report (Canada)", url: "https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/grass-pickerel.html" },
      { label: "Outdoor Nebraska article", url: "https://magazine.outdoornebraska.gov/blogs/barbs-and-backlashes/grass-pickerel/" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Esox_americanus_vermiculatus.jpg/500px-Esox_americanus_vermiculatus.jpg',
    quizImage: '',
    features: [
      'Small, torpedo-shaped body (smallest pike)',
      'Fully scaled cheeks and gill covers',
      'Dark vertical bar under eye (tear-drop mark)',
      'Green to brown with dark wavy bars',
      'Short, duck-bill snout',
      'Dorsal fin set far back'
    ],
    keyFeature: 'Smallest pike family member with dark tear-drop under eye and fully scaled cheeks',
    habitat: 'Quiet, weedy streams, pond edges, ditches, and marshes',
    size: '6-10 inches typical, rarely exceeds 12',
    funFact: 'Grass pickerel are the smallest member of the pike family in Ohio. Despite their tiny size, they are fierce little predators that ambush prey from weed beds.',
    colors: { primary: '#4A5830', secondary: '#5A6840', belly: '#C0C890', fin: '#3A4828' }
  },
  brook_trout: {
    id: 'brook_trout', name: 'Brook Trout', scientific: 'Salvelinus fontinalis',
    refs: [
      { label: "Virginia DWR species profile", url: "https://dwr.virginia.gov/wildlife/information/brook-trout/" },
      { label: "USFWS species profile", url: "https://www.fws.gov/species/brook-trout-salvelinus-fontinalis" },
      { label: "Chesapeake Bay Program field guide", url: "https://www.chesapeakebay.net/discover/field-guide/entry/brook-trout" },
      { label: "National Wildlife Federation", url: "https://www.nwf.org/Educational-Resources/Wildlife-Guide/Fish/Brook-Trout" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Salvelinus_fontinalis.jpg/500px-Salvelinus_fontinalis.jpg',
    quizImage: '',
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
    colors: { primary: '#2A4A30', secondary: '#3A6040', belly: '#D87030', fin: '#1A3A20' }
  },
  lake_trout: {
    id: 'lake_trout', name: 'Lake Trout', scientific: 'Salvelinus namaycush',
    refs: [
      { label: "Michigan DNR species page", url: "https://www.michigan.gov/dnr/education/michigan-species/fish-species/lake-trout" },
      { label: "DFO Canada species profile", url: "https://www.dfo-mpo.gc.ca/species-especes/profiles-profils/lake-trout-touladi-eng.html" },
      { label: "USFWS species profile", url: "https://www.fws.gov/species/lake-trout-salvelinus-namaycush" },
      { label: "Alaska Dept. of Fish & Game", url: "https://www.adfg.alaska.gov/index.cfm?adfg=laketrout.main" }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Lake_Trout_GLERL.jpg/500px-Lake_Trout_GLERL.jpg',
    quizImage: '',
    features: [
      'Dark gray-green body covered in pale spots',
      'Deeply forked tail (unique among chars)',
      'Light spots on dark background (no red spots)',
      'Cream or white leading edge on lower fins',
      'Large head relative to body',
      'Adipose fin present'
    ],
    keyFeature: 'Dark body with pale spots and deeply forked tail',
    habitat: 'Deep, cold waters of Lake Erie; historically in deeper eastern basin',
    size: '18-30 inches typical in Lake Erie',
    funFact: 'Lake trout were nearly wiped out in Lake Erie by sea lamprey and overfishing. Restoration efforts have brought small populations back to the deeper parts of the lake.',
    colors: { primary: '#4A5A50', secondary: '#5A6A60', belly: '#B0B8A8', fin: '#3A4A40' }
  },
  chinook_salmon: {
    id: 'chinook_salmon', name: 'Chinook Salmon', scientific: 'Oncorhynchus tshawytscha',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Oncorhynchus%20tshawytscha' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Oncorhynchus+tshawytscha' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Chinook_salmon%2C_Oncorhynchus_tshawytscha.jpg/500px-Chinook_salmon%2C_Oncorhynchus_tshawytscha.jpg',
    quizImage: '',
    features: [
      'Large, streamlined silver body',
      'Black spots on back AND both lobes of tail',
      'Black gum line (mouth interior is dark)',
      'Silver sides (lake phase) turning dark during spawn',
      'Large size compared to other Pacific salmon',
      'Adipose fin present'
    ],
    keyFeature: 'Large salmon with black spots on both tail lobes and dark gum line',
    habitat: 'Lake Erie open waters; spawns in tributaries',
    size: '24-36 inches typical in Lake Erie',
    funFact: 'Chinook (king) salmon are the largest Pacific salmon species, originally from the Pacific Northwest. They are stocked in Lake Erie and provide an exciting fall fishery.',
    colors: { primary: '#5A6A70', secondary: '#708088', belly: '#C8D0D8', fin: '#4A5A60' }
  },
  coho_salmon: {
    id: 'coho_salmon', name: 'Coho Salmon', scientific: 'Oncorhynchus kisutch',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Oncorhynchus%20kisutch' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Oncorhynchus+kisutch' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Oncorhynchus_kisutch.jpeg/500px-Oncorhynchus_kisutch.jpeg',
    quizImage: '',
    features: [
      'Silver body with dark back',
      'Black spots on back and UPPER lobe of tail only',
      'White gum line (light mouth)',
      'Smaller than chinook salmon',
      'Males develop hooked jaw (kype) when spawning',
      'Adipose fin present'
    ],
    keyFeature: 'Silver salmon with spots only on upper tail lobe and white gum line',
    habitat: 'Lake Erie; spawns in tributaries in fall',
    size: '20-28 inches typical',
    funFact: 'Coho salmon can be distinguished from chinook by checking the gum line: coho have white gums, chinook have black. Coho were once common in Lake Erie but numbers have declined.',
    colors: { primary: '#5A6878', secondary: '#6A7888', belly: '#C8D0D8', fin: '#4A5868' }
  },
  rainbow_smelt: {
    id: 'rainbow_smelt', name: 'Rainbow Smelt', scientific: 'Osmerus mordax',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Osmerus%20mordax' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Osmerus+mordax' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Osmerus_mordax.jpg/500px-Osmerus_mordax.jpg',
    quizImage: '',
    features: [
      'Small, slender, elongated body',
      'Translucent silver-green coloring',
      'Large mouth with prominent teeth for size',
      'Adipose fin present',
      'Iridescent purple and pink sheen on sides',
      'Forked tail'
    ],
    keyFeature: 'Small silvery fish with iridescent sheen, large teeth, and adipose fin',
    habitat: 'Deep open waters of Lake Erie; comes to shore to spawn',
    size: '6-8 inches typical',
    funFact: 'Rainbow smelt smell like cucumbers when freshly caught! They are an invasive forage fish in Lake Erie that provide food for walleye, trout, and other predators.',
    colors: { primary: '#88A098', secondary: '#A0B8B0', belly: '#D0D8D0', fin: '#708880' }
  },
  gizzard_shad: {
    id: 'gizzard_shad', name: 'Gizzard Shad', scientific: 'Dorosoma cepedianum',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Dorosoma%20cepedianum' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Dorosoma+cepedianum' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gizzard_shad.jpg/500px-Gizzard_shad.jpg',
    quizImage: '',
    features: [
      'Deep, laterally compressed silver body',
      'Last ray of dorsal fin extended into long filament',
      'Dark spot behind gill cover (especially young fish)',
      'Subterminal (downward-pointing) mouth with no teeth',
      'Blunt, rounded snout',
      'Deeply forked tail'
    ],
    keyFeature: 'Silver deep body with trailing dorsal filament and dark shoulder spot',
    habitat: 'Lakes, reservoirs, rivers; extremely abundant in Ohio',
    size: '8-14 inches typical',
    funFact: 'Gizzard shad are the most abundant fish in many Ohio lakes. They have a gizzard-like stomach that grinds food, just like a bird. They are critical forage for game fish.',
    colors: { primary: '#7888A0', secondary: '#90A0B8', belly: '#D0D8E0', fin: '#607088' }
  },
  alewife: {
    id: 'alewife', name: 'Alewife', scientific: 'Alosa pseudoharengus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Alosa%20pseudoharengus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Alosa+pseudoharengus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Alewife.jpg/500px-Alewife.jpg',
    quizImage: '',
    features: [
      'Slender, laterally compressed body',
      'Large eye relative to head size',
      'Silver body with grayish-green back',
      'Single dark spot behind gill cover',
      'Saw-toothed (serrated) belly edge (scutes)',
      'Forked tail'
    ],
    keyFeature: 'Slender herring with large eye, single dark shoulder spot, and serrated belly',
    habitat: 'Lake Erie open waters; invasive from Atlantic coast',
    size: '5-9 inches typical',
    funFact: 'Alewife are invasive in the Great Lakes. They occasionally die in massive numbers that wash up on beaches. They are an important forage fish for salmon and trout.',
    colors: { primary: '#6878A0', secondary: '#8090B0', belly: '#D0D8E8', fin: '#586888' }
  },
  skipjack_herring: {
    id: 'skipjack_herring', name: 'Skipjack Herring', scientific: 'Alosa chrysochloris',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Alosa%20chrysochloris' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Alosa+chrysochloris' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Skipjack_herring_fish_alosa_chrysochloris.jpg/500px-Skipjack_herring_fish_alosa_chrysochloris.jpg',
    quizImage: '',
    features: [
      'Elongated, compressed silver body',
      'Bluish-green back with brilliant silver sides',
      'Large mouth with projecting lower jaw',
      'No dark spot behind gill cover',
      'Deeply forked tail',
      'Serrated belly (scutes like shad)'
    ],
    keyFeature: 'Silver herring with projecting lower jaw and no shoulder spot',
    habitat: 'Ohio River and large tributaries; open water near surface',
    size: '12-16 inches typical',
    funFact: 'Skipjack herring are named for their habit of leaping out of the water while feeding. They are excellent cut bait for catching catfish and are found mainly in the Ohio River.',
    colors: { primary: '#6080A0', secondary: '#78A0B8', belly: '#D8E0E8', fin: '#507088' }
  },
  mooneye: {
    id: 'mooneye', name: 'Mooneye', scientific: 'Hiodon tergisus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Hiodon%20tergisus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Hiodon+tergisus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Hiodon_tergisus.jpg/500px-Hiodon_tergisus.jpg',
    quizImage: '',
    features: [
      'Laterally compressed silver body',
      'Very large eye with golden iris',
      'Dorsal fin starts in FRONT of anal fin origin',
      'No adipose fin',
      'Sharply forked tail',
      'Distinct keel along belly'
    ],
    keyFeature: 'Large-eyed silver fish with dorsal fin starting ahead of anal fin',
    habitat: 'Large rivers and Lake Erie; prefers clear water with current',
    size: '10-14 inches typical',
    funFact: 'Mooneyes are named for their huge, reflective eyes. They are often confused with shad but lack the serrated belly and have a more streamlined body.',
    colors: { primary: '#8898A8', secondary: '#A0B0C0', belly: '#D8E0E8', fin: '#708090' }
  },
  white_sucker: {
    id: 'white_sucker', name: 'White Sucker', scientific: 'Catostomus commersonii',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Catostomus%20commersonii' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Catostomus+commersonii' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Catostomus_commersonii.jpg/500px-Catostomus_commersonii.jpg',
    quizImage: '',
    features: [
      'Cylindrical body, round in cross-section',
      'Downward-pointing sucker mouth with fleshy lips',
      'Olive-brown back fading to white belly',
      'No barbels',
      'Forked tail',
      'Scales get larger toward rear of body'
    ],
    keyFeature: 'Olive-brown cylindrical fish with downward sucker mouth and no barbels',
    habitat: 'Streams, rivers, lakes; one of most common fish in Ohio',
    size: '12-18 inches typical',
    funFact: 'White suckers are one of the first fish to make spawning runs in spring. They crowd into small streams by the hundreds, often before the ice is fully melted.',
    colors: { primary: '#6B6040', secondary: '#8B8060', belly: '#D8D0B8', fin: '#5A5038' }
  },
  northern_hog_sucker: {
    id: 'northern_hog_sucker', name: 'Northern Hog Sucker', scientific: 'Hypentelium nigricans',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Hypentelium%20nigricans' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Hypentelium+nigricans' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Hypentelium_nigricans.jpg/500px-Hypentelium_nigricans.jpg',
    quizImage: '',
    features: [
      'Large, concave head (squared-off/boxy look)',
      'Dark saddle marks across back (3-4 saddles)',
      'Widely spaced eyes on top of head',
      'Large fleshy lips pointing downward',
      'Brown-olive with mottled/banded pattern',
      'Often rests on stream bottom with pectoral fins spread'
    ],
    keyFeature: 'Boxy concave head with dark saddle marks and widely spaced eyes',
    habitat: 'Clear, rocky riffles of streams and rivers',
    size: '8-14 inches typical',
    funFact: 'Northern hog suckers use their large fleshy lips to vacuum invertebrates from between rocks. Their boxy head shape is unlike any other Ohio fish and makes them easy to identify.',
    colors: { primary: '#6B5838', secondary: '#8B7858', belly: '#C8B890', fin: '#5A4830' }
  },
  spotted_sucker: {
    id: 'spotted_sucker', name: 'Spotted Sucker', scientific: 'Minytrema melanops',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Minytrema%20melanops' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Minytrema+melanops' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/The_fishes_of_North_and_Middle_America_%28Pl._XXXVI%29_%287983312822%29.jpg/500px-The_fishes_of_North_and_Middle_America_%28Pl._XXXVI%29_%287983312822%29.jpg',
    quizImage: '',
    features: [
      'Olive-brown body with rows of dark spots',
      'Each scale has a dark spot at its base creating parallel rows',
      'Subterminal sucker mouth',
      'Lateral line absent or incomplete',
      'Dark olive back fading to lighter sides',
      'Forked tail'
    ],
    keyFeature: 'Sucker with parallel rows of dark spots, one at base of each scale',
    habitat: 'Pools of clear streams and rivers over sand or gravel',
    size: '10-16 inches typical',
    funFact: 'Spotted suckers are one of the easiest suckers to identify because of their distinctive rows of spots. The spots are actually at the base of each scale, creating neat parallel lines.',
    colors: { primary: '#6B6038', secondary: '#8B8058', belly: '#C8C0A0', fin: '#5A5030' }
  },
  creek_chubsucker: {
    id: 'creek_chubsucker', name: 'Creek Chubsucker', scientific: 'Erimyzon oblongus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Erimyzon%20oblongus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Erimyzon+oblongus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Erimyzon_oblongus.jpg/500px-Erimyzon_oblongus.jpg',
    quizImage: '',
    features: [
      'Small, chubby sucker with no lateral line',
      'Olive-green to brown body',
      'Young fish have a bold dark lateral stripe',
      'Rounded tail (not forked, unlike most suckers)',
      'Subterminal mouth',
      'Dorsal fin with rounded edge'
    ],
    keyFeature: 'Small round-tailed sucker with no lateral line; young have dark stripe',
    habitat: 'Small streams and headwaters with sand or gravel bottoms',
    size: '6-10 inches typical',
    funFact: 'Creek chubsuckers are unusual among suckers because they have a rounded tail instead of a forked one. Young fish look completely different from adults with their bold stripe.',
    colors: { primary: '#5A5830', secondary: '#707040', belly: '#C0B890', fin: '#4A4828' }
  },
  lake_chubsucker: {
    id: 'lake_chubsucker', name: 'Lake Chubsucker', scientific: 'Erimyzon sucetta',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Erimyzon%20sucetta' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Erimyzon+sucetta' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Erimyzon_sucetta.jpg/500px-Erimyzon_sucetta.jpg',
    quizImage: '',
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
    colors: { primary: '#5A6030', secondary: '#707840', belly: '#C0C090', fin: '#4A5028' }
  },
  quillback: {
    id: 'quillback', name: 'Quillback', scientific: 'Carpiodes cyprinus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Carpiodes%20cyprinus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Carpiodes+cyprinus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Carpiodes_cyprinus.jpg/500px-Carpiodes_cyprinus.jpg',
    quizImage: '',
    features: [
      'Deep, laterally compressed silver body',
      'First ray of dorsal fin extremely long (like a quill)',
      'Small, downward-pointing sucker mouth',
      'No barbels (unlike carp)',
      'Large silver scales',
      'Forked tail'
    ],
    keyFeature: 'Deep silver body with very long first dorsal ray (the quill)',
    habitat: 'Rivers, lakes, reservoirs; slow to moderate current',
    size: '15-22 inches typical',
    funFact: 'Quillback are often confused with carp, but they have no barbels and a small sucker mouth. The long first dorsal ray that gives them their name can be as long as the entire dorsal fin.',
    colors: { primary: '#8898A0', secondary: '#A0B0B8', belly: '#D0D8E0', fin: '#708088' }
  },
  highfin_carpsucker: {
    id: 'highfin_carpsucker', name: 'Highfin Carpsucker', scientific: 'Carpiodes velifer',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Carpiodes%20velifer' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Carpiodes+velifer' }
    ],
    image: 'https://static.inaturalist.org/photos/454315141/medium.jpeg',
    quizImage: '',
    features: [
      'Deep, compressed silver body',
      'Very tall dorsal fin (first rays extremely elongated)',
      'Small nipple-like projection on lower lip',
      'Subterminal sucker mouth',
      'Silver scales',
      'Forked tail'
    ],
    keyFeature: 'Silver carpsucker with exceptionally tall dorsal fin and nipple on lower lip',
    habitat: 'Large rivers with moderate current, pools',
    size: '12-18 inches typical',
    funFact: 'Highfin carpsuckers have the tallest dorsal fin of the carpsucker group. They can be distinguished from quillback by a small nipple-like projection on the lower lip.',
    colors: { primary: '#8898A0', secondary: '#A0B0B8', belly: '#D0D8E0', fin: '#708088' }
  },
  golden_redhorse: {
    id: 'golden_redhorse', name: 'Golden Redhorse', scientific: 'Moxostoma erythrurum',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Moxostoma%20erythrurum' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Moxostoma+erythrurum' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Moxostoma_erythrurum.jpg/500px-Moxostoma_erythrurum.jpg',
    quizImage: '',
    features: [
      'Golden-olive body color',
      'Distinctly red or orange tail fin',
      'Sucker mouth with fleshy plicate (grooved) lips',
      'No dark lateral stripe',
      'Forked red-orange tail',
      'Round cross-section body'
    ],
    keyFeature: 'Golden-olive sucker with bright red-orange tail fin',
    habitat: 'Streams and rivers with moderate current over gravel',
    size: '12-18 inches typical',
    funFact: 'Golden redhorse are the most common redhorse species in Ohio. Their orange-red tail fin makes them one of the more attractive sucker species.',
    colors: { primary: '#8B7830', secondary: '#A89048', belly: '#D8C888', fin: '#C06020' }
  },
  silver_redhorse: {
    id: 'silver_redhorse', name: 'Silver Redhorse', scientific: 'Moxostoma anisurum',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Moxostoma%20anisurum' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Moxostoma+anisurum' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Moxostoma_anisurum.jpg/500px-Moxostoma_anisurum.jpg',
    quizImage: '',
    features: [
      'Silver to olive body',
      'Large scales',
      'V-shaped lower lip (key ID feature)',
      'Paler fins than other redhorse',
      'Subterminal sucker mouth',
      'Forked tail'
    ],
    keyFeature: 'Silvery redhorse with distinctive V-shaped lower lip',
    habitat: 'Large streams and rivers with moderate current',
    size: '15-22 inches typical',
    funFact: 'Silver redhorse can be identified by their unique V-shaped lower lip, which distinguishes them from other redhorse species that have straighter or U-shaped lips.',
    colors: { primary: '#808878', secondary: '#98A090', belly: '#D0D8C8', fin: '#687068' }
  },
  black_redhorse: {
    id: 'black_redhorse', name: 'Black Redhorse', scientific: 'Moxostoma duquesnei',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Moxostoma%20duquesnei' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Moxostoma+duquesnei' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/BlackRedHorseSucker.jpg/500px-BlackRedHorseSucker.jpg',
    quizImage: '',
    features: [
      'Olive to dark bronze body',
      'Dark-edged scales giving a cross-hatched look',
      'Relatively small head',
      'Sucker mouth with plicate (grooved) lips',
      'Slate-gray to olive fins (not bright red)',
      'Forked tail'
    ],
    keyFeature: 'Dark-edged scales creating cross-hatch pattern and dusky (not red) fins',
    habitat: 'Clear streams and rivers over gravel; moderate current',
    size: '12-18 inches typical',
    funFact: 'Black redhorse get their name not from their body color but from their dark-edged scales and dusky fins. They prefer cleaner water than many other sucker species.',
    colors: { primary: '#5A5838', secondary: '#707048', belly: '#C0B890', fin: '#4A4830' }
  },
  shorthead_redhorse: {
    id: 'shorthead_redhorse', name: 'Shorthead Redhorse', scientific: 'Moxostoma macrolepidotum',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Moxostoma%20macrolepidotum' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Moxostoma+macrolepidotum' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Moxostoma_macrolepidotum.jpg/500px-Moxostoma_macrolepidotum.jpg',
    quizImage: '',
    features: [
      'Olive-gold body with red-orange tail and dorsal fin',
      'Relatively short head compared to body',
      'Straight rear edge on dorsal fin',
      'Red-orange lower fins',
      'Plicate (grooved) lips',
      'Forked tail'
    ],
    keyFeature: 'Short head relative to body with bright red-orange fins and straight dorsal edge',
    habitat: 'Large streams and rivers with rocky or gravelly bottoms',
    size: '14-20 inches typical',
    funFact: 'Shorthead redhorse are common in Lake Erie tributaries. Their short head relative to body size helps distinguish them from other redhorse species.',
    colors: { primary: '#7B7030', secondary: '#988848', belly: '#D0C088', fin: '#C06028' }
  },
  river_redhorse: {
    id: 'river_redhorse', name: 'River Redhorse', scientific: 'Moxostoma carinatum',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Moxostoma%20carinatum' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Moxostoma+carinatum' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Moxostoma_carinatum_153150190.jpg/500px-Moxostoma_carinatum_153150190.jpg',
    quizImage: '',
    features: [
      'Large, robust sucker',
      'Heavy pharyngeal teeth (molar-like for crushing)',
      'Olive-bronze body',
      'Large head with thick lips',
      'Red-orange fins',
      'Can reach over 10 pounds'
    ],
    keyFeature: 'Large robust sucker with heavy molar-like pharyngeal teeth',
    habitat: 'Large clean rivers with rocky bottoms and moderate current',
    size: '18-26 inches typical',
    funFact: 'River redhorse have massive molar-like teeth in their throat that they use to crush snail and mussel shells. They are one of the largest and most impressive sucker species.',
    colors: { primary: '#7B6830', secondary: '#988048', belly: '#D0C088', fin: '#B85820' }
  },
  smallmouth_redhorse: {
    id: 'smallmouth_redhorse', name: 'Smallmouth Redhorse', scientific: 'Moxostoma breviceps',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Moxostoma%20breviceps' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Moxostoma+breviceps' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Smallmouth_Redhorse%2C_Kentucky%2C_US_imported_from_iNaturalist_photo_423666444.jpg/500px-Smallmouth_Redhorse%2C_Kentucky%2C_US_imported_from_iNaturalist_photo_423666444.jpg',
    quizImage: '',
    features: [
      'Small mouth even for a sucker',
      'Silver to olive body',
      'Short, U-shaped lower lip',
      'Falcate (deeply curved) dorsal fin',
      'Red-orange lower fins',
      'Compressed body shape'
    ],
    keyFeature: 'Small-mouthed sucker with falcate dorsal fin and short U-shaped lower lip',
    habitat: 'Large streams and rivers; Lake Erie tributaries',
    size: '10-16 inches typical',
    funFact: 'Smallmouth redhorse have the smallest mouth of any redhorse species. Their falcate (deeply curved) dorsal fin is a good identification feature.',
    colors: { primary: '#708068', secondary: '#889880', belly: '#C8D0C0', fin: '#C06030' }
  },
  greater_redhorse: {
    id: 'greater_redhorse', name: 'Greater Redhorse', scientific: 'Moxostoma valenciennesi',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Moxostoma%20valenciennesi' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Moxostoma+valenciennesi' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Moxostoma_valenciennesi.jpg/500px-Moxostoma_valenciennesi.jpg',
    quizImage: '',
    features: [
      'Very large sucker species',
      'Olive-gold body with large scales',
      'Very thick, plicate (grooved) lips',
      'Red-orange fins',
      'Large head and robust body',
      'Forked tail'
    ],
    keyFeature: 'Very large sucker with extremely thick plicate lips and large scales',
    habitat: 'Large clean rivers; uncommon in Ohio',
    size: '18-28 inches typical',
    funFact: 'Greater redhorse are one of the rarest sucker species in Ohio. They require clean rivers with good water quality and are indicators of stream health.',
    colors: { primary: '#7B7030', secondary: '#988848', belly: '#D0C088', fin: '#C06028' }
  },
  bigmouth_buffalo: {
    id: 'bigmouth_buffalo', name: 'Bigmouth Buffalo', scientific: 'Ictiobus cyprinellus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Ictiobus%20cyprinellus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Ictiobus+cyprinellus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Ictiobus_cyprinellus.jpg/500px-Ictiobus_cyprinellus.jpg',
    quizImage: '',
    features: [
      'Very deep, compressed body (hump-backed)',
      'Large terminal mouth (facing forward, not downward)',
      'Olive-brown to bronze color',
      'No barbels',
      'Long dorsal fin',
      'Thin, smooth lips (not plicate like redhorse)'
    ],
    keyFeature: 'Deep-bodied buffalo with forward-facing large mouth and thin lips',
    habitat: 'Large rivers, reservoirs, floodplain lakes',
    size: '20-30 inches typical, can exceed 50 pounds',
    funFact: 'Bigmouth buffalo are filter feeders that can live over 100 years, making them one of the longest-lived freshwater fish in North America! One was aged at 112 years.',
    colors: { primary: '#5A5030', secondary: '#706840', belly: '#B8A878', fin: '#4A4028' }
  },
  smallmouth_buffalo: {
    id: 'smallmouth_buffalo', name: 'Smallmouth Buffalo', scientific: 'Ictiobus bubalus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Ictiobus%20bubalus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Ictiobus+bubalus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Ictiobus_bubalus.jpg/500px-Ictiobus_bubalus.jpg',
    quizImage: '',
    features: [
      'Deep, compressed body similar to bigmouth buffalo',
      'Small, downward-pointing subterminal mouth',
      'Olive-brown to bronze body',
      'Thick, grooved lips',
      'High-backed body profile',
      'Long dorsal fin'
    ],
    keyFeature: 'Deep-bodied buffalo with small downward-pointing mouth and thick lips',
    habitat: 'Large rivers, pools with moderate current',
    size: '18-25 inches typical',
    funFact: 'Smallmouth buffalo are bottom feeders that use their small downward-facing mouth to vacuum up invertebrates. Unlike bigmouth buffalo, they cannot filter feed.',
    colors: { primary: '#5A5838', secondary: '#706848', belly: '#B8B080', fin: '#4A4830' }
  },
  black_buffalo: {
    id: 'black_buffalo', name: 'Black Buffalo', scientific: 'Ictiobus niger',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Ictiobus%20niger' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Ictiobus+niger' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Ictiobus_niger.jpg/500px-Ictiobus_niger.jpg',
    quizImage: '',
    features: [
      'Deep body but less compressed than other buffalo',
      'Dark olive to blackish color',
      'Subterminal mouth',
      'Thick lips (intermediate between big and smallmouth)',
      'More cylindrical body than other buffalo species',
      'Long dorsal fin'
    ],
    keyFeature: 'Darkest buffalo species with thicker, more cylindrical body',
    habitat: 'Large rivers, deep pools; Ohio River system',
    size: '18-26 inches typical',
    funFact: 'Black buffalo are the least common of the three buffalo species in Ohio. They are darker and more cylindrical than their relatives and prefer deeper river pools.',
    colors: { primary: '#3A3828', secondary: '#4A4838', belly: '#908878', fin: '#2A2820' }
  },
  blue_sucker: {
    id: 'blue_sucker', name: 'Blue Sucker', scientific: 'Cycleptus elongatus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Cycleptus%20elongatus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Cycleptus+elongatus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Blue_Sucker.jpg/500px-Blue_Sucker.jpg',
    quizImage: '',
    features: [
      'Elongated, streamlined body (unusual for a sucker)',
      'Blue-gray to dark blue body color',
      'Small head relative to body',
      'Large, sickle-shaped dorsal fin',
      'Subterminal sucker mouth with fleshy lips',
      'Deeply forked tail'
    ],
    keyFeature: 'Elongated blue-gray sucker with small head and sickle-shaped dorsal fin',
    habitat: 'Large rivers with swift current over rocky bottoms; Ohio River',
    size: '20-30 inches typical',
    funFact: 'Blue suckers are the most streamlined of all suckers, adapted for life in fast current. They are threatened or endangered in many states due to dam construction.',
    colors: { primary: '#4A5A78', secondary: '#5A6A88', belly: '#A8B0C0', fin: '#3A4A68' }
  },
  central_stoneroller: {
    id: 'central_stoneroller', name: 'Central Stoneroller', scientific: 'Campostoma anomalum',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Campostoma%20anomalum' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Campostoma+anomalum' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Campostoma_anomalum.JPG/500px-Campostoma_anomalum.JPG',
    quizImage: '',
    features: [
      'Rounded snout overhanging mouth',
      'Hard cartilaginous ridge on lower jaw for scraping algae',
      'Olive-brown body with dark scales',
      'Breeding males develop orange fins and tubercles',
      'Dark lateral stripe',
      'Subterminal mouth'
    ],
    keyFeature: 'Round snout with hard scraping ridge on lower jaw for eating algae',
    habitat: 'Rocky riffles of streams; very common in Ohio',
    size: '4-7 inches typical',
    funFact: 'Central stonerollers are ecosystem engineers! They scrape algae off rocks, creating clean feeding areas used by other fish. Breeding males develop impressive horny tubercles on their heads.',
    colors: { primary: '#6B6040', secondary: '#8B8060', belly: '#C8C0A0', fin: '#5A5038' }
  },
  creek_chub: {
    id: 'creek_chub', name: 'Creek Chub', scientific: 'Semotilus atromaculatus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Semotilus%20atromaculatus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Semotilus+atromaculatus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Semotilus_atromaculatus.jpg/500px-Semotilus_atromaculatus.jpg',
    quizImage: '',
    features: [
      'Large minnow with robust body',
      'Dark spot at base of dorsal fin',
      'Dark lateral stripe especially on young fish',
      'Large mouth for a minnow',
      'Breeding males develop pink/rose coloring and head tubercles',
      'Olive-brown back with silver sides'
    ],
    keyFeature: 'Large minnow with dark spot at dorsal fin base and big mouth',
    habitat: 'Small to medium streams; one of most common stream fish',
    size: '5-8 inches typical, can reach 12',
    funFact: 'Creek chub males build nests by carrying stones in their mouths to create gravel mounds. A single nest mound can contain thousands of pebbles!',
    colors: { primary: '#6B6840', secondary: '#8B8858', belly: '#C8C8A0', fin: '#5A5838' }
  },
  golden_shiner: {
    id: 'golden_shiner', name: 'Golden Shiner', scientific: 'Notemigonus crysoleucas',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Notemigonus%20crysoleucas' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Notemigonus+crysoleucas' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Notemigonus_crysoleucas.jpg/500px-Notemigonus_crysoleucas.jpg',
    quizImage: '',
    features: [
      'Deep, laterally compressed body',
      'Golden to olive coloring',
      'Strongly decurved lateral line',
      'Fleshy keel on belly between pelvic and anal fins',
      'Small upturned mouth',
      'Forked tail'
    ],
    keyFeature: 'Deep-bodied golden minnow with strongly decurved lateral line and belly keel',
    habitat: 'Ponds, lakes, quiet pools; prefers vegetated areas',
    size: '5-8 inches typical, can reach 12',
    funFact: 'Golden shiners are the most popular baitfish sold in the US. They are also one of the largest minnow species in Ohio and can form massive schools.',
    colors: { primary: '#8B8530', secondary: '#A8A048', belly: '#D8D080', fin: '#7A7428' }
  },
  fathead_minnow: {
    id: 'fathead_minnow', name: 'Fathead Minnow', scientific: 'Pimephales promelas',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Pimephales%20promelas' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Pimephales+promelas' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Fathead_minnow.jpg/500px-Fathead_minnow.jpg',
    quizImage: '',
    features: [
      'Small, stout body',
      'Blunt, rounded head',
      'Dark olive body with a dark lateral stripe',
      'Breeding males develop dark head with fatty pad and tubercles',
      'First dorsal ray is short and thick (splint-like)',
      'Incomplete lateral line'
    ],
    keyFeature: 'Small stout minnow with blunt head; breeding males have dark fat pad on head',
    habitat: 'Ponds, ditches, quiet streams; very tolerant of poor conditions',
    size: '2-3 inches typical',
    funFact: 'Fathead minnows are extremely popular bait and feeder fish. Breeding males develop a dark spongy fat pad on their heads and tubercles, looking completely different from females.',
    colors: { primary: '#6B6848', secondary: '#8B8868', belly: '#B8B098', fin: '#5A5840' }
  },
  bluntnose_minnow: {
    id: 'bluntnose_minnow', name: 'Bluntnose Minnow', scientific: 'Pimephales notatus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Pimephales%20notatus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Pimephales+notatus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Pimephales_notatus_-_Stumpfnasen-Zwergd%C3%B6bel_192957406.jpg/500px-Pimephales_notatus_-_Stumpfnasen-Zwergd%C3%B6bel_192957406.jpg',
    quizImage: '',
    features: [
      'Small, slender body',
      'Blunt, rounded snout overhanging mouth',
      'Dark lateral stripe from snout to tail',
      'Distinct dark spot at tail base',
      'Cross-hatched scale pattern on back',
      'Subterminal mouth'
    ],
    keyFeature: 'Small minnow with dark lateral stripe, blunt snout, and spot at tail base',
    habitat: 'Streams, rivers, lake margins; extremely common in Ohio',
    size: '2-4 inches typical',
    funFact: 'Bluntnose minnows are arguably the most common fish in Ohio streams. Males guard eggs that are laid on the undersides of flat rocks.',
    colors: { primary: '#7A7850', secondary: '#989668', belly: '#C8C0A0', fin: '#686848' }
  },
  common_shiner: {
    id: 'common_shiner', name: 'Common Shiner', scientific: 'Luxilus cornutus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Luxilus%20cornutus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Luxilus+cornutus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Common_shiner.jpg/500px-Common_shiner.jpg',
    quizImage: '',
    features: [
      'Moderately deep, compressed body',
      'Silver body with olive back',
      'Large scales easily visible',
      'Breeding males turn rosy-pink with tubercles on head',
      'Mouth reaches to front of eye',
      'Forked tail'
    ],
    keyFeature: 'Silver minnow with large visible scales; breeding males turn rosy pink',
    habitat: 'Small to medium streams, often in pools with moderate current',
    size: '4-7 inches typical',
    funFact: 'Common shiners are one of the showiest minnows when breeding. Males develop brilliant rosy-pink bodies and build nests in gravel over which many other minnow species also spawn.',
    colors: { primary: '#7A8070', secondary: '#909888', belly: '#C8D0C0', fin: '#687060' }
  },
  emerald_shiner: {
    id: 'emerald_shiner', name: 'Emerald Shiner', scientific: 'Notropis atherinoides',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Notropis%20atherinoides' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Notropis+atherinoides' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Emerald_shiner.jpg/500px-Emerald_shiner.jpg',
    quizImage: '',
    features: [
      'Slender, streamlined body',
      'Bright silver with emerald-green sheen on back',
      'Large eye relative to head',
      'Translucent body (can see through it when alive)',
      'Forked tail',
      'Compressed body shape'
    ],
    keyFeature: 'Slender translucent silver minnow with emerald-green sheen on back',
    habitat: 'Lake Erie, large rivers; open water in large schools',
    size: '2-4 inches typical',
    funFact: 'Emerald shiners are the most important forage fish in Lake Erie, forming massive schools that feed walleye, perch, and other game fish. They are also top-tier live bait.',
    colors: { primary: '#508868', secondary: '#68A080', belly: '#D0D8D0', fin: '#408058' }
  },
  spotfin_shiner: {
    id: 'spotfin_shiner', name: 'Spotfin Shiner', scientific: 'Cyprinella spiloptera',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Cyprinella%20spiloptera' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Cyprinella+spiloptera' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Cyprinella_spiloptera_404697520.jpg/500px-Cyprinella_spiloptera_404697520.jpg',
    quizImage: '',
    features: [
      'Steel-blue sheen on back and sides',
      'Dark blotch on rear of dorsal fin',
      'Compressed, moderately deep body',
      'Silver with blue highlights',
      'Diamond-shaped scale pattern',
      'Forked tail'
    ],
    keyFeature: 'Steel-blue shiner with distinctive dark blotch on back of dorsal fin',
    habitat: 'Rocky pools and runs of streams; moderate to large streams',
    size: '3-4 inches typical',
    funFact: 'Spotfin shiners get their name from the dark blotch on the back of the dorsal fin. Breeding males develop brilliant blue coloring that rivals any tropical fish.',
    colors: { primary: '#5068A0', secondary: '#6880B0', belly: '#C8D0D8', fin: '#405890' }
  },
  striped_shiner: {
    id: 'striped_shiner', name: 'Striped Shiner', scientific: 'Luxilus chrysocephalus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Luxilus%20chrysocephalus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Luxilus+chrysocephalus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Luxilus_chrysocephalus_67374238.jpg/500px-Luxilus_chrysocephalus_67374238.jpg',
    quizImage: '',
    features: [
      'Large, deep-bodied shiner',
      'Dark crescent-shaped markings on scales creating striped look',
      'Silver body with olive back',
      'Breeding males develop pink-rose body and blue head',
      'Large scales',
      'Forked tail'
    ],
    keyFeature: 'Large shiner with crescent scale marks; breeding males have pink body and blue head',
    habitat: 'Pools of small to medium streams over gravel',
    size: '4-7 inches typical',
    funFact: 'Striped shiners are among the most beautiful minnows when spawning. Males develop a stunning combination of pink body, blue head, and orange fins.',
    colors: { primary: '#7A8070', secondary: '#909888', belly: '#C8D0C0', fin: '#687060' }
  },
  hornyhead_chub: {
    id: 'hornyhead_chub', name: 'Hornyhead Chub', scientific: 'Nocomis biguttatus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Nocomis%20biguttatus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Nocomis+biguttatus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Horned_Chub.JPG/500px-Horned_Chub.JPG',
    quizImage: '',
    features: [
      'Large, robust minnow',
      'Red-orange spot behind eye',
      'Olive-brown body',
      'Breeding males develop large tubercles (horns) on head',
      'Dark spot at dorsal fin base (faint)',
      'Subterminal mouth with small barbel at corner'
    ],
    keyFeature: 'Robust minnow with red-orange spot behind eye; breeding males have head tubercles',
    habitat: 'Pools of clear streams over gravel; moderate current',
    size: '5-8 inches typical',
    funFact: 'Hornyhead chub males build large gravel nests and develop impressive horn-like tubercles on their heads during spawning. Many other minnow species use their nests to spawn.',
    colors: { primary: '#6B6040', secondary: '#8B8060', belly: '#C8C0A0', fin: '#5A5038' }
  },
  river_chub: {
    id: 'river_chub', name: 'River Chub', scientific: 'Nocomis micropogon',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Nocomis%20micropogon' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Nocomis+micropogon' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/River_chub_-_Nocomis_micropogon.jpg/500px-River_chub_-_Nocomis_micropogon.jpg',
    quizImage: '',
    features: [
      'Large, robust minnow (one of the biggest)',
      'Olive-brown body with large scales',
      'Breeding males develop pink coloring and large head tubercles',
      'Small barbel at corner of mouth',
      'Large mouth for a minnow',
      'Forked tail'
    ],
    keyFeature: 'Very large robust minnow with barbel at mouth corner; males build huge nests',
    habitat: 'Streams and rivers with gravel or rubble bottoms',
    size: '6-10 inches typical, can reach 12',
    funFact: 'River chub build the largest nests of any minnow - massive gravel mounds up to 3 feet across! These nests become community spawning sites used by many other species.',
    colors: { primary: '#6B6840', secondary: '#8B8858', belly: '#C8C8A0', fin: '#5A5838' }
  },
  rosyface_shiner: {
    id: 'rosyface_shiner', name: 'Rosyface Shiner', scientific: 'Notropis rubellus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Notropis%20rubellus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Notropis+rubellus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Notropis_rubellus.jpg/500px-Notropis_rubellus.jpg',
    quizImage: '',
    features: [
      'Slender, streamlined body',
      'Silver with olive back',
      'Breeding males develop bright rosy-red face and head',
      'Large eye',
      'No lateral stripe or very faint',
      'Forked tail'
    ],
    keyFeature: 'Slender shiner whose breeding males have bright rosy-red head and face',
    habitat: 'Rocky riffles of clear streams; sensitive to pollution',
    size: '2-4 inches typical',
    funFact: 'Rosyface shiners are excellent water quality indicators - they need clean, clear, well-oxygenated streams to survive. Breeding males develop a stunning rosy-red head.',
    colors: { primary: '#708878', secondary: '#88A090', belly: '#C8D0C8', fin: '#607068' }
  },
  sand_shiner: {
    id: 'sand_shiner', name: 'Sand Shiner', scientific: 'Notropis stramineus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Notropis%20stramineus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Notropis+stramineus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Notropis_stramineus.jpg/500px-Notropis_stramineus.jpg',
    quizImage: '',
    features: [
      'Small, slender body',
      'Pale straw to olive color',
      'Faint lateral stripe often with zig-zag on front',
      'Small mouth',
      'Somewhat translucent',
      'Forked tail'
    ],
    keyFeature: 'Small pale straw-colored minnow with faint zig-zag lateral stripe',
    habitat: 'Sandy pools and runs of streams; also lake margins',
    size: '2-3 inches typical',
    funFact: 'Sand shiners are named for their preference for sandy-bottomed habitats. They are one of the most widespread minnow species in the central United States.',
    colors: { primary: '#988868', secondary: '#B0A080', belly: '#D8D0B8', fin: '#887858' }
  },
  silverjaw_minnow: {
    id: 'silverjaw_minnow', name: 'Silverjaw Minnow', scientific: 'Ericymba buccata',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Ericymba%20buccata' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Ericymba+buccata' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Ericymba_buccata_-_Gojilynx_-_606630924.jpeg/500px-Ericymba_buccata_-_Gojilynx_-_606630924.jpeg',
    quizImage: '',
    features: [
      'Translucent body',
      'Visible silvery chambers in lower jaw and snout',
      'Pale olive body with silvery lateral stripe',
      'Large head chambers visible through skin',
      'Subterminal mouth',
      'Forked tail'
    ],
    keyFeature: 'Translucent minnow with visible silver chambers in head and jaw',
    habitat: 'Sandy-bottomed streams and pools',
    size: '2-4 inches typical',
    funFact: 'Silverjaw minnows have unique enlarged head canals visible as silvery chambers through their translucent skin. No other minnow has this distinctive feature.',
    colors: { primary: '#889888', secondary: '#A0B0A0', belly: '#D0D8D0', fin: '#708878' }
  },
  western_blacknose_dace: {
    id: 'western_blacknose_dace', name: 'Western Blacknose Dace', scientific: 'Rhinichthys obtusus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Rhinichthys%20obtusus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Rhinichthys+obtusus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Blacknose_dace_-_Rhinichthys_atratulus.jpg/500px-Blacknose_dace_-_Rhinichthys_atratulus.jpg',
    quizImage: '',
    features: [
      'Small, slender body',
      'Bold dark lateral stripe from snout to tail',
      'Small barbel at corner of mouth',
      'Olive-brown above, silver-white below',
      'Rounded snout',
      'Breeding males develop rusty-orange on sides and fins'
    ],
    keyFeature: 'Small dace with bold dark stripe from snout to tail and tiny mouth barbel',
    habitat: 'Rocky riffles of small streams; very common in Ohio',
    size: '2-3 inches typical',
    funFact: 'Western blacknose dace are one of the most common fish in small Ohio streams. The tiny barbel at the corner of the mouth helps distinguish them from similar small minnows.',
    colors: { primary: '#5A5838', secondary: '#707048', belly: '#C0B890', fin: '#4A4830' }
  },
  longnose_dace: {
    id: 'longnose_dace', name: 'Longnose Dace', scientific: 'Rhinichthys cataractae',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Rhinichthys%20cataractae' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Rhinichthys+cataractae' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Longnose_dace.jpg/500px-Longnose_dace.jpg',
    quizImage: '',
    features: [
      'Small, elongated body',
      'Long snout that extends well past upper lip',
      'Small barbel at corner of mouth',
      'Dark olive-brown with mottled pattern',
      'Faint or no lateral stripe',
      'Breeding males develop red-orange on lips and fin bases'
    ],
    keyFeature: 'Elongated dace with distinctly long snout overhanging mouth',
    habitat: 'Swift rocky riffles; well-oxygenated streams',
    size: '3-5 inches typical',
    funFact: 'Longnose dace are adapted for fast current and spend their time on the bottom of swift riffles, using their flattened bodies to resist being swept away.',
    colors: { primary: '#5A5038', secondary: '#706848', belly: '#B8A888', fin: '#4A4030' }
  },
  southern_redbelly_dace: {
    id: 'southern_redbelly_dace', name: 'Southern Redbelly Dace', scientific: 'Chrosomus erythrogaster',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Chrosomus%20erythrogaster' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Chrosomus+erythrogaster' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Chrosomus_erythrogaster.jpg/500px-Chrosomus_erythrogaster.jpg',
    quizImage: '',
    features: [
      'Very small with two dark lateral stripes',
      'Bright red belly (especially breeding males)',
      'Yellow stripe between the two dark lateral bands',
      'Very small scales (almost microscopic)',
      'Rounded fins',
      'Breeding males brilliantly colored red and yellow'
    ],
    keyFeature: 'Tiny minnow with two dark stripes and brilliant red belly',
    habitat: 'Small headwater streams with cool, spring-fed water',
    size: '2-3 inches typical',
    funFact: 'Southern redbelly dace are one of Ohio\'s most beautiful small fish. Breeding males have electric red bellies and bright yellow flanks that rival tropical fish.',
    colors: { primary: '#5A5030', secondary: '#706840', belly: '#D03020', fin: '#4A4028' }
  },
  redside_dace: {
    id: 'redside_dace', name: 'Redside Dace', scientific: 'Clinostomus elongatus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Clinostomus%20elongatus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Clinostomus+elongatus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Clinostomus_elongatus_-_Wilhelma_01.jpg/500px-Clinostomus_elongatus_-_Wilhelma_01.jpg',
    quizImage: '',
    features: [
      'Elongated, streamlined body',
      'Vivid red stripe along side (breeding males)',
      'Large upturned mouth',
      'Olive to gold body',
      'Large eye',
      'Very large mouth for a minnow (extending past eye)'
    ],
    keyFeature: 'Elongated minnow with large upturned mouth and vivid red side stripe',
    habitat: 'Cool, clear headwater streams with overhanging vegetation',
    size: '3-5 inches typical',
    funFact: 'Redside dace are aerial feeders that leap out of the water to catch insects! Their large mouth is adapted for surface and airborne feeding. They are threatened in Ohio.',
    colors: { primary: '#6B7050', secondary: '#808868', belly: '#C8C0A0', fin: '#5A6048' }
  },
  silver_chub: {
    id: 'silver_chub', name: 'Silver Chub', scientific: 'Macrhybopsis storeriana',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Macrhybopsis%20storeriana' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Macrhybopsis+storeriana' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/FMIB_51127_Fall-Fish_or_Silver_Chub.jpeg/500px-FMIB_51127_Fall-Fish_or_Silver_Chub.jpeg',
    quizImage: '',
    features: [
      'Slender, elongated body',
      'Silver body with large eye',
      'Small barbel at corner of mouth',
      'Subterminal mouth',
      'Rounded snout',
      'Forked tail'
    ],
    keyFeature: 'Slender silver minnow with small barbel and large eye',
    habitat: 'Large rivers and Lake Erie; sandy or silty bottoms',
    size: '4-6 inches typical',
    funFact: 'Silver chub are important forage fish in Lake Erie and the Ohio River. They use their small barbels to detect food in murky bottom habitats.',
    colors: { primary: '#8090A0', secondary: '#98A8B8', belly: '#D0D8E0', fin: '#708088' }
  },
  mimic_shiner: {
    id: 'mimic_shiner', name: 'Mimic Shiner', scientific: 'Notropis volucellus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Notropis%20volucellus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Notropis+volucellus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Notropis_volucellus.jpg/500px-Notropis_volucellus.jpg',
    quizImage: '',
    features: [
      'Small, slender body',
      'Pale silver-olive color',
      'Faint lateral stripe',
      'Large eye for body size',
      'Nearly identical to several other shiner species',
      'Forked tail'
    ],
    keyFeature: 'Plain silver shiner that closely resembles several other shiner species',
    habitat: 'Lakes and quiet pools of streams over sand or silt',
    size: '2-3 inches typical',
    funFact: 'Mimic shiners get their name because they look so much like other shiner species that even experts have trouble telling them apart without microscopic examination.',
    colors: { primary: '#88A090', secondary: '#A0B8A8', belly: '#D0D8D0', fin: '#789880' }
  },
  scarlet_shiner: {
    id: 'scarlet_shiner', name: 'Scarlet Shiner', scientific: 'Lythrurus fasciolaris',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Lythrurus%20fasciolaris' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Lythrurus+fasciolaris' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Scarletshinermale.jpg/500px-Scarletshinermale.jpg',
    quizImage: '',
    features: [
      'Moderately deep body',
      'Olive back with silver sides',
      'Breeding males develop bright scarlet-red fins and body',
      'Dark crescent markings on scales',
      'Slightly compressed body',
      'Forked tail'
    ],
    keyFeature: 'Shiner with breeding males showing brilliant scarlet-red coloring',
    habitat: 'Pools of medium streams in southern Ohio',
    size: '3-4 inches typical',
    funFact: 'Scarlet shiners are named for the stunning scarlet-red color that breeding males develop. They are most common in streams of southeastern Ohio.',
    colors: { primary: '#708870', secondary: '#88A088', belly: '#C8D0C0', fin: '#C03030' }
  },
  redfin_shiner: {
    id: 'redfin_shiner', name: 'Redfin Shiner', scientific: 'Lythrurus umbratilis',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Lythrurus%20umbratilis' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Lythrurus+umbratilis' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Lythrurus_umbratilis.JPG/500px-Lythrurus_umbratilis.JPG',
    quizImage: '',
    features: [
      'Deep, compressed body',
      'Steel-blue back and upper sides',
      'Breeding males develop bright red fins',
      'Dark spot at base of dorsal fin',
      'Small upturned mouth',
      'Forked tail'
    ],
    keyFeature: 'Deep-bodied steel-blue shiner with bright red fins on breeding males',
    habitat: 'Quiet pools of streams, backwaters, pond edges',
    size: '2-3 inches typical',
    funFact: 'Redfin shiners lay their eggs in the nests of sunfish and other species, letting the host fish guard their eggs for them - a behavior called nest parasitism.',
    colors: { primary: '#506888', secondary: '#6880A0', belly: '#C0C8D0', fin: '#C03030' }
  },
  suckermouth_minnow: {
    id: 'suckermouth_minnow', name: 'Suckermouth Minnow', scientific: 'Phenacobius mirabilis',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Phenacobius%20mirabilis' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Phenacobius+mirabilis' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Phenacobius_mirabilis_-_Gojilynx_-_606630980.jpeg/500px-Phenacobius_mirabilis_-_Gojilynx_-_606630980.jpeg',
    quizImage: '',
    features: [
      'Elongated body with flattened underside',
      'Fleshy sucker-like mouth on underside of head',
      'Dark lateral stripe',
      'Dark spot at base of tail',
      'Olive-brown body',
      'Flat belly adapted for bottom dwelling'
    ],
    keyFeature: 'Minnow with distinctive fleshy sucker-like mouth on bottom of head',
    habitat: 'Riffles of streams with gravel or rocky bottoms',
    size: '3-4 inches typical',
    funFact: 'Suckermouth minnows are named for their fleshy, downward-facing mouth that resembles a sucker fish. They live on the stream bottom and use this mouth to scrape food from rocks.',
    colors: { primary: '#6B6040', secondary: '#8B8060', belly: '#C8C0A0', fin: '#5A5038' }
  },
  rainbow_darter: {
    id: 'rainbow_darter', name: 'Rainbow Darter', scientific: 'Etheostoma caeruleum',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Etheostoma%20caeruleum' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Etheostoma+caeruleum' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Etheostoma_caeruleum.jpg/500px-Etheostoma_caeruleum.jpg',
    quizImage: '',
    features: [
      'Breeding males brilliantly colored with blue and orange bars',
      'Alternating blue and orange-red vertical bars on sides',
      'Blue anal and pelvic fins on males',
      'Small, elongated body shape',
      'Two dorsal fins',
      'Fan-shaped pectoral fins for perching on rocks'
    ],
    keyFeature: 'Stunningly colorful with alternating blue and orange vertical bars (males)',
    habitat: 'Rocky riffles of clear streams; very common in Ohio',
    size: '2-3 inches typical',
    funFact: 'Rainbow darters are considered one of the most beautiful freshwater fish in North America. Breeding males look like tiny tropical fish with their vivid blue and orange barring.',
    colors: { primary: '#3060A0', secondary: '#D06020', belly: '#C8A060', fin: '#2050A0' }
  },
  fantail_darter: {
    id: 'fantail_darter', name: 'Fantail Darter', scientific: 'Etheostoma flabellare',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Etheostoma%20flabellare' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Etheostoma+flabellare' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Etheostoma_flabellare.jpg/500px-Etheostoma_flabellare.jpg',
    quizImage: '',
    features: [
      'Fan-shaped tail (rounded, not forked)',
      'Brown to olive body with dark bars and mottling',
      'Fleshy knobs on tips of dorsal spines in breeding males',
      'Two dorsal fins (spiny and soft)',
      'Flat head and belly for bottom-dwelling',
      'Brown-olive color provides camouflage'
    ],
    keyFeature: 'Brown darter with fan-shaped tail and fleshy knobs on dorsal spines (males)',
    habitat: 'Rocky riffles of small to medium streams; very common',
    size: '2-3 inches typical',
    funFact: 'Fantail darters get fleshy knobs on the tips of their dorsal spines during breeding. Males guard eggs laid on the undersides of flat rocks, doing "push-ups" to fan water over them.',
    colors: { primary: '#6B5830', secondary: '#8B7850', belly: '#B8A880', fin: '#5A4828' }
  },
  johnny_darter: {
    id: 'johnny_darter', name: 'Johnny Darter', scientific: 'Etheostoma nigrum',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Etheostoma%20nigrum' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Etheostoma+nigrum' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Etheostoma_nigrum.jpg/500px-Etheostoma_nigrum.jpg',
    quizImage: '',
    features: [
      'Small, pale body with dark W- and X-shaped markings',
      'Translucent to straw-colored base',
      'Dark markings form distinctive W and X patterns on sides',
      'Upturned mouth',
      'Two dorsal fins',
      'Very common - found in almost every Ohio stream'
    ],
    keyFeature: 'Pale darter with distinctive W- and X-shaped dark markings on sides',
    habitat: 'Sandy and silty pools of streams; very tolerant and widespread',
    size: '2-3 inches typical',
    funFact: 'Johnny darters are the most common and widespread darter in Ohio. Males turn jet black during breeding season and guard eggs laid upside-down on rock surfaces.',
    colors: { primary: '#887850', secondary: '#A89870', belly: '#C8C0A0', fin: '#786840' }
  },
  greenside_darter: {
    id: 'greenside_darter', name: 'Greenside Darter', scientific: 'Etheostoma blennioides',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Etheostoma%20blennioides' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Etheostoma+blennioides' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Etheostoma_blennioides.jpg/500px-Etheostoma_blennioides.jpg',
    quizImage: '',
    features: [
      'Largest Ohio darter (can reach 6 inches)',
      'Green to olive body with U or V-shaped dark bars on sides',
      'Blunt, rounded snout',
      'Red spots on sides (variable)',
      'Two dorsal fins, the first with green coloring',
      'Sturdy body for a darter'
    ],
    keyFeature: 'Largest darter with green body and U/V-shaped dark marks on sides',
    habitat: 'Rocky riffles of clear streams with moderate current',
    size: '3-5 inches typical, can reach 6',
    funFact: 'Greenside darters are the largest darter species in Ohio. They actually wrap their eggs around plant stems and green algae filaments on rocks, which is unusual for darters.',
    colors: { primary: '#3A6830', secondary: '#4A8040', belly: '#B8C890', fin: '#305828' }
  },
  orangethroat_darter: {
    id: 'orangethroat_darter', name: 'Orangethroat Darter', scientific: 'Etheostoma spectabile',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Etheostoma%20spectabile' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Etheostoma+spectabile' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Etheostoma_spectabile.jpg/500px-Etheostoma_spectabile.jpg',
    quizImage: '',
    features: [
      'Small with alternating blue and orange bars',
      'Bright orange throat and breast on breeding males',
      'Blue-green bars alternating with orange on sides',
      'Two dorsal fins',
      'Smaller and more delicate than rainbow darter',
      'Distinct orange throat patch'
    ],
    keyFeature: 'Small darter with bright orange throat and blue-orange barring',
    habitat: 'Rocky riffles of small to medium streams in western Ohio',
    size: '2-3 inches typical',
    funFact: 'Orangethroat darters look similar to rainbow darters but are generally found in different streams. The bright orange throat is the key difference.',
    colors: { primary: '#3060A0', secondary: '#D07020', belly: '#D08030', fin: '#2050A0' }
  },
  banded_darter: {
    id: 'banded_darter', name: 'Banded Darter', scientific: 'Etheostoma zonale',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Etheostoma%20zonale' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Etheostoma+zonale' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Etheostoma_zonale_267441672.jpg/500px-Etheostoma_zonale_267441672.jpg',
    quizImage: '',
    features: [
      'Small body with distinct vertical bars',
      'Green to olive body with 8-12 dark vertical bars',
      'Bars are distinct and evenly spaced',
      'Greenish tint overall',
      'Two dorsal fins close together',
      'Rounded pectoral fins'
    ],
    keyFeature: 'Small green darter with bold, evenly spaced vertical bars',
    habitat: 'Rocky riffles and runs of clear streams',
    size: '2-3 inches typical',
    funFact: 'Banded darters are named for their very distinct, evenly spaced vertical bars. They are one of the easier darters to identify because the bars are so bold and regular.',
    colors: { primary: '#4A6838', secondary: '#5A7848', belly: '#B8C890', fin: '#3A5830' }
  },
  bluebreast_darter: {
    id: 'bluebreast_darter', name: 'Bluebreast Darter', scientific: 'Etheostoma camurum',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Etheostoma%20camurum' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Etheostoma+camurum' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Etheostoma_camurum.jpg/500px-Etheostoma_camurum.jpg',
    quizImage: '',
    features: [
      'Breeding males with brilliant blue breast and belly',
      'Red-orange spots or bars on sides',
      'Robust body for a darter',
      'Blue edges on fins',
      'Dark body with bold red and blue pattern',
      'Two dorsal fins'
    ],
    keyFeature: 'Stunning darter with bright blue breast and red-orange side markings',
    habitat: 'Fast rocky riffles of clear rivers; clean water indicator',
    size: '2-4 inches typical',
    funFact: 'Bluebreast darters are one of Ohio\'s most beautiful fish. They require very clean water and are listed as a species of concern in Ohio.',
    colors: { primary: '#2050A0', secondary: '#D06020', belly: '#2060B0', fin: '#1840A0' }
  },
  variegate_darter: {
    id: 'variegate_darter', name: 'Variegate Darter', scientific: 'Etheostoma variatum',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Etheostoma%20variatum' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Etheostoma+variatum' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Etheostoma_variatum.jpg',
    quizImage: '',
    features: [
      'Four dark saddle marks across back',
      'Alternating bars of blue-green and orange-red on sides',
      'More robust body than most darters',
      'Breeding males brilliantly colored',
      'Orange-red in spaces between dark bars',
      'Two dorsal fins'
    ],
    keyFeature: 'Robust darter with four saddle marks and alternating blue-green and orange bars',
    habitat: 'Large rocky riffles of clean rivers in eastern Ohio',
    size: '3-4 inches typical',
    funFact: 'Variegate darters are found primarily in the upper Ohio River drainage. They are one of the more colorful darter species and require clean, rocky rivers.',
    colors: { primary: '#3060A0', secondary: '#C06020', belly: '#C8A060', fin: '#2050A0' }
  },
  eastern_sand_darter: {
    id: 'eastern_sand_darter', name: 'Eastern Sand Darter', scientific: 'Ammocrypta pellucida',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Ammocrypta%20pellucida' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Ammocrypta+pellucida' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Ammocrypta_pellucida.jpg/500px-Ammocrypta_pellucida.jpg',
    quizImage: '',
    features: [
      'Very slender, elongated body',
      'Nearly transparent/translucent body',
      'Row of small dark spots along lateral line',
      'Pointed snout',
      'Buries itself in sand with only eyes exposed',
      'Two widely separated dorsal fins'
    ],
    keyFeature: 'Nearly transparent darter that buries in sand with only eyes exposed',
    habitat: 'Sandy-bottomed pools and runs of clean streams',
    size: '2-3 inches typical',
    funFact: 'Eastern sand darters are almost invisible when buried in sand with just their eyes poking out. They are translucent enough to see their internal organs! Listed as threatened in Ohio.',
    colors: { primary: '#C8B890', secondary: '#D8C8A0', belly: '#E0D8C0', fin: '#B8A880' }
  },
  logperch: {
    id: 'logperch', name: 'Logperch', scientific: 'Percina caprodes',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Percina%20caprodes' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Percina+caprodes' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Percina_caprodes.jpg/500px-Percina_caprodes.jpg',
    quizImage: '',
    features: [
      'Largest darter commonly found in Ohio (up to 7 inches)',
      'Alternating long and short vertical bars on sides',
      'Pig-like snout (conical, used for flipping rocks)',
      'Olive-yellow body',
      'Tiger-like barring pattern',
      'Two dorsal fins'
    ],
    keyFeature: 'Large darter with pig-like snout and alternating long/short vertical bars',
    habitat: 'Lakes, rivers, and streams with gravel or sandy bottoms',
    size: '4-6 inches typical',
    funFact: 'Logperch use their distinctive conical snout to flip over small rocks and pebbles to find insect larvae underneath. Their alternating bar pattern is unique among darters.',
    colors: { primary: '#8B8040', secondary: '#A89858', belly: '#D0C890', fin: '#7A7038' }
  },
  blackside_darter: {
    id: 'blackside_darter', name: 'Blackside Darter', scientific: 'Percina maculata',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Percina%20maculata' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Percina+maculata' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/..._The_fishes_of_Illinois_%281908%29_%2814801632653%29.jpg/500px-..._The_fishes_of_Illinois_%281908%29_%2814801632653%29.jpg',
    quizImage: '',
    features: [
      'Row of dark oval blotches along sides',
      'Olive-brown body',
      'Dark blotches may fuse into lateral stripe',
      'Distinct from logperch by blotch pattern',
      'Two dorsal fins',
      'Moderately robust body'
    ],
    keyFeature: 'Olive darter with row of dark oval blotches along side',
    habitat: 'Pools and runs of streams with rocky or gravelly bottoms',
    size: '2-4 inches typical',
    funFact: 'Blackside darters are one of the most common Percina darters in Ohio. Their row of oval blotches is distinctive, though the blotches sometimes merge into a continuous band.',
    colors: { primary: '#6B6038', secondary: '#8B8058', belly: '#C0B888', fin: '#5A5030' }
  },
  channel_darter: {
    id: 'channel_darter', name: 'Channel Darter', scientific: 'Percina copelandi',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Percina%20copelandi' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Percina+copelandi' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/FMIB_39791_Cottogaster_cheneyi%2C_new_species_Type.jpeg/500px-FMIB_39791_Cottogaster_cheneyi%2C_new_species_Type.jpeg',
    quizImage: '',
    features: [
      'Small, slender darter',
      'Row of X-shaped or oval blotches on sides',
      'Olive-tan body',
      'Relatively large head for body size',
      'Two dorsal fins',
      'Premaxilla protractile (unique among Percina)'
    ],
    keyFeature: 'Small slender darter with X-shaped blotches and large head',
    habitat: 'Sandy or gravelly channels of medium to large rivers',
    size: '1.5-2.5 inches typical',
    funFact: 'Channel darters are named for their preference for the main channel of rivers. They are one of the smaller Percina darters and can be challenging to identify.',
    colors: { primary: '#887850', secondary: '#A89870', belly: '#C8C0A0', fin: '#786840' }
  },
  iowa_darter: {
    id: 'iowa_darter', name: 'Iowa Darter', scientific: 'Etheostoma exile',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Etheostoma%20exile' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Etheostoma+exile' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Etheostoma_exile_-_Iowa_Darter.png/500px-Etheostoma_exile_-_Iowa_Darter.png',
    quizImage: '',
    features: [
      'Slender body with 9-12 dark vertical bars',
      'Olive to brown body',
      'Breeding males develop blue-green and orange coloring',
      'Bars may be narrow and distinct',
      'Two dorsal fins',
      'Small pointed snout'
    ],
    keyFeature: 'Slender darter with many narrow dark bars; breeding males turn blue-orange',
    habitat: 'Quiet, vegetated pools and lake margins; bog habitats',
    size: '2-3 inches typical',
    funFact: 'Iowa darters are unusual among darters because they prefer quiet, vegetated water rather than fast riffles. They are often found in boggy habitats and glacial lakes.',
    colors: { primary: '#5A5830', secondary: '#706840', belly: '#B8A880', fin: '#4A4828' }
  },
  dusky_darter: {
    id: 'dusky_darter', name: 'Dusky Darter', scientific: 'Percina sciera',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Percina%20sciera' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Percina+sciera' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Percina_sciera_332617380.jpg/500px-Percina_sciera_332617380.jpg',
    quizImage: '',
    features: [
      'Row of fused or connected dark blotches along side',
      'Dusky olive body',
      'Blotches often form a continuous dark band',
      'Two dorsal fins',
      'Moderately robust build',
      'Dark tearstain mark under eye'
    ],
    keyFeature: 'Olive darter with connected dark blotches forming band and tear mark under eye',
    habitat: 'Rocky pools and gentle riffles of medium rivers',
    size: '3-4 inches typical',
    funFact: 'Dusky darters get their name from their dull, dusky coloration. They are most common in the Ohio River drainage and prefer slightly larger streams than many darters.',
    colors: { primary: '#5A5838', secondary: '#706848', belly: '#B8A888', fin: '#4A4830' }
  },
  slenderhead_darter: {
    id: 'slenderhead_darter', name: 'Slenderhead Darter', scientific: 'Percina phoxocephala',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Percina%20phoxocephala' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Percina+phoxocephala' }
    ],
    image: 'https://inaturalist-open-data.s3.amazonaws.com/photos/28382165/medium.jpg',
    quizImage: '',
    features: [
      'Pointed, slender head and snout',
      'Row of small dark blotches on side',
      'Olive-yellow body',
      'Small dark bar under eye',
      'Two dorsal fins',
      'Streamlined body shape'
    ],
    keyFeature: 'Darter with distinctly pointed, narrow head and small side blotches',
    habitat: 'Riffles and runs of medium to large streams',
    size: '2-3 inches typical',
    funFact: 'Slenderhead darters are named for their distinctly pointed, narrow head. They prefer larger streams than many darter species and are most common in western Ohio.',
    colors: { primary: '#7A7040', secondary: '#908858', belly: '#C8C090', fin: '#686038' }
  },
  gilt_darter: {
    id: 'gilt_darter', name: 'Gilt Darter', scientific: 'Percina evides',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Percina%20evides' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Percina+evides' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Percina_evides_323739855.jpg/500px-Percina_evides_323739855.jpg',
    quizImage: '',
    features: [
      'Broad dark vertical bars on golden-orange body',
      'Bright orange-gold base color between bars',
      'Blue-green breast and lower head on breeding males',
      'Robust body',
      'Wide dark bars wider than interspaces',
      'Two dorsal fins'
    ],
    keyFeature: 'Golden-orange darter with broad dark bars and blue-green breast (males)',
    habitat: 'Fast rocky riffles of clean rivers; endangered in Ohio',
    size: '2-3 inches typical',
    funFact: 'Gilt darters are one of Ohio\'s most endangered fish species. They require pristine rocky river habitat and are indicators of excellent water quality.',
    colors: { primary: '#C08820', secondary: '#3A5A30', belly: '#2060A0', fin: '#A07018' }
  },
  longnose_gar: {
    id: 'longnose_gar', name: 'Longnose Gar', scientific: 'Lepisosteus osseus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Lepisosteus%20osseus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Lepisosteus+osseus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Lepisosteus_osseus.jpg/500px-Lepisosteus_osseus.jpg',
    quizImage: '',
    features: [
      'Very long, narrow snout (twice head length)',
      'Diamond-shaped ganoid (armored) scales',
      'Olive-green to brown body with spots',
      'Dorsal fin set far back near tail',
      'Elongated cylindrical body',
      'Can breathe air using swim bladder'
    ],
    keyFeature: 'Extremely long, narrow snout and diamond-shaped armored scales',
    habitat: 'Large rivers, lakes, and reservoirs; sluggish backwaters',
    size: '24-36 inches typical, can exceed 5 feet',
    funFact: 'Longnose gar are living fossils that have remained virtually unchanged for 100 million years. Their diamond-shaped scales are so hard that Native Americans used them as arrowheads!',
    colors: { primary: '#5A6838', secondary: '#708048', belly: '#C8D0A0', fin: '#4A5830' }
  },
  shortnose_gar: {
    id: 'shortnose_gar', name: 'Shortnose Gar', scientific: 'Lepisosteus platostomus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Lepisosteus%20platostomus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Lepisosteus+platostomus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Shortnose_Gar_%28Lepisosteus_platostomus%29_%2853084345784%29.jpg/500px-Shortnose_Gar_%28Lepisosteus_platostomus%29_%2853084345784%29.jpg',
    quizImage: '',
    features: [
      'Shorter, broader snout than longnose gar',
      'Diamond-shaped ganoid scales',
      'Olive-green to brown body',
      'No spots on head or snout (unlike longnose)',
      'Dorsal fin set far back',
      'Spots mainly on rear fins and tail'
    ],
    keyFeature: 'Gar with shorter, broader snout and no spots on head',
    habitat: 'Ohio River and large tributaries; quiet backwaters',
    size: '18-25 inches typical',
    funFact: 'Shortnose gar are less common than longnose gar in Ohio. The best way to tell them apart is the snout: shortnose gar have a snout that is less than twice the head length.',
    colors: { primary: '#5A6838', secondary: '#708048', belly: '#C8D0A0', fin: '#4A5830' }
  },
  bowfin: {
    id: 'bowfin', name: 'Bowfin', scientific: 'Amia calva',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Amia%20calva' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Amia+calva' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Amia_calva_%28YPM_ICH_004577%29_001.jpg/500px-Amia_calva_%28YPM_ICH_004577%29_001.jpg',
    quizImage: '',
    features: [
      'Long dorsal fin extending most of body length',
      'Rounded tail fin (not forked)',
      'Dark spot (ocellus) at base of tail on males',
      'Large head with strong jaws and teeth',
      'Olive-green body with mottled pattern',
      'Gular plate (bony plate) under lower jaw'
    ],
    keyFeature: 'Long dorsal fin nearly reaching round tail, with dark spot at tail base (males)',
    habitat: 'Weedy lakes, swamps, slow rivers with vegetation',
    size: '18-24 inches typical, can exceed 30',
    funFact: 'Bowfin are living fossils dating back 150 million years. They can breathe air using their swim bladder and survive in water too oxygen-poor for most fish. Males guard their young.',
    colors: { primary: '#3A4A28', secondary: '#4A5A38', belly: '#A8B088', fin: '#2A3A20' }
  },
  paddlefish: {
    id: 'paddlefish', name: 'Paddlefish', scientific: 'Polyodon spathula',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Polyodon%20spathula' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Polyodon+spathula' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Polyodon_spathula.jpg/500px-Polyodon_spathula.jpg',
    quizImage: '',
    features: [
      'Extremely long, paddle-shaped rostrum (snout)',
      'Shark-like body shape with heterocercal tail',
      'Smooth, scaleless skin',
      'Very large mouth that opens wide for filter feeding',
      'Blue-gray to dark gray body',
      'Long gill rakers for filtering plankton'
    ],
    keyFeature: 'Unmistakable long paddle-shaped snout and smooth shark-like body',
    habitat: 'Large rivers and reservoirs; Ohio River system',
    size: '36-60 inches typical, can exceed 5 feet',
    funFact: 'Paddlefish have been around since the age of dinosaurs. Their paddle-shaped rostrum is covered in electroreceptors that detect plankton, similar to a shark\'s electroreception!',
    colors: { primary: '#5A6878', secondary: '#6A7888', belly: '#A8B0B8', fin: '#4A5868' }
  },
  lake_sturgeon: {
    id: 'lake_sturgeon', name: 'Lake Sturgeon', scientific: 'Acipenser fulvescens',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Acipenser%20fulvescens' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Acipenser+fulvescens' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Acipenser_fulvescens.jpg/500px-Acipenser_fulvescens.jpg',
    quizImage: '',
    features: [
      'Large, torpedo-shaped body with bony plates (scutes)',
      'Four barbels in front of mouth on underside of snout',
      'Shark-like heterocercal tail (upper lobe longer)',
      'Pointed snout (conical)',
      'Gray to olive body',
      'Five rows of bony plates along body'
    ],
    keyFeature: 'Large armored fish with bony plates, four barbels, and shark-like tail',
    habitat: 'Lake Erie and large rivers; historically abundant, now rare',
    size: '36-60 inches typical, can reach 6+ feet',
    funFact: 'Lake sturgeon can live over 150 years and reach over 200 pounds. They were once so abundant in Lake Erie that they were considered trash fish and burned as fuel! Now they are endangered.',
    colors: { primary: '#5A6058', secondary: '#6A7068', belly: '#B0B8A8', fin: '#4A5048' }
  },
  shovelnose_sturgeon: {
    id: 'shovelnose_sturgeon', name: 'Shovelnose Sturgeon', scientific: 'Scaphirhynchus platorynchus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Scaphirhynchus%20platorynchus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Scaphirhynchus+platorynchus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Shovelnose_sturgeon.jpg/500px-Shovelnose_sturgeon.jpg',
    quizImage: '',
    features: [
      'Flattened, shovel-shaped snout',
      'Four fringed barbels under snout',
      'Bony plates (scutes) on body',
      'Long, slender caudal peduncle covered in bony plates',
      'Brown to gray body',
      'Smaller than lake sturgeon'
    ],
    keyFeature: 'Flat shovel-shaped snout with fringed barbels and bony-plated tail stalk',
    habitat: 'Ohio River and large tributaries; sandy or gravelly channels',
    size: '18-30 inches typical',
    funFact: 'Shovelnose sturgeon are the most abundant sturgeon in the Ohio River system. Unlike lake sturgeon, they are still relatively common. Their flat snout helps them feed in current.',
    colors: { primary: '#6A6050', secondary: '#7A7060', belly: '#B0A898', fin: '#5A5048' }
  },
  american_eel: {
    id: 'american_eel', name: 'American Eel', scientific: 'Anguilla rostrata',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Anguilla%20rostrata' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Anguilla+rostrata' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Anguilla_rostrata.jpg/500px-Anguilla_rostrata.jpg',
    quizImage: '',
    features: [
      'Snake-like elongated body',
      'Continuous fin running along back, around tail, and under body',
      'Lower jaw projects past upper jaw',
      'Tiny embedded scales (appear scaleless)',
      'Brown to olive-green body',
      'Small pectoral fins, no pelvic fins'
    ],
    keyFeature: 'Snake-like body with continuous fin around tail and projecting lower jaw',
    habitat: 'Rivers, streams, Lake Erie; migrates to Sargasso Sea to spawn',
    size: '18-36 inches typical',
    funFact: 'American eels make one of nature\'s most incredible migrations. They are born in the Sargasso Sea (mid-Atlantic), swim to Ohio\'s rivers to grow up, then swim back to the ocean to spawn and die!',
    colors: { primary: '#4A5030', secondary: '#5A6040', belly: '#A8A890', fin: '#3A4028' }
  },
  round_goby: {
    id: 'round_goby', name: 'Round Goby', scientific: 'Neogobius melanostomus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Neogobius%20melanostomus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Neogobius+melanostomus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Neogobius_melanostomus.jpg/500px-Neogobius_melanostomus.jpg',
    quizImage: '',
    features: [
      'Small, bottom-dwelling body',
      'Fused pelvic fins forming a suction disc',
      'Prominent black spot on first dorsal fin',
      'Large, frog-like head with protruding eyes',
      'Dark mottled gray-brown body',
      'Males turn jet black during spawning'
    ],
    keyFeature: 'Small bottom fish with fused pelvic suction disc and black spot on first dorsal',
    habitat: 'Lake Erie rocky areas, now spreading to tributaries; invasive from Black Sea',
    size: '4-7 inches typical',
    funFact: 'Round gobies arrived in Lake Erie in ship ballast water from the Black Sea region in the 1990s. They compete with native fish but also provide food for smallmouth bass and walleye.',
    colors: { primary: '#4A4A40', secondary: '#5A5A50', belly: '#989088', fin: '#3A3A30' }
  },
  sea_lamprey: {
    id: 'sea_lamprey', name: 'Sea Lamprey', scientific: 'Petromyzon marinus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Petromyzon%20marinus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Petromyzon+marinus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Petromyzon_marinus.jpg/500px-Petromyzon_marinus.jpg',
    quizImage: '',
    features: [
      'Eel-like body (but NOT a fish - jawless)',
      'Circular sucker mouth filled with sharp teeth',
      'Seven visible gill openings on each side',
      'No paired fins (no pectoral or pelvic fins)',
      'Mottled gray-brown body',
      'Single nostril on top of head'
    ],
    keyFeature: 'Eel-like jawless parasite with circular tooth-filled sucker mouth and 7 gill holes',
    habitat: 'Lake Erie; attaches to and parasitizes large fish',
    size: '12-24 inches typical',
    funFact: 'Sea lamprey nearly destroyed the Lake Erie fishery in the mid-1900s. They attach to fish with their sucker mouths and drain the body fluids. Control programs now keep them in check.',
    colors: { primary: '#5A5848', secondary: '#706858', belly: '#A8A090', fin: '#4A4838' }
  },
  grass_carp: {
    id: 'grass_carp', name: 'Grass Carp', scientific: 'Ctenopharyngodon idella',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Ctenopharyngodon%20idella' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Ctenopharyngodon+idella' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ctenopharyngodon_idella.jpg/500px-Ctenopharyngodon_idella.jpg',
    quizImage: '',
    features: [
      'Large, elongated torpedo-shaped body',
      'Large scales with dark edges',
      'Broad, flat head',
      'No barbels (unlike common carp)',
      'Terminal mouth level with eyes',
      'Olive-green body with silvery sides'
    ],
    keyFeature: 'Large elongated carp with dark-edged scales and no barbels',
    habitat: 'Lakes, ponds, slow rivers; stocked for vegetation control',
    size: '24-40 inches typical, can exceed 50 pounds',
    funFact: 'Grass carp eat their weight in vegetation daily! Triploid (sterile) grass carp are stocked in Ohio ponds to control aquatic weeds. Fertile grass carp are invasive and illegal to stock.',
    colors: { primary: '#5A6838', secondary: '#708048', belly: '#C8D0A0', fin: '#4A5830' }
  },
  silver_carp_invasive: {
    id: 'silver_carp_invasive', name: 'Silver Carp', scientific: 'Hypophthalmichthys molitrix',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Hypophthalmichthys%20molitrix' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Hypophthalmichthys+molitrix' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Hypophthalmichthys_molitrix.jpg/500px-Hypophthalmichthys_molitrix.jpg',
    quizImage: '',
    features: [
      'Large, deep-bodied silver fish',
      'Eyes set very low on head (below mouth line)',
      'Large upturned mouth',
      'No barbels',
      'Smooth keel on belly',
      'Silver body with olive-green back'
    ],
    keyFeature: 'Large silver carp with eyes set very low on head, below the mouth line',
    habitat: 'Ohio River system; invasive, threatening Lake Erie',
    size: '24-36 inches typical, can exceed 60 pounds',
    funFact: 'Silver carp are famous for leaping out of the water when startled by boat motors, sometimes injuring boaters. They are a major invasive threat to Lake Erie.',
    colors: { primary: '#8098A8', secondary: '#A0B0B8', belly: '#D0D8D8', fin: '#708088' }
  },
  bighead_carp: {
    id: 'bighead_carp', name: 'Bighead Carp', scientific: 'Hypophthalmichthys nobilis',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Hypophthalmichthys%20nobilis' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Hypophthalmichthys+nobilis' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Bighead_carp.gif',
    quizImage: '',
    features: [
      'Very large head relative to body',
      'Eyes set low on head',
      'Dark mottled pattern on body',
      'Large mouth without barbels',
      'Deep keel on belly',
      'Gray-brown with dark blotches'
    ],
    keyFeature: 'Enormous head with low-set eyes and dark mottled body pattern',
    habitat: 'Ohio River system; invasive Asian carp',
    size: '30-48 inches typical, can exceed 100 pounds',
    funFact: 'Bighead carp are filter feeders that can consume 20% of their body weight in plankton daily, directly competing with native fish. They are one of the biggest threats to Great Lakes ecosystems.',
    colors: { primary: '#5A6060', secondary: '#6A7070', belly: '#B0B8B0', fin: '#4A5050' }
  },
  goldfish: {
    id: 'goldfish', name: 'Goldfish', scientific: 'Carassius auratus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Carassius%20auratus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Carassius+auratus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Carassius_auratus_-_Gold_fish_02.jpg/500px-Carassius_auratus_-_Gold_fish_02.jpg',
    quizImage: '',
    features: [
      'Deep, compressed body',
      'Gold to olive body (wild-type are dark)',
      'No barbels (unlike common carp)',
      'Long dorsal fin with serrated spine',
      'Forked tail',
      'Wild ones are dark olive, not bright gold'
    ],
    keyFeature: 'Carp-like fish without barbels; wild ones are dark olive (not pet-store gold)',
    habitat: 'Ponds, lakes, slow streams; released pet fish now established',
    size: '6-12 inches typical in wild, can reach 16+',
    funFact: 'Wild goldfish in Ohio are NOT the bright orange of pet stores. They revert to dark olive-bronze coloring within a generation. Released pet goldfish have established invasive populations in Ohio waters.',
    colors: { primary: '#5A6030', secondary: '#708040', belly: '#C0B878', fin: '#4A5028' }
  },
  european_rudd: {
    id: 'european_rudd', name: 'European Rudd', scientific: 'Scardinius erythrophthalmus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Scardinius%20erythrophthalmus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Scardinius+erythrophthalmus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Scardinius_erythrophthalmus_Prague_Vltava_3.jpg/500px-Scardinius_erythrophthalmus_Prague_Vltava_3.jpg',
    quizImage: '',
    features: [
      'Deep, compressed golden body',
      'Bright red-orange fins',
      'Orange-red eye',
      'Upturned mouth',
      'Keel on belly behind pelvic fins',
      'Similar to golden shiner but with red fins'
    ],
    keyFeature: 'Golden-bodied minnow with bright red-orange fins and red eye',
    habitat: 'Lake Erie and tributaries; invasive from Europe',
    size: '8-12 inches typical',
    funFact: 'European rudd were illegally introduced and are now invasive in parts of Ohio. They look similar to golden shiners but are easily identified by their bright red-orange fins.',
    colors: { primary: '#8B8030', secondary: '#A89840', belly: '#D0C878', fin: '#C03020' }
  },
  burbot: {
    id: 'burbot', name: 'Burbot', scientific: 'Lota lota',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Lota%20lota' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Lota+lota' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lota_lota.jpg/500px-Lota_lota.jpg',
    quizImage: '',
    features: [
      'Elongated body with eel-like appearance',
      'Single barbel on chin',
      'Mottled brown-yellow pattern',
      'Two dorsal fins (first very short, second very long)',
      'Round tail fin',
      'Wide, flat head'
    ],
    keyFeature: 'Elongated eel-like body with single chin barbel and mottled pattern',
    habitat: 'Deep cold waters of Lake Erie; nocturnal predator',
    size: '16-24 inches typical',
    funFact: 'Burbot are the only freshwater member of the cod family. They spawn under the ice in winter, making them one of the few fish that breed in the coldest months of the year!',
    colors: { primary: '#6B5A30', secondary: '#8B7848', belly: '#C8B878', fin: '#5A4A28' }
  },
  trout_perch: {
    id: 'trout_perch', name: 'Trout-Perch', scientific: 'Percopsis omiscomaycus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Percopsis%20omiscomaycus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Percopsis+omiscomaycus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Percopsis_omiscomaycus.jpg/500px-Percopsis_omiscomaycus.jpg',
    quizImage: '',
    features: [
      'Small, semi-translucent body',
      'Adipose fin present (trout-like feature)',
      'Rows of dark spots on back and sides',
      'Spiny rays in fins (perch-like feature)',
      'Large head relative to body',
      'Silver-olive coloring'
    ],
    keyFeature: 'Small fish combining trout features (adipose fin) and perch features (spiny fins)',
    habitat: 'Lake Erie and large rivers; deep sandy or gravelly bottoms',
    size: '3-5 inches typical',
    funFact: 'Trout-perch are named because they combine features of both trout (adipose fin) and perch (spiny fin rays). They are mostly nocturnal and are seldom seen by anglers.',
    colors: { primary: '#889078', secondary: '#A0A890', belly: '#C8D0C0', fin: '#788068' }
  },
  pirate_perch: {
    id: 'pirate_perch', name: 'Pirate Perch', scientific: 'Aphredoderus sayanus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Aphredoderus%20sayanus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Aphredoderus+sayanus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Aphredoderus_sayanus_sayanus.jpg/500px-Aphredoderus_sayanus_sayanus.jpg',
    quizImage: '',
    features: [
      'Small, dark-bodied fish',
      'Anus located under the throat in adults (unique!)',
      'Single dorsal fin with spiny and soft portions',
      'Large head and mouth for body size',
      'Dark purple-brown to black body',
      'No lateral line'
    ],
    keyFeature: 'Dark small fish with unique forward-migrating anus positioned under throat',
    habitat: 'Swamps, backwaters, quiet streams with heavy vegetation and debris',
    size: '3-5 inches typical',
    funFact: 'Pirate perch have one of the weirdest features in the fish world: as they mature, their anus migrates forward from the normal position to underneath the throat! Scientists still debate why.',
    colors: { primary: '#3A3030', secondary: '#4A4040', belly: '#807070', fin: '#2A2020' }
  },
  brook_silverside: {
    id: 'brook_silverside', name: 'Brook Silverside', scientific: 'Labidesthes sicculus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Labidesthes%20sicculus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Labidesthes+sicculus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Labidesthes_sicculus.jpg/500px-Labidesthes_sicculus.jpg',
    quizImage: '',
    features: [
      'Very slender, elongated body',
      'Bright silver lateral stripe',
      'Translucent body - can see through it',
      'Beak-like snout with upturned mouth',
      'Large eyes',
      'Two small dorsal fins set far back'
    ],
    keyFeature: 'Extremely slender translucent fish with bright silver stripe and beak-like snout',
    habitat: 'Lake margins, slow streams; swims near surface in schools',
    size: '2-4 inches typical',
    funFact: 'Brook silversides are surface-dwelling fish that leap out of the water to escape predators. They are annual fish - most live only one year and die after spawning.',
    colors: { primary: '#88A0A8', secondary: '#A0B8C0', belly: '#D0D8E0', fin: '#7090A0' }
  },
  central_mudminnow: {
    id: 'central_mudminnow', name: 'Central Mudminnow', scientific: 'Umbra limi',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Umbra%20limi' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Umbra+limi' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Umbra_limi.jpg/500px-Umbra_limi.jpg',
    quizImage: '',
    features: [
      'Small, stout body with rounded tail',
      'Dark brown to olive with faint bars or mottling',
      'Dark bar at base of rounded tail',
      'Rounded dorsal fin set far back near tail',
      'Can breathe air and survive in mud',
      'No adipose fin'
    ],
    keyFeature: 'Small stout fish with rounded tail, dark tail-base bar, and air-breathing ability',
    habitat: 'Swamps, bogs, heavily vegetated ditches; can survive in mud',
    size: '2-4 inches typical',
    funFact: 'Central mudminnows can survive being frozen in ice and can breathe air by gulping it at the surface. They can also survive buried in mud when ponds dry up.',
    colors: { primary: '#4A4830', secondary: '#5A5840', belly: '#908870', fin: '#3A3828' }
  },
  mottled_sculpin: {
    id: 'mottled_sculpin', name: 'Mottled Sculpin', scientific: 'Cottus bairdii',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Cottus%20bairdii' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Cottus+bairdii' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Cottus_bairdii.jpg/500px-Cottus_bairdii.jpg',
    quizImage: '',
    features: [
      'Wide, flat head with fan-like pectoral fins',
      'No scales (smooth skin)',
      'Mottled brown pattern for camouflage',
      'Large pectoral fins spread flat on bottom',
      'Eyes on top of head',
      'No swim bladder (always sinks to bottom)'
    ],
    keyFeature: 'Wide flat head with fan-like pectoral fins and scaleless mottled body',
    habitat: 'Cold, rocky streams with clean water; under stones',
    size: '3-4 inches typical',
    funFact: 'Mottled sculpin have no swim bladder so they always sink. They use their large pectoral fins to prop themselves on the stream bottom and dart between rocks to catch prey.',
    colors: { primary: '#5A5038', secondary: '#706848', belly: '#B0A888', fin: '#4A4030' }
  },
  blackstripe_topminnow: {
    id: 'blackstripe_topminnow', name: 'Blackstripe Topminnow', scientific: 'Fundulus notatus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Fundulus%20notatus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Fundulus+notatus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/FMIB_51864_Top-minnow%2C_Zygonectes_notatus_%28Rafineesque%29_Eureka_Springs%2C_Ark.jpeg/500px-FMIB_51864_Top-minnow%2C_Zygonectes_notatus_%28Rafineesque%29_Eureka_Springs%2C_Ark.jpeg',
    quizImage: '',
    features: [
      'Small surface-dwelling fish',
      'Bold dark lateral stripe from snout to tail',
      'Flat head and upturned mouth adapted for surface feeding',
      'Olive-tan body above stripe',
      'Yellow to white below stripe',
      'Rounded tail'
    ],
    keyFeature: 'Surface fish with bold dark stripe, flat head, and upturned mouth',
    habitat: 'Quiet pools, backwaters, stream edges; lives at water surface',
    size: '2-3 inches typical',
    funFact: 'Blackstripe topminnows spend their lives at the water surface, using their upturned mouths to feed on insects that land on the water. They are sometimes called "top minnows" for this reason.',
    colors: { primary: '#706840', secondary: '#887858', belly: '#D0C8A0', fin: '#605838' }
  },
  banded_killifish: {
    id: 'banded_killifish', name: 'Banded Killifish', scientific: 'Fundulus diaphanus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Fundulus%20diaphanus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Fundulus+diaphanus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Banded_killifish.JPG/500px-Banded_killifish.JPG',
    quizImage: '',
    features: [
      'Small surface-dwelling fish',
      'Multiple thin dark vertical bars on sides',
      'Olive-brown above with silver sides',
      'Flat head with upturned mouth',
      'Rounded tail fin',
      'Body more compressed than topminnow'
    ],
    keyFeature: 'Small surface fish with many thin vertical bars and flat head',
    habitat: 'Sandy lake shores, quiet streams; found near surface',
    size: '2-4 inches typical',
    funFact: 'Banded killifish are common along the sandy shores of Lake Erie. Despite their name, they are peaceful fish - "killifish" comes from the Dutch word "kilde" meaning small creek.',
    colors: { primary: '#708060', secondary: '#889878', belly: '#C8D0B8', fin: '#607050' }
  },
  northern_studfish: {
    id: 'northern_studfish', name: 'Northern Studfish', scientific: 'Fundulus catenatus',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Fundulus%20catenatus' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Fundulus+catenatus' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Fundulus_catenatus.jpg',
    quizImage: '',
    features: [
      'Elongated body with flat head',
      'Rows of reddish-brown spots on olive body',
      'Upturned mouth',
      'Breeding males develop bright blue body with red spots',
      'Rounded tail',
      'Larger than other killifish'
    ],
    keyFeature: 'Large killifish with rows of red-brown spots; breeding males turn vivid blue',
    habitat: 'Clear rocky streams in southeastern Ohio',
    size: '4-6 inches typical',
    funFact: 'Northern studfish are one of Ohio\'s most colorful fish when in breeding dress. Males develop an electric blue body covered in red-orange spots.',
    colors: { primary: '#3060A0', secondary: '#C04020', belly: '#C8D0B8', fin: '#2050A0' }
  },
  brook_stickleback: {
    id: 'brook_stickleback', name: 'Brook Stickleback', scientific: 'Culaea inconstans',
    refs: [
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Special:Search?search=Culaea%20inconstans' },
      { label: 'FishBase', url: 'https://fishbase.se/search.php?search=Culaea+inconstans' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Culaea_inconstans_1908.jpg/500px-Culaea_inconstans_1908.jpg',
    quizImage: '',
    features: [
      'Very small fish with 4-6 free dorsal spines',
      'No scales - smooth or with bony plates',
      'Olive-green to brown mottled body',
      'Narrow caudal peduncle (tail stalk)',
      'Males build mucus nests for eggs',
      'Large eye relative to body size'
    ],
    keyFeature: 'Tiny scaleless fish with 4-6 isolated spines in front of dorsal fin',
    habitat: 'Cool streams, springs, bog pools with vegetation',
    size: '1.5-2.5 inches typical',
    funFact: 'Brook stickleback males build elaborate nests from plant material glued together with kidney secretions. They aggressively guard the nest and fan eggs with their fins to keep them oxygenated.',
    colors: { primary: '#4A5838', secondary: '#5A6848', belly: '#A0A888', fin: '#3A4830' }
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
    fish: ['channel_catfish', 'flathead_catfish', 'blue_catfish'],
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
  },
  {
    id: 8, title: 'Sunfish', icon: '☀️', description: 'Green, Pumpkinseed & Longear',
    fish: ['green_sunfish', 'pumpkinseed', 'longear_sunfish', 'redear_sunfish', 'orangespotted_sunfish', 'warmouth'],
    unlocked: false
  },
  {
    id: 9, title: 'More Bass', icon: '🏆', description: 'Spotted, Rock Bass & Hybrids',
    fish: ['spotted_bass', 'rock_bass', 'hybrid_striped_bass', 'white_perch'],
    unlocked: false
  },
  {
    id: 10, title: 'Bullheads & Madtoms', icon: '🌙', description: 'Bullheads, Stonecat & More',
    fish: ['yellow_bullhead', 'brown_bullhead', 'black_bullhead', 'white_catfish', 'stonecat', 'tadpole_madtom'],
    unlocked: false
  },
  {
    id: 11, title: 'Trout & Char', icon: '❄️', description: 'Brook Trout, Lake Trout & Salmon',
    fish: ['brook_trout', 'lake_trout', 'chinook_salmon', 'coho_salmon', 'rainbow_smelt'],
    unlocked: false
  },
  {
    id: 12, title: 'Shad & Herring', icon: '🐟', description: 'Shad, Alewife & Mooneye',
    fish: ['gizzard_shad', 'alewife', 'skipjack_herring', 'mooneye'],
    unlocked: false
  },
  {
    id: 13, title: 'Common Suckers', icon: '🪨', description: 'White Sucker, Hog Sucker & More',
    fish: ['white_sucker', 'northern_hog_sucker', 'spotted_sucker', 'creek_chubsucker', 'lake_chubsucker', 'quillback'],
    unlocked: false
  },
  {
    id: 14, title: 'Redhorse Suckers', icon: '🐴', description: 'Golden, Silver & Black Redhorse',
    fish: ['golden_redhorse', 'silver_redhorse', 'black_redhorse', 'shorthead_redhorse', 'river_redhorse', 'smallmouth_redhorse'],
    unlocked: false
  },
  {
    id: 15, title: 'Buffalo & Carpsuckers', icon: '🦬', description: 'Buffalo Fish & Carpsuckers',
    fish: ['bigmouth_buffalo', 'smallmouth_buffalo', 'black_buffalo', 'highfin_carpsucker', 'blue_sucker', 'greater_redhorse'],
    unlocked: false
  },
  {
    id: 16, title: 'Common Minnows', icon: '🪱', description: 'Stoneroller, Creek Chub & Shiners',
    fish: ['central_stoneroller', 'creek_chub', 'golden_shiner', 'fathead_minnow', 'bluntnose_minnow', 'common_shiner'],
    unlocked: false
  },
  {
    id: 17, title: 'Shiners & Chubs', icon: '✨', description: 'Emerald, Spotfin & More',
    fish: ['emerald_shiner', 'spotfin_shiner', 'striped_shiner', 'hornyhead_chub', 'river_chub', 'rosyface_shiner'],
    unlocked: false
  },
  {
    id: 18, title: 'Daces & Small Minnows', icon: '🔬', description: 'Daces, Darters of the Minnow World',
    fish: ['western_blacknose_dace', 'longnose_dace', 'southern_redbelly_dace', 'redside_dace', 'sand_shiner', 'silverjaw_minnow'],
    unlocked: false
  },
  {
    id: 19, title: 'More Shiners', icon: '💎', description: 'Scarlet, Redfin & Others',
    fish: ['scarlet_shiner', 'redfin_shiner', 'mimic_shiner', 'silver_chub', 'suckermouth_minnow'],
    unlocked: false
  },
  {
    id: 20, title: 'Colorful Darters', icon: '🌈', description: 'Rainbow, Orangethroat & More',
    fish: ['rainbow_darter', 'orangethroat_darter', 'bluebreast_darter', 'variegate_darter', 'banded_darter', 'fantail_darter'],
    unlocked: false
  },
  {
    id: 21, title: 'Common Darters', icon: '🏃', description: 'Johnny, Greenside & Logperch',
    fish: ['johnny_darter', 'greenside_darter', 'logperch', 'blackside_darter', 'eastern_sand_darter', 'channel_darter'],
    unlocked: false
  },
  {
    id: 22, title: 'More Darters', icon: '🎯', description: 'Iowa, Dusky, Gilt & Slenderhead',
    fish: ['iowa_darter', 'dusky_darter', 'slenderhead_darter', 'gilt_darter'],
    unlocked: false
  },
  {
    id: 23, title: 'Ancient Fish', icon: '🦴', description: 'Gar, Bowfin, Sturgeon & Paddlefish',
    fish: ['longnose_gar', 'shortnose_gar', 'bowfin', 'paddlefish', 'lake_sturgeon', 'shovelnose_sturgeon'],
    unlocked: false
  },
  {
    id: 24, title: 'Invasive Species', icon: '⚠️', description: 'Round Goby, Asian Carp & More',
    fish: ['round_goby', 'sea_lamprey', 'grass_carp', 'silver_carp_invasive', 'bighead_carp', 'goldfish', 'european_rudd'],
    unlocked: false
  },
  {
    id: 25, title: 'Oddities', icon: '🔮', description: 'Eel, Burbot, Sculpin & More',
    fish: ['american_eel', 'burbot', 'trout_perch', 'pirate_perch', 'brook_silverside', 'central_mudminnow', 'mottled_sculpin'],
    unlocked: false
  },
  {
    id: 26, title: 'Pike & Pickerel', icon: '🐊', description: 'Grass Pickerel & More',
    fish: ['grass_pickerel', 'northern_pike', 'muskellunge'],
    unlocked: false
  },
  {
    id: 27, title: 'Killifish & Topminnows', icon: '🦗', description: 'Surface Dwellers',
    fish: ['blackstripe_topminnow', 'banded_killifish', 'northern_studfish', 'brook_stickleback'],
    unlocked: false
  },
  {
    id: 28, title: 'Madtom Challenge', icon: '🌑', description: 'Tiny Catfish of Ohio',
    fish: ['brindled_madtom', 'tadpole_madtom', 'stonecat'],
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
  { fish1: 'channel_catfish', fish2: 'blue_catfish', hint: 'Channel cats have dark spots, blue cats don\'t! Also check the anal fin edge.' },
  { fish1: 'blue_catfish', fish2: 'flathead_catfish', hint: 'Blue cats are blue-gray with forked tails; flatheads are mottled brown with square tails!' },
  { fish1: 'steelhead', fish2: 'rainbow_trout', hint: 'Both are the same species! Steelhead are chrome silver from the lake.' },
  { fish1: 'walleye', fish2: 'saugeye', hint: 'Saugeye have spotted dorsal fins and darker blotches.' },
  { fish1: 'bluegill', fish2: 'green_sunfish', hint: 'Green sunfish have a larger mouth and blue-green face streaks!' },
  { fish1: 'bluegill', fish2: 'pumpkinseed', hint: 'Pumpkinseed have wavy facial lines and a red spot on the ear flap!' },
  { fish1: 'pumpkinseed', fish2: 'longear_sunfish', hint: 'Longear has a much longer ear flap with white border!' },
  { fish1: 'bluegill', fish2: 'redear_sunfish', hint: 'Redear has a red/orange border on the ear flap, bluegill is all dark!' },
  { fish1: 'green_sunfish', fish2: 'warmouth', hint: 'Warmouth has dark streaks from a red eye; green sunfish has blue-green face streaks!' },
  { fish1: 'rock_bass', fish2: 'warmouth', hint: 'Rock bass has bright red eyes and 6 anal spines; warmouth has dark eye streaks!' },
  { fish1: 'largemouth_bass', fish2: 'spotted_bass', hint: 'Check below the lateral line: spotted bass has rows of spots; largemouth does not!' },
  { fish1: 'smallmouth_bass', fish2: 'spotted_bass', hint: 'Spotted bass has rows of spots below lateral line and a rough tongue patch!' },
  { fish1: 'white_bass', fish2: 'white_perch', hint: 'White bass has distinct horizontal stripes; white perch has no stripes!' },
  { fish1: 'white_bass', fish2: 'hybrid_striped_bass', hint: 'Hybrid has broken/offset stripes and a deeper body!' },
  { fish1: 'yellow_bullhead', fish2: 'brown_bullhead', hint: 'Check chin barbels: yellow has white, brown has dark barbels!' },
  { fish1: 'brown_bullhead', fish2: 'black_bullhead', hint: 'Black bullhead has pale bar at tail base; brown has mottled pattern!' },
  { fish1: 'channel_catfish', fish2: 'white_catfish', hint: 'Channel cat has deeper forked tail and dark spots; white cat is plainer!' },
  { fish1: 'brook_trout', fish2: 'brown_trout', hint: 'Brook trout has worm-like back markings and white-edged fins; brown trout has red spots with halos!' },
  { fish1: 'chinook_salmon', fish2: 'coho_salmon', hint: 'Check gums: chinook has black gums, coho has white. Spots on both tail lobes = chinook!' },
  { fish1: 'rainbow_darter', fish2: 'orangethroat_darter', hint: 'Orangethroat has bright orange throat; rainbow has more blue and orange bars!' },
  { fish1: 'johnny_darter', fish2: 'fantail_darter', hint: 'Johnny has W/X-shaped markings; fantail has fan-shaped tail and fleshy dorsal knobs!' },
  { fish1: 'gizzard_shad', fish2: 'alewife', hint: 'Gizzard shad has trailing dorsal filament; alewife is more slender with larger eye!' },
  { fish1: 'longnose_gar', fish2: 'shortnose_gar', hint: 'Longnose has very narrow snout twice head length; shortnose is broader and shorter!' },
  { fish1: 'white_sucker', fish2: 'creek_chubsucker', hint: 'White sucker has forked tail; creek chubsucker has rounded tail and no lateral line!' },
  { fish1: 'quillback', fish2: 'common_carp', hint: 'Quillback has no barbels and small sucker mouth; carp has barbels and rubbery lips!' },
  { fish1: 'golden_redhorse', fish2: 'shorthead_redhorse', hint: 'Shorthead has shorter head and straight dorsal edge; golden has more golden color!' },
  { fish1: 'bigmouth_buffalo', fish2: 'smallmouth_buffalo', hint: 'Bigmouth has large forward-facing mouth; smallmouth has small downward-pointing mouth!' },
  { fish1: 'golden_shiner', fish2: 'european_rudd', hint: 'European rudd has bright red-orange fins; golden shiner has yellowish fins!' },
  { fish1: 'emerald_shiner', fish2: 'mimic_shiner', hint: 'Emerald shiner has green sheen; mimic shiner is plainer silver!' },
  { fish1: 'fathead_minnow', fish2: 'bluntnose_minnow', hint: 'Bluntnose has dark spot at tail base; fathead males have dark fat pad on head!' },
  { fish1: 'lake_sturgeon', fish2: 'shovelnose_sturgeon', hint: 'Lake sturgeon is much larger with conical snout; shovelnose has flat shovel-shaped snout!' },
  { fish1: 'grass_carp', fish2: 'common_carp', hint: 'Grass carp has no barbels and more elongated body; common carp has barbels!' },
  { fish1: 'blackside_darter', fish2: 'dusky_darter', hint: 'Dusky has fused blotches forming continuous band; blackside has separate oval blotches!' },
  { fish1: 'logperch', fish2: 'blackside_darter', hint: 'Logperch is much larger with pig-like snout and alternating bar lengths!' },
  { fish1: 'silver_carp_invasive', fish2: 'bighead_carp', hint: 'Silver carp is plain silver; bighead has dark mottled pattern and even larger head!' },
  { fish1: 'western_blacknose_dace', fish2: 'longnose_dace', hint: 'Blacknose has bold dark stripe; longnose has longer snout and mottled pattern!' },
  { fish1: 'stonecat', fish2: 'tadpole_madtom', hint: 'Stonecat is larger and yellowish; tadpole madtom is smaller and darker!' }
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
  { statement: 'Blue catfish have dark spots like channel catfish.', answer: false, fishId: 'blue_catfish' },
  { statement: 'Blue catfish have a straight-edged anal fin with 30-36 rays.', answer: true, fishId: 'blue_catfish' },
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
  { statement: 'Brown trout often have red or orange spots, sometimes with pale halos.', answer: true, fishId: 'brown_trout' },
  { statement: 'Green sunfish have a small mouth like bluegill.', answer: false, fishId: 'green_sunfish' },
  { statement: 'Pumpkinseed have a bright red or orange spot on the tip of their ear flap.', answer: true, fishId: 'pumpkinseed' },
  { statement: 'Longear sunfish have the longest ear flaps of any sunfish.', answer: true, fishId: 'longear_sunfish' },
  { statement: 'Redear sunfish are nicknamed "shellcrackers" because they eat snails.', answer: true, fishId: 'redear_sunfish' },
  { statement: 'Orangespotted sunfish are one of the largest sunfish in Ohio.', answer: false, fishId: 'orangespotted_sunfish' },
  { statement: 'Warmouth have teeth on their tongue.', answer: true, fishId: 'warmouth' },
  { statement: 'Spotted bass have a smooth tongue patch.', answer: false, fishId: 'spotted_bass' },
  { statement: 'Rock bass have six anal fin spines instead of the usual three.', answer: true, fishId: 'rock_bass' },
  { statement: 'Hybrid striped bass have continuous unbroken horizontal stripes.', answer: false, fishId: 'hybrid_striped_bass' },
  { statement: 'White perch are native to Lake Erie.', answer: false, fishId: 'white_perch' },
  { statement: 'Yellow bullhead have white chin barbels.', answer: true, fishId: 'yellow_bullhead' },
  { statement: 'Brown bullhead have white chin barbels like yellow bullhead.', answer: false, fishId: 'brown_bullhead' },
  { statement: 'Black bullhead have a pale bar or crescent at the base of their tail.', answer: true, fishId: 'black_bullhead' },
  { statement: 'Stonecat madtoms have a venomous pectoral spine.', answer: true, fishId: 'stonecat' },
  { statement: 'Tadpole madtoms are one of the largest catfish in Ohio.', answer: false, fishId: 'tadpole_madtom' },
  { statement: 'Grass pickerel have fully scaled cheeks and gill covers.', answer: true, fishId: 'grass_pickerel' },
  { statement: 'Brook trout are actually a char, not a true trout.', answer: true, fishId: 'brook_trout' },
  { statement: 'Lake trout have a rounded tail like brook trout.', answer: false, fishId: 'lake_trout' },
  { statement: 'Chinook salmon have a dark/black gum line.', answer: true, fishId: 'chinook_salmon' },
  { statement: 'Coho salmon have black gums like chinook salmon.', answer: false, fishId: 'coho_salmon' },
  { statement: 'Rainbow smelt smell like cucumbers when freshly caught.', answer: true, fishId: 'rainbow_smelt' },
  { statement: 'Gizzard shad have teeth and are active predators.', answer: false, fishId: 'gizzard_shad' },
  { statement: 'Alewife are native to the Great Lakes.', answer: false, fishId: 'alewife' },
  { statement: 'Skipjack herring are named for their habit of leaping from the water.', answer: true, fishId: 'skipjack_herring' },
  { statement: 'Mooneye have an adipose fin like trout.', answer: false, fishId: 'mooneye' },
  { statement: 'White sucker are one of the rarest fish in Ohio.', answer: false, fishId: 'white_sucker' },
  { statement: 'Northern hog sucker have a flat, concave head with widely spaced eyes.', answer: true, fishId: 'northern_hog_sucker' },
  { statement: 'Spotted sucker lack parallel rows of dark spots.', answer: false, fishId: 'spotted_sucker' },
  { statement: 'Creek chubsucker have a deeply forked tail.', answer: false, fishId: 'creek_chubsucker' },
  { statement: 'Quillback have barbels near their mouth like common carp.', answer: false, fishId: 'quillback' },
  { statement: 'Golden redhorse have bright red-orange tail fins.', answer: true, fishId: 'golden_redhorse' },
  { statement: 'Silver redhorse have a V-shaped lower lip.', answer: true, fishId: 'silver_redhorse' },
  { statement: 'Black redhorse have bright red fins.', answer: false, fishId: 'black_redhorse' },
  { statement: 'River redhorse have heavy molar-like pharyngeal teeth for crushing shells.', answer: true, fishId: 'river_redhorse' },
  { statement: 'Bigmouth buffalo can live over 100 years.', answer: true, fishId: 'bigmouth_buffalo' },
  { statement: 'Smallmouth buffalo are filter feeders like bigmouth buffalo.', answer: false, fishId: 'smallmouth_buffalo' },
  { statement: 'Blue sucker have the typical deep body shape of most suckers.', answer: false, fishId: 'blue_sucker' },
  { statement: 'Central stoneroller minnows scrape algae off rocks with a hard jaw ridge.', answer: true, fishId: 'central_stoneroller' },
  { statement: 'Creek chub males carry stones in their mouths to build nests.', answer: true, fishId: 'creek_chub' },
  { statement: 'Golden shiners are the most popular baitfish sold in the US.', answer: true, fishId: 'golden_shiner' },
  { statement: 'Fathead minnow breeding males develop a spongy fat pad on their head.', answer: true, fishId: 'fathead_minnow' },
  { statement: 'Bluntnose minnows are rare and hard to find in Ohio.', answer: false, fishId: 'bluntnose_minnow' },
  { statement: 'Emerald shiners are the most important forage fish in Lake Erie.', answer: true, fishId: 'emerald_shiner' },
  { statement: 'Spotfin shiners have a dark blotch on the rear of the dorsal fin.', answer: true, fishId: 'spotfin_shiner' },
  { statement: 'Hornyhead chub males develop horn-like tubercles on their head.', answer: true, fishId: 'hornyhead_chub' },
  { statement: 'Rosyface shiners can tolerate polluted water.', answer: false, fishId: 'rosyface_shiner' },
  { statement: 'Southern redbelly dace have bright red bellies during breeding.', answer: true, fishId: 'southern_redbelly_dace' },
  { statement: 'Redside dace leap out of the water to catch insects.', answer: true, fishId: 'redside_dace' },
  { statement: 'Silverjaw minnows have visible silver chambers in their head.', answer: true, fishId: 'silverjaw_minnow' },
  { statement: 'Mimic shiners are easy to distinguish from other shiner species.', answer: false, fishId: 'mimic_shiner' },
  { statement: 'Redfin shiners lay their eggs in sunfish nests.', answer: true, fishId: 'redfin_shiner' },
  { statement: 'Rainbow darters are considered one of the most beautiful freshwater fish in North America.', answer: true, fishId: 'rainbow_darter' },
  { statement: 'Fantail darters get fleshy knobs on their dorsal spines during breeding.', answer: true, fishId: 'fantail_darter' },
  { statement: 'Johnny darters are one of the rarest darters in Ohio.', answer: false, fishId: 'johnny_darter' },
  { statement: 'Greenside darters are the smallest darter in Ohio.', answer: false, fishId: 'greenside_darter' },
  { statement: 'Eastern sand darters bury themselves in sand with only their eyes exposed.', answer: true, fishId: 'eastern_sand_darter' },
  { statement: 'Logperch use their pig-like snout to flip over pebbles.', answer: true, fishId: 'logperch' },
  { statement: 'Iowa darters prefer fast-moving riffle habitat.', answer: false, fishId: 'iowa_darter' },
  { statement: 'Gilt darters are common throughout Ohio.', answer: false, fishId: 'gilt_darter' },
  { statement: 'Longnose gar have remained virtually unchanged for 100 million years.', answer: true, fishId: 'longnose_gar' },
  { statement: 'Bowfin cannot breathe air.', answer: false, fishId: 'bowfin' },
  { statement: 'Paddlefish use their paddle-shaped snout to dig in mud.', answer: false, fishId: 'paddlefish' },
  { statement: 'Lake sturgeon can live over 150 years.', answer: true, fishId: 'lake_sturgeon' },
  { statement: 'American eels are born in the Sargasso Sea and migrate to Ohio rivers.', answer: true, fishId: 'american_eel' },
  { statement: 'Round goby are native to Lake Erie.', answer: false, fishId: 'round_goby' },
  { statement: 'Sea lamprey have jaws like a normal fish.', answer: false, fishId: 'sea_lamprey' },
  { statement: 'Grass carp eat their weight in vegetation daily.', answer: true, fishId: 'grass_carp' },
  { statement: 'Silver carp are famous for leaping out of the water.', answer: true, fishId: 'silver_carp_invasive' },
  { statement: 'Wild goldfish in Ohio are bright orange like pet store fish.', answer: false, fishId: 'goldfish' },
  { statement: 'European rudd have bright red-orange fins.', answer: true, fishId: 'european_rudd' },
  { statement: 'Burbot are the only freshwater cod family member.', answer: true, fishId: 'burbot' },
  { statement: 'Pirate perch have their anus in the normal position behind the body.', answer: false, fishId: 'pirate_perch' },
  { statement: 'Central mudminnows can survive being frozen in ice.', answer: true, fishId: 'central_mudminnow' },
  { statement: 'Mottled sculpin have scales covering their body.', answer: false, fishId: 'mottled_sculpin' },
  { statement: 'Brook silversides are annual fish that typically live only one year.', answer: true, fishId: 'brook_silverside' },
  { statement: 'Brook stickleback males build nests from plant material glued with kidney secretions.', answer: true, fishId: 'brook_stickleback' },
  { statement: 'Trout-perch have both an adipose fin and spiny fin rays.', answer: true, fishId: 'trout_perch' },
  { statement: 'Brindled madtoms have four dark saddle markings on their back.', answer: true, fishId: 'brindled_madtom' },
  { statement: 'Highfin carpsuckers have the same fin height as quillback.', answer: false, fishId: 'highfin_carpsucker' },
  { statement: 'Shovelnose sturgeon have a flat, shovel-shaped snout.', answer: true, fishId: 'shovelnose_sturgeon' },
  { statement: 'White catfish have deeply forked tails like channel catfish.', answer: false, fishId: 'white_catfish' },
  { statement: 'Bighead carp can consume 20% of their body weight in plankton daily.', answer: true, fishId: 'bighead_carp' },
  { statement: 'Common shiners are dull-colored even during breeding.', answer: false, fishId: 'common_shiner' },
  { statement: 'Suckermouth minnows have a fleshy sucker-like mouth.', answer: true, fishId: 'suckermouth_minnow' },
  { statement: 'River chub build the largest nests of any minnow species.', answer: true, fishId: 'river_chub' },
  { statement: 'Blackstripe topminnows live on the bottom of streams.', answer: false, fishId: 'blackstripe_topminnow' },
  { statement: 'Northern studfish breeding males turn vivid blue with red spots.', answer: true, fishId: 'northern_studfish' },
  { statement: 'Banded killifish got their name because they kill other fish.', answer: false, fishId: 'banded_killifish' },
  { statement: 'Shortnose gar have a snout longer than longnose gar.', answer: false, fishId: 'shortnose_gar' },
  { statement: 'Scarlet shiner breeding males develop brilliant scarlet-red coloring.', answer: true, fishId: 'scarlet_shiner' },
  { statement: 'Greater redhorse are one of the most common suckers in Ohio.', answer: false, fishId: 'greater_redhorse' },
  { statement: 'Smallmouth redhorse have the smallest mouth of any redhorse species.', answer: true, fishId: 'smallmouth_redhorse' },
  { statement: 'Lake chubsucker have a deeply forked tail.', answer: false, fishId: 'lake_chubsucker' },
  { statement: 'Black buffalo are the most common buffalo species in Ohio.', answer: false, fishId: 'black_buffalo' },
  { statement: 'Longnose dace are adapted for living in fast current.', answer: true, fishId: 'longnose_dace' },
  { statement: 'Sand shiners prefer deep-water rocky habitat.', answer: false, fishId: 'sand_shiner' },
  { statement: 'Silver chub use barbels to detect food in murky water.', answer: true, fishId: 'silver_chub' },
  { statement: 'Striped shiners develop pink body and blue head during breeding.', answer: true, fishId: 'striped_shiner' },
  { statement: 'Orangethroat darters have a bright orange throat patch.', answer: true, fishId: 'orangethroat_darter' },
  { statement: 'Banded darters have irregularly spaced vertical bars.', answer: false, fishId: 'banded_darter' },
  { statement: 'Bluebreast darters are common and widespread in Ohio.', answer: false, fishId: 'bluebreast_darter' },
  { statement: 'Channel darters prefer the main channel of rivers.', answer: true, fishId: 'channel_darter' },
  { statement: 'Dusky darters are brightly colored like rainbow darters.', answer: false, fishId: 'dusky_darter' },
  { statement: 'Slenderhead darters have a distinctly pointed narrow head.', answer: true, fishId: 'slenderhead_darter' },
  { statement: 'Variegate darters have four distinct saddle marks on their back.', answer: true, fishId: 'variegate_darter' },
  { statement: 'Shorthead redhorse have a long head relative to their body.', answer: false, fishId: 'shorthead_redhorse' }
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
  blue_catfish: { correct: 'Blue-gray body, no spots, straight anal fin edge', wrong: ['Dark spots on silvery body', 'Flat wide head with mottled colors', 'Yellowish body with rounded tail'] },
  rainbow_trout: { correct: 'Pink-red lateral stripe with spots everywhere', wrong: ['Chrome silver with no visible stripe', 'Golden body with dark vertical bars', 'Mottled brown with flat head'] },
  brown_trout: { correct: 'Golden-brown body with red/orange spots (often with pale halos)', wrong: ['Prominent pink-red stripe with spots everywhere', 'Forked tail with whisker barbels', 'Dark ear flap with orange breast'] },
  freshwater_drum: { correct: 'Silver deep body with humped back and rounded tail', wrong: ['Elongated body with duck-bill snout', 'Golden body with vertical bars', 'Bronze body with red eye'] },
  sauger: { correct: 'Dark body with spotted dorsal, no white tail tip', wrong: ['White tip on lower tail lobe', 'Bright golden body with orange fins', 'Deep body with dark ear flap'] },
  green_sunfish: { correct: 'Stocky sunfish with large mouth and blue-green facial streaks', wrong: ['Deep body with dark ear flap only', 'Wavy lines on face with red ear spot', 'Very long ear flap with white border'] },
  pumpkinseed: { correct: 'Colorful sunfish with red/orange spot on ear flap and wavy facial lines', wrong: ['All-dark ear flap with no markings', 'Extremely long flexible ear flap', 'Large mouth extending past eye'] },
  longear_sunfish: { correct: 'Extremely long ear flap with white border and bright orange belly', wrong: ['Short ear flap with red spot at tip', 'Dark ear flap with no border marking', 'Large mouth with blue-green face streaks'] },
  redear_sunfish: { correct: 'Sunfish with red/orange margin on short ear flap', wrong: ['All-dark ear flap with no colored edge', 'Very long flexible ear flap', 'Wavy blue and orange lines on cheeks'] },
  orangespotted_sunfish: { correct: 'Small sunfish covered in orange spots with long dark ear flap', wrong: ['Large sunfish with red ear spot', 'Stocky body with blue-green face streaks', 'Deep body with dark vertical bars'] },
  warmouth: { correct: 'Thick-bodied sunfish with large mouth and dark streaks from red eye', wrong: ['Bright red eye with six anal spines', 'Wavy blue-orange lines on cheeks', 'Deep compressed body with small mouth'] },
  spotted_bass: { correct: 'Rows of spots below lateral line with rough tongue patch', wrong: ['Jaw extending past the eye', 'Dark horizontal stripe only', 'Bronze body with no spots below lateral line'] },
  rock_bass: { correct: 'Red eye, stocky body with six anal spines and dark spots in rows', wrong: ['Large mouth with dark eye streaks', 'Bronze body with vertical bars', 'Deep compressed body with dark ear flap'] },
  hybrid_striped_bass: { correct: 'Like white bass but larger with broken/offset horizontal stripes', wrong: ['Continuous thin stripes on silver body', 'No stripes at all', 'Dark vertical bars on silver body'] },
  white_perch: { correct: 'Silver body like white bass but WITHOUT horizontal stripes', wrong: ['Distinct dark horizontal stripes', 'Golden body with vertical bars', 'Dark green body with lateral band'] },
  yellow_bullhead: { correct: 'Yellow-brown bullhead with distinctive white chin barbels', wrong: ['Dark chin barbels with mottled body', 'Deeply forked tail with spots', 'Blue-gray body with no barbels'] },
  brown_bullhead: { correct: 'Brown mottled bullhead with dark chin barbels', wrong: ['White chin barbels with yellow body', 'Pale bar at tail base', 'Blue-gray body with deeply forked tail'] },
  black_bullhead: { correct: 'Dark-bodied bullhead with pale bar at tail base and smooth pectoral spine', wrong: ['White chin barbels', 'Mottled brown body', 'Deeply forked tail with dark spots'] },
  white_catfish: { correct: 'Blue-white catfish with moderately forked tail and white chin barbels', wrong: ['Deeply forked tail with dark spots', 'Flat wide head with square tail', 'Mottled yellow-brown body'] },
  stonecat: { correct: 'Small catfish with adipose fin fused to rounded tail', wrong: ['Deeply forked tail like channel cat', 'Flat wide head like flathead', 'Very small tadpole-shaped body'] },
  tadpole_madtom: { correct: 'Tiny dark catfish with chubby tadpole shape', wrong: ['Large yellow-brown catfish', 'Four dark saddle markings', 'Deeply forked tail'] },
  brindled_madtom: { correct: 'Small catfish with four dark saddle marks and banded tail', wrong: ['Uniform dark coloring without saddles', 'Large size with yellow-brown body', 'Deeply forked tail'] },
  grass_pickerel: { correct: 'Smallest pike with dark tear-drop under eye and fully scaled cheeks', wrong: ['Very large with light spots on dark body', 'Dark markings on light body', 'Long narrow snout twice head length'] },
  brook_trout: { correct: 'Worm-like back markings, red spots with blue halos, white-edged fins', wrong: ['Red/orange spots with pale halos only', 'Chrome silver sides from lake', 'Golden-brown body with no back markings'] },
  lake_trout: { correct: 'Dark body with pale spots and deeply forked tail', wrong: ['Red spots with blue halos', 'Pink lateral stripe with spots', 'Worm-like markings on back'] },
  chinook_salmon: { correct: 'Large salmon with spots on both tail lobes and dark gum line', wrong: ['Spots on upper tail lobe only with white gums', 'No spots on tail', 'Small silver body with pink sheen'] },
  coho_salmon: { correct: 'Silver salmon with spots only on upper tail lobe and white gum line', wrong: ['Spots on both tail lobes with black gums', 'No spots at all', 'Dark body with pale spots and forked tail'] },
  rainbow_smelt: { correct: 'Small silvery fish with iridescent sheen, large teeth, and adipose fin', wrong: ['Deep body with trailing dorsal filament', 'Slender body with large eye and no adipose fin', 'Large golden body with barbels'] },
  gizzard_shad: { correct: 'Silver deep body with trailing dorsal filament and dark shoulder spot', wrong: ['Slender body with large eye', 'Silver body with horizontal stripes', 'Deep body with vertical bars'] },
  alewife: { correct: 'Slender herring with large eye, single dark shoulder spot, and serrated belly', wrong: ['Deep body with trailing dorsal filament', 'Elongated body with projecting lower jaw', 'Large-eyed fish with dorsal fin ahead of anal fin'] },
  skipjack_herring: { correct: 'Silver herring with projecting lower jaw and no shoulder spot', wrong: ['Deep body with trailing dorsal filament', 'Single dark spot behind gill with serrated belly', 'Large eye with dorsal ahead of anal fin'] },
  mooneye: { correct: 'Large-eyed silver fish with dorsal fin starting ahead of anal fin', wrong: ['Trailing dorsal filament and shoulder spot', 'Serrated belly with large eye', 'Silver body with horizontal stripes'] },
  white_sucker: { correct: 'Olive-brown cylindrical fish with downward sucker mouth and no barbels', wrong: ['Boxy concave head with dark saddles', 'Deep body with long first dorsal ray', 'Golden body with barbels'] },
  northern_hog_sucker: { correct: 'Boxy concave head with dark saddle marks and widely spaced eyes', wrong: ['Cylindrical body with smooth head', 'Deep silver body with long dorsal ray', 'Parallel rows of dark spots on sides'] },
  spotted_sucker: { correct: 'Sucker with parallel rows of dark spots, one at base of each scale', wrong: ['Boxy head with dark saddle marks', 'Cylindrical body with no markings', 'Deep body with long first dorsal ray'] },
  creek_chubsucker: { correct: 'Small round-tailed sucker with no lateral line', wrong: ['Forked tail with large scales', 'Boxy head with saddle marks', 'Deep silver body with long dorsal ray'] },
  lake_chubsucker: { correct: 'Deep-bodied round-tailed sucker without lateral line, prefers lakes', wrong: ['Slender body in fast-flowing streams', 'Forked tail with lateral line present', 'Boxy head with dark saddle marks'] },
  quillback: { correct: 'Deep silver body with very long first dorsal ray (the quill)', wrong: ['Golden body with barbels near mouth', 'Cylindrical body with sucker mouth only', 'Dark body with saddle markings'] },
  highfin_carpsucker: { correct: 'Silver carpsucker with exceptionally tall dorsal fin and nipple on lower lip', wrong: ['Long first ray only with no lip projection', 'Boxy head with dark saddle marks', 'Golden body with barbels'] },
  golden_redhorse: { correct: 'Golden-olive sucker with bright red-orange tail fin', wrong: ['Silver body with V-shaped lower lip', 'Dark-edged scales with dusky fins', 'Very large body with thick lips'] },
  silver_redhorse: { correct: 'Silvery redhorse with distinctive V-shaped lower lip', wrong: ['Golden body with bright red tail', 'Dark cross-hatched scale pattern', 'Small mouth with falcate dorsal fin'] },
  black_redhorse: { correct: 'Dark-edged scales creating cross-hatch pattern and dusky fins', wrong: ['Bright red-orange tail fin', 'V-shaped lower lip', 'Very heavy molar-like throat teeth'] },
  shorthead_redhorse: { correct: 'Short head relative to body with bright red-orange fins and straight dorsal edge', wrong: ['Long head with thick plicate lips', 'Dark cross-hatched scale pattern', 'Small mouth with falcate dorsal'] },
  river_redhorse: { correct: 'Large robust sucker with heavy molar-like pharyngeal teeth', wrong: ['Small mouth with V-shaped lip', 'Dark-edged scales and dusky fins', 'Short head with straight dorsal edge'] },
  smallmouth_redhorse: { correct: 'Small-mouthed sucker with falcate dorsal fin and short U-shaped lip', wrong: ['Large forward-facing mouth', 'Very heavy molar-like throat teeth', 'Extremely thick plicate lips'] },
  greater_redhorse: { correct: 'Very large sucker with extremely thick plicate lips and large scales', wrong: ['Small mouth with falcate dorsal', 'Dark cross-hatched scales', 'V-shaped lower lip'] },
  bigmouth_buffalo: { correct: 'Deep-bodied buffalo with forward-facing large mouth and thin lips', wrong: ['Small downward-pointing mouth with thick lips', 'Dark uniform body with moderate mouth', 'Elongated body with small head'] },
  smallmouth_buffalo: { correct: 'Deep-bodied buffalo with small downward-pointing mouth and thick lips', wrong: ['Large forward-facing mouth with thin lips', 'Elongated streamlined body', 'Dark body with moderate-sized mouth'] },
  black_buffalo: { correct: 'Darkest buffalo species with thicker, more cylindrical body', wrong: ['Large forward-facing mouth', 'Deep compressed body with thin lips', 'Elongated blue-gray body'] },
  blue_sucker: { correct: 'Elongated blue-gray sucker with small head and sickle-shaped dorsal', wrong: ['Deep-bodied with large forward mouth', 'Boxy head with dark saddles', 'Golden body with red-orange tail'] },
  central_stoneroller: { correct: 'Round snout with hard scraping ridge on lower jaw', wrong: ['Dark spot at dorsal fin base', 'Deep golden body with belly keel', 'Bold dark stripe with dark tail spot'] },
  creek_chub: { correct: 'Large minnow with dark spot at dorsal fin base and big mouth', wrong: ['Hard scraping ridge on lower jaw', 'Deep golden body with decurved lateral line', 'Blunt head with fat pad'] },
  golden_shiner: { correct: 'Deep-bodied golden minnow with decurved lateral line and belly keel', wrong: ['Slender body with emerald-green sheen', 'Dark spot at dorsal fin base', 'Blunt head with dark lateral stripe'] },
  fathead_minnow: { correct: 'Small stout minnow with blunt head; breeding males have dark fat pad', wrong: ['Dark spot at tail base with cross-hatched pattern', 'Deep golden body with belly keel', 'Slender translucent body with green sheen'] },
  bluntnose_minnow: { correct: 'Small minnow with dark lateral stripe, blunt snout, and spot at tail base', wrong: ['Blunt head with spongy fat pad (breeding males)', 'Deep golden body with belly keel', 'Emerald-green sheen and translucent body'] },
  common_shiner: { correct: 'Silver minnow with large visible scales; breeding males turn rosy pink', wrong: ['Bold dark stripe from snout to tail', 'Hard scraping ridge on lower jaw', 'Deep body with belly keel'] },
  emerald_shiner: { correct: 'Slender translucent silver minnow with emerald-green sheen', wrong: ['Deep golden body with belly keel', 'Steel-blue back with dorsal fin spot', 'Bold lateral stripe and blunt snout'] },
  spotfin_shiner: { correct: 'Steel-blue shiner with dark blotch on back of dorsal fin', wrong: ['Emerald-green translucent body', 'Deep golden body with belly keel', 'Crescent scale marks with pink breeding color'] },
  striped_shiner: { correct: 'Large shiner with crescent scale marks; breeding males pink body blue head', wrong: ['Steel-blue back with dorsal fin spot', 'Slender translucent body with green sheen', 'Hard scraping ridge on lower jaw'] },
  hornyhead_chub: { correct: 'Robust minnow with red-orange spot behind eye and head tubercles', wrong: ['Small barbel only with no eye spot', 'Hard scraping ridge on lower jaw', 'Deep golden body with belly keel'] },
  river_chub: { correct: 'Very large minnow with barbel and massive gravel nests', wrong: ['Red-orange spot behind eye', 'Hard scraping ridge on lower jaw', 'Slender body with emerald sheen'] },
  rosyface_shiner: { correct: 'Slender shiner whose breeding males have rosy-red head', wrong: ['Steel-blue back with dorsal spot', 'Deep body with crescent scale marks', 'Bold dark stripe with barbel'] },
  sand_shiner: { correct: 'Small pale straw-colored minnow with faint zig-zag lateral stripe', wrong: ['Bold dark stripe from snout to tail', 'Emerald-green translucent body', 'Deep golden body with belly keel'] },
  silverjaw_minnow: { correct: 'Translucent minnow with visible silver chambers in head and jaw', wrong: ['Bold dark lateral stripe', 'Deep golden body', 'Steel-blue back with dorsal spot'] },
  western_blacknose_dace: { correct: 'Small dace with bold dark stripe from snout to tail and tiny barbel', wrong: ['Long snout overhanging mouth', 'Two dark lateral stripes with red belly', 'Deep golden body with belly keel'] },
  longnose_dace: { correct: 'Elongated dace with distinctly long snout overhanging mouth', wrong: ['Bold dark stripe with tiny barbel', 'Two dark stripes with red belly', 'Large upturned mouth and vivid red side'] },
  southern_redbelly_dace: { correct: 'Tiny minnow with two dark stripes and brilliant red belly', wrong: ['Bold single dark stripe', 'Long snout overhanging mouth', 'Large upturned mouth'] },
  redside_dace: { correct: 'Elongated minnow with large upturned mouth and vivid red side stripe', wrong: ['Two dark stripes with red belly', 'Bold dark stripe with tiny barbel', 'Translucent body with silver head chambers'] },
  silver_chub: { correct: 'Slender silver minnow with small barbel and large eye', wrong: ['Deep golden body with belly keel', 'Emerald-green translucent body', 'Red-orange spot behind eye'] },
  mimic_shiner: { correct: 'Plain silver shiner that closely resembles other shiner species', wrong: ['Bold emerald-green sheen', 'Steel-blue back with dorsal spot', 'Deep body with crescent scale marks'] },
  scarlet_shiner: { correct: 'Shiner with breeding males showing brilliant scarlet-red coloring', wrong: ['Bright red fins with steel-blue body', 'Rosy-pink head on breeding males', 'Deep golden body with belly keel'] },
  redfin_shiner: { correct: 'Deep-bodied steel-blue shiner with bright red fins on breeding males', wrong: ['Brilliant scarlet body on breeding males', 'Emerald-green translucent body', 'Crescent marks with pink and blue'] },
  suckermouth_minnow: { correct: 'Minnow with distinctive fleshy sucker-like mouth on bottom of head', wrong: ['Hard scraping ridge on jaw', 'Deep golden body with belly keel', 'Large upturned mouth'] },
  rainbow_darter: { correct: 'Stunningly colorful with alternating blue and orange vertical bars', wrong: ['Pale body with W/X-shaped dark markings', 'Fan-shaped tail with fleshy dorsal knobs', 'Bright orange throat with blue bars'] },
  fantail_darter: { correct: 'Brown darter with fan-shaped tail and fleshy knobs on dorsal spines', wrong: ['Alternating blue and orange vertical bars', 'Pale with W/X dark markings', 'U/V-shaped dark marks on green body'] },
  johnny_darter: { correct: 'Pale darter with distinctive W- and X-shaped dark markings', wrong: ['Alternating blue and orange bars', 'Fan-shaped tail with fleshy dorsal knobs', 'Bold evenly spaced vertical bars'] },
  greenside_darter: { correct: 'Largest darter with green body and U/V-shaped dark marks', wrong: ['Alternating blue and orange bars', 'W/X-shaped dark markings', 'Transparent body that buries in sand'] },
  orangethroat_darter: { correct: 'Small darter with bright orange throat and blue-orange barring', wrong: ['W/X-shaped dark markings on pale body', 'Fan-shaped tail with fleshy knobs', 'Green body with U/V-shaped marks'] },
  banded_darter: { correct: 'Small green darter with bold, evenly spaced vertical bars', wrong: ['Alternating blue and orange bars', 'Row of dark oval blotches', 'Pig-like snout with alternating bar lengths'] },
  bluebreast_darter: { correct: 'Stunning darter with bright blue breast and red-orange side markings', wrong: ['Bright orange throat patch', 'W/X-shaped dark markings', 'Row of dark oval blotches'] },
  variegate_darter: { correct: 'Robust darter with four saddle marks and blue-green/orange bars', wrong: ['Bright blue breast with red sides', 'Bright orange throat', 'Alternating bar lengths with pig snout'] },
  eastern_sand_darter: { correct: 'Nearly transparent darter that buries in sand with only eyes exposed', wrong: ['Bold blue and orange vertical bars', 'Fan-shaped tail with dorsal knobs', 'Green body with U/V marks'] },
  logperch: { correct: 'Large darter with pig-like snout and alternating long/short vertical bars', wrong: ['Row of dark oval blotches', 'W/X-shaped dark markings', 'Blue and orange vertical bars'] },
  blackside_darter: { correct: 'Olive darter with row of dark oval blotches along side', wrong: ['Pig-like snout with alternating bar lengths', 'Blue and orange vertical bars', 'Nearly transparent body buried in sand'] },
  channel_darter: { correct: 'Small slender darter with X-shaped blotches and large head', wrong: ['Pig-like snout with alternating bars', 'Blue and orange vertical bars', 'Fan-shaped tail with dorsal knobs'] },
  iowa_darter: { correct: 'Slender darter with many narrow bars; breeding males turn blue-orange', wrong: ['Row of dark oval blotches', 'Nearly transparent body', 'Pig-like snout'] },
  dusky_darter: { correct: 'Olive darter with connected dark blotches forming band and tear mark', wrong: ['Separate oval blotches', 'Blue and orange vertical bars', 'Golden body with broad dark bars'] },
  slenderhead_darter: { correct: 'Darter with distinctly pointed narrow head and small side blotches', wrong: ['Pig-like conical snout', 'Connected dark blotches forming band', 'Blue breast with red sides'] },
  gilt_darter: { correct: 'Golden-orange darter with broad dark bars and blue-green breast', wrong: ['Pointed narrow head', 'Bright orange throat', 'W/X-shaped dark markings'] },
  longnose_gar: { correct: 'Extremely long narrow snout and diamond-shaped armored scales', wrong: ['Short broad snout', 'Long dorsal fin reaching rounded tail', 'Paddle-shaped rostrum'] },
  shortnose_gar: { correct: 'Gar with shorter broader snout and no spots on head', wrong: ['Very long narrow snout twice head length', 'Paddle-shaped rostrum', 'Bony plates with shark-like tail'] },
  bowfin: { correct: 'Long dorsal fin nearly reaching round tail, with dark spot at tail base', wrong: ['Diamond-shaped armored scales', 'Paddle-shaped snout', 'Five rows of bony plates'] },
  paddlefish: { correct: 'Unmistakable long paddle-shaped snout and smooth shark-like body', wrong: ['Diamond-shaped armored scales', 'Five rows of bony plates', 'Long dorsal fin with tail spot'] },
  lake_sturgeon: { correct: 'Large armored fish with bony plates, four barbels, and shark-like tail', wrong: ['Paddle-shaped rostrum', 'Diamond-shaped ganoid scales', 'Snake-like body with continuous fin'] },
  shovelnose_sturgeon: { correct: 'Flat shovel-shaped snout with fringed barbels and bony-plated tail stalk', wrong: ['Conical pointed snout', 'Paddle-shaped rostrum', 'Long narrow gar-like snout'] },
  american_eel: { correct: 'Snake-like body with continuous fin around tail and projecting lower jaw', wrong: ['Bony plates and shark-like tail', 'Paddle-shaped snout', 'Diamond-shaped armored scales'] },
  round_goby: { correct: 'Small bottom fish with fused pelvic suction disc and black dorsal spot', wrong: ['Circular sucker mouth with sharp teeth', 'Snake-like body with continuous fin', 'Long dorsal fin with tail spot'] },
  sea_lamprey: { correct: 'Eel-like jawless parasite with circular tooth-filled sucker and 7 gill holes', wrong: ['Fused pelvic fins forming suction disc', 'Diamond-shaped ganoid scales', 'Four barbels and bony plates'] },
  grass_carp: { correct: 'Large elongated carp with dark-edged scales and no barbels', wrong: ['Golden body with two barbels', 'Deep body with long first dorsal ray', 'Eyes set very low on head'] },
  silver_carp_invasive: { correct: 'Large silver carp with eyes set very low on head below mouth line', wrong: ['Dark mottled pattern with very large head', 'Golden body with barbels', 'Deep body with dark-edged scales only'] },
  bighead_carp: { correct: 'Enormous head with low-set eyes and dark mottled body pattern', wrong: ['Plain silver body with low-set eyes', 'Golden body with barbels', 'Elongated body with dark-edged scales'] },
  goldfish: { correct: 'Carp-like fish without barbels; wild ones dark olive not bright gold', wrong: ['Large golden body with barbels', 'Bright orange body in the wild', 'Elongated body with dark-edged scales'] },
  european_rudd: { correct: 'Golden-bodied minnow with bright red-orange fins and red eye', wrong: ['Deep golden body with no red fins', 'Silver body with dark stripes', 'Steel-blue back with dark dorsal spot'] },
  burbot: { correct: 'Elongated eel-like body with single chin barbel and mottled pattern', wrong: ['Snake-like body with continuous fin', 'Circular sucker mouth', 'Fused pelvic fins forming suction disc'] },
  trout_perch: { correct: 'Small fish combining trout features (adipose fin) and perch features (spiny fins)', wrong: ['Snake-like body', 'Circular sucker mouth', 'Wide flat head with fan pectoral fins'] },
  pirate_perch: { correct: 'Dark small fish with unique forward-migrating anus under throat', wrong: ['Adipose fin with spiny rays', 'Slender translucent body with silver stripe', 'Fan-like pectoral fins and flat head'] },
  brook_silverside: { correct: 'Extremely slender translucent fish with bright silver stripe and beak snout', wrong: ['Dark body with forward-migrating anus', 'Small stout body with rounded tail', 'Wide flat head with scaleless body'] },
  central_mudminnow: { correct: 'Small stout fish with rounded tail, dark tail-base bar, and air-breathing', wrong: ['Slender translucent body with silver stripe', 'Wide flat head with fan pectoral fins', 'Multiple isolated spines before dorsal'] },
  mottled_sculpin: { correct: 'Wide flat head with fan-like pectoral fins and scaleless mottled body', wrong: ['Small stout body with rounded tail and dark bar', 'Slender translucent body', 'Multiple isolated spines before dorsal'] },
  blackstripe_topminnow: { correct: 'Surface fish with bold dark stripe, flat head, and upturned mouth', wrong: ['Multiple thin vertical bars', 'Rows of reddish-brown spots', 'Isolated spines before dorsal fin'] },
  banded_killifish: { correct: 'Small surface fish with many thin vertical bars and flat head', wrong: ['Bold single dark lateral stripe', 'Rows of reddish-brown spots', 'Isolated spines before dorsal fin'] },
  northern_studfish: { correct: 'Large killifish with rows of red-brown spots; breeding males vivid blue', wrong: ['Bold single dark lateral stripe', 'Many thin vertical bars', 'Isolated spines before dorsal fin'] },
  brook_stickleback: { correct: 'Tiny scaleless fish with 4-6 isolated spines before dorsal fin', wrong: ['Bold dark lateral stripe', 'Many thin vertical bars', 'Wide flat head with fan pectoral fins'] }
};
export interface SimilarPair {
  fish1: string;
  fish2: string;
  hint: string;
}

export const SIMILAR_PAIRS: SimilarPair[] = [
  { fish1: 'walleye', fish2: 'sauger', hint: 'Check the tail for a white tip!' },
  {
    fish1: 'largemouth_bass',
    fish2: 'smallmouth_bass',
    hint: 'Look at how far the jaw extends relative to the eye!',
  },
  { fish1: 'black_crappie', fish2: 'white_crappie', hint: 'Random spots vs. vertical bars!' },
  {
    fish1: 'northern_pike',
    fish2: 'muskellunge',
    hint: 'Light spots on dark (pike) vs. dark marks on light (muskie)!',
  },
  {
    fish1: 'channel_catfish',
    fish2: 'flathead_catfish',
    hint: 'Forked tail vs. square tail, and check the head shape!',
  },
  {
    fish1: 'channel_catfish',
    fish2: 'blue_catfish',
    hint: "Channel cats have dark spots, blue cats don't! Also check the anal fin edge.",
  },
  {
    fish1: 'blue_catfish',
    fish2: 'flathead_catfish',
    hint: 'Blue cats are blue-gray with forked tails; flatheads are mottled brown with square tails!',
  },
  {
    fish1: 'steelhead',
    fish2: 'rainbow_trout',
    hint: 'Both are the same species! Steelhead are chrome silver from the lake.',
  },
  {
    fish1: 'walleye',
    fish2: 'saugeye',
    hint: 'Saugeye have spotted dorsal fins and darker blotches.',
  },
  {
    fish1: 'bluegill',
    fish2: 'green_sunfish',
    hint: 'Green sunfish have a larger mouth and blue-green face streaks!',
  },
  {
    fish1: 'bluegill',
    fish2: 'pumpkinseed',
    hint: 'Pumpkinseed have wavy facial lines and a red spot on the ear flap!',
  },
  {
    fish1: 'pumpkinseed',
    fish2: 'longear_sunfish',
    hint: 'Longear has a much longer ear flap with white border!',
  },
  {
    fish1: 'bluegill',
    fish2: 'redear_sunfish',
    hint: 'Redear has a red/orange border on the ear flap, bluegill is all dark!',
  },
  {
    fish1: 'green_sunfish',
    fish2: 'warmouth',
    hint: 'Warmouth has dark streaks from a red eye; green sunfish has blue-green face streaks!',
  },
  {
    fish1: 'rock_bass',
    fish2: 'warmouth',
    hint: 'Rock bass has bright red eyes and 6 anal spines; warmouth has dark eye streaks!',
  },
  {
    fish1: 'largemouth_bass',
    fish2: 'spotted_bass',
    hint: 'Check below the lateral line: spotted bass has rows of spots; largemouth does not!',
  },
  {
    fish1: 'smallmouth_bass',
    fish2: 'spotted_bass',
    hint: 'Spotted bass has rows of spots below lateral line and a rough tongue patch!',
  },
  {
    fish1: 'white_bass',
    fish2: 'white_perch',
    hint: 'White bass has distinct horizontal stripes; white perch has no stripes!',
  },
  {
    fish1: 'white_bass',
    fish2: 'hybrid_striped_bass',
    hint: 'Hybrid has broken/offset stripes and a deeper body!',
  },
  {
    fish1: 'yellow_bullhead',
    fish2: 'brown_bullhead',
    hint: 'Check chin barbels: yellow has white, brown has dark barbels!',
  },
  {
    fish1: 'brown_bullhead',
    fish2: 'black_bullhead',
    hint: 'Black bullhead has pale bar at tail base; brown has mottled pattern!',
  },
  {
    fish1: 'channel_catfish',
    fish2: 'white_catfish',
    hint: 'Channel cat has deeper forked tail and dark spots; white cat is plainer!',
  },
  {
    fish1: 'brook_trout',
    fish2: 'brown_trout',
    hint: 'Brook trout has worm-like back markings and white-edged fins; brown trout has red spots with halos!',
  },
  {
    fish1: 'chinook_salmon',
    fish2: 'coho_salmon',
    hint: 'Check gums: chinook has black gums, coho has white. Spots on both tail lobes = chinook!',
  },
  {
    fish1: 'rainbow_darter',
    fish2: 'orangethroat_darter',
    hint: 'Orangethroat has bright orange throat; rainbow has more blue and orange bars!',
  },
  {
    fish1: 'johnny_darter',
    fish2: 'fantail_darter',
    hint: 'Johnny has W/X-shaped markings; fantail has fan-shaped tail and fleshy dorsal knobs!',
  },
  {
    fish1: 'gizzard_shad',
    fish2: 'alewife',
    hint: 'Gizzard shad has trailing dorsal filament; alewife is more slender with larger eye!',
  },
  {
    fish1: 'longnose_gar',
    fish2: 'shortnose_gar',
    hint: 'Longnose has very narrow snout twice head length; shortnose is broader and shorter!',
  },
  {
    fish1: 'white_sucker',
    fish2: 'creek_chubsucker',
    hint: 'White sucker has forked tail; creek chubsucker has rounded tail and no lateral line!',
  },
  {
    fish1: 'quillback',
    fish2: 'common_carp',
    hint: 'Quillback has no barbels and small sucker mouth; carp has barbels and rubbery lips!',
  },
  {
    fish1: 'golden_redhorse',
    fish2: 'shorthead_redhorse',
    hint: 'Shorthead has shorter head and straight dorsal edge; golden has more golden color!',
  },
  {
    fish1: 'bigmouth_buffalo',
    fish2: 'smallmouth_buffalo',
    hint: 'Bigmouth has large forward-facing mouth; smallmouth has small downward-pointing mouth!',
  },
  {
    fish1: 'golden_shiner',
    fish2: 'european_rudd',
    hint: 'European rudd has bright red-orange fins; golden shiner has yellowish fins!',
  },
  {
    fish1: 'emerald_shiner',
    fish2: 'mimic_shiner',
    hint: 'Emerald shiner has green sheen; mimic shiner is plainer silver!',
  },
  {
    fish1: 'fathead_minnow',
    fish2: 'bluntnose_minnow',
    hint: 'Bluntnose has dark spot at tail base; fathead males have dark fat pad on head!',
  },
  {
    fish1: 'lake_sturgeon',
    fish2: 'shovelnose_sturgeon',
    hint: 'Lake sturgeon is much larger with conical snout; shovelnose has flat shovel-shaped snout!',
  },
  {
    fish1: 'grass_carp',
    fish2: 'common_carp',
    hint: 'Grass carp has no barbels and more elongated body; common carp has barbels!',
  },
  {
    fish1: 'blackside_darter',
    fish2: 'dusky_darter',
    hint: 'Dusky has fused blotches forming continuous band; blackside has separate oval blotches!',
  },
  {
    fish1: 'logperch',
    fish2: 'blackside_darter',
    hint: 'Logperch is much larger with pig-like snout and alternating bar lengths!',
  },
  {
    fish1: 'silver_carp_invasive',
    fish2: 'bighead_carp',
    hint: 'Silver carp is plain silver; bighead has dark mottled pattern and even larger head!',
  },
  {
    fish1: 'western_blacknose_dace',
    fish2: 'longnose_dace',
    hint: 'Blacknose has bold dark stripe; longnose has longer snout and mottled pattern!',
  },
  {
    fish1: 'stonecat',
    fish2: 'tadpole_madtom',
    hint: 'Stonecat is larger and yellowish; tadpole madtom is smaller and darker!',
  },
];

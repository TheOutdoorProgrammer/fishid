// ===== FISH SVG ILLUSTRATION SYSTEM =====
// Each fish is rendered as a unique SVG illustration with realistic colors and identifying features

function getFishSVG(fishId, size = 280) {
  const svgFunctions = {
    walleye: svgWalleye,
    yellow_perch: svgYellowPerch,
    smallmouth_bass: svgSmallmouthBass,
    largemouth_bass: svgLargemouthBass,
    channel_catfish: svgChannelCatfish,
    bluegill: svgBluegill,
    black_crappie: svgBlackCrappie,
    white_crappie: svgWhiteCrappie,
    northern_pike: svgNorthernPike,
    muskellunge: svgMuskellunge,
    steelhead: svgSteelhead,
    saugeye: svgSaugeye,
    white_bass: svgWhiteBass,
    common_carp: svgCommonCarp,
    flathead_catfish: svgFlatheadCatfish,
    rainbow_trout: svgRainbowTrout,
    brown_trout: svgBrownTrout,
    freshwater_drum: svgFreshwaterDrum,
    sauger: svgSauger
  };
  const fn = svgFunctions[fishId];
  if (!fn) return `<div style="font-size:64px;text-align:center">🐟</div>`;
  return fn(size);
}

function svgWrap(size, id, inner) {
  return `<svg viewBox="0 0 300 160" width="${size}" xmlns="http://www.w3.org/2000/svg" style="filter:drop-shadow(2px 4px 6px rgba(0,0,0,0.2))">${inner}</svg>`;
}

// ===== WALLEYE =====
function svgWalleye(s) {
  return svgWrap(s, 'walleye', `
    <defs>
      <linearGradient id="wg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#5A4E2A"/><stop offset="35%" stop-color="#8B7D3C"/>
        <stop offset="70%" stop-color="#A89850"/><stop offset="100%" stop-color="#D4C890"/>
      </linearGradient>
    </defs>
    <!-- Body -->
    <path d="M 35,78 C 28,62 38,44 60,37 C 85,28 120,24 158,23 C 195,24 225,32 245,48 L 245,78 L 245,108 C 225,124 195,132 158,133 C 120,132 85,128 60,119 C 38,112 28,94 35,78 Z" fill="url(#wg)" stroke="#4A3C20" stroke-width="1.5"/>
    <!-- Dark saddle marks -->
    <path d="M 100,30 Q 105,50 100,70" stroke="#4A3C20" stroke-width="4" fill="none" opacity="0.3"/>
    <path d="M 140,26 Q 145,48 140,68" stroke="#4A3C20" stroke-width="4" fill="none" opacity="0.25"/>
    <path d="M 180,28 Q 185,50 180,70" stroke="#4A3C20" stroke-width="4" fill="none" opacity="0.25"/>
    <!-- Spiny dorsal -->
    <path d="M 85,37 L 88,12 L 95,14 L 102,8 L 110,15 L 118,10 L 125,16 L 132,12 L 140,18 L 148,24" fill="#6B5B30" stroke="#4A3C20" stroke-width="0.8" opacity="0.85"/>
    <!-- Soft dorsal -->
    <path d="M 175,28 Q 185,18 195,20 Q 205,22 210,28 L 210,35" fill="#7B6B38" stroke="#4A3C20" stroke-width="0.8" opacity="0.8"/>
    <!-- Tail (forked) -->
    <path d="M 245,48 L 275,25 Q 282,35 270,55 L 255,68 Z" fill="#7B6B38" stroke="#4A3C20" stroke-width="0.8"/>
    <path d="M 245,108 L 275,131 Q 282,121 270,101 L 255,88 Z" fill="#7B6B38" stroke="#4A3C20" stroke-width="0.8"/>
    <!-- WHITE TIP on lower tail (KEY FEATURE) -->
    <path d="M 270,120 L 275,131 Q 280,126 275,118 Z" fill="white" stroke="#ccc" stroke-width="0.5"/>
    <!-- Pectoral fin -->
    <path d="M 65,90 Q 55,105 70,115 Q 80,108 75,92 Z" fill="#8B7D3C" stroke="#4A3C20" stroke-width="0.5" opacity="0.7"/>
    <!-- Anal fin -->
    <path d="M 195,125 Q 200,140 215,138 Q 218,132 215,122" fill="#7B6B38" stroke="#4A3C20" stroke-width="0.5" opacity="0.7"/>
    <!-- Lateral line -->
    <path d="M 55,75 Q 120,70 200,73 Q 230,75 250,78" stroke="#6B5B30" stroke-width="0.8" fill="none" opacity="0.4"/>
    <!-- Eye (LARGE, GLASSY - KEY FEATURE) -->
    <circle cx="50" cy="72" r="10" fill="#E8E0B0" stroke="#3A3020" stroke-width="1"/>
    <circle cx="50" cy="72" r="6.5" fill="#2A2A2A"/>
    <circle cx="47" cy="69" r="2.5" fill="rgba(255,255,255,0.8)"/>
    <circle cx="53" cy="74" r="1.2" fill="rgba(255,255,255,0.4)"/>
    <!-- Mouth -->
    <path d="M 35,78 Q 30,80 28,82" stroke="#4A3C20" stroke-width="1.5" fill="none"/>
  `);
}

// ===== YELLOW PERCH =====
function svgYellowPerch(s) {
  return svgWrap(s, 'perch', `
    <defs>
      <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#B89018"/><stop offset="40%" stop-color="#D4A820"/>
        <stop offset="75%" stop-color="#E8C840"/><stop offset="100%" stop-color="#F5E8A0"/>
      </linearGradient>
    </defs>
    <path d="M 38,78 C 30,62 40,46 62,38 C 88,28 120,25 158,24 C 195,25 222,32 242,48 L 242,78 L 242,108 C 222,124 195,131 158,132 C 120,131 88,128 62,118 C 40,110 30,94 38,78 Z" fill="url(#pg)" stroke="#8B6B10" stroke-width="1.5"/>
    <!-- DARK VERTICAL BARS (KEY FEATURE) -->
    <path d="M 80,38 Q 82,78 78,115" stroke="#3A2A08" stroke-width="5" fill="none" opacity="0.6"/>
    <path d="M 100,32 Q 102,78 98,120" stroke="#3A2A08" stroke-width="5" fill="none" opacity="0.6"/>
    <path d="M 120,28 Q 122,78 118,125" stroke="#3A2A08" stroke-width="5" fill="none" opacity="0.55"/>
    <path d="M 140,26 Q 142,78 138,128" stroke="#3A2A08" stroke-width="5" fill="none" opacity="0.55"/>
    <path d="M 160,26 Q 162,78 158,128" stroke="#3A2A08" stroke-width="5" fill="none" opacity="0.5"/>
    <path d="M 180,28 Q 182,75 178,122" stroke="#3A2A08" stroke-width="5" fill="none" opacity="0.5"/>
    <path d="M 200,32 Q 202,72 198,118" stroke="#3A2A08" stroke-width="5" fill="none" opacity="0.45"/>
    <!-- Spiny dorsal -->
    <path d="M 85,38 L 90,15 L 100,18 L 110,12 L 120,19 L 130,14 L 140,20 L 148,24" fill="#8B7818" stroke="#6B5810" stroke-width="0.8"/>
    <!-- Soft dorsal -->
    <path d="M 172,27 Q 182,18 192,22 Q 200,25 205,30" fill="#A89020" stroke="#6B5810" stroke-width="0.8"/>
    <!-- Tail -->
    <path d="M 242,48 L 268,30 Q 275,40 265,58 L 250,68 Z" fill="#C89818" stroke="#8B6B10" stroke-width="0.8"/>
    <path d="M 242,108 L 268,126 Q 275,116 265,98 L 250,88 Z" fill="#C89818" stroke="#8B6B10" stroke-width="0.8"/>
    <!-- ORANGE lower fins (KEY FEATURE) -->
    <path d="M 68,92 Q 58,108 72,118 Q 82,110 76,94 Z" fill="#D07020" stroke="#A05818" stroke-width="0.5" opacity="0.8"/>
    <path d="M 115,125 Q 110,140 125,142 Q 130,138 125,126" fill="#D07020" stroke="#A05818" stroke-width="0.5" opacity="0.8"/>
    <path d="M 192,125 Q 198,142 212,138 Q 215,130 210,120" fill="#D07020" stroke="#A05818" stroke-width="0.5" opacity="0.8"/>
    <!-- Eye -->
    <circle cx="52" cy="72" r="7" fill="#F0E880" stroke="#5A4A10" stroke-width="1"/>
    <circle cx="52" cy="72" r="4" fill="#2A2A2A"/>
    <circle cx="50" cy="70" r="1.8" fill="rgba(255,255,255,0.7)"/>
    <!-- Mouth -->
    <path d="M 38,78 Q 33,80 30,82" stroke="#8B6B10" stroke-width="1.2" fill="none"/>
  `);
}

// ===== SMALLMOUTH BASS =====
function svgSmallmouthBass(s) {
  return svgWrap(s, 'smb', `
    <defs>
      <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#5A4810"/><stop offset="35%" stop-color="#8B6914"/>
        <stop offset="70%" stop-color="#A07828"/><stop offset="100%" stop-color="#D4C090"/>
      </linearGradient>
    </defs>
    <path d="M 35,78 C 28,58 38,40 62,32 C 90,22 125,20 160,20 C 198,22 228,32 248,50 L 248,78 L 248,106 C 228,124 198,134 160,136 C 125,136 90,134 62,124 C 38,116 28,98 35,78 Z" fill="url(#sg)" stroke="#4A3808" stroke-width="1.5"/>
    <!-- Subtle vertical bars -->
    <path d="M 95,35 Q 97,78 93,120" stroke="#4A3808" stroke-width="3" fill="none" opacity="0.2"/>
    <path d="M 120,28 Q 122,78 118,128" stroke="#4A3808" stroke-width="3" fill="none" opacity="0.2"/>
    <path d="M 145,24 Q 147,78 143,132" stroke="#4A3808" stroke-width="3" fill="none" opacity="0.18"/>
    <path d="M 170,24 Q 172,75 168,130" stroke="#4A3808" stroke-width="3" fill="none" opacity="0.15"/>
    <!-- Connected dorsal (KEY - shallow notch) -->
    <path d="M 80,35 L 85,10 L 95,14 L 105,6 L 115,14 L 125,8 L 135,15 L 145,10 L 155,16 L 160,22 Q 170,16 180,14 Q 195,16 205,22 L 210,32" fill="#7B5910" stroke="#4A3808" stroke-width="0.8"/>
    <!-- Tail -->
    <path d="M 248,50 L 275,28 Q 282,42 268,60 L 255,70 Z" fill="#7B5910" stroke="#4A3808" stroke-width="0.8"/>
    <path d="M 248,106 L 275,128 Q 282,114 268,96 L 255,86 Z" fill="#7B5910" stroke="#4A3808" stroke-width="0.8"/>
    <!-- Pectoral -->
    <path d="M 68,90 Q 55,108 72,118 Q 84,108 78,92 Z" fill="#8B6914" stroke="#4A3808" stroke-width="0.5" opacity="0.7"/>
    <!-- Jaw line - ends AT the eye (KEY FEATURE) -->
    <path d="M 35,78 Q 30,82 28,84" stroke="#4A3808" stroke-width="1.5" fill="none"/>
    <line x1="28" y1="84" x2="48" y2="82" stroke="#4A3808" stroke-width="0.8" opacity="0.3" stroke-dasharray="2,2"/>
    <!-- RED EYE (KEY FEATURE) -->
    <circle cx="50" cy="68" r="8" fill="#C83030" stroke="#4A3808" stroke-width="1"/>
    <circle cx="50" cy="68" r="5" fill="#2A2A2A"/>
    <circle cx="48" cy="66" r="2" fill="rgba(255,255,255,0.7)"/>
  `);
}

// ===== LARGEMOUTH BASS =====
function svgLargemouthBass(s) {
  return svgWrap(s, 'lmb', `
    <defs>
      <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#2A5520"/><stop offset="35%" stop-color="#3D6B30"/>
        <stop offset="70%" stop-color="#5A8548"/><stop offset="100%" stop-color="#C8D8A8"/>
      </linearGradient>
    </defs>
    <path d="M 32,78 C 25,56 35,38 60,30 C 88,20 125,18 162,18 C 200,20 230,30 250,50 L 250,78 L 250,106 C 230,126 200,136 162,138 C 125,138 88,136 60,126 C 35,118 25,100 32,78 Z" fill="url(#lg)" stroke="#1A3A10" stroke-width="1.5"/>
    <!-- DARK LATERAL STRIPE (KEY FEATURE) -->
    <path d="M 50,78 Q 100,74 150,76 Q 200,78 240,80" stroke="#1A3A10" stroke-width="6" fill="none" opacity="0.5"/>
    <!-- Deeply notched dorsal (KEY - almost separated) -->
    <path d="M 78,33 L 82,8 L 92,12 L 100,5 L 108,13 L 116,7 L 124,14 L 132,10 L 140,16 L 148,20" fill="#3A5828" stroke="#1A3A10" stroke-width="0.8"/>
    <!-- GAP in dorsal -->
    <path d="M 170,22 Q 180,14 192,16 Q 205,18 212,28 L 215,35" fill="#4A6838" stroke="#1A3A10" stroke-width="0.8"/>
    <!-- Tail -->
    <path d="M 250,50 L 278,26 Q 285,40 272,58 L 258,70 Z" fill="#3A5828" stroke="#1A3A10" stroke-width="0.8"/>
    <path d="M 250,106 L 278,130 Q 285,116 272,98 L 258,86 Z" fill="#3A5828" stroke="#1A3A10" stroke-width="0.8"/>
    <!-- Pectoral -->
    <path d="M 65,90 Q 52,108 68,120 Q 82,110 76,92 Z" fill="#3D6B30" stroke="#1A3A10" stroke-width="0.5" opacity="0.7"/>
    <!-- LARGE MOUTH extending past eye (KEY FEATURE) -->
    <path d="M 32,78 Q 24,84 20,88" stroke="#1A3A10" stroke-width="2" fill="none"/>
    <line x1="20" y1="88" x2="55" y2="82" stroke="rgba(255,0,0,0.15)" stroke-width="1" stroke-dasharray="3,2"/>
    <!-- Eye -->
    <circle cx="48" cy="65" r="7.5" fill="#C8D060" stroke="#1A3A10" stroke-width="1"/>
    <circle cx="48" cy="65" r="4.5" fill="#2A2A2A"/>
    <circle cx="46" cy="63" r="2" fill="rgba(255,255,255,0.7)"/>
  `);
}

// ===== CHANNEL CATFISH =====
function svgChannelCatfish(s) {
  return svgWrap(s, 'ccat', `
    <defs>
      <linearGradient id="ccg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#3A4858"/><stop offset="40%" stop-color="#5A6B78"/>
        <stop offset="100%" stop-color="#B8C0C8"/>
      </linearGradient>
    </defs>
    <!-- Body - catfish shape, wider head -->
    <path d="M 30,78 C 22,60 30,44 55,38 C 75,32 95,30 120,30 Q 160,30 195,38 C 220,44 240,55 252,68 L 252,78 L 252,88 C 240,101 220,112 195,118 C 160,126 120,126 85,122 C 55,118 35,108 30,92 Z" fill="url(#ccg)" stroke="#2A3848" stroke-width="1.5"/>
    <!-- Dark spots (KEY FEATURE) -->
    <circle cx="90" cy="65" r="2.5" fill="#2A3848" opacity="0.4"/>
    <circle cx="110" cy="55" r="2" fill="#2A3848" opacity="0.35"/>
    <circle cx="130" cy="70" r="2.5" fill="#2A3848" opacity="0.35"/>
    <circle cx="150" cy="58" r="2" fill="#2A3848" opacity="0.3"/>
    <circle cx="105" cy="85" r="2" fill="#2A3848" opacity="0.3"/>
    <circle cx="140" cy="90" r="2.5" fill="#2A3848" opacity="0.3"/>
    <circle cx="170" cy="65" r="1.8" fill="#2A3848" opacity="0.25"/>
    <circle cx="165" cy="85" r="2" fill="#2A3848" opacity="0.25"/>
    <!-- BARBELS/WHISKERS (KEY FEATURE) -->
    <path d="M 35,70 Q 15,55 5,50" stroke="#4A5A68" stroke-width="1.5" fill="none"/>
    <path d="M 35,72 Q 18,62 8,60" stroke="#4A5A68" stroke-width="1.5" fill="none"/>
    <path d="M 35,82 Q 20,88 10,92" stroke="#4A5A68" stroke-width="1.2" fill="none"/>
    <path d="M 35,84 Q 22,92 12,98" stroke="#4A5A68" stroke-width="1.2" fill="none"/>
    <!-- Dorsal fin with spine -->
    <path d="M 95,30 L 92,6 L 100,10 L 108,4 L 115,12 L 120,30" fill="#4A5A68" stroke="#2A3848" stroke-width="0.8"/>
    <!-- Adipose fin -->
    <ellipse cx="210" cy="40" rx="12" ry="6" fill="#5A6B78" stroke="#2A3848" stroke-width="0.5" opacity="0.7"/>
    <!-- FORKED TAIL (KEY - distinguishes from flathead) -->
    <path d="M 252,68 L 278,40 Q 286,52 274,65 L 258,74 Z" fill="#4A5A68" stroke="#2A3848" stroke-width="0.8"/>
    <path d="M 252,88 L 278,116 Q 286,104 274,91 L 258,82 Z" fill="#4A5A68" stroke="#2A3848" stroke-width="0.8"/>
    <!-- Pectoral with spine -->
    <path d="M 62,88 Q 48,105 65,118 Q 78,108 72,90 Z" fill="#5A6B78" stroke="#2A3848" stroke-width="0.8"/>
    <!-- Anal fin -->
    <path d="M 170,122 Q 178,140 198,138 Q 205,130 200,118" fill="#4A5A68" stroke="#2A3848" stroke-width="0.5" opacity="0.7"/>
    <!-- Flat head profile -->
    <path d="M 30,65 Q 28,72 30,78 Q 28,84 30,92" stroke="#2A3848" stroke-width="1" fill="none"/>
    <!-- Small eye -->
    <circle cx="44" cy="68" r="5" fill="#C0C8B0" stroke="#2A3848" stroke-width="1"/>
    <circle cx="44" cy="68" r="3" fill="#2A2A2A"/>
    <circle cx="43" cy="67" r="1.2" fill="rgba(255,255,255,0.6)"/>
  `);
}

// ===== BLUEGILL =====
function svgBluegill(s) {
  return svgWrap(s, 'bg', `
    <defs>
      <linearGradient id="bgg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#1A4A3E"/><stop offset="30%" stop-color="#2E5B4E"/>
        <stop offset="60%" stop-color="#3A7060"/><stop offset="100%" stop-color="#E8A830"/>
      </linearGradient>
    </defs>
    <!-- DEEP body (KEY - compressed shape) -->
    <path d="M 55,80 C 48,50 60,25 85,16 C 115,6 145,4 172,10 C 200,18 225,35 240,58 L 240,80 L 240,102 C 225,125 200,142 172,150 C 145,156 115,154 85,144 C 60,135 48,110 55,80 Z" fill="url(#bgg)" stroke="#1A3A2E" stroke-width="1.5"/>
    <!-- Faint vertical bars -->
    <path d="M 100,20 Q 102,80 98,140" stroke="#1A3A2E" stroke-width="3" fill="none" opacity="0.12"/>
    <path d="M 125,12 Q 127,80 123,148" stroke="#1A3A2E" stroke-width="3" fill="none" opacity="0.1"/>
    <path d="M 150,8 Q 152,80 148,152" stroke="#1A3A2E" stroke-width="3" fill="none" opacity="0.1"/>
    <path d="M 175,12 Q 177,78 173,148" stroke="#1A3A2E" stroke-width="3" fill="none" opacity="0.08"/>
    <!-- DARK EAR FLAP (KEY FEATURE) -->
    <ellipse cx="75" cy="68" rx="8" ry="5" fill="#0A1A18" stroke="#0A0A08" stroke-width="1"/>
    <!-- Spiny dorsal -->
    <path d="M 88,16 L 92,0 Q 100,-2 108,0 L 115,-5 L 122,2 L 130,-3 L 138,4 L 146,0 L 155,6 L 165,10 Q 180,5 195,8 Q 210,14 218,25" fill="#2A4A3E" stroke="#1A3A2E" stroke-width="0.8"/>
    <!-- Tail -->
    <path d="M 240,58 L 262,38 Q 270,50 260,65 L 248,72 Z" fill="#2E5B4E" stroke="#1A3A2E" stroke-width="0.8"/>
    <path d="M 240,102 L 262,122 Q 270,110 260,95 L 248,88 Z" fill="#2E5B4E" stroke="#1A3A2E" stroke-width="0.8"/>
    <!-- ORANGE BREAST (KEY FEATURE) -->
    <path d="M 65,100 Q 80,120 100,130 Q 120,138 140,140 Q 120,135 100,125 Q 80,115 65,100 Z" fill="#E89020" opacity="0.6"/>
    <!-- Pectoral -->
    <path d="M 72,92 Q 58,108 72,120 Q 84,112 78,94 Z" fill="#3A7060" stroke="#1A3A2E" stroke-width="0.5" opacity="0.7"/>
    <!-- Eye -->
    <circle cx="62" cy="60" r="6" fill="#D0D8A0" stroke="#1A3A2E" stroke-width="1"/>
    <circle cx="62" cy="60" r="3.5" fill="#2A2A2A"/>
    <circle cx="60" cy="58" r="1.5" fill="rgba(255,255,255,0.7)"/>
    <!-- Mouth (small) -->
    <path d="M 55,80 Q 50,82 48,84" stroke="#1A3A2E" stroke-width="1" fill="none"/>
  `);
}

// ===== BLACK CRAPPIE =====
function svgBlackCrappie(s) {
  return svgWrap(s, 'bc', `
    <defs>
      <linearGradient id="bcg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#4A5848"/><stop offset="40%" stop-color="#6B7B68"/>
        <stop offset="100%" stop-color="#C8D0C0"/>
      </linearGradient>
    </defs>
    <!-- Deep body -->
    <path d="M 52,80 C 45,52 58,28 82,18 C 112,8 142,5 170,10 C 198,18 222,35 238,56 L 238,80 L 238,104 C 222,125 198,142 170,150 C 142,155 112,152 82,142 C 58,132 45,108 52,80 Z" fill="url(#bcg)" stroke="#3A4838" stroke-width="1.5"/>
    <!-- RANDOM DARK SPOTS (KEY FEATURE - not bars!) -->
    <circle cx="85" cy="55" r="3.5" fill="#2A3828" opacity="0.5"/>
    <circle cx="100" cy="40" r="3" fill="#2A3828" opacity="0.45"/>
    <circle cx="105" cy="70" r="4" fill="#2A3828" opacity="0.5"/>
    <circle cx="120" cy="50" r="3.5" fill="#2A3828" opacity="0.45"/>
    <circle cx="125" cy="85" r="3" fill="#2A3828" opacity="0.4"/>
    <circle cx="140" cy="35" r="3" fill="#2A3828" opacity="0.4"/>
    <circle cx="142" cy="65" r="4" fill="#2A3828" opacity="0.45"/>
    <circle cx="155" cy="50" r="3" fill="#2A3828" opacity="0.4"/>
    <circle cx="160" cy="80" r="3.5" fill="#2A3828" opacity="0.4"/>
    <circle cx="175" cy="40" r="2.5" fill="#2A3828" opacity="0.35"/>
    <circle cx="178" cy="68" r="3" fill="#2A3828" opacity="0.35"/>
    <circle cx="190" cy="55" r="2.5" fill="#2A3828" opacity="0.3"/>
    <circle cx="130" cy="105" r="3" fill="#2A3828" opacity="0.35"/>
    <circle cx="155" cy="110" r="2.5" fill="#2A3828" opacity="0.3"/>
    <circle cx="110" cy="100" r="2.5" fill="#2A3828" opacity="0.35"/>
    <circle cx="95" cy="90" r="2.5" fill="#2A3828" opacity="0.4"/>
    <!-- Dorsal (7-8 spines - KEY) -->
    <path d="M 85,18 L 88,0 L 96,3 L 104,-2 L 112,4 L 120,-1 L 128,5 L 136,2 L 142,8 Q 165,4 185,12 Q 200,18 210,30" fill="#5A6A58" stroke="#3A4838" stroke-width="0.8"/>
    <!-- Tail -->
    <path d="M 238,56 L 262,35 Q 270,48 258,62 L 245,72 Z" fill="#5A6A58" stroke="#3A4838" stroke-width="0.8"/>
    <path d="M 238,104 L 262,125 Q 270,112 258,98 L 245,88 Z" fill="#5A6A58" stroke="#3A4838" stroke-width="0.8"/>
    <!-- Pectoral -->
    <path d="M 68,92 Q 55,108 70,118 Q 82,110 76,94 Z" fill="#6B7B68" stroke="#3A4838" stroke-width="0.5" opacity="0.7"/>
    <!-- Eye -->
    <circle cx="60" cy="65" r="6.5" fill="#D0D8C0" stroke="#3A4838" stroke-width="1"/>
    <circle cx="60" cy="65" r="4" fill="#2A2A2A"/>
    <circle cx="58" cy="63" r="1.8" fill="rgba(255,255,255,0.7)"/>
    <!-- Mouth (larger than bluegill) -->
    <path d="M 52,80 Q 46,83 42,86" stroke="#3A4838" stroke-width="1.2" fill="none"/>
  `);
}

// ===== WHITE CRAPPIE =====
function svgWhiteCrappie(s) {
  return svgWrap(s, 'wc', `
    <defs>
      <linearGradient id="wcg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#5A6858"/><stop offset="40%" stop-color="#7B8878"/>
        <stop offset="100%" stop-color="#D0D8C8"/>
      </linearGradient>
    </defs>
    <!-- Deep body (slightly more elongated than black crappie) -->
    <path d="M 48,80 C 42,54 55,30 80,20 C 108,10 140,7 168,12 C 196,18 220,35 238,55 L 238,80 L 238,105 C 220,125 196,140 168,148 C 140,153 108,150 80,140 C 55,130 42,106 48,80 Z" fill="url(#wcg)" stroke="#485848" stroke-width="1.5"/>
    <!-- VERTICAL DARK BARS (KEY FEATURE - organized, not random!) -->
    <path d="M 88,25 Q 90,80 86,135" stroke="#2A3828" stroke-width="5" fill="none" opacity="0.35"/>
    <path d="M 108,18 Q 110,80 106,142" stroke="#2A3828" stroke-width="5" fill="none" opacity="0.35"/>
    <path d="M 128,14 Q 130,80 126,146" stroke="#2A3828" stroke-width="5" fill="none" opacity="0.35"/>
    <path d="M 148,12 Q 150,80 146,148" stroke="#2A3828" stroke-width="5" fill="none" opacity="0.35"/>
    <path d="M 168,14 Q 170,78 166,146" stroke="#2A3828" stroke-width="5" fill="none" opacity="0.3"/>
    <path d="M 188,20 Q 190,75 186,138" stroke="#2A3828" stroke-width="5" fill="none" opacity="0.28"/>
    <path d="M 208,30 Q 210,72 206,128" stroke="#2A3828" stroke-width="4" fill="none" opacity="0.25"/>
    <!-- Dorsal (5-6 spines - KEY fewer than black crappie) -->
    <path d="M 98,20 L 102,2 L 112,6 L 120,0 L 128,6 L 136,2 L 142,10 Q 168,4 190,14 Q 205,22 215,35" fill="#687868" stroke="#485848" stroke-width="0.8"/>
    <!-- Tail -->
    <path d="M 238,55 L 262,35 Q 270,48 258,62 L 246,72 Z" fill="#687868" stroke="#485848" stroke-width="0.8"/>
    <path d="M 238,105 L 262,125 Q 270,112 258,98 L 246,88 Z" fill="#687868" stroke="#485848" stroke-width="0.8"/>
    <!-- Pectoral -->
    <path d="M 65,92 Q 52,108 68,118 Q 80,110 74,94 Z" fill="#7B8878" stroke="#485848" stroke-width="0.5" opacity="0.7"/>
    <!-- Eye -->
    <circle cx="58" cy="65" r="6.5" fill="#D0D8C0" stroke="#485848" stroke-width="1"/>
    <circle cx="58" cy="65" r="4" fill="#2A2A2A"/>
    <circle cx="56" cy="63" r="1.8" fill="rgba(255,255,255,0.7)"/>
    <!-- Mouth -->
    <path d="M 48,80 Q 42,83 38,86" stroke="#485848" stroke-width="1.2" fill="none"/>
  `);
}

// ===== NORTHERN PIKE =====
function svgNorthernPike(s) {
  return svgWrap(s, 'pike', `
    <defs>
      <linearGradient id="pkg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#2A4820"/><stop offset="40%" stop-color="#3A5C2E"/>
        <stop offset="100%" stop-color="#8AA870"/>
      </linearGradient>
    </defs>
    <!-- ELONGATED body (KEY) -->
    <path d="M 15,78 C 10,68 12,55 28,48 C 45,40 80,35 130,33 C 180,32 220,35 245,42 L 245,78 L 245,114 C 220,121 180,124 130,123 C 80,122 45,116 28,108 C 12,101 10,88 15,78 Z" fill="url(#pkg)" stroke="#1A3818" stroke-width="1.5"/>
    <!-- LIGHT SPOTS on dark body (KEY - opposite of muskie!) -->
    <ellipse cx="60" cy="65" rx="4" ry="2.5" fill="#8AA870" opacity="0.5" transform="rotate(-10 60 65)"/>
    <ellipse cx="80" cy="58" rx="4.5" ry="2.5" fill="#8AA870" opacity="0.45" transform="rotate(5 80 58)"/>
    <ellipse cx="100" cy="68" rx="4" ry="2.5" fill="#8AA870" opacity="0.45"/>
    <ellipse cx="120" cy="55" rx="4.5" ry="2.5" fill="#8AA870" opacity="0.4" transform="rotate(-5 120 55)"/>
    <ellipse cx="140" cy="65" rx="4" ry="2.5" fill="#8AA870" opacity="0.4"/>
    <ellipse cx="160" cy="58" rx="4.5" ry="2.5" fill="#8AA870" opacity="0.4" transform="rotate(8 160 58)"/>
    <ellipse cx="180" cy="68" rx="4" ry="2.5" fill="#8AA870" opacity="0.35"/>
    <ellipse cx="200" cy="60" rx="4" ry="2.5" fill="#8AA870" opacity="0.35"/>
    <ellipse cx="90" cy="85" rx="4" ry="2.5" fill="#8AA870" opacity="0.4" transform="rotate(5 90 85)"/>
    <ellipse cx="120" cy="90" rx="4.5" ry="2.5" fill="#8AA870" opacity="0.38"/>
    <ellipse cx="150" cy="85" rx="4" ry="2.5" fill="#8AA870" opacity="0.35" transform="rotate(-5 150 85)"/>
    <ellipse cx="180" cy="88" rx="4" ry="2.5" fill="#8AA870" opacity="0.3"/>
    <!-- Dorsal far back (KEY) -->
    <path d="M 200,36 L 195,18 L 205,20 L 212,14 L 218,22 L 225,18 L 232,24 L 240,35" fill="#2A4820" stroke="#1A3818" stroke-width="0.8"/>
    <!-- Tail -->
    <path d="M 245,42 L 275,22 Q 285,40 270,60 L 252,70 Z" fill="#2A4820" stroke="#1A3818" stroke-width="0.8"/>
    <path d="M 245,114 L 275,134 Q 285,116 270,96 L 252,86 Z" fill="#2A4820" stroke="#1A3818" stroke-width="0.8"/>
    <!-- DUCK-BILL SNOUT (KEY) -->
    <path d="M 15,78 Q 8,72 5,68 Q 3,74 5,78 Q 3,82 5,88 Q 8,84 15,78 Z" fill="#3A5C2E" stroke="#1A3818" stroke-width="1"/>
    <!-- Pectoral -->
    <path d="M 40,88 Q 30,102 42,112 Q 52,105 48,90 Z" fill="#3A5C2E" stroke="#1A3818" stroke-width="0.5" opacity="0.7"/>
    <!-- Eye -->
    <circle cx="22" cy="72" r="5.5" fill="#C8D060" stroke="#1A3818" stroke-width="1"/>
    <circle cx="22" cy="72" r="3.2" fill="#2A2A2A"/>
    <circle cx="20" cy="70" r="1.5" fill="rgba(255,255,255,0.7)"/>
  `);
}

// ===== MUSKELLUNGE =====
function svgMuskellunge(s) {
  return svgWrap(s, 'muskie', `
    <defs>
      <linearGradient id="mkg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#607858"/><stop offset="40%" stop-color="#8B9B78"/>
        <stop offset="100%" stop-color="#C8D0B8"/>
      </linearGradient>
    </defs>
    <!-- ELONGATED body (like pike but often larger) -->
    <path d="M 12,78 C 8,68 10,55 25,48 C 42,40 78,35 128,33 C 178,32 218,35 245,42 L 245,78 L 245,114 C 218,121 178,124 128,123 C 78,122 42,116 25,108 C 10,101 8,88 12,78 Z" fill="url(#mkg)" stroke="#3A4838" stroke-width="1.5"/>
    <!-- DARK BARS on light body (KEY - opposite of pike!) -->
    <path d="M 55,48 Q 58,78 55,108" stroke="#3A4838" stroke-width="4" fill="none" opacity="0.3"/>
    <path d="M 80,40 Q 83,78 80,116" stroke="#3A4838" stroke-width="4" fill="none" opacity="0.28"/>
    <path d="M 105,36 Q 108,78 105,120" stroke="#3A4838" stroke-width="4" fill="none" opacity="0.25"/>
    <path d="M 130,35 Q 133,78 130,121" stroke="#3A4838" stroke-width="4" fill="none" opacity="0.25"/>
    <path d="M 155,35 Q 158,78 155,121" stroke="#3A4838" stroke-width="4" fill="none" opacity="0.22"/>
    <path d="M 180,36 Q 183,78 180,120" stroke="#3A4838" stroke-width="4" fill="none" opacity="0.2"/>
    <path d="M 205,38 Q 208,76 205,116" stroke="#3A4838" stroke-width="3.5" fill="none" opacity="0.18"/>
    <!-- Some dark spots too -->
    <circle cx="68" cy="65" r="2.5" fill="#3A4838" opacity="0.2"/>
    <circle cx="95" cy="85" r="2" fill="#3A4838" opacity="0.2"/>
    <circle cx="145" cy="60" r="2.5" fill="#3A4838" opacity="0.18"/>
    <circle cx="175" cy="82" r="2" fill="#3A4838" opacity="0.15"/>
    <!-- Dorsal far back -->
    <path d="M 198,36 L 195,18 L 205,20 L 212,14 L 218,22 L 225,18 L 232,24 L 240,35" fill="#607858" stroke="#3A4838" stroke-width="0.8"/>
    <!-- POINTED tail (KEY - more pointed than pike) -->
    <path d="M 245,42 L 280,18 Q 290,38 272,58 L 252,70 Z" fill="#607858" stroke="#3A4838" stroke-width="0.8"/>
    <path d="M 245,114 L 280,138 Q 290,118 272,98 L 252,86 Z" fill="#607858" stroke="#3A4838" stroke-width="0.8"/>
    <!-- POINTED snout (KEY - more pointed than pike's duck-bill) -->
    <path d="M 12,78 Q 4,74 2,72 Q 0,76 2,78 Q 0,80 2,84 Q 4,82 12,78 Z" fill="#8B9B78" stroke="#3A4838" stroke-width="1"/>
    <!-- Pectoral -->
    <path d="M 38,88 Q 28,102 40,112 Q 50,105 46,90 Z" fill="#8B9B78" stroke="#3A4838" stroke-width="0.5" opacity="0.7"/>
    <!-- Eye -->
    <circle cx="20" cy="72" r="5" fill="#C8D060" stroke="#3A4838" stroke-width="1"/>
    <circle cx="20" cy="72" r="3" fill="#2A2A2A"/>
    <circle cx="18" cy="70" r="1.4" fill="rgba(255,255,255,0.7)"/>
  `);
}

// ===== STEELHEAD TROUT =====
function svgSteelhead(s) {
  return svgWrap(s, 'steel', `
    <defs>
      <linearGradient id="stg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#506878"/><stop offset="30%" stop-color="#7A8B95"/>
        <stop offset="50%" stop-color="#95A8B5"/><stop offset="100%" stop-color="#D8E0E8"/>
      </linearGradient>
    </defs>
    <!-- Torpedo body -->
    <path d="M 30,78 C 22,60 32,42 58,34 C 85,25 120,22 160,22 C 200,24 232,34 250,50 L 250,78 L 250,106 C 232,122 200,132 160,134 C 120,134 85,131 58,122 C 32,114 22,96 30,78 Z" fill="url(#stg)" stroke="#3A4858" stroke-width="1.5"/>
    <!-- CHROME SILVER sheen -->
    <path d="M 60,50 Q 130,42 200,48 Q 240,54 255,65" stroke="rgba(255,255,255,0.2)" stroke-width="8" fill="none"/>
    <!-- PINK-RED lateral stripe (KEY FEATURE) -->
    <path d="M 45,78 Q 100,72 160,74 Q 220,76 250,78" stroke="#D05060" stroke-width="5" fill="none" opacity="0.5"/>
    <!-- BLACK SPOTS on back and tail (KEY) -->
    <circle cx="80" cy="45" r="1.8" fill="#2A2A2A" opacity="0.5"/>
    <circle cx="100" cy="38" r="1.5" fill="#2A2A2A" opacity="0.45"/>
    <circle cx="120" cy="42" r="1.8" fill="#2A2A2A" opacity="0.45"/>
    <circle cx="140" cy="35" r="1.5" fill="#2A2A2A" opacity="0.4"/>
    <circle cx="160" cy="40" r="1.8" fill="#2A2A2A" opacity="0.4"/>
    <circle cx="180" cy="38" r="1.5" fill="#2A2A2A" opacity="0.35"/>
    <circle cx="200" cy="42" r="1.5" fill="#2A2A2A" opacity="0.35"/>
    <circle cx="90" cy="55" r="1.5" fill="#2A2A2A" opacity="0.35"/>
    <circle cx="130" cy="52" r="1.5" fill="#2A2A2A" opacity="0.3"/>
    <circle cx="170" cy="50" r="1.5" fill="#2A2A2A" opacity="0.3"/>
    <!-- Dorsal -->
    <path d="M 110,25 L 108,5 L 118,8 L 126,2 L 134,10 L 142,6 L 150,12 L 155,22" fill="#607078" stroke="#3A4858" stroke-width="0.8"/>
    <!-- ADIPOSE FIN (KEY - trout family) -->
    <ellipse cx="215" cy="35" rx="8" ry="5" fill="#7A8B95" stroke="#3A4858" stroke-width="0.5" opacity="0.7"/>
    <!-- Tail - slightly forked with spots -->
    <path d="M 250,50 L 278,28 Q 286,42 272,60 L 256,70 Z" fill="#607078" stroke="#3A4858" stroke-width="0.8"/>
    <path d="M 250,106 L 278,128 Q 286,114 272,96 L 256,86 Z" fill="#607078" stroke="#3A4858" stroke-width="0.8"/>
    <circle cx="268" cy="40" r="1.2" fill="#2A2A2A" opacity="0.4"/>
    <circle cx="272" cy="48" r="1" fill="#2A2A2A" opacity="0.35"/>
    <circle cx="265" cy="112" r="1.2" fill="#2A2A2A" opacity="0.35"/>
    <!-- Pectoral -->
    <path d="M 62,90 Q 50,106 65,116 Q 76,108 72,92 Z" fill="#7A8B95" stroke="#3A4858" stroke-width="0.5" opacity="0.7"/>
    <!-- Eye -->
    <circle cx="42" cy="70" r="6" fill="#D0D8E0" stroke="#3A4858" stroke-width="1"/>
    <circle cx="42" cy="70" r="3.5" fill="#2A2A2A"/>
    <circle cx="40" cy="68" r="1.5" fill="rgba(255,255,255,0.7)"/>
    <!-- Mouth -->
    <path d="M 30,78 Q 24,82 20,84" stroke="#3A4858" stroke-width="1.2" fill="none"/>
  `);
}

// ===== SAUGEYE =====
function svgSaugeye(s) {
  return svgWrap(s, 'saugeye', `
    <defs>
      <linearGradient id="seg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#4A4020"/><stop offset="35%" stop-color="#6B6030"/>
        <stop offset="70%" stop-color="#8B7840"/><stop offset="100%" stop-color="#D8D0A0"/>
      </linearGradient>
    </defs>
    <path d="M 35,78 C 28,62 38,44 60,37 C 85,28 120,24 158,23 C 195,24 225,32 245,48 L 245,78 L 245,108 C 225,124 195,132 158,133 C 120,132 85,128 60,119 C 38,112 28,94 35,78 Z" fill="url(#seg)" stroke="#3A3018" stroke-width="1.5"/>
    <!-- Darker saddle/blotch marks (KEY - more prominent than walleye) -->
    <path d="M 90,30 Q 95,55 88,75" stroke="#3A3018" stroke-width="6" fill="none" opacity="0.35"/>
    <path d="M 120,26 Q 125,52 118,72" stroke="#3A3018" stroke-width="6" fill="none" opacity="0.3"/>
    <path d="M 150,24 Q 155,50 148,70" stroke="#3A3018" stroke-width="6" fill="none" opacity="0.3"/>
    <path d="M 185,28 Q 190,52 183,70" stroke="#3A3018" stroke-width="5" fill="none" opacity="0.25"/>
    <!-- SPOTTED DORSAL FIN (KEY - distinguishes from pure walleye) -->
    <path d="M 85,37 L 88,12 L 95,14 L 102,8 L 110,15 L 118,10 L 125,16 L 132,12 L 140,18 L 148,24" fill="#5A5028" stroke="#3A3018" stroke-width="0.8"/>
    <circle cx="95" cy="18" r="2" fill="#2A2010" opacity="0.6"/>
    <circle cx="108" cy="14" r="2" fill="#2A2010" opacity="0.55"/>
    <circle cx="120" cy="16" r="2" fill="#2A2010" opacity="0.5"/>
    <circle cx="134" cy="18" r="1.8" fill="#2A2010" opacity="0.45"/>
    <!-- Soft dorsal -->
    <path d="M 175,28 Q 185,18 195,20 Q 205,22 210,28 L 210,35" fill="#6B6030" stroke="#3A3018" stroke-width="0.8"/>
    <!-- Tail -->
    <path d="M 245,48 L 275,25 Q 282,35 270,55 L 255,68 Z" fill="#6B6030" stroke="#3A3018" stroke-width="0.8"/>
    <path d="M 245,108 L 275,131 Q 282,121 270,101 L 255,88 Z" fill="#6B6030" stroke="#3A3018" stroke-width="0.8"/>
    <!-- Maybe faint white tip (hybrid variation) -->
    <path d="M 270,120 L 275,131 Q 279,126 274,118 Z" fill="rgba(255,255,255,0.3)" stroke="none"/>
    <!-- Pectoral -->
    <path d="M 65,90 Q 55,105 70,115 Q 80,108 75,92 Z" fill="#6B6030" stroke="#3A3018" stroke-width="0.5" opacity="0.7"/>
    <!-- Large glassy eye -->
    <circle cx="50" cy="72" r="9.5" fill="#E0D8A8" stroke="#3A3018" stroke-width="1"/>
    <circle cx="50" cy="72" r="6" fill="#2A2A2A"/>
    <circle cx="47" cy="69" r="2.5" fill="rgba(255,255,255,0.7)"/>
    <circle cx="53" cy="74" r="1" fill="rgba(255,255,255,0.4)"/>
    <!-- Mouth -->
    <path d="M 35,78 Q 30,80 28,82" stroke="#3A3018" stroke-width="1.5" fill="none"/>
  `);
}

// ===== WHITE BASS =====
function svgWhiteBass(s) {
  return svgWrap(s, 'wb', `
    <defs>
      <linearGradient id="wbg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#607080"/><stop offset="35%" stop-color="#8898A8"/>
        <stop offset="70%" stop-color="#A8B8C8"/><stop offset="100%" stop-color="#D8E0E8"/>
      </linearGradient>
    </defs>
    <!-- Moderately deep body -->
    <path d="M 38,78 C 30,58 40,38 65,30 C 92,20 125,17 162,17 C 198,19 228,28 248,48 L 248,78 L 248,108 C 228,128 198,137 162,139 C 125,139 92,136 65,126 C 40,118 30,98 38,78 Z" fill="url(#wbg)" stroke="#405060" stroke-width="1.5"/>
    <!-- DARK HORIZONTAL STRIPES (KEY FEATURE) -->
    <path d="M 55,50 Q 150,48 240,52" stroke="#304050" stroke-width="1.8" fill="none" opacity="0.45"/>
    <path d="M 50,58 Q 150,56 242,60" stroke="#304050" stroke-width="1.8" fill="none" opacity="0.45"/>
    <path d="M 48,66 Q 150,64 244,68" stroke="#304050" stroke-width="1.8" fill="none" opacity="0.4"/>
    <path d="M 46,74 Q 150,72 246,76" stroke="#304050" stroke-width="1.8" fill="none" opacity="0.4"/>
    <path d="M 46,82 Q 150,80 246,84" stroke="#304050" stroke-width="1.5" fill="none" opacity="0.35"/>
    <path d="M 48,90 Q 150,88 244,92" stroke="#304050" stroke-width="1.5" fill="none" opacity="0.3"/>
    <path d="M 50,98 Q 150,96 240,100" stroke="#304050" stroke-width="1.2" fill="none" opacity="0.25"/>
    <!-- Two separate dorsal fins -->
    <path d="M 88,30 L 90,8 L 100,12 L 108,5 L 116,14 L 124,8 L 132,16 L 140,20" fill="#607080" stroke="#405060" stroke-width="0.8"/>
    <path d="M 168,20 Q 178,12 190,16 Q 200,20 205,28" fill="#708090" stroke="#405060" stroke-width="0.8"/>
    <!-- Tail -->
    <path d="M 248,48 L 275,28 Q 282,40 270,58 L 255,68 Z" fill="#607080" stroke="#405060" stroke-width="0.8"/>
    <path d="M 248,108 L 275,128 Q 282,116 270,98 L 255,88 Z" fill="#607080" stroke="#405060" stroke-width="0.8"/>
    <!-- Pectoral -->
    <path d="M 68,90 Q 55,108 70,118 Q 82,110 76,92 Z" fill="#8898A8" stroke="#405060" stroke-width="0.5" opacity="0.7"/>
    <!-- Eye -->
    <circle cx="50" cy="68" r="6.5" fill="#D0D8E0" stroke="#405060" stroke-width="1"/>
    <circle cx="50" cy="68" r="4" fill="#2A2A2A"/>
    <circle cx="48" cy="66" r="1.8" fill="rgba(255,255,255,0.7)"/>
    <!-- Mouth -->
    <path d="M 38,78 Q 32,82 28,85" stroke="#405060" stroke-width="1.2" fill="none"/>
  `);
}

// ===== COMMON CARP =====
function svgCommonCarp(s) {
  return svgWrap(s, 'carp', `
    <defs>
      <linearGradient id="cpg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#6A5818"/><stop offset="35%" stop-color="#8B7530"/>
        <stop offset="70%" stop-color="#A89040"/><stop offset="100%" stop-color="#D8C878"/>
      </linearGradient>
    </defs>
    <!-- Large deep body -->
    <path d="M 42,80 C 35,55 48,30 75,20 C 105,10 140,6 175,10 C 205,16 230,32 248,55 L 248,80 L 248,105 C 230,128 205,144 175,150 C 140,154 105,150 75,140 C 48,130 35,105 42,80 Z" fill="url(#cpg)" stroke="#4A3810" stroke-width="1.5"/>
    <!-- LARGE SCALES pattern (KEY FEATURE) -->
    <g opacity="0.15" stroke="#4A3810" fill="none" stroke-width="0.8">
      <path d="M 75,40 Q 85,50 75,60"/><path d="M 95,35 Q 105,45 95,55"/>
      <path d="M 115,30 Q 125,40 115,50"/><path d="M 135,28 Q 145,38 135,48"/>
      <path d="M 155,28 Q 165,38 155,48"/><path d="M 175,32 Q 185,42 175,52"/>
      <path d="M 195,38 Q 205,48 195,58"/>
      <path d="M 85,55 Q 95,65 85,75"/><path d="M 105,50 Q 115,60 105,70"/>
      <path d="M 125,48 Q 135,58 125,68"/><path d="M 145,46 Q 155,56 145,66"/>
      <path d="M 165,48 Q 175,58 165,68"/><path d="M 185,52 Q 195,62 185,72"/>
      <path d="M 205,58 Q 215,68 205,78"/>
      <path d="M 85,72 Q 95,82 85,92"/><path d="M 105,68 Q 115,78 105,88"/>
      <path d="M 125,66 Q 135,76 125,86"/><path d="M 145,65 Q 155,75 145,85"/>
      <path d="M 165,66 Q 175,76 165,86"/><path d="M 185,70 Q 195,80 185,90"/>
      <path d="M 95,88 Q 105,98 95,108"/><path d="M 115,85 Q 125,95 115,105"/>
      <path d="M 135,84 Q 145,94 135,104"/><path d="M 155,84 Q 165,94 155,104"/>
    </g>
    <!-- Long dorsal fin (KEY) -->
    <path d="M 90,20 L 88,2 L 98,5 L 105,0 L 112,6 L 118,2 L 125,8 L 132,5 L 138,10 L 145,8 L 152,12 L 160,10 L 168,15 Q 185,10 200,16 Q 215,22 225,35" fill="#7A6428" stroke="#4A3810" stroke-width="0.8"/>
    <!-- Tail (forked) -->
    <path d="M 248,55 L 272,32 Q 280,45 268,60 L 254,72 Z" fill="#7A6428" stroke="#4A3810" stroke-width="0.8"/>
    <path d="M 248,105 L 272,128 Q 280,115 268,100 L 254,88 Z" fill="#7A6428" stroke="#4A3810" stroke-width="0.8"/>
    <!-- BARBELS at mouth (KEY FEATURE) -->
    <path d="M 45,80 Q 35,72 28,68" stroke="#6A5818" stroke-width="1.5" fill="none"/>
    <path d="M 45,82 Q 36,78 30,76" stroke="#6A5818" stroke-width="1.2" fill="none"/>
    <!-- Rubbery lips -->
    <path d="M 42,80 Q 38,82 36,85 Q 38,87 42,86" stroke="#4A3810" stroke-width="1.5" fill="#A89040" opacity="0.5"/>
    <!-- Pectoral -->
    <path d="M 62,95 Q 48,112 65,125 Q 78,115 72,97 Z" fill="#8B7530" stroke="#4A3810" stroke-width="0.5" opacity="0.7"/>
    <!-- Anal fin -->
    <path d="M 190,142 Q 200,155 218,150 Q 222,142 218,132" fill="#7A6428" stroke="#4A3810" stroke-width="0.5" opacity="0.7"/>
    <!-- Eye -->
    <circle cx="55" cy="65" r="6" fill="#D0C870" stroke="#4A3810" stroke-width="1"/>
    <circle cx="55" cy="65" r="3.5" fill="#2A2A2A"/>
    <circle cx="53" cy="63" r="1.5" fill="rgba(255,255,255,0.6)"/>
  `);
}

// ===== FLATHEAD CATFISH =====
function svgFlatheadCatfish(s) {
  return svgWrap(s, 'fcat', `
    <defs>
      <linearGradient id="fcg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#5A4818"/><stop offset="40%" stop-color="#7A6830"/>
        <stop offset="100%" stop-color="#C8B870"/>
      </linearGradient>
    </defs>
    <!-- Body with FLAT WIDE HEAD (KEY) -->
    <path d="M 22,76 C 18,62 20,50 40,42 C 55,36 70,34 90,33 Q 130,32 170,38 C 200,44 225,55 245,68 L 245,80 L 245,92 C 225,105 200,116 170,122 C 130,128 90,126 65,120 C 40,114 25,102 22,88 Z" fill="url(#fcg)" stroke="#3A2808" stroke-width="1.5"/>
    <!-- MOTTLED PATTERN (KEY FEATURE) -->
    <ellipse cx="70" cy="60" rx="10" ry="6" fill="#4A3818" opacity="0.2" transform="rotate(15 70 60)"/>
    <ellipse cx="100" cy="50" rx="12" ry="7" fill="#4A3818" opacity="0.18" transform="rotate(-10 100 50)"/>
    <ellipse cx="130" cy="62" rx="10" ry="6" fill="#4A3818" opacity="0.2" transform="rotate(5 130 62)"/>
    <ellipse cx="160" cy="52" rx="11" ry="6" fill="#4A3818" opacity="0.15" transform="rotate(-8 160 52)"/>
    <ellipse cx="190" cy="60" rx="10" ry="6" fill="#4A3818" opacity="0.15"/>
    <ellipse cx="85" cy="82" rx="10" ry="6" fill="#4A3818" opacity="0.18" transform="rotate(12 85 82)"/>
    <ellipse cx="115" cy="90" rx="11" ry="6" fill="#4A3818" opacity="0.15" transform="rotate(-5 115 90)"/>
    <ellipse cx="155" cy="85" rx="10" ry="6" fill="#4A3818" opacity="0.15"/>
    <ellipse cx="200" cy="78" rx="8" ry="5" fill="#4A3818" opacity="0.12"/>
    <!-- FLAT HEAD profile (KEY) -->
    <path d="M 22,68 L 18,62 L 22,76" stroke="#3A2808" stroke-width="0.8" fill="none"/>
    <!-- BARBELS -->
    <path d="M 25,68 Q 8,52 2,46" stroke="#5A4818" stroke-width="1.5" fill="none"/>
    <path d="M 25,70 Q 10,58 5,54" stroke="#5A4818" stroke-width="1.5" fill="none"/>
    <path d="M 25,82 Q 12,90 5,96" stroke="#5A4818" stroke-width="1.2" fill="none"/>
    <path d="M 25,84 Q 14,94 8,100" stroke="#5A4818" stroke-width="1.2" fill="none"/>
    <!-- Dorsal with spine -->
    <path d="M 85,33 L 82,10 L 90,14 L 98,8 L 105,16 L 110,33" fill="#5A4818" stroke="#3A2808" stroke-width="0.8"/>
    <!-- Adipose fin -->
    <ellipse cx="210" cy="42" rx="12" ry="6" fill="#6A5828" stroke="#3A2808" stroke-width="0.5" opacity="0.7"/>
    <!-- SQUARE TAIL (KEY - NOT forked like channel cat!) -->
    <rect x="245" y="55" width="30" height="50" rx="3" fill="#6A5828" stroke="#3A2808" stroke-width="0.8"/>
    <!-- Protruding lower jaw (KEY) -->
    <path d="M 22,82 Q 16,86 14,88 Q 18,88 22,86" stroke="#3A2808" stroke-width="1.5" fill="#9A8848" opacity="0.5"/>
    <!-- Pectoral with spine -->
    <path d="M 48,90 Q 35,108 50,118 Q 62,110 56,92 Z" fill="#7A6830" stroke="#3A2808" stroke-width="0.8"/>
    <!-- Small eyes set wide (KEY) -->
    <circle cx="32" cy="66" r="4" fill="#C0B860" stroke="#3A2808" stroke-width="1"/>
    <circle cx="32" cy="66" r="2.5" fill="#2A2A2A"/>
    <circle cx="31" cy="65" r="1" fill="rgba(255,255,255,0.5)"/>
  `);
}

// ===== RAINBOW TROUT =====
function svgRainbowTrout(s) {
  return svgWrap(s, 'rbt', `
    <defs>
      <linearGradient id="rbg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#2A6050"/><stop offset="30%" stop-color="#4A7868"/>
        <stop offset="55%" stop-color="#5A9080"/><stop offset="100%" stop-color="#D8E0D8"/>
      </linearGradient>
    </defs>
    <!-- Torpedo body -->
    <path d="M 30,78 C 22,60 32,42 58,34 C 85,25 120,22 160,22 C 200,24 232,34 250,50 L 250,78 L 250,106 C 232,122 200,132 160,134 C 120,134 85,131 58,122 C 32,114 22,96 30,78 Z" fill="url(#rbg)" stroke="#1A4030" stroke-width="1.5"/>
    <!-- PROMINENT PINK-RED STRIPE (KEY FEATURE - more visible than steelhead) -->
    <path d="M 42,78 Q 100,70 160,72 Q 220,74 250,78" stroke="#E04060" stroke-width="7" fill="none" opacity="0.55"/>
    <!-- SPOTS EVERYWHERE (KEY - more spots than steelhead) -->
    <circle cx="70" cy="42" r="1.8" fill="#1A1A1A" opacity="0.5"/>
    <circle cx="85" cy="50" r="1.5" fill="#1A1A1A" opacity="0.45"/>
    <circle cx="95" cy="38" r="1.8" fill="#1A1A1A" opacity="0.5"/>
    <circle cx="110" cy="45" r="1.5" fill="#1A1A1A" opacity="0.45"/>
    <circle cx="125" cy="35" r="1.8" fill="#1A1A1A" opacity="0.45"/>
    <circle cx="140" cy="42" r="1.5" fill="#1A1A1A" opacity="0.4"/>
    <circle cx="155" cy="38" r="1.8" fill="#1A1A1A" opacity="0.4"/>
    <circle cx="170" cy="44" r="1.5" fill="#1A1A1A" opacity="0.4"/>
    <circle cx="185" cy="40" r="1.5" fill="#1A1A1A" opacity="0.35"/>
    <circle cx="200" cy="46" r="1.5" fill="#1A1A1A" opacity="0.35"/>
    <circle cx="80" cy="62" r="1.5" fill="#1A1A1A" opacity="0.35"/>
    <circle cx="110" cy="58" r="1.5" fill="#1A1A1A" opacity="0.35"/>
    <circle cx="145" cy="55" r="1.5" fill="#1A1A1A" opacity="0.3"/>
    <circle cx="175" cy="60" r="1.5" fill="#1A1A1A" opacity="0.3"/>
    <circle cx="100" cy="90" r="1.5" fill="#1A1A1A" opacity="0.25"/>
    <circle cx="130" cy="95" r="1.2" fill="#1A1A1A" opacity="0.2"/>
    <circle cx="160" cy="92" r="1.2" fill="#1A1A1A" opacity="0.2"/>
    <!-- Dorsal with spots -->
    <path d="M 110,25 L 108,5 L 118,8 L 126,2 L 134,10 L 142,6 L 150,12 L 155,22" fill="#3A6050" stroke="#1A4030" stroke-width="0.8"/>
    <circle cx="120" cy="12" r="1" fill="#1A1A1A" opacity="0.4"/>
    <circle cx="135" cy="10" r="1" fill="#1A1A1A" opacity="0.35"/>
    <!-- Adipose fin -->
    <ellipse cx="215" cy="35" rx="8" ry="5" fill="#4A7868" stroke="#1A4030" stroke-width="0.5" opacity="0.7"/>
    <!-- Tail with spots -->
    <path d="M 250,50 L 278,28 Q 286,42 272,60 L 256,70 Z" fill="#3A6050" stroke="#1A4030" stroke-width="0.8"/>
    <path d="M 250,106 L 278,128 Q 286,114 272,96 L 256,86 Z" fill="#3A6050" stroke="#1A4030" stroke-width="0.8"/>
    <circle cx="262" cy="42" r="1.2" fill="#1A1A1A" opacity="0.4"/>
    <circle cx="268" cy="50" r="1" fill="#1A1A1A" opacity="0.35"/>
    <circle cx="260" cy="110" r="1.2" fill="#1A1A1A" opacity="0.3"/>
    <!-- Pectoral -->
    <path d="M 62,90 Q 50,106 65,116 Q 76,108 72,92 Z" fill="#5A9080" stroke="#1A4030" stroke-width="0.5" opacity="0.7"/>
    <!-- Eye -->
    <circle cx="42" cy="68" r="6" fill="#C8D0B0" stroke="#1A4030" stroke-width="1"/>
    <circle cx="42" cy="68" r="3.5" fill="#2A2A2A"/>
    <circle cx="40" cy="66" r="1.5" fill="rgba(255,255,255,0.7)"/>
    <!-- Mouth -->
    <path d="M 30,78 Q 24,82 20,84" stroke="#1A4030" stroke-width="1.2" fill="none"/>
  `);
}

// ===== BROWN TROUT =====
function svgBrownTrout(s) {
  return svgWrap(s, 'brt', `
    <defs>
      <linearGradient id="btg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#3A3018"/><stop offset="35%" stop-color="#6B5A2A"/>
        <stop offset="70%" stop-color="#8B7538"/><stop offset="100%" stop-color="#D8C890"/>
      </linearGradient>
    </defs>
    <!-- Torpedo body -->
    <path d="M 30,78 C 22,60 32,42 58,34 C 85,25 120,22 160,22 C 200,24 232,34 250,50 L 250,78 L 250,106 C 232,122 200,132 160,134 C 120,134 85,131 58,122 C 32,114 22,96 30,78 Z" fill="url(#btg)" stroke="#2A2008" stroke-width="1.5"/>
    <!-- Golden sheen -->
    <path d="M 60,55 Q 130,44 200,52" stroke="rgba(255,255,255,0.12)" stroke-width="10" fill="none"/>
    <!-- Black spots + red/orange spots with pale halos (KEY FEATURE) -->
    <g opacity="0.9">
      <circle cx="80" cy="45" r="1.6" fill="#1A1A1A" opacity="0.45"/>
      <circle cx="95" cy="55" r="1.4" fill="#1A1A1A" opacity="0.4"/>
      <circle cx="110" cy="40" r="1.6" fill="#1A1A1A" opacity="0.4"/>
      <circle cx="135" cy="45" r="1.4" fill="#1A1A1A" opacity="0.35"/>
      <circle cx="155" cy="38" r="1.4" fill="#1A1A1A" opacity="0.35"/>
      <circle cx="175" cy="46" r="1.4" fill="#1A1A1A" opacity="0.3"/>

      <circle cx="90" cy="78" r="2.1" fill="#F2D9C2" opacity="0.5"/>
      <circle cx="90" cy="78" r="1.2" fill="#D44A2E" opacity="0.8"/>

      <circle cx="120" cy="70" r="2.1" fill="#F2D9C2" opacity="0.5"/>
      <circle cx="120" cy="70" r="1.2" fill="#D44A2E" opacity="0.75"/>

      <circle cx="150" cy="82" r="2.1" fill="#F2D9C2" opacity="0.5"/>
      <circle cx="150" cy="82" r="1.2" fill="#D44A2E" opacity="0.75"/>

      <circle cx="180" cy="75" r="2.1" fill="#F2D9C2" opacity="0.45"/>
      <circle cx="180" cy="75" r="1.1" fill="#D44A2E" opacity="0.7"/>
    </g>

    <!-- Dorsal -->
    <path d="M 110,25 L 108,5 L 118,8 L 126,2 L 134,10 L 142,6 L 150,12 L 155,22" fill="#4A3A18" stroke="#2A2008" stroke-width="0.8"/>
    <!-- Adipose fin -->
    <ellipse cx="215" cy="35" rx="8" ry="5" fill="#6B5A2A" stroke="#2A2008" stroke-width="0.5" opacity="0.7"/>
    <!-- Tail -->
    <path d="M 250,50 L 276,30 Q 284,44 272,60 L 256,70 Z" fill="#4A3A18" stroke="#2A2008" stroke-width="0.8"/>
    <path d="M 250,106 L 276,126 Q 284,112 272,96 L 256,86 Z" fill="#4A3A18" stroke="#2A2008" stroke-width="0.8"/>

    <!-- Pectoral -->
    <path d="M 62,90 Q 50,106 65,116 Q 76,108 72,92 Z" fill="#8B7538" stroke="#2A2008" stroke-width="0.5" opacity="0.7"/>
    <!-- Eye -->
    <circle cx="42" cy="68" r="6" fill="#D8C890" stroke="#2A2008" stroke-width="1"/>
    <circle cx="42" cy="68" r="3.5" fill="#2A2A2A"/>
    <circle cx="40" cy="66" r="1.5" fill="rgba(255,255,255,0.7)"/>
    <!-- Mouth -->
    <path d="M 30,78 Q 24,82 20,84" stroke="#2A2008" stroke-width="1.2" fill="none"/>
  `);
}

// ===== FRESHWATER DRUM =====
function svgFreshwaterDrum(s) {
  return svgWrap(s, 'drum', `
    <defs>
      <linearGradient id="drg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#607080"/><stop offset="35%" stop-color="#8090A0"/>
        <stop offset="70%" stop-color="#98A8B8"/><stop offset="100%" stop-color="#D0D8E0"/>
      </linearGradient>
    </defs>
    <!-- DEEP HUMPED body (KEY) -->
    <path d="M 50,82 C 42,55 55,22 85,12 C 115,4 148,2 178,8 C 208,16 232,35 248,60 L 248,82 L 248,104 C 232,125 208,140 178,148 C 148,154 115,152 85,142 C 55,132 42,108 50,82 Z" fill="url(#drg)" stroke="#405060" stroke-width="1.5"/>
    <!-- LONG dorsal fin spanning back (KEY) -->
    <path d="M 85,12 L 82,-5 L 92,-2 L 100,-8 L 108,0 L 116,-5 L 124,2 L 132,-2 L 140,4 L 148,0 L 156,6 L 164,3 L 172,8 Q 195,4 215,14 Q 230,22 240,38" fill="#607080" stroke="#405060" stroke-width="0.8"/>
    <!-- ROUNDED tail (KEY - not forked!) -->
    <ellipse cx="268" cy="82" rx="22" ry="25" fill="#607080" stroke="#405060" stroke-width="0.8"/>
    <!-- DOWNTURNED mouth (KEY) -->
    <path d="M 50,82 Q 44,88 40,92 Q 42,94 46,92" stroke="#405060" stroke-width="1.5" fill="none"/>
    <!-- Humped back highlight -->
    <path d="M 70,22 Q 120,8 170,12" stroke="rgba(255,255,255,0.15)" stroke-width="6" fill="none"/>
    <!-- Pectoral -->
    <path d="M 68,95 Q 54,112 70,125 Q 82,115 76,97 Z" fill="#8090A0" stroke="#405060" stroke-width="0.5" opacity="0.7"/>
    <!-- Anal fin -->
    <path d="M 175,145 Q 185,158 205,155 Q 212,148 208,138" fill="#607080" stroke="#405060" stroke-width="0.5" opacity="0.7"/>
    <!-- Lateral line -->
    <path d="M 60,72 Q 140,62 220,70" stroke="#506070" stroke-width="1" fill="none" opacity="0.3"/>
    <!-- Eye -->
    <circle cx="58" cy="58" r="6.5" fill="#C0C8D0" stroke="#405060" stroke-width="1"/>
    <circle cx="58" cy="58" r="4" fill="#2A2A2A"/>
    <circle cx="56" cy="56" r="1.8" fill="rgba(255,255,255,0.7)"/>
  `);
}

// ===== SAUGER =====
function svgSauger(s) {
  return svgWrap(s, 'sauger', `
    <defs>
      <linearGradient id="sgg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#3A3418"/><stop offset="35%" stop-color="#5A5030"/>
        <stop offset="70%" stop-color="#7A6840"/><stop offset="100%" stop-color="#C8C090"/>
      </linearGradient>
    </defs>
    <!-- Slightly more cylindrical body than walleye -->
    <path d="M 35,78 C 28,64 38,48 60,42 C 85,34 120,30 158,29 C 195,30 225,36 245,50 L 245,78 L 245,106 C 225,120 195,126 158,127 C 120,126 85,122 60,114 C 38,108 28,92 35,78 Z" fill="url(#sgg)" stroke="#2A2408" stroke-width="1.5"/>
    <!-- Dark saddle markings (more prominent than walleye) -->
    <path d="M 88,35 Q 92,58 86,78" stroke="#2A2408" stroke-width="6" fill="none" opacity="0.35"/>
    <path d="M 115,32 Q 119,55 113,75" stroke="#2A2408" stroke-width="6" fill="none" opacity="0.35"/>
    <path d="M 145,30 Q 149,55 143,74" stroke="#2A2408" stroke-width="5" fill="none" opacity="0.3"/>
    <path d="M 175,32 Q 179,55 173,74" stroke="#2A2408" stroke-width="5" fill="none" opacity="0.28"/>
    <path d="M 205,36 Q 209,55 203,72" stroke="#2A2408" stroke-width="4" fill="none" opacity="0.25"/>
    <!-- SPOTTED DORSAL FIN (KEY FEATURE) -->
    <path d="M 85,42 L 88,18 L 95,20 L 102,14 L 110,21 L 118,16 L 125,22 L 132,18 L 140,24 L 148,29" fill="#4A4028" stroke="#2A2408" stroke-width="0.8"/>
    <circle cx="95" cy="24" r="2.5" fill="#1A1408" opacity="0.6"/>
    <circle cx="108" cy="20" r="2.5" fill="#1A1408" opacity="0.6"/>
    <circle cx="120" cy="22" r="2.5" fill="#1A1408" opacity="0.55"/>
    <circle cx="134" cy="24" r="2" fill="#1A1408" opacity="0.5"/>
    <!-- Soft dorsal -->
    <path d="M 175,32 Q 185,22 195,24 Q 205,26 210,32 L 210,38" fill="#5A5030" stroke="#2A2408" stroke-width="0.8"/>
    <!-- Tail - NO WHITE TIP (KEY difference from walleye!) -->
    <path d="M 245,50 L 275,30 Q 282,40 270,58 L 255,68 Z" fill="#5A5030" stroke="#2A2408" stroke-width="0.8"/>
    <path d="M 245,106 L 275,126 Q 282,116 270,98 L 255,88 Z" fill="#5A5030" stroke="#2A2408" stroke-width="0.8"/>
    <!-- Pectoral -->
    <path d="M 65,90 Q 55,105 70,115 Q 80,108 75,92 Z" fill="#5A5030" stroke="#2A2408" stroke-width="0.5" opacity="0.7"/>
    <!-- Glassy eye (similar to walleye) -->
    <circle cx="50" cy="72" r="9" fill="#D8D0A8" stroke="#2A2408" stroke-width="1"/>
    <circle cx="50" cy="72" r="5.5" fill="#2A2A2A"/>
    <circle cx="47" cy="69" r="2.2" fill="rgba(255,255,255,0.7)"/>
    <circle cx="53" cy="74" r="1" fill="rgba(255,255,255,0.4)"/>
    <!-- Mouth -->
    <path d="M 35,78 Q 30,80 28,82" stroke="#2A2408" stroke-width="1.5" fill="none"/>
  `);
}

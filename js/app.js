// FishID - vanilla SPA

// ===== Fish Image Helper =====
function getFishImage(fishId, maxWidth = 500, useQuizImage = false) {
  const fish = FISH[fishId];
  if (!fish || !fish.image) return `<div style="min-height:180px;display:grid;place-items:center;color:var(--muted)">🐟 No image</div>`;
  const src = (useQuizImage && fish.quizImage) ? fish.quizImage : fish.image;
  return `<img src="${src}" alt="${fish.name}" class="fish-photo" style="max-width:${maxWidth}px" loading="lazy" />`;
}

// ===== Utilities =====
const $ = (sel, el=document) => el.querySelector(sel);
const $$ = (sel, el=document) => Array.from(el.querySelectorAll(sel));
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const shuffle = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const todayStr = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
};
const daysBetween = (a, b) => Math.floor((b - a) / (24*60*60*1000));

// ===== Audio (no external assets) =====
function beep(type='ok'){
  if(!state.settings.sound) return;
  try{
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = 'sine';
    o.frequency.value = type==='ok' ? 740 : type==='warn' ? 320 : 180;
    g.gain.value = 0.07;
    o.connect(g); g.connect(ctx.destination);
    o.start();
    setTimeout(()=>{o.stop(); ctx.close();}, 90);
  }catch(e){}
}

// ===== Persistence =====
const KEY = 'fishid.v1';
const defaultState = () => ({
  xp: 0,
  hearts: 5,
  heartsMax: 5,
  lastHeartTs: Date.now(),
  streak: 0,
  bestStreak: 0,
  lastPractice: null, // YYYY-MM-DD
  dailyXP: {}, // date->xp
  settings: { sound: true, allowSkipUnlock: false },
  lessons: LESSONS.reduce((acc,l)=>{
    acc[l.id] = { unlocked: l.unlocked, completed: false, bestStars: 0, bestAcc: 0, attempts: 0, xpEarned: 0 };
    return acc;
  }, {}),
  fishStats: Object.keys(FISH).reduce((acc,id)=>{
    acc[id] = { seen: 0, correct: 0, wrong: 0 };
    return acc;
  }, {})
});

let state = load();
function load(){
  try{
    const raw = localStorage.getItem(KEY);
    if(!raw) return defaultState();
    const parsed = JSON.parse(raw);
    const base = defaultState();
    // shallow merge
    return {
      ...base,
      ...parsed,
      settings: { ...base.settings, ...(parsed.settings||{}) },
      lessons: { ...base.lessons, ...(parsed.lessons||{}) },
      fishStats: { ...base.fishStats, ...(parsed.fishStats||{}) }
    };
  }catch(e){
    return defaultState();
  }
}
function save(){ localStorage.setItem(KEY, JSON.stringify(state)); }

// ===== Hearts regen =====
const HEART_REGEN_MS = 10*60*1000; // 10 minutes
function regenHearts(){
  const now = Date.now();
  let h = state.hearts;
  if(h >= state.heartsMax){
    state.lastHeartTs = now;
    return;
  }
  const elapsed = now - (state.lastHeartTs || now);
  const add = Math.floor(elapsed / HEART_REGEN_MS);
  if(add > 0){
    h = clamp(h + add, 0, state.heartsMax);
    state.hearts = h;
    state.lastHeartTs = now - (elapsed % HEART_REGEN_MS);
    save();
  }
}
function regenCountdown(){
  if(state.hearts >= state.heartsMax) return '';
  const now = Date.now();
  const elapsed = now - (state.lastHeartTs || now);
  const left = HEART_REGEN_MS - (elapsed % HEART_REGEN_MS);
  const m = Math.max(0, Math.floor(left/60000));
  const s = Math.max(0, Math.floor((left%60000)/1000));
  return `${m}:${String(s).padStart(2,'0')}`;
}

// ===== Streak =====
function markPractice(){
  const t = todayStr();
  const last = state.lastPractice;
  if(!last){
    state.streak = 1;
  } else if(last === t){
    // no-op
  } else {
    const d1 = new Date(last+'T00:00:00');
    const d2 = new Date(t+'T00:00:00');
    const diff = daysBetween(d1, d2);
    if(diff === 1) state.streak += 1;
    else state.streak = 1;
  }
  state.bestStreak = Math.max(state.bestStreak, state.streak);
  state.lastPractice = t;
  save();
}

// ===== XP & Goal =====
const DAILY_GOAL_XP = 50;
function addXP(amount, reason=''){
  amount = Math.max(0, Math.floor(amount));
  if(!amount) return;
  state.xp += amount;
  const t = todayStr();
  state.dailyXP[t] = (state.dailyXP[t]||0) + amount;
  save();
  markPractice();
  hud();
  toast(`+${amount} XP ${reason ? '• ' + reason : ''}`);
}
function todayXP(){ return state.dailyXP[todayStr()] || 0; }

// ===== UI Navigation =====
const screens = {
  home: $('#screenHome'),
  learn: $('#screenLearn'),
  learnMode: $('#screenLearnMode'),
  quiz: $('#screenQuiz'),
  review: $('#screenReview'),
  profile: $('#screenProfile')
};
let currentScreen = 'home';

function show(screen){
  Object.entries(screens).forEach(([k,el])=>{
    if(!el) return;
    el.classList.toggle('active', k===screen);
  });
  currentScreen = screen;
  $$('.navBtn').forEach(b=>b.classList.toggle('active', b.dataset.nav===screen));
  // nav for learnMode/quiz keeps last tab highlight
  if(screen==='learnMode' || screen==='quiz'){
    // keep learn or review highlighted
  }
}

function toast(msg){
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(()=>t.classList.remove('show'), 1600);
}

// ===== Lessons & Learn mode =====
let learnCtx = null; // {lessonId, fishIds, idx}

function lessonUnlocked(lessonId){
  if(state.settings.allowSkipUnlock) return true;
  return !!state.lessons[lessonId]?.unlocked;
}

function renderLessons(){
  const list = $('#lessonList');
  list.innerHTML = '';
  LESSONS.forEach(l=>{
    const ls = state.lessons[l.id];
    const unlocked = lessonUnlocked(l.id);
    const pct = ls.completed ? 100 : ls.bestAcc ? Math.round(ls.bestAcc*100) : 0;
    const stars = ls.bestStars || 0;
    const el = document.createElement('div');
    el.className = 'card lesson';
    el.innerHTML = `
      <div class="badge">${l.icon}</div>
      <div class="meta">
        <h3>${l.title}</h3>
        <p>${l.description}</p>
        <div class="progressBar" style="margin-top:10px"><div style="width:${pct}%"></div></div>
      </div>
      <div class="right">
        <div class="stars">
          <span class="star ${stars>=1?'on':''}">★</span>
          <span class="star ${stars>=2?'on':''}">★</span>
          <span class="star ${stars>=3?'on':''}">★</span>
        </div>
        <div class="lock">${unlocked ? (ls.completed?'Completed':'Unlocked') : 'Locked 🔒'}</div>
        <button class="btn ${unlocked?'gold':'ghost'}" style="min-height:44px" ${unlocked?'':'disabled'}>Learn</button>
      </div>
    `;
    const btn = $('button', el);
    btn.addEventListener('click', ()=> startLearn(l.id));
    list.appendChild(el);
  });
}

function startLearn(lessonId){
  const lesson = LESSONS.find(x=>x.id===lessonId);
  if(!lesson) return;
  if(!lessonUnlocked(lessonId)){
    toast('Finish the previous lesson to unlock this one.');
    beep('warn');
    return;
  }
  learnCtx = {
    lessonId,
    fishIds: lesson.fish.slice(),
    idx: 0,
    seen: new Set()
  };
  renderLearnCard();
  show('learnMode');
}

function learnCalloutChips(fish){
  // color-coded callouts using key feature, habitat, size
  const chips = [];
  chips.push({text:`KEY: ${fish.keyFeature}`, cls:'gold'});
  chips.push({text:`Habitat: ${fish.habitat.split(',')[0]}`, cls:'blue'});
  chips.push({text:`Size: ${fish.size.split(' typical')[0]}`, cls:'green'});
  return chips;
}

function renderLearnCard(){
  const lesson = LESSONS.find(x=>x.id===learnCtx.lessonId);
  const fishId = learnCtx.fishIds[learnCtx.idx];
  const fish = FISH[fishId];

  $('#learnLessonTag').textContent = `Lesson ${lesson.id}: ${lesson.title}`;
  $('#learnTitle').textContent = `Learn • ${learnCtx.idx+1}/${learnCtx.fishIds.length}`;
  $('#learnBar').style.width = `${Math.round(((learnCtx.idx+1)/learnCtx.fishIds.length)*100)}%`;

  $('#learnFishSvg').innerHTML = getFishImage(fishId, 400);
  $('#learnFishName').textContent = fish.name;
  $('#learnSci').textContent = fish.scientific;

  const callouts = $('#learnCallouts');
  callouts.innerHTML = '';
  learnCalloutChips(fish).forEach(c=>{
    const d = document.createElement('div');
    d.className = `chip ${c.cls}`;
    d.textContent = c.text;
    callouts.appendChild(d);
  });

  $('#learnHabitat').textContent = `Habitat: ${fish.habitat} • Typical size: ${fish.size}`;

  const ul = $('#learnFeatures');
  ul.innerHTML = '';
  fish.features.forEach(f=>{
    const li = document.createElement('li');
    li.textContent = f;
    ul.appendChild(li);
  });
  $('#learnFun').textContent = `Fun fact: ${fish.funFact}`;

  // stats & XP — only award once per card per session
  if(!learnCtx.seen.has(fishId)){
    learnCtx.seen.add(fishId);
    state.fishStats[fishId].seen += 1;
    addXP(3, 'Learn');
    save();
  }

  // show/hide nav buttons based on position
  const atStart = learnCtx.idx === 0;
  const atEnd = learnCtx.idx === learnCtx.fishIds.length - 1;
  $('#btnPrevCard').style.display = atStart ? 'none' : '';
  $('#btnNextCard').style.display = atEnd ? 'none' : '';
  $('#btnStartQuiz').style.display = atEnd ? '' : 'none';
}

function nextLearn(){
  if(!learnCtx) return;
  const newIdx = clamp(learnCtx.idx+1, 0, learnCtx.fishIds.length-1);
  if(newIdx === learnCtx.idx) return; // already at end
  learnCtx.idx = newIdx;
  renderLearnCard();
}
function prevLearn(){
  if(!learnCtx) return;
  const newIdx = clamp(learnCtx.idx-1, 0, learnCtx.fishIds.length-1);
  if(newIdx === learnCtx.idx) return; // already at start
  learnCtx.idx = newIdx;
  renderLearnCard();
}

// swipe support
function enableSwipe(el, onLeft, onRight){
  let sx=0, sy=0, active=false;
  el.addEventListener('touchstart', e=>{
    if(e.touches.length!==1) return;
    active=true;
    sx = e.touches[0].clientX;
    sy = e.touches[0].clientY;
  }, {passive:true});
  el.addEventListener('touchend', e=>{
    if(!active) return;
    active=false;
    const t = e.changedTouches[0];
    const dx = t.clientX - sx;
    const dy = t.clientY - sy;
    if(Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)){
      if(dx < 0) onLeft?.(); else onRight?.();
    }
  });
}

// ===== Quiz Engine =====
let quizCtx = null;

function spendHeart(){
  regenHearts();
  if(state.hearts <= 0) return false;
  state.hearts -= 1;
  save();
  hud();
  return true;
}

function startQuiz({lessonId=null, mode='lesson', count=8}={}){
  regenHearts();
  if(state.hearts <= 0){
    toast('No hearts. Take a break—hearts regenerate over time.');
    beep('warn');
    return;
  }
  const lesson = lessonId ? LESSONS.find(x=>x.id===lessonId) : null;
  const fishPool = lesson ? lesson.fish.slice() : Object.keys(FISH);

  quizCtx = {
    mode,
    lessonId,
    fishPool,
    questions: buildQuizQuestions(fishPool, count),
    qIndex: 0,
    answered: false,
    correctCount: 0,
    wrongCount: 0,
    lastResult: null
  };
  renderQuizQ();
  show('quiz');
}

function buildQuizQuestions(pool, count){
  const qs = [];
  const poolSet = pool.slice();
  const used = { fish: new Set(), tf: new Set(), pairs: new Set() };
  const types = ['identify','feature','tf','match','spot'];
  for(let i=0;i<count;i++){
    const t = types[i % types.length];
    if(t==='identify') qs.push(qIdentify(poolSet, used));
    else if(t==='feature') qs.push(qFeature(poolSet, used));
    else if(t==='tf') qs.push(qTrueFalse(poolSet, used));
    else if(t==='match') qs.push(qMatch(poolSet, used));
    else qs.push(qSpotDifference(poolSet, used));
  }
  return shuffle(qs);
}

function pickUnused(pool, usedSet){
  const fresh = pool.filter(id => !usedSet.has(id));
  if(fresh.length) return fresh[Math.floor(Math.random()*fresh.length)];
  // all used, reset and pick random
  return pool[Math.floor(Math.random()*pool.length)];
}

function qIdentify(pool, used){
  const answerId = pickUnused(pool, used.fish);
  used.fish.add(answerId);
  const choices = new Set([answerId]);
  const all = Object.keys(FISH);
  while(choices.size < 4){
    choices.add(all[Math.floor(Math.random()*all.length)]);
  }
  const opts = shuffle(Array.from(choices)).map(id=>({id, label:FISH[id].name}));
  return {
    type:'identify',
    prompt:'What fish is this?',
    fishId: answerId,
    options: opts,
    correct: answerId
  };
}

function qFeature(pool, used){
  const fishId = pickUnused(pool, used.fish);
  used.fish.add(fishId);
  const fo = FEATURE_OPTIONS[fishId];
  const options = shuffle([fo.correct, ...fo.wrong]).map(x=>({label:x, value:x}));
  return {
    type:'feature',
    prompt:`Which feature best identifies ${FISH[fishId].name}?`,
    fishId,
    options,
    correct: fo.correct
  };
}

function qTrueFalse(pool, used){
  // only use T/F questions about fish in the current lesson pool, avoid repeats
  const poolTF = TRUE_FALSE.filter(x => pool.includes(x.fishId) && !used.tf.has(x.statement));
  const fallbackTF = TRUE_FALSE.filter(x => pool.includes(x.fishId));
  const source = poolTF.length ? poolTF : fallbackTF.length ? fallbackTF : TRUE_FALSE;
  const use = source[Math.floor(Math.random()*source.length)];
  used.tf.add(use.statement);
  return {
    type:'tf',
    prompt:'True or False',
    fishId: use.fishId,
    statement: use.statement,
    options: [{label:'True', value:true},{label:'False', value:false}],
    correct: use.answer
  };
}

function qMatch(pool, used){
  // 3 pairs: fish name -> keyFeature (tap-to-match)
  const ids = shuffle(pool).slice(0, Math.min(3, pool.length));
  const left = ids.map(id=>({id, label:FISH[id].name}));
  const right = shuffle(ids.map(id=>({id, label:FISH[id].keyFeature})));
  return {
    type:'match',
    prompt:'Match the fish to its key identifying feature.',
    pairs: ids,
    left,
    right,
    // correct mapping: left.id === right.id
  };
}

function qSpotDifference(pool, used){
  // only use pairs where BOTH fish are in the current lesson pool, avoid repeats
  const pairKey = p => p.fish1 + ':' + p.fish2;
  const candidates = SIMILAR_PAIRS.filter(p=>pool.includes(p.fish1) && pool.includes(p.fish2) && !used.pairs.has(pairKey(p)));
  const fallback = SIMILAR_PAIRS.filter(p=>(pool.includes(p.fish1) || pool.includes(p.fish2)) && !used.pairs.has(pairKey(p)));
  const lastResort = SIMILAR_PAIRS.filter(p=>pool.includes(p.fish1) || pool.includes(p.fish2));
  const source = candidates.length ? candidates : fallback.length ? fallback : lastResort.length ? lastResort : SIMILAR_PAIRS;
  const pair = source[Math.floor(Math.random()*source.length)];
  used.pairs.add(pairKey(pair));
  const askWhich = Math.random()<0.5 ? pair.fish1 : pair.fish2;
  const options = shuffle([pair.fish1, pair.fish2]).map(id=>({id, label:FISH[id].name}));
  return {
    type:'spot',
    prompt:`Spot the difference: Which one is the ${FISH[askWhich].name}?`,
    fishId: askWhich,
    pair,
    hint: pair.hint,
    options,
    correct: askWhich
  };
}

function renderQuizQ(){
  const q = quizCtx.questions[quizCtx.qIndex];
  const lesson = quizCtx.lessonId ? LESSONS.find(x=>x.id===quizCtx.lessonId) : null;
  $('#quizLessonTag').textContent = lesson ? `Lesson ${lesson.id}: ${lesson.title} • Quiz` : (quizCtx.mode==='review' ? 'Review • Quiz' : 'Quiz');
  $('#quizTitle').textContent = `Q ${quizCtx.qIndex+1}/${quizCtx.questions.length}`;
  $('#quizBar').style.width = `${Math.round(((quizCtx.qIndex)/quizCtx.questions.length)*100)}%`;
  $('#btnQuizContinue').textContent = quizCtx.answered ? 'Continue' : 'Answer';
  $('#btnQuizBack').disabled = quizCtx.qIndex===0;

  quizCtx.answered = false;
  $('#quizCard').innerHTML = '';

  if(q.type==='identify') renderIdentify(q);
  else if(q.type==='feature') renderOptionsQ(q, {showSvg:true});
  else if(q.type==='tf') renderTrueFalse(q);
  else if(q.type==='match') renderMatch(q);
  else if(q.type==='spot') renderSpot(q);
}

function renderIdentify(q){
  const c = $('#quizCard');
  c.innerHTML = `
    <div class="titleRow"><div>
      <div class="small">${q.prompt}</div>
      <div style="font-weight:900;font-size:18px;margin-top:3px">Tap the correct name</div>
    </div></div>
    <div style="height:10px"></div>
    <div class="card" style="border-radius:18px;overflow:hidden">
      <div class="fishHero" style="min-height:200px" id="qSvg"></div>
    </div>
    <div style="height:10px"></div>
    <div class="options" id="qOpts"></div>
    <div class="small" style="margin-top:8px;color:var(--muted)">Hint: focus on body shape, markings, and fin placement.</div>
  `;
  $('#qSvg').innerHTML = getFishImage(q.fishId, 400, true);
  const opts = $('#qOpts');
  q.options.forEach(o=>{
    const b = document.createElement('button');
    b.className = 'opt';
    b.textContent = o.label;
    b.addEventListener('click', ()=> answer(o.id, q.correct, {fishId:q.fishId}));
    opts.appendChild(b);
  });
}

function renderOptionsQ(q, {showSvg=false}={}){
  const c = $('#quizCard');
  const fish = FISH[q.fishId];
  c.innerHTML = `
    <div class="titleRow"><div>
      <div class="small">${q.prompt}</div>
      <div style="font-weight:900;font-size:18px;margin-top:3px">Choose one</div>
    </div></div>
    ${showSvg ? `<div style="height:10px"></div><div class="card" style="border-radius:18px;overflow:hidden"><div class="fishHero" style="min-height:200px" id="qSvg"></div></div>` : ''}
    <div style="height:10px"></div>
    <div class="options" id="qOpts"></div>
    <div class="small" style="margin-top:8px">Fish: <span style="font-style:italic">${fish.scientific}</span></div>
  `;
  if(showSvg) $('#qSvg').innerHTML = getFishImage(q.fishId, 400, true);
  const opts = $('#qOpts');
  q.options.forEach(o=>{
    const b = document.createElement('button');
    b.className = 'opt';
    b.textContent = o.label;
    b.addEventListener('click', ()=> answer(o.value, q.correct, {fishId:q.fishId}));
    opts.appendChild(b);
  });
}

function renderTrueFalse(q){
  const c = $('#quizCard');
  c.innerHTML = `
    <div class="titleRow"><div>
      <div class="small">${q.prompt}</div>
      <div style="font-weight:900;font-size:18px;margin-top:3px">${q.statement}</div>
    </div></div>
    <div style="height:10px"></div>
    <div class="card" style="border-radius:18px;overflow:hidden"><div class="fishHero" style="min-height:180px" id="qSvg"></div></div>
    <div style="height:10px"></div>
    <div class="options" id="qOpts"></div>
  `;
  $('#qSvg').innerHTML = getFishImage(q.fishId, 400, true);
  const opts = $('#qOpts');
  q.options.forEach(o=>{
    const b = document.createElement('button');
    b.className = 'opt';
    b.textContent = o.label;
    b.addEventListener('click', ()=> answer(o.value, q.correct, {fishId:q.fishId}));
    opts.appendChild(b);
  });
}

function renderMatch(q){
  const c = $('#quizCard');
  c.innerHTML = `
    <div class="titleRow"><div>
      <div class="small">${q.prompt}</div>
      <div style="font-weight:900;font-size:18px;margin-top:3px">Tap a fish name, then tap its feature</div>
    </div></div>
    <div style="height:10px"></div>
    <div class="matchGrid" id="matchGrid"></div>
    <div class="small" style="margin-top:8px">Finish all 3 matches to continue.</div>
  `;
  const grid = $('#matchGrid');

  // Build tap-to-match UI
  const left = q.left.map(x=>({ ...x, done:false }));
  const right = q.right.map(x=>({ ...x, done:false }));
  let pickLeft = null;

  function redraw(){
    grid.innerHTML='';
    for(let i=0;i<Math.max(left.length, right.length);i++){
      const row = document.createElement('div');
      row.className='matchRow';

      const L = left[i];
      const R = right[i];

      const lEl = document.createElement('div');
      lEl.className = 'matchCard' + (L?.done?' done':'') + (pickLeft?.id===L?.id?' pick':'');
      lEl.textContent = L ? L.label : '';
      if(L && !L.done){
        lEl.addEventListener('click', ()=>{ pickLeft = L; redraw(); });
      }

      const rEl = document.createElement('div');
      rEl.className = 'matchCard' + (R?.done?' done':'');
      rEl.textContent = R ? R.label : '';
      if(R && !R.done){
        rEl.addEventListener('click', ()=>{
          if(!pickLeft){ toast('Pick a fish name first.'); beep('warn'); return; }
          if(R.id === pickLeft.id){
            // correct match
            pickLeft.done = true;
            R.done = true;
            beep('ok');
            toast('Matched!');
          } else {
            beep('bad');
            toast('Not a match. Try again.');
            // brief shake feedback
            rEl.classList.add('bad');
            setTimeout(()=>rEl.classList.remove('bad'), 220);
          }
          pickLeft = null;
          redraw();
          if(left.every(x=>x.done) && right.every(x=>x.done)){
            // mark answered; award as correct
            // For stats, treat as multi-fish: pick one representative
            quizCtx.answered = true;
            quizCtx.correctCount += 1;
            addXP(18, 'Match');
            $('#btnQuizContinue').textContent = 'Continue';
          }
        });
      }

      row.appendChild(lEl);
      row.appendChild(rEl);
      grid.appendChild(row);
    }
  }
  redraw();

  // disable global continue until done
  $('#btnQuizContinue').textContent = 'Finish matches';
}

function renderSpot(q){
  const c = $('#quizCard');
  c.innerHTML = `
    <div class="titleRow"><div>
      <div class="small">${q.prompt}</div>
      <div style="font-weight:900;font-size:18px;margin-top:3px">Choose the correct one</div>
    </div></div>
    <div style="height:10px"></div>
    <div class="split">
      <div class="panelMini"><h4>Fish A</h4><div id="aSvg" style="display:flex;justify-content:center"></div></div>
      <div class="panelMini"><h4>Fish B</h4><div id="bSvg" style="display:flex;justify-content:center"></div></div>
    </div>
    <div style="height:10px"></div>
    <div class="options" id="qOpts"></div>
    <div class="small" style="margin-top:8px">Hint: ${q.hint}</div>
  `;
  // Map option order to A/B
  const [a,b] = q.options;
  $('#aSvg').innerHTML = getFishImage(a.id, 240, true);
  $('#bSvg').innerHTML = getFishImage(b.id, 240, true);

  const opts = $('#qOpts');
  q.options.forEach((o, idx)=>{
    const btn = document.createElement('button');
    btn.className = 'opt';
    btn.textContent = `Fish ${idx===0?'A':'B'}`;
    btn.addEventListener('click', ()=> answer(o.id, q.correct, {fishId:q.correct}));
    opts.appendChild(btn);
  });
}

function answer(value, correct, {fishId=null}={}){
  if(quizCtx.answered) return;
  const q = quizCtx.questions[quizCtx.qIndex];
  const opts = $$('.opt', $('#quizCard'));

  const ok = (value === correct);
  quizCtx.answered = true;

  if(ok){
    quizCtx.correctCount += 1;
    if(fishId) state.fishStats[fishId].correct += 1;
    addXP(q.type==='identify'?14 : q.type==='tf'?10 : q.type==='feature'?12 : 12, q.type==='identify'?'Identify':q.type==='tf'?'True/False':q.type==='feature'?'Feature':'Quiz');
    beep('ok');
  } else {
    quizCtx.wrongCount += 1;
    if(fishId) state.fishStats[fishId].wrong += 1;
    const can = spendHeart();
    beep('bad');
    toast(can ? 'Wrong — you lost a heart.' : 'Wrong — no hearts left.');
  }
  save();

  // mark option buttons
  opts.forEach(b=>{
    // identify which value corresponds
    const text = b.textContent;
    let v = null;
    if(q.type==='identify'){
      const opt = q.options.find(o=>o.label===text);
      v = opt?.id;
    } else if(q.type==='feature'){
      const opt = q.options.find(o=>o.label===text);
      v = opt?.value;
    } else if(q.type==='tf'){
      v = (text==='True');
    } else if(q.type==='spot'){
      // A — Name / B — Name
      const isA = text.startsWith('A');
      v = (isA ? q.options[0].id : q.options[1].id);
    }
    if(v === correct) b.classList.add('correct');
    if(v === value && !ok) b.classList.add('wrong');
    b.disabled = true;
  });

  $('#btnQuizContinue').textContent = 'Continue';
  hud();
}

function quizContinue(){
  if(!quizCtx) return;
  const q = quizCtx.questions[quizCtx.qIndex];
  // match question sets answered internally; do nothing until complete
  if(q.type==='match' && !quizCtx.answered){
    toast('Finish the matches first.');
    beep('warn');
    return;
  }
  if(!quizCtx.answered){
    toast('Pick an answer.');
    beep('warn');
    return;
  }

  quizCtx.qIndex += 1;
  if(quizCtx.qIndex >= quizCtx.questions.length){
    finishQuiz();
    return;
  }
  renderQuizQ();
}

function finishQuiz(){
  const total = quizCtx.questions.length;
  const correct = quizCtx.correctCount;
  const acc = total ? correct/total : 0;

  // stars
  const stars = acc >= 0.9 ? 3 : acc >= 0.75 ? 2 : acc >= 0.6 ? 1 : 0;

  // lesson progression
  if(quizCtx.lessonId){
    const ls = state.lessons[quizCtx.lessonId];
    ls.attempts += 1;
    ls.bestAcc = Math.max(ls.bestAcc, acc);
    ls.bestStars = Math.max(ls.bestStars, stars);
    if(acc >= 0.7){
      ls.completed = true;
      // unlock next lesson
      const next = quizCtx.lessonId + 1;
      if(state.lessons[next]) state.lessons[next].unlocked = true;
    }
    save();
  }

  // celebration
  const msg = stars ? `Finished! Accuracy ${(acc*100).toFixed(0)}% • ${'★'.repeat(stars)}${'☆'.repeat(3-stars)}`
                    : `Finished! Accuracy ${(acc*100).toFixed(0)}% • Try again for stars`;
  toast(msg);
  beep('ok');

  // show a summary card
  $('#quizCard').innerHTML = `
    <div class="titleRow">
      <div>
        <div class="small">Quiz complete</div>
        <div style="font-weight:900;font-size:20px;margin-top:3px">${msg}</div>
      </div>
    </div>
    <div style="height:12px"></div>
    <div class="kpi">
      <div class="k"><div class="label">Correct</div><div class="value">${correct}/${total}</div></div>
      <div class="k"><div class="label">Hearts left</div><div class="value">${state.hearts}</div></div>
      <div class="k"><div class="label">Today XP</div><div class="value">${todayXP()}</div></div>
    </div>
    <hr class="sep" />
    <div class="small">Want to improve? Review similar fish: Walleye vs Sauger, Largemouth vs Smallmouth, Black vs White Crappie.</div>
  `;
  $('#quizBar').style.width = '100%';
  $('#btnQuizContinue').textContent = 'Done';
  quizCtx._done = true;

  renderLessons();
  renderHome();
  renderProfile();
  renderReview();
}

// ===== Review =====
function startReview(){
  // pool: fish seen, plus a couple random
  const seen = Object.entries(state.fishStats).filter(([id,s])=>s.seen>0).map(([id])=>id);
  const all = Object.keys(FISH);
  const pool = shuffle([...new Set([...seen, ...shuffle(all).slice(0,4)])]);
  startQuiz({lessonId:null, mode:'review', count:5});
}

function renderReview(){
  // weak spots: sort by wrong/correct ratio
  const entries = Object.entries(state.fishStats)
    .filter(([id,s])=> (s.correct+s.wrong) >= 4)
    .map(([id,s])=>({id, name:FISH[id].name, score: (s.wrong+1)/(s.correct+1)}))
    .sort((a,b)=>b.score-a.score)
    .slice(0,5);
  if(!entries.length){
    $('#weakList').textContent = 'No data yet — complete a quiz!';
    return;
  }
  $('#weakList').innerHTML = entries.map(e=>`• ${e.name}`).join('<br>');
}

// ===== Home/Profile =====
function renderHome(){
  const totalLessons = LESSONS.length;
  const completed = Object.values(state.lessons).filter(l=>l.completed).length;
  const pct = totalLessons ? Math.round((completed/totalLessons)*100) : 0;
  $('#overallPct').textContent = `${pct}%`;
  $('#overallBar').style.width = `${pct}%`;
  $('#kLessons').textContent = `${completed}/${totalLessons}`;
  $('#kBestStreak').textContent = state.bestStreak;
  $('#kTotalXP').textContent = state.xp;

  const txp = todayXP();
  $('#goalLine').textContent = `${txp} / ${DAILY_GOAL_XP} XP`;
  $('#goalBar').style.width = `${Math.round(clamp(txp/DAILY_GOAL_XP,0,1)*100)}%`;

  const lines = [
    'Check the tail: white tip? forked? rounded?',
    'Mouth test: does the jaw extend past the eye?',
    'Pike family = torpedo body + dorsal far back.',
    'Crappie tip: random spots = black crappie. Bars = white crappie.',
    'Catfish tip: forked tail = channel cat; square tail = flathead.'
  ];
  $('#mascotLine').textContent = lines[Math.floor(Math.random()*lines.length)];
}

function renderProfile(){
  $('#pXP').textContent = state.xp;
  $('#pStreak').textContent = state.streak;
  $('#pHearts').textContent = `${state.hearts}/${state.heartsMax}`;

  const unlocked = Object.values(state.lessons).filter(l=>l.unlocked).length;
  $('#pUnlock').textContent = `Lessons unlocked: ${unlocked}/${LESSONS.length}`;

  // fish library
  const lib = $('#fishLibrary');
  lib.innerHTML='';
  Object.keys(FISH).forEach(id=>{
    const f = FISH[id];
    const st = state.fishStats[id];
    const el = document.createElement('div');
    el.className = 'card pad';
    el.style.cursor='pointer';
    el.innerHTML = `
      <div style="display:flex;gap:10px;align-items:center">
        <div style="width:52px;height:52px;border-radius:16px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.10);display:grid;place-items:center">🐟</div>
        <div style="flex:1">
          <div style="font-weight:900">${f.name}</div>
          <div class="small" style="font-style:italic">${f.scientific}</div>
          <div class="small">Seen ${st.seen} • Correct ${st.correct} • Wrong ${st.wrong}</div>
        </div>
      </div>
    `;
    el.addEventListener('click', ()=>{
      // show mini modal via toast-style long card
      const t = $('#toast');
      t.innerHTML = `<div style="font-weight:900">${f.name} <span class="small" style="font-weight:700;font-style:italic">(${f.scientific})</span></div>
      <div class="small" style="margin-top:6px"><b>Key:</b> ${f.keyFeature}</div>
      <div class="small" style="margin-top:4px"><b>Habitat:</b> ${f.habitat}</div>
      <div class="small" style="margin-top:4px"><b>Fun fact:</b> ${f.funFact}</div>`;
      t.classList.add('show');
      clearTimeout(toast._t);
      toast._t = setTimeout(()=>t.classList.remove('show'), 2600);
    });
    lib.appendChild(el);
  });
}

function hud(){
  regenHearts();
  $('#hudHearts').textContent = state.hearts;
  $('#hudXP').textContent = state.xp;
  $('#hudStreak').textContent = state.streak;
  const cd = regenCountdown();
  $('#hudRegen').textContent = cd ? `+1 in ${cd}` : '';
  $('#btnSound').textContent = state.settings.sound ? '🔊' : '🔇';
  $('#btnSkipUnlock').textContent = state.settings.allowSkipUnlock ? '🔓' : '🔒';
  $('#pHearts') && ($('#pHearts').textContent = `${state.hearts}/${state.heartsMax}`);
}

// ===== Wire up events =====
function bind(){
  // bottom nav
  $$('.navBtn').forEach(b=>{
    b.addEventListener('click', ()=>{
      const nav = b.dataset.nav;
      if(nav==='home'){ show('home'); renderHome(); }
      if(nav==='learn'){ show('learn'); renderLessons(); }
      if(nav==='review'){ show('review'); renderReview(); }
      if(nav==='profile'){ show('profile'); renderProfile(); }
    });
  });

  // home buttons
  $('#btnGoLearn').addEventListener('click', ()=>{ show('learn'); renderLessons(); });
  $('#btnQuickReview').addEventListener('click', ()=> startReview());

  // learn mode buttons
  $('#btnExitLearn').addEventListener('click', ()=>{ show('learn'); renderLessons(); });
  $('#btnNextCard').addEventListener('click', nextLearn);
  $('#btnPrevCard').addEventListener('click', prevLearn);
  enableSwipe($('#screenLearnMode'), nextLearn, prevLearn);

  $('#btnStartQuiz').addEventListener('click', ()=>{
    if(!learnCtx) return;
    // scale question count to lesson size to avoid repeats
    const lessonSize = learnCtx.fishIds.length;
    const qCount = Math.min(8, Math.max(4, lessonSize * 2));
    startQuiz({lessonId: learnCtx.lessonId, mode:'lesson', count:qCount});
  });

  // quiz buttons
  $('#btnExitQuiz').addEventListener('click', ()=>{
    // return to previous context
    if(quizCtx?.mode==='review'){ show('review'); renderReview(); }
    else { show('learn'); renderLessons(); }
  });
  $('#btnQuizContinue').addEventListener('click', ()=>{
    if(quizCtx?._done){
      if(quizCtx.mode==='review'){ show('review'); renderReview(); }
      else { show('learn'); renderLessons(); }
      return;
    }
    quizContinue();
  });
  $('#btnQuizBack').addEventListener('click', ()=>{
    if(!quizCtx || quizCtx.qIndex===0) return;
    quizCtx.qIndex -= 1;
    renderQuizQ();
  });

  // review screen
  $('#btnStartReview').addEventListener('click', startReview);

  // settings
  $('#btnSound').addEventListener('click', ()=>{ state.settings.sound = !state.settings.sound; save(); hud(); beep('ok'); });
  $('#btnSkipUnlock').addEventListener('click', ()=>{ state.settings.allowSkipUnlock = !state.settings.allowSkipUnlock; save(); hud(); renderLessons(); toast(state.settings.allowSkipUnlock?'Skip unlock enabled':'Skip unlock disabled'); });

  // profile reset/export/import
  $('#btnReset').addEventListener('click', ()=>{
    if(!confirm('Reset all FishID progress on this device?')) return;
    state = defaultState();
    save();
    hud();
    renderHome();
    renderLessons();
    renderProfile();
    renderReview();
    toast('Progress reset.');
  });

  $('#btnExport').addEventListener('click', ()=>{
    const blob = new Blob([JSON.stringify(state,null,2)], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href=url;
    a.download = `fishid-progress-${todayStr()}.json`;
    a.click();
    setTimeout(()=>URL.revokeObjectURL(url), 1000);
  });

  $('#btnImport').addEventListener('click', ()=> $('#importFile').click());
  $('#importFile').addEventListener('change', async (e)=>{
    const f = e.target.files?.[0];
    if(!f) return;
    try{
      const txt = await f.text();
      const parsed = JSON.parse(txt);
      // basic validation
      if(typeof parsed !== 'object' || parsed.xp == null || !parsed.lessons) throw new Error('bad');
      // merge into defaults
      const base = defaultState();
      state = {
        ...base,
        ...parsed,
        settings: { ...base.settings, ...(parsed.settings||{}) },
        lessons: { ...base.lessons, ...(parsed.lessons||{}) },
        fishStats: { ...base.fishStats, ...(parsed.fishStats||{}) }
      };
      save();
      hud();
      renderHome();
      renderLessons();
      renderProfile();
      renderReview();
      toast('Imported progress.');
    }catch(err){
      toast('Could not import that file.');
      beep('warn');
    }finally{
      e.target.value='';
    }
  });
}

// ===== PWA =====
function registerSW(){
  if(!('serviceWorker' in navigator)) return;
  // service worker works only on http(s) or localhost
  navigator.serviceWorker.register('sw.js').catch(()=>{});
}

// ===== Init =====
function init(){
  regenHearts();
  hud();
  renderHome();
  renderLessons();
  renderProfile();
  renderReview();
  bind();
  registerSW();
  // update HUD every second (regen timer)
  setInterval(hud, 1000);
}

init();

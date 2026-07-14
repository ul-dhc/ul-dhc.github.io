
const ICONS = {
  flower: `<circle cx="12" cy="12" r="2.4"/><path d="M12 9.6c0-2.4-1.6-4-3.6-4.4 1 1.8.6 3.4 1.4 4.4M12 9.6c0-2.4 1.6-4 3.6-4.4-1 1.8-.6 3.4-1.4 4.4M12 14.4c0 2.4-1.6 4-3.6 4.4 1-1.8.6-3.4 1.4-4.4M12 14.4c0 2.4 1.6 4 3.6 4.4-1-1.8-.6-3.4 1.4-4.4M9.6 12c-2.4 0-4-1.6-4.4-3.6 1.8 1 3.4.6 4.4 1.4M14.4 12c2.4 0 4 1.6 4.4 3.6-1.8-1-3.4-.6-4.4-1.4"/>`,
  pattern: `<path d="M4 7c2 0 2 3 4 3s2-3 4-3 2 3 4 3 2-3 4-3"/><path d="M4 13c2 0 2 3 4 3s2-3 4-3 2 3 4 3 2-3 4-3"/>`,
  mic: `<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3M9 21h6"/>`,
  waveform: `<path d="M3 12h2m3-6v12m3-9v6m3-8v10m3-6v2m3 1h2" stroke-linecap="round"/>`,
  pen: `<path d="M4 20l1-4.2L15.8 5a1.6 1.6 0 0 1 2.3 0l0.9.9a1.6 1.6 0 0 1 0 2.3L8.2 19 4 20Z"/><path d="M13.5 6.5l4 4"/>`,
  people: `<circle cx="8.5" cy="8" r="2.6"/><circle cx="16" cy="9" r="2.1"/><path d="M3.5 19c.6-3 2.6-4.8 5-4.8s4.4 1.8 5 4.8"/><path d="M14.5 14.6c2 .3 3.5 1.9 4 4.4"/>`,
  book: `<path d="M12 6.5c-1.6-1.2-3.6-1.7-6-1.7v13c2.4 0 4.4.5 6 1.7 1.6-1.2 3.6-1.7 6-1.7v-13c-2.4 0-4.4.5-6 1.7Z"/><path d="M12 6.5v13"/>`,
  document: `<path d="M7 3.5h7l4 4V20a.7.7 0 0 1-.7.7H7.7A.7.7 0 0 1 7 20V4.2A.7.7 0 0 1 7 3.5Z"/><path d="M14 3.5V8h4M9.5 12h5M9.5 15.2h5"/>`,
  nodes: `<circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M7.7 7.1L11 16M16.3 7.1L13 16M8 6h8"/>`,
  brackets: `<path d="M9 4c-2.3 0-3 1-3 3v2c0 1.3-.5 2-1.5 2.5C5.5 12 6 12.7 6 14v2c0 2 .7 3 3 3M15 4c2.3 0 3 1 3 3v2c0 1.3.5 2 1.5 2.5-1 .5-1.5 1.2-1.5 2.5v2c0 2-.7 3-3 3"/>`,
  landmark: `<path d="M4 20h16M5 20V10.5M9 20V10.5M15 20V10.5M19 20V10.5M3.5 10.5L12 5l8.5 5.5H3.5Z"/>`,
  scan: `<path d="M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16" stroke-linecap="round"/><path d="M4 12h16"/>`,
  globe: `<circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4c2.4 2.2 3.6 5 3.6 8s-1.2 5.8-3.6 8c-2.4-2.2-3.6-5-3.6-8s1.2-5.8 3.6-8Z"/>`,
  building: `<rect x="5" y="4" width="7" height="16"/><rect x="13" y="9" width="6" height="11"/><path d="M7.5 7.5h2M7.5 11h2M7.5 14.5h2M15.5 12.5h2M15.5 16h2"/>`,
  translate: `<circle cx="9" cy="9" r="6.2"/><circle cx="16.5" cy="16.5" r="4.8"/><path d="M9 6.2v5.6M6.5 9h5"/>`,
  database: `<ellipse cx="12" cy="6" rx="7" ry="2.6"/><path d="M5 6v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6M5 12v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6v-6"/>`,
  cpu: `<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3"/>`,
  layers: `<path d="M12 3.5l8 4.5-8 4.5-8-4.5 8-4.5Z"/><path d="M4 12l8 4.5 8-4.5M4 15.5l8 4.5 8-4.5"/>`,
  link: `<circle cx="8.5" cy="8.5" r="3.2"/><circle cx="15.5" cy="15.5" r="3.2"/><path d="M10.8 10.8l2.4 2.4"/>`,
  map: `<path d="M9 4l-5 2v14l5-2 6 2 5-2V4l-5 2-6-2Z"/><path d="M9 4v14M15 6v14"/>`,
  cap: `<path d="M12 4L2 9l10 5 10-5-10-5Z"/><path d="M6 11.5V16c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4.5"/><path d="M22 9v6"/>`,
  sparkle: `<path d="M12 3l1.5 5L18 9.5 13.5 11 12 16l-1.5-5L5 9.5 9.5 8 12 3Z"/><path d="M19 15l.8 2.3L22 18l-2.2.7L19 21l-.8-2.3L16 18l2.2-.7L19 15Z"/>`,
  flag: `<path d="M6 3v18"/><path d="M6 4h11l-2.5 3.5L17 11H6"/>`,
  flask: `<path d="M10 3h4M10 3v5.5L5.8 17a1.5 1.5 0 0 0 1.3 2.3h9.8a1.5 1.5 0 0 0 1.3-2.3L14 8.5V3"/><path d="M8.5 14.5h7"/>`,
  unlock: `<rect x="5" y="11" width="14" height="9" rx="1.5"/><path d="M8.5 11V8a3.5 3.5 0 0 1 6.6-1.6"/>`,
  headphones: `<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.3"/><rect x="17" y="14" width="4" height="6" rx="1.3"/>`,
  handwriting: `<path d="M4 7h9M4 12h6" stroke-linecap="round"/><path d="M14 16l1-3.3 6-6 2.3 2.3-6 6L14 16Z"/>`,
  archive: `<rect x="3.5" y="7" width="17" height="4" rx="1"/><path d="M5 11v7a1.4 1.4 0 0 0 1.4 1.4h11.2A1.4 1.4 0 0 0 19 18v-7"/><path d="M10 14.5h4"/>`,
  clock: `<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>`,
  transform: `<path d="M4 8h13M17 8l-3-3M17 8l-3 3"/><path d="M20 16H7M7 16l3 3M7 16l3-3"/>`,
  corpus: `<path d="M6 4.5h9l3 3V19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5.5a1 1 0 0 1 1-1Z"/><path d="M8.5 10h7M8.5 13.5h7M8.5 17h4.5"/>`,
  dictionary: `<path d="M6 4h11a1.5 1.5 0 0 1 1.5 1.5V20H7.5A1.5 1.5 0 0 1 6 18.5V4Z"/><path d="M6 17h12.5"/><path d="M9.5 8h5"/>`
};

function svgIcon(name){
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>`;
}

/* ---------- Terms ---------- */

const TERMS = [
  { id:0, icon:'cpu',      en:'Digital humanities',              lv:'Digitālās humanitārās zinātnes' },
  { id:1, icon:'landmark', en:'Digital cultural heritage',        lv:'Digitālais kultūras mantojums' },
  { id:2, icon:'people',   en:'Crowdsourcing',                    lv:'Sabiedrības iesaiste' },
  { id:3, icon:'flask',    en:'Citizen science',                  lv:'Sabiedriskā zinātne' },
  { id:4, icon:'nodes',    en:'Language technologies',            lv:'Valodu tehnoloģijas' },
  { id:5, icon:'map',      en:'Networks and maps',                lv:'Tīkli un kartes' },
  { id:6, icon:'clock',    en:'Internet history',                 lv:'Interneta vēsture' },
  { id:7, icon:'pen',      en:'Life writing and digital',         lv:'Dzīves pierakstīšana' },
  { id:8, icon:'flower',   en:'Digital folkloristics',            lv:'Digitālā folkloristika' },
  { id:9, icon:'building', en:'Digital humanities infrastructure', lv:'DH infrastruktūra' }
];

/* ---------- i18n strings ---------- */
const STR = {
  en:{
    headline:'Diving into <br>humanities<br><span class="accent">digitally.</span>',
    lede:'While our new website is being developed...',
    playTitle:'...play the memory game!',
    playSub:'Find matching pairs.',
    boardTitle:'Find all matching pairs',
    moves:'Moves',
    winFlag:'You connected them all!',
    playAgain:'Play again',
    tryAgain:'Not a match. Try again!',
    matchFound:'Match found!',
    matchDesc:'Another match found.'
  },
  lv:{
    headline:'Ienirstam<br>humanitārajās zinātnēs<br><span class="accent">digitāli.</span>',
    lede:'Kamēr jaunā mājaslapa tiek veidota...',
    playTitle:'... uzspēlē atmiņas spēli!',
    playSub:'Savieno pārus.',
    boardTitle:'Atrodi visus pārus',
    moves:'Gājieni',
    winFlag:'Tev tas izdevās!',
    playAgain:'Spēlēt vēlreiz',
    tryAgain:'Nav pāris. Mēģini vēlreiz!',
    matchFound:'Pāris atrasts!',
    matchDesc:'Vēl viens pāris atrasts.'
  }
};

/* ---------- State ---------- */
let lang = 'en';
let theme = 'dark';
let deck = [];
let flipped = [];
let matchedCount = 0;
let moves = 0;
let lockBoard = false;

/* ---------- Init ---------- */
function buildDeck(){
  const cards = [];
  TERMS.forEach(t=>{
    cards.push({ pairId:t.id, icon:t.icon, term:t });
    cards.push({ pairId:t.id, icon:t.icon, term:t });
  });
  // shuffle
  for(let i=cards.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [cards[i],cards[j]] = [cards[j],cards[i]];
  }
  return cards;
}

function renderBoard(){
  const board = document.getElementById('board');
  board.innerHTML = '';
  deck.forEach((c, idx)=>{
    const label = c.term[lang];
    const el = document.createElement('div');
    el.className = 'card';
    el.dataset.index = idx;
    el.dataset.pair = c.pairId;
    el.dataset.color = c.pairId % 4;
    el.innerHTML = `
      <div class="card-inner">
        <div class="card-face card-back">ULDHC</div>
        <div class="card-face card-front">
          ${svgIcon(c.icon)}
          <span class="term-label">${label}</span>
        </div>
      </div>`;
    el.addEventListener('click', ()=> onCardClick(idx, el));
    board.appendChild(el);
  });
}

function onCardClick(idx, el){
  if(lockBoard) return;
  if(el.classList.contains('flipped') || el.classList.contains('matched')) return;
  if(flipped.length === 2) return;

  el.classList.add('flipped');
  flipped.push({ idx, el });
  document.getElementById('statusMsg').textContent = '';
  document.getElementById('statusMsg').classList.remove('wrong');
  document.getElementById('matchInfo').hidden = true;

  if(flipped.length === 2){
    moves++;
    document.getElementById('movesCount').textContent = moves;
    lockBoard = true;
    const [a,b] = flipped;
    const cardA = deck[a.idx], cardB = deck[b.idx];
    if(cardA.pairId === cardB.pairId){
      setTimeout(()=>{
        a.el.classList.add('matched');
        b.el.classList.add('matched');
        flipped = [];
        lockBoard = false;
        matchedCount++;
        showMatchInfo(cardA.term);
        if(matchedCount === TERMS.length) setTimeout(showWin, 500);
      }, 450);
    } else {
      const msg = document.getElementById('statusMsg');
      msg.textContent = STR[lang].tryAgain;
      msg.classList.add('wrong');
      a.el.classList.add('wrong'); b.el.classList.add('wrong');
      setTimeout(()=>{
        a.el.classList.remove('flipped','wrong');
        b.el.classList.remove('flipped','wrong');
        flipped = [];
        lockBoard = false;
      }, 850);
    }
  }
}

function showMatchInfo(term){
  const info = document.getElementById('matchInfo');
  document.getElementById('matchInfoTitle').textContent = term[lang];
  document.getElementById('matchInfoText').textContent = STR[lang].matchDesc;
  info.hidden = false;
}

const COLOR_VARS = ['purple','lilac','blue','pink'];

function showWin(){
  document.getElementById('board').style.display = 'none';
  document.getElementById('matchInfo').hidden = true;
  document.getElementById('statusMsg').textContent = '';
  const winPanel = document.getElementById('winPanel');
  const grid = document.getElementById('winGrid');
  grid.innerHTML = '';
  TERMS.forEach(t=>{
    const colorName = COLOR_VARS[t.id % 4];
    const item = document.createElement('div');
    item.className = 'win-item';
    item.style.setProperty('--pc', `var(--accent-${colorName})`);
    item.style.setProperty('--pc-soft', `var(--accent-${colorName}-soft)`);
    item.innerHTML = `${svgIcon(t.icon)}<span>${t[lang]}</span>`;
    grid.appendChild(item);
  });
  winPanel.hidden = false;
}

function resetGame(){
  deck = buildDeck();
  flipped = [];
  matchedCount = 0;
  moves = 0;
  lockBoard = false;
  document.getElementById('movesCount').textContent = 0;
  document.getElementById('statusMsg').textContent = '';
  document.getElementById('matchInfo').hidden = true;
  document.getElementById('winPanel').hidden = true;
  document.getElementById('board').style.display = 'grid';
  renderBoard();
}

/* ---------- i18n apply ---------- */
function applyLang(){
  document.body.dataset.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.dataset.i18n;
    el.innerHTML = STR[lang][key];
  });
  document.getElementById('langToggle').textContent = lang === 'en' ? 'LV' : 'EN';
  updateLogo();
  resetGame();
}

function updateLogo(){
  const logo = document.getElementById('brandLogo');
  const langKey = lang === 'en' ? 'eng' : 'lat';
  const shade = theme === 'dark' ? 'white' : 'black';
  logo.src = `assets/logo-${langKey}-${shade}.png`;
}

/* ---------- Theme ---------- */
function applyTheme(){
  document.body.classList.toggle('theme-dark', theme==='dark');
  document.body.classList.toggle('theme-light', theme==='light');
  updateLogo();
}

/* ---------- Background network dots ----------
   A loosely integrated field spread across the whole page (jittered grid,
   not clustered corners) so it reads as one connected structure — "breathing
   humanities" — rather than decoration. Motion is handled entirely in CSS
   (slow drift + opacity breathe) so this only needs to lay out a calm,
   evenly-distributed mesh once. */
function buildNetBg(){
  const g = document.querySelector('.net-dots');
  const colors = ['var(--accent-purple)','var(--accent-lilac)','var(--accent-blue)','var(--accent-pink)'];
  const cols = 16, rows = 16, cellW = 800/cols, cellH = 800/rows;
  const pts = [];
  for(let r=0;r<rows;r++){
    for(let c=0;c<cols;c++){
      if(Math.random() > 0.7) continue; // organic sparseness, not a full grid
      const jitterX = (Math.random()-0.5) * cellW * 0.85;
      const jitterY = (Math.random()-0.5) * cellH * 0.85;
      pts.push({
        x: c*cellW + cellW/2 + jitterX,
        y: r*cellH + cellH/2 + jitterY,
        r: 0.7 + Math.random()*1.3,
        o: 0.16 + Math.random()*0.2,
        c: colors[Math.floor(Math.random()*colors.length)]
      });
    }
  }

  let html = '';
  pts.forEach((p,i)=>{
    // connect to the nearest neighbour only, within a modest radius,
    // so the mesh reads as gently linked rather than a dense web
    let nearest = null, best = Infinity;
    pts.forEach((q,j)=>{
      if(i===j) return;
      const d = (p.x-q.x)**2 + (p.y-q.y)**2;
      if(d < best){ best = d; nearest = q; }
    });
    if(nearest && best < 78*78){
      html += `<line data-c x1="${p.x.toFixed(1)}" y1="${p.y.toFixed(1)}" x2="${nearest.x.toFixed(1)}" y2="${nearest.y.toFixed(1)}" style="color:${p.c};opacity:${(p.o*0.55).toFixed(2)}"/>`;
    }
  });
  pts.forEach(p=>{
    html += `<circle data-c cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${p.r.toFixed(2)}" style="color:${p.c};opacity:${p.o.toFixed(2)}"/>`;
  });
  g.innerHTML = html;
}

/* ---------- Wire up ---------- */
document.getElementById('langToggle').addEventListener('click', ()=>{
  lang = lang === 'en' ? 'lv' : 'en';
  applyLang();
});
document.getElementById('themeToggle').addEventListener('click', ()=>{
  theme = theme === 'dark' ? 'light' : 'dark';
  applyTheme();
});
document.getElementById('playAgainBtn').addEventListener('click', resetGame);

buildNetBg();
applyTheme();
applyLang();

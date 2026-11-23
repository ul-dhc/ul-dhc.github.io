(() => {
  'use strict';
  const data = JSON.parse(document.getElementById('chronicle-data').textContent);
  const $ = id => document.getElementById(id);
  const storage = {get(key, fallback) {try {return localStorage.getItem(key) ?? fallback;} catch {return fallback;}}, set(key,value) {try {localStorage.setItem(key,value);} catch {}}};
  let lang = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'lv';
  let filter = 'all', theme = storage.get('dhc-theme','light');
  let monthFrame = null;
  function updateCurrentMonth() {
    monthFrame = null;
    const groups = [...document.querySelectorAll('.year-section[open] .month-group')];
    let current = null, largestVisible = 0;
    for (const group of groups) {
      const rect = group.getBoundingClientRect();
      const visible = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
      if (visible > largestVisible) {current = group; largestVisible = visible;}
    }
    document.querySelectorAll('.month-group').forEach(group => group.classList.toggle('is-current', group === current));
  }
  function scheduleCurrentMonth() {
    if (monthFrame === null) monthFrame = requestAnimationFrame(updateCurrentMonth);
  }
  let fontIndex = Math.max(0,Math.min(2,Number(storage.get('dhc-font-scale','1')) || 0));
  const ui = {
    lv:{back:'Atpakaļ uz sākumu',title:'LU DHC hronika',empty:'Šajā kategorijā vēl nav ierakstu.',top:'Atpakaļ uz augšu',footer:'LU Digitālo humanitāro zinātņu centrs, 2026',all:'Visi',source:'Avots',programme:'Programma',navAbout:'Par mums',navResources:'Digitālie resursi un rīki',navProjects:'Projekti',navTeam:'Komanda',navChronicle:'Hronika',navContact:'Kontakti'},
    en:{back:'Back to home',title:'UL DHC chronicle',empty:'No entries in this category yet.',top:'Back to top',footer:'UL Digital Humanities Centre, 2026',all:'All',source:'Source',programme:'Programme',navAbout:'About us',navResources:'Digital resources and tools',navProjects:'Projects',navTeam:'Team',navChronicle:'Chronicle',navContact:'Contact'}
  };
  const countText = n => lang === 'en' ? `${n} ${n===1?'event':'events'}` : `${n} ${n%10===1 && n%100!==11?'notikums':'notikumi'}`;
  const el = (tag,classes,text) => {const node=document.createElement(tag); if(classes)node.className=classes;if(text!==undefined)node.textContent=text;return node;};
  const icon = (name,classes='') => {const node=el('i',classes);node.dataset.lucide=name;node.setAttribute('aria-hidden','true');return node;};
  const refreshIcons = () => {if(window.lucide)window.lucide.createIcons({attrs:{'stroke-width':1.5,'aria-hidden':'true'}});};
  const monthName = (year,month,short=false) => new Intl.DateTimeFormat(lang,{month:short?'short':'long',timeZone:'UTC'}).format(new Date(Date.UTC(year,month-1,1)));
  const dateText = event => {
    if(event.precision==='month')return monthName(Number(event.start.slice(0,4)),Number(event.start.slice(5,7)));
    const [y,m,d]=event.start.split('-'),[,em,ed]=event.end.split('-');
    if(event.start===event.end)return `${d}.${m}.`;
    return m===em?`${d}.–${ed}.${m}.`:`${d}.${m}.–${ed}.${em}.`;
  };
  function entry(event) {
    const li=el('li','chronicle-entry');li.id=event.id;li.dataset.category=event.category;
    const time=el('time','',dateText(event));time.dateTime=event.precision==='month'?event.start.slice(0,7):event.start;
    const copy=el('div','entry-copy');
    const tag=el('button','entry-category entry-tag',data.categories.find(c=>c.id===event.category)[lang]);tag.type='button';tag.setAttribute('aria-pressed',String(filter===event.category));tag.setAttribute('aria-label',`${lang==='lv'?'Atlasīt:':'Filter:'} ${tag.textContent}`);tag.addEventListener('click',()=>{filter=filter===event.category?'all':event.category;render();document.querySelector('.chronicle-tools').scrollIntoView({block:'start'});});
    const paragraph=el('p','',event.text[lang]);copy.append(tag,el('h3','',event.title[lang]),paragraph);
    const links=el('span','entry-links');event.sources.forEach((url,index)=>{const a=el('a');a.setAttribute('aria-label',`${ui[lang][index?'programme':'source']}: ${event.title[lang]}`);a.href=url;a.target='_blank';a.rel='noopener noreferrer';a.append(icon('arrow-up-right'));links.append(a);});if(event.sources.length)paragraph.append(document.createTextNode(' '),links);li.append(time,copy);return li;
  }
  function renderFilters() {
    const box=$('category-filters');box.replaceChildren();
    [{id:'all',[lang]:ui[lang].all},...data.categories].forEach(c=>{
      const b=el('button','filter-button');b.type='button';b.dataset.filter=c.id;
      if(c.id!=='all'){b.dataset.category=c.id;const dot=el('span','category-dot');dot.setAttribute('aria-hidden','true');b.append(dot);}
      b.append(document.createTextNode(c[lang]),el('span','',String(c.id==='all'?data.events.length:data.events.filter(e=>e.category===c.id).length)));
      b.addEventListener('click',()=>{filter=filter===c.id?'all':c.id;render();});box.append(b);
    });
    box.setAttribute('aria-label',lang==='lv'?'Notikumu kategorijas':'Event categories');
  }
  function render() {
    const states=new Map([...document.querySelectorAll('.year-section')].map(d=>[d.dataset.year,d.open]));
    const events=data.events.filter(e=>filter==='all'||e.category===filter);
    const years=[...new Set(events.map(e=>e.start.slice(0,4)))].sort().reverse();
    const container=$('chronicle-years');container.replaceChildren();
    years.forEach(year=>{
      const list=events.filter(e=>e.start.startsWith(year));
      const details=el('details','year-section');details.dataset.year=year;details.open=states.get(year)??true;
      const summary=el('summary');summary.append(el('span','year-number',year),el('span','year-count',String(list.length)));
      const toggle=el('span','year-toggle');toggle.setAttribute('aria-hidden','true');toggle.append(icon('plus','year-expand'),icon('minus','year-collapse'));summary.append(toggle);details.append(summary);
      const content=el('div','year-content');
      for(let month=12;month>0;month--){const monthEvents=list.filter(e=>Number(e.start.slice(5,7))===month);const note=filter==='all'&&data.notes?.find(n=>n.year===Number(year)&&n.month===month);if(!monthEvents.length&&!note)continue;
        const group=el('section','month-group');group.id=`month-${year}-${String(month).padStart(2,'0')}`;const title=el('h2','month-title');title.id=`month-title-${year}-${month}`;group.setAttribute('aria-labelledby',title.id);title.textContent=monthName(year,month);const ol=el('ol','entry-list');monthEvents.forEach(e=>ol.append(entry(e)));const monthContent=el('div','month-content');if(note){const message=el('p','month-note');message.append(icon('sun','holiday-icon'),document.createTextNode(note.text[lang]));monthContent.append(message);}if(monthEvents.length)monthContent.append(ol);group.append(title,monthContent);content.append(group);
      }
      details.append(content);container.append(details);
    });
    $('result-count').textContent=countText(events.length);$('no-results').hidden=events.length>0;
    document.querySelectorAll('[data-filter]').forEach(b=>{const active=b.dataset.filter===filter;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active));});
    const rhythm=$('year-rhythm');rhythm.replaceChildren();
    for(let month=1;month<=12;month++){
      const list=events.filter(e=>e.start.startsWith('2026')&&Number(e.start.slice(5,7))===month);
      const note=filter==='all'&&data.notes?.find(n=>n.year===2026&&n.month===month);
      const a=el('a','rhythm-month'+(list.length||note?'':' is-empty')+(note?' is-holiday':''));a.href=`#month-2026-${String(month).padStart(2,'0')}`;a.dataset.month=month;a.setAttribute('aria-label',`${monthName(2026,month)}: ${note?note.text[lang]:countText(list.length)}`);
      if(!list.length&&!note){a.setAttribute('aria-disabled','true');a.tabIndex=-1;}
      const dots=el('span','rhythm-dots');dots.setAttribute('aria-hidden','true');if(note)dots.append(icon('sun','holiday-icon'));[...list].reverse().forEach(e=>{const dot=el('span','rhythm-dot');dot.dataset.category=e.category;dots.append(dot);});a.append(dots,el('span','rhythm-label',monthName(2026,month,true).replace('.','').toUpperCase()));
      a.addEventListener('click',event=>{if(!list.length&&!note){event.preventDefault();return;}document.querySelector('.year-section[data-year="2026"]').open=true;});rhythm.append(a);
    }
    refreshIcons();
    scheduleCurrentMonth();
  }
  function appearance() {
    document.body.classList.toggle('theme-dark',theme==='dark');document.body.classList.toggle('theme-light',theme!=='dark');
    $('brandLogo').src=`../assets/official-lu-${lang}-${theme==='dark'?'white':'black'}.png`;
    $('brandLogo').alt=lang==='lv'?'Latvijas Universitāte':'University of Latvia';
    $('themeToggle').replaceChildren(icon(theme==='dark'?'sun':'moon'));
    $('themeToggle').setAttribute('aria-label',lang==='lv'?'Pārslēgt krāsu režīmu':'Toggle colour theme');
    document.querySelector('meta[name="theme-color"]').content=theme==='dark'?'#090c1e':'#ffffff';
    refreshIcons();
  }
  function language() {
    document.documentElement.lang=lang;document.body.dataset.lang=lang;
    document.title=`${ui[lang].title} – ${lang==='lv'?'LU Digitālo humanitāro zinātņu centrs':'UL Digital Humanities Centre'}`;
    document.querySelectorAll('[data-i18n]').forEach(node=>{const key=node.dataset.i18n;if(!ui[lang][key])return;node.replaceChildren();ui[lang][key].split('\n').forEach((line,index)=>{if(index)node.append(el('br'));node.append(document.createTextNode(line));});if(key==='title')node.append(el('span','','.'));if(key==='top')node.append(icon('arrow-up'));});
    $('langToggle').textContent=lang==='lv'?'EN':'LV';$('langToggle').setAttribute('aria-label',lang==='lv'?'Read in English':'Lasīt latviski');
    document.querySelector('.skip-link').textContent=lang==='lv'?'Uz hroniku':'Skip to chronicle';
    $('fontDecrease').setAttribute('aria-label',lang==='lv'?'Samazināt teksta izmēru':'Decrease text size');$('fontIncrease').setAttribute('aria-label',lang==='lv'?'Palielināt teksta izmēru':'Increase text size');
    $('menuToggle').setAttribute('aria-label',lang==='lv'?'Atvērt izvēlni':'Open navigation');
    document.querySelectorAll('.main-nav a').forEach(a=>{const url=new URL(a.href);if(lang==='en')url.searchParams.set('lang','en');else url.searchParams.delete('lang');a.href=url.href;});
    document.querySelector('.brand').href=`../index.html#${lang}`;
    document.querySelector('.back-link').href=`../index.html#${lang}`;
    document.querySelector('.back-link').setAttribute('aria-label',ui[lang].back);
    appearance();renderFilters();render();
  }
  function font() {document.documentElement.style.setProperty('--font-scale',[.94,1,1.08][fontIndex]);$('fontDecrease').disabled=fontIndex===0;$('fontIncrease').disabled=fontIndex===2;storage.set('dhc-font-scale',fontIndex);}
  $('langToggle').addEventListener('click',()=>{lang=lang==='lv'?'en':'lv';const url=new URL(location.href);if(lang==='en')url.searchParams.set('lang','en');else url.searchParams.delete('lang');history.replaceState(null,'',url);language();});
  $('themeToggle').addEventListener('click',()=>{theme=theme==='dark'?'light':'dark';storage.set('dhc-theme',theme);appearance();});
  $('fontDecrease').addEventListener('click',()=>{fontIndex=Math.max(0,fontIndex-1);font();});$('fontIncrease').addEventListener('click',()=>{fontIndex=Math.min(2,fontIndex+1);font();});
  $('menuToggle').setAttribute('aria-controls','mainNav');
  function menuIcon(open){$('menuToggle').replaceChildren(icon(open?'x':'menu'));refreshIcons();}
  function closeMenu(){$('mainNav').classList.remove('open');$('menuToggle').setAttribute('aria-expanded','false');menuIcon(false);}
  $('menuToggle').addEventListener('click',()=>{const open=$('mainNav').classList.toggle('open');$('menuToggle').setAttribute('aria-expanded',String(open));menuIcon(open);});
  $('mainNav').querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
  document.body.classList.add('js-ready');
  window.addEventListener('scroll', scheduleCurrentMonth, {passive:true});
  window.addEventListener('resize', scheduleCurrentMonth);
  $('chronicle-years').addEventListener('toggle', scheduleCurrentMonth, true);
  if (window.ResizeObserver) new ResizeObserver(scheduleCurrentMonth).observe($('chronicle-years'));
  language();font();
})();

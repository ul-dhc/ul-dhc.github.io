function currentLanguage(){try{return localStorage.getItem('lu107-language')==='en'?'en':'lv'}catch{return document.documentElement.lang==='en'?'en':'lv'}}

function ensureProjectInfo(){
  const footer=document.querySelector('.site-footer');
  if(!footer)return;
  if(!document.querySelector('#info')){
    const modal=document.createElement('section');
    modal.id='info';modal.className='project-info-modal';modal.setAttribute('role','dialog');modal.setAttribute('aria-modal','true');modal.setAttribute('aria-labelledby','info-title');modal.setAttribute('aria-hidden','true');
    modal.innerHTML=`<div class="project-info-dialog"><button class="project-info-close" type="button" aria-label="Aizvērt">×</button><h2 id="info-title">Par šo iniciatīvu</h2><p>LU 107. jubilejas digitālo vietni izveidoja <a href="https://dhc.lu.lv/">LU Digitālo humanitāro zinātņu centrs</a> sadarbībā ar <a href="https://www.muzejs.lu.lv/">LU Muzeju</a> un <a href="https://www.lu.lv/par-mums/administracija/departamenti/komunikacijas-departaments/">LU Komunikācijas departamentu</a>.</p><p>Šīs aktivitātes ir daļa no LU DHC īstenotajiem projektiem: <a href="https://www.hzf.lu.lv/petnieciba/projekti/open/" target="_blank" rel="noopener">ȬPEN</a> (Nr. ZDA-LIP 2025/2) un valsts pētījumu programmas projekta <a href="https://digitalhumanities.lv/lv/projekti/digilate/" target="_blank" rel="noopener">DigiLATE</a> (Nr. VPP-IZM-Letonika-2025/1-0004).</p><p class="project-info-contact">Saziņai: <a href="mailto:dhc@lu.lv">dhc@lu.lv</a></p></div>`;
    document.body.append(modal);
  }
  let link=footer.querySelector('.project-info-link');
  if(!link){link=document.createElement('a');link.className='project-info-link';link.href='#info';footer.insertBefore(link,footer.querySelector('.footer-up'))}
  if(!link.querySelector('svg'))link.innerHTML='<span>Par šo iniciatīvu</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>';
  syncInfoModal();
}

function openInfoModal(){history.pushState({info:true},'','#info');syncInfoModal();document.querySelector('.project-info-close')?.focus()}
function closeInfoModal(){history.replaceState(null,'',`#${currentLanguage()}`);syncInfoModal();document.querySelector('.project-info-link')?.focus()}
function syncInfoModal(){const modal=document.querySelector('#info');if(!modal)return;const open=location.hash.toLowerCase()==='#info';modal.classList.toggle('is-open',open);modal.setAttribute('aria-hidden',String(!open));document.body.classList.toggle('info-modal-open',open)}

document.addEventListener('click',event=>{const link=event.target.closest('.project-info-link');if(link){event.preventDefault();openInfoModal();return}if(event.target.closest('.project-info-close')||event.target.matches('.project-info-modal')){event.preventDefault();closeInfoModal()}});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&location.hash.toLowerCase()==='#info')closeInfoModal()});window.addEventListener('hashchange',syncInfoModal);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ensureProjectInfo,{once:true});else ensureProjectInfo();window.addEventListener('load',ensureProjectInfo,{once:true});setTimeout(ensureProjectInfo,1000);setTimeout(ensureProjectInfo,1400);

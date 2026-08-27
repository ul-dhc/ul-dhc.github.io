function ensureProjectInfo() {
  const footer = document.querySelector('.site-footer');
  if (!footer) return;

  if (!document.querySelector('#info')) {
    const section = document.createElement('section');
    section.id = 'info';
    section.className = 'project-info';
    section.setAttribute('aria-labelledby', 'info-title');
    section.innerHTML = `
      <div class="project-info-inner">
        <h2 id="info-title">Par projektu</h2>
        <p>LU 107. jubilejas digitālo pieredzi veidojis LU Digitālo humanitāro zinātņu centrs sadarbībā ar LU Matemātikas un informātikas institūtu, LU Muzeju un LU Komunikācijas departamentu.</p>
        <p>Aktivitātes saistītas ar LU DHC projektu <a href="https://www.hzf.lu.lv/petnieciba/projekti/open/" target="_blank" rel="noopener">ȬPEN</a> (Nr. ZDA-LIP 2025/2) un valsts pētījumu programmas projektu <a href="https://digitalhumanities.lv/lv/projekti/digilate/" target="_blank" rel="noopener">DigiLATE</a> (Nr. VPP-IZM-Letonika-2025/1-0004).</p>
      </div>`;
    footer.before(section);
  }

  if (!footer.querySelector('.project-info-link')) {
    const link = document.createElement('a');
    link.className = 'project-info-link';
    link.href = '#info';
    link.textContent = 'Par projektu';
    const upLink = footer.querySelector('.footer-up');
    footer.insertBefore(link, upLink);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ensureProjectInfo, { once: true });
} else {
  ensureProjectInfo();
}

window.addEventListener('load', ensureProjectInfo, { once: true });
setTimeout(ensureProjectInfo, 1000);

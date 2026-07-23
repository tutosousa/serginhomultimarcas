// ===========================================================
// SERGINHO MULTIMARCAS — layout compartilhado
// ===========================================================

const CATEGORIAS_MENU = [
  ['camisas', 'Camisas', 'ic-camisa'],
  ['calcas', 'Calças', 'ic-calca'],
  ['ternos-blazers', 'Ternos & Blazers', 'ic-terno'],
  ['casacos-jaquetas', 'Casacos & Jaquetas', 'ic-jaqueta'],
  ['infantil', 'Infantil', 'ic-crianca'],
  ['acessorios', 'Acessórios', 'ic-acessorio']
];

// helper: link de categoria já respeitando a cidade atual (surubim/limoeiro)
function categoriaHref(catKey){
  const cid = cidadeAtual() || 'surubim';
  return `${cid}.html#cat-${catKey}`;
}

function headerHTML(activeKey){
  const cid = cidadeAtual() || 'surubim';
  const panelLinks = CATEGORIAS_MENU.map(([key, label]) =>
    `<a href="${categoriaHref(key)}">${label}</a>`
  ).join('');

  return `
  <div class="announce">
    <a href="#" data-whats="Olá! Quero saber mais sobre o atendimento da Serginho Multimarcas.">✨ LOJA REFERÊNCIA E AUTORIZADA DESDE 2010 &nbsp;|&nbsp; <strong>FALAR NO WHATSAPP &gt;</strong></a>
  </div>

  <header class="site-header">
    <div class="header-inner">
      <a href="index.html" class="brand">
        <img class="brand-mark" src="logo-crop.png" alt="Serginho Multimarcas">
      </a>

      <nav class="main-nav" id="mainNav">
        <div class="city-switch">
          <a href="surubim.html" class="${cid==='surubim'?'is-active':''}">Surubim</a>
          <a href="limoeiro.html" class="${cid==='limoeiro'?'is-active':''}">Limoeiro</a>
        </div>
        <a href="index.html" ${activeKey==='home' ? 'aria-current="page"' : ''}>Início</a>
        <button type="button" class="nav-cat-trigger" id="catTrigger">Categorias <svg><use href="icons.svg#ic-chevron"></use></svg></button>
        <a href="contato.html" ${activeKey==='contato' ? 'aria-current="page"' : ''}>Contato</a>
      </nav>

      <div class="header-actions">
        <button type="button" class="icon-btn" id="searchTrigger" aria-label="Buscar">
          <svg><use href="icons.svg#ic-search"></use></svg>
        </button>
        <a class="icon-btn" data-whats="Olá! Quero ver meus produtos favoritos na Serginho Multimarcas." aria-label="Favoritos">
          <svg><use href="icons.svg#ic-heart"></use></svg>
        </a>
        <a class="btn-whats" data-whats="Olá! Vim do site da Serginho Multimarcas e quero falar com um vendedor.">
          <svg><use href="icons.svg#ic-whats"></use></svg>
          <span>WhatsApp</span>
        </a>
        <button class="nav-toggle" aria-label="Abrir menu" aria-expanded="false"><span></span><span></span><span></span></button>
      </div>
    </div>
  </header>

  <div class="search-overlay" id="searchOverlay" aria-hidden="true">
    <form class="search-box" id="searchForm">
      <svg><use href="icons.svg#ic-search"></use></svg>
      <input type="text" id="searchInput" placeholder="O que você busca? Ex: camisa social, terno, jaqueta..." autocomplete="off">
      <button type="button" class="search-close" id="searchClose" aria-label="Fechar busca"><svg><use href="icons.svg#ic-close"></use></svg></button>
    </form>
  </div>

  <div class="cat-panel-backdrop" id="catBackdrop"></div>
  <aside class="cat-panel" id="catPanel" aria-hidden="true">
    <button class="cat-panel-close" id="catClose" aria-label="Fechar categorias">
      <svg><use href="icons.svg#ic-close"></use></svg>
    </button>
    <p class="eyebrow" style="margin-bottom:18px">Loja de ${cid === 'limoeiro' ? 'Limoeiro' : 'Surubim'}</p>
    <nav class="cat-panel-nav">
      <a href="${cid}.html" class="cat-panel-all">Ver tudo</a>
      ${panelLinks}
    </nav>
  </aside>
  `;
}

function footerHTML(){
  const cols1 = CATEGORIAS_MENU.slice(0,3).map(([key,label]) => `<li><a href="${categoriaHref(key)}">${label}</a></li>`).join('');
  const cols2 = CATEGORIAS_MENU.slice(3).map(([key,label]) => `<li><a href="${categoriaHref(key)}">${label}</a></li>`).join('');
  return `
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <a href="index.html" class="brand">
          <img class="brand-mark" src="logo-crop.png" alt="Serginho Multimarcas">
        </a>
        <p>Loja referência e autorizada desde 2010. Moda masculina multimarcas em Surubim e Limoeiro, com atendimento exclusivo.</p>
      </div>
      <div class="footer-col">
        <h5>Categorias</h5>
        <ul>${cols1}</ul>
      </div>
      <div class="footer-col">
        <h5>&nbsp;</h5>
        <ul>${cols2}</ul>
      </div>
      <div class="footer-col">
        <h5>Lojas</h5>
        <ul>
          <li><a href="surubim.html">Loja de Surubim</a></li>
          <li><a href="limoeiro.html">Loja de Limoeiro</a></li>
          <li><a href="contato.html">Contato</a></li>
          <li><a href="#" data-whats="Olá! Vim do site da Serginho Multimarcas.">WhatsApp</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Serginho Multimarcas. Todos os direitos reservados.</span>
      <span>Surubim-PE &amp; Limoeiro-PE</span>
    </div>
  </footer>`;
}

function mountLayout(activeKey){
  const h = document.getElementById('site-header');
  const f = document.getElementById('site-footer');
  if(h) h.outerHTML = headerHTML(activeKey);
  if(f) f.outerHTML = footerHTML();

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if(toggle && nav){
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  const catTrigger = document.getElementById('catTrigger');
  const catPanel = document.getElementById('catPanel');
  const catBackdrop = document.getElementById('catBackdrop');
  const catClose = document.getElementById('catClose');
  function openCat(){
    catPanel.classList.add('open'); catBackdrop.classList.add('open');
    catPanel.setAttribute('aria-hidden','false'); document.body.style.overflow = 'hidden';
  }
  function closeCat(){
    catPanel.classList.remove('open'); catBackdrop.classList.remove('open');
    catPanel.setAttribute('aria-hidden','true'); document.body.style.overflow = '';
  }
  if(catTrigger){
    catTrigger.addEventListener('click', openCat);
    catClose.addEventListener('click', closeCat);
    catBackdrop.addEventListener('click', closeCat);
    document.addEventListener('keydown', e => { if(e.key === 'Escape') closeCat(); });
    catPanel.querySelectorAll('a').forEach(a => a.addEventListener('click', closeCat));
  }

  const searchTrigger = document.getElementById('searchTrigger');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchClose = document.getElementById('searchClose');
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  if(searchTrigger){
    searchTrigger.addEventListener('click', () => {
      searchOverlay.classList.add('open');
      searchOverlay.setAttribute('aria-hidden','false');
      setTimeout(() => searchInput.focus(), 100);
    });
    searchClose.addEventListener('click', () => {
      searchOverlay.classList.remove('open');
      searchOverlay.setAttribute('aria-hidden','true');
    });
    searchForm.addEventListener('submit', e => {
      e.preventDefault();
      const termo = searchInput.value.trim();
      if(!termo) return;
      window.open(whatsLink(`Olá! Estou procurando: "${termo}" na Serginho Multimarcas. Vocês têm disponível?`), '_blank', 'noopener');
    });
  }

  document.querySelectorAll('[data-whats]').forEach(el => {
    el.href = whatsLink(el.getAttribute('data-whats'), el.getAttribute('data-cidade'));
    if(!el.target){ el.target = '_blank'; el.rel = 'noopener'; }
  });
}

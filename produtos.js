// ===========================================================
// SERGINHO MULTIMARCAS — catálogo (dados de demonstração)
//
// Cada produto tem um campo "cidade": "Surubim" ou "Limoeiro".
// É esse campo que decide em qual das duas lojas o produto aparece —
// não existem dois bancos de dados, só esse filtro.
//
// Pra adicionar uma FOTO real a um produto: coloque o arquivo dentro
// da pasta /fotos e escreva o nome no campo foto (ex: foto:"camisa-1.jpg").
// Sem foto, o card mostra o ícone da categoria normalmente.
// ===========================================================

const CATEGORIA_INFO = {
  'camisas':          { label:'Camisas',            icon:'ic-camisa' },
  'calcas':           { label:'Calças',              icon:'ic-calca' },
  'ternos-blazers':   { label:'Ternos & Blazers',    icon:'ic-terno' },
  'casacos-jaquetas': { label:'Casacos & Jaquetas',  icon:'ic-jaqueta' },
  'infantil':         { label:'Infantil',             icon:'ic-crianca' },
  'acessorios':       { label:'Acessórios',           icon:'ic-acessorio' }
};

const CATALOGO_PADRAO = [
  // ---------- SURUBIM ----------
  { nome:"Camisa Social Slim Aramis", slug:"camisa-social-aramis-sb", categoria:"camisas", cidade:"Surubim", marca:"Aramis", foto:null, preco:189.90, tamanhos:["P","M","G","GG"], cores:["Branco","Azul"], destaque:true, desc:"Tecido leve, corte slim, ideal pro dia a dia no trabalho." },
  { nome:"Camisa Xadrez Flanelada", slug:"camisa-xadrez-flanelada-sb", categoria:"camisas", cidade:"Surubim", marca:"Ogochi", foto:null, preco:139.90, tamanhos:["M","G","GG"], cores:["Verde","Vermelho"], destaque:false, desc:"Estampa xadrez, tecido macio, perfeita pra temporada de frio." },
  { nome:"Calça Social Alfaiataria", slug:"calca-social-alfaiataria-sb", categoria:"calcas", cidade:"Surubim", marca:"Aramis", foto:null, preco:229.90, tamanhos:["38","40","42","44"], cores:["Preto","Cinza"], destaque:true, desc:"Modelagem reta, caimento impecável para o dia a dia formal." },
  { nome:"Calça Jeans Skinny", slug:"calca-jeans-skinny-sb", categoria:"calcas", cidade:"Surubim", marca:"Diesel", foto:null, preco:249.90, tamanhos:["38","40","42"], cores:["Azul"], destaque:false, desc:"Jeans premium com elastano, ajuste moderno." },
  { nome:"Terno Slim Fit 2 Peças", slug:"terno-slim-fit-sb", categoria:"ternos-blazers", cidade:"Surubim", marca:"Aramis", foto:null, preco:799.90, tamanhos:["48","50","52"], cores:["Azul Marinho","Preto"], destaque:true, desc:"Corte slim, tecido nobre — pronto pra qualquer ocasião especial." },
  { nome:"Blazer Casual Textura", slug:"blazer-casual-textura-sb", categoria:"ternos-blazers", cidade:"Surubim", marca:"Ellus", foto:null, preco:449.90, tamanhos:["M","G","GG"], cores:["Bege","Cinza"], destaque:false, desc:"Peça coringa pra elevar qualquer look sem parecer formal demais." },
  { nome:"Jaqueta Corta-Vento", slug:"jaqueta-corta-vento-sb", categoria:"casacos-jaquetas", cidade:"Surubim", marca:"Diesel", foto:null, preco:279.90, tamanhos:["M","G","GG"], cores:["Preto","Verde"], destaque:false, desc:"Leve, resistente ao vento, ótima pra passeio ou viagem." },
  { nome:"Casaco em Camurça Sintética", slug:"casaco-camurca-sb", categoria:"casacos-jaquetas", cidade:"Surubim", marca:"Ellus", foto:null, preco:459.90, tamanhos:["M","G"], cores:["Marrom"], destaque:true, desc:"Acabamento premium, forro quente, visual sofisticado." },
  { nome:"Conjunto Infantil Camisa+Bermuda", slug:"conjunto-infantil-sb", categoria:"infantil", cidade:"Surubim", marca:"Republic P.", foto:null, preco:129.90, tamanhos:["4","6","8","10"], cores:["Azul","Verde"], destaque:false, desc:"Conjunto confortável para o dia a dia das crianças." },
  { nome:"Camisa Polo Infantil", slug:"camisa-polo-infantil-sb", categoria:"infantil", cidade:"Surubim", marca:"Republic P.", foto:null, preco:79.90, tamanhos:["4","6","8","10","12"], cores:["Branco","Azul"], destaque:false, desc:"Algodão macio, ótimo caimento para o dia a dia escolar." },
  { nome:"Cinto de Couro Legítimo", slug:"cinto-couro-sb", categoria:"acessorios", cidade:"Surubim", marca:"Aramis", foto:null, preco:99.90, tamanhos:["Único"], cores:["Preto","Marrom"], destaque:false, desc:"Couro legítimo, fivela em metal reforçado." },
  { nome:"Relógio Casual Aço Escovado", slug:"relogio-casual-sb", categoria:"acessorios", cidade:"Surubim", marca:"Diesel", foto:null, preco:349.90, tamanhos:["Único"], cores:["Prata","Preto"], destaque:true, desc:"Design clean, pulseira em aço escovado, resistente à água." },

  // ---------- LIMOEIRO ----------
  { nome:"Camisa Linho Manga Longa", slug:"camisa-linho-manga-longa-lm", categoria:"camisas", cidade:"Limoeiro", marca:"Ogochi", foto:null, preco:169.90, tamanhos:["P","M","G","GG"], cores:["Bege","Branco"], destaque:true, desc:"Tecido respirável, visual leve e elegante." },
  { nome:"Camisa Estampada Botânica", slug:"camisa-estampada-botanica-lm", categoria:"camisas", cidade:"Limoeiro", marca:"Ellus", foto:null, preco:159.90, tamanhos:["M","G","GG"], cores:["Verde"], destaque:false, desc:"Estampa exclusiva, ótima pra ocasiões descontraídas." },
  { nome:"Calça Chino Slim", slug:"calca-chino-slim-lm", categoria:"calcas", cidade:"Limoeiro", marca:"Aramis", foto:null, preco:199.90, tamanhos:["38","40","42","44"], cores:["Bege","Azul Marinho"], destaque:true, desc:"Versátil, do casual ao semi-formal." },
  { nome:"Calça Jeans Reta Tradicional", slug:"calca-jeans-reta-lm", categoria:"calcas", cidade:"Limoeiro", marca:"Diesel", foto:null, preco:219.90, tamanhos:["40","42","44","46"], cores:["Azul Escuro"], destaque:false, desc:"Corte tradicional, conforto pro dia inteiro." },
  { nome:"Terno Risca de Giz Slim", slug:"terno-risca-de-giz-lm", categoria:"ternos-blazers", cidade:"Limoeiro", marca:"Aramis", foto:null, preco:849.90, tamanhos:["48","50","52","54"], cores:["Cinza Chumbo"], destaque:true, desc:"Estampa risca de giz, corte slim, para eventos formais." },
  { nome:"Blazer Estruturado Preto", slug:"blazer-estruturado-preto-lm", categoria:"ternos-blazers", cidade:"Limoeiro", marca:"Ellus", foto:null, preco:479.90, tamanhos:["M","G","GG"], cores:["Preto"], destaque:false, desc:"Peça estruturada, ótima pra compor looks formais ou casuais." },
  { nome:"Jaqueta Jeans Trucker", slug:"jaqueta-jeans-trucker-lm", categoria:"casacos-jaquetas", cidade:"Limoeiro", marca:"Diesel", foto:null, preco:299.90, tamanhos:["M","G","GG"], cores:["Azul"], destaque:true, desc:"Clássico atemporal, combina com quase tudo no guarda-roupa." },
  { nome:"Casaco Bomber Acolchoado", slug:"casaco-bomber-lm", categoria:"casacos-jaquetas", cidade:"Limoeiro", marca:"Ogochi", foto:null, preco:329.90, tamanhos:["M","G"], cores:["Preto","Verde Musgo"], destaque:false, desc:"Quentinho, moderno e confortável pros dias mais frios." },
  { nome:"Bermuda + Camiseta Infantil", slug:"bermuda-camiseta-infantil-lm", categoria:"infantil", cidade:"Limoeiro", marca:"Republic P.", foto:null, preco:109.90, tamanhos:["4","6","8","10"], cores:["Cinza","Azul"], destaque:false, desc:"Conjunto leve e confortável pra brincar o dia todo." },
  { nome:"Jaqueta Infantil Corta-Vento", slug:"jaqueta-infantil-lm", categoria:"infantil", cidade:"Limoeiro", marca:"Republic P.", foto:null, preco:119.90, tamanhos:["6","8","10","12"], cores:["Azul","Vermelho"], destaque:false, desc:"Proteção contra o vento, leve pra levar na mochila." },
  { nome:"Carteira em Couro", slug:"carteira-couro-lm", categoria:"acessorios", cidade:"Limoeiro", marca:"Aramis", foto:null, preco:119.90, tamanhos:["Único"], cores:["Preto","Marrom"], destaque:false, desc:"Couro legítimo, vários compartimentos internos." },
  { nome:"Boné Aba Reta Premium", slug:"bone-aba-reta-lm", categoria:"acessorios", cidade:"Limoeiro", marca:"Diesel", foto:null, preco:89.90, tamanhos:["Único"], cores:["Preto","Bege"], destaque:true, desc:"Acabamento premium, ajuste confortável." }
];

function fmtPreco(v){
  return v.toLocaleString('pt-BR', { style:'currency', currency:'BRL' });
}
// Evita que texto digitado num produto (nome, descrição, marca...) seja
// interpretado como HTML/código ao ser exibido no site — proteção contra
// injeção de conteúdo malicioso via painel/planilha/banco de dados.
function escapeHTML(str){
  return String(str ?? '').replace(/[&<>"']/g, c => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[c]));
}

// O campo "foto" guarda uma ou mais imagens separadas por ";". Aceita tanto
// URL completa (Storage do Supabase) quanto nome de arquivo local (pasta /fotos).
function fotosDoProduto(p){
  if(!p.foto) return [];
  return String(p.foto).split(';').map(f => f.trim()).filter(Boolean)
    .map(f => /^https?:\/\//i.test(f) ? f : `fotos/${f}`);
}

// ===========================================================
// PRODUTOS VINDOS DE UMA PLANILHA DO GOOGLE (opcional)
// Se window.LOJA.planilhaUrl estiver preenchido, o site busca os produtos
// direto da planilha a cada carregamento de página. Sem planilha (ou se a
// busca falhar), o site usa o catálogo padrão acima. Nada quebra.
// ===========================================================

let CATALOGO = CATALOGO_PADRAO;

// slugs que já têm página própria (produto-<slug>.html) — os produtos-semente
const PAGINAS_PRONTAS = new Set(CATALOGO_PADRAO.map(p => p.slug));

function normalizaTexto(s){
  return (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}
function slugify(s){
  return normalizaTexto(s).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'produto';
}

const CATEGORIA_POR_TEXTO = {};
Object.entries(CATEGORIA_INFO).forEach(([key, info]) => {
  CATEGORIA_POR_TEXTO[normalizaTexto(key)] = key;
  CATEGORIA_POR_TEXTO[normalizaTexto(info.label)] = key;
});
function resolveCategoria(valor){ return CATEGORIA_POR_TEXTO[normalizaTexto(valor)] || null; }

function resolveCidade(valor){
  const t = normalizaTexto(valor);
  if(t === 'surubim') return 'Surubim';
  if(t === 'limoeiro') return 'Limoeiro';
  return null;
}

function textoParaBool(v, padrao){
  const t = normalizaTexto(v);
  if(['sim','s','true','1','verdadeiro','yes'].includes(t)) return true;
  if(['nao','não','n','false','0','falso','no'].includes(t)) return false;
  return padrao;
}

function parseCSV(text){
  const rows = [];
  let row = [], field = '', dentroAspas = false;
  for(let i = 0; i < text.length; i++){
    const c = text[i], next = text[i+1];
    if(dentroAspas){
      if(c === '"' && next === '"'){ field += '"'; i++; }
      else if(c === '"'){ dentroAspas = false; }
      else field += c;
    } else {
      if(c === '"') dentroAspas = true;
      else if(c === ','){ row.push(field); field = ''; }
      else if(c === '\n'){ row.push(field); rows.push(row); row = []; field = ''; }
      else if(c === '\r'){ /* ignora */ }
      else field += c;
    }
  }
  if(field.length || row.length){ row.push(field); rows.push(row); }
  return rows.filter(r => r.some(c => c.trim() !== ''));
}

function precoParaNumero(txt){
  let t = (txt || '0').trim().replace(/[^\d.,]/g, '');
  if(t.includes(',') && !t.includes('.')) t = t.replace(',', '.');
  else t = t.replace(/\.(?=\d{3}(\D|$))/g, '').replace(',', '.');
  return parseFloat(t) || 0;
}

function parseCatalogoCSV(csvText){
  const rows = parseCSV(csvText);
  if(rows.length < 2) return null;
  const header = rows[0].map(h => normalizaTexto(h));
  const idx = campo => header.indexOf(campo);
  const iCat = idx('categoria'), iCidade = idx('cidade'), iNome = idx('nome'), iPreco = idx('preco'),
        iMarca = idx('marca'), iTam = idx('tamanhos'), iCor = idx('cores'), iDestaque = idx('destaque'),
        iDesc = idx('descricao'), iFoto = idx('foto'), iAtivo = idx('ativo');

  if(iCat === -1 || iCidade === -1 || iNome === -1 || iPreco === -1) return null;

  const catalogo = [];
  const slugsUsados = {};
  for(let r = 1; r < rows.length; r++){
    const linha = rows[r];
    if(!linha || !linha[iNome] || !linha[iNome].trim()) continue;
    const ativo = iAtivo > -1 ? textoParaBool(linha[iAtivo], true) : true;
    if(!ativo) continue;

    const catKey = resolveCategoria(linha[iCat]);
    const cidade = resolveCidade(linha[iCidade]);
    if(!catKey || !cidade){ console.warn('Categoria ou cidade não reconhecida na planilha:', linha[iCat], linha[iCidade]); continue; }

    const nome = linha[iNome].trim();
    let baseSlug = slugify(nome), slug = baseSlug, n = 2;
    while(slugsUsados[slug]){ slug = `${baseSlug}-${n}`; n++; }
    slugsUsados[slug] = true;

    catalogo.push({
      nome, slug, categoria: catKey, cidade,
      marca: iMarca > -1 ? (linha[iMarca]||'').trim() : '',
      foto: iFoto > -1 ? (linha[iFoto]||'').trim() || null : null,
      preco: precoParaNumero(linha[iPreco]),
      tamanhos: iTam > -1 ? (linha[iTam]||'').split(/[;,]/).map(s=>s.trim()).filter(Boolean) : [],
      cores: iCor > -1 ? (linha[iCor]||'').split(/[;,]/).map(s=>s.trim()).filter(Boolean) : [],
      destaque: iDestaque > -1 ? textoParaBool(linha[iDestaque], false) : false,
      desc: iDesc > -1 ? (linha[iDesc]||'').trim() : ''
    });
  }
  return catalogo.length ? catalogo : null;
}

function parseCatalogoSupabase(linhas){
  const catalogo = [];
  linhas.forEach(row => {
    if(row.ativo === false) return;
    const catKey = resolveCategoria(row.categoria);
    const cidade = resolveCidade(row.cidade);
    if(!catKey || !cidade){ console.warn('Categoria ou cidade não reconhecida no banco:', row.categoria, row.cidade); return; }
    catalogo.push({
      id: row.id,
      nome: row.nome,
      slug: row.slug || slugify(row.nome),
      categoria: catKey,
      cidade,
      marca: row.marca || '',
      foto: row.foto || null,
      preco: parseFloat(row.preco) || 0,
      tamanhos: (row.tamanhos || '').split(/[;,]/).map(s => s.trim()).filter(Boolean),
      cores: (row.cores || '').split(/[;,]/).map(s => s.trim()).filter(Boolean),
      destaque: !!row.destaque,
      desc: row.descricao || ''
    });
  });
  return catalogo.length ? catalogo : null;
}

async function carregarCatalogoSupabase(){
  const url = window.LOJA && window.LOJA.supabaseUrl;
  const key = window.LOJA && window.LOJA.supabaseAnonKey;
  if(!url || !key) return null;
  try{
    const res = await fetch(`${url}/rest/v1/produtos?select=*`, {
      headers: { apikey: key, Authorization: `Bearer ${key}` }, cache: 'no-store'
    });
    if(!res.ok) throw new Error('falha ao buscar produtos no banco');
    const linhas = await res.json();
    const parsed = parseCatalogoSupabase(linhas);
    if(!parsed) throw new Error('banco sem produtos ativos');
    return parsed;
  }catch(err){
    console.warn('Não foi possível carregar produtos do banco de dados.', err);
    return null;
  }
}

let _catalogoCarregado = null;
async function carregarCatalogo(){
  if(_catalogoCarregado) return _catalogoCarregado;

  const doBanco = await carregarCatalogoSupabase();
  if(doBanco){ _catalogoCarregado = doBanco; CATALOGO = doBanco; return doBanco; }

  const url = window.LOJA && window.LOJA.planilhaUrl;
  if(url){
    try{
      const res = await fetch(url, { cache: 'no-store' });
      if(!res.ok) throw new Error('falha ao buscar a planilha');
      const texto = await res.text();
      const parsed = parseCatalogoCSV(texto);
      if(!parsed) throw new Error('planilha vazia ou em formato inesperado');
      _catalogoCarregado = parsed; CATALOGO = parsed; return parsed;
    }catch(err){
      console.warn('Não foi possível carregar a planilha de produtos.', err);
    }
  }
  _catalogoCarregado = CATALOGO_PADRAO;
  CATALOGO = CATALOGO_PADRAO;
  return CATALOGO_PADRAO;
}

function productCardHTML(p){
  const icon = CATEGORIA_INFO[p.categoria] ? CATEGORIA_INFO[p.categoria].icon : 'ic-selo';
  const temPagina = PAGINAS_PRONTAS.has(p.slug);
  const linkProduto = temPagina ? `produto-${p.slug}.html` : `produto.html?slug=${encodeURIComponent(p.slug)}`;
  const nomeSeguro = escapeHTML(p.nome);
  const descSeguro = escapeHTML(p.desc);
  const tamanhos = Array.isArray(p.tamanhos) ? p.tamanhos : [];
  const tamanhosHTML = tamanhos.slice(0,5).map(t => `<span>${escapeHTML(t)}</span>`).join('');
  const linkCompleto = temPagina ? produtoLink(p.slug) : `${window.LOJA.siteUrl}/${linkProduto}`;
  const cidadeMsg = p.cidade === 'Limoeiro' ? 'limoeiro' : 'surubim';
  const msg = `Olá! Tenho interesse neste produto da Serginho Multimarcas (loja de ${p.cidade}):\n${p.nome} - ${fmtPreco(p.preco)}\n${linkCompleto}\n\nAinda está disponível?`;
  const msgSegura = escapeHTML(msg);
  const fotos = fotosDoProduto(p);
  const midia = fotos.length
    ? `<img src="${fotos[0]}" alt="${nomeSeguro}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
       <svg class="media-fallback" style="display:none;width:40%;color:var(--dourado-600)"><use href="icons.svg#${icon}"></use></svg>`
    : `<svg><use href="icons.svg#${icon}"></use></svg>`;
  return `
  <article class="product-card reveal" data-cat="${p.categoria}">
    <a class="product-media" href="${linkProduto}">
      ${p.destaque ? '<span class="tag-destaque">Destaque</span>' : ''}
      ${p.marca ? `<span class="tag-marca">${escapeHTML(p.marca)}</span>` : ''}
      ${midia}
    </a>
    <div class="product-body">
      <a href="${linkProduto}"><h3 class="product-name">${nomeSeguro}</h3></a>
      <p class="product-desc">${descSeguro}</p>
      <div class="swatches">${tamanhosHTML}</div>
      <div class="product-price">${fmtPreco(p.preco)}</div>
      <a class="btn-buy" data-whats="${msgSegura}" data-cidade="${cidadeMsg}">
        <svg><use href="icons.svg#ic-whats"></use></svg>
        Comprar pelo WhatsApp
      </a>
    </div>
  </article>`;
}

function renderGrid(containerId, list){
  const el = document.getElementById(containerId);
  if(!el) return;
  el.innerHTML = list.length
    ? list.map(p => productCardHTML(p)).join('')
    : `<div class="empty-state">Nenhum produto encontrado com esse filtro.</div>`;
  el.querySelectorAll('[data-whats]').forEach(a => {
    a.href = whatsLink(a.getAttribute('data-whats'), a.getAttribute('data-cidade'));
    a.target = '_blank'; a.rel = 'noopener';
  });
  el.querySelectorAll('.reveal').forEach(card => card.classList.add('in'));
}

// página de loja por cidade (surubim.html / limoeiro.html): filtra por
// cidade e permite filtrar também por categoria
async function initLojaPage(cidade, gridId){
  document.getElementById(gridId).innerHTML = `<div class="empty-state">Carregando produtos…</div>`;
  await carregarCatalogo();

  const todosDaCidade = CATALOGO.filter(p => p.cidade === cidade);
  let activeCat = null;

  // se a página abriu com #cat-xxxxx (link vindo do painel de categorias), já filtra
  const hash = window.location.hash.replace('#cat-', '');
  if(CATEGORIA_INFO[hash]) activeCat = hash;

  function draw(){
    const lista = activeCat ? todosDaCidade.filter(p => p.categoria === activeCat) : todosDaCidade;
    renderGrid(gridId, lista);
  }
  draw();

  const catButtons = document.querySelectorAll('[data-filter-cat]');
  catButtons.forEach(btn => {
    if(btn.getAttribute('data-filter-cat') === activeCat) btn.classList.add('active');
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-filter-cat');
      activeCat = (activeCat === val) ? null : val;
      catButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-filter-cat') === activeCat));
      draw();
    });
  });
}

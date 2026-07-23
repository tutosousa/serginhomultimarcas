// ===========================================================
// SERGINHO MULTIMARCAS — configuração da loja
// Troque os valores abaixo pelos reais das lojas
// ===========================================================
window.LOJA = {
  nome: 'Serginho Multimarcas',

  // <-- SUBSTITUA pelo número/link do WhatsApp de CADA loja.
  // Se as duas cidades usam o MESMO número, é só colocar o mesmo valor
  // nas duas linhas.
  whatsapp: {
    surubim:  '5581996372004',
    limoeiro: '558199570-3851'
  },

  // <-- SUBSTITUA pelo domínio real do site DEPOIS de publicar.
  siteUrl: 'https://serginhomultimarcas.com.br',

  // <-- COLE AQUI a "Project URL" e a chave "anon public" do seu projeto
  // Supabase (Project Settings → API), depois de rodar o supabase-setup.sql.
  supabaseUrl: 'https://zuvgeefkubormxzmsinf.supabase.co',
  supabaseAnonKey: 'sb_publishable_d7tkgLws1j5kRa50y3xBgQ_tEGiVqru',

  // <-- COLE AQUI o link "Publicar na web" (formato CSV) de uma planilha
  // de produtos, se preferir usar planilha em vez do banco de dados.
  planilhaUrl: ''
};

// pega a cidade atual a partir da página (ex: surubim.html -> "surubim")
// usado pra saber qual WhatsApp usar quando a página não define isso sozinha
function cidadeAtual(){
  const arq = window.location.pathname.split('/').pop().replace('.html','');
  return ['surubim','limoeiro'].includes(arq) ? arq : null;
}

function whatsLink(mensagem, cidade){
  const alvoCidade = cidade || cidadeAtual() || 'surubim';
  const numero = window.LOJA.whatsapp[alvoCidade] || window.LOJA.whatsapp.surubim;
  const msg = encodeURIComponent(mensagem);
  const alvo = /^message\//.test(numero) ? numero : numero.replace(/\D/g,'');
  return `https://wa.me/${alvo}?text=${msg}`;
}

// URL pública da página do produto (usada na mensagem do WhatsApp para
// gerar a prévia com a imagem do produto na conversa)
function produtoLink(slug){
  return `${window.LOJA.siteUrl}/produto-${slug}.html`;
}

document.addEventListener('DOMContentLoaded', () => {
  // Botões de CTA genéricos: <a data-whats="Mensagem" data-cidade="surubim">
  document.querySelectorAll('[data-whats]').forEach(el => {
    el.href = whatsLink(el.getAttribute('data-whats'), el.getAttribute('data-cidade'));
    el.target = '_blank';
    el.rel = 'noopener';
  });

  // Scroll reveal
  const items = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && items.length){
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
    }, {threshold:.15});
    items.forEach(el => io.observe(el));
  } else {
    items.forEach(el => el.classList.add('in'));
  }
});

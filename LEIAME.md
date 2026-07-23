# Serginho Multimarcas — como configurar o site

Site pronto para publicar, com 24 produtos de exemplo (12 por loja, editáveis pelo painel).

## 1. WhatsApp de cada loja
Abra `main.js` e troque os números em `whatsapp.surubim` e `whatsapp.limoeiro` pelos reais (com DDI+DDD). Se as duas lojas usarem o mesmo número, coloque o mesmo valor nos dois.

## 2. Banco de dados (Supabase) — recomendado
Um único banco atende as duas lojas — não precisa de dois projetos nem duas tabelas.
1. Crie um projeto grátis em https://supabase.com
2. No **SQL Editor**, rode todo o conteúdo de `supabase-setup.sql` (cria a tabela `produtos`, já com a coluna `cidade` e os 24 exemplos).
3. Crie um bucket **fotos** (público) em **Storage** e rode `supabase-storage-setup.sql`.
4. Em **Project Settings → API**, copie a `Project URL` e a chave `anon public` e cole em `main.js`.
5. Em **Authentication → Users**, crie um usuário pra logar no `admin.html`.

No painel (`admin.html`), cada produto tem um campo **Loja (cidade)** — é só escolher Surubim ou Limoeiro ao cadastrar. Se um produto existir nas duas lojas, cadastre ele duas vezes (uma linha por cidade), já que o estoque físico de cada loja é separado.

## 3. Domínio do site
Depois de publicar, troque `siteUrl` em `main.js` pelo domínio real.

## 4. Identidade visual
Cores (preto/dourado) em `style.css`, variáveis `:root`. Logo em `assets/logo-crop.png`.

## Estrutura
- `index.html` — página inicial com escolha de loja
- `surubim.html` / `limoeiro.html` — catálogo de cada loja, com filtro por categoria
- `produto.html?slug=...` — página de um produto específico
- `contato.html` — contato das duas lojas
- `admin.html` — painel único para gerenciar produtos das duas lojas
- `produtos.js` — catálogo e lógica de carregamento (banco → planilha → dados padrão)
- `layout.js` — cabeçalho (com seletor de cidade), rodapé, categorias, busca
- `main.js` — configurações da loja (WhatsApp por cidade, Supabase, domínio)

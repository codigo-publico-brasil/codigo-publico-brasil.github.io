**Quanto menos código e menos estrutura, melhor; seja sucinto, mas resolva o problema da melhor forma. Proponha antes de executar.**

Este repositório é o site da organização Código Público Brasil: uma página única em HTML e CSS, publicada pelo GitHub Pages. As aplicações (`nocargo`, `quem-decidiu`) e a plataforma de dados (`dado-publico-brasil`) vivem em outros repositórios e em outros servidores; aqui só há a home.

## Regras

- **Sem build, framework ou dependência.** Só HTML e CSS, mais o `theme.js` dos botões de tema e de compartilhar. Não adicione outro JavaScript, gerador de site ou bibliotecas sem proposta aprovada.
- **Idioma:** português do Brasil, em todo texto e comentário.
- **Texto da página:** claro para o público geral e profissional. Sem adjetivos, sem recomendação de voto, sem ranking, sem prometer o que ainda não existe (por exemplo, "todos os dados em um só lugar"). Não altere o texto do topo, os princípios nem a frase "Transparência não é favor, é um direito." sem pedido do usuário.
- **Aplicações que ainda não existem** mostram o selo "em breve" (`<span class="soon">`), não um link. Só troque pelo link quando o usuário informar o endereço.
- **Design:** cores e fontes ficam nas variáveis do `:root` em `tokens.css`. Siga o tema claro e escuro e o layout mobile primeiro; confira nos dois temas e em 375 px de largura.
- **Fontes externas:** hoje vêm do Google Fonts. Não adicione outros serviços de terceiros.

## Publicar

Só publique (push, criar ou alterar repositório, mexer no Pages ou no domínio) quando o usuário pedir. O site é público e um push na `main` o atualiza.

O domínio `codigopublicobrasil.com.br` está ativo (arquivo `CNAME` na raiz, DNS no Registro.br, HTTPS obrigatório). Não apague o `CNAME`: sem ele o domínio sai do Pages.

Pendências e decisões abertas são **issues deste repositório**, não arquivos `.md`.

## SEO e leitura por agentes de IA

- Toda página nova tem `<title>` e `description` próprios, `canonical`, Open Graph, Twitter Card e dados estruturados (JSON-LD), como `index.html`. Entra também no `sitemap.xml` (com `lastmod`) e no `llms.txt`.
- Um único `<h1>` por página, títulos em ordem (h1, h2, h3) e todo conteúdo em HTML puro: o texto não pode depender de JavaScript para existir.
- Ao mudar missão, princípios ou projetos, atualize também o `llms.txt` e o JSON-LD da home, para o resumo não divergir do site.
- `robots.txt` permite tudo, de propósito, inclusive agentes de IA. Não bloqueie rastreadores sem pedido do usuário.
- `og.png` (1200 × 630) e `apple-touch-icon.png` são imagens geradas: refaça se o logo ou o lema mudarem.

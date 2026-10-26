**Quanto menos código e menos estrutura, melhor; seja sucinto, mas resolva o problema da melhor forma. Proponha antes de executar.**

Este repositório é o site da organização Código Público Brasil: uma página única em HTML e CSS, publicada pelo GitHub Pages. As aplicações (`nocargo`, `quem-decidiu`) e a plataforma de dados (`dado-publico-brasil`) vivem em outros repositórios e em outros servidores; aqui só há a home.

## Regras

- **Sem build, framework ou dependência.** Só `index.html` e `style.css`. Não adicione JavaScript, gerador de site ou bibliotecas sem proposta aprovada.
- **Idioma:** português do Brasil, em todo texto e comentário.
- **Texto da página:** claro para o público geral e profissional. Sem adjetivos, sem recomendação de voto, sem ranking, sem prometer o que ainda não existe (por exemplo, "todos os dados em um só lugar"). Não altere o texto do topo, os princípios nem a frase "Transparência não é favor, é um direito." sem pedido do usuário.
- **Aplicações que ainda não existem** mostram o selo "em breve" (`<span class="soon">`), não um link. Só troque pelo link quando o usuário informar o endereço.
- **Design:** cores e fontes ficam nas variáveis do `:root` em `style.css`. Siga o tema claro e escuro e o layout mobile primeiro; confira nos dois temas e em 375 px de largura.
- **Fontes externas:** hoje vêm do Google Fonts. Não adicione outros serviços de terceiros.

## Publicar

Só publique (push, criar ou alterar repositório, mexer no Pages ou no domínio) quando o usuário pedir. O site é público e um push na `main` o atualiza.

O domínio `codigopublicobrasil.com.br` depende de DNS configurado pelo usuário no Registro.br. Ele está desativado até a propagação (arquivo `CNAME` removido de propósito). O passo a passo está na issue do domínio.

Pendências e decisões abertas são **issues deste repositório**, não arquivos `.md`.

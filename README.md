# Código Público Brasil: site da organização

Página inicial do projeto [Código Público Brasil](https://github.com/codigo-publico-brasil), publicada com GitHub Pages em https://codigopublicobrasil.com.br (o endereço `codigo-publico-brasil.github.io` redireciona para ele).

A página apresenta a missão, o caminho do dado, os projetos (com o repositório e a aplicação de cada um), os princípios, as licenças e como participar.

## Como é feito

Uma página única, em HTML e CSS, sem build, framework ou dependência:

```text
index.html              conteúdo e estrutura da página
style.css               visual: tema claro e escuro automático, mobile primeiro
tokens.css              cores e fontes como variáveis (as aplicações também importam)
theme.js                botão de tema claro/escuro (único JavaScript da página)
identidade/             guia de identidade visual: logo, cores, tipografia e regras
identidade/logos/       símbolos em SVG (organização e projetos)
.nojekyll               desliga o Jekyll do GitHub Pages
```

As fontes (Fraunces, Inter e JetBrains Mono) vêm do Google Fonts.

## Como ver localmente

Requisito: Python 3. Na raiz do repositório:

```bash
python -m http.server 4173
```

Abra http://localhost:4173.

## Como publicar

Todo push na branch `main` publica o site sozinho, pelo GitHub Pages. Não há etapa de build.

## Conteúdo

Os textos seguem as linhas vermelhas do projeto: sem ranking, sem recomendação de voto, sem adjetivos, e todo dado com fonte oficial. Mudanças de texto, de princípios e de links das aplicações devem manter essas regras. Os links das aplicações que ainda não existem mostram o selo "em breve".

## Pendências

Melhorias e decisões abertas ficam nas [issues deste repositório](https://github.com/codigo-publico-brasil/codigo-publico-brasil.github.io/issues).

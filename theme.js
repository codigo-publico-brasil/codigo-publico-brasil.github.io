/* Botão de tema claro/escuro. Sem o botão, a página segue o tema do sistema. */
(function () {
  var CHAVE = 'tema';
  var raiz = document.documentElement;
  var escuroDoSistema = matchMedia('(prefers-color-scheme: dark)');

  function lerEscolha() {
    try { return localStorage.getItem(CHAVE); } catch (e) { return null; }
  }
  function guardarEscolha(tema) {
    try { localStorage.setItem(CHAVE, tema); } catch (e) { /* sem armazenamento: vale só nesta visita */ }
  }
  function temaAtual() {
    return raiz.getAttribute('data-theme') || (escuroDoSistema.matches ? 'dark' : 'light');
  }

  // Aplica a escolha antes da página aparecer, para não piscar no tema errado.
  var escolha = lerEscolha();
  if (escolha === 'light' || escolha === 'dark') raiz.setAttribute('data-theme', escolha);

  document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('.nav');
    if (!nav) return;

    var botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'tema';
    botao.innerHTML =
      '<svg class="lua" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" fill="currentColor"/></svg>' +
      '<svg class="sol" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.2" fill="currentColor"/><g stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5.3 5.3l1.7 1.7M17 17l1.7 1.7M5.3 18.7L7 17M17 7l1.7-1.7"/></g></svg>';

    function pintar() {
      var tema = temaAtual();
      var rotulo = tema === 'dark' ? 'Mudar para o tema claro' : 'Mudar para o tema escuro';
      botao.setAttribute('data-efetivo', tema);
      botao.setAttribute('aria-label', rotulo);
      botao.title = rotulo;
    }

    botao.addEventListener('click', function () {
      var novo = temaAtual() === 'dark' ? 'light' : 'dark';
      raiz.setAttribute('data-theme', novo);
      guardarEscolha(novo);
      pintar();
    });
    escuroDoSistema.addEventListener('change', pintar);

    pintar();
    nav.insertBefore(botao, nav.querySelector('.gh'));
  });
})();

// Menú móvil
(function () {
  var btn = document.querySelector('.burger');
  var menu = document.querySelector('.menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();

// Barra «Volver a Top Search Perú» para quien llegó desde topsearch.pe
(function () {
  var vino = false;
  try {
    var q = new URLSearchParams(location.search);
    if (q.get('desde') === 'topsearch' || /(^|\.)topsearch\.pe$/i.test(document.referrer ? new URL(document.referrer).hostname : '')) {
      vino = true;
      try { sessionStorage.setItem('amm_desde_ts', '1'); } catch (e) {}
    } else {
      try { vino = sessionStorage.getItem('amm_desde_ts') === '1'; } catch (e) {}
    }
  } catch (e) {}
  if (!vino) return;
  var bar = document.createElement('div');
  bar.setAttribute('role', 'navigation');
  bar.setAttribute('aria-label', 'Volver a Top Search Perú');
  bar.style.cssText = 'background:#0A1A38;border-bottom:1px solid rgba(201,162,95,.35);font-family:Jost,sans-serif;font-size:15px;position:relative;z-index:60';
  bar.innerHTML = '<div style="max-width:1200px;margin:0 auto;padding:9px 24px;display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap">' +
    '<style>@media (max-width:640px){.ts-back-txt{display:none!important}}</style><span class="ts-back-txt" style="color:#E3ECFF">AMM es la unidad de mandos medios de <b style="color:#E4CC90">Top Search Perú</b></span>' +
    '<a href="https://topsearch.pe/" style="color:#E4CC90;text-decoration:none;font-weight:600">← Volver a Top Search Perú</a></div>';
  document.body.insertBefore(bar, document.body.firstChild);
})();

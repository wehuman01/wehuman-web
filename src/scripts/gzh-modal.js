// WeChat Official Account QR lightbox · any <a data-gzh-qr> opens the code in
// a dialog; the link's href is the no-JS fallback (raw image in a new tab) and
// doubles as the image source, so the site base path is applied only once.

(() => {
  const triggers = document.querySelectorAll('[data-gzh-qr]');
  if (!triggers.length) return;

  const modal = document.createElement('div');
  modal.className = 'gzh-modal';
  modal.hidden = true;
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', '公众号二维码');
  modal.innerHTML = '<img class="gzh-modal__card" alt="公众号二维码" draggable="false" />';
  modal.querySelector('img').src = triggers[0].href;
  document.body.appendChild(modal);

  const close = () => { modal.hidden = true; };

  triggers.forEach((t) => {
    t.addEventListener('click', (e) => {
      e.preventDefault();
      modal.hidden = false;
    });
  });
  modal.addEventListener('click', close);
  modal.querySelector('img').addEventListener('click', (e) => e.stopPropagation());
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();

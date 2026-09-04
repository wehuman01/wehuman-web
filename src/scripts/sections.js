// section groups · the index opens a group before the browser scrolls to it,
// a deep link opens its own group on load, and one control expands or
// collapses everything. The reveal class is added on user opens only, so
// groups born open never animate at first paint.

(() => {
  const openGroup = (id) => {
    const el = document.getElementById(decodeURIComponent(id));
    if (el && el.matches('details.sec-group')) el.open = true;
  };

  document.querySelectorAll('.sec-index a[href^="#"]').forEach((a) => {
    a.addEventListener('click', () => openGroup(a.hash.slice(1)));
  });

  if (location.hash) openGroup(location.hash.slice(1));

  const groups = Array.from(document.querySelectorAll('details.sec-group'));
  groups.forEach((g) => {
    g.addEventListener('toggle', () => g.classList.toggle('sec-group--animate', g.open));
  });

  const btn = document.querySelector('[data-sections-all]');
  if (!btn) return;
  // the button always labels its next action
  const sync = () => {
    btn.textContent = groups.every((g) => g.open) ? btn.dataset.collapseLabel : btn.dataset.expandLabel;
  };
  btn.addEventListener('click', () => {
    const open = groups.some((g) => !g.open);
    groups.forEach((g) => { g.open = open; });
    sync();
  });
  groups.forEach((g) => g.addEventListener('toggle', sync));
  sync();
})();

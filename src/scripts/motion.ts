const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const header = document.querySelector<HTMLElement>('[data-header]');

const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 18);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

document.querySelectorAll<HTMLAnchorElement>('[data-language-link]').forEach((link) => {
  link.addEventListener('click', () => {
    try {
      localStorage.setItem('wehuman-language', link.dataset.language ?? 'en');
    } catch {
      // The direct language link remains functional without storage.
    }
  });
});

if (!reduceMotion && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('reveal-ready');
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });

  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => observer.observe(element));
}

// Pointer drift — the home ink landscape leans toward a fine pointer.
// Decorative only: transform-only, lerped, paused off-screen, and skipped
// entirely for coarse pointers or reduced-motion users.
const scene = document.querySelector<HTMLElement>('[data-drift-scene]');
if (scene && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
  const layers = Array.from(scene.querySelectorAll<HTMLElement>('[data-drift]'));
  const factors = layers.map((layer) => (layer.dataset.drift ?? '0,0').split(',').map(Number));

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let frame = 0;
  let inView = true;

  const tick = () => {
    currentX += (targetX - currentX) * 0.055;
    currentY += (targetY - currentY) * 0.055;
    layers.forEach((layer, i) => {
      layer.style.transform = `translate3d(${(currentX * factors[i][0]).toFixed(2)}px, ${(currentY * factors[i][1]).toFixed(2)}px, 0)`;
    });
    frame = Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01
      ? requestAnimationFrame(tick)
      : 0;
  };

  const wake = () => {
    if (!frame) frame = requestAnimationFrame(tick);
  };

  scene.addEventListener('pointermove', (event) => {
    if (!inView) return;
    const rect = scene.getBoundingClientRect();
    targetX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    targetY = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    wake();
  });

  scene.addEventListener('pointerleave', () => {
    targetX = 0;
    targetY = 0;
    wake();
  });

  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    if (!inView) {
      targetX = 0;
      targetY = 0;
      wake();
    }
  }).observe(scene);
}

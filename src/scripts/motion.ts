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

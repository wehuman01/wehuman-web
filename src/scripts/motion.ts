const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const header = document.querySelector<HTMLElement>('[data-header]');

function updateHeader() {
  header?.classList.toggle('is-scrolled', window.scrollY > 24);
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

document.querySelectorAll<HTMLAnchorElement>('[data-language-link]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const language = link.dataset.language;
    if (!language) return;

    try {
      localStorage.setItem('wehuman-language', language);
    } catch {
      // Navigation still works when storage is unavailable.
    }

    if (window.location.hash) {
      event.preventDefault();
      const destination = new URL(link.href, window.location.href);
      destination.hash = window.location.hash;
      window.location.assign(destination);
    }
  });
});

if (!reduceMotion.matches && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('reveal-ready');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );

  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element, index) => {
    if (element.getBoundingClientRect().top < window.innerHeight * 0.9) {
      element.style.setProperty('--delay', `${Math.min(index, 4) * 90}ms`);
    }
    observer.observe(element);
  });
}

if (!reduceMotion.matches) {
  const sun = document.querySelector<SVGElement>('.vermilion-sun');
  let ticking = false;

  const updateSun = () => {
    if (sun) {
      const shift = Math.min(window.scrollY * 0.025, 11);
      sun.style.setProperty('--sun-shift', `${shift}px`);
    }
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateSun);
    },
    { passive: true },
  );
}

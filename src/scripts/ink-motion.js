// 手卷动效：字体就绪标记、收卷渐隐、远山视差。
// 无框架零依赖；页面内容不依赖本脚本 —— 缺失时一切直接可见。

const root = document.documentElement;
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// 洇墨书写须等 webfont 就绪，避免在回退字形上落笔；1.8s 兜底
const markFontsReady = () => root.classList.add('fonts-ready');
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(markFontsReady);
  setTimeout(markFontsReady, 1800);
} else {
  markFontsReady();
}

// 收卷：内容滚出视口时如卷过般渐隐，下方如纸铺开
const fadables = document.querySelectorAll('[data-scroll-fade]');
if (fadables.length > 0 && !reduced) {
  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = window.innerHeight;
    for (const el of fadables) {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0) continue;
      const depth = Math.min(1, Math.max(0, -rect.top / (vh * 0.55)));
      el.style.opacity = (1 - depth * 0.82).toFixed(3);
    }
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true }
  );
  update();
}

// 远山视差：随滚动轻微浮沉，越远越缓
const layers = document.querySelectorAll('[data-parallax]');
if (layers.length > 0 && !reduced) {
  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = window.innerHeight;
    for (const el of layers) {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > vh) continue;
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      const distance = progress * parseFloat(el.dataset.parallax) * 100;
      el.style.transform = `translateY(${distance.toFixed(1)}px)`;
    }
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true }
  );
  update();
}

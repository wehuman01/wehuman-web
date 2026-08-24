// 轻量交互：终端 tab 切换、复制命令、区块入场。
// 页面内容不依赖本脚本——无 JS 时一切直接可见。

// ── 终端 tab ──
document.querySelectorAll('[data-term-tab]').forEach((tab) => {
  tab.addEventListener('click', () => {
    const group = tab.closest('.hw-term');
    if (!group) return;
    group.querySelectorAll('[data-term-tab]').forEach((b) => {
      b.setAttribute('aria-selected', String(b === tab));
    });
    group.querySelectorAll('[data-term-panel]').forEach((p) => {
      p.hidden = p.dataset.termPanel !== tab.dataset.termTab;
    });
  });
});

// ── 复制安装命令 ──
document.querySelectorAll('[data-copy]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const cmd = btn.dataset.copy ?? '';
    try {
      await navigator.clipboard.writeText(cmd);
      const icon = btn.querySelector('.hw-term__copy-icon');
      const check = btn.querySelector('.hw-term__check-icon');
      if (icon && check) {
        icon.hidden = true;
        check.hidden = false;
        setTimeout(() => {
          icon.hidden = false;
          check.hidden = true;
        }, 1600);
      }
    } catch {
      /* 剪贴板不可用时保持原样 */
    }
  });
});

// ── 入场：滚入视口即淡入上浮 ──
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduce && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px' }
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
}

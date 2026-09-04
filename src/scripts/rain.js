// character rain · the ambient background
// A quiet field of glyphs that mutate slowly on their own. Around the
// pointer they wake up: the signal ink, a little larger, stirring slowly —
// and the empty slots wake too, as ghost glyphs that fill the highlight
// into one full sheet and ebb away when attention moves on.
// Base glyphs take --color-rain — a dusty blue on the light sheet, ink on
// the dark one. Under prefers-reduced-motion or data-saver the field is
// drawn once, static, and only the pointer highlight updates.

(() => {
  const canvas = document.getElementById('rain');
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext('2d');

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saveData = !!(navigator.connection && navigator.connection.saveData);
  const still = reduced || saveData;

  const CHARS = '01*+-:.'.split('');
  const CELL = 26;        // px spacing between glyph slots
  const DENSITY = 0.45;   // share of slots that carry a glyph
  const RADIUS = 190;     // pointer falloff, px
  const SWAP_RATE = 0.03; // per-frame glyph mutation in the highlight — a slow stir, not a flicker
  const GHOST_A = 0.45;   // brightest ghost ink — a veil under the native highlight, never matching it
  const GHOST_EASE = 0.07;// ghost fade-in/out per frame · ~half a second to appear or ebb

  let cells = [];
  let W = 0;
  let H = 0;
  let mx = -1e4;
  let my = -1e4;
  let baseCol = '';
  let hiCol = '';
  let last = 0;

  const pick = () => CHARS[(Math.random() * CHARS.length) | 0];

  function readTheme() {
    const cs = getComputedStyle(document.documentElement);
    baseCol = cs.getPropertyValue('--color-rain').trim();
    hiCol = cs.getPropertyValue('--color-accent').trim();
  }

  function build() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cells = [];
    const cols = Math.ceil(W / CELL);
    const rows = Math.ceil(H / CELL);
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const occupied = Math.random() <= DENSITY;
        cells.push({
          x: c * CELL + Math.random() * 14,
          y: r * CELL + Math.random() * 14,
          s: 10 + Math.random() * 4,
          ch: pick(),
          // ghost slots start fully invisible and only wake under the pointer,
          // so the highlight reads as one full sheet instead of a patchy one
          a: occupied ? 0.05 + Math.random() * 0.06 : 0,
          seed: Math.random() * 1000,
          rate: 0.2 + Math.random() * 0.8,
          ghost: !occupied,
        });
      }
    }
  }

  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    for (const g of cells) {
      const dx = g.x - mx;
      const dy = g.y - my;
      const d = Math.sqrt(dx * dx + dy * dy);
      const hi = d < RADIUS ? 1 - d / RADIUS : 0;

      if (g.ghost) {
        // empty slots wake under the pointer and ebb away when attention
        // moves on; in still mode they simply exist where the pointer is
        if (still) {
          g.a = hi * GHOST_A;
        } else {
          g.a += ((hi > 0.02 ? hi * GHOST_A : 0) - g.a) * GHOST_EASE;
        }
        if (g.a < 0.015) continue;
        if (Math.random() < hi * SWAP_RATE) g.ch = pick();
        ctx.globalAlpha = g.a;
        ctx.fillStyle = hiCol;
        ctx.font = '500 ' + g.s.toFixed(1) + 'px "IBM Plex Sans Variable", IBM Plex Sans, monospace';
        ctx.fillText(g.ch, g.x, g.y);
        continue;
      }

      const wobble = still ? 0 : Math.sin(t / 4000 + g.seed) * 0.025;
      let alpha = g.a + wobble;
      if (hi > 0.02) {
        alpha = Math.min(0.9, alpha + hi * 0.75);
        if (Math.random() < hi * SWAP_RATE) g.ch = pick();
        ctx.fillStyle = hiCol;
        ctx.font = '600 ' + (g.s + hi * 4).toFixed(1) + 'px "IBM Plex Sans Variable", IBM Plex Sans, monospace';
      } else {
        if (!still && Math.random() < 0.0004 * g.rate) g.ch = pick();
        ctx.fillStyle = baseCol;
        ctx.font = '500 ' + g.s.toFixed(1) + 'px "IBM Plex Sans Variable", IBM Plex Sans, monospace';
      }
      ctx.globalAlpha = Math.max(0.015, alpha);
      ctx.fillText(g.ch, g.x, g.y);
    }
    ctx.globalAlpha = 1;
  }

  function loop(t) {
    if (t - last > 33) {
      draw(t);
      last = t;
    }
    requestAnimationFrame(loop);
  }

  readTheme();
  build();
  draw(0);
  if (!still) requestAnimationFrame(loop);
  // the first draw may run before the sans loads; redraw once it's ready
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => draw(0));

  window.addEventListener('resize', () => {
    build();
    draw(0);
  }, { passive: true });

  let stillFrame = 0;
  window.addEventListener('pointermove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    // still-mode redraws are rAF-gated; pointermove can fire far faster than a frame
    if (still && !stillFrame) {
      stillFrame = requestAnimationFrame(() => { stillFrame = 0; draw(0); });
    }
  }, { passive: true });

  document.documentElement.addEventListener('pointerleave', () => {
    mx = my = -1e4;
    if (still) draw(0);
  });

  window.addEventListener('themechange', () => {
    readTheme();
    draw(0);
  });
})();

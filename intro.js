/* FILEX TRONICS - intro: brand name, then an iPhone-style phone powers on, then the site opens */
(function () {
  const NEXT = 'contact.html';
  const stage = $('#stage'), phone = $('#phone'), fill = $('#bootfill');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let left = false;
  const go = () => { if (left) return; left = true; location.href = NEXT; };

  $('#skip').addEventListener('click', e => { e.preventDefault(); go(); });

  /* gold digital rain behind the title */
  const c = $('#rain'), x = c.getContext('2d'), size = 16, chars = '01FILEX$<>/{}#';
  let w = 0, h = 0, cols = 0, drops = [], raf = 0, last = 0;
  function resize() {
    const d = Math.min(devicePixelRatio || 1, 2);
    w = innerWidth; h = innerHeight;
    c.width = w * d; c.height = h * d; x.setTransform(d, 0, 0, d, 0, 0);
    cols = Math.ceil(w / size); drops = Array.from({ length: cols }, () => Math.random() * -40);
    x.fillStyle = '#07070a'; x.fillRect(0, 0, w, h);
  }
  function frame(t) {
    raf = requestAnimationFrame(frame);
    if (t - last < 42) return; last = t;
    x.fillStyle = 'rgba(7,7,10,.16)'; x.fillRect(0, 0, w, h);
    x.font = size + 'px JetBrains Mono, monospace';
    for (let i = 0; i < cols; i++) {
      const y = drops[i] * size;
      x.fillStyle = Math.random() > .93 ? '#f6df8e' : '#b8932c';
      x.fillText(chars[Math.random() * chars.length | 0], i * size, y);
      if (y > h && Math.random() > .975) drops[i] = 0;
      drops[i] += .55;
    }
  }
  resize(); addEventListener('resize', resize);

  if (reduce) {
    stage.classList.add('phone-up', 'screen-on');
    fill.style.width = '100%';
    setTimeout(go, 1800);
    return;
  }
  raf = requestAnimationFrame(frame);

  setTimeout(() => stage.classList.add('phone-up'), 1900);            // phone rises under the title
  setTimeout(() => { stage.classList.add('screen-on'); fill.style.width = '100%'; }, 3300);  // screen powers on with the FL logo
  setTimeout(() => {                                                   // zoom into the screen
    const r = phone.getBoundingClientRect();
    const s = Math.max(innerWidth / r.width, innerHeight / r.height) * 1.25;
    phone.style.setProperty('--zoom', s.toFixed(2));
    stage.classList.add('zoom');
  }, 5600);
  setTimeout(go, 6900);
  setTimeout(go, 12000);   // safety net
})();

(() => {
  'use strict';
  const data = window.ORIENTATION;
  const deck = document.getElementById('deck');
  const pad = n => String(n).padStart(2, '0');
  const slides = data.slides.map((item, index) => {
    const slide = document.createElement('section');
    slide.className = `slide ${item.theme} ${item.layout || ''}`;
    slide.setAttribute('role', 'group');
    slide.setAttribute('aria-roledescription', '슬라이드');
    slide.setAttribute('aria-label', `${index + 1}. ${item.title}`);
    slide.innerHTML = `<span class="lesson-chip">${item.label}</span>${item.content}<span class="deck-brand">BASILRY / AI FULLSTACK DEPLOY</span><span class="page-no">${pad(index + 1)} / ${pad(data.slides.length)}</span>`;
    deck.append(slide);
    return slide;
  });
  const progress = document.createElement('div');
  progress.className = 'progress';
  progress.setAttribute('aria-hidden', 'true');
  deck.append(progress);
  let current = 0;
  function fit() { document.documentElement.style.setProperty('--scale', Math.min(innerWidth / 1920, Math.max(100, innerHeight - 66) / 1080)); }
  function fromHash() { const n = Number(location.hash.slice(1)); return Number.isInteger(n) && n > 0 ? n - 1 : 0; }
  function show(index, updateHash = true) {
    current = Math.max(0, Math.min(slides.length - 1, index));
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === current);
      slide.setAttribute('aria-hidden', String(i !== current));
      slide.inert = i !== current;
    });
    const item = data.slides[current];
    document.getElementById('counter').textContent = `${pad(current + 1)} / ${pad(slides.length)}`;
    document.getElementById('prev').disabled = current === 0;
    document.getElementById('next').disabled = current === slides.length - 1;
    progress.style.setProperty('--progress', `${(current + 1) / slides.length * 100}%`);
    document.title = `${data.id || '0-0'} · ${pad(current + 1)} · ${item.title}`;
    if (updateHash) history.replaceState(null, '', `#${current + 1}`);
  }
  async function fullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (document.documentElement.requestFullscreen) await document.documentElement.requestFullscreen();
      else throw new Error('Fullscreen unavailable');
    } catch (_) { document.getElementById('status').textContent = '이 미리보기에서는 전체화면을 지원하지 않습니다. 브라우저 창을 확대해 주세요.'; }
  }
  document.getElementById('prev').addEventListener('click', () => show(current - 1));
  document.getElementById('next').addEventListener('click', () => show(current + 1));
  document.getElementById('fullscreen').addEventListener('click', fullscreen);
  document.addEventListener('keydown', event => {
    if (event.ctrlKey || event.altKey || event.metaKey || event.target.closest('input,textarea,select,[contenteditable="true"]')) return;
    if (['ArrowRight', 'PageDown'].includes(event.key)) { event.preventDefault(); show(current + 1); }
    if (['ArrowLeft', 'PageUp'].includes(event.key)) { event.preventDefault(); show(current - 1); }
    if (event.key === ' ' && !event.target.closest('button,a')) { event.preventDefault(); show(current + 1); }
    if (event.key === 'Home') { event.preventDefault(); show(0); }
    if (event.key === 'End') { event.preventDefault(); show(slides.length - 1); }
    if (event.key.toLowerCase() === 'f') fullscreen();
  });
  let start = null;
  deck.addEventListener('touchstart', e => { start = [e.changedTouches[0].screenX, e.changedTouches[0].screenY]; }, {passive:true});
  deck.addEventListener('touchend', e => {
    if (!start || e.target.closest('a,button')) return;
    const dx = e.changedTouches[0].screenX - start[0], dy = e.changedTouches[0].screenY - start[1];
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) show(current + (dx < 0 ? 1 : -1));
    start = null;
  }, {passive:true});
  window.addEventListener('resize', fit);
  window.addEventListener('hashchange', () => show(fromHash(), false));
  fit(); show(fromHash(), false);
})();

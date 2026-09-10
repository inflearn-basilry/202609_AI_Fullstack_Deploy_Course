/* Shared player for both data-driven and authored HTML course decks. */
(() => {
  'use strict';
  const deck = document.getElementById('deck');
  if (!deck || deck.dataset.playerReady) return;
  const data = window.ORIENTATION;
  const pad = n => String(n).padStart(2, '0');
  const slides = data ? data.slides.map((item, index) => {
    const slide = document.createElement('section');
    slide.className = `slide ${item.theme} ${item.layout || ''}`;
    slide.dataset.title = item.title;
    // Only trusted, authored lesson HTML is rendered here.
    slide.innerHTML = `<span class="lesson-chip">${item.label}</span>${item.content}<span class="deck-brand">BASILRY / AI FULLSTACK DEPLOY</span><span class="page-no">${pad(index + 1)} / ${pad(data.slides.length)}</span>`;
    deck.append(slide);
    return slide;
  }) : [...deck.querySelectorAll('.slide')];
  if (!slides.length) return;
  deck.dataset.playerReady = 'true';
  slides.forEach((slide, index) => {
    slide.setAttribute('role', 'group');
    slide.setAttribute('aria-roledescription', '슬라이드');
    slide.setAttribute('aria-label', `${index + 1}. ${slide.dataset.title}`);
  });

  const controls = document.createElement('nav');
  controls.className = 'controls';
  controls.id = 'controls';
  controls.setAttribute('aria-label', '슬라이드 조작');
  const home = document.createElement('a');
  home.id = 'home';
  home.href = '../index.html';
  home.textContent = '⌂';
  home.title = '자료실 홈';
  home.setAttribute('aria-label', '자료실로 돌아가기');
  const button = (id, text, label, shortcut) => {
    const node = document.createElement('button');
    node.type = 'button';
    node.id = id;
    node.textContent = text;
    node.setAttribute('aria-label', label);
    node.title = shortcut ? `${label} (${shortcut})` : label;
    return node;
  };
  const prev = button('prev', '←', '이전 슬라이드', '←');
  const next = button('next', '→', '다음 슬라이드', '→');
  const counter = document.createElement('span');
  counter.id = 'counter';
  counter.setAttribute('aria-live', 'polite');
  counter.setAttribute('aria-atomic', 'true');
  const full = button('fullscreen', 'F', '전체화면', 'F');
  const hide = button('hideUi', 'H', '컨트롤 숨기기', 'H');
  hide.setAttribute('aria-pressed', 'false');
  controls.append(home, prev, counter, next, full, hide);
  const status = document.createElement('p');
  status.id = 'status';
  status.className = 'sr-only';
  status.setAttribute('role', 'status');
  const help = document.createElement('div');
  help.className = 'help-toast';
  help.textContent = '← → 이동 · F 전체화면 · H 컨트롤';
  help.setAttribute('aria-hidden', 'true');
  document.body.append(controls, status, help);
  const progress = document.createElement('div');
  progress.className = 'course-slide-progress';
  progress.setAttribute('aria-hidden', 'true');
  deck.append(progress);

  const lessonId = document.body.dataset.lessonPage || data?.id || '0-0';
  let current = 0;
  let hidden = false;
  function fit() {
    const presenting = !!document.fullscreenElement;
    document.documentElement.classList.toggle('presentation-mode', presenting);
    const reading = innerWidth <= 760 && !presenting;
    const scale = reading ? 1 : Math.min(innerWidth / 1920, Math.max(100, innerHeight - 80) / 1080);
    document.documentElement.style.setProperty('--slide-scale', scale);
    full.setAttribute('aria-pressed', String(presenting));
    full.setAttribute('aria-label', presenting ? '전체화면 종료' : '전체화면');
    full.title = presenting ? '전체화면 종료 (F)' : '전체화면 (F)';
  }
  function fromHash() {
    const n = Number(location.hash.slice(1));
    return Number.isInteger(n) && n > 0 ? n - 1 : 0;
  }
  function show(index, updateHash = true) {
    const target = Math.max(0, Math.min(slides.length - 1, index));
    const travel = target < current ? 'back' : 'forward';
    current = target;
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === current);
      slide.dataset.direction = travel;
      slide.setAttribute('aria-hidden', String(i !== current));
      slide.inert = i !== current;
    });
    counter.textContent = `${pad(current + 1)} / ${pad(slides.length)}`;
    prev.disabled = current === 0;
    next.disabled = current === slides.length - 1;
    progress.style.setProperty('--progress', `${(current + 1) / slides.length * 100}%`);
    document.title = `${lessonId} · ${pad(current + 1)} · ${slides[current].dataset.title}`;
    if (updateHash) history.replaceState(null, '', `#${current + 1}`);
    if (innerWidth <= 760 && !document.fullscreenElement && updateHash) window.scrollTo(0, 0);
  }
  async function fullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (document.documentElement.requestFullscreen) await document.documentElement.requestFullscreen();
      else throw new Error('Fullscreen unavailable');
      status.textContent = '';
    } catch (_) {
      status.textContent = '이 환경에서는 전체화면을 지원하지 않습니다. 브라우저 창을 확대해 주세요.';
    }
  }
  function toggleUi() {
    hidden = !hidden;
    const moveFocus = hidden && controls.contains(document.activeElement);
    controls.classList.toggle('is-hidden', hidden);
    // Hidden controls must also leave the keyboard focus order.
    [home, prev, counter, next, full].forEach(node => { node.hidden = hidden; });
    hide.setAttribute('aria-pressed', String(hidden));
    const label = hidden ? '컨트롤 표시하기' : '컨트롤 숨기기';
    hide.setAttribute('aria-label', label);
    hide.title = label + ' (H)';
    if (moveFocus) hide.focus();
  }
  prev.addEventListener('click', () => show(current - 1));
  next.addEventListener('click', () => show(current + 1));
  full.addEventListener('click', fullscreen);
  hide.addEventListener('click', toggleUi);
  const editable = 'input,textarea,select,[contenteditable]:not([contenteditable="false"])';
  document.addEventListener('keydown', event => {
    if (event.ctrlKey || event.altKey || event.metaKey || event.target.closest(editable)) return;
    if (['ArrowRight', 'PageDown'].includes(event.key)) { event.preventDefault(); show(current + 1); }
    if (['ArrowLeft', 'PageUp', 'Backspace'].includes(event.key)) { event.preventDefault(); show(current - 1); }
    if ([' ', 'Enter'].includes(event.key) && !event.target.closest('button,a')) { event.preventDefault(); show(current + 1); }
    if (event.key === 'Home') { event.preventDefault(); show(0); }
    if (event.key === 'End') { event.preventDefault(); show(slides.length - 1); }
    if (event.key.toLowerCase() === 'f') { event.preventDefault(); fullscreen(); }
    if (event.key.toLowerCase() === 'h') { event.preventDefault(); toggleUi(); }
  });
  let start = null;
  const interactive = 'a,button,input,textarea,select,[contenteditable]:not([contenteditable="false"])';
  deck.addEventListener('touchstart', event => {
    start = event.touches.length === 1 && !event.target.closest(interactive)
      ? [event.changedTouches[0].screenX, event.changedTouches[0].screenY] : null;
  }, {passive: true});
  deck.addEventListener('touchend', event => {
    const origin = start;
    start = null;
    if (!origin || event.target.closest(interactive)) return;
    const dx = event.changedTouches[0].screenX - origin[0];
    const dy = event.changedTouches[0].screenY - origin[1];
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) show(current + (dx < 0 ? 1 : -1));
  }, {passive: true});
  deck.addEventListener('touchcancel', () => { start = null; }, {passive: true});
  window.addEventListener('resize', fit);
  document.addEventListener('fullscreenchange', fit);
  window.addEventListener('hashchange', () => show(fromHash(), false));
  fit();
  show(fromHash(), false);
  setTimeout(() => { help.hidden = true; }, 4500);
})();

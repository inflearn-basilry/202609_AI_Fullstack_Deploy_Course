(() => {
  'use strict';
  // One key per lesson: tabs changing different lessons cannot overwrite each other.
  const prefix = 'basilry.ai-fullstack.progress.v1:';
  const validId = id => /^(?:[0-8]|A)-\d+$/.test(id);
  const memory = new Map();
  let persistent = true;
  const controls = [];
  const summaries = [];
  const noticeText = '같은 브라우저·주소에서 체크가 유지됩니다. 브라우저 데이터 삭제 시 기록이 사라지며 다른 기기와 동기화되지 않습니다.';
  function read(id) {
    if (!persistent) return memory.get(id) === true;
    try {
      const checked = localStorage.getItem(prefix + id) === '1';
      memory.set(id, checked);
      return checked;
    } catch (_) { persistent = false; return memory.get(id) === true; }
  }
  function write(id, checked) {
    memory.set(id, checked);
    if (!persistent) return;
    try {
      if (checked) localStorage.setItem(prefix + id, '1');
      else localStorage.removeItem(prefix + id);
    } catch (_) { persistent = false; }
  }
  function refresh() {
    const state = new Map();
    controls.forEach(({id}) => { if (!state.has(id)) state.set(id, read(id)); });
    controls.forEach(({id, input, host}) => {
      input.checked = state.get(id);
      host.dataset.completed = String(input.checked);
      const lesson = host.closest('.lesson-row, tr');
      if (lesson) lesson.dataset.completed = String(input.checked);
    });
    summaries.forEach(({node, ids}) => {
      const count = ids.filter(id => state.get(id)).length;
      node.textContent = '수강 완료 ' + count + ' / ' + ids.length;
    });
    document.querySelectorAll('.progress-notice').forEach(node => {
      node.textContent = persistent ? noticeText : '이 브라우저에서 저장할 수 없어 이번 페이지에서만 체크가 유지됩니다. 저장 권한과 브라우저 설정을 확인해 주세요.';
      node.dataset.warning = String(!persistent);
    });
  }
  function addControl(host, id) {
    if (!host || !validId(id)) return;
    const label = document.createElement('label');
    label.className = 'progress-check';
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.dataset.completionLesson = id;
    input.setAttribute('aria-label', id + ' 수강 완료');
    const caption = document.createElement('span');
    caption.textContent = '수강 완료';
    label.append(input, caption); host.append(label);
    controls.push({id, input, host:label});
    input.addEventListener('change', () => { write(id, input.checked); refresh(); });
  }
  function addSummary(host, ids, withNotice) {
    if (!host || !ids.length) return;
    const box = document.createElement('div'); box.className = 'course-progress-summary';
    const count = document.createElement('strong');
    count.className = 'progress-count';
    count.setAttribute('role', 'status');
    box.append(count); summaries.push({node:count, ids:[...new Set(ids)]});
    if (withNotice) {
      const notice = document.createElement('p'); notice.className = 'progress-notice';
      box.append(notice);
    }
    host.prepend(box);
  }
  function init() {
    document.querySelectorAll('.lesson-row[data-lesson]').forEach(lesson => {
      addControl(lesson.querySelector('.lesson-actions'), lesson.dataset.lesson);
    });
    document.querySelectorAll('.lessons tr[data-lesson]').forEach(row => addControl(row.querySelector('td'), row.dataset.lesson));
    document.querySelectorAll('.catalog-section').forEach(section => {
      addSummary(section.querySelector('.chapter-body'), [...section.querySelectorAll('.lesson-row[data-lesson]')].map(node => node.dataset.lesson), true);
    });
    const curriculum = document.getElementById('curriculum-list');
    if (curriculum) {
      const ids = [...curriculum.querySelectorAll('tr[data-lesson]')].map(node => node.dataset.lesson);
      addSummary(curriculum, ids, true);
    }
    const id = document.body.dataset.lessonPage;
    if (validId(id)) {
      const host = document.createElement('aside');
      const isDeck = Boolean(document.querySelector('.deck, .deck-stage'));
      host.className = isDeck ? 'lesson-progress floating' : 'lesson-progress';
      host.setAttribute('aria-label', '이 강의 수강 기록');
      addControl(host, id);
      const notice = document.createElement('p'); notice.className = 'progress-notice';
      host.append(notice);
      (isDeck ? document.body : document.querySelector('main') || document.body).append(host);
    }
    refresh();
    window.addEventListener('storage', event => {
      if (event.key === null || event.key.startsWith(prefix)) refresh();
    });
    window.addEventListener('pageshow', refresh);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once:true});
  else init();
})();

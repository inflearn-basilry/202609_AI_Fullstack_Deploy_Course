// Read-only source and player-logic checks; no browser or network required.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const materials = path.join(root, 'dist', 'materials');
const read = file => fs.readFileSync(file, 'utf8');
const context = {window: {}};
vm.runInNewContext(read(path.join(materials, 'orientation-v0.1.js')), context);
const data = context.window.ORIENTATION;
assert.equal(data.slides.length, 12);
let previous = 0;
const seconds = time => time.split(':').reduce((m, s) => Number(m) * 60 + Number(s));
for (const slide of data.slides) {
  const [start, end] = slide.time.split('–').map(seconds);
  assert.equal(start, previous, `Non-contiguous timing: ${slide.title}`);
  assert(end > start);
  previous = end;
  for (const key of ['title', 'content']) assert(slide[key]?.length > 10, `Missing ${key}`);
  for (const key of ['note', 'direction']) assert(!Object.hasOwn(slide, key), `Private field ${key}`);
  const stack = [];
  for (const tag of slide.content.matchAll(/<\/?([a-z][a-z0-9-]*)\b[^>]*>/gi)) {
    const name = tag[1].toLowerCase();
    if (['br', 'hr', 'img', 'input', 'meta', 'link'].includes(name)) continue;
    if (tag[0].startsWith('</')) assert.equal(stack.pop(), name, `Unbalanced content: ${slide.title}`);
    else stack.push(name);
  }
  assert.equal(stack.length, 0, `Unclosed content: ${slide.title}`);
}
assert.equal(previous, 600);
assert.equal(seconds(data.duration), previous);

// Instructor corrections must remain synchronized in slides and narration.
const biography = data.slides[1];
assert(biography.content.includes('공군 장교'));
assert.equal((biography.content.match(/<article>/g) || []).length, 5);
assert(biography.content.indexOf('공군 장교') < biography.content.indexOf('요식업 창업'));
assert(biography.content.indexOf('요식업 창업') < biography.content.indexOf('부트캠프'));
assert(data.slides[2].content.includes('티머니 프로젝트'));
assert(!JSON.stringify(data).includes('육군'));
assert(!JSON.stringify(data).includes('이력서 기준'));
assert(!data.slides[2].content.includes('Java 기반 SaaS 연동'));
assert(read(path.join(materials, 'orientation-v0.1.css')).includes('.journey{display:grid;grid-template-columns:repeat(5,minmax(0,1fr))'));

const curriculumName = fs.readdirSync(materials).find(name => name.includes('커리큘럼_v0.4.html'));
const curriculumHtml = read(path.join(materials, curriculumName));
const sectionLiteral = curriculumHtml.match(/const sections = ([\s\S]+?);\s*function escapeHtml/)[1];
const sections = vm.runInNewContext(sectionLiteral);
const main = sections.filter(section => section.kind !== 'appendix');
const lessons = sections.flatMap(section => section.lessons);
assert.equal(main.length, 9);
assert.equal(main.flatMap(section => section.lessons).length, 46);
assert.equal(lessons.length, 49);
for (const section of sections) {
  assert.equal(section.lessons.reduce((n, lesson) => n + parseInt(lesson[1]), 0), parseInt(section.duration));
}
assert.equal(main.reduce((n, section) => n + parseInt(section.duration), 0), 458);
assert.equal(sections.reduce((n, section) => n + parseInt(section.duration), 0), 488);
assert(lessons[0][0].startsWith('0-0.'));
const md = read(path.join(materials, curriculumName.replace('.html', '.md')));
const mdLessons = [...md.matchAll(/^\| ([0-8A]-\d+)\.[^|]*\| (\d+)분/gm)];
assert.equal(mdLessons.length, lessons.length);
lessons.forEach((lesson, i) => {
  assert.equal(lesson[0].split('.')[0], mdLessons[i][1]);
  assert.equal(parseInt(lesson[1]), Number(mdLessons[i][2]));
});
assert(/46(?:개 수업|강)/.test(md));
assert(md.includes('7시간 38분'));

const sourceFiles = [path.join(root, 'dist', 'index.html'), ...fs.readdirSync(materials).filter(name => name.endsWith('.html')).map(name => path.join(materials, name))];
let localLinks = 0;
function checkLinks(html, base) {
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const url = match[1];
    if (/^(?:[a-z]+:|#|\/\/)/i.test(url)) continue;
    const file = path.resolve(base, decodeURIComponent(url.split(/[?#]/)[0]));
    assert(fs.existsSync(file), `Missing local link: ${url}`);
    localLinks++;
  }
}
for (const file of sourceFiles) {
  const source = read(file);
  checkLinks(source, path.dirname(file));
  for (const script of source.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)) new vm.Script(script[1], {filename: file});
}
for (const slide of data.slides) checkLinks(slide.content, materials);
for (const file of ['orientation-v0.1.js', 'orientation-player-v0.1.js']) new vm.Script(read(path.join(materials, file)), {filename:file});

const landing = read(path.join(root, 'dist', 'index.html'));
const catalogMatch = landing.match(/<section[^>]+id="slides"[^>]*>([\s\S]*?)<\/section>/);
assert(catalogMatch, 'Missing unified lesson catalog');
const catalog = catalogMatch[1];
assert.equal((catalog.match(/<details class="chapter"/g) || []).length, 1);
assert.equal((catalog.match(/<summary>/g) || []).length, 1);
assert.equal((catalog.match(/<\/details>/g) || []).length, 1);
assert(!landing.includes('<details class="lesson"'));
assert(!landing.includes('script-catalog'));
assert(!/<section[^>]+id="scripts"/.test(landing));
assert(landing.includes('<span class="catalog-anchor" id="scripts"'), 'Old script URLs must still land at the catalog');
const rows = [...catalog.matchAll(/<article class="lesson-row" data-lesson="([^"]+)"[^>]*>([\s\S]*?)<\/article>/g)];
assert.deepEqual(rows.map(row => row[1]), ['0-0', '0-1', '0-2', '0-3', '0-4', '0-5', '0-6']);
for (const [_, id, html] of rows) {
  // Authored slides retain v0.2 IDs; the v0.4 curriculum is checked separately.
  assert(landing.includes('v0.2 편성으로 제작된 자료'));
  assert(html.includes('id="lesson-' + id + '-title"'));
  assert(html.includes('class="lesson-actions"'));
  assert(html.indexOf('class="lesson-heading"') < html.indexOf('class="lesson-actions"'));
  assert.equal((html.match(/data-material="slides"/g) || []).length, 1);
  assert.equal((html.match(/data-material="scripts"/g) || []).length, 0);
  assert(html.includes('_강의슬라이드_v0.1.html'));
  assert(!html.includes('_스크립트_스토리보드_v0.1.html'));
  assert(!/<(?:summary|details)\b/.test(html));
}
for (const summary of catalog.matchAll(/<summary>([\s\S]*?)<\/summary>/g)) {
  assert(!/<(?:a|button|input)\b/.test(summary[1]), 'No interactive controls inside chapter toggle');
}
assert.equal((catalog.match(/_강의슬라이드_v0\.1\.html/g) || []).length, 7);
assert.equal((catalog.match(/_스크립트_스토리보드_v0\.1\.html/g) || []).length, 0);
assert(!landing.includes('대본'));
for (const file of sourceFiles.filter(file => file.includes('0-0_') || file.includes('0-1_') || file.endsWith('커리큘럼_v0.2.html'))) {
  assert(!read(file).includes('대본'), `Outdated material label: ${file}`);
}

// Small DOM-shaped fixtures exercise state changes without launching a browser.
class Element {
  constructor() {
    this.attrs = {}; this.children = []; this.events = {}; this.hidden = false;
    this.style = {setProperty: (k, v) => { this.attrs[k] = v; }};
    this.classes = new Set();
    this.classList = {toggle: (name, enabled) => enabled ? this.classes.add(name) : this.classes.delete(name)};
  }
  setAttribute(k, v) { this.attrs[k] = v; }
  append(node) { this.children.push(node); }
  addEventListener(name, fn) { this.events[name] = fn; }
  focus() { this.focused = true; }
}
const elements = new Map();
const get = id => { if (!elements.has(id)) elements.set(id, new Element()); return elements.get(id); };
get('notesPanel').hidden = true;
const docEvents = {}, winEvents = {};
const sandbox = {
  window: {ORIENTATION:data, addEventListener:(key, fn) => { winEvents[key] = fn; }},
  document: {getElementById:get, createElement:() => new Element(), documentElement:new Element(), addEventListener:(key, fn) => { docEvents[key] = fn; }},
  innerWidth:1920, innerHeight:1080, location:{hash:'#3'},
  history:{replaceState:(_state, _title, hash) => { sandbox.location.hash = hash; }}
};
vm.runInNewContext(read(path.join(materials, 'orientation-player-v0.1.js')), sandbox);
assert.equal(get('counter').textContent, '03 / 12');
assert.equal(get('deck').children.filter(node => node.classes.has('active')).length, 1);
assert.equal(get('deck').children[0].inert, true);
assert.equal(get('deck').children[2].inert, false);
get('next').events.click(); assert.equal(get('counter').textContent, '04 / 12');
get('prev').events.click(); assert.equal(get('counter').textContent, '03 / 12');
const key = name => docEvents.keydown({key:name, target:{closest:() => null}, preventDefault(){}});
key('n'); assert.equal(get('counter').textContent, '03 / 12');
key('Home'); assert.equal(get('counter').textContent, '01 / 12'); assert.equal(get('prev').disabled, true);
key('ArrowLeft'); assert.equal(get('counter').textContent, '01 / 12');
key('End'); assert.equal(get('counter').textContent, '12 / 12'); assert.equal(get('next').disabled, true);
key('ArrowRight'); assert.equal(get('counter').textContent, '12 / 12');
sandbox.location.hash = '#not-a-number'; winEvents.hashchange(); assert.equal(get('counter').textContent, '01 / 12');
sandbox.location.hash = '#999'; winEvents.hashchange(); assert.equal(get('counter').textContent, '12 / 12');
assert(!get('notes').events.click);
console.log(`PASS: 12 slides / 600 seconds; v0.4 = 46 core lessons / 458 minutes; 49 total / 488 minutes; ${localLinks} local links; JS syntax; public player navigation/hash boundaries.`);

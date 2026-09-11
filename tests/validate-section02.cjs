// Section 02 source checks. No browser, app execution or external requests.
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const materials = path.join(root, 'dist/materials');
const read = name => fs.readFileSync(path.join(materials, name), 'utf8');
const curriculum = read(fs.readdirSync(materials).find(name => name.endsWith('커리큘럼_v0.4.html')));
const sections = vm.runInNewContext(curriculum.match(/const sections = ([\s\S]+?);\s*function escapeHtml/)[1]);
const section = sections.find(item => item.no === '02');
const landing = fs.readFileSync(path.join(root, 'dist/index.html'), 'utf8');
const chapter = landing.match(/<details class="chapter" data-chapter="2"[\s\S]*?<\/details>/)?.[0];
assert(chapter, 'Section 02 catalog missing');
assert.equal(section.lessons.length, 5);
assert.equal(section.minutes, 45);
const seconds = time => time.split(':').reduce((n, part) => n * 60 + Number(part), 0);
let slides = 0, duration = 0;
for (let n = 1; n <= 5; n++) {
  const source = read(`lesson-2-${n}-v0.1.js`);
  const literal = source.match(/^window\.ORIENTATION\s*=\s*([\s\S]*);\s*$/)?.[1];
  assert(literal, 'Dataset must be a JSON assignment');
  const data = JSON.parse(literal);
  const expected = section.lessons[n - 1];
  assert.equal(data.id, `2-${n}`);
  assert.equal(data.title, expected[0].replace(/^2-\d+\.\s*/, ''));
  assert.equal(seconds(data.duration), parseInt(expected[1]) * 60);
  assert(data.description.includes('v0.4'));
  assert.equal(data.slides.length, 10);
  let end = 0;
  for (const [index, slide] of data.slides.entries()) {
    const label = `${data.id} / ${index + 1}`;
    assert(/^\d{2}:\d{2}–\d{2}:\d{2}$/.test(slide.time), label);
    const [start, stop] = slide.time.split('–').map(seconds);
    assert.equal(start, end, label); assert(stop > start, label); end = stop;
    assert.equal((slide.content.match(/<h2\b/g) || []).length, 1, label);
    const heading = slide.content.match(/<h2>([\s\S]*?)<\/h2>/)[1];
    assert((heading.match(/<br\s*\/?\s*>/g) || []).length <= 1, label);
    assert(['navy', 'paper'].includes(slide.theme), label);
    assert(!Object.hasOwn(slide, 'note') && !Object.hasOwn(slide, 'direction'), label);
    assert(!/\bon\w+\s*=|javascript:|style=|dense-code|mixed-content/i.test(slide.content), label);
    const stack = [];
    for (const tag of slide.content.matchAll(/<\/?([a-z][a-z\d-]*)\b[^>]*>/gi)) {
      const name = tag[1].toLowerCase();
      assert(!['script', 'iframe', 'object', 'embed'].includes(name), label);
      if (['br', 'hr', 'img', 'input'].includes(name)) continue;
      if (tag[0].startsWith('</')) assert.equal(stack.pop(), name, label);
      else stack.push(name);
    }
    assert.equal(stack.length, 0, label);
    for (const code of slide.content.matchAll(/<code>([\s\S]*?)<\/code>/g)) {
      assert(code[1].split('\n').length <= 6, `${label}: split long code examples`);
    }
    for (const table of slide.content.matchAll(/<table\b[^>]*>([\s\S]*?)<\/table>/g)) {
      const rows = [...table[1].matchAll(/<tr>([\s\S]*?)<\/tr>/g)];
      assert(rows.length <= 5, label);
      const columns = rows.map(row => (row[1].match(/<(?:th|td)\b/g) || []).length);
      assert(columns.every(count => count === columns[0]), label);
    }
    for (const match of slide.content.matchAll(/href="([^"]+)"/g)) {
      const url = match[1];
      if (/^(https?:|#)/.test(url)) continue;
      const target = path.resolve(materials, decodeURIComponent(url.split(/[?#]/)[0]));
      assert(target.startsWith(materials + path.sep), url);
      assert(fs.existsSync(target), url);
    }
  }
  assert.equal(end, seconds(data.duration));
  const html = read(data.deckUrl);
  assert(html.includes(`data-lesson-page="${data.id}"`));
  assert(html.includes('class="lesson-deck"'));
  for (const asset of ['section00-v0.1.css', '../assets/course-player.css', '../assets/course-player.js']) assert(html.includes(asset));
  assert(html.indexOf(`lesson-${data.id}-v0.1.js`) < html.indexOf('../assets/course-player.js'));
  assert(chapter.includes(`id="lesson-${data.id}-title">${data.title}</h3>`));
  assert(chapter.includes(`href="materials/${data.deckUrl}"`));
  assert(data.slides.some(slide => slide.content.includes('section02-context-workbook.md')));
  assert(data.sources.length > 0);
  for (const source of data.sources) {
    assert.equal(new URL(source.url).protocol, 'https:');
    assert(data.slides.some(slide => slide.content.includes(source.url)), source.url);
  }
  slides += data.slides.length; duration += end;
}
assert.equal(slides, 50); assert.equal(duration, 45 * 60);
const workbook = read('section02-context-workbook.md');
for (const phrase of ['2-1.', '2-2.', '2-3.', '2-4.', '2-5.', '미션 2.', 'AGENTS.md', 'docs/PRODUCT.md', 'docs/ARCHITECTURE.md', 'docs/TASKS.md', 'T-001', 'AC-01', 'AC-02', 'AC-06', 'E-001', 'E-002', 'E-003', '산악박물관', 'Next.js', 'PostgreSQL', 'git diff --cached', '함수 결과 0건만 확인했다면', '검증 전 가정']) assert(workbook.includes(phrase), phrase);
assert.equal((workbook.match(/^```markdown$/gm) || []).length, 4);
assert(workbook.includes('지정한 파일을 조회하는 도구만'));
assert(workbook.includes('보류할 다섯 항목'));
assert(landing.includes('href="materials/section02-context-workbook.md"'));
assert.equal((landing.match(/data-chapter="/g) || []).length, 3);
assert(curriculum.includes('../index.html#section02'));
assert(fs.readFileSync(path.join(root, '.github/workflows/deploy-pages.yml'), 'utf8').includes('node tests/validate-section02.cjs'));
console.log('PASS: section 02 / v0.4 = 5 lessons / 50 slides / 45 minutes; timing, strict JSON, content structure, shared player, public links, source attribution and four-document workbook.');

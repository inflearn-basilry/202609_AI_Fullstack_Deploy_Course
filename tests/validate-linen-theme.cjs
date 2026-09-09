#!/usr/bin/env node
'use strict';
// Read-only, dependency-free source checks. Intended location: tests/.
// CI: node tests/validate-linen-theme.cjs
// Local migration check: node tests/validate-linen-theme.cjs --compare-head
// Candidate run before copying: node /candidate/validate-linen-theme.cjs --root /repo
// --compare-head reads ONLY the seven named public deck sources from git HEAD.
// This checker does not claim browser layout, keyboard or live-storage coverage.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const cp = require('node:child_process');
const vm = require('node:vm');

const args = process.argv.slice(2);
let root = path.resolve(__dirname, '..');
let compareHead = false;
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--compare-head') compareHead = true;
  else if (args[i] === '--root') {
    assert(args[i + 1] && !args[i + 1].startsWith('--'), '--root requires a project path');
    root = path.resolve(args[++i]);
  } else if (args[i].startsWith('--root=')) root = path.resolve(args[i].slice(7));
  else throw new Error('Unknown option: ' + args[i]);
}
const dist = path.join(root, 'dist');
const materials = path.join(dist, 'materials');
const themeFile = path.join(dist, 'assets', 'course-theme.css');
const read = file => fs.readFileSync(file, 'utf8');
const rel = file => path.relative(root, file).split(path.sep).join('/');
function inside(base, target) {
  const relative = path.relative(base, target);
  return relative === '' || (!relative.startsWith('..' + path.sep) && relative !== '..' && !path.isAbsolute(relative));
}
function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap(entry => {
    const file = path.join(dir, entry.name);
    assert(!entry.isSymbolicLink(), 'Symlink not permitted in public artifact: ' + rel(file));
    return entry.isDirectory() ? walk(file) : [file];
  });
}
function attrs(tag) {
  const result = {};
  for (const match of tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)) {
    result[match[1].toLowerCase()] = match[2] ?? match[3] ?? match[4];
  }
  return result;
}
function cssClean(css) { return css.replace(/\/\*[\s\S]*?\*\//g, ''); }
function localTarget(raw, sourceFile) {
  const url = raw.replace(/&amp;/g, '&').trim();
  if (!url || url.startsWith('#') || /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(url)) return null;
  assert(!url.startsWith('/'), 'Root-relative URL breaks project-prefix deployment: ' + rel(sourceFile) + ' -> ' + url);
  const filePart = url.split(/[?#]/)[0];
  if (!filePart) return null;
  const target = path.resolve(path.dirname(sourceFile), decodeURIComponent(filePart));
  assert(inside(dist, target), 'URL escapes dist: ' + rel(sourceFile) + ' -> ' + url);
  assert(fs.existsSync(target), 'Missing public asset: ' + rel(sourceFile) + ' -> ' + url);
  assert(inside(fs.realpathSync(dist), fs.realpathSync(target)), 'Resolved asset escapes dist: ' + url);
  return target;
}
function htmlLinks(source, file) {
  const found = [];
  for (const tag of source.matchAll(/<(?:a|link|script|img|source|video|audio|iframe)\b[^>]*>/gi)) {
    const a = attrs(tag[0]);
    for (const name of ['href', 'src', 'poster']) {
      if (a[name]) {
        const target = localTarget(a[name], file);
        if (target) found.push({target, tag: tag[0], attrs: a});
      }
    }
  }
  return found;
}
function readData(source, filename) {
  // Public data files are assignments of JSON, not executable modules.
  const match = source.match(/\bwindow\.ORIENTATION\s*=\s*([\s\S]+?)\s*;?\s*$/);
  assert(match, 'Expected JSON assignment: ' + filename);
  return JSON.parse(match[1].replace(/;\s*$/, ''));
}
const datasetNames = [
  ['orientation-v0.1.js', 12], ['lesson-0-2-v0.1.js', 11],
  ['lesson-0-3-v0.1.js', 9], ['lesson-0-4-v0.1.js', 9],
  ['lesson-0-5-v0.1.js', 14], ['lesson-0-6-v0.1.js', 12]
];
const independentName = '2026-09-07_0-1_이_강의가_해결하는_문제_강의슬라이드_v0.1.html';
const independentFile = path.join(materials, independentName);
function inlineSlides(html) {
  const body = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1];
  assert(body, '0-1 body missing');
  return [...body.replace(/<(style|script)\b[^>]*>[\s\S]*?<\/\1>/gi, '')
    .matchAll(/<section\b([^>]*)>([\s\S]*?)<\/section>/gi)]
    .filter(match => (attrs(match[1]).class || '').split(/\s+/).includes('slide'))
    .map(match => ({attrs: attrs(match[1]), content: match[2].replace(/\r\n?/g, '\n').trim()}));
}
const checks = [];
function check(name, run) { checks.push({name, run}); }
let files = [], htmlFiles = [], cssFiles = [], colors = {}, fontCount = 0, linkCount = 0;

check('public file inventory and crawl policy', () => {
  files = walk(dist);
  htmlFiles = files.filter(file => file.endsWith('.html'));
  cssFiles = files.filter(file => file.endsWith('.css'));
  assert.equal(htmlFiles.length, 13, 'Expected catalog, seven decks and five reference/redirect pages');
  for (const file of htmlFiles) {
    const html = read(file);
    const robotTags = [...html.matchAll(/<meta\b[^>]*>/gi)].map(match => attrs(match[0]));
    for (const name of ['robots', 'googlebot']) {
      const tag = robotTags.find(a => a.name?.toLowerCase() === name);
      assert(tag, rel(file) + ': missing ' + name + ' policy');
      const directives = new Set((tag.content || '').toLowerCase().split(/\s*,\s*/));
      for (const directive of ['noindex', 'nofollow', 'noarchive', 'nosnippet', 'noimageindex']) {
        assert(directives.has(directive), rel(file) + ': missing ' + name + '/' + directive);
      }
    }
    assert(/<meta\b[^>]*name=["']viewport["']/i.test(html), rel(file) + ': no viewport metadata');
  }
  assert(/User-agent:\s*\*[\s\S]*Disallow:\s*\//i.test(read(path.join(dist, 'robots.txt'))));
  // noindex/robots are crawl preferences, not access control.
});

check('one shared theme on every public HTML page', () => {
  assert(fs.existsSync(themeFile), 'Missing assets/course-theme.css');
  for (const file of htmlFiles) {
    const html = read(file);
    const stylesheets = [...html.matchAll(/<link\b[^>]*>/gi)].map(match => attrs(match[0]))
      .filter(a => a.rel?.toLowerCase().split(/\s+/).includes('stylesheet'));
    const themeLinks = stylesheets.filter(a => a.href && localTarget(a.href, file) === themeFile);
    assert.equal(themeLinks.length, 1, rel(file) + ': expected one shared course-theme stylesheet');
  }
  const theme = cssClean(read(themeFile));
  assert(/color-scheme\s*:\s*light\b/i.test(theme), 'Shared theme must opt into light native controls');
  assert(/--course-font-sans\s*:[^;]*Pretendard/i.test(theme), 'Shared sans stack must name Pretendard');
  assert(/--course-font-code\s*:/i.test(theme), 'Shared code font token missing');
});

check('approved palette and accessible token contrasts', () => {
  const expected = {
    canvas: '#EBE8E0', surface: '#F4F1E9', inset: '#E2DED4', ink: '#232B36',
    'text-secondary': '#59616B', line: '#C9C5BC', 'control-border': '#817D74',
    action: '#2856C5', 'action-hover': '#2147A6', 'action-soft': '#DFE5F2',
    'on-action': '#FFFFFF', success: '#246348', 'success-soft': '#DFE9DF',
    warning: '#8A4B12', 'warning-soft': '#F1E5D4', danger: '#A43136', 'danger-soft': '#F1DFDC'
  };
  const source = cssClean(read(themeFile));
  for (const [name, expectedHex] of Object.entries(expected)) {
    const matches = [...source.matchAll(new RegExp('--course-' + name + '\\s*:\\s*(#[0-9a-f]{6})\\s*(?:;|})', 'gi'))];
    assert(matches.length, 'Missing literal approved color token --course-' + name);
    assert(matches.every(m => m[1].toUpperCase() === expectedHex), 'Palette mismatch: --course-' + name);
    colors[name] = expectedHex;
  }
  const luminance = hex => {
    const channels = [1, 3, 5].map(offset => parseInt(hex.slice(offset, offset + 2), 16) / 255)
      .map(value => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4);
    return channels[0] * .2126 + channels[1] * .7152 + channels[2] * .0722;
  };
  const contrast = (a, b) => { const x = luminance(colors[a]), y = luminance(colors[b]); return (Math.max(x, y) + .05) / (Math.min(x, y) + .05); };
  const pairs = [
    ['ink', 'canvas', 4.5], ['text-secondary', 'canvas', 4.5], ['action', 'canvas', 4.5],
    ['on-action', 'action', 4.5], ['action', 'action-soft', 4.5],
    ['success', 'success-soft', 4.5], ['warning', 'warning-soft', 4.5],
    ['danger', 'danger-soft', 4.5], ['control-border', 'surface', 3]
  ];
  for (const [fg, bg, minimum] of pairs) {
    const ratio = contrast(fg, bg);
    assert(ratio >= minimum, fg + '/' + bg + ' contrast ' + ratio.toFixed(2) + ':1 < ' + minimum);
  }
});

check('project-relative local links, CSS URLs and actual WOFF2 files', () => {
  for (const file of htmlFiles) linkCount += htmlLinks(read(file), file).length;
  const referencedFonts = new Set();
  for (const file of cssFiles) {
    const css = cssClean(read(file));
    for (const match of css.matchAll(/url\(\s*(?:"([^"]+)"|'([^']+)'|([^\s)]+))\s*\)/gi)) {
      const raw = match[1] ?? match[2] ?? match[3];
      assert(!/^https?:\/\//i.test(raw), rel(file) + ': public styling should not depend on remote CSS assets');
      const target = localTarget(raw, file);
      if (target) { linkCount++; if (/\.woff2$/i.test(target)) referencedFonts.add(target); }
    }
    for (const match of css.matchAll(/@import\s+(?:"([^"]+)"|'([^']+)')/gi)) {
      const raw = match[1] ?? match[2];
      assert(!/^(?:https?:)?\/\//i.test(raw), rel(file) + ': remote CSS import');
      if (localTarget(raw, file)) linkCount++;
    }
  }
  // Require a reachable font-face chain from the common theme, not merely a
  // forgotten WOFF2 somewhere else in dist.
  const seenCss = new Set();
  let reachableFontFace = false;
  function followCss(file) {
    if (seenCss.has(file)) return;
    seenCss.add(file);
    const css = cssClean(read(file));
    for (const face of css.matchAll(/@font-face\s*\{([^}]+)\}/gi)) {
      if (/font-family\s*:[^;]*Pretendard/i.test(face[1]) && /url\([^)]*\.woff2(?:[?#][^)]*)?['"]?\s*\)/i.test(face[1])) reachableFontFace = true;
    }
    for (const match of css.matchAll(/@import\s+(?:url\(\s*)?(?:"([^"]+)"|'([^']+)'|([^\s;)]+))/gi)) {
      const target = localTarget(match[1] ?? match[2] ?? match[3], file);
      if (target && target.endsWith('.css')) followCss(target);
    }
  }
  followCss(themeFile);
  assert(reachableFontFace, 'Shared theme must load a local Pretendard WOFF2 @font-face directly or via @import');
  assert(referencedFonts.size > 0, 'No CSS-referenced local WOFF2 file');
  for (const file of referencedFonts) {
    const buffer = fs.readFileSync(file);
    assert(buffer.length >= 48, rel(file) + ': too short for WOFF2');
    assert.equal(buffer.subarray(0, 4).toString('ascii'), 'wOF2', rel(file) + ': not a WOFF2 font (possibly a failed download)');
    assert.equal(buffer.readUInt32BE(8), buffer.length, rel(file) + ': WOFF2 header length does not match file');
    fontCount++;
  }
  const licenses = files.filter(file => /(?:ofl|licen[sc]e)/i.test(path.basename(file)));
  assert(licenses.some(file => /SIL OPEN FONT LICENSE|SIL Open Font License/.test(read(file))), 'Public local-font OFL license missing');
});

check('all seven decks and 75 valid public slide bodies', () => {
  let total = 0;
  for (const [name, count] of datasetNames) {
    const data = readData(read(path.join(materials, name)), name);
    assert.equal(data.slides.length, count, name + ': slide count changed');
    for (const [index, slide] of data.slides.entries()) {
      for (const key of ['label', 'title', 'time', 'content']) assert(typeof slide[key] === 'string' && slide[key].trim(), name + '#' + (index + 1) + ': missing ' + key);
      assert(!/<(?:script|iframe|object|embed)\b/i.test(slide.content), name + ': active embedded slide content');
      assert(!Object.hasOwn(slide, 'note') && !Object.hasOwn(slide, 'direction'), name + ': private slide field');
      linkCount += htmlLinks(slide.content, path.join(materials, 'slide-data.html')).length;
    }
    total += data.slides.length;
  }
  const inline = inlineSlides(read(independentFile));
  assert.equal(inline.length, 8, '0-1 must keep eight independent slide sections');
  inline.forEach((slide, index) => {
    assert(slide.attrs['data-title'], '0-1 #' + (index + 1) + ' has no slide title');
    assert(/<h[12]\b/.test(slide.content), '0-1 #' + (index + 1) + ' has no heading');
  });
  assert.equal(total + inline.length, 75);
  const pages = htmlFiles.filter(file => /_강의슬라이드_v0\.1\.html$/.test(file));
  assert.equal(pages.length, 7);
  const ids = pages.map(file => read(file).match(/<body\b[^>]*\bdata-lesson-page=["']([^"']+)["']/)?.[1]).sort();
  assert.deepEqual(ids, ['0-0', '0-1', '0-2', '0-3', '0-4', '0-5', '0-6']);
});

check('public JS syntax and original progress-key contract', () => {
  for (const file of files.filter(file => file.endsWith('.js'))) new vm.Script(read(file), {filename: rel(file)});
  for (const file of htmlFiles) {
    for (const script of read(file).matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
      const a = attrs(script[1]);
      if (!a.type || /(?:java|ecma)script|module/i.test(a.type)) new vm.Script(script[2], {filename: rel(file)});
    }
  }
  const progress = read(path.join(dist, 'assets', 'course-progress.js'));
  assert(/(?:const|let)\s+prefix\s*=\s*['"]basilry\.ai-fullstack\.progress\.v1:['"]/.test(progress), 'Original lesson-scoped progress key changed');
  assert(/localStorage\.getItem\(prefix\s*\+\s*id\)/.test(progress), 'Completion read is no longer lesson-key scoped');
  assert(/localStorage\.setItem\(prefix\s*\+\s*id,\s*['"]1['"]\)/.test(progress), 'Completion storage value changed');
  assert(/data-warning|dataset\.warning/.test(progress), 'Explicit persistence warning state missing');
});

if (compareHead) check('local-only migration comparison: all 75 slide contents against git HEAD', () => {
  const head = relative => cp.execFileSync('git', ['show', 'HEAD:' + relative], {
    cwd: root, encoding: 'utf8', maxBuffer: 16 * 1024 * 1024, windowsHide: true
  });
  for (const [name] of datasetNames) {
    const relative = 'dist/materials/' + name;
    const before = readData(head(relative), relative), after = readData(read(path.join(materials, name)), relative);
    assert.equal(after.slides.length, before.slides.length, name + ': slide count changed from HEAD');
    // Theme/layout are presentation metadata. Authored HTML, labels, slide titles
    // and timings must be byte-identical after newline normalization.
    for (let i = 0; i < after.slides.length; i++) {
      for (const key of ['label', 'title', 'time', 'content']) {
        const normalized = value => typeof value === 'string' ? value.replace(/\r\n?/g, '\n') : value;
        assert.equal(normalized(after.slides[i][key]), normalized(before.slides[i][key]), name + '#' + (i + 1) + ': authored ' + key + ' changed from HEAD');
      }
    }
  }
  const before = inlineSlides(head('dist/materials/' + independentName));
  const after = inlineSlides(read(independentFile));
  assert.equal(after.length, before.length);
  after.forEach((slide, i) => {
    assert.equal(slide.attrs['data-title'], before[i].attrs['data-title'], '0-1 #' + (i + 1) + ': title changed from HEAD');
    assert.equal(slide.content, before[i].content, '0-1 #' + (i + 1) + ': slide body changed from HEAD');
  });
});

let failures = 0;
for (const {name, run} of checks) {
  try { run(); console.log('PASS: ' + name); }
  catch (error) { failures++; console.error('FAIL: ' + name + '\n  ' + error.message); }
}
if (failures) { console.error('FAILED: ' + failures + '/' + checks.length + ' check groups.'); process.exitCode = 1; }
else console.log('PASS: Linen Blue source validation; 13 HTML pages / 7 decks / 75 slides / ' + fontCount + ' local WOFF2 font(s) / ' + linkCount + ' local references. Browser layout and interaction QA remain separate.');

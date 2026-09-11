// This test must pass on a clean checkout with no private instructor files.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const cp = require('node:child_process');
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const walk = dir => fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);
const files = walk(dist);
const forbiddenPath = /(?:^|\/)(?:\.private|production)(?:\/|$)|스크립트_스토리보드|(?:^|\/)lesson-script-/;
const topKeys = new Set(['id','title','duration','description','sources','deckUrl','slides']);
const slideKeys = new Set(['id','label','title','time','theme','layout','content']);
let datasets = 0;
for (const file of files) {
  assert(!forbiddenPath.test(path.relative(dist,file).replaceAll('\\','/')), file);
  const source = fs.readFileSync(file,'utf8');
  assert(!/<aside\b[^>]*class="(?:speaker-notes|notes-panel)"|id="(?:notes|notesPanel)"|data-material="scripts"/.test(source), file);
  assert(!/\b(?:item|slide)\.(?:note|direction)\b|\bscriptUrl\b/.test(source), file);
  assert(!/["'](?:note|direction|speakerNotes|narration)["']\s*:/.test(source), file);
  for (const match of source.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    assert(!forbiddenPath.test(decodeURIComponent(match[1])), file + ' private link');
  }
  if (/^(orientation-v0\.1|lesson-(?:0-[2-6]|1-[1-4]|2-[1-5])-v0\.1)\.js$/.test(path.basename(file))) {
    const scope = {window:{}};
    vm.runInNewContext(source,scope);
    const data = scope.window.ORIENTATION;
    assert(Object.keys(data).every(k=>topKeys.has(k)), file);
    assert(data.slides.every(s=>Object.keys(s).every(k=>slideKeys.has(k))), file);
    datasets++;
  }
}
assert.equal(datasets,15);
const tracked = cp.execFileSync('git',['-c','core.quotepath=false','ls-files','-z'],{cwd:root,encoding:'utf8'}).split('\0').filter(Boolean);
assert(tracked.every(p=>!forbiddenPath.test(p) && !p.includes('오리엔테이션_제작메모')), 'Private files are tracked by Git');
const ignored = cp.execFileSync('git',['check-ignore','--no-index','.private/instructor/probe.txt','production/probe.txt'],{cwd:root,encoding:'utf8'}).trim().split(/\r?\n/);
assert.deepEqual(ignored, ['.private/instructor/probe.txt', 'production/probe.txt']);
const workflow = fs.readFileSync(path.join(root,'.github/workflows/deploy-pages.yml'),'utf8');
assert(workflow.includes('path: ./dist'));
assert(workflow.includes('node tests/validate-public-boundary.cjs'));
console.log(`PASS: ${files.length} public files; 15 allowlisted slide datasets; no instructor pages, notes, private links or tracked originals.`);

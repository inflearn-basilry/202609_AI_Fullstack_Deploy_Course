// Read-only regression checks: content, links, crawl policy and progress storage.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const materials = path.join(dist, 'materials');
const read = file => fs.readFileSync(file, 'utf8');
const seconds = value => value.split(':').reduce((n, part) => n * 60 + Number(part), 0);
let newSlides = 0, newDuration = 0;
for (let n = 2; n <= 6; n++) {
  const scope = {window:{}};
  vm.runInNewContext(read(path.join(materials, 'lesson-0-' + n + '-v0.1.js')), scope);
  const data = scope.window.ORIENTATION;
  assert.equal(data.id, '0-' + n);
  let end = 0;
  for (const slide of data.slides) {
    const range = slide.time.split('–').map(seconds);
    assert.equal(range[0], end, data.id + ' timing gap');
    assert(range[1] > range[0]); end = range[1];
    for (const key of ['label', 'title', 'content']) assert(slide[key]?.length > 5, key);
    for (const key of ['note', 'direction']) assert(!Object.hasOwn(slide, key), key);
    assert(['navy','paper'].includes(slide.theme));
    const tags = [];
    for (const tag of slide.content.matchAll(/<\/?([a-z][a-z0-9-]*)\b[^>]*>/gi)) {
      const name = tag[1].toLowerCase();
      assert(!['script','iframe','object','embed'].includes(name));
      if (['br','hr','img','input'].includes(name)) continue;
      if (tag[0].startsWith('</')) assert.equal(tags.pop(), name, data.id + ' / ' + slide.title);
      else tags.push(name);
    }
    assert.equal(tags.length, 0);
    assert(!/\bon\w+=|javascript:/i.test(slide.content));
  }
  assert.equal(end, seconds(data.duration));
  assert.equal(end, [0,0,420,300,420,720,600][n]);
  assert(!Object.hasOwn(data, 'scriptUrl'));
  for (const url of [data.deckUrl]) {
    const html = read(path.join(materials, url));
    assert(html.includes('data-lesson-page="' + data.id + '"'));
    assert(html.includes('lesson-0-' + n + '-v0.1.js'));
  }
  newSlides += data.slides.length; newDuration += end;
}
assert.equal(newDuration + 900, 3360); // Existing 0-0 (10m) + 0-1 (5m).
const walk = dir => fs.readdirSync(dir, {withFileTypes:true}).flatMap(item => item.isDirectory() ? walk(path.join(dir,item.name)) : [path.join(dir,item.name)]);
let links = 0, pages = 0;
for (const file of walk(dist)) {
  const content = read(file);
  if (file.endsWith('.js')) new vm.Script(content, {filename:file});
  if (!file.endsWith('.html')) continue;
  pages++;
  assert(/<meta name="robots" content="noindex,nofollow,noarchive,nosnippet,noimageindex">/.test(content), file);
  for (const match of content.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    if (/^(?:[a-z]+:|#|\/\/)/i.test(match[1])) continue;
    const target = path.resolve(path.dirname(file), decodeURIComponent(match[1].split(/[?#]/)[0]));
    assert(fs.existsSync(target), 'Broken link ' + match[1]); links++;
  }
  for (const match of content.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)) new vm.Script(match[1]);
}
assert(read(path.join(dist,'robots.txt')).includes('User-agent: *\nDisallow: /'));
for (const version of ['0.1','0.4']) {
  const name = fs.readdirSync(materials).find(file => file.endsWith('커리큘럼_v' + version + '.html'));
  const html = read(path.join(materials,name));
  assert(html.includes('.mission strong { color: var(--navy);'));
  assert(html.includes('.output b { color: var(--navy);'));
  assert(html.includes('body > footer strong') || html.includes('.site-footer strong'));
  assert(!/^\s*footer\s+(?:strong|small)/m.test(html));
}

// DOM-shaped fixtures exercise the actual shared browser script.
class Element {
  constructor(tag='div') { this.tag = tag; this.children=[]; this.dataset={}; this.events={}; this.attributes={}; this.checked=false; }
  append(...nodes) { nodes.forEach(node=>{node.parent=this;}); this.children.push(...nodes); }
  prepend(node) { node.parent=this; this.children.unshift(node); }
  setAttribute(k,v) { this.attributes[k]=v; }
  addEventListener(k,v) { this.events[k]=v; }
  closest() { let node=this; while(node) { if(node.className==='lesson-row')return node; node=node.parent; } return null; }
}
function progressSession(storage, mode='ok', initial='loading', page='lesson', multiple=false) {
  const docEvents={}, winEvents={}, all=[];
  const body=new Element(); if(page==='lesson')body.dataset.lessonPage='0-2';
  const main=new Element();
  const rowIds=Array.from({length:7},(_,n)=>'0-'+n).concat(multiple?['1-1','1-2','1-3','1-4','2-1','2-2','2-3','2-4','2-5']:[]);
  const rows=page==='catalog' ? rowIds.map(id=>{
    const row=new Element('article'); row.className='lesson-row'; row.dataset.lesson=id;
    const actions=new Element(); actions.className='lesson-actions'; row.append(actions);
    row.querySelector=selector=>selector==='.lesson-actions'?actions:null;
    return row;
  }) : [];
  const chapters=(multiple?['0','1','2']:['0']).map(section=>{
    const chapterBody=new Element();
    const chapter=new Element();
    chapter.querySelector=selector=>selector==='.chapter-body'?chapterBody:null;
    chapter.querySelectorAll=selector=>selector==='.lesson-row[data-lesson]'?rows.filter(row=>row.dataset.lesson.startsWith(section+'-')):[];
    return chapter;
  });
  const document={
    body, readyState:initial,
    createElement:tag=>{const node=new Element(tag);all.push(node);return node;},
    getElementById:()=>null,
    querySelector:selector=>selector === 'main' ? main : null,
    querySelectorAll:selector=>{
      if(selector==='.progress-notice')return all.filter(node=>node.className==='progress-notice');
      if(selector==='.lesson-row[data-lesson]')return rows;
      if(selector==='.chapter' && page==='catalog')return chapters;
      return [];
    },
    addEventListener:(name,fn)=>{docEvents[name]=fn;}
  };
  const localStorage={
    getItem:k=>{if(mode==='denied')throw Error('denied');return storage.get(k) ?? null;},
    setItem:(k,v)=>{if(mode!=='ok')throw Error('quota');storage.set(k,v);},
    removeItem:k=>{if(mode!=='ok')throw Error('denied');storage.delete(k);}
  };
  const sandbox={document,localStorage,window:{addEventListener:(name,fn)=>{winEvents[name]=fn;}}};
  vm.runInNewContext(read(path.join(dist,'assets','course-progress.js')),sandbox);
  if(initial==='loading')docEvents.DOMContentLoaded();
  return {counts:all.filter(node=>node.className==='progress-count'), input:all.find(node=>node.tag==='input'),inputs:all.filter(node=>node.tag==='input'),notice:all.find(node=>node.className==='progress-notice'),count:all.find(node=>node.className==='progress-count'),rows,winEvents};
}
const store=new Map([['unrelated.app','keep']]);
const key='basilry.ai-fullstack.progress.v1:0-2';
let first=progressSession(store);
assert.equal(first.input.checked,false);
first.input.checked=true; first.input.events.change();
assert.equal(store.get(key),'1');
let reloaded=progressSession(store,'ok','complete');
assert.equal(reloaded.input.checked,true);
const other=progressSession(store);
reloaded.input.checked=false; reloaded.input.events.change();
assert(!store.has(key));
other.winEvents.storage({key}); assert.equal(other.input.checked,false);
assert.equal(store.get('unrelated.app'),'keep');
store.set(key,'corrupted');
assert.equal(progressSession(store).input.checked,false);
store.set(key,'1');
const denied=progressSession(store,'denied');
denied.input.checked=true; denied.input.events.change();
assert.equal(denied.input.checked,true);
assert(denied.notice.textContent.includes('저장할 수 없어'));
const quota=progressSession(new Map(),'quota');
quota.input.checked=true; quota.input.events.change();
assert.equal(quota.input.checked,true);
assert(quota.notice.textContent.includes('저장할 수 없어'));
store.delete(key); other.winEvents.storage({key:null});
assert.equal(other.input.checked,false);
const rowStore=new Map([['basilry.ai-fullstack.progress.v1:0-0','1'],['unrelated.app','keep']]);
const rowPage=progressSession(rowStore,'ok','complete','catalog');
assert.equal(rowPage.inputs.length,7);
assert.equal(rowPage.count.textContent,'수강 완료 1 / 7');
assert.equal(rowPage.inputs[0].checked,true);
assert(rowPage.rows.every(row=>row.children[0].className==='lesson-actions' && row.children[0].children.length===1));
rowPage.inputs[2].checked=true; rowPage.inputs[2].events.change();
assert.equal(rowPage.rows[2].dataset.completed,'true');
assert.equal(rowPage.count.textContent,'수강 완료 2 / 7');
assert.equal(progressSession(rowStore).input.checked,true);
assert.equal(progressSession(rowStore,'ok','loading','catalog').count.textContent,'수강 완료 2 / 7');
rowPage.inputs[0].checked=false; rowPage.inputs[0].events.change();
assert.equal(rowPage.count.textContent,'수강 완료 1 / 7');
assert.equal(rowStore.get('unrelated.app'),'keep');
const multiStore=new Map([['basilry.ai-fullstack.progress.v1:0-0','1'],['basilry.ai-fullstack.progress.v1:1-2','1'],['basilry.ai-fullstack.progress.v1:2-3','1']]);
const multi=progressSession(multiStore,'ok','complete','catalog',true);
assert.equal(multi.inputs.length,16);
assert.deepEqual(multi.counts.map(node=>node.textContent),['수강 완료 1 / 7','수강 완료 1 / 4','수강 완료 1 / 5']);
multi.inputs[7].checked=true;multi.inputs[7].events.change();
assert.deepEqual(multi.counts.map(node=>node.textContent),['수강 완료 1 / 7','수강 완료 2 / 4','수강 완료 1 / 5']);
assert.equal(multiStore.get('basilry.ai-fullstack.progress.v1:0-0'),'1');
multiStore.delete('basilry.ai-fullstack.progress.v1:1-2');
multi.winEvents.storage({key:'basilry.ai-fullstack.progress.v1:1-2'});
assert.deepEqual(multi.counts.map(node=>node.textContent),['수강 완료 1 / 7','수강 완료 1 / 4','수강 완료 1 / 5']);
assert.equal(progressSession(multiStore,'ok','complete','catalog',true).inputs[7].checked,true);
multi.inputs[11].checked=true;multi.inputs[11].events.change();
assert.equal(multiStore.get('basilry.ai-fullstack.progress.v1:2-1'),'1');
assert.deepEqual(multi.counts.map(node=>node.textContent),['수강 완료 1 / 7','수강 완료 1 / 4','수강 완료 2 / 5']);
multiStore.delete('basilry.ai-fullstack.progress.v1:2-3');
multi.winEvents.storage({key:'basilry.ai-fullstack.progress.v1:2-3'});
assert.deepEqual(multi.counts.map(node=>node.textContent),['수강 완료 1 / 7','수강 완료 1 / 4','수강 완료 1 / 5']);
assert.equal(progressSession(multiStore,'ok','complete','catalog',true).inputs[11].checked,true);
console.log('PASS: per-chapter completion totals and cross-tab section 00/01/02 isolation.');
console.log('PASS: section 00 = 7 lessons / ' + (newSlides + 20) + ' slides / 56 minutes; ' + pages + ' noindex pages; ' + links + ' local links; JS syntax; storage persistence/uncheck/cross-tab/denied/quota/corruption/isolation; inline row controls and existing progress migration.');

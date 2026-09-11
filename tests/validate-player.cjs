// Regression fixtures for the actual shared player; no browser dependencies.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const materials = path.join(root, 'dist/materials');
const player = fs.readFileSync(path.join(root, 'dist/assets/course-player.js'), 'utf8');
const pages = fs.readdirSync(materials).filter(name => name.includes('강의슬라이드') && name.endsWith('.html'));
assert.equal(pages.length, 16);

function fixture(data, html, id) {
  let doc;
  class Element {
    constructor(tag = 'div') {
      this.tagName = tag; this.attrs = {}; this.children = []; this.events = {};
      this.dataset = {}; this.hidden = false; this.classes = new Set();
      this.style = {setProperty: (k,v) => { this.attrs[k] = v; }};
      this.classList = {toggle: (k, v) => {
        const add = v === undefined ? !this.classes.has(k) : v;
        if (add) this.classes.add(k); else this.classes.delete(k);
        return add;
      }};
    }
    set className(v) { this.classes = new Set(v.split(/\s+/)); }
    get className() { return [...this.classes].join(' '); }
    setAttribute(k,v) { this.attrs[k] = v; }
    append(...nodes) { this.children.push(...nodes); }
    addEventListener(k,fn) { this.events[k] = fn; }
    querySelectorAll(q) { return this.children.filter(n => q === '.slide' && n.classes.has('slide')); }
    contains(n) { return n === this || this.children.some(child => child.contains(n)); }
    focus() { doc.activeElement = this; }
  }
  const body = new Element('body'); body.dataset.lessonPage = id;
  const deck = new Element('main'); deck.id = 'deck'; body.append(deck);
  if (!data) {
    for (const match of html.matchAll(/<section class="([^"]*\bslide\b[^"]*)" data-title="([^"]+)"/g)) {
      const slide = new Element('section'); slide.className = match[1]; slide.dataset.title = match[2]; deck.append(slide);
    }
  }
  const walk = node => [node, ...node.children.flatMap(walk)];
  const get = id => walk(body).find(n => n.id === id);
  const docEvents = {}, winEvents = {}, timers = [];
  let scrolls = 0;
  doc = {
    body, getElementById:get, createElement:tag => new Element(tag), documentElement:new Element('html'),
    addEventListener:(k,fn) => { docEvents[k] = fn; }, fullscreenElement:null, activeElement:null
  };
  const sandbox = {
    window:{ORIENTATION:data, addEventListener:(k,fn) => { winEvents[k] = fn; }, scrollTo:() => { scrolls++; }},
    document:doc, innerWidth:1920, innerHeight:1080, location:{hash:'#3'},
    history:{replaceState:(_s,_t,hash) => { sandbox.location.hash = hash; }},
    setTimeout:fn => { timers.push(fn); }
  };
  vm.runInNewContext(player, sandbox);
  const plain = {closest:() => null};
  const key = (name, extra={}) => {
    let prevented = false;
    docEvents.keydown({key:name,target:plain,preventDefault(){prevented=true;},...extra});
    return prevented;
  };
  const touch = (name,x,y,target=plain) => deck.events[name]({target,touches:[{}],changedTouches:[{screenX:x,screenY:y}]});
  return {get,deck,body,walk,doc,docEvents,winEvents,sandbox,key,touch,plain,timers,scrolls:() => scrolls};
}

(async () => {
  let total = 0;
  for (const page of pages) {
    const html = fs.readFileSync(path.join(materials,page),'utf8');
    assert.equal((html.match(/src="\.\.\/assets\/course-player.js"/g)||[]).length,1);
    assert.equal((html.match(/href="\.\.\/assets\/course-player.css"/g)||[]).length,1);
    assert(!/class="controls"|id="(?:prev|next|counter|fullscreen|status)"|addEventListener/.test(html), page+' duplicates player UI/logic');
    const id = html.match(/data-lesson-page="([^"]+)"/)[1];
    const source = html.match(/src="((?:orientation-v0\.1|lesson-(?:0-[2-6]|1-[1-4]|2-[1-5])-v0\.1)\.js)"/)?.[1];
    let data;
    if (source) {
      const scope = {window:{}};
      vm.runInNewContext(fs.readFileSync(path.join(materials,source),'utf8'),scope);
      data = scope.window.ORIENTATION;
      assert(html.indexOf(source) < html.indexOf('course-player.js'), 'Dataset must load first');
    }
    const f = fixture(data,html,id);
    const slides = f.deck.querySelectorAll('.slide'), n = slides.length;
    total += n;
    const counter = i => String(i).padStart(2,'0')+' / '+String(n).padStart(2,'0');
    assert.equal(f.get('home').href,'../index.html');
    assert.equal(f.get('home').attrs['aria-label'],'자료실로 돌아가기');
    assert.equal(f.get('counter').textContent,counter(3));
    assert.equal(slides.filter(s => s.classes.has('active')).length,1);
    assert.equal(slides[0].inert,true); assert.equal(slides[2].inert,false);
    assert.equal(slides[2].attrs.role,'group');
    assert(f.doc.title.startsWith(id+' · 03'));
    vm.runInNewContext(player,f.sandbox);
    assert.equal(f.walk(f.body).filter(e=>e.id==='home').length,1,'Mount must be idempotent');
    f.get('next').events.click(); assert.equal(f.get('counter').textContent,counter(4));
    f.get('prev').events.click(); assert.equal(f.get('counter').textContent,counter(3));
    f.key('Home'); assert.equal(f.get('counter').textContent,counter(1)); assert(f.get('prev').disabled);
    f.key('ArrowLeft'); assert.equal(f.get('counter').textContent,counter(1));
    f.key('End'); assert.equal(f.get('counter').textContent,counter(n)); assert(f.get('next').disabled);
    f.key('ArrowRight'); assert.equal(f.get('counter').textContent,counter(n));
    for (const hash of ['#invalid','#0','#-1','#1.5']) {
      f.sandbox.location.hash=hash; f.winEvents.hashchange(); assert.equal(f.get('counter').textContent,counter(1));
    }
    f.sandbox.location.hash='#999'; f.winEvents.hashchange(); assert.equal(f.get('counter').textContent,counter(n));
    f.key('Home'); f.key('PageDown'); f.key('Enter'); f.key(' '); assert.equal(f.get('counter').textContent,counter(4));
    f.key('Backspace'); f.key('PageUp'); assert.equal(f.get('counter').textContent,counter(2));
    assert.equal(f.key('ArrowRight',{ctrlKey:true}),false);
    assert.equal(f.key('ArrowRight',{target:{closest:()=>({})}}),false);
    assert.equal(f.key('Enter',{target:{closest:q=>q==='button,a'?{}:null}}),false);
    assert.equal(f.get('counter').textContent,counter(2));
    f.doc.activeElement=f.get('home');
    f.key('h'); assert(f.get('home').hidden); assert.equal(f.doc.activeElement,f.get('hideUi'));
    assert.equal(f.get('hideUi').attrs['aria-pressed'],'true');
    f.get('hideUi').events.click(); assert.equal(f.get('home').hidden,false);
    f.touch('touchstart',200,100); f.touch('touchend',100,100); assert.equal(f.get('counter').textContent,counter(3));
    f.touch('touchstart',100,100); f.touch('touchend',200,100); assert.equal(f.get('counter').textContent,counter(2));
    f.touch('touchstart',100,100); f.touch('touchend',90,300); assert.equal(f.get('counter').textContent,counter(2));
    f.touch('touchstart',200,100); f.deck.events.touchcancel(); f.touch('touchend',100,100); assert.equal(f.get('counter').textContent,counter(2));
    f.touch('touchstart',200,100,{closest:()=>({})}); f.touch('touchend',100,100); assert.equal(f.get('counter').textContent,counter(2));
    f.sandbox.innerWidth=390; f.winEvents.resize(); assert.equal(f.doc.documentElement.attrs['--slide-scale'],1);
    f.key('ArrowRight'); assert.equal(f.scrolls(),1);
    await f.get('fullscreen').events.click(); assert(f.get('status').textContent.includes('지원하지 않습니다'));
    f.doc.documentElement.requestFullscreen=async()=>{f.doc.fullscreenElement=f.doc.documentElement;};
    f.doc.exitFullscreen=async()=>{f.doc.fullscreenElement=null;};
    await f.get('fullscreen').events.click(); f.docEvents.fullscreenchange();
    assert.equal(f.get('status').textContent,'');
    assert(f.doc.documentElement.classes.has('presentation-mode'));
    assert.equal(f.get('fullscreen').attrs['aria-pressed'],'true');
    assert(f.doc.documentElement.attrs['--slide-scale']<1);
    await f.get('fullscreen').events.click(); f.docEvents.fullscreenchange();
    assert(!f.doc.documentElement.classes.has('presentation-mode'));
    assert.equal(f.doc.documentElement.attrs['--slide-scale'],1);
    f.timers.forEach(fn=>fn());
    assert(f.walk(f.body).find(e=>e.className==='help-toast').hidden);
  }
  assert.equal(total,165);
  for (const name of ['orientation-v0.1.css','lesson-0-1.css']) {
    const css=fs.readFileSync(path.join(materials,name),'utf8');
    assert(!/\.controls\b|\.help-toast\b|\.progress\s*\{/.test(css),name+' duplicates player styles');
    assert(css.includes('--slide-scale'));
  }
  console.log('PASS: shared player on 16 decks / 165 slides; home, single mount, bounds, hash, keyboard guards, touch, hide/restore, mobile scale and fullscreen success/fallback fixtures.');
})().catch(error=>{console.error(error);process.exitCode=1;});

// Section 01 content and curriculum alignment. Read-only; no browser required.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname,'..');
const materials = path.join(root,'dist/materials');
const read = name => fs.readFileSync(path.join(materials,name),'utf8');
const curriculumFile = fs.readdirSync(materials).find(n=>n.endsWith('커리큘럼_v0.4.html'));
const sections = vm.runInNewContext(read(curriculumFile).match(/const sections = ([\s\S]+?);\s*function escapeHtml/)[1]);
const section = sections.find(s=>s.no==='01');
assert.equal(section.lessons.length,4);
assert.equal(section.minutes,35);
const seconds = t=>t.split(':').reduce((n,v)=>n*60+Number(v),0);
const tags = html=>{
 const stack=[];
 for(const m of html.matchAll(/<\/?([a-z][a-z\d-]*)\b[^>]*>/gi)){
  const name=m[1].toLowerCase();
  assert(!['script','iframe','object','embed'].includes(name));
  if(['br','hr','img','input'].includes(name))continue;
  if(m[0].startsWith('</'))assert.equal(stack.pop(),name);
  else stack.push(name);
 }
 assert.equal(stack.length,0);
 assert(!/\bon\w+\s*=|javascript:/i.test(html));
};
const landing = fs.readFileSync(path.join(root,'dist/index.html'),'utf8');
let total=0, minutes=0;
for(let n=1;n<=4;n++){
 const scope={window:{}};
 vm.runInNewContext(read('lesson-1-'+n+'-v0.1.js'),scope);
 const data=scope.window.ORIENTATION;
 const expected=section.lessons[n-1];
 assert.equal(data.id,'1-'+n);
 assert.equal(data.title,expected[0].replace(/^1-\d+\.\s*/,''));
 assert.equal(seconds(data.duration),parseInt(expected[1])*60);
 assert(data.description.includes('v0.4'));
 assert.equal(data.slides.length,10);
 let end=0;
 data.slides.forEach(slide=>{
  const [start,stop]=slide.time.split('–').map(seconds);
  assert.equal(start,end);assert(stop>start);end=stop;
  tags(slide.content);
  assert(/<h2\b/.test(slide.content));
  assert(!Object.hasOwn(slide,'note')&&!Object.hasOwn(slide,'direction'));
  assert(['navy','paper'].includes(slide.theme));
  for(const url of [...slide.content.matchAll(/href="([^"]+)"/g)].map(m=>m[1])){
   if(/^(https?:|#)/.test(url))continue;
   assert(fs.existsSync(path.resolve(materials,url.split('#')[0])),url);
  }
 });
 assert.equal(end,seconds(data.duration));
 const html=read(data.deckUrl);
 assert(html.includes('data-lesson-page="'+data.id+'"'));
 assert(html.includes('class="lesson-deck"'));
 assert(html.includes('../assets/course-player.js'));
 assert(html.includes('section00-v0.1.css'));
 assert(landing.includes('id="lesson-'+data.id+'-title">'+data.title+'</h3>'));
 assert(landing.includes('href="materials/'+data.deckUrl+'"'));
 assert(data.slides.some(s=>s.content.includes('section01-prd-workbook.md')));
 assert(data.sources.length>0);
 total+=data.slides.length;minutes+=end/60;
}
assert.equal(total,40);assert.equal(minutes,35);
const workbook=read('section01-prd-workbook.md');
for(const phrase of ['1-1.','1-2.','1-3.','1-4.','AC-01','AC-06','검증 전 가정','한 페이지로 요약할 PRD 틀','SignalDesk PRD 요약 예시'])assert(workbook.includes(phrase),phrase);
assert(landing.includes('섹션 00은 v0.2 편성'));
assert(landing.includes('섹션 01은 v0.4'));
assert.equal((landing.match(/data-chapter="/g)||[]).length,3);
console.log('PASS: section 01 matches curriculum v0.4: 4 lessons / 40 slides / 35 minutes; titles, timing, structured content, shared player and PRD workbook.');

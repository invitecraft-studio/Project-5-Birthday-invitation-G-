
import './style.css';
import { P } from './data/party.js';
const q=new URLSearchParams(location.search);
if(q.get('name'))P.name=q.get('name');
const M=["January","February","March","April","May","June","July","August","September","October","November","December"],W=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const [Y,Mo,D]=P.date.split('-').map(Number),wd=W[new Date(Date.UTC(Y,Mo-1,D)).getUTCDay()];
const t12=s=>{const[h,m]=s.split(':').map(Number);return (h%12||12)+':'+String(m).padStart(2,'0')+' '+(h<12?'AM':'PM')};
const V={name:P.name,full:P.full,age:P.age,mom:P.mom,dad:P.dad,family:P.family,rsvpBy:P.rsvpBy,about:P.about,venue:P.venue,address:P.address,
 dayShort:`${wd.slice(0,3)} · ${D} ${M[Mo-1]} ${Y}`,dayLong:`${wd}, ${D} ${M[Mo-1]} ${Y}`,time:`${t12(P.start)} – ${t12(P.end)}`,venueLine:`${P.venue}, ${P.address}`};
const target=new Date(`${P.date}T${P.start}:00+05:30`);
const days=Math.ceil((target-Date.now())/864e5);
V.rel=days>1?`In ${days} days`:days===1?'Tomorrow!':'Today!';
document.querySelectorAll('[data-k]').forEach(e=>{if(V[e.dataset.k]!==undefined)e.textContent=V[e.dataset.k]});
document.title=`${P.name}’s Princess Garden Birthday`;
if(q.get('guest'))document.getElementById('greet').textContent=`Dear ${q.get('guest')},`,document.getElementById('gn').value=q.get('guest');
document.getElementById('facts').innerHTML=P.facts.map(f=>`<li><i>${f[0]}</i><div><small>${f[1]}</small>${f[2]}</div></li>`).join('');
document.getElementById('tl').innerHTML=P.plan.map(p=>`<li data-i="${p[0]}"><time>${p[1]}</time><h4>${p[2]}</h4><p>${p[3]}</p></li>`).join('');
/* calendar */
const first=new Date(Date.UTC(Y,Mo-1,1)).getUTCDay(),dim=new Date(Date.UTC(Y,Mo,0)).getUTCDate();
document.getElementById('calh').textContent=`${M[Mo-1]} ${Y}`;
let g=['S','M','T','W','T','F','S'].map(x=>`<span class="h">${x}</span>`).join('')+'<span></span>'.repeat(first);
for(let i=1;i<=dim;i++)g+=`<span${i===D?' class="on"':''}>${i}</span>`;
document.getElementById('calg').innerHTML=g;
/* links */
document.getElementById('map').href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(`${P.venue}, ${P.address}`);
const z=d=>d.toISOString().replace(/[-:]/g,'').split('.')[0]+'Z';
const e1=new Date(`${P.date}T${P.end}:00+05:30`);
document.getElementById('gcal').href='https://calendar.google.com/calendar/render?action=TEMPLATE&text='+encodeURIComponent(`${P.name}’s Birthday Party`)+`&dates=${z(target)}/${z(e1)}&location=`+encodeURIComponent(`${P.venue}, ${P.address}`);
const gn=document.getElementById('gn'),gc=document.getElementById('gc'),wa=document.getElementById('wa');
function rs(){const t=`Hello! This is ${gn.value||'a guest'}. We will be happy to join ${P.name}’s birthday on ${V.dayLong} at ${P.venue}. Guests: ${gc.value} 🎀`;wa.href=`https://wa.me/${P.wa}?text=`+encodeURIComponent(t)}
gn.oninput=gc.onchange=rs;rs();
/* countdown */
const pad=n=>String(n).padStart(2,'0');
function tick(){let ms=target-Date.now();const m=document.getElementById('cdmsg');
 if(ms<=0){['d','h','m','s'].forEach(i=>document.getElementById(i).textContent='0');m.textContent='Today we celebrate! 🎉';return}
 const s=Math.floor(ms/1e3);
 document.getElementById('d').textContent=Math.floor(s/86400);document.getElementById('h').textContent=pad(Math.floor(s%86400/3600));
 document.getElementById('m').textContent=pad(Math.floor(s%3600/60));document.getElementById('s').textContent=pad(s%60);
 m.textContent='…until we twirl, giggle and eat cake together.'}
tick();setInterval(tick,1000);
/* petals */
const pe=document.getElementById('petals');
for(let i=0;i<18;i++){const p=document.createElement('i');p.className='pt';p.style.cssText=`left:${Math.random()*100}%;--dx:${(Math.random()-.5)*160}px;animation-duration:${9+Math.random()*10}s;animation-delay:${-Math.random()*16}s;transform:scale(${.6+Math.random()*.8})`;pe.appendChild(p)}
/* gate */
const gate=document.getElementById('gate');
document.body.style.overflow='hidden';
document.getElementById('bowbtn').onclick=()=>{gate.classList.add('open');document.documentElement.classList.add('opened');document.body.style.overflow='';burst(['🌸','🦋','✨','💖'],18)};
/* reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
/* wishes */
function burst(set,n){for(let i=0;i<n;i++){const f=document.createElement('span');f.className='fly';f.textContent=set[i%set.length];f.style.left=(15+Math.random()*70)+'vw';f.style.top=(60+Math.random()*30)+'vh';f.style.setProperty('--dx',(Math.random()-.5)*200+'px');f.style.setProperty('--r',(Math.random()-.5)*60+'deg');f.style.animationDelay=Math.random()*.5+'s';document.body.appendChild(f);setTimeout(()=>f.remove(),3200)}}

document.getElementById('rt').textContent=`★ HAPPY BIRTHDAY ★ ${P.name.toUpperCase()} ★ ${P.age} YEARS ★`;
const hc=document.getElementById('hc'),hero=document.querySelector('.hero');
for(let i=0;i<14;i++){const e=document.createElement('i');e.className='sp';e.textContent='✦';e.style.cssText=`--x:${6+Math.random()*88}%;--y:${5+Math.random()*90}%;--s:${8+Math.random()*12}px;--d:${Math.random()*2.6}s`;hc.appendChild(e)}
hero.addEventListener('pointermove',e=>{const r=hc.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;hc.style.transform=`rotateY(${x*14}deg) rotateX(${-y*14}deg)`;
const n=Date.now();if(n-(hero._t||0)>60){hero._t=n;const t=document.createElement('span');t.className='tr';t.textContent=['✨','💖','🌸'][n%3];t.style.left=e.clientX+'px';t.style.top=e.clientY+'px';document.body.appendChild(t);setTimeout(()=>t.remove(),900)}});
hero.addEventListener('pointerleave',()=>hc.style.transform='');
const FAM=[['Our sunset memory',`${P.name}, you turn every wave and every sunset into a giggle.`,'Mom & Dad'],['Mom’s wish','May your heart stay as bright as your smile, my little princess.',P.mom],['Dad’s promise','I will always be your safe place and your tallest shoulders.',P.dad]];
document.querySelectorAll('.fc').forEach((f,i)=>{f.querySelector('.bk').innerHTML=`<small>${FAM[i][0]}</small><p>${FAM[i][1]}</p><b>— ${FAM[i][2]}</b>`;const t=()=>f.classList.toggle('open');f.onclick=t;f.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();t()}}});
const sky=document.getElementById('sky'),wt=document.getElementById('wt'),waw=document.getElementById('wawish');
function lantern(txt){const l=document.createElement('div');l.className='ln';l.style.cssText=`left:${10+Math.random()*68}%;--dur:${10+Math.random()*5}s;--top:${40+Math.random()*34}%`;l.innerHTML='<i></i><span></span>';l.lastChild.textContent=txt;sky.appendChild(l);const a=sky.querySelectorAll('.ln');if(a.length>12)a[0].remove()}
function release(){const t=wt.value.trim();if(!t){wt.focus();return}lantern(t);burst(['✨','🦋'],8);waw.hidden=false;waw.href=`https://wa.me/${P.wa}?text=`+encodeURIComponent(`🏮 My wish for ${P.name}: ${t}`);wt.value=''}
document.getElementById('wishbtn').onclick=release;wt.onkeydown=e=>{if(e.key==='Enter')release()};
const so=new IntersectionObserver(es=>{if(es[0].isIntersecting){so.disconnect();['Happy birthday, little princess!','May your year sparkle with joy'].forEach((t,i)=>setTimeout(()=>lantern(t),500+i*800))}},{threshold:.4});so.observe(sky);
Promise.race([document.fonts?document.fonts.ready:0,new Promise(r=>setTimeout(r,1200))]).then(()=>requestAnimationFrame(()=>document.documentElement.classList.add('ready')));


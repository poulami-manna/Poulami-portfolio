const menu=document.querySelector('#menuToggle');
const nav=document.querySelector('#primaryNav');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));}
const theme=document.querySelector('#themeToggle');
if(theme){theme.addEventListener('click',()=>{document.body.classList.toggle('theme-light');theme.setAttribute('aria-label',document.body.classList.contains('theme-light')?'Switch to dark theme':'Switch to light theme')});}
const progress=document.querySelector('#pageProgress');
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(max>0?window.scrollY/max*100:0)+'%'},{passive:true});
const roles=['B.Tech CSE Student','Programmer','Creative Learner','Aspiring Developer'];
const role=document.querySelector('#typedRole');let ri=0,ci=roles[0].length,del=false;
function typeRole(){if(!role)return;const word=roles[ri];if(!del){ci++;role.textContent=word.slice(0,ci);if(ci>=word.length){del=true;setTimeout(typeRole,1300);return;}}else{ci--;role.textContent=word.slice(0,ci);if(ci<=0){del=false;ri=(ri+1)%roles.length;}}setTimeout(typeRole,del?42:78);}
if(role)setTimeout(typeRole,1500);
const revealEls=document.querySelectorAll('.reveal');
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});revealEls.forEach(el=>observer.observe(el));}else revealEls.forEach(el=>el.classList.add('visible'));
document.querySelector('#contactForm')?.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);const subject=encodeURIComponent(f.get('subject'));const body=encodeURIComponent(`Name: ${f.get('name')}\nEmail: ${f.get('email')}\n\n${f.get('message')}`);document.querySelector('#formStatus').textContent='Opening your email application…';window.location.href=`mailto:mannapoulami3@gmail.com?subject=${subject}&body=${body}`;});

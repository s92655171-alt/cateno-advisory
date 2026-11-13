// Header/footer, form validation, router, events
function chrome(){const t=T[lang],h=location.hash.slice(1)||"home",ids=["about","business","it","software","digital","industries","contact"];
$("#nv").innerHTML=ids.map((id,i)=>`<a href="#${id}" ${h===id?'aria-current="page"':""}>${t.nav[i]}</a>`).join("")+`<div class="lang" role="group" aria-label="Language"><button data-l="en" aria-pressed="${lang==="en"}">EN</button><button data-l="de" aria-pressed="${lang==="de"}">DE</button></div>`;
$("#ft").innerHTML=`<div><a class="logo footer-logo" href="#home" aria-label="CATENO ADVISORY — Home"><img src="assets/cateno-logo.svg" alt="CATENO ADVISORY"></a><p>Cateno Advisory GmbH<br>${t.tag}</p></div><div>${ids.slice(0,6).map((id,i)=>`<a href="#${id}">${t.nav[i]}</a>`).join("")}</div><div><a href="#contact">${t.ct}</a><a href="#impressum">${t.imp}</a><a href="#privacy">${t.pv}</a><p>© 2026 Cateno Advisory GmbH. ${t.rights}</p></div>`;
document.documentElement.lang=lang}
function bindForm(){const f=$("#cf");if(!f)return;const t=T[lang],set=(id,m)=>{$("#"+id).textContent=m};
const cp=$("#cp");if(cp){cp.onclick=()=>{const d=()=>{cp.textContent=t.cpd;setTimeout(()=>cp.textContent=t.cpy,2000)};navigator.clipboard?navigator.clipboard.writeText(CONFIG.email).then(d,()=>{cp.textContent=t.cpy}):(()=>{cp.textContent=t.cpy})()}};
const g=$("#g");g.addEventListener("input",()=>set("cn",g.value.length+" / 2000"));
const chk=(inp,er,ok,msg)=>{$(inp).setAttribute("aria-invalid",!ok);set(er,ok?"":msg);return ok?0:1};
["#n","#m","#g"].forEach(s=>$(s).addEventListener("blur",()=>{if($(s).value)f.requestSubmit&&0}));
f.addEventListener("submit",async e=>{e.preventDefault();let bad=0;
bad+=chk("#n","en",$("#n").value.trim().length>1,t.e[0]);
bad+=chk("#m","em",/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test($("#m").value.trim()),t.e[1]);
bad+=chk("#g","eg",$("#g").value.trim().length>=10,t.e[2]);
bad+=chk("#k","ek",$("#k").checked,t.e[3]);
if(bad){f.querySelector("[aria-invalid=true]").focus();return}
const btn=f.querySelector("[type=submit]");btn.disabled=true;btn.textContent=t.sen;
const body=`${$("#g").value}\n\n— ${$("#n").value}${$("#c").value?", "+$("#c").value:""}\n${$("#m").value}`,subj=`${$("#tp").value} — ${$("#n").value}`;
if($("#hp").value){btn.disabled=false;return}
const mailto=`mailto:${CONFIG.email}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
const showFallback=(detail="")=>{const ok=$("#ok");ok.hidden=false;ok.innerHTML=`<h3>${lang==="de"?"Anfrage vorbereiten":"Prepare your enquiry"}</h3><p>${lang==="de"?"Der Serverversand ist fehlgeschlagen.":"Server delivery failed."} ${detail?`<br><small>${detail.replace(/[&<>"]/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[ch]))}</small>`:""}</p><a class="btn" id="mt">${lang==="de"?"E-Mail öffnen":"Open email"}</a>`;$("#mt").href=mailto;btn.disabled=false;btn.textContent=t.f[5]};
if(location.protocol==="file:"){showFallback();return}
try{const res=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:$("#n").value.trim(),email:$("#m").value.trim(),company:$("#c").value.trim(),topic:$("#tp").value,message:$("#g").value.trim(),website:$("#hp").value,consent:$("#k").checked})});
if(!res.ok){let detail=`HTTP ${res.status}`;try{const data=await res.json();if(data&&data.error)detail+=`: ${data.error}`}catch(e){}throw new Error(detail)}const ok=$("#ok");ok.hidden=false;ok.innerHTML=`<h3>${t.okh}</h3><p>${t.okp}</p>`;f.hidden=true;ok.scrollIntoView({block:"center"})
}catch(err){showFallback(err&&err.message?err.message:"Unknown error")}})}
function render(){let h=location.hash.slice(1)||"home";if(!R.includes(h))h="home";
$("#main").innerHTML=page(h);chrome();bindForm();$("#nv").classList.remove("open");$("#bg").setAttribute("aria-expanded","false");$("#bg").textContent="☰";
document.title=(h==="home"?"Cateno Advisory":$("h1").textContent+" — Cateno Advisory");
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);setTimeout(()=>e.target.style.transitionDelay="",1200)}}),{threshold:.12});
document.querySelectorAll(".grid,.pager").forEach(g=>[...g.children].forEach((c,i)=>{if(c.classList.contains("rv"))c.style.transitionDelay=i*90+"ms"}));
document.querySelectorAll(".rv").forEach(el=>io.observe(el));window.scrollTo(0,0);$("#main").focus({preventScroll:true});document.body.style.overflow=""}
addEventListener("hashchange",render);
document.addEventListener("click",e=>{if(e.target.closest("#nv a")){menu(false)}const b=e.target.closest("[data-l]");if(b){lang=b.dataset.l;try{localStorage.setItem("cl",lang)}catch(x){}render()}});
const menu=o=>{$("#nv").classList.toggle("open",o);$("#bg").setAttribute("aria-expanded",o);$("#bg").textContent=o?"✕":"☰";document.body.style.overflow=o?"hidden":""};
$("#bg").onclick=()=>menu(!$("#nv").classList.contains("open"));
document.addEventListener("keydown",e=>{if(e.key==="Escape")menu(false)});
addEventListener("resize",()=>{if(innerWidth>1060)menu(false)});
addEventListener("scroll",()=>document.querySelector("header").classList.toggle("sc",scrollY>10),{passive:true});
render();

// Language state + helpers
let lang=(navigator.language||"en").startsWith("de")?"de":"en";
try{lang=localStorage.getItem("cl")||lang}catch(e){}
const $=s=>document.querySelector(s),R=["home","about","business","it","software","digital","industries","contact","impressum","privacy"];

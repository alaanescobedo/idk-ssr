function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequire3b77;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequire3b77=n),n.register("27Lyk",(function(t,r){var o,n;e(t.exports,"register",(()=>o),(e=>o=e)),e(t.exports,"resolve",(()=>n),(e=>n=e));var a={};o=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)a[t[r]]=e[t[r]]},n=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),n("27Lyk").register(JSON.parse('{"bi4EE":"register.3133ce91.js","4GD23":"cart-fill.87e67c8f.svg","cYON9":"person-circle.acf5b5fa.svg"}'));const a={CART:"sh_cart",USER:"current_user"},s=(e,t)=>localStorage.setItem(e,JSON.stringify(t)),i=e=>JSON.parse(localStorage.getItem(e));const d=e=>{return s(a.USER,{id:(t=e).id,username:t.username,email:t.email});var t},c=()=>i(a.USER);const l={PRODUCTS:"https://mockend.com/alaanescobedo/db-server/products",USERS:"https://mockend.com/alaanescobedo/db-server/users",EMAIL:"https://mockend.com/alaanescobedo/db-server/email",AUTH:"https://mockend.com/alaanescobedo/db-server/auth"};var f;f=new URL(n("27Lyk").resolve("4GD23"),import.meta.url).toString();var m;m=new URL(n("27Lyk").resolve("cYON9"),import.meta.url).toString();new URL(f),new URL(m);var u={get:async(e,{headers:t={}}={})=>{const r={method:"GET",headers:t},o=await fetch(e,r);return await o.json()},post:async(e,{body:t,headers:r={}}={})=>{const o={method:"POST",headers:{"Content-Type":"application/json",...r},body:JSON.stringify(t)},n=await fetch(e,o);return await n.json()}};const p=({data:e})=>u.post(`${l.USERS}`,{body:e}).catch((e=>{throw e}));const v=e=>{if(!e.checkValidity())throw e.classList.add("was-validated"),new Error("Form is not valid");return e.classList.remove("was-validated"),Object.fromEntries(new FormData(e))},h=document.getElementById("notify-form-error"),g=document.getElementById("notify-form-loader"),y=e=>{h.classList.add("d-none"),g.classList.remove("d-none")},b=e=>{console.log(e),h.classList.remove("d-none")},w=()=>g.classList.add("d-none");const E=document.getElementById("login-form");c()&&(location.href="/index.html"),E.addEventListener("submit",(async e=>{try{e.preventDefault(),y();const t=v(e.target),r=await p({data:t});d(r),location.href="/index.html"}catch(e){b(e)}finally{w()}}));
//# sourceMappingURL=register.3133ce91.js.map
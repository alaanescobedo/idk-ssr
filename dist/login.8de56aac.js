function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequire3b77;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequire3b77=n),n.register("27Lyk",(function(t,r){var o,n;e(t.exports,"register",(()=>o),(e=>o=e)),e(t.exports,"resolve",(()=>n),(e=>n=e));var a={};o=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)a[t[r]]=e[t[r]]},n=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),n("27Lyk").register(JSON.parse('{"kSfrd":"login.8de56aac.js","4GD23":"cart-fill.87e67c8f.svg","cYON9":"person-circle.acf5b5fa.svg"}'));const a={CART:"sh_cart",USER:"current_user"},s=(e,t)=>localStorage.setItem(e,JSON.stringify(t)),i=e=>JSON.parse(localStorage.getItem(e));const d=e=>{return s(a.USER,{id:(t=e).id,username:t.username,email:t.email});var t},l=()=>i(a.USER);const c={PRODUCTS:"https://mockend.com/alaanescobedo/db-server/products",USERS:"https://mockend.com/alaanescobedo/db-server/users",EMAIL:"https://mockend.com/alaanescobedo/db-server/email",AUTH:"https://mockend.com/alaanescobedo/db-server/auth"};var f;f=new URL(n("27Lyk").resolve("4GD23"),import.meta.url).toString();var m;m=new URL(n("27Lyk").resolve("cYON9"),import.meta.url).toString();new URL(f),new URL(m);var u={get:async(e,{headers:t={}}={})=>{const r={method:"GET",headers:t},o=await fetch(e,r);return await o.json()},post:async(e,{body:t,headers:r={}}={})=>{const o={method:"POST",headers:{"Content-Type":"application/json",...r},body:JSON.stringify(t)},n=await fetch(e,o);return await n.json()}};const v=document.getElementById("notify-form-error"),g=document.getElementById("notify-form-loader"),p=e=>{v.classList.add("d-none"),g.classList.remove("d-none")},h=e=>{console.log(e),v.classList.remove("d-none")},y=()=>g.classList.add("d-none");const b=e=>{if(!e.checkValidity())throw e.classList.add("was-validated"),new Error("Form is not valid");return e.classList.remove("was-validated"),Object.fromEntries(new FormData(e))};document.getElementById("login-form").addEventListener("submit",(async e=>{try{e.preventDefault(),p();b(e.target);const t=await u.get(`${c.USERS}/1`);d(t),location.href="/index.html"}catch(e){h(e)}finally{y()}})),l()&&(location.href="/index.html");
//# sourceMappingURL=login.8de56aac.js.map
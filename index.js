import{a as B,S as $,i as M}from"./assets/vendor-CucEYOFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const C="56762760-0b1ca4d58f75edda673894a64";async function p(t,r){try{return(await B.get("https://pixabay.com/api/?",{params:{key:C,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:24,page:r}})).data}catch(n){return console.log(n),[]}}const m=document.querySelector(".gallery"),L=document.querySelector(".loader"),v=document.querySelector(".load-more-btn");let O=new $(".gallery a",{captions:!1,captionsData:"alt",captionDelay:250});function f(t){const r=t.map(({largeImageURL:n,webformatURL:u,tags:e,likes:o,views:c,comments:q,downloads:P})=>`<li class="gallery-item">
<a href="${n}">
<img src="${u}" alt="${e}" width="360" height="152">
</a>
<ul class="image-info-list visually-hidden">
<li class="image-info-item">Likes
<p>${o}</p>
</li>
<li class="image-info-item">Views
<p>${c}</p>
</li>
<li class="image-info-item">Comments
<p>${q}</p>
</li>
<li class="image-info-item">Downloads
<p>${P}</p>
</li>
</ul>
</li>`).join("");m.insertAdjacentHTML("beforeend",r),O.refresh()}function x(){m.innerHTML=""}function b(){L.classList.add("load")}function w(){v.classList.add("load")}function a(){v.classList.remove("load")}function i(){L.classList.remove("load")}function y(){m.classList.add("gallery-active")}function h(){m.classList.remove("gallery-active")}const E=document.querySelector("form"),H=document.querySelector('input[type="text"]'),D=document.querySelector(".load-more-btn");let s=1,S=24,d;E.addEventListener("submit",T);D.addEventListener("click",W);async function T(t){try{if(t.preventDefault(),s=1,a(),h(),x(),d=H.value.trim(),!d)return;b();const r=await p(d,s);if(r.totalHits<=S)y(),f(r.hits),a(),i(),l("We're sorry, but you've reached the end of search results."),s=1;else if(r.hits.length)i(),y(),f(r.hits),w(),s+=1;else{a(),h(),i(),l("Sorry, there are no images matching your search query. Please, try again!");return}}catch{a(),h(),i(),l("Sorry, there are no images matching your search query. Please, try again!"),s=1}}function l(t){M.show({position:"topRight",theme:"dark",backgroundColor:"#EF4040",message:t,messageColor:"#fff",iconUrl:"./img/error.svg",messageSize:"16px"})}async function W(){try{a(),b();const t=await p(d,s);if(s*S>=t.totalHits)i(),a(),f(t.hits),g(),l("We're sorry, but you've reached the end of search results.");else if(t.hits.length)i(),f(t.hits),g(),w(),s+=1;else{a(),i(),l("We're sorry, but you've reached the end of search results.");return}}catch{a(),i(),l("We're sorry, but you've reached the end of search results."),s=1}}function g(){const t=document.querySelector(".gallery-item"),{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map

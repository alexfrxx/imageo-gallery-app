import{a as B,S as $,i as M}from"./assets/vendor-CucEYOFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const T="56762760-0b1ca4d58f75edda673894a64";async function g(t,r){try{return(await B.get("https://pixabay.com/api/?",{params:{key:T,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:24,page:r}})).data}catch(n){return console.log(n),[]}}const m=document.querySelector(".gallery"),L=document.querySelector(".loader"),v=document.querySelector(".load-more-btn");let C=new $(".gallery a",{captions:!1,captionsData:"alt",captionDelay:250});function f(t){const r=t.map(({largeImageURL:n,webformatURL:u,tags:e,likes:o,views:c,comments:q,downloads:P})=>`<li class="gallery-item">
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
</li>`).join("");m.insertAdjacentHTML("beforeend",r),C.refresh()}function E(){m.innerHTML=""}function b(){L.classList.add("load")}function w(){v.classList.add("load")}function i(){v.classList.remove("load")}function a(){L.classList.remove("load")}function y(){m.classList.add("gallery-active")}function h(){m.classList.remove("gallery-active")}function O(){window.scrollTo({top:0,behavior:"smooth"})}const x=document.querySelector("form"),H=document.querySelector('input[type="text"]'),D=document.querySelector(".load-more-btn"),W=document.querySelector(".scroll-up");let s=1,S=24,d;x.addEventListener("submit",k);D.addEventListener("click",z);W.addEventListener("click",O);async function k(t){try{if(t.preventDefault(),s=1,i(),h(),E(),d=H.value.trim(),!d)return;b();const r=await g(d,s);if(r.totalHits<=S)y(),f(r.hits),i(),a(),l("We're sorry, but you've reached the end of search results."),s=1;else if(r.hits.length)a(),y(),f(r.hits),w(),s+=1;else{i(),h(),a(),l("Sorry, there are no images matching your search query. Please, try again!");return}}catch{i(),h(),a(),l("Sorry, there are no images matching your search query. Please, try again!"),s=1}}function l(t){M.show({position:"topRight",theme:"dark",backgroundColor:"#EF4040",message:t,messageColor:"#fff",iconUrl:"./img/error.svg",messageSize:"16px"})}async function z(){try{i(),b();const t=await g(d,s);if(s*S>=t.totalHits)a(),i(),f(t.hits),p(),l("We're sorry, but you've reached the end of search results.");else if(t.hits.length)a(),f(t.hits),p(),w(),s+=1;else{i(),a(),l("We're sorry, but you've reached the end of search results.");return}}catch{i(),a(),l("We're sorry, but you've reached the end of search results."),s=1}}function p(){const t=document.querySelector(".gallery-item"),{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map

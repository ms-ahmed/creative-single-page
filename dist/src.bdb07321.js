parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
var e=document.querySelector(".hambourger"),t=document.querySelectorAll(".hambourger-item"),l=document.querySelector("#crossline-one"),n=document.querySelector("#crossline-two"),s=document.querySelector(".collapse-navbar-item"),o=document.querySelector(".hambourger-"),c=function(){new ResizeObserver(function(){769<header.clientWidth?(console.log(header.clientWidth),s.style.display="block"):(s.style.display="none",o.style.display="none")}).observe(header),e.addEventListener("click",function(e){Array.from(t).forEach(function(e){e.style.display="none"}),n.style.display="block",l.style.display="block",l.classList.add("before"),n.classList.add("after"),s.style.display="block",o.style.display="block"}),o.addEventListener("click",function(e){l.classList.remove("before"),n.classList.remove("after"),s.style.display="none",o.style.display="none",document.querySelector("#header"),Array.from(t).forEach(function(e){e.style.display="block"})})};c();var a=1;function r(e){u(a+=e)}u(a);var i=document.querySelector("#left"),d=document.querySelector("#right");function y(e){u(a=e)}function u(e){var t,l=document.getElementsByClassName("image-slider"),n=document.getElementsByClassName("text-span"),s=document.getElementsByClassName("date-span"),o=document.getElementsByClassName("title-black-div");for(e>l.length&&(a=1),e<1&&(a=l.length),t=0;t<l.length;t++)l[t].style.display="none",s[t].style.display="none",n[t].style.display="none",o[t].style.display="none";l[a-1].style.display="block",n[a-1].style.display="block",s[a-1].style.display="block",o[a-1].style.display="block"}i.addEventListener("click",function(e){r(-1)}),d.addEventListener("click",function(e){r(1)});
},{}]},{},["Focm"], null)
//# sourceMappingURL=/src.bdb07321.js.map
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
var e=function(){var e=document.querySelector(".hambourger"),t=document.querySelectorAll(".hambourger-item"),l=document.querySelector("#crossline-one"),s=document.querySelector("#crossline-two"),n=document.querySelector(".collapse-navbar-item");new ResizeObserver(function(){769<header.clientWidth?(console.log(header.clientWidth),n.style.display="block"):n.style.display="none"}).observe(header),e.addEventListener("mouseover",function(e){Array.from(t).forEach(function(e){e.style.display="none"}),s.style.display="block",l.style.display="block",l.classList.add("before"),s.classList.add("after"),n.style.display="block"}),e.addEventListener("mouseout",function(e){l.classList.remove("before"),s.classList.remove("after"),n.style.display="none",document.querySelector("#header"),Array.from(t).forEach(function(e){e.style.display="block"})})};e();var t=1;function l(e){a(t+=e)}a(t);var s=document.querySelector("#left"),n=document.querySelector("#right");function o(e){a(t=e)}function a(e){var l,s=document.getElementsByClassName("image-slider"),n=document.getElementsByClassName("text-span"),o=document.getElementsByClassName("date-span"),a=document.getElementsByClassName("title-black-div");for(e>s.length&&(t=1),e<1&&(t=s.length),l=0;l<s.length;l++)s[l].style.display="none",o[l].style.display="none",n[l].style.display="none",a[l].style.display="none";s[t-1].style.display="block",n[t-1].style.display="block",o[t-1].style.display="block",a[t-1].style.display="block"}s.addEventListener("click",function(e){l(-1)}),n.addEventListener("click",function(e){l(1)});
},{}]},{},["Focm"], null)
//# sourceMappingURL=/src.8d905033.js.map
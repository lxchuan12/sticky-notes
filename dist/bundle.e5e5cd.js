!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(4),n(5);var o={utils:{},store:{}};o.utils={$:function(e,t){return(t||document).querySelector(e)},formatTime:function(e){var t=new Date(e),n=t.getFullYear(),o=t.getMonth()+1,i=t.getDate(),r=t.getHours(),s=t.getMinutes(),c=t.getSeconds();function a(e){return e>9?e:"0"+e}return n+"-"+a(o)+"-"+a(i)+" "+a(r)+":"+a(s)+":"+a(c)}},o.store={__store_key:"__store_note",set:function(e,t){var n=this.getNotes();n[e]?Object.assign(n[e],t):n[e]=t,localStorage[this.__store_key]=JSON.stringify(n)},get:function(){var e=window.localStorage[this.__store_key];return JSON.parse(e)},remove:function(e){var t=this.getNotes();delete t[e],localStorage[this.__store_key]=JSON.stringify(t)},getNotes:function(){return JSON.parse(localStorage[this.__store_key]||"{}")}},function(e,t){var n,o,i=e.$,r=null,s=0,c='\n        <i class="u-close"></i>\n        <div class="u-edit"  contenteditable="true"></div>\n        <div class="m-time"><span>更新：</span><span class="u-timestamp">2017-07-02 15:09:02<span></div>';function a(e){var t=document.createElement("div");t.className="m-note",t.id=e.id||"m-note-"+Date.now(),t.innerHTML=c,i(".u-edit",t).innerHTML=e.content||"",t.style.left=e.left+"px",t.style.top=e.top+"px",t.style.zIndex=e.zIndex,document.body.appendChild(t),this.note=t,this.updateTime(e.updateTimeStamp),this.addEvent()}a.prototype.init=function(){var e=t.getNotes();Object.keys(e).forEach(function(t){var n=e[t];s<n.zIndex&&(s=n.zIndex),new a(Object.assign(n,{id:t}))}),s+=1},a.prototype.save=function(){var e={zIndex:this.note.style.zIndex,left:this.note.offsetLeft,top:this.note.offsetTop,content:i(".u-edit",this.note).innerHTML,updateTimeStamp:this.updateTimeInMS};t.set(this.note.id,e)},a.prototype.close=function(){document.body.removeChild(this.note)},a.prototype.updateTime=function(t){var n=t||Date.now(),o=e.formatTime(n);i(".m-time .u-timestamp",this.note).innerHTML=o,this.updateTimeInMS=n},a.prototype.addEvent=function(){let e=this;var c,a=i(".u-close",this.note),A=function(i){r=e.note,n=i.clientX-e.note.offsetLeft,o=i.clientY-e.note.offsetTop,r.style.zIndex!==s-1&&(r.style.zIndex=s++,t.set(r.id,{zIndex:s-1}))};e.note.addEventListener("mousedown",A);var u=i(".u-edit",e.note);u.addEventListener("input",function(n){var o=u.innerHTML;clearTimeout(c),c=setTimeout(function(){var n=Date.now();t.set(e.note.id,{content:o,updateTimeStamp:n}),e.updateTime(n)},300)});var d=function(n){t.remove(e.note.id),a.removeEventListener("click",d),e.note.removeEventListener("mousedown",A),e.close()};a.addEventListener("click",d)},document.addEventListener("DOMContentLoaded",function(e){var c;c=t.getNotes(),Object.keys(c).forEach(function(e){var t=c[e];s<t.zIndex&&(s=t.zIndex),new a(Object.assign(t,{id:e}))}),s+=1;i("#create").addEventListener("click",function(){new a({left:Math.floor(Math.random()*(window.innerWidth-200)),top:Math.floor(Math.random()*(window.innerHeight-250)),zIndex:s++}).save()}),i("#remove").addEventListener("click",function(){[...document.querySelectorAll(".u-close")].forEach(e=>{e.click()})}),document.addEventListener("mousemove",function(e){if(r){var t=(e=e||event).clientX-n,i=e.clientY-o,s=document.documentElement.clientWidth-r.offsetWidth,c=document.documentElement.clientHeight-r.offsetHeight;t<0?t=0:t>s&&(t=s),i<0?i=0:i>c&&(i=c),r.style.left=t+"px",r.style.top=i+"px"}}),document.addEventListener("mouseup",function(){r&&(t.set(r.id,{left:r.offsetLeft,top:r.offsetTop}),r=null)})})}(o.utils,o.store)},function(e,t){},,,function(e,t){e.exports="data:image/png;base64,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"},function(e,t,n){e.exports=n.p+"favicon.ico"}]);
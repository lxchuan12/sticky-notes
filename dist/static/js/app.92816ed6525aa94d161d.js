!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./",n(n.s="Vtdi")}({Vtdi:function(e,t,n){"use strict";function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}n("pLGG"),n("ZuTw");var i={utils:{},store:{}};i.utils={$:function(e,t){return(t||document).querySelector(e)},formatTime:function(e){var t=new Date(e),n=t.getFullYear(),o=t.getMonth()+1,i=t.getDate(),r=t.getHours(),u=t.getMinutes(),c=t.getSeconds();function a(e){return e>9?e:"0"+e}return n+"-"+a(o)+"-"+a(i)+" "+a(r)+":"+a(u)+":"+a(c)},on:document.addEventListener?function(e,t,n){e&&t&&n&&e.addEventListener(t,n,!1)}:function(e,t,n){e&&t&&n&&e.attachEvent("on"+t,n)},off:document.removeEventListener?function(e,t,n){e&&t&&n&&e.removeEventListener(t,n,!1)}:function(e,t,n){e&&t&&n&&e.detachEvent("on"+t,n)}},i.store={__store_key:"__store_note",set:function(e,t){var n=this.getNotes();n[e]?Object.assign(n[e],t):n[e]=t,localStorage[this.__store_key]=JSON.stringify(n)},get:function(){var e=window.localStorage[this.__store_key];return JSON.parse(e)},remove:function(e){var t=this.getNotes();delete t[e],localStorage[this.__store_key]=JSON.stringify(t)},getNotes:function(){return JSON.parse(localStorage[this.__store_key]||"{}")}},function(e,t){var n,i,r=e.$,u=e.formatTime,c=e.on,a=e.off,s=null,A=0,d='\n\t\t<i class="u-close"></i>\n\t\t<div class="u-bar"></div>\n\t\t<div class="u-edit"  contenteditable="true"></div>\n\t\t<div class="m-time"><span>更新：</span><span class="u-timestamp">2017-07-02 15:09:02<span></div>';function f(e){var t=document.createElement("div");t.className="m-note",t.id=e.id||"m-note-"+Date.now(),t.innerHTML=d,r(".u-edit",t).innerHTML=e.content||"",t.style.left=e.left+"px",t.style.top=e.top+"px",t.style.zIndex=e.zIndex,document.body.appendChild(t),this.note=t,this.updateTime(e.updateTimeStamp),this.addEvent()}f.prototype.init=function(){var e=t.getNotes();Object.keys(e).forEach(function(t){var n=e[t];A<n.zIndex&&(A=n.zIndex),new f(Object.assign(n,{id:t}))}),A+=1},f.prototype.save=function(){var e={zIndex:this.note.style.zIndex,left:this.note.offsetLeft,top:this.note.offsetTop,content:r(".u-edit",this.note).innerHTML,updateTimeStamp:this.updateTimeInMS};t.set(this.note.id,e)},f.prototype.close=function(){document.body.removeChild(this.note)},f.prototype.updateTime=function(e){var t=e||Date.now(),n=u(t);r(".m-time .u-timestamp",this.note).innerHTML=n,this.updateTimeInMS=t},f.prototype.addEvent=function(){var e,o=this,u=r(".u-close",this.note),d=function(e){(s=o.note).setCapture&&s.setCapture(),n=e.clientX-o.note.offsetLeft,i=e.clientY-o.note.offsetTop,s.style.zIndex!==A-1&&(s.style.zIndex=A++,t.set(s.id,{zIndex:A-1}))};c(r(".u-bar",o.note),"mousedown",d);var f=r(".u-edit",o.note);c(f,"input",function(n){var i=f.innerHTML;clearTimeout(e),e=setTimeout(function(){var e=Date.now();t.set(o.note.id,{content:i,updateTimeStamp:e}),o.updateTime(e)},300)}),c(u,"click",function e(n){(""===f.innerHTML||window.confirm("是否要删除此便签？"))&&(t.remove(o.note.id),a(u,"click",e),a(o.note,"mousedown",d),o.close())})},c(document,"DOMContentLoaded",function(e){var u;u=t.getNotes(),Object.keys(u).forEach(function(e){var t=u[e];A<t.zIndex&&(A=t.zIndex),new f(Object.assign(t,{id:e}))}),A+=1,c(r("#create"),"click",function(){new f({left:Math.floor(Math.random()*(window.innerWidth-200)),top:Math.floor(Math.random()*(window.innerHeight-250)),zIndex:A++}).save()}),c(document,"mousemove",function(e){if(s){var t=e.clientX-n,o=e.clientY-i,r=document.documentElement.clientWidth-s.offsetWidth,u=document.documentElement.clientHeight-s.offsetHeight;t<0?t=0:t>r&&(t=r),o<0?o=0:o>u&&(o=u),s.style.left=t+"px",s.style.top=o+"px"}}),c(document,"mouseup",function(){s&&(t.set(s.id,{left:s.offsetLeft,top:s.offsetTop}),s.releaseCapture&&s.releaseCapture(),s=null)}),c(r("#remove"),"click",function(){[].concat(o(document.querySelectorAll(".m-note"))).length>0&&!window.confirm("是否要清除所有便签？")||[].concat(o(document.querySelectorAll(".u-close"))).forEach(function(e){e.click()})})})}(i.utils,i.store)},ZuTw:function(e,t){e.exports="data:image/png;base64,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"},pLGG:function(e,t){}});
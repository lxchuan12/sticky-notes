!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./",n(n.s="Vtdi")}({"9tPo":function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},I1BE:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n,o=e[1]||"",r=e[3];if(!r)return o;if(t&&"function"==typeof btoa){var i=(n=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),s=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[o].concat(s).concat([i]).join("\n")}return[o].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},LAEO:function(e,t,n){var o=n("sEG9");(e.exports=n("I1BE")(!1)).push([e.i,'/**\n * @file index.css\n * @desc 便签样式\n * @version 0.1.2\n * @author 轩辕Rowboat <lxchuan12@163.com>\n * @date 2017-07-02\n * @update 2018-05-06\n * @copyright 2017\n */\n* {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  font: 14px/1.3 "\\5FAE\\8F6F\\96C5\\9ED1";\n  margin: 20px;\n}\n#create,\n#remove {\n  margin: 10px;\n  width: 100px;\n  height: 30px;\n  line-height: 30px;\n  border: none;\n  font-size: 14px;\n  background: #ccc;\n  cursor: pointer;\n  outline: none;\n  border-radius: 5px;\n}\n#create:hover,\n#remove:hover {\n  background: #e3e3e3;\n}\n.m-note {\n  position: absolute;\n  left: 20px;\n  top: 70px;\n  width: 200px;\n  min-height: 276px;\n  max-height: 452px;\n  background-color: #C4E5FF;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);\n}\n.m-note .u-edit {\n  box-sizing: border-box;\n  width: 200px;\n  min-height: 250px;\n  max-height: 400px;\n  padding: 10px;\n  outline: none;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.m-note:hover .u-close {\n  display: block;\n}\n.m-note .u-bar {\n  height: 26px;\n  background: #0179D7;\n  cursor: move;\n}\n.m-note .u-close {\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  left: -15px;\n  top: -15px;\n  background: url('+o(n("ZuTw"))+") no-repeat;\n  display: none;\n  cursor: pointer;\n}\n.m-note .m-time {\n  line-height: 26px;\n  height: 26px;\n  padding: 0 10px;\n  background-color: #C4E5FF;\n}\n",""])},Vtdi:function(e,t,n){"use strict";function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}n("pLGG"),n("ZuTw"),n("m1cd");var r={utils:{},store:{}};r.utils={$:function(e,t){return(t||document).querySelector(e)},formatTime:function(e){var t=new Date(e),n=t.getFullYear(),o=t.getMonth()+1,r=t.getDate(),i=t.getHours(),s=t.getMinutes(),a=t.getSeconds();function c(e){return e>9?e:"0"+e}return n+"-"+c(o)+"-"+c(r)+" "+c(i)+":"+c(s)+":"+c(a)},on:document.addEventListener?function(e,t,n){e&&t&&n&&e.addEventListener(t,n,!1)}:function(e,t,n){e&&t&&n&&e.attachEvent("on"+t,n)},off:document.removeEventListener?function(e,t,n){e&&t&&n&&e.removeEventListener(t,n,!1)}:function(e,t,n){e&&t&&n&&e.detachEvent("on"+t,n)}},r.store={__store_key:"__store_note",set:function(e,t){var n=this.getNotes();n[e]?Object.assign(n[e],t):n[e]=t,localStorage[this.__store_key]=JSON.stringify(n)},get:function(){var e=window.localStorage[this.__store_key];return JSON.parse(e)},remove:function(e){var t=this.getNotes();delete t[e],localStorage[this.__store_key]=JSON.stringify(t)},getNotes:function(){return JSON.parse(localStorage[this.__store_key]||"{}")}},function(e,t){var n,r,i=e.$,s=e.formatTime,a=e.on,c=e.off,u=null,f=0,d='\n\t\t<i class="u-close"></i>\n\t\t<div class="u-bar"></div>\n\t\t<div class="u-edit"  contenteditable="true"></div>\n\t\t<div class="m-time"><span>更新：</span><span class="u-timestamp">2017-07-02 15:09:02<span></div>';function l(e){var t=document.createElement("div");t.className="m-note",t.id=e.id||"m-note-"+Date.now(),t.innerHTML=d,i(".u-edit",t).innerHTML=e.content||"",t.style.left=e.left+"px",t.style.top=e.top+"px",t.style.zIndex=e.zIndex,document.body.appendChild(t),this.note=t,this.updateTime(e.updateTimeStamp),this.addEvent()}l.prototype.init=function(){var e=t.getNotes();Object.keys(e).forEach(function(t){var n=e[t];f<n.zIndex&&(f=n.zIndex),new l(Object.assign(n,{id:t}))}),f+=1},l.prototype.save=function(){var e={zIndex:this.note.style.zIndex,left:this.note.offsetLeft,top:this.note.offsetTop,content:i(".u-edit",this.note).innerHTML,updateTimeStamp:this.updateTimeInMS};t.set(this.note.id,e)},l.prototype.close=function(){document.body.removeChild(this.note)},l.prototype.updateTime=function(e){var t=e||Date.now(),n=s(t);i(".m-time .u-timestamp",this.note).innerHTML=n,this.updateTimeInMS=t},l.prototype.addEvent=function(){var e,o=this,s=i(".u-close",this.note),d=function(e){(u=o.note).setCapture&&u.setCapture(),n=e.clientX-o.note.offsetLeft,r=e.clientY-o.note.offsetTop,u.style.zIndex!==f-1&&(u.style.zIndex=f++,t.set(u.id,{zIndex:f-1}))};a(i(".u-bar",o.note),"mousedown",d);var l=i(".u-edit",o.note);a(l,"input",function(n){var r=l.innerHTML;clearTimeout(e),e=setTimeout(function(){var e=Date.now();t.set(o.note.id,{content:r,updateTimeStamp:e}),o.updateTime(e)},300)}),a(s,"click",function e(n){(""===l.innerHTML||window.confirm("是否要删除此便签？"))&&(t.remove(o.note.id),c(s,"click",e),c(o.note,"mousedown",d),o.close())})},a(document,"DOMContentLoaded",function(e){var s;s=t.getNotes(),Object.keys(s).forEach(function(e){var t=s[e];f<t.zIndex&&(f=t.zIndex),new l(Object.assign(t,{id:e}))}),f+=1,a(i("#create"),"click",function(){new l({left:Math.floor(Math.random()*(window.innerWidth-200)),top:Math.floor(Math.random()*(window.innerHeight-250)),zIndex:f++}).save()}),a(document,"mousemove",function(e){if(u){var t=e.clientX-n,o=e.clientY-r,i=document.documentElement.clientWidth-u.offsetWidth,s=document.documentElement.clientHeight-u.offsetHeight;t<0?t=0:t>i&&(t=i),o<0?o=0:o>s&&(o=s),u.style.left=t+"px",u.style.top=o+"px"}}),a(document,"mouseup",function(){u&&(t.set(u.id,{left:u.offsetLeft,top:u.offsetTop}),u.releaseCapture&&u.releaseCapture(),u=null)}),a(i("#remove"),"click",function(){[].concat(o(document.querySelectorAll(".m-note"))).length>0&&!window.confirm("是否要清除所有便签？")||[].concat(o(document.querySelectorAll(".u-close"))).forEach(function(e){e.click()})})})}(r.utils,r.store)},ZuTw:function(e,t){e.exports="data:image/png;base64,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"},"aET+":function(e,t,n){var o,r,i={},s=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),a=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),c=null,u=0,f=[],d=n("9tPo");function l(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=i[o.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](o.parts[s]);for(;s<o.parts.length;s++)r.parts.push(g(o.parts[s],t))}else{var a=[];for(s=0;s<o.parts.length;s++)a.push(g(o.parts[s],t));i[o.id]={id:o.id,refs:1,parts:a}}}}function p(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],s=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};o[s]?o[s].parts.push(a):n.push(o[s]={id:s,parts:[a]})}return n}function h(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=f[f.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,r)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function A(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),v(t,e.attrs),h(e,t),t}function v(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function g(e,t){var n,o,r,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var s=u++;n=c||(c=A(t)),o=x.bind(null,n,s,!1),r=x.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),h(e,t),t}(t),o=function(e,t,n){var o=n.css,r=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=d(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([o],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,t),r=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=A(t),o=function(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){m(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return l(n,t),function(e){for(var o=[],r=0;r<n.length;r++){var s=n[r];(a=i[s.id]).refs--,o.push(a)}for(e&&l(p(e,t),t),r=0;r<o.length;r++){var a;if(0===(a=o[r]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var b,y=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function x(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}},m1cd:function(e,t,n){e.exports=n.p+"static/img/faviconb20fe94.ico"},pLGG:function(e,t,n){var o=n("LAEO");"string"==typeof o&&(o=[[e.i,o,""]]);n("aET+")(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},sEG9:function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}}});
//# sourceMappingURL=app.f6604f8ad4d82640c245.js.map
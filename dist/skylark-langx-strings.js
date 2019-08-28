/**
 * skylark-langx-strings - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(e,r){var t=r.define,n=r.require,a="function"==typeof t&&t.amd,i=!a&&"undefined"!=typeof exports;if(!a&&!t){var u={};t=r.define=function(e,r,t){"function"==typeof t?(u[e]={factory:t,deps:r.map(function(r){return function(e,r){if("."!==e[0])return e;var t=r.split("/"),n=e.split("/");t.pop();for(var a=0;a<n.length;a++)"."!=n[a]&&(".."==n[a]?t.pop():t.push(n[a]));return t.join("/")}(r,e)}),resolved:!1,exports:null},n(e)):u[e]={factory:null,resolved:!0,exports:t}},n=r.require=function(e){if(!u.hasOwnProperty(e))throw new Error("Module "+e+" has not been defined");var t=u[e];if(!t.resolved){var a=[];t.deps.forEach(function(e){a.push(n(e))}),t.exports=t.factory.apply(r,a)||null,t.resolved=!0}return t.exports}}if(!t)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(e,r){e("skylark-langx-strings/strings",["skylark-langx-ns"],function(e){var r=Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"});function t(e){return r[e]}var n=/[&<>"'`=]/g;var a=0;function i(e,r){var t,n,a,i,u,c,o,l=arguments.callee;return l.cache[e]||(l.cache[e]=(t=e,n=/^[\w\-]+$/.test(e)?l.get(e):(t="template(string)",e),a=1,i=("try { "+(l.variable?"var "+l.variable+" = this.stash;":"with (this.stash) { ")+"this.ret += '"+n.replace(/<%/g,"").replace(/%>/g,"").replace(/'(?![^\x11\x13]+?\x13)/g,"\\x27").replace(/^\s*|\s*$/g,"").replace(/\n|\r\n/g,function(){return"';\nthis.line = "+ ++a+"; this.ret += '\\n"}).replace(/\x11=raw(.+?)\x13/g,"' + ($1) + '").replace(/\x11=(.+?)\x13/g,"' + this.escapeHTML($1) + '").replace(/\x11(.+?)\x13/g,"'; $1; this.ret += '")+"'; "+(l.variable?"":"}")+"return this.ret;} catch (e) { throw 'TemplateError: ' + e + ' (on "+t+"' + ' line ' + this.line + ')'; } //@ sourceURL="+t+"\n").replace(/this\.ret \+= '';/g,""),u=new Function(i),c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#x22;","'":"&#x27;"},o=function(e){return(""+e).replace(/[&<>\'\"]/g,function(e){return c[e]})},function(e){return u.call(l.context={escapeHTML:o,line:1,ret:"",stash:e})})),r?l.cache[e](r):l.cache[e]}return i.cache={},i.get=function(e){return document.getElementById(e).innerHTML},e.attach("langx.strings",{camelCase:function(e){return e.replace(/-([\da-z])/g,function(e){return e.toUpperCase().replace("-","")})},dasherize:function(e){return e.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()},deserializeValue:function(e){try{return e?"true"==e||"false"!=e&&("null"==e?null:+e+""==e?+e:/^[\[\{]/.test(e)?JSON.parse(e):e):e}catch(r){return e}},escapeHTML:function(e){if(null==e)return"";if(!e)return String(e);return e.toString().replace(n,t)},generateUUID:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var r=16*Math.random()|0,t="x"===e?r:3&r|8;return t.toString(16)})},lowerFirst:function(e){return e.charAt(0).toLowerCase()+e.slice(1)},rtrim:function(e){return e.replace(/\s+$/g,"")},serializeValue:function(e){return JSON.stringify(e)},substitute:function(e,r,t,n){function a(e,r){if(e.match(/\./)){var t,n=function(e,r){var a=e.pop();return a?r[a]?n(e,t=r[a]):null:t};return n(e.split(".").reverse(),r)}return r[e]}return n=n||window,t=t?proxy(n,t):function(e){return e},e.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g,function(e,i,u){var c=a(i,r);return u&&(c=a(u,n).call(n,c,i)),t(c,i).toString()})},slugify:function(e){e=(e=e.replace(/^\s+|\s+$/g,"")).toLowerCase();for(var r="ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;",t=0,n=r.length;t<n;t++)e=e.replace(new RegExp(r.charAt(t),"g"),"AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------".charAt(t));return e=e.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")},template:i,trim:function(e){return null==e?"":String.prototype.trim.call(e)},uniqueId:function(e){var r=++a+"";return e?e+r:r},upperFirst:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}})}),e("skylark-langx-strings/main",["./strings"],function(e){return e}),e("skylark-langx-strings",["skylark-langx-strings/main"],function(e){return e})}(t),!a){var c=n("skylark-langx/skylark");i?module.exports=c:r.skylarkjs=c}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-langx-strings.js.map

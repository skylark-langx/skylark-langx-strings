/**
 * skylark-langx-string - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(r,e){var n=e.define,t=e.require,a="function"==typeof n&&n.amd,i=!a&&"undefined"!=typeof exports;if(!a&&!n){var u={};n=e.define=function(r,e,n){"function"==typeof n?(u[r]={factory:n,deps:e.map(function(e){return function(r,e){if("."!==r[0])return r;var n=e.split("/"),t=r.split("/");n.pop();for(var a=0;a<t.length;a++)"."!=t[a]&&(".."==t[a]?n.pop():n.push(t[a]));return n.join("/")}(e,r)}),resolved:!1,exports:null},t(r)):u[r]={factory:null,resolved:!0,exports:n}},t=e.require=function(r){if(!u.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var n=u[r];if(!n.resolved){var a=[];n.deps.forEach(function(r){a.push(t(r))}),n.exports=n.factory.apply(e,a)||null,n.resolved=!0}return n.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,e){r("skylark-langx-ns/_attach",[],function(){return function(r,e,n){"string"==typeof e&&(e=e.split("."));for(var t=e.length,a=r,i=0,u=e[i++];i<t;)a=a[u]=a[u]||{},u=e[i++];return a[u]=n}}),r("skylark-langx-ns/ns",["./_attach"],function(r){var e={attach:function(n,t){return r(e,n,t)}};return e}),r("skylark-langx-ns/main",["./ns"],function(r){return r}),r("skylark-langx-ns",["skylark-langx-ns/main"],function(r){return r}),r("skylark-langx-string/strings",["skylark-langx-ns"],function(r){var e=Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"});function n(r){return e[r]}var t=/[&<>"'`=]/g;var a=0;function i(r,e){var n,t,a,i,u,l,c,o=arguments.callee;return o.cache[r]||(o.cache[r]=(n=r,t=/^[\w\-]+$/.test(r)?o.get(r):(n="template(string)",r),a=1,i=("try { "+(o.variable?"var "+o.variable+" = this.stash;":"with (this.stash) { ")+"this.ret += '"+t.replace(/<%/g,"").replace(/%>/g,"").replace(/'(?![^\x11\x13]+?\x13)/g,"\\x27").replace(/^\s*|\s*$/g,"").replace(/\n|\r\n/g,function(){return"';\nthis.line = "+ ++a+"; this.ret += '\\n"}).replace(/\x11=raw(.+?)\x13/g,"' + ($1) + '").replace(/\x11=(.+?)\x13/g,"' + this.escapeHTML($1) + '").replace(/\x11(.+?)\x13/g,"'; $1; this.ret += '")+"'; "+(o.variable?"":"}")+"return this.ret;} catch (e) { throw 'TemplateError: ' + e + ' (on "+n+"' + ' line ' + this.line + ')'; } //@ sourceURL="+n+"\n").replace(/this\.ret \+= '';/g,""),u=new Function(i),l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#x22;","'":"&#x27;"},c=function(r){return(""+r).replace(/[&<>\'\"]/g,function(r){return l[r]})},function(r){return u.call(o.context={escapeHTML:c,line:1,ret:"",stash:r})})),e?o.cache[r](e):o.cache[r]}return i.cache={},i.get=function(r){return document.getElementById(r).innerHTML},r.attach("langx.strings",{camelCase:function(r){return r.replace(/-([\da-z])/g,function(r){return r.toUpperCase().replace("-","")})},dasherize:function(r){return r.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()},deserializeValue:function(r){try{return r?"true"==r||"false"!=r&&("null"==r?null:+r+""==r?+r:/^[\[\{]/.test(r)?JSON.parse(r):r):r}catch(e){return r}},escapeHTML:function(r){if(null==r)return"";if(!r)return String(r);return r.toString().replace(t,n)},generateUUID:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(r){var e=16*Math.random()|0,n="x"===r?e:3&e|8;return n.toString(16)})},lowerFirst:function(r){return r.charAt(0).toLowerCase()+r.slice(1)},rtrim:function(r){return r.replace(/\s+$/g,"")},serializeValue:function(r){return JSON.stringify(r)},substitute:function(r,e,n,t){function a(r,e){if(r.match(/\./)){var n,t=function(r,e){var a=r.pop();return a?e[a]?t(r,n=e[a]):null:n};return t(r.split(".").reverse(),e)}return e[r]}return t=t||window,n=n?proxy(t,n):function(r){return r},r.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g,function(r,i,u){var l=a(i,e);return u&&(l=a(u,t).call(t,l,i)),n(l,i).toString()})},slugify:function(r){r=(r=r.replace(/^\s+|\s+$/g,"")).toLowerCase();for(var e="ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;",n=0,t=e.length;n<t;n++)r=r.replace(new RegExp(e.charAt(n),"g"),"AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------".charAt(n));return r=r.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")},template:i,trim:function(r){return null==r?"":String.prototype.trim.call(r)},uniqueId:function(r){var e=++a+"";return r?r+e:e},upperFirst:function(r){return r.charAt(0).toUpperCase()+r.slice(1)}})}),r("skylark-langx-string/main",["./strings"],function(r){return r}),r("skylark-langx-string",["skylark-langx-string/main"],function(r){return r})}(n),!a){var l=t("skylark-langx/skylark");i?module.exports=l:e.skylarkjs=l}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-langx-string-all.js.map

/**
 * skylark-langx-strings - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./strings"],function(n){var e=/(.)^/,t={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},r=/\\|'|\r|\n|\u2028|\u2029/g,a=function(n){return"\\"+t[n]};function u(n,t,_){!t&&_&&(t=_),t=Object.assign({},u.templateSettings,t);var c=RegExp([(t.escape||e).source,(t.interpolate||e).source,(t.evaluate||e).source].join("|")+"|$","g"),i=0,o="__p+='";n.replace(c,function(e,t,u,_,c){return o+=n.slice(i,c).replace(r,a),i=c+e.length,t?o+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":u?o+="'+\n((__t=("+u+"))==null?'':__t)+\n'":_&&(o+="';\n"+_+"\n__p+='"),e}),o+="';\n",t.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{var l=new Function(t.variable||"obj","_",o)}catch(n){throw n.source=o,n}var s=this,p=function(n){return l.call(s,n,s)},g=t.variable||"obj";return p.source="function("+g+"){\n"+o+"}",p}return u.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},n.template=u});
//# sourceMappingURL=sourcemaps/template.js.map

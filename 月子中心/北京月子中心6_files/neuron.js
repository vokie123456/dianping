!function(n){"use strict";function t(n,t){for(var r in t)n[r]||(n[r]=t[r])}function r(n,r){t(n.prototype,r)}function i(n){var t=n.match(U),r=t[1],i=t[2]||"*",o=t[3]||"";return e({n:r,v:i,p:o})}function e(n){var t=n.n+"@"+n.v;return n.id=t+n.p,n.k=t,n}function o(n,t){return t.map?n:n+".js"}function a(n,t){for(var r in t)n[r]=t[r]}function f(n){var t=n.match(V);return t?t[0]:n}function u(n,t){return h(f(t.p).slice(1),n)}function c(n,t){return n=u(n,t),n?t.k+"/"+n:t.k}function h(n,t){var r=(n+"/"+t).split("/").filter(Boolean);return s(r).join("/")}function s(n){for(var t=0,r=n.length-1;r>=0;r--){var i=n[r];"."===i?n.splice(r,1):".."===i?(n.splice(r,1),t++):t&&(n.splice(r,1),t--)}for(;t--;)n.unshift("..");return n}function l(n){return 0===n.indexOf("./")||0===n.indexOf("../")}function d(n){throw new Error("neuron: "+n)}function v(n){d("Cannot find module '"+n+"'")}function p(n){return W[n]||(W[n]=[])}function g(n,t){p(n).push(t)}function m(n,t){var r=p(n);r.forEach(function(n){n(t)})}function y(n,t){n||d("null id"),t||(t={});var r=t.map||{};n=r[n]||n;var a,f=l(n);if(f?(t.id||v(n),n=c(n,t),n=o(n,t),a=i(n)):(n=t.m&&t.m[n]||n,a=i(n)),a.k===t.k)a.graph=t.graph;else{var u=w(a.k,t.graph)||[];a.graph=u,a.v=u[0]||a.v,e(a)}return a}function w(n,t){var r=rt.graph._,i=t?t[1]:r;return i&&n in i?rt.graph[i[n]]:r}function k(n){return n.loaded?n.exports:O(n)}function O(n){n.loaded=!0;var t=n.exports={},r=P(n.id),i=f(r),e=n.factory;return e(R(n),t,n,r,i),n.exports}function b(n,t,r){var i=y(n,t),e=i.graph,o=E(i),a=o.main?i.k:i.id,f=e[a];return f||(!r||v(n),f=e[a]=j(o),f.graph=e,f.g||(f.g=X++)),f}function x(n,t){G.ready(n,function(){t(k(n))})}function E(n){var t=n.id;return et[t]||(et[t]={n:n.n,v:n.v,p:n.p,id:t,k:n.k,m:{},l:[],main:!n.p})}function j(n){function t(){this.r=[]}return t.prototype=n,new t}function S(n){!~n.indexOf("@")||d("id with '@' is prohibited")}function R(n){var t=function(t){S(t);var r=b(t,n,!0);return k(r)};return t.async=function(t,r){var i=t;if(r){S(t);var e=l(t);if(e){t=c(t,n);var a=n.entries;t=a?L(t,a)||L(t+".js",a)||L(t+".json",a)||v(i):o(t,n)}var f=b(t,n);if(!f.main){if(!e)return;f.a=!0}x(f,r)}},t.resolve=function(t){return l(t)&&(t=u(t,n),!~t.indexOf("../"))?P(n.k+"/"+t):void 0},t}function L(n,t){return~t.indexOf(n)?n:J}function M(n){var t=Y.createElement("script");t.src=n,t.async=!0,nt(t,function(){Z.removeChild(t)}),setTimeout(function(){Z.insertBefore(t,Z.firstChild)},0)}function $(n,t,r,i){i||(i={});var f=y(n);f.p&&(f.p=o(f.p,i),e(f));var u,c=f.k;i.main&&(u=et[c]);var h=et[f.id]=u||et[f.id]||E(f);if(i.main&&(et[c]=h,a(h,f)),a(h,i),!h.factory){h.factory=r,h.deps=t,_(t,h.m);var s=i.asyncDeps;s&&_(s,h.m),B(h,"l")}}function _(n,t){n.forEach(function(n){var r=n.split("@")[0];t[r]=n})}function B(n,t){var r,i=n[t];for(n[t]=J;r=i.pop();)r()}function C(n,t){var r=et[n.id];r.f=n.f,r.a=n.a;var i=r.l;i&&(i.push(t),i.length<2&&I(r))}function I(n){if(!n.d){n.d=!0;var t=n.f,r=n.a,i=n.k;if(~tt.indexOf(i)){if(!t&&!r)return}else tt.push(i);var e=rt.loaded,o=t?n.id:i;if(~e.indexOf(o)){if(!r)return}else e.push(o);M(N(n))}}function N(n){var t=n.main?n.k+"/"+n.n+".js":n.id;return P(t)}function P(n){var t=n.replace("@","/"),r=rt.path;return r||d("config.path must be specified"),r=r.replace("{n}",t.length%3+1),t+=rt.cache===!1?"?f="+K:"",r+t}function T(n,t,r){if(m("beforeready",A(n)+":"+n.g),!n.factory)return m("beforeload",n.id),C(n,function(){m("load",A(n)),T(n,t,r)});var i=n.deps,e=i.length,o=n.r;if(!e||!o)return n.r=J,D(n),t();if(o.push(t),!(o.length>1)){var a=function(){--e||(r.length=0,r=H,D(n),B(n,"r"))};r=r?[n].concat(r):[n],i.forEach(function(t){var i=b(t,n);return~r.indexOf(i)?a():void T(i,a,r)})}}function D(n){m("ready",A(n)+":"+n.g)}function A(n){return n.main?n.k:n.id}function q(n){return n}function z(n){var t,r;for(t in n)r=it[t],r&&(rt[t]=r(n[t]))}function F(n,t){var r=b(n);r.f=!0,x(r,t)}var G={version:"7.1.4"},H=null,J=!1,K=+new Date;G.ready=function(n,t){t()};var Q=TypeError;r(Array,{indexOf:function(n,t){var r=this.length>>>0;for(t=Number(t)||0,t=Math[0>t?"ceil":"floor"](t),0>t&&(t=Math.max(t+r,0));r>t;t++)if(t in this&&this[t]===n)return t;return-1},lastIndexOf:function(n,t){var r=this.length>>>0;for(t=Number(t)||r-1,t=Math[0>t?"ceil":"floor"](t),0>t&&(t+=r),t=Math.min(t,r-1);t>=0;t--)if(t in this&&this[t]===n)return t;return-1},filter:function(n,t){for(var r=[],i=0,e=this.length;e>i;i++)i in this&&n.call(t,this[i],i,this)&&r.push(this[i]);return r},forEach:function(n,t){for(var r=0,i=this.length;i>r;r++)r in this&&n.call(t,this[r],r,this)},every:function(n,t){for(var r=0,i=this.length;i>r;r++)if(r in this&&!n.call(t,this[r],r,this))return!1;return!0},map:function(n,t){for(var r=[],i=0,e=this.length;e>i;i++)i in this&&(r[i]=n.call(t,this[i],i,this));return r},some:function(n,t){for(var r=0,i=this.length;i>r;r++)if(r in this&&n.call(t,this[r],r,this))return!0;return!1},reduce:function(n){if("function"!=typeof n)throw new Q(n+" is not an function");var t,r=this,i=r.length>>>0,e=0;if(arguments.length>1)t=arguments[1];else for(;;){if(e in r){t=r[e++];break}if(++e>=i)throw new Q("Reduce of empty array with on initial value")}for(;i>e;e++)e in r&&(t=n.call(H,t,r[e],e,r));return t},reduceRight:function(n){if("function"!=typeof n)throw new Q(n+" is not an function");var t,r=this,i=r.length>>>0,e=i-1;if(arguments.length>1)t=arguments[1];else for(;;){if(e in r){t=r[e--];break}if(--e<0)throw new Q("Reduce of empty array with on initial value")}for(;e>=0;e--)e in r&&(t=n.call(H,t,r[e],e,r));return t}}),t(Object,{keys:function(){var n=Object.prototype.hasOwnProperty,t=!{toString:""}.propertyIsEnumerable("toString"),r=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],i=r.length;return function(e){if(e!==Object(e))throw new Q("Object.keys called on non-object");var o,a=[];for(o in e)n.call(e,o)&&a.push(o);if(t)for(var f=0;i>f;f++)n.call(e,r[f])&&a.push(r[f]);return a}}()}),r(String,{trimLeft:function(){return this.replace(/^\s+/,"")},trimRight:function(){return this.replace(/\s+$/,"")},trim:function(){return this.trimLeft().trimRight()}});var U=/^((?:[^\/])+?)(?:@([^\/]+))?(\/.*)?$/,V=/.*(?=\/.*$)/,W={};G.on=g;var X=1,Y=document,Z=Y.getElementsByTagName("head")[0],nt=Y.createElement("script").readyState?function(n,t){n.onreadystatechange=function(){var r=n.readyState;("loaded"===r||"complete"===r)&&(n.onreadystatechange=H,t.call(this))}}:function(n,t){n.addEventListener("load",t,!1)},tt=[];G.ready=T;var rt=G.conf={loaded:[],graph:{_:{}}},it={path:function(n){return n.replace(/\/*$/,"/")},loaded:q,graph:q,cache:q};G.config=z,n.neuron=G,n.define=$,n.facade=function(n){F(n.entry,function(t){t.init&&t.init(n.data)})},n._use=function(n,t){F(n,t)},n._load=M;var et=G.mods={}}(this);
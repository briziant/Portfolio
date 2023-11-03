import{s as A,d as D,c as g,u as P,g as F,f as G,h as z,e as j}from"./scheduler.d329acd7.js";import{S as H,i as J,B,e as d,C as E,j as S,f as m,D as k,a as b,z as K,d as L,t as M,A as O}from"./index.162bcc66.js";import{e as C}from"./each.e59479a4.js";function q(o,e){const n={},s={},t={$$scope:1};let f=o.length;for(;f--;){const a=o[f],u=e[f];if(u){for(const r in a)r in u||(s[r]=1);for(const r in u)t[r]||(n[r]=u[r],t[r]=1);o[f]=u}else for(const r in a)t[r]=1}for(const a in s)a in n||(n[a]=void 0);return n}function X(o){return typeof o=="object"&&o!==null?o:{}}var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function I(o,e,n){const s=o.slice();return s[9]=e[n][0],s[10]=e[n][1],s}function v(o){let e,n=[o[10]],s={};for(let t=0;t<n.length;t+=1)s=g(s,n[t]);return{c(){e=B(o[9]),this.h()},l(t){e=E(t,o[9],{}),S(e).forEach(m),this.h()},h(){k(e,s)},m(t,f){b(t,e,f)},p(t,f){k(e,s=q(n,[f&16&&t[10]]))},d(t){t&&m(e)}}}function w(o){let e=o[9],n,s=o[9]&&v(o);return{c(){s&&s.c(),n=d()},l(t){s&&s.l(t),n=d()},m(t,f){s&&s.m(t,f),b(t,n,f)},p(t,f){t[9]?e?A(e,t[9])?(s.d(1),s=v(t),e=t[9],s.c(),s.m(n.parentNode,n)):s.p(t,f):(s=v(t),e=t[9],s.c(),s.m(n.parentNode,n)):e&&(s.d(1),s=null,e=t[9])},d(t){t&&m(n),s&&s.d(t)}}}function Q(o){let e,n,s,t,f=C(o[4]),a=[];for(let l=0;l<f.length;l+=1)a[l]=w(I(o,f,l));const u=o[8].default,r=D(u,o,o[7],null);let _=[y,o[5],{width:o[2]},{height:o[2]},{stroke:o[1]},{"stroke-width":o[3]},{class:s=`tabler-icon tabler-icon-${o[0]} ${o[6].class??""}`}],h={};for(let l=0;l<_.length;l+=1)h=g(h,_[l]);return{c(){e=B("svg");for(let l=0;l<a.length;l+=1)a[l].c();n=d(),r&&r.c(),this.h()},l(l){e=E(l,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var i=S(e);for(let c=0;c<a.length;c+=1)a[c].l(i);n=d(),r&&r.l(i),i.forEach(m),this.h()},h(){k(e,h)},m(l,i){b(l,e,i);for(let c=0;c<a.length;c+=1)a[c]&&a[c].m(e,null);K(e,n),r&&r.m(e,null),t=!0},p(l,[i]){if(i&16){f=C(l[4]);let c;for(c=0;c<f.length;c+=1){const N=I(l,f,c);a[c]?a[c].p(N,i):(a[c]=w(N),a[c].c(),a[c].m(e,n))}for(;c<a.length;c+=1)a[c].d(1);a.length=f.length}r&&r.p&&(!t||i&128)&&P(r,u,l,l[7],t?G(u,l[7],i,null):F(l[7]),null),k(e,h=q(_,[y,i&32&&l[5],(!t||i&4)&&{width:l[2]},(!t||i&4)&&{height:l[2]},(!t||i&2)&&{stroke:l[1]},(!t||i&8)&&{"stroke-width":l[3]},(!t||i&65&&s!==(s=`tabler-icon tabler-icon-${l[0]} ${l[6].class??""}`))&&{class:s}]))},i(l){t||(L(r,l),t=!0)},o(l){M(r,l),t=!1},d(l){l&&m(e),O(a,l),r&&r.d(l)}}}function R(o,e,n){const s=["name","color","size","stroke","iconNode"];let t=z(e,s),{$$slots:f={},$$scope:a}=e,{name:u}=e,{color:r="currentColor"}=e,{size:_=24}=e,{stroke:h=2}=e,{iconNode:l}=e;return o.$$set=i=>{n(6,e=g(g({},e),j(i))),n(5,t=z(e,s)),"name"in i&&n(0,u=i.name),"color"in i&&n(1,r=i.color),"size"in i&&n(2,_=i.size),"stroke"in i&&n(3,h=i.stroke),"iconNode"in i&&n(4,l=i.iconNode),"$$scope"in i&&n(7,a=i.$$scope)},e=j(e),[u,r,_,h,l,t,e,a,f]}class T extends H{constructor(e){super(),J(this,e,R,Q,A,{name:0,color:1,size:2,stroke:3,iconNode:4})}}const Y=T;export{Y as I,X as a,q as g};

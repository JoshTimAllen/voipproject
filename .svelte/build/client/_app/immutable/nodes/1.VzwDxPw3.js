import{s as E,n as b,c as x}from"../chunks/scheduler.H2eWdqud.js";import{S,i as y,e as _,w as f,s as q,f as g,x as d,y as h,r as p,g as w,l as u,z as v,A as $}from"../chunks/index.cgrtaUxB.js";import{s as z}from"../chunks/entry.2pBBfgA1.js";const A=()=>{const s=z;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},C={subscribe(s){return A().page.subscribe(s)}};function H(s){let t,r=s[0].status+"",o,n,i,c=s[0].error?.message+"",l;return{c(){t=_("h1"),o=f(r),n=q(),i=_("p"),l=f(c)},l(e){t=g(e,"H1",{});var a=d(t);o=h(a,r),a.forEach(p),n=w(e),i=g(e,"P",{});var m=d(i);l=h(m,c),m.forEach(p)},m(e,a){u(e,t,a),v(t,o),u(e,n,a),u(e,i,a),v(i,l)},p(e,[a]){a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=e[0].error?.message+"")&&$(l,c)},i:b,o:b,d(e){e&&(p(t),p(n),p(i))}}}function P(s,t,r){let o;return x(s,C,n=>r(0,o=n)),[o]}let D=class extends S{constructor(t){super(),y(this,t,P,H,E,{})}};export{D as component};
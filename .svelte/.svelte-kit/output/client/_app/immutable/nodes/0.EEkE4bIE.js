import{R as i}from"../chunks/control.pJ1mnnAb.js";import{s as u,d as f,u as p,g as _,e as m}from"../chunks/scheduler.H2eWdqud.js";import{S as d,i as h,q as g,t as $}from"../chunks/index.cgrtaUxB.js";function o(n,s){throw new i(n,s.toString())}new TextEncoder;const y=!1,w=async({param:n,route:s,url:r})=>{let e=await r.pathname;await fetch("/usercheck",{method:"GET",headers:{"Content-Type":"application/json"}}).then(async function(t){var a;await t.json().then(c=>{a=c;let l=a.username;return l?e=="/access"?o(302,"/"):{data:{username:l}}:e!="/access"?o(302,"/access"):{}}).catch(c=>e!="/access"?o(302,"/access"):{})}).catch(t=>e!="/access"?o(302,"/access"):{})},q=Object.freeze(Object.defineProperty({__proto__:null,load:w,ssr:y},Symbol.toStringTag,{value:"Module"}));function S(n){let s;const r=n[1].default,e=f(r,n,n[0],null);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,a){e&&e.m(t,a),s=!0},p(t,[a]){e&&e.p&&(!s||a&1)&&p(e,r,t,t[0],s?m(r,t[0],a,null):_(t[0]),null)},i(t){s||(g(e,t),s=!0)},o(t){$(e,t),s=!1},d(t){e&&e.d(t)}}}function b(n,s,r){let{$$slots:e={},$$scope:t}=s;return n.$$set=a=>{"$$scope"in a&&r(0,t=a.$$scope)},[t,e]}class C extends d{constructor(s){super(),h(this,s,b,S,u,{})}}export{C as component,q as universal};

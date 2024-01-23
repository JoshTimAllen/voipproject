import{s as W,n as U,r as fe,o as je,b as L,a as B}from"./scheduler.8-zdWyAk.js";import{S as Y,i as $,e as C,s as P,f as k,x as D,j as I,g as q,r as j,k as p,l as N,z as b,o as M,d as V,v as ue,w as ye,y as Ce,A as ke,q as O,B as R,p as F,t as x,c as K,b as T,a as G,h as he,n as Q,u as X}from"./index.51jaqohu.js";import{Peer as Ae}from"https://esm.sh/peerjs@1.5.2?bundle-deps";function Z(s){return s?.length!==void 0?s:Array.from(s)}function Oe(s){let e,t,c,a='<img src="https://static.wikia.nocookie.net/worldtrigger/images/c/c4/Ko_88.png/revision/latest?cb=20211024225357" class="rounded-circle mr-1 incoming-img" alt="" width="220" height="220"/>',l,o,r,i="Answer",f,n,v="Decline",u,_;return{c(){e=C("div"),t=C("div"),c=C("div"),c.innerHTML=a,l=P(),o=C("div"),r=C("button"),r.textContent=i,f=P(),n=C("button"),n.textContent=v,this.h()},l(m){e=k(m,"DIV",{class:!0});var y=D(e);t=k(y,"DIV",{class:!0});var d=D(t);c=k(d,"DIV",{class:!0,"data-svelte-h":!0}),I(c)!=="svelte-1ul5uuc"&&(c.innerHTML=a),l=q(d),o=k(d,"DIV",{class:!0});var A=D(o);r=k(A,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),I(r)!=="svelte-ep4dj5"&&(r.textContent=i),f=q(A),n=k(A,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),I(n)!=="svelte-tc44bz"&&(n.textContent=v),A.forEach(j),d.forEach(j),y.forEach(j),this.h()},h(){p(c,"class","image-container"),p(r,"type","button"),p(r,"class","btn btn-success"),p(n,"type","button"),p(n,"class","btn btn-danger"),p(o,"class","button-area svelte-1r4yqv6"),p(t,"class","incoming-call-container svelte-1r4yqv6"),p(e,"class","incoming-call svelte-1r4yqv6")},m(m,y){N(m,e,y),b(e,t),b(t,c),b(t,l),b(t,o),b(o,r),b(o,f),b(o,n),u||(_=[M(r,"click",s[3]),M(n,"click",s[4])],u=!0)},p:U,i:U,o:U,d(m){m&&j(e),u=!1,fe(_)}}}function De(s,e,t){let{callerUserName:c=""}=e,{Answer:a=(i="")=>{}}=e,{Decline:l=(i="")=>{}}=e;const o=()=>{a(c)},r=()=>{l(c)};return s.$$set=i=>{"callerUserName"in i&&t(0,c=i.callerUserName),"Answer"in i&&t(1,a=i.Answer),"Decline"in i&&t(2,l=i.Decline)},[c,a,l,o,r]}class te extends Y{constructor(e){super(),$(this,e,De,Oe,W,{callerUserName:0,Answer:1,Decline:2})}}class de{constructor(){this.participants=[]}participants=[]}function ne(s,e,t){const c=s.slice();return c[7]=e[t],c}function Ne(s){let e,t,c="+",a,l;return{c(){e=C("div"),t=C("a"),t.textContent=c,this.h()},l(o){e=k(o,"DIV",{class:!0});var r=D(e);t=k(r,"A",{href:!0,class:!0,"data-svelte-h":!0}),I(t)!=="svelte-1990h2j"&&(t.textContent=c),r.forEach(j),this.h()},h(){p(t,"href",""),p(t,"class","svelte-1ixjsmj"),p(e,"class","mini-call-view svelte-1ixjsmj")},m(o,r){N(o,e,r),b(e,t),a||(l=M(t,"click",s[6]),a=!0)},p:U,d(o){o&&j(e),a=!1,l()}}}function Ee(s){let e,t,c="x",a,l,o,r,i,f="Leave",n,v,u=Z(s[0].participants),_=[];for(let m=0;m<u.length;m+=1)_[m]=le(ne(s,u,m));return{c(){e=C("div"),t=C("a"),t.textContent=c,a=P(),l=C("div");for(let m=0;m<_.length;m+=1)_[m].c();o=P(),r=C("div"),i=C("button"),i.textContent=f,this.h()},l(m){e=k(m,"DIV",{class:!0});var y=D(e);t=k(y,"A",{class:!0,href:!0,"data-svelte-h":!0}),I(t)!=="svelte-i9z6pc"&&(t.textContent=c),a=q(y),l=k(y,"DIV",{class:!0});var d=D(l);for(let H=0;H<_.length;H+=1)_[H].l(d);o=q(d),r=k(d,"DIV",{class:!0});var A=D(r);i=k(A,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),I(i)!=="svelte-1akcnpu"&&(i.textContent=f),A.forEach(j),d.forEach(j),y.forEach(j),this.h()},h(){p(t,"class","x-off svelte-1ixjsmj"),p(t,"href",""),p(i,"type","button"),p(i,"class","btn btn-danger"),p(r,"class","button-area svelte-1ixjsmj"),p(l,"class","call-view-container svelte-1ixjsmj"),p(e,"class","call-view svelte-1ixjsmj")},m(m,y){N(m,e,y),b(e,t),b(e,a),b(e,l);for(let d=0;d<_.length;d+=1)_[d]&&_[d].m(l,null);b(l,o),b(l,r),b(r,i),n||(v=[M(t,"click",s[4]),M(i,"click",s[5])],n=!0)},p(m,y){if(y&1){u=Z(m[0].participants);let d;for(d=0;d<u.length;d+=1){const A=ne(m,u,d);_[d]?_[d].p(A,y):(_[d]=le(A),_[d].c(),_[d].m(l,o))}for(;d<_.length;d+=1)_[d].d(1);_.length=u.length}},d(m){m&&j(e),ue(_,m),n=!1,fe(v)}}}function le(s){let e,t,c='<img src="https://static.wikia.nocookie.net/worldtrigger/images/c/c4/Ko_88.png/revision/latest?cb=20211024225357" class="rounded-circle mr-1 incoming-img" alt="" width="220" height="220"/>',a,l,o=s[7].username+"",r;return{c(){e=C("div"),t=C("div"),t.innerHTML=c,a=P(),l=C("h3"),r=ye(o),this.h()},l(i){e=k(i,"DIV",{class:!0});var f=D(e);t=k(f,"DIV",{class:!0,"data-svelte-h":!0}),I(t)!=="svelte-xchn50"&&(t.innerHTML=c),a=q(f),l=k(f,"H3",{});var n=D(l);r=Ce(n,o),n.forEach(j),f.forEach(j),this.h()},h(){p(t,"class","image-container"),p(e,"class","caller-display svelte-1ixjsmj")},m(i,f){N(i,e,f),b(e,t),b(e,a),b(e,l),b(l,r)},p(i,f){f&1&&o!==(o=i[7].username+"")&&ke(r,o)},d(i){i&&j(e)}}}function Le(s){let e;function t(l,o){return l[2]?Ee:Ne}let c=t(s),a=c(s);return{c(){a.c(),e=V()},l(l){a.l(l),e=V()},m(l,o){a.m(l,o),N(l,e,o)},p(l,[o]){c===(c=t(l))&&a?a.p(l,o):(a.d(1),a=c(l),a&&(a.c(),a.m(e.parentNode,e)))},i:U,o:U,d(l){l&&j(e),a.d(l)}}}function xe(s,e,t){let c=!0,{calldata:a=new de}=e;a.participants.push({username:"hgfyhgjgh"}),a.participants.push({username:"hgfyhgjgh"}),a.participants.push({username:"hgfyhgjgh"}),a.participants.push({username:"hgfyhgjgh"}),a.participants.push({username:"hgfyhgjgh"}),a.participants.push({username:"hgfyhgjgh"}),a.participants.push({username:"hgfyhgjgh"});let{callerUserName:l=""}=e,{LeaveCall:o=()=>{}}=e;const r=()=>{t(2,c=!1)},i=()=>{o()},f=()=>{t(2,c=!0)};return s.$$set=n=>{"calldata"in n&&t(0,a=n.calldata),"callerUserName"in n&&t(3,l=n.callerUserName),"LeaveCall"in n&&t(1,o=n.LeaveCall)},[a,o,c,l,r,i,f]}class ae extends Y{constructor(e){super(),$(this,e,xe,Le,W,{calldata:0,callerUserName:3,LeaveCall:1})}}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var ie=Object.getOwnPropertySymbols,Te=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable;function Ie(s){if(s==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(s)}function Ue(){try{if(!Object.assign)return!1;var s=new String("abc");if(s[5]="de",Object.getOwnPropertyNames(s)[0]==="5")return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;var c=Object.getOwnPropertyNames(e).map(function(l){return e[l]});if(c.join("")!=="0123456789")return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach(function(l){a[l]=l}),Object.keys(Object.assign({},a)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}Ue();var me={exports:{}};/*!
 * vary
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */me.exports=qe;me.exports.append=ge;var Pe=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function ge(s,e){if(typeof s!="string")throw new TypeError("header argument is required");if(!e)throw new TypeError("field argument is required");for(var t=Array.isArray(e)?e:re(String(e)),c=0;c<t.length;c++)if(!Pe.test(t[c]))throw new TypeError("field argument contains an invalid header name");if(s==="*")return s;var a=s,l=re(s.toLowerCase());if(t.indexOf("*")!==-1||l.indexOf("*")!==-1)return"*";for(var o=0;o<t.length;o++){var r=t[o].toLowerCase();l.indexOf(r)===-1&&(l.push(r),a=a?a+", "+t[o]:t[o])}return a}function re(s){for(var e=0,t=[],c=0,a=0,l=s.length;a<l;a++)switch(s.charCodeAt(a)){case 32:c===e&&(c=e=a+1);break;case 44:t.push(s.substring(c,e)),c=e=a+1;break;default:e=a+1;break}return t.push(s.substring(c,e)),t}function qe(s,e){if(!s||!s.getHeader||!s.setHeader)throw new TypeError("res argument is required");var t=s.getHeader("Vary")||"",c=Array.isArray(t)?t.join(", "):String(t);(t=ge(c,e))&&s.setHeader("Vary",t)}function se(s,e,t){const c=s.slice();return c[19]=e[t],c}function ce(s){let e,t,c,a,l;function o(n){s[9](n)}function r(n){s[10](n)}var i=te;function f(n,v){let u={callerUserName:n[19]};return n[2]!==void 0&&(u.Answer=n[2]),n[3]!==void 0&&(u.Decline=n[3]),{props:u}}return i&&(e=K(i,f(s)),L.push(()=>T(e,"Answer",o)),L.push(()=>T(e,"Decline",r))),{c(){e&&G(e.$$.fragment),a=V()},l(n){e&&he(e.$$.fragment,n),a=V()},m(n,v){e&&Q(e,n,v),N(n,a,v),l=!0},p(n,v){if(i!==(i=te)){if(e){R();const u=e;x(u.$$.fragment,1,0,()=>{X(u,1)}),F()}i?(e=K(i,f(n)),L.push(()=>T(e,"Answer",o)),L.push(()=>T(e,"Decline",r)),G(e.$$.fragment),O(e.$$.fragment,1),Q(e,a.parentNode,a)):e=null}else if(i){const u={};v&1&&(u.callerUserName=n[19]),!t&&v&4&&(t=!0,u.Answer=n[2],B(()=>t=!1)),!c&&v&8&&(c=!0,u.Decline=n[3],B(()=>c=!1)),e.$set(u)}},i(n){l||(e&&O(e.$$.fragment,n),l=!0)},o(n){e&&x(e.$$.fragment,n),l=!1},d(n){n&&j(a),e&&X(e,n)}}}function oe(s){let e,t,c,a,l;function o(n){s[11](n)}function r(n){s[12](n)}var i=ae;function f(n,v){let u={};return n[1]!==void 0&&(u.calldata=n[1]),n[4]!==void 0&&(u.LeaveCall=n[4]),{props:u}}return i&&(e=K(i,f(s)),L.push(()=>T(e,"calldata",o)),L.push(()=>T(e,"LeaveCall",r))),{c(){e&&G(e.$$.fragment),a=V()},l(n){e&&he(e.$$.fragment,n),a=V()},m(n,v){e&&Q(e,n,v),N(n,a,v),l=!0},p(n,v){if(i!==(i=ae)){if(e){R();const u=e;x(u.$$.fragment,1,0,()=>{X(u,1)}),F()}i?(e=K(i,f(n)),L.push(()=>T(e,"calldata",o)),L.push(()=>T(e,"LeaveCall",r)),G(e.$$.fragment),O(e.$$.fragment,1),Q(e,a.parentNode,a)):e=null}else if(i){const u={};!t&&v&2&&(t=!0,u.calldata=n[1],B(()=>t=!1)),!c&&v&16&&(c=!0,u.LeaveCall=n[4],B(()=>c=!1)),e.$set(u)}},i(n){l||(e&&O(e.$$.fragment,n),l=!0)},o(n){e&&x(e.$$.fragment,n),l=!1},d(n){n&&j(a),e&&X(e,n)}}}function He(s){let e,t,c,a=Z(s[0]),l=[];for(let i=0;i<a.length;i+=1)l[i]=ce(se(s,a,i));const o=i=>x(l[i],1,1,()=>{l[i]=null});let r=s[5]&&oe(s);return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=P(),r&&r.c(),t=V()},l(i){for(let f=0;f<l.length;f+=1)l[f].l(i);e=q(i),r&&r.l(i),t=V()},m(i,f){for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(i,f);N(i,e,f),r&&r.m(i,f),N(i,t,f),c=!0},p(i,[f]){if(f&13){a=Z(i[0]);let n;for(n=0;n<a.length;n+=1){const v=se(i,a,n);l[n]?(l[n].p(v,f),O(l[n],1)):(l[n]=ce(v),l[n].c(),O(l[n],1),l[n].m(e.parentNode,e))}for(R(),n=a.length;n<l.length;n+=1)o(n);F()}i[5]?r?(r.p(i,f),f&32&&O(r,1)):(r=oe(i),r.c(),O(r,1),r.m(t.parentNode,t)):r&&(R(),x(r,1,1,()=>{r=null}),F())},i(i){if(!c){for(let f=0;f<a.length;f+=1)O(l[f]);O(r),c=!0}},o(i){l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)x(l[f]);x(r),c=!1},d(i){i&&(j(e),j(t)),ue(l,i),r&&r.d(i)}}}function Se(s,e,t){let{val:c="hjbhjkhkjkjhkjhjklhkljklhjkl"}=e,{incomingCalls:a=["jkkjl;llllllll"]}=e,l={};const o=new CustomEvent("event");let{calldata:r=new de}=e,i=!1;var f=io("/",{}),n;const v=(h="")=>{var E={userToCall:h,peerId:n.id};f.emit("call",E)};let{Answer:u=(h="")=>{var E={otherUser:h,peerId:n.id};f.emit("answer-call",E)}}=e,{Reject:_=(h="")=>{var E={otherUser:h};f.emit("reject-call",E)}}=e,{LeaveCall:m=()=>{var h={};f.emit("leave-call",h),n.destroy()}}=e;var y=[];je(async()=>{const h=io("/");E();function E(){n=new Ae(void 0,{}),n.on("close",function(){E()});const J={};navigator.mediaDevices.getUserMedia({audio:!0}).then(g=>{n.on("call",w=>{w.answer(g);const S=new Audio;w.on("stream",z=>{ee(S,z)})}),n.on("error",function(w){console.log(w)}),h.on("user-connected",w=>{console.log("connecting to other user - "+w),we(w,g)})}).catch(g=>{console.log(g)}),h.on("user-disconnected",g=>{J[g]&&J[g].close()}),n.on("open",g=>{console.log("myid - "+g)});function we(g,w){if(g==n.id)return;const S=n.call(g,w),z=new Audio;S.on("stream",be=>{ee(z,be)}),S.on("close",()=>{z.remove()}),J[g]=S}function ee(g,w){g.srcObject=w,g.addEventListener("loadedmetadata",()=>{g.play()})}h.on("incomingcalls-update",function(g){t(0,a=g.incomingCalls),g.incomingCalls.forEach(w=>{a.includes(w)?l.hasOwnProperty(w)&&(l[w]=Date.now()):(a.push(w),t(0,a),l.hasOwnProperty(w)||(l[w]=Date.now(),setInterval(()=>{console.log(Date.now()-l[w])},5e3)))})}),h.on("message",function(g){console.log(g)}),h.on("call-data",function(g){t(1,r=g),r!=null?(t(5,i=!0),t(0,a=[])):t(5,i=!1)}),h.on("connect_error",g=>{console.log(`connect_error due to ${g.message}`)})}});var d=!0;setInterval(function(){d&&A()},100);function A(){if(d&&y.length!=0){let h=new Audio(y.splice(0,1)[0]);h.addEventListener("ended",function(){d=!0,A()},!1),h.play(),d=!1}}function H(h){u=h,t(2,u)}function ve(h){_=h,t(3,_)}function _e(h){r=h,t(1,r)}function pe(h){m=h,t(4,m)}return s.$$set=h=>{"val"in h&&t(6,c=h.val),"incomingCalls"in h&&t(0,a=h.incomingCalls),"calldata"in h&&t(1,r=h.calldata),"Answer"in h&&t(2,u=h.Answer),"Reject"in h&&t(3,_=h.Reject),"LeaveCall"in h&&t(4,m=h.LeaveCall)},[a,r,u,_,m,i,c,o,v,H,ve,_e,pe]}class Re extends Y{constructor(e){super(),$(this,e,Se,He,W,{val:6,incomingCalls:0,event:7,calldata:1,Call:8,Answer:2,Reject:3,LeaveCall:4})}get event(){return this.$$.ctx[7]}get Call(){return this.$$.ctx[8]}}export{Re as V,Z as e};
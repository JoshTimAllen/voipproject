import{s as ee,n as P,r as ue,b as j,a as R,o as ve}from"./scheduler.yr0P2XpG.js";import{S as te,i as ne,e as N,s as B,f as y,x as S,j as I,g as M,r as C,k as A,l as E,z as k,o as K,v as fe,w as be,y as pe,A as De,c as z,b as T,a as F,d as Q,h as he,n as G,q as U,B as Z,p as $,t as V,u as J}from"./index.-woTSmpz.js";import{Peer as Ae}from"https://esm.sh/peerjs@1.5.2?bundle-deps";function W(h){return h?.length!==void 0?h:Array.from(h)}function ke(h){let e,t,r='<img src="https://static.wikia.nocookie.net/worldtrigger/images/c/c4/Ko_88.png/revision/latest?cb=20211024225357" class="rounded-circle mr-1 incoming-img" alt="" width="220" height="220"/>',d,o,s,g="Answer",i,n,c="Decline",u,a;return{c(){e=N("div"),t=N("div"),t.innerHTML=r,d=B(),o=N("div"),s=N("button"),s.textContent=g,i=B(),n=N("button"),n.textContent=c,this.h()},l(b){e=y(b,"DIV",{class:!0});var f=S(e);t=y(f,"DIV",{class:!0,"data-svelte-h":!0}),I(t)!=="svelte-1kyomsk"&&(t.innerHTML=r),d=M(f),o=y(f,"DIV",{class:!0});var D=S(o);s=y(D,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),I(s)!=="svelte-u7x4sh"&&(s.textContent=g),i=M(D),n=y(D,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),I(n)!=="svelte-1da1e5r"&&(n.textContent=c),D.forEach(C),f.forEach(C),this.h()},h(){A(t,"class","image-container"),A(s,"type","button"),A(s,"class","btn btn-success"),A(n,"type","button"),A(n,"class","btn btn-danger"),A(o,"class","button-area svelte-19roec1"),A(e,"class","incoming-call-container svelte-19roec1")},m(b,f){E(b,e,f),k(e,t),k(e,d),k(e,o),k(o,s),k(o,i),k(o,n),u||(a=[K(s,"click",h[3]),K(n,"click",h[4])],u=!0)},p:P,i:P,o:P,d(b){b&&C(e),u=!1,ue(a)}}}function Ce(h,e,t){let{callerUserName:r=""}=e,{Answer:d=(i="")=>{}}=e,{Decline:o=(i="")=>{}}=e;const s=()=>{d(r)},g=()=>{o(r)};return h.$$set=i=>{"callerUserName"in i&&t(0,r=i.callerUserName),"Answer"in i&&t(1,d=i.Answer),"Decline"in i&&t(2,o=i.Decline)},[r,d,o,s,g]}class ie extends te{constructor(e){super(),ne(this,e,Ce,ke,ee,{callerUserName:0,Answer:1,Decline:2})}}class de{constructor(){this.participants=[]}participants=[]}function ae(h,e,t){const r=h.slice();return r[6]=e[t],r}function se(h){let e,t,r='<img src="https://static.wikia.nocookie.net/worldtrigger/images/c/c4/Ko_88.png/revision/latest?cb=20211024225357" class="rounded-circle mr-1 incoming-img" alt="" width="220" height="220"/>',d,o,s=h[6].username+"",g;return{c(){e=N("div"),t=N("div"),t.innerHTML=r,d=B(),o=N("h3"),g=be(s),this.h()},l(i){e=y(i,"DIV",{class:!0});var n=S(e);t=y(n,"DIV",{class:!0,"data-svelte-h":!0}),I(t)!=="svelte-1ul5uuc"&&(t.innerHTML=r),d=M(n),o=y(n,"H3",{});var c=S(o);g=pe(c,s),c.forEach(C),n.forEach(C),this.h()},h(){A(t,"class","image-container"),A(e,"class","incoming-call-container svelte-19roec1")},m(i,n){E(i,e,n),k(e,t),k(e,d),k(e,o),k(o,g)},p(i,n){n&1&&s!==(s=i[6].username+"")&&De(g,s)},d(i){i&&C(e)}}}function Ne(h){let e,t,r,d="Answer",o,s,g="Decline",i,n,c=W(h[0].participants),u=[];for(let a=0;a<c.length;a+=1)u[a]=se(ae(h,c,a));return{c(){for(let a=0;a<u.length;a+=1)u[a].c();e=B(),t=N("div"),r=N("button"),r.textContent=d,o=B(),s=N("button"),s.textContent=g,this.h()},l(a){for(let f=0;f<u.length;f+=1)u[f].l(a);e=M(a),t=y(a,"DIV",{class:!0});var b=S(t);r=y(b,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),I(r)!=="svelte-1e2gltt"&&(r.textContent=d),o=M(b),s=y(b,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),I(s)!=="svelte-t5pddb"&&(s.textContent=g),b.forEach(C),this.h()},h(){A(r,"type","button"),A(r,"class","btn btn-success"),A(s,"type","button"),A(s,"class","btn btn-danger"),A(t,"class","button-area svelte-19roec1")},m(a,b){for(let f=0;f<u.length;f+=1)u[f]&&u[f].m(a,b);E(a,e,b),E(a,t,b),k(t,r),k(t,o),k(t,s),i||(n=[K(r,"click",h[4]),K(s,"click",h[5])],i=!0)},p(a,[b]){if(b&1){c=W(a[0].participants);let f;for(f=0;f<c.length;f+=1){const D=ae(a,c,f);u[f]?u[f].p(D,b):(u[f]=se(D),u[f].c(),u[f].m(e.parentNode,e))}for(;f<u.length;f+=1)u[f].d(1);u.length=c.length}},i:P,o:P,d(a){a&&(C(e),C(t)),fe(u,a),i=!1,ue(n)}}}function ye(h,e,t){let{calldata:r=new de}=e,{callerUserName:d=""}=e,{Answer:o=(n="")=>{}}=e,{Decline:s=(n="")=>{}}=e;const g=()=>{o(d)},i=()=>{s(d)};return h.$$set=n=>{"calldata"in n&&t(0,r=n.calldata),"callerUserName"in n&&t(1,d=n.callerUserName),"Answer"in n&&t(2,o=n.Answer),"Decline"in n&&t(3,s=n.Decline)},[r,d,o,s,g,i]}class ce extends te{constructor(e){super(),ne(this,e,ye,Ne,ee,{calldata:0,callerUserName:1,Answer:2,Decline:3})}}function oe(h,e,t){const r=h.slice();return r[19]=e[t],r}function re(h){let e,t,r,d,o;function s(c){h[8](c)}function g(c){h[9](c)}var i=ie;function n(c,u){let a={callerUserName:c[19]};return c[2]!==void 0&&(a.Answer=c[2]),c[3]!==void 0&&(a.Decline=c[3]),{props:a}}return i&&(e=z(i,n(h)),j.push(()=>T(e,"Answer",s)),j.push(()=>T(e,"Decline",g))),{c(){e&&F(e.$$.fragment),d=Q()},l(c){e&&he(e.$$.fragment,c),d=Q()},m(c,u){e&&G(e,c,u),E(c,d,u),o=!0},p(c,u){if(i!==(i=ie)){if(e){Z();const a=e;V(a.$$.fragment,1,0,()=>{J(a,1)}),$()}i?(e=z(i,n(c)),j.push(()=>T(e,"Answer",s)),j.push(()=>T(e,"Decline",g)),F(e.$$.fragment),U(e.$$.fragment,1),G(e,d.parentNode,d)):e=null}else if(i){const a={};u&1&&(a.callerUserName=c[19]),!t&&u&4&&(t=!0,a.Answer=c[2],R(()=>t=!1)),!r&&u&8&&(r=!0,a.Decline=c[3],R(()=>r=!1)),e.$set(a)}},i(c){o||(e&&U(e.$$.fragment,c),o=!0)},o(c){e&&V(e.$$.fragment,c),o=!1},d(c){c&&C(d),e&&J(e,c)}}}function je(h){let e,t,r,d,o,s,g,i=W(h[0]),n=[];for(let l=0;l<i.length;l+=1)n[l]=re(oe(h,i,l));const c=l=>V(n[l],1,1,()=>{n[l]=null});function u(l){h[10](l)}function a(l){h[11](l)}function b(l){h[12](l)}var f=ce;function D(l,v){let _={};return l[1]!==void 0&&(_.calldata=l[1]),l[2]!==void 0&&(_.Answer=l[2]),l[3]!==void 0&&(_.Decline=l[3]),{props:_}}return f&&(t=z(f,D(h)),j.push(()=>T(t,"calldata",u)),j.push(()=>T(t,"Answer",a)),j.push(()=>T(t,"Decline",b))),{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=B(),t&&F(t.$$.fragment),s=Q()},l(l){for(let v=0;v<n.length;v+=1)n[v].l(l);e=M(l),t&&he(t.$$.fragment,l),s=Q()},m(l,v){for(let _=0;_<n.length;_+=1)n[_]&&n[_].m(l,v);E(l,e,v),t&&G(t,l,v),E(l,s,v),g=!0},p(l,[v]){if(v&13){i=W(l[0]);let _;for(_=0;_<i.length;_+=1){const q=oe(l,i,_);n[_]?(n[_].p(q,v),U(n[_],1)):(n[_]=re(q),n[_].c(),U(n[_],1),n[_].m(e.parentNode,e))}for(Z(),_=i.length;_<n.length;_+=1)c(_);$()}if(f!==(f=ce)){if(t){Z();const _=t;V(_.$$.fragment,1,0,()=>{J(_,1)}),$()}f?(t=z(f,D(l)),j.push(()=>T(t,"calldata",u)),j.push(()=>T(t,"Answer",a)),j.push(()=>T(t,"Decline",b)),F(t.$$.fragment),U(t.$$.fragment,1),G(t,s.parentNode,s)):t=null}else if(f){const _={};!r&&v&2&&(r=!0,_.calldata=l[1],R(()=>r=!1)),!d&&v&4&&(d=!0,_.Answer=l[2],R(()=>d=!1)),!o&&v&8&&(o=!0,_.Decline=l[3],R(()=>o=!1)),t.$set(_)}},i(l){if(!g){for(let v=0;v<i.length;v+=1)U(n[v]);t&&U(t.$$.fragment,l),g=!0}},o(l){n=n.filter(Boolean);for(let v=0;v<n.length;v+=1)V(n[v]);t&&V(t.$$.fragment,l),g=!1},d(l){l&&(C(e),C(s)),fe(n,l),t&&J(t,l)}}}function Te(h,e,t){let{val:r="hjbhjkhkjkjhkjhjklhkljklhjkl"}=e,{incomingCalls:d=["jkkjl;llllllll"]}=e,o={};const s=new CustomEvent("event");let{calldata:g=new de}=e;var i=io("/",{}),n;const c=(m="")=>{var L={userToCall:m,peerId:n.id};i.emit("call",L)};let{Answer:u=(m="")=>{var L={otherUser:m,peerId:n.id};i.emit("answer-call",L)}}=e,{Reject:a=(m="")=>{var L={otherUser:m};i.emit("reject-call",L)}}=e;const b=()=>{var m={};i.emit("leave-call",m)};var f=[];ve(async()=>{m();function m(L){const O=io("/");n=new Ae(void 0,{host:"/",port:"3001"});const X={},Y=new Audio;navigator.mediaDevices.getUserMedia({audio:!0}).then(w=>{Y.srcObject=w,Y.addEventListener("loadedmetadata",()=>{Y.play()}),n.on("call",p=>{p.answer(w);const H=new Audio;p.on("stream",x=>{le(H,x)})}),n.on("error",function(p){console.log(p)}),O.on("user-connected",p=>{console.log("connecting to other user - "+p),ge(p,w)})}).catch(w=>{console.log(w)}),O.on("user-disconnected",w=>{X[w]&&X[w].close()}),n.on("open",w=>{console.log("myid - "+w)});function ge(w,p){if(w==n.id)return;const H=n.call(w,p),x=new Audio;H.on("stream",we=>{le(x,we)}),H.on("close",()=>{x.remove()}),X[w]=H}function le(w,p){w.srcObject=p,w.addEventListener("loadedmetadata",()=>{w.play()})}O.on("incomingcalls-update",function(w){t(0,d=w.incomingCalls),w.incomingCalls.forEach(p=>{d.includes(p)?o.hasOwnProperty(p)&&(o[p]=Date.now()):(d.push(p),t(0,d),o.hasOwnProperty(p)||(o[p]=Date.now(),setInterval(()=>{console.log(Date.now()-o[p])},5e3)))})}),O.on("message",function(w){console.log(w)}),O.on("call-data",function(w){t(1,g=w)}),O.on("connect_error",w=>{console.log(`connect_error due to ${w.message}`)})}});var D=!0;setInterval(function(){D&&l()},100);function l(){if(D&&f.length!=0){let m=new Audio(f.splice(0,1)[0]);m.addEventListener("ended",function(){D=!0,l()},!1),m.play(),D=!1}}function v(m){u=m,t(2,u)}function _(m){a=m,t(3,a)}function q(m){g=m,t(1,g)}function _e(m){u=m,t(2,u)}function me(m){a=m,t(3,a)}return h.$$set=m=>{"val"in m&&t(4,r=m.val),"incomingCalls"in m&&t(0,d=m.incomingCalls),"calldata"in m&&t(1,g=m.calldata),"Answer"in m&&t(2,u=m.Answer),"Reject"in m&&t(3,a=m.Reject)},[d,g,u,a,r,s,c,b,v,_,q,_e,me]}class Oe extends te{constructor(e){super(),ne(this,e,Te,je,ee,{val:4,incomingCalls:0,event:5,calldata:1,Call:6,Answer:2,Reject:3,LeaveCall:7})}get event(){return this.$$.ctx[5]}get Call(){return this.$$.ctx[6]}get LeaveCall(){return this.$$.ctx[7]}}export{Oe as V,W as e};

import{s as $,n as P,r as re,b as j,a as R,o as we}from"./scheduler.yr0P2XpG.js";import{S as ee,i as te,e as N,s as B,f as y,x as S,j as I,g as M,r as C,k as A,l as E,z as k,o as K,v as ue,w as ve,y as be,A as pe,c as z,b as T,a as F,d as Q,h as fe,n as G,q as U,B as Y,p as Z,t as O,u as J}from"./index.-woTSmpz.js";import{Peer as De}from"https://esm.sh/peerjs@1.5.2?bundle-deps";function W(h){return h?.length!==void 0?h:Array.from(h)}function Ae(h){let e,t,r='<img src="https://static.wikia.nocookie.net/worldtrigger/images/c/c4/Ko_88.png/revision/latest?cb=20211024225357" class="rounded-circle mr-1 incoming-img" alt="" width="220" height="220"/>',d,o,a,g="Answer",i,n,c="Decline",u,s;return{c(){e=N("div"),t=N("div"),t.innerHTML=r,d=B(),o=N("div"),a=N("button"),a.textContent=g,i=B(),n=N("button"),n.textContent=c,this.h()},l(b){e=y(b,"DIV",{class:!0});var f=S(e);t=y(f,"DIV",{class:!0,"data-svelte-h":!0}),I(t)!=="svelte-1kyomsk"&&(t.innerHTML=r),d=M(f),o=y(f,"DIV",{class:!0});var D=S(o);a=y(D,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),I(a)!=="svelte-u7x4sh"&&(a.textContent=g),i=M(D),n=y(D,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),I(n)!=="svelte-1da1e5r"&&(n.textContent=c),D.forEach(C),f.forEach(C),this.h()},h(){A(t,"class","image-container"),A(a,"type","button"),A(a,"class","btn btn-success"),A(n,"type","button"),A(n,"class","btn btn-danger"),A(o,"class","button-area svelte-19roec1"),A(e,"class","incoming-call-container svelte-19roec1")},m(b,f){E(b,e,f),k(e,t),k(e,d),k(e,o),k(o,a),k(o,i),k(o,n),u||(s=[K(a,"click",h[3]),K(n,"click",h[4])],u=!0)},p:P,i:P,o:P,d(b){b&&C(e),u=!1,re(s)}}}function ke(h,e,t){let{callerUserName:r=""}=e,{Answer:d=(i="")=>{}}=e,{Decline:o=(i="")=>{}}=e;const a=()=>{d(r)},g=()=>{o(r)};return h.$$set=i=>{"callerUserName"in i&&t(0,r=i.callerUserName),"Answer"in i&&t(1,d=i.Answer),"Decline"in i&&t(2,o=i.Decline)},[r,d,o,a,g]}class le extends ee{constructor(e){super(),te(this,e,ke,Ae,$,{callerUserName:0,Answer:1,Decline:2})}}class he{constructor(){this.participants=[]}participants=[]}function ie(h,e,t){const r=h.slice();return r[6]=e[t],r}function se(h){let e,t,r='<img src="https://static.wikia.nocookie.net/worldtrigger/images/c/c4/Ko_88.png/revision/latest?cb=20211024225357" class="rounded-circle mr-1 incoming-img" alt="" width="220" height="220"/>',d,o,a=h[6].username+"",g;return{c(){e=N("div"),t=N("div"),t.innerHTML=r,d=B(),o=N("h3"),g=ve(a),this.h()},l(i){e=y(i,"DIV",{class:!0});var n=S(e);t=y(n,"DIV",{class:!0,"data-svelte-h":!0}),I(t)!=="svelte-1ul5uuc"&&(t.innerHTML=r),d=M(n),o=y(n,"H3",{});var c=S(o);g=be(c,a),c.forEach(C),n.forEach(C),this.h()},h(){A(t,"class","image-container"),A(e,"class","incoming-call-container svelte-19roec1")},m(i,n){E(i,e,n),k(e,t),k(e,d),k(e,o),k(o,g)},p(i,n){n&1&&a!==(a=i[6].username+"")&&pe(g,a)},d(i){i&&C(e)}}}function Ce(h){let e,t,r,d="Answer",o,a,g="Decline",i,n,c=W(h[0].participants),u=[];for(let s=0;s<c.length;s+=1)u[s]=se(ie(h,c,s));return{c(){for(let s=0;s<u.length;s+=1)u[s].c();e=B(),t=N("div"),r=N("button"),r.textContent=d,o=B(),a=N("button"),a.textContent=g,this.h()},l(s){for(let f=0;f<u.length;f+=1)u[f].l(s);e=M(s),t=y(s,"DIV",{class:!0});var b=S(t);r=y(b,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),I(r)!=="svelte-1e2gltt"&&(r.textContent=d),o=M(b),a=y(b,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),I(a)!=="svelte-t5pddb"&&(a.textContent=g),b.forEach(C),this.h()},h(){A(r,"type","button"),A(r,"class","btn btn-success"),A(a,"type","button"),A(a,"class","btn btn-danger"),A(t,"class","button-area svelte-19roec1")},m(s,b){for(let f=0;f<u.length;f+=1)u[f]&&u[f].m(s,b);E(s,e,b),E(s,t,b),k(t,r),k(t,o),k(t,a),i||(n=[K(r,"click",h[4]),K(a,"click",h[5])],i=!0)},p(s,[b]){if(b&1){c=W(s[0].participants);let f;for(f=0;f<c.length;f+=1){const D=ie(s,c,f);u[f]?u[f].p(D,b):(u[f]=se(D),u[f].c(),u[f].m(e.parentNode,e))}for(;f<u.length;f+=1)u[f].d(1);u.length=c.length}},i:P,o:P,d(s){s&&(C(e),C(t)),ue(u,s),i=!1,re(n)}}}function Ne(h,e,t){let{calldata:r=new he}=e,{callerUserName:d=""}=e,{Answer:o=(n="")=>{}}=e,{Decline:a=(n="")=>{}}=e;const g=()=>{o(d)},i=()=>{a(d)};return h.$$set=n=>{"calldata"in n&&t(0,r=n.calldata),"callerUserName"in n&&t(1,d=n.callerUserName),"Answer"in n&&t(2,o=n.Answer),"Decline"in n&&t(3,a=n.Decline)},[r,d,o,a,g,i]}class ae extends ee{constructor(e){super(),te(this,e,Ne,Ce,$,{calldata:0,callerUserName:1,Answer:2,Decline:3})}}function ce(h,e,t){const r=h.slice();return r[19]=e[t],r}function oe(h){let e,t,r,d,o;function a(c){h[8](c)}function g(c){h[9](c)}var i=le;function n(c,u){let s={callerUserName:c[19]};return c[2]!==void 0&&(s.Answer=c[2]),c[3]!==void 0&&(s.Decline=c[3]),{props:s}}return i&&(e=z(i,n(h)),j.push(()=>T(e,"Answer",a)),j.push(()=>T(e,"Decline",g))),{c(){e&&F(e.$$.fragment),d=Q()},l(c){e&&fe(e.$$.fragment,c),d=Q()},m(c,u){e&&G(e,c,u),E(c,d,u),o=!0},p(c,u){if(i!==(i=le)){if(e){Y();const s=e;O(s.$$.fragment,1,0,()=>{J(s,1)}),Z()}i?(e=z(i,n(c)),j.push(()=>T(e,"Answer",a)),j.push(()=>T(e,"Decline",g)),F(e.$$.fragment),U(e.$$.fragment,1),G(e,d.parentNode,d)):e=null}else if(i){const s={};u&1&&(s.callerUserName=c[19]),!t&&u&4&&(t=!0,s.Answer=c[2],R(()=>t=!1)),!r&&u&8&&(r=!0,s.Decline=c[3],R(()=>r=!1)),e.$set(s)}},i(c){o||(e&&U(e.$$.fragment,c),o=!0)},o(c){e&&O(e.$$.fragment,c),o=!1},d(c){c&&C(d),e&&J(e,c)}}}function ye(h){let e,t,r,d,o,a,g,i=W(h[0]),n=[];for(let l=0;l<i.length;l+=1)n[l]=oe(ce(h,i,l));const c=l=>O(n[l],1,1,()=>{n[l]=null});function u(l){h[10](l)}function s(l){h[11](l)}function b(l){h[12](l)}var f=ae;function D(l,v){let _={};return l[1]!==void 0&&(_.calldata=l[1]),l[2]!==void 0&&(_.Answer=l[2]),l[3]!==void 0&&(_.Decline=l[3]),{props:_}}return f&&(t=z(f,D(h)),j.push(()=>T(t,"calldata",u)),j.push(()=>T(t,"Answer",s)),j.push(()=>T(t,"Decline",b))),{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=B(),t&&F(t.$$.fragment),a=Q()},l(l){for(let v=0;v<n.length;v+=1)n[v].l(l);e=M(l),t&&fe(t.$$.fragment,l),a=Q()},m(l,v){for(let _=0;_<n.length;_+=1)n[_]&&n[_].m(l,v);E(l,e,v),t&&G(t,l,v),E(l,a,v),g=!0},p(l,[v]){if(v&13){i=W(l[0]);let _;for(_=0;_<i.length;_+=1){const q=ce(l,i,_);n[_]?(n[_].p(q,v),U(n[_],1)):(n[_]=oe(q),n[_].c(),U(n[_],1),n[_].m(e.parentNode,e))}for(Y(),_=i.length;_<n.length;_+=1)c(_);Z()}if(f!==(f=ae)){if(t){Y();const _=t;O(_.$$.fragment,1,0,()=>{J(_,1)}),Z()}f?(t=z(f,D(l)),j.push(()=>T(t,"calldata",u)),j.push(()=>T(t,"Answer",s)),j.push(()=>T(t,"Decline",b)),F(t.$$.fragment),U(t.$$.fragment,1),G(t,a.parentNode,a)):t=null}else if(f){const _={};!r&&v&2&&(r=!0,_.calldata=l[1],R(()=>r=!1)),!d&&v&4&&(d=!0,_.Answer=l[2],R(()=>d=!1)),!o&&v&8&&(o=!0,_.Decline=l[3],R(()=>o=!1)),t.$set(_)}},i(l){if(!g){for(let v=0;v<i.length;v+=1)U(n[v]);t&&U(t.$$.fragment,l),g=!0}},o(l){n=n.filter(Boolean);for(let v=0;v<n.length;v+=1)O(n[v]);t&&O(t.$$.fragment,l),g=!1},d(l){l&&(C(e),C(a)),ue(n,l),t&&J(t,l)}}}function je(h,e,t){let{val:r="hjbhjkhkjkjhkjhjklhkljklhjkl"}=e,{incomingCalls:d=["jkkjl;llllllll"]}=e,o={};const a=new CustomEvent("event");let{calldata:g=new he}=e;var i=io("/",{}),n;const c=(m="")=>{var L={userToCall:m,peerId:n.id};i.emit("call",L)};let{Answer:u=(m="")=>{var L={otherUser:m,peerId:n.id};i.emit("answer-call",L)}}=e,{Reject:s=(m="")=>{var L={otherUser:m};i.emit("reject-call",L)}}=e;const b=()=>{var m={};i.emit("leave-call",m)};var f=[];we(async()=>{m();function m(L){const V=io("/");n=new De(void 0,{host:"/",port:"3001"});const X={};new Audio,navigator.mediaDevices.getUserMedia({audio:!0}).then(w=>{n.on("call",p=>{p.answer(w);const H=new Audio;p.on("stream",x=>{ne(H,x)})}),n.on("error",function(p){console.log(p)}),V.on("user-connected",p=>{console.log("connecting to other user - "+p),me(p,w)})}).catch(w=>{console.log(w)}),V.on("user-disconnected",w=>{X[w]&&X[w].close()}),n.on("open",w=>{console.log("myid - "+w)});function me(w,p){if(w==n.id)return;const H=n.call(w,p),x=new Audio;H.on("stream",ge=>{ne(x,ge)}),H.on("close",()=>{x.remove()}),X[w]=H}function ne(w,p){w.srcObject=p,w.addEventListener("loadedmetadata",()=>{w.play()})}V.on("incomingcalls-update",function(w){t(0,d=w.incomingCalls),w.incomingCalls.forEach(p=>{d.includes(p)?o.hasOwnProperty(p)&&(o[p]=Date.now()):(d.push(p),t(0,d),o.hasOwnProperty(p)||(o[p]=Date.now(),setInterval(()=>{console.log(Date.now()-o[p])},5e3)))})}),V.on("message",function(w){console.log(w)}),V.on("call-data",function(w){t(1,g=w)}),V.on("connect_error",w=>{console.log(`connect_error due to ${w.message}`)})}});var D=!0;setInterval(function(){D&&l()},100);function l(){if(D&&f.length!=0){let m=new Audio(f.splice(0,1)[0]);m.addEventListener("ended",function(){D=!0,l()},!1),m.play(),D=!1}}function v(m){u=m,t(2,u)}function _(m){s=m,t(3,s)}function q(m){g=m,t(1,g)}function de(m){u=m,t(2,u)}function _e(m){s=m,t(3,s)}return h.$$set=m=>{"val"in m&&t(4,r=m.val),"incomingCalls"in m&&t(0,d=m.incomingCalls),"calldata"in m&&t(1,g=m.calldata),"Answer"in m&&t(2,u=m.Answer),"Reject"in m&&t(3,s=m.Reject)},[d,g,u,s,r,a,c,b,v,_,q,de,_e]}class Le extends ee{constructor(e){super(),te(this,e,je,ye,$,{val:4,incomingCalls:0,event:5,calldata:1,Call:6,Answer:2,Reject:3,LeaveCall:7})}get event(){return this.$$.ctx[5]}get Call(){return this.$$.ctx[6]}get LeaveCall(){return this.$$.ctx[7]}}export{Le as V,W as e};
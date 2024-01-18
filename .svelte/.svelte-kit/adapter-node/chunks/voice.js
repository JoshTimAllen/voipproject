import { c as create_ssr_component, e as each, b as escape, v as validate_component, m as missing_component } from "./ssr.js";
import "https://esm.sh/peerjs@1.5.2?bundle-deps";
const css$1 = {
  code: ".incoming-call-container.svelte-19roec1{position:fixed;right:0;bottom:0;z-index:10000;width:450px;background:rgb(61, 61, 61);height:350px;margin-right:40px;display:flex;flex-direction:column;justify-content:space-evenly;align-items:center}.button-area.svelte-19roec1{width:100%;display:flex;justify-content:space-evenly;align-items:center}",
  map: null
};
const Incomingcall = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { callerUserName = "" } = $$props;
  let { Answer = (callerUserName2 = "") => {
  } } = $$props;
  let { Decline = (callerUserName2 = "") => {
  } } = $$props;
  if ($$props.callerUserName === void 0 && $$bindings.callerUserName && callerUserName !== void 0)
    $$bindings.callerUserName(callerUserName);
  if ($$props.Answer === void 0 && $$bindings.Answer && Answer !== void 0)
    $$bindings.Answer(Answer);
  if ($$props.Decline === void 0 && $$bindings.Decline && Decline !== void 0)
    $$bindings.Decline(Decline);
  $$result.css.add(css$1);
  return `<div class="incoming-call-container svelte-19roec1"><div class="image-container" data-svelte-h="svelte-1kyomsk"><img src="https://static.wikia.nocookie.net/worldtrigger/images/c/c4/Ko_88.png/revision/latest?cb=20211024225357" class="rounded-circle mr-1 incoming-img" alt="" width="220" height="220"></div> <div class="button-area svelte-19roec1"><button type="button" class="btn btn-success" data-svelte-h="svelte-u7x4sh">Answer</button> <button type="button" class="btn btn-danger" data-svelte-h="svelte-1da1e5r">Decline</button></div> </div>`;
});
class CallData {
  constructor() {
    this.participants = [];
  }
  participants = [];
}
const css = {
  code: ".incoming-call-container.svelte-19roec1{position:fixed;right:0;bottom:0;z-index:10000;width:450px;background:rgb(61, 61, 61);height:350px;margin-right:40px;display:flex;flex-direction:column;justify-content:space-evenly;align-items:center}.button-area.svelte-19roec1{width:100%;display:flex;justify-content:space-evenly;align-items:center}",
  map: null
};
const Callview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { calldata = new CallData() } = $$props;
  let { callerUserName = "" } = $$props;
  let { Answer = (callerUserName2 = "") => {
  } } = $$props;
  let { Decline = (callerUserName2 = "") => {
  } } = $$props;
  if ($$props.calldata === void 0 && $$bindings.calldata && calldata !== void 0)
    $$bindings.calldata(calldata);
  if ($$props.callerUserName === void 0 && $$bindings.callerUserName && callerUserName !== void 0)
    $$bindings.callerUserName(callerUserName);
  if ($$props.Answer === void 0 && $$bindings.Answer && Answer !== void 0)
    $$bindings.Answer(Answer);
  if ($$props.Decline === void 0 && $$bindings.Decline && Decline !== void 0)
    $$bindings.Decline(Decline);
  $$result.css.add(css);
  return `${each(calldata.participants, (particpant) => {
    return `<div class="incoming-call-container svelte-19roec1"><div class="image-container" data-svelte-h="svelte-1ul5uuc"><img src="https://static.wikia.nocookie.net/worldtrigger/images/c/c4/Ko_88.png/revision/latest?cb=20211024225357" class="rounded-circle mr-1 incoming-img" alt="" width="220" height="220"></div> <h3>${escape(particpant["username"])}</h3> </div>`;
  })} <div class="button-area svelte-19roec1"><button type="button" class="btn btn-success" data-svelte-h="svelte-1e2gltt">Answer</button> <button type="button" class="btn btn-danger" data-svelte-h="svelte-t5pddb">Decline</button> </div>`;
});
const Voice = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { val = "hjbhjkhkjkjhkjhjklhkljklhjkl" } = $$props;
  let { incomingCalls = ["jkkjl;llllllll"] } = $$props;
  const event = new CustomEvent("event");
  let { calldata = new CallData() } = $$props;
  var socket = io("/", {});
  var peer;
  const Call = (callerUserName = "") => {
    var calldata2 = {
      userToCall: callerUserName,
      peerId: peer.id
    };
    socket.emit("call", calldata2);
  };
  let { Answer = (userToAnswer = "") => {
    var calldata2 = { otherUser: userToAnswer, peerId: peer.id };
    socket.emit("answer-call", calldata2);
  } } = $$props;
  let { Reject = (userToReject = "") => {
    var calldata2 = { otherUser: userToReject };
    socket.emit("reject-call", calldata2);
  } } = $$props;
  const LeaveCall = () => {
    var calldata2 = {};
    socket.emit("leave-call", calldata2);
  };
  var audioQueue = [];
  var ableToPlayNew = true;
  setInterval(
    function() {
      if (ableToPlayNew) {
        audioPlay();
      }
    },
    100
  );
  function audioPlay() {
    if (ableToPlayNew) {
      if (audioQueue.length != 0) {
        let audio = new Audio(audioQueue.splice(0, 1)[0]);
        audio.addEventListener(
          "ended",
          function() {
            ableToPlayNew = true;
            audioPlay();
          },
          false
        );
        audio.play();
        ableToPlayNew = false;
      }
    }
  }
  if ($$props.val === void 0 && $$bindings.val && val !== void 0)
    $$bindings.val(val);
  if ($$props.incomingCalls === void 0 && $$bindings.incomingCalls && incomingCalls !== void 0)
    $$bindings.incomingCalls(incomingCalls);
  if ($$props.event === void 0 && $$bindings.event && event !== void 0)
    $$bindings.event(event);
  if ($$props.calldata === void 0 && $$bindings.calldata && calldata !== void 0)
    $$bindings.calldata(calldata);
  if ($$props.Call === void 0 && $$bindings.Call && Call !== void 0)
    $$bindings.Call(Call);
  if ($$props.Answer === void 0 && $$bindings.Answer && Answer !== void 0)
    $$bindings.Answer(Answer);
  if ($$props.Reject === void 0 && $$bindings.Reject && Reject !== void 0)
    $$bindings.Reject(Reject);
  if ($$props.LeaveCall === void 0 && $$bindings.LeaveCall && LeaveCall !== void 0)
    $$bindings.LeaveCall(LeaveCall);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${each(incomingCalls, (incomingcall) => {
      return `${validate_component(Incomingcall || missing_component, "svelte:component").$$render(
        $$result,
        {
          callerUserName: incomingcall,
          Answer,
          Decline: Reject
        },
        {
          Answer: ($$value) => {
            Answer = $$value;
            $$settled = false;
          },
          Decline: ($$value) => {
            Reject = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${validate_component(Callview || missing_component, "svelte:component").$$render(
      $$result,
      { calldata, Answer, Decline: Reject },
      {
        calldata: ($$value) => {
          calldata = $$value;
          $$settled = false;
        },
        Answer: ($$value) => {
          Answer = $$value;
          $$settled = false;
        },
        Decline: ($$value) => {
          Reject = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Voice as V
};

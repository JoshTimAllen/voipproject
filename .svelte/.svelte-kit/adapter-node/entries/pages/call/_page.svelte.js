import { c as create_ssr_component, a as add_attribute, v as validate_component, e as each, m as missing_component, b as escape } from "../../../chunks/ssr.js";
import { V as Voice } from "../../../chunks/voice.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var userToCall = "";
  let callBind;
  let answerBind;
  let rejectBind;
  let incomingcalls = [];
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<input type="text"${add_attribute("value", userToCall, 0)}> ${validate_component(Voice || missing_component, "svelte:component").$$render(
      $$result,
      {
        Call: callBind,
        Answer: answerBind,
        Reject: rejectBind,
        incomingCalls: incomingcalls
      },
      {
        Call: ($$value) => {
          callBind = $$value;
          $$settled = false;
        },
        Answer: ($$value) => {
          answerBind = $$value;
          $$settled = false;
        },
        Reject: ($$value) => {
          rejectBind = $$value;
          $$settled = false;
        },
        incomingCalls: ($$value) => {
          incomingcalls = $$value;
          $$settled = false;
        }
      },
      {}
    )} <button data-svelte-h="svelte-fczpwg">Call</button> <br> <br> ${each(incomingcalls, (incomingcall) => {
      return `<h1>${escape(incomingcall)}</h1> <button data-svelte-h="svelte-jcqhtc">Answer</button> <button data-svelte-h="svelte-1c1u6tx">Reject</button> <button data-svelte-h="svelte-kd7w7w">Leave Call</button>`;
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};

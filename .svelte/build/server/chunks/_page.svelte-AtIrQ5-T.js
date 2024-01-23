import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute, d as each, m as missing_component } from './ssr-_WzSIGFI.js';
import { V as Voice } from './voice-OFGG-eYg.js';
import 'https://esm.sh/peerjs@1.5.2?bundle-deps';

class Card_Type_1_Model {
  // constructor() {
  //     this.imageSrc = "";
  //     this.displayMag = "";
  //     this.isTyping = false;
  //     this.timeSent = Date.now();
  // }
  username = "josh";
  imageSrc = "";
  displayMsg = "dfhgjhghjfhdgfhkjgghsdfdsgtrfhjhddfsrehgkfgertfjjkjafdfaf";
  messagecCount = 0;
  isTyping = false;
  timeSent = Date.now();
}
const Cardtype1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { model = new Card_Type_1_Model() } = $$props;
  if ($$props.model === void 0 && $$bindings.model && model !== void 0)
    $$bindings.model(model);
  return `<a href="#" class="list-group-item list-group-item-action border-0">${model.messageCount > 0 ? `<div class="badge bg-success float-right" data-svelte-h="svelte-7o4zct">5</div>` : ``} <div class="d-flex align-items-start"><img${add_attribute("src", model.imageSrc, 0)} class="rounded-circle mr-1"${add_attribute("alt", model.username, 0)} width="40" height="40"> <div class="flex-grow-1 ml-3">${escape(model.username)} <div class="small"><span class="fas fa-circle chat-online"></span> ${escape(model.displayMsg)}</div></div></div></a>`;
});
(function() {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach(function(tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
})();
const css = {
  code: '@import "./css/style.css";@import "./css/sidebars.css";',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  var focusUser_username = "";
  var searchResults = [];
  var rightDisplayTag = " main-no-display";
  var leftDisplayTag = "";
  var SearchQuery = "";
  function GetModel(username = "") {
    let model = new Card_Type_1_Model();
    model.username = username;
    return model;
  }
  let callBind;
  let answerBind;
  let rejectBind;
  let incomingcalls = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-q8dq09_START --><!-- HEAD_svelte-q8dq09_END -->`, ""} ${validate_component(Voice || missing_component, "svelte:component").$$render(
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
    )} <div class="page-content h-100"><main class="${"left-content side-main flex w-100 " + escape(leftDisplayTag, true)}" style=""><div class="d-flex flex-column align-items-stretch flex-shrink-0 w-100"><a href="/" class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"><svg class="bi me-2" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> <span class="fs-5 fw-semibold">${escape("jhj")}</span></a> <div class="px-4 d-md-block"><div class="d-flex align-items-center"><div class="flex-grow-1"><input type="text" class="form-control my-3" placeholder="Search..."${add_attribute("value", SearchQuery, 0)}></div></div></div> <div class="list-group list-group-flush border-bottom scrollarea w-100"> ${each(searchResults, (searchResult) => {
      return `<a href="">${validate_component(Cardtype1 || missing_component, "svelte:component").$$render($$result, { model: GetModel(searchResult.username) }, {}, {})}</a>`;
    })}</div></div> <a class="right-arrow" style="display: none;" href=" "><i>${escape(">")}</i></a></main> <main class="${"right-content " + escape(rightDisplayTag, true)}"><a class="left-arrow" style="display: none;" href=" "><i>${escape("<")}</i></a> <div class="b-example-divider"></div> <div class="w-100" style="height: 100%;"><div class="msgcard vh-100 h-100"> <div class="right-messaging"><div class="right-messaging-top"><div class="d-flex align-items-center py-1"><div class="position-relative" data-svelte-h="svelte-1ff7hkh"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" class="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40"></div> <div class="flex-grow-1 pl-3"><strong style="color: white;">${escape(focusUser_username)}</strong> <div class="text-muted small" data-svelte-h="svelte-17hnbx6"><em style="color: white;">Typing...</em></div></div> <div><button class="btn btn-primary btn-lg mr-1 px-3" data-svelte-h="svelte-at0o8v"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone feather-lg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></button> <button class="btn btn-info btn-lg mr-1 px-3 d-none d-md-inline-block" data-svelte-h="svelte-ty8sx9"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video feather-lg"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg></button> <button class="btn btn-light border btn-lg px-3" data-svelte-h="svelte-1fp479o"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal feather-lg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button></div></div></div> <div class="right-messaging-middle" data-svelte-h="svelte-matdf6"><div class="chat-messages h-100"></div></div> <div class="search-bar-section flex-grow-0 py-3 px-4 border-top" data-svelte-h="svelte-npnhqy"><div class="input-group"><input type="text" class="form-control" placeholder="Type your message"> <button class="btn btn-primary">Send</button></div></div></div></div></div></main> </div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-AtIrQ5-T.js.map

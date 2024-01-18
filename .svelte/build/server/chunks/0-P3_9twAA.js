import { r as redirect } from './index-8pACjapJ.js';

const ssr = false;
const load = async ({ param, route, url }) => {
  let pathname = await url.pathname;
  console.log("urlis " + url);
  console.log(JSON.stringify(route));
  console.log("urlis " + param);
  await fetch("/usercheck", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(async function(response) {
    var responseData;
    await response.json().then((value) => {
      console.log(pathname);
      console.log(value);
      responseData = value;
      if (responseData["username"] != "") {
        if (pathname == "/access") {
          return redirect(302, "/");
        }
        return {};
      } else {
        if (pathname != "/access") {
          return redirect(302, "/access");
        } else {
          return {};
        }
      }
    }).catch((reason) => {
      if (pathname != "/access") {
        return redirect(302, "/access");
      } else {
        return {};
      }
    });
  }).catch((reason) => {
    if (pathname != "/access") {
      return redirect(302, "/access");
    } else {
      return {};
    }
  });
};

var _layout = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load,
  ssr: ssr
});

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./layout.svelte-_T9pvOHy.js')).default;
const universal_id = "src/routes/+layout.js";
const server_id = "src/routes/+layout.server.js";
const imports = ["_app/immutable/nodes/0.D5J91FqI.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.H2eWdqud.js","_app/immutable/chunks/index.m5B7PcF2.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=0-P3_9twAA.js.map

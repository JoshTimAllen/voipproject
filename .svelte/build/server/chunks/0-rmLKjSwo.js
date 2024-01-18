import './index-TYVuJacS.js';

const ssr = false;
const load = async ({ param, route, url }) => {
  await url.pathname;
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
const imports = ["_app/immutable/nodes/0.v-cItTFF.js","_app/immutable/chunks/scheduler.H2eWdqud.js","_app/immutable/chunks/index.cgrtaUxB.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=0-rmLKjSwo.js.map

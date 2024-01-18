import "../../chunks/index.js";
const ssr = false;
const load = async ({ param, route, url }) => {
  await url.pathname;
};
export {
  load,
  ssr
};

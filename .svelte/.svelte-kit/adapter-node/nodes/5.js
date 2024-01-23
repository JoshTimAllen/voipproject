

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.Pv4m0UHQ.js","_app/immutable/chunks/scheduler.8-zdWyAk.js","_app/immutable/chunks/index.51jaqohu.js"];
export const stylesheets = [];
export const fonts = [];

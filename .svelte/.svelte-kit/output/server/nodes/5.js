

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.RK-XFn5n.js","_app/immutable/chunks/scheduler.H2eWdqud.js","_app/immutable/chunks/index.m5B7PcF2.js"];
export const stylesheets = [];
export const fonts = [];

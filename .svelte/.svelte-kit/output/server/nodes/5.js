

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.KHL36Y7h.js","_app/immutable/chunks/scheduler.H2eWdqud.js","_app/immutable/chunks/index.cgrtaUxB.js"];
export const stylesheets = [];
export const fonts = [];

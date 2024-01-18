

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/access/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.RqHSqTEO.js","_app/immutable/chunks/scheduler.H2eWdqud.js","_app/immutable/chunks/index.cgrtaUxB.js","_app/immutable/chunks/index.DkTi4X39.js"];
export const stylesheets = ["_app/immutable/assets/3.AZSUyPmT.css"];
export const fonts = [];

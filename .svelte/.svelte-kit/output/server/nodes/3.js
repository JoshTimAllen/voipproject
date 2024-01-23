

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/access/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.7Xbp5cOj.js","_app/immutable/chunks/scheduler.8-zdWyAk.js","_app/immutable/chunks/index.51jaqohu.js","_app/immutable/chunks/entry.N0W8vSv0.js"];
export const stylesheets = ["_app/immutable/assets/3.AZSUyPmT.css"];
export const fonts = [];



export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.JuNb53YL.js","_app/immutable/chunks/scheduler.8-zdWyAk.js","_app/immutable/chunks/index.51jaqohu.js","_app/immutable/chunks/entry.N0W8vSv0.js"];
export const stylesheets = [];
export const fonts = [];

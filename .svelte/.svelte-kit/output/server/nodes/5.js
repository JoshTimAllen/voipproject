

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.TcsxeG8o.js","_app/immutable/chunks/scheduler.yr0P2XpG.js","_app/immutable/chunks/index.-woTSmpz.js"];
export const stylesheets = [];
export const fonts = [];

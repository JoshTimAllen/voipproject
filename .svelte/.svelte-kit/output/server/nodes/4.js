

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/call/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.n7OL-MMw.js","_app/immutable/chunks/scheduler.8-zdWyAk.js","_app/immutable/chunks/index.51jaqohu.js","_app/immutable/chunks/voice.8fjLNxo-.js"];
export const stylesheets = ["_app/immutable/assets/voice.pwFmyY6-.css"];
export const fonts = [];

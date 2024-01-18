

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/call/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.AWGJ0pSV.js","_app/immutable/chunks/scheduler.yr0P2XpG.js","_app/immutable/chunks/index.-woTSmpz.js","_app/immutable/chunks/voice.WNI9MXyP.js"];
export const stylesheets = ["_app/immutable/assets/voice.X8R3wilm.css"];
export const fonts = [];

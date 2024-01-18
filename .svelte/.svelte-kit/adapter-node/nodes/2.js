

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.nrC7r3td.js","_app/immutable/chunks/scheduler.H2eWdqud.js","_app/immutable/chunks/index.cgrtaUxB.js","_app/immutable/chunks/voice.jkNAABRa.js"];
export const stylesheets = ["_app/immutable/assets/2.v2XORUVm.css","_app/immutable/assets/voice.66ekT5YB.css"];
export const fonts = [];

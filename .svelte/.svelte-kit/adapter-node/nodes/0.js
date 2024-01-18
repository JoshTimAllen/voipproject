import * as universal from '../entries/pages/_layout.js';
import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.D5J91FqI.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.H2eWdqud.js","_app/immutable/chunks/index.m5B7PcF2.js"];
export const stylesheets = [];
export const fonts = [];

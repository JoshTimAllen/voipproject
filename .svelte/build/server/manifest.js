const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.uSI7vVhy.js","app":"_app/immutable/entry/app.nxj5EynI.js","imports":["_app/immutable/entry/start.uSI7vVhy.js","_app/immutable/chunks/entry.LbPLwYFF.js","_app/immutable/chunks/scheduler.H2eWdqud.js","_app/immutable/chunks/index.DkTi4X39.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/entry/app.nxj5EynI.js","_app/immutable/chunks/scheduler.H2eWdqud.js","_app/immutable/chunks/index.m5B7PcF2.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-P3_9twAA.js')),
			__memo(() => import('./chunks/1-ZgWVxU56.js')),
			__memo(() => import('./chunks/2-bxACnwKP.js')),
			__memo(() => import('./chunks/3-34Mqa_sv.js')),
			__memo(() => import('./chunks/4-kun4nS61.js')),
			__memo(() => import('./chunks/5-18-_Wb0s.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/access",
				pattern: /^\/access\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/call",
				pattern: /^\/call\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map

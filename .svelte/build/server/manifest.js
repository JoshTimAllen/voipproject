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
		client: {"start":"_app/immutable/entry/start.H2JEuBA9.js","app":"_app/immutable/entry/app.lzDXrW_w.js","imports":["_app/immutable/entry/start.H2JEuBA9.js","_app/immutable/chunks/entry.gEsxYB4x.js","_app/immutable/chunks/scheduler.H2eWdqud.js","_app/immutable/chunks/index.DkTi4X39.js","_app/immutable/entry/app.lzDXrW_w.js","_app/immutable/chunks/scheduler.H2eWdqud.js","_app/immutable/chunks/index.cgrtaUxB.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-rmLKjSwo.js')),
			__memo(() => import('./chunks/1-lXV5xy9g.js')),
			__memo(() => import('./chunks/2-y2l2JWta.js')),
			__memo(() => import('./chunks/3-rcEIgH3e.js')),
			__memo(() => import('./chunks/4-7KBIExLM.js')),
			__memo(() => import('./chunks/5-r4xFYuYf.js'))
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

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
		client: {"start":"_app/immutable/entry/start.xpfKwY4y.js","app":"_app/immutable/entry/app.ACftYRO2.js","imports":["_app/immutable/entry/start.xpfKwY4y.js","_app/immutable/chunks/entry.N0W8vSv0.js","_app/immutable/chunks/scheduler.8-zdWyAk.js","_app/immutable/entry/app.ACftYRO2.js","_app/immutable/chunks/scheduler.8-zdWyAk.js","_app/immutable/chunks/index.51jaqohu.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-hxDRMpsq.js')),
			__memo(() => import('./chunks/1-oUrYHcPJ.js')),
			__memo(() => import('./chunks/2-UhbMYh7Z.js')),
			__memo(() => import('./chunks/3--QUKoeBn.js')),
			__memo(() => import('./chunks/4-Y-md0MR7.js')),
			__memo(() => import('./chunks/5-yiZSWjRq.js'))
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

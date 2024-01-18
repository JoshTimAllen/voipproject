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
		client: {"start":"_app/immutable/entry/start.Vvrn_d8d.js","app":"_app/immutable/entry/app.6eaXwJrh.js","imports":["_app/immutable/entry/start.Vvrn_d8d.js","_app/immutable/chunks/entry.iJHXjvlp.js","_app/immutable/chunks/scheduler.yr0P2XpG.js","_app/immutable/chunks/index.9XZcsFHR.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/entry/app.6eaXwJrh.js","_app/immutable/chunks/scheduler.yr0P2XpG.js","_app/immutable/chunks/index.-woTSmpz.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-NNTNm6sc.js')),
			__memo(() => import('./chunks/1-ginVXN47.js')),
			__memo(() => import('./chunks/2-VYmd2usY.js')),
			__memo(() => import('./chunks/3-M73K1V4o.js')),
			__memo(() => import('./chunks/4-14O8_yVt.js')),
			__memo(() => import('./chunks/5-f6Kk53mo.js'))
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

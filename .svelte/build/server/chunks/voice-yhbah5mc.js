import { c as create_ssr_component, d as each, v as validate_component, m as missing_component } from './ssr-_WzSIGFI.js';
import 'https://esm.sh/peerjs@1.5.2?bundle-deps';

var lib = {exports: {}};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign () {
	if (hasRequiredObjectAssign) return objectAssign;
	hasRequiredObjectAssign = 1;
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};
	return objectAssign;
}

var vary = {exports: {}};

/*!
 * vary
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */

var hasRequiredVary;

function requireVary () {
	if (hasRequiredVary) return vary.exports;
	hasRequiredVary = 1;

	/**
	 * Module exports.
	 */

	vary.exports = vary$1;
	vary.exports.append = append;

	/**
	 * RegExp to match field-name in RFC 7230 sec 3.2
	 *
	 * field-name    = token
	 * token         = 1*tchar
	 * tchar         = "!" / "#" / "$" / "%" / "&" / "'" / "*"
	 *               / "+" / "-" / "." / "^" / "_" / "`" / "|" / "~"
	 *               / DIGIT / ALPHA
	 *               ; any VCHAR, except delimiters
	 */

	var FIELD_NAME_REGEXP = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;

	/**
	 * Append a field to a vary header.
	 *
	 * @param {String} header
	 * @param {String|Array} field
	 * @return {String}
	 * @public
	 */

	function append (header, field) {
	  if (typeof header !== 'string') {
	    throw new TypeError('header argument is required')
	  }

	  if (!field) {
	    throw new TypeError('field argument is required')
	  }

	  // get fields array
	  var fields = !Array.isArray(field)
	    ? parse(String(field))
	    : field;

	  // assert on invalid field names
	  for (var j = 0; j < fields.length; j++) {
	    if (!FIELD_NAME_REGEXP.test(fields[j])) {
	      throw new TypeError('field argument contains an invalid header name')
	    }
	  }

	  // existing, unspecified vary
	  if (header === '*') {
	    return header
	  }

	  // enumerate current values
	  var val = header;
	  var vals = parse(header.toLowerCase());

	  // unspecified vary
	  if (fields.indexOf('*') !== -1 || vals.indexOf('*') !== -1) {
	    return '*'
	  }

	  for (var i = 0; i < fields.length; i++) {
	    var fld = fields[i].toLowerCase();

	    // append value (case-preserving)
	    if (vals.indexOf(fld) === -1) {
	      vals.push(fld);
	      val = val
	        ? val + ', ' + fields[i]
	        : fields[i];
	    }
	  }

	  return val
	}

	/**
	 * Parse a vary header into an array.
	 *
	 * @param {String} header
	 * @return {Array}
	 * @private
	 */

	function parse (header) {
	  var end = 0;
	  var list = [];
	  var start = 0;

	  // gather tokens
	  for (var i = 0, len = header.length; i < len; i++) {
	    switch (header.charCodeAt(i)) {
	      case 0x20: /*   */
	        if (start === end) {
	          start = end = i + 1;
	        }
	        break
	      case 0x2c: /* , */
	        list.push(header.substring(start, end));
	        start = end = i + 1;
	        break
	      default:
	        end = i + 1;
	        break
	    }
	  }

	  // final token
	  list.push(header.substring(start, end));

	  return list
	}

	/**
	 * Mark that a request is varied on a header field.
	 *
	 * @param {Object} res
	 * @param {String|Array} field
	 * @public
	 */

	function vary$1 (res, field) {
	  if (!res || !res.getHeader || !res.setHeader) {
	    // quack quack
	    throw new TypeError('res argument is required')
	  }

	  // get existing header
	  var val = res.getHeader('Vary') || '';
	  var header = Array.isArray(val)
	    ? val.join(', ')
	    : String(val);

	  // set new header
	  if ((val = append(header, field))) {
	    res.setHeader('Vary', val);
	  }
	}
	return vary.exports;
}

var hasRequiredLib;

function requireLib () {
	if (hasRequiredLib) return lib.exports;
	hasRequiredLib = 1;
	(function () {

	  var assign = requireObjectAssign();
	  var vary = requireVary();

	  var defaults = {
	    origin: '*',
	    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	    preflightContinue: false,
	    optionsSuccessStatus: 204
	  };

	  function isString(s) {
	    return typeof s === 'string' || s instanceof String;
	  }

	  function isOriginAllowed(origin, allowedOrigin) {
	    if (Array.isArray(allowedOrigin)) {
	      for (var i = 0; i < allowedOrigin.length; ++i) {
	        if (isOriginAllowed(origin, allowedOrigin[i])) {
	          return true;
	        }
	      }
	      return false;
	    } else if (isString(allowedOrigin)) {
	      return origin === allowedOrigin;
	    } else if (allowedOrigin instanceof RegExp) {
	      return allowedOrigin.test(origin);
	    } else {
	      return !!allowedOrigin;
	    }
	  }

	  function configureOrigin(options, req) {
	    var requestOrigin = req.headers.origin,
	      headers = [],
	      isAllowed;

	    if (!options.origin || options.origin === '*') {
	      // allow any origin
	      headers.push([{
	        key: 'Access-Control-Allow-Origin',
	        value: '*'
	      }]);
	    } else if (isString(options.origin)) {
	      // fixed origin
	      headers.push([{
	        key: 'Access-Control-Allow-Origin',
	        value: options.origin
	      }]);
	      headers.push([{
	        key: 'Vary',
	        value: 'Origin'
	      }]);
	    } else {
	      isAllowed = isOriginAllowed(requestOrigin, options.origin);
	      // reflect origin
	      headers.push([{
	        key: 'Access-Control-Allow-Origin',
	        value: isAllowed ? requestOrigin : false
	      }]);
	      headers.push([{
	        key: 'Vary',
	        value: 'Origin'
	      }]);
	    }

	    return headers;
	  }

	  function configureMethods(options) {
	    var methods = options.methods;
	    if (methods.join) {
	      methods = options.methods.join(','); // .methods is an array, so turn it into a string
	    }
	    return {
	      key: 'Access-Control-Allow-Methods',
	      value: methods
	    };
	  }

	  function configureCredentials(options) {
	    if (options.credentials === true) {
	      return {
	        key: 'Access-Control-Allow-Credentials',
	        value: 'true'
	      };
	    }
	    return null;
	  }

	  function configureAllowedHeaders(options, req) {
	    var allowedHeaders = options.allowedHeaders || options.headers;
	    var headers = [];

	    if (!allowedHeaders) {
	      allowedHeaders = req.headers['access-control-request-headers']; // .headers wasn't specified, so reflect the request headers
	      headers.push([{
	        key: 'Vary',
	        value: 'Access-Control-Request-Headers'
	      }]);
	    } else if (allowedHeaders.join) {
	      allowedHeaders = allowedHeaders.join(','); // .headers is an array, so turn it into a string
	    }
	    if (allowedHeaders && allowedHeaders.length) {
	      headers.push([{
	        key: 'Access-Control-Allow-Headers',
	        value: allowedHeaders
	      }]);
	    }

	    return headers;
	  }

	  function configureExposedHeaders(options) {
	    var headers = options.exposedHeaders;
	    if (!headers) {
	      return null;
	    } else if (headers.join) {
	      headers = headers.join(','); // .headers is an array, so turn it into a string
	    }
	    if (headers && headers.length) {
	      return {
	        key: 'Access-Control-Expose-Headers',
	        value: headers
	      };
	    }
	    return null;
	  }

	  function configureMaxAge(options) {
	    var maxAge = (typeof options.maxAge === 'number' || options.maxAge) && options.maxAge.toString();
	    if (maxAge && maxAge.length) {
	      return {
	        key: 'Access-Control-Max-Age',
	        value: maxAge
	      };
	    }
	    return null;
	  }

	  function applyHeaders(headers, res) {
	    for (var i = 0, n = headers.length; i < n; i++) {
	      var header = headers[i];
	      if (header) {
	        if (Array.isArray(header)) {
	          applyHeaders(header, res);
	        } else if (header.key === 'Vary' && header.value) {
	          vary(res, header.value);
	        } else if (header.value) {
	          res.setHeader(header.key, header.value);
	        }
	      }
	    }
	  }

	  function cors(options, req, res, next) {
	    var headers = [],
	      method = req.method && req.method.toUpperCase && req.method.toUpperCase();

	    if (method === 'OPTIONS') {
	      // preflight
	      headers.push(configureOrigin(options, req));
	      headers.push(configureCredentials(options));
	      headers.push(configureMethods(options));
	      headers.push(configureAllowedHeaders(options, req));
	      headers.push(configureMaxAge(options));
	      headers.push(configureExposedHeaders(options));
	      applyHeaders(headers, res);

	      if (options.preflightContinue) {
	        next();
	      } else {
	        // Safari (and potentially other browsers) need content-length 0,
	        //   for 204 or they just hang waiting for a body
	        res.statusCode = options.optionsSuccessStatus;
	        res.setHeader('Content-Length', '0');
	        res.end();
	      }
	    } else {
	      // actual response
	      headers.push(configureOrigin(options, req));
	      headers.push(configureCredentials(options));
	      headers.push(configureExposedHeaders(options));
	      applyHeaders(headers, res);
	      next();
	    }
	  }

	  function middlewareWrapper(o) {
	    // if options are static (either via defaults or custom options passed in), wrap in a function
	    var optionsCallback = null;
	    if (typeof o === 'function') {
	      optionsCallback = o;
	    } else {
	      optionsCallback = function (req, cb) {
	        cb(null, o);
	      };
	    }

	    return function corsMiddleware(req, res, next) {
	      optionsCallback(req, function (err, options) {
	        if (err) {
	          next(err);
	        } else {
	          var corsOptions = assign({}, defaults, options);
	          var originCallback = null;
	          if (corsOptions.origin && typeof corsOptions.origin === 'function') {
	            originCallback = corsOptions.origin;
	          } else if (corsOptions.origin) {
	            originCallback = function (origin, cb) {
	              cb(null, corsOptions.origin);
	            };
	          }

	          if (originCallback) {
	            originCallback(req.headers.origin, function (err2, origin) {
	              if (err2 || !origin) {
	                next(err2);
	              } else {
	                corsOptions.origin = origin;
	                cors(corsOptions, req, res, next);
	              }
	            });
	          } else {
	            next();
	          }
	        }
	      });
	    };
	  }

	  // can pass either an options hash, an options delegate, or nothing
	  lib.exports = middlewareWrapper;

	}());
	return lib.exports;
}

requireLib();

const css = {
  code: ".incoming-call-container.svelte-19roec1{position:fixed;right:0;bottom:0;z-index:10000;width:450px;background:rgb(61, 61, 61);height:350px;margin-right:40px;display:flex;flex-direction:column;justify-content:space-evenly;align-items:center}.button-area.svelte-19roec1{width:100%;display:flex;justify-content:space-evenly;align-items:center}",
  map: null
};
const Incomingcall = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { callerUserName = "" } = $$props;
  let { Answer = (callerUserName2 = "") => {
  } } = $$props;
  let { Decline = (callerUserName2 = "") => {
  } } = $$props;
  if ($$props.callerUserName === void 0 && $$bindings.callerUserName && callerUserName !== void 0)
    $$bindings.callerUserName(callerUserName);
  if ($$props.Answer === void 0 && $$bindings.Answer && Answer !== void 0)
    $$bindings.Answer(Answer);
  if ($$props.Decline === void 0 && $$bindings.Decline && Decline !== void 0)
    $$bindings.Decline(Decline);
  $$result.css.add(css);
  return `<div class="incoming-call-container svelte-19roec1"><div class="image-container" data-svelte-h="svelte-1kyomsk"><img src="https://static.wikia.nocookie.net/worldtrigger/images/c/c4/Ko_88.png/revision/latest?cb=20211024225357" class="rounded-circle mr-1 incoming-img" alt="" width="220" height="220"></div> <div class="button-area svelte-19roec1"><button type="button" class="btn btn-success" data-svelte-h="svelte-u7x4sh">Answer</button> <button type="button" class="btn btn-danger" data-svelte-h="svelte-1da1e5r">Decline</button></div> </div>`;
});
class CallData {
  constructor() {
    this.participants = [];
  }
  participants = [];
}
const Voice = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { val = "hjbhjkhkjkjhkjhjklhkljklhjkl" } = $$props;
  let { incomingCalls = ["jkkjl;llllllll"] } = $$props;
  const event = new CustomEvent("event");
  let { calldata = new CallData() } = $$props;
  var socket = io("/", {});
  var peer;
  const Call = (callerUserName = "") => {
    var calldata2 = {
      userToCall: callerUserName,
      peerId: peer.id
    };
    socket.emit("call", calldata2);
  };
  let { Answer = (userToAnswer = "") => {
    var calldata2 = { otherUser: userToAnswer, peerId: peer.id };
    socket.emit("answer-call", calldata2);
  } } = $$props;
  let { Reject = (userToReject = "") => {
    var calldata2 = { otherUser: userToReject };
    socket.emit("reject-call", calldata2);
  } } = $$props;
  let { LeaveCall = () => {
    var calldata2 = {};
    socket.emit("leave-call", calldata2);
  } } = $$props;
  var audioQueue = [];
  var ableToPlayNew = true;
  setInterval(
    function() {
      if (ableToPlayNew) {
        audioPlay();
      }
    },
    100
  );
  function audioPlay() {
    if (ableToPlayNew) {
      if (audioQueue.length != 0) {
        let audio = new Audio(audioQueue.splice(0, 1)[0]);
        audio.addEventListener(
          "ended",
          function() {
            ableToPlayNew = true;
            audioPlay();
          },
          false
        );
        audio.play();
        ableToPlayNew = false;
      }
    }
  }
  if ($$props.val === void 0 && $$bindings.val && val !== void 0)
    $$bindings.val(val);
  if ($$props.incomingCalls === void 0 && $$bindings.incomingCalls && incomingCalls !== void 0)
    $$bindings.incomingCalls(incomingCalls);
  if ($$props.event === void 0 && $$bindings.event && event !== void 0)
    $$bindings.event(event);
  if ($$props.calldata === void 0 && $$bindings.calldata && calldata !== void 0)
    $$bindings.calldata(calldata);
  if ($$props.Call === void 0 && $$bindings.Call && Call !== void 0)
    $$bindings.Call(Call);
  if ($$props.Answer === void 0 && $$bindings.Answer && Answer !== void 0)
    $$bindings.Answer(Answer);
  if ($$props.Reject === void 0 && $$bindings.Reject && Reject !== void 0)
    $$bindings.Reject(Reject);
  if ($$props.LeaveCall === void 0 && $$bindings.LeaveCall && LeaveCall !== void 0)
    $$bindings.LeaveCall(LeaveCall);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${each(incomingCalls, (incomingcall) => {
      return `${validate_component(Incomingcall || missing_component, "svelte:component").$$render(
        $$result,
        {
          callerUserName: incomingcall,
          Answer,
          Decline: Reject
        },
        {
          Answer: ($$value) => {
            Answer = $$value;
            $$settled = false;
          },
          Decline: ($$value) => {
            Reject = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${``}`;
  } while (!$$settled);
  return $$rendered;
});

export { Voice as V };
//# sourceMappingURL=voice-yhbah5mc.js.map

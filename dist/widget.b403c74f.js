// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/api.ts":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendApi = exports.callApi = void 0;
/**
 * @description Method for calling API
 *
 * @param {string} url
 * @param {object} options
 * @return {void}
 */

function callApi(url, options) {
  if (options === void 0) {
    options = {};
  }

  return __awaiter(this, void 0, Promise, function () {
    var error_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3,, 4]);

          return [4
          /*yield*/
          , fetch(url, options)];

        case 1:
          return [4
          /*yield*/
          , _a.sent().json()];

        case 2:
          return [2
          /*return*/
          , _a.sent()];

        case 3:
          error_1 = _a.sent();
          return [2
          /*return*/
          , null];

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
}

exports.callApi = callApi;
/**
 * @description Method for calling API
 *
 * @param {string} url
 * @param {string} method
 * @param {any} data
 * @param {any} options
 *
 * @return {void}
 */

function sendApi(url, method, data, options) {
  if (method === void 0) {
    method = 'POST';
  }

  if (options === void 0) {
    options = {};
  }

  return __awaiter(this, void 0, Promise, function () {
    var error_2;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3,, 4]);

          return [4
          /*yield*/
          , fetch(url, __assign({
            method: method,
            mode: 'no-cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
          }, options))];

        case 1:
          return [4
          /*yield*/
          , _a.sent().json()];

        case 2:
          return [2
          /*return*/
          , _a.sent()];

        case 3:
          error_2 = _a.sent();
          return [2
          /*return*/
          , null];

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
}

exports.sendApi = sendApi;
},{}],"../node_modules/uuid/dist/esm-browser/rng.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rng;
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);

function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}
},{}],"../node_modules/uuid/dist/esm-browser/regex.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
exports.default = _default;
},{}],"../node_modules/uuid/dist/esm-browser/validate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regex = _interopRequireDefault(require("./regex.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(uuid) {
  return typeof uuid === 'string' && _regex.default.test(uuid);
}

var _default = validate;
exports.default = _default;
},{"./regex.js":"../node_modules/uuid/dist/esm-browser/regex.js"}],"../node_modules/uuid/dist/esm-browser/stringify.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = _interopRequireDefault(require("./validate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0; // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

var _default = stringify;
exports.default = _default;
},{"./validate.js":"../node_modules/uuid/dist/esm-browser/validate.js"}],"../node_modules/uuid/dist/esm-browser/v1.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rng = _interopRequireDefault(require("./rng.js"));

var _stringify = _interopRequireDefault(require("./stringify.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || _rng.default)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0, _stringify.default)(b);
}

var _default = v1;
exports.default = _default;
},{"./rng.js":"../node_modules/uuid/dist/esm-browser/rng.js","./stringify.js":"../node_modules/uuid/dist/esm-browser/stringify.js"}],"../node_modules/uuid/dist/esm-browser/parse.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = _interopRequireDefault(require("./validate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

var _default = parse;
exports.default = _default;
},{"./validate.js":"../node_modules/uuid/dist/esm-browser/validate.js"}],"../node_modules/uuid/dist/esm-browser/v35.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.URL = exports.DNS = void 0;

var _stringify = _interopRequireDefault(require("./stringify.js"));

var _parse = _interopRequireDefault(require("./parse.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
exports.DNS = DNS;
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
exports.URL = URL;

function _default(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0, _parse.default)(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0, _stringify.default)(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}
},{"./stringify.js":"../node_modules/uuid/dist/esm-browser/stringify.js","./parse.js":"../node_modules/uuid/dist/esm-browser/parse.js"}],"../node_modules/uuid/dist/esm-browser/md5.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

var _default = md5;
exports.default = _default;
},{}],"../node_modules/uuid/dist/esm-browser/v3.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _v = _interopRequireDefault(require("./v35.js"));

var _md = _interopRequireDefault(require("./md5.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var v3 = (0, _v.default)('v3', 0x30, _md.default);
var _default = v3;
exports.default = _default;
},{"./v35.js":"../node_modules/uuid/dist/esm-browser/v35.js","./md5.js":"../node_modules/uuid/dist/esm-browser/md5.js"}],"../node_modules/uuid/dist/esm-browser/v4.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rng = _interopRequireDefault(require("./rng.js"));

var _stringify = _interopRequireDefault(require("./stringify.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function v4(options, buf, offset) {
  options = options || {};

  var rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0, _stringify.default)(rnds);
}

var _default = v4;
exports.default = _default;
},{"./rng.js":"../node_modules/uuid/dist/esm-browser/rng.js","./stringify.js":"../node_modules/uuid/dist/esm-browser/stringify.js"}],"../node_modules/uuid/dist/esm-browser/sha1.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

var _default = sha1;
exports.default = _default;
},{}],"../node_modules/uuid/dist/esm-browser/v5.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _v = _interopRequireDefault(require("./v35.js"));

var _sha = _interopRequireDefault(require("./sha1.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var v5 = (0, _v.default)('v5', 0x50, _sha.default);
var _default = v5;
exports.default = _default;
},{"./v35.js":"../node_modules/uuid/dist/esm-browser/v35.js","./sha1.js":"../node_modules/uuid/dist/esm-browser/sha1.js"}],"../node_modules/uuid/dist/esm-browser/nil.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = '00000000-0000-0000-0000-000000000000';
exports.default = _default;
},{}],"../node_modules/uuid/dist/esm-browser/version.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = _interopRequireDefault(require("./validate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function version(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

var _default = version;
exports.default = _default;
},{"./validate.js":"../node_modules/uuid/dist/esm-browser/validate.js"}],"../node_modules/uuid/dist/esm-browser/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "v1", {
  enumerable: true,
  get: function () {
    return _v.default;
  }
});
Object.defineProperty(exports, "v3", {
  enumerable: true,
  get: function () {
    return _v2.default;
  }
});
Object.defineProperty(exports, "v4", {
  enumerable: true,
  get: function () {
    return _v3.default;
  }
});
Object.defineProperty(exports, "v5", {
  enumerable: true,
  get: function () {
    return _v4.default;
  }
});
Object.defineProperty(exports, "NIL", {
  enumerable: true,
  get: function () {
    return _nil.default;
  }
});
Object.defineProperty(exports, "version", {
  enumerable: true,
  get: function () {
    return _version.default;
  }
});
Object.defineProperty(exports, "validate", {
  enumerable: true,
  get: function () {
    return _validate.default;
  }
});
Object.defineProperty(exports, "stringify", {
  enumerable: true,
  get: function () {
    return _stringify.default;
  }
});
Object.defineProperty(exports, "parse", {
  enumerable: true,
  get: function () {
    return _parse.default;
  }
});

var _v = _interopRequireDefault(require("./v1.js"));

var _v2 = _interopRequireDefault(require("./v3.js"));

var _v3 = _interopRequireDefault(require("./v4.js"));

var _v4 = _interopRequireDefault(require("./v5.js"));

var _nil = _interopRequireDefault(require("./nil.js"));

var _version = _interopRequireDefault(require("./version.js"));

var _validate = _interopRequireDefault(require("./validate.js"));

var _stringify = _interopRequireDefault(require("./stringify.js"));

var _parse = _interopRequireDefault(require("./parse.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./v1.js":"../node_modules/uuid/dist/esm-browser/v1.js","./v3.js":"../node_modules/uuid/dist/esm-browser/v3.js","./v4.js":"../node_modules/uuid/dist/esm-browser/v4.js","./v5.js":"../node_modules/uuid/dist/esm-browser/v5.js","./nil.js":"../node_modules/uuid/dist/esm-browser/nil.js","./version.js":"../node_modules/uuid/dist/esm-browser/version.js","./validate.js":"../node_modules/uuid/dist/esm-browser/validate.js","./stringify.js":"../node_modules/uuid/dist/esm-browser/stringify.js","./parse.js":"../node_modules/uuid/dist/esm-browser/parse.js"}],"js/constants.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MOCK_CASH_ADVANCE_OFFERS = exports.CHECK_SUCCESS = exports.ARROW_RIGHT = exports.REQUIRED_ITEMS = exports.INITIAL_CONTENT = exports.LOGO_ICON = exports.BACK_ICON = exports.CANCEL_ICON = exports.LENKIE_SAMPLE_PREQUALIFICATION = exports.LENKIE_DATA_STATE = void 0;

var uuid_1 = require("uuid");

var sellerId = (0, uuid_1.v4)();
var id = (0, uuid_1.v4)();
var platformSellerId = (0, uuid_1.v4)();
exports.LENKIE_DATA_STATE = {
  NAME: 'LENKIE_WIDGET',
  LOAD_ERROR: 'LOAD_ERROR',
  LOAD_SUCCESS: 'LOAD_SUCCESS',
  CLOSE: 'CLOSE',
  GO_BACK: 'GO_BACK',
  CHANGE_SCREEN: 'CHANGE_SCREEN',
  NOT_INTERESTED: 'NOT_INTERESTED',
  NOT_INTERESTED_OPTIONS: 'NOT_INTERESTED_OPTIONS',
  NOT_INTERESTED_OPTIONS_ERROR: 'NOT_INTERESTED_OPTIONS_ERROR'
};
exports.LENKIE_SAMPLE_PREQUALIFICATION = {
  amount: 50000,
  bank_account_connected: false,
  currency_code: "GBP",
  estimated_repayment_time: "10 Months",
  id: "388d5715-a3e7-4d85-9d7b-f9f424ad1352",
  lenkie_seller_id: "0830b55f-4cfd-4a62-8b68-9d96f9750403",
  offer_url: "https://uat-partners.lenkie.com/lenkify?sellerId=" + sellerId + "&platformId=c" + platformSellerId + "&utm_medium=widget&utm_source=core-pay&utm_campaign=cash+advance+pre-qualification+offer",
  percentage_fee: 0.07,
  platform_id: "c6457301-bbe3-42c1-a005-d3beeef59567",
  platform_name: "Lenkify",
  platform_seller_id: "0830b55f-4cfd-4a62-8b68-9d96f9750403",
  repayment_percentage: 0.2,
  seller_name: "Chike Lenkie",
  valid_from: "2022-01-18T14:15:22+00:00",
  valid_to: "2023-01-18T14:15:22+00:00"
};
exports.CANCEL_ICON = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17 1L1 17\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M1 1L17 17\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>";
exports.BACK_ICON = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M10 19l-7-7m0 0l7-7m-7 7h18\" />\n</svg>";
exports.LOGO_ICON = "<svg width=\"94\" height=\"29\" viewBox=\"0 0 94 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.35517 0.743164V28.4818H0.755859V0.743164H5.35517ZM16.6015 9.03116C17.8056 9.03116 18.9104 9.22405 19.9159 9.60983C20.9339 9.99561 21.809 10.5618 22.5414 11.3085C23.2739 12.0427 23.8449 12.9512 24.2546 14.0338C24.6642 15.1041 24.869 16.3298 24.869 17.7112C24.869 18.0596 24.8504 18.3521 24.8132 18.5885C24.7883 18.8125 24.7325 18.9929 24.6456 19.1298C24.5711 19.2543 24.4656 19.3476 24.329 19.4098C24.1925 19.4596 24.0187 19.4845 23.8077 19.4845H12.0022C12.1387 21.4507 12.6663 22.8943 13.5849 23.8152C14.5036 24.7361 15.7201 25.1965 17.2346 25.1965C17.9794 25.1965 18.6187 25.1094 19.1525 24.9352C19.6987 24.7609 20.1704 24.5681 20.5677 24.3565C20.9773 24.1449 21.3311 23.9521 21.629 23.7778C21.9394 23.6036 22.2373 23.5165 22.5228 23.5165C22.709 23.5165 22.8704 23.5538 23.007 23.6285C23.1435 23.7032 23.2614 23.8089 23.3608 23.9458L24.7014 25.6258C24.1925 26.2232 23.6214 26.7272 22.9883 27.1378C22.3552 27.536 21.6911 27.8596 20.9959 28.1085C20.3132 28.3449 19.6118 28.5129 18.8918 28.6125C18.1842 28.712 17.4953 28.7618 16.8249 28.7618C15.4967 28.7618 14.2615 28.5441 13.1194 28.1085C11.9774 27.6605 10.9842 27.0072 10.1401 26.1485C9.29597 25.2774 8.63183 24.2072 8.14769 22.9378C7.66356 21.656 7.42149 20.1752 7.42149 18.4952C7.42149 17.1885 7.63252 15.9627 8.05459 14.8178C8.47666 13.6605 9.07873 12.6587 9.8608 11.8125C10.6553 10.9538 11.6173 10.2756 12.747 9.77783C13.8891 9.28005 15.1739 9.03116 16.6015 9.03116ZM16.6946 12.3352C15.3539 12.3352 14.3049 12.7147 13.5477 13.4738C12.7905 14.2329 12.3063 15.3094 12.0953 16.7032H20.7352C20.7352 16.1058 20.6546 15.5458 20.4932 15.0232C20.3318 14.4881 20.0835 14.0214 19.7483 13.6232C19.4132 13.2249 18.9911 12.9138 18.4822 12.6898C17.9732 12.4534 17.3773 12.3352 16.6946 12.3352ZM26.7379 28.4818V9.32983H29.5497C30.1455 9.32983 30.5366 9.60983 30.7228 10.1698L31.0393 11.6818C31.4241 11.2836 31.8276 10.9227 32.2497 10.5992C32.6841 10.2756 33.1372 9.99561 33.609 9.75916C34.0931 9.52272 34.6083 9.34227 35.1545 9.21783C35.7007 9.09338 36.2966 9.03116 36.9421 9.03116C37.9848 9.03116 38.9097 9.21161 39.7165 9.5725C40.5234 9.92094 41.1938 10.4187 41.7276 11.0658C42.2738 11.7005 42.6834 12.4658 42.9566 13.3618C43.2421 14.2454 43.3848 15.2223 43.3848 16.2925V28.4818H38.7855V16.2925C38.7855 15.1227 38.5124 14.2205 37.9662 13.5858C37.4324 12.9387 36.6255 12.6152 35.5455 12.6152C34.751 12.6152 34.0062 12.7956 33.311 13.1565C32.6159 13.5174 31.9579 14.0089 31.3372 14.6312V28.4818H26.7379ZM50.6974 0.743164V16.6285H51.5539C51.8643 16.6285 52.1063 16.5849 52.2801 16.4978C52.4539 16.4107 52.6401 16.2489 52.8388 16.0125L57.587 10.1325C57.7981 9.88361 58.0215 9.69072 58.2574 9.55383C58.4932 9.4045 58.8036 9.32983 59.1884 9.32983H63.3967L57.4567 16.4418C57.2457 16.7032 57.0284 16.9458 56.805 17.1698C56.5815 17.3814 56.3394 17.5681 56.0788 17.7298C56.3394 17.9165 56.5691 18.1343 56.7677 18.3832C56.9663 18.632 57.165 18.8996 57.3636 19.1858L63.7319 28.4818H59.5794C59.2194 28.4818 58.9153 28.4196 58.667 28.2952C58.4188 28.1707 58.1953 27.9592 57.9967 27.6605L53.1367 20.3992C52.9505 20.1129 52.7643 19.9263 52.5781 19.8392C52.3919 19.7521 52.1125 19.7085 51.7401 19.7085H50.6974V28.4818H46.0981V0.743164H50.6974Z\" fill=\"#ffffff\"></path><path d=\"M84.9036 9.03125C86.1078 9.03125 87.2126 9.22414 88.2181 9.60992C89.236 9.99569 90.1112 10.5619 90.8436 11.3086C91.576 12.0428 92.1471 12.9513 92.5567 14.0339C92.9664 15.1041 93.1712 16.3299 93.1712 17.7113C93.1712 18.0597 93.1526 18.3521 93.1153 18.5886C93.0905 18.8126 93.0346 18.993 92.9478 19.1299C92.8733 19.2544 92.7678 19.3477 92.6312 19.4099C92.4946 19.4597 92.3209 19.4846 92.1098 19.4846H80.3043C80.4409 21.4508 80.9685 22.8944 81.8871 23.8153C82.8057 24.7361 84.0222 25.1966 85.5367 25.1966C86.2816 25.1966 86.9209 25.1095 87.4547 24.9353C88.0009 24.761 88.4726 24.5681 88.8698 24.3566C89.2795 24.145 89.6333 23.9521 89.9312 23.7779C90.2415 23.6037 90.5395 23.5166 90.825 23.5166C91.0112 23.5166 91.1726 23.5539 91.3091 23.6286C91.4457 23.7032 91.5636 23.809 91.6629 23.9459L93.0036 25.6259C92.4946 26.2232 91.9236 26.7272 91.2905 27.1379C90.6574 27.5361 89.9933 27.8597 89.2981 28.1086C88.6153 28.345 87.914 28.513 87.194 28.6126C86.4864 28.7121 85.7974 28.7619 85.1271 28.7619C83.7988 28.7619 82.5636 28.5441 81.4216 28.1086C80.2795 27.6606 79.2864 27.0072 78.4422 26.1486C77.5981 25.2775 76.934 24.2072 76.4498 22.9379C75.9657 21.6561 75.7236 20.1753 75.7236 18.4953C75.7236 17.1886 75.9347 15.9628 76.3567 14.8179C76.7788 13.6606 77.3809 12.6588 78.1629 11.8126C78.9574 10.9539 79.9195 10.2757 81.0491 9.77792C82.1912 9.28014 83.476 9.03125 84.9036 9.03125ZM84.9967 12.3353C83.656 12.3353 82.6071 12.7148 81.8498 13.4739C81.0926 14.233 80.6085 15.3095 80.3974 16.7033H89.0374C89.0374 16.1059 88.9567 15.5459 88.7953 15.0232C88.634 14.4881 88.3857 14.0215 88.0505 13.6233C87.7153 13.225 87.2933 12.9139 86.7843 12.6899C86.2753 12.4535 85.6795 12.3353 84.9967 12.3353Z\" fill=\"#ffffff\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M71.6642 16.7635C73.3059 16.0424 74.4529 14.3989 74.4529 12.487C74.4529 9.90973 72.3686 7.82031 69.7977 7.82031C67.2269 7.82031 65.1426 9.90973 65.1426 12.487C65.1426 14.4016 66.2925 16.0467 67.938 16.7662L66.4258 22.4154L65.2036 26.8755C64.9824 27.6827 65.3898 28.5611 65.9855 28.5611H73.61C74.2038 28.5611 74.6112 27.6881 74.3935 26.8815L71.6642 16.7635Z\" fill=\"#F5A623\"></path></svg>";
exports.INITIAL_CONTENT = [{
  icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\" d=\"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6\" />\n</svg>",
  label: 'Seamless application process',
  description: 'We analyze real-time platform data to pre-approve growth capital for sellers on your platform.'
}, {
  icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\" d=\"M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z\" />\n</svg>",
  label: 'No Collateral or guarantees required',
  description: 'We offer your sellers an instant growth capital credit facility that is automatically repaid via a percentage of sales.'
}, {
  icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\" d=\"M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z\" />\n</svg>",
  label: 'Mutual growth',
  description: 'Access growth capital on-demand which scales continuously with the growth of your business.'
}];
exports.REQUIRED_ITEMS = [{
  icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\" />\n</svg>",
  label: 'Bank account connection',
  key: 'bank',
  description: 'Connecting your bank accounts enables us to determine the appropriate cash advance amount for your business.'
}, {
  icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\" />\n</svg>",
  label: 'Ecommerce account data',
  key: 'ecommerce',
  description: 'We integrate with your e-commerce accounts to analyse your historical sales. Add all your e-commerce accounts so we can provide you with the most competitive rate.'
}, {
  icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\" />\n</svg>",
  label: 'Payment service data',
  key: 'payment',
  description: 'We integrate with your payment software to analyse your historical sales. Connect your payment accounts so we can provide you with the most competitive rate.'
}];
exports.ARROW_RIGHT = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1\" d=\"M13 7l5 5m0 0l-5 5m5-5H6\" />\n</svg>";
exports.CHECK_SUCCESS = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z\" />\n</svg>";
exports.MOCK_CASH_ADVANCE_OFFERS = [{
  tpa: 50000,
  rrr: 7,
  car: 0.03
}, {
  tpa: 81000,
  rrr: 5,
  car: 0.08
}, {
  tpa: 25000,
  rrr: 15,
  car: 0.07
}];
},{"uuid":"../node_modules/uuid/dist/esm-browser/index.js"}],"js/style.ts":[function(require,module,exports) {
"use strict";
/* eslint-disable max-len */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STYLE = exports.CONTENT_STYLE = exports.BACKDROP_STYLE = void 0;
exports.BACKDROP_STYLE = 'position:fixed;overflow: hidden;display: none;justify-content: center;align-items: center;z-index: 999999999;height: 100%;width: 100%;color: transparent;background: rgba(0, 0, 0, 0.6);visibility:hidden;margin: 0;top:0;right:0;bottom:0;left:0;';
exports.CONTENT_STYLE = 'position: fixed;display: none;overflow: hidden;z-index: 999999999;width: 100%;height: 100%;transition: opacity 0.3s ease 0s;visibility:hidden;margin: 0;top:0;right:0;bottom:0;left:0;';
exports.STYLE = "\n.widget__backdrop {" + exports.BACKDROP_STYLE + "}\n.widget__content {" + exports.CONTENT_STYLE + "}\n.widget_loader {\n  text-align: center;\n  color: white;\n  margin-right: -30px;\n  width: 100%;\n  position: fixed;\n  display: none;\n}\n@-webkit-keyframes lenkie-widget_loader__spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.lenkie-widget_loader__spinner {\n  position: relative;\n  display: inline-block;\n  width: fit-content;\n}\n.lenkie-widget_loader__spinner div {\n  position: absolute;\n  -webkit-animation: lenkie-widget_loader__spinner linear 1s infinite;\n  animation: lenkie-widget_loader__spinner linear 1s infinite;\n  background: white;\n  width: 10px;\n  height: 30px;\n  border-radius: 40%;\n  -webkit-transform-origin: 5px 65px;\n  transform-origin: 5px 65px;\n}\n.lenkie-widget_loader__spinner div:nth-child(1) {\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-animation-delay: -0.916666666666667s;\n  animation-delay: -0.916666666666667s;\n}\n.lenkie-widget_loader__spinner div:nth-child(2) {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg);\n  -webkit-animation-delay: -0.833333333333333s;\n  animation-delay: -0.833333333333333s;\n}\n.lenkie-widget_loader__spinner div:nth-child(3) {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg);\n  -webkit-animation-delay: -0.75s;\n  animation-delay: -0.75s;\n}\n.lenkie-widget_loader__spinner div:nth-child(4) {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n  -webkit-animation-delay: -0.666666666666667s;\n  animation-delay: -0.666666666666667s;\n}\n.lenkie-widget_loader__spinner div:nth-child(5) {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg);\n  -webkit-animation-delay: -0.583333333333333s;\n  animation-delay: -0.583333333333333s;\n}\n.lenkie-widget_loader__spinner div:nth-child(6) {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg);\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s;\n}\n.lenkie-widget_loader__spinner div:nth-child(7) {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n  -webkit-animation-delay: -0.416666666666667s;\n  animation-delay: -0.416666666666667s;\n}\n.lenkie-widget_loader__spinner div:nth-child(8) {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg);\n  -webkit-animation-delay: -0.333333333333333s;\n  animation-delay: -0.333333333333333s;\n}\n.lenkie-widget_loader__spinner div:nth-child(9) {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg);\n  -webkit-animation-delay: -0.25s;\n  animation-delay: -0.25s;\n}\n.lenkie-widget_loader__spinner div:nth-child(10) {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg);\n  -webkit-animation-delay: -0.166666666666667s;\n  animation-delay: -0.166666666666667s;\n}\n.lenkie-widget_loader__spinner div:nth-child(11) {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg);\n  -webkit-animation-delay: -0.083333333333333s;\n  animation-delay: -0.083333333333333s;\n}\n.lenkie-widget_loader__spinner div:nth-child(12) {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg);\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n}\n.lenkie-widget_loader__spinner {\n  -webkit-transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px);\n  transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px);\n}\n";
},{}],"js/utils.ts":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __values = this && this.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayDataNotAvailable = exports.navigateScreen = exports.createElement = exports.createStylesheet = exports.createLoader = exports.loadCss = exports.makeModalInvisible = exports.makeModalVisible = exports.openWidget = exports.hideTopNotification = exports.navigateToURL = exports.submitNotInterestedForm = exports.backStageTwo = exports.leaveStageTwo = exports.handleDismiss = exports.handleViewed = exports.handleNotInterested = exports.screenNotInterested = exports.screenInitialOffer = exports.displayFirstScreen = exports.startDisplay = exports.installWidget = void 0;

var api_1 = require("./api");

var constants_1 = require("./constants");

var style_1 = require("./style");

window.addEventListener(constants_1.LENKIE_DATA_STATE.CLOSE, makeModalInvisible);
window.addEventListener(constants_1.LENKIE_DATA_STATE.CHANGE_SCREEN, navigateScreen);
window.addEventListener(constants_1.LENKIE_DATA_STATE.NOT_INTERESTED_OPTIONS, setNotInterestedOptions);
var NOT_INTERESTED_OPTIONS = new Set();
/**
 * @description Install modal and fetch properties
 *
 * @param {WidgetArgs} config
 * @return {void}
 */

function installWidget(config) {
  var name = config.backdropId || 'lenkie-widget';
  var container = document.createElement('div');
  var widgetContent = document.createElement('div');
  container.setAttribute('id', name);
  container.setAttribute('style', style_1.BACKDROP_STYLE);
  widgetContent.setAttribute('id', 'lenkie-widget__content');
  widgetContent.style.display = 'none';
  container.appendChild(widgetContent);
  document.body.insertBefore(container, document.body.childNodes[0]);
  var closeButton = createElement({
    name: 'div',
    attributes: [['role', 'button'], ['aria-label', 'close'], ['class', 'lenkie-close-button']]
  });
  var backButton = createElement({
    name: 'div',
    attributes: [['role', 'button'], ['aria-label', 'close'], ['id', 'lenkie-back-button'], ['class', 'lenkie-back-button']]
  });
  backButton.innerHTML = constants_1.BACK_ICON;
  closeButton.innerHTML = constants_1.CANCEL_ICON;
  backButton.style.visibility = 'hidden';
  closeButton.addEventListener('click', handleDismiss);
  widgetContent.appendChild(backButton);
  widgetContent.appendChild(closeButton);
  var loader = createLoader();
  document.getElementById(name).appendChild(loader); // Show initial view

  startDisplay(config);
  return container;
}

exports.installWidget = installWidget;
/**
 * @description Display initial widget view
 * @param {WidgetArgs} config
 * @return {void}
 */

function startDisplay(config) {
  displayFirstScreen(config);
}

exports.startDisplay = startDisplay;
/**
 * @description Switch to next phase
 *
 * @param {WidgetArgs} config
 * @return {void}
 */

function displayFirstScreen(config) {
  var widgetContent = document.getElementById('lenkie-widget__content');
  var backButton = document.querySelector('.lenkie-back-button');
  var closeButton = document.querySelector('.lenkie-close-button');
  widgetContent.style.background = '#fff';
  backButton.style.color = '#1A2D5B';
  closeButton.style.color = '#1A2D5B';
  screenInitialOffer(config);
}

exports.displayFirstScreen = displayFirstScreen;
/**
 * @description Switch to next phase
 *
 * @param {WidgetArgs} config
 * @return {void}
 */

function screenInitialOffer(config) {
  var API_DATA = JSON.parse(localStorage.getItem(constants_1.LENKIE_DATA_STATE.LOAD_SUCCESS));

  if (!API_DATA) {
    displayDataNotAvailable();
    return;
  }

  var stageTwoWrapper = document.getElementById('widget-stage-two__content');

  if (stageTwoWrapper) {
    stageTwoWrapper.remove();
  }

  var amount = API_DATA.amount;
  var widgetContent = document.getElementById('lenkie-widget__content');
  stageTwoWrapper = createElement({
    name: 'div',
    attributes: [['id', 'widget-stage-two__content'], ['class', 'lenkie-widget-initial__content']]
  });
  var pageTitle = createElement({
    name: 'h2',
    attributes: [['class', 'widget-stage-two__title']]
  });
  var pageDesc = createElement({
    name: 'p',
    attributes: [['class', 'widget-stage-two__desc']]
  });
  pageTitle.innerText = 'Fund your business';
  pageDesc.innerHTML = "<p>Congratulations, based on your sales performance, your business qualifies for an " + (config === null || config === void 0 ? void 0 : config.platformName) + " cash advance.</p>";
  stageTwoWrapper.appendChild(pageTitle);
  stageTwoWrapper.appendChild(pageDesc); // Display content

  var contentParent = createElement({
    name: 'div',
    attributes: [['id', 'widget-stage-two__wrapper'], ['class', 'widget-stage__wrapper']]
  });
  var offerDisplay = createElement({
    name: 'div',
    attributes: [['class', 'widget-stage-offer-display']]
  });
  var text = createElement({
    name: 'div',
    attributes: [['class', 'widget-stage-two__item']]
  });
  var totalPaymentAmountLabel = createElement({
    name: 'label',
    attributes: [['class', 'widget-stage-two__item-label']]
  });
  var cashAdvanceStatement = createElement({
    name: 'label',
    attributes: [['class', 'widget-stage-two__item-label']],
    text: 'Cash advance fees starting from 6%'
  });
  var totalPaymentAmount = createElement({
    name: 'h3',
    attributes: [['class', 'widget-stage-two__item-tpa']]
  });
  totalPaymentAmount.innerText = formatToCurrency(amount);
  totalPaymentAmountLabel.innerText = 'Total payout amount';
  offerDisplay.appendChild(totalPaymentAmountLabel);
  offerDisplay.appendChild(totalPaymentAmount);
  offerDisplay.appendChild(cashAdvanceStatement);
  contentParent.appendChild(offerDisplay);
  contentParent.appendChild(text);
  var notInterested = createElement({
    name: 'button',
    attributes: [['class', 'not-interested']],
    text: "Not interested in additional funding"
  });
  notInterested.addEventListener('click', function () {
    return window.dispatchEvent(new CustomEvent(constants_1.LENKIE_DATA_STATE.CHANGE_SCREEN, {
      detail: {
        screen: 1
      }
    }));
  }); // Display footer button

  var footerWrapper = createElement({
    name: 'div',
    attributes: [['id', 'widget-content__footer']]
  });
  var footerButton = createElement({
    name: 'button',
    attributes: [['id', 'widget-content__footer-button-2']]
  });
  footerButton.innerHTML = 'View this offer  &#x2192;';
  footerButton.addEventListener('click', handleViewed);
  footerWrapper.style.height = 'auto';
  footerButton.style.marginTop = '2rem';
  footerWrapper.appendChild(footerButton);
  footerWrapper.appendChild(notInterested);
  stageTwoWrapper.appendChild(contentParent);
  stageTwoWrapper.appendChild(footerWrapper);
  widgetContent.appendChild(stageTwoWrapper);
}

exports.screenInitialOffer = screenInitialOffer;
/**
 * @description Switch to next phase
 *
 * @return {void}
 */

function screenNotInterested() {
  var e_1, _a;

  var API_DATA = JSON.parse(localStorage.getItem(constants_1.LENKIE_DATA_STATE.LOAD_SUCCESS));

  if (!API_DATA) {
    displayDataNotAvailable();
    return;
  }

  var stageThreeWrapper = document.getElementById('widget-stage-three__content');

  if (stageThreeWrapper) {
    stageThreeWrapper.remove();
  }

  var widgetContent = document.getElementById('lenkie-widget__content');
  stageThreeWrapper = createElement({
    name: 'div',
    attributes: [['id', 'widget-stage-three__content'], ['class', 'widget-stage__wrapper']]
  });
  var pageTitle = createElement({
    name: 'h2',
    attributes: [['class', 'widget-stage-three__title']]
  });
  pageTitle.innerText = 'Help us improve our product offering';
  stageThreeWrapper.appendChild(pageTitle); // Stage content

  var contentParent = createElement({
    name: 'div',
    attributes: [['class', 'widget-stage-three__content']]
  });
  var descriptionText = createElement({
    name: 'p',
    text: 'Please provide feedback on why you are not interested in the funding:',
    attributes: [['class', 'widget-stage-three__desc widget-stage-three__desc-text']]
  });
  contentParent.appendChild(descriptionText);
  var form = createElement({
    name: 'form',
    attributes: [['id', 'not-intrested-form']]
  });
  form.addEventListener('submit', submitNotInterestedForm);

  try {
    for (var NOT_INTERESTED_OPTIONS_1 = __values(NOT_INTERESTED_OPTIONS), NOT_INTERESTED_OPTIONS_1_1 = NOT_INTERESTED_OPTIONS_1.next(); !NOT_INTERESTED_OPTIONS_1_1.done; NOT_INTERESTED_OPTIONS_1_1 = NOT_INTERESTED_OPTIONS_1.next()) {
      var option = NOT_INTERESTED_OPTIONS_1_1.value;
      var c = createElement({
        name: 'div',
        attributes: [['class', 'widget-content__item widget-content__item-three']]
      });
      var label = createElement({
        name: 'label',
        attributes: [['class', 'widget-content__item-label'], ['for', option.reason === 'Other' ? 'na-other' : 'na-input-' + option.id]],
        text: option.reason
      });
      var input = createElement({
        name: 'input',
        attributes: [['class', 'widget-content__item-input'], ['type', 'checkbox'], ['id', option.reason === 'Other' ? 'na-other' : 'na-input-' + option.id], ['name', 'na-choice'], ['value', option.id]]
      });
      input.addEventListener('change', listenForOtherOptionSelectedForNotInterested);
      c.appendChild(input);
      c.appendChild(label);
      contentParent.appendChild(c);
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (NOT_INTERESTED_OPTIONS_1_1 && !NOT_INTERESTED_OPTIONS_1_1.done && (_a = NOT_INTERESTED_OPTIONS_1.return)) _a.call(NOT_INTERESTED_OPTIONS_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  ; // Textarea for option

  var textareaOption = createElement({
    name: 'textarea',
    attributes: [['id', 'widget-content__na-other-option'], ['rows', '5'], ['placeholder', 'Please enter your comment.'], ['maxlength', '255'], ['name', 'not-interested-comment']]
  });
  contentParent.appendChild(textareaOption); // Display footer button

  var footerWrapper = createElement({
    name: 'div',
    attributes: [['id', 'widget-content__footer']]
  });
  var footerButton = createElement({
    name: 'button',
    attributes: [['id', 'widget-content__footer-button-2']]
  });
  footerButton.innerText = 'Submit';
  footerButton.addEventListener('click', submitNotInterestedForm);
  footerWrapper.style.height = 'auto';
  footerWrapper.style.marginTop = '1rem';
  footerWrapper.appendChild(footerButton);
  form.appendChild(contentParent);
  form.appendChild(footerWrapper);
  stageThreeWrapper.appendChild(form);
  widgetContent.appendChild(stageThreeWrapper);
}

exports.screenNotInterested = screenNotInterested;
/**
 * @description Handle not interested clicks
 *
 * @param {any} data
 *
 * @return {void}
 */

function handleNotInterested(data) {
  if (data === void 0) {
    data = {};
  }

  return __awaiter(this, void 0, Promise, function () {
    var API_DATA, error_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          hideTopNotification();
          API_DATA = JSON.parse(localStorage.getItem(constants_1.LENKIE_DATA_STATE.LOAD_SUCCESS));
          window.dispatchEvent(new CustomEvent(constants_1.LENKIE_DATA_STATE.CLOSE));
          return [4
          /*yield*/
          , (0, api_1.sendApi)("http://localhost:8005/CashAdvancePrequalifications" + '/Not-Interested', 'PUT', __assign(__assign(__assign({}, API_DATA), {
            date_marked_as_not_interested: new Date()
          }), data), {
            mode: 'cors'
          })];

        case 1:
          _a.sent();

          localStorage.setItem(constants_1.LENKIE_DATA_STATE.NAME, '0');
          return [3
          /*break*/
          , 3];

        case 2:
          error_1 = _a.sent();
          return [3
          /*break*/
          , 3];

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
}

exports.handleNotInterested = handleNotInterested;
/**
 * @description Handle viewed clicks
 *
 * @param {any?} data
 *
 * @return {void}
 */

function handleViewed(data) {
  return __awaiter(this, void 0, Promise, function () {
    var API_DATA, changedUrl, error_2;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          API_DATA = JSON.parse(localStorage.getItem(constants_1.LENKIE_DATA_STATE.LOAD_SUCCESS));
          changedUrl = API_DATA.offer_url.replace('get-started', API_DATA.platform_name.toLowerCase());
          navigateToURL(changedUrl);
          window.dispatchEvent(new CustomEvent(constants_1.LENKIE_DATA_STATE.CLOSE));
          return [4
          /*yield*/
          , (0, api_1.sendApi)("http://localhost:8005/CashAdvancePrequalifications" + '/View', 'PUT', __assign(__assign({}, API_DATA), {
            viewed_date: new Date()
          }), {
            mode: 'cors'
          })];

        case 1:
          _a.sent();

          return [3
          /*break*/
          , 3];

        case 2:
          error_2 = _a.sent();
          return [3
          /*break*/
          , 3];

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
}

exports.handleViewed = handleViewed;
/**
 * @description Handle dismiss clicks
 *
 * @param {any?} data
 *
 * @return {void}
 */

function handleDismiss(data) {
  return __awaiter(this, void 0, Promise, function () {
    var API_DATA, error_3;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          API_DATA = JSON.parse(localStorage.getItem(constants_1.LENKIE_DATA_STATE.LOAD_SUCCESS));
          window.dispatchEvent(new CustomEvent(constants_1.LENKIE_DATA_STATE.CLOSE));
          return [4
          /*yield*/
          , (0, api_1.sendApi)("http://localhost:8005/CashAdvancePrequalifications" + '/Dismiss', 'PUT', __assign(__assign({}, API_DATA), {
            dismissed_date: new Date()
          }), {
            mode: 'cors'
          })];

        case 1:
          _a.sent();

          return [3
          /*break*/
          , 3];

        case 2:
          error_3 = _a.sent();
          return [3
          /*break*/
          , 3];

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
}

exports.handleDismiss = handleDismiss;
/**
 * @description Switch to next phase (two)
 * @param {any} content
 *
 * @return {void}
 */

function leaveStageTwo() {
  var stageTwoWrapper = document.getElementById('widget-stage-two__content');
  var backButton = document.querySelector('.lenkie-back-button');
  stageTwoWrapper.classList.add('hide');
  backButton.style.visibility = 'visible';
  backButton.addEventListener('click', backStageTwo);
  screenNotInterested();
}

exports.leaveStageTwo = leaveStageTwo;
/**
 * @description Back to phase (two)
 * @param {any} content
 *
 * @return {void}
 */

function backStageTwo() {
  var stageTwoWrapper = document.getElementById('widget-stage-two__content');
  var stageThreeWrapper = document.getElementById('widget-stage-three__content');
  var backButton = document.querySelector('.lenkie-back-button');
  stageTwoWrapper.classList.toggle('hide');
  backButton.style.visibility = 'hidden';
  stageThreeWrapper.classList.add('hide');
}

exports.backStageTwo = backStageTwo;
/**
 * @description Submit not interested form
 *
 * @param {FormDataEvent} evt
 * @return {void}
 */

function submitNotInterestedForm(evt) {
  return __awaiter(this, void 0, Promise, function () {
    var formEl, formData, comment, reasons, reasonsCollection, mustFillTextField, _loop_1, _a, _b, _c, key, value;

    var e_2, _d;

    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          evt.preventDefault();
          formEl = document.getElementById('not-intrested-form');
          formData = new FormData(formEl);
          comment = null;
          reasons = __spreadArray([], __read(NOT_INTERESTED_OPTIONS), false);
          reasonsCollection = [];
          mustFillTextField = false;

          _loop_1 = function _loop_1(key, value) {
            if (key === 'not-interested-comment') comment = value;
            if (key === 'na-other' && value === undefined || value === '') mustFillTextField = true;
            var r = reasons.find(function (o) {
              return o.id === +value;
            });
            if (r) reasonsCollection.push(r);
          };

          try {
            for (_a = __values(formData.entries()), _b = _a.next(); !_b.done; _b = _a.next()) {
              _c = __read(_b.value, 2), key = _c[0], value = _c[1];

              _loop_1(key, value);
            }
          } catch (e_2_1) {
            e_2 = {
              error: e_2_1
            };
          } finally {
            try {
              if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
            } finally {
              if (e_2) throw e_2.error;
            }
          }

          if (mustFillTextField) return [2
          /*return*/
          ];
          if (reasonsCollection.length < 1) return [2
          /*return*/
          ];
          return [4
          /*yield*/
          , handleNotInterested({
            not_interested_comments: comment !== null && comment !== void 0 ? comment : undefined,
            reasons_not_interested: reasonsCollection
          })];

        case 1:
          _e.sent();

          return [2
          /*return*/
          ];
      }
    });
  });
}

exports.submitNotInterestedForm = submitNotInterestedForm;
/**
 * @description Navigate to external URL
 *
 * @param {string} url
 * @return {void}
 */

function navigateToURL(url) {
  window.open(url, '_blank', 'noopener,noreferrer,resizable');
}

exports.navigateToURL = navigateToURL;
/**
   * @description Remove top notifcation
   *
   * @return {void}
   */

function hideTopNotification() {
  var topNotification = document.getElementById('lenkie-top-banner');

  if (topNotification) {
    topNotification.remove();
  }
}

exports.hideTopNotification = hideTopNotification;
/**
 * @description Turn modal visibility on
 *
 * @return {void}
 */

function openWidget() {
  makeModalVisible();
}

exports.openWidget = openWidget;
/**
 * @description Turn modal visibility on
 *
 * @param {string} name
 * @return {void}
 */

function makeModalVisible() {
  var container = document.getElementById('lenkie-widget');
  var loader = document.getElementById('lenkie-widget-loader');
  var widgetContent = document.getElementById('lenkie-widget__content');
  container.style.display = 'flex';
  container.style.visibility = 'visible';
  loader.style.display = 'block';
  setTimeout(function () {
    loader.style.display = 'none';
    widgetContent.style.display = 'block';
  }, 800);
}

exports.makeModalVisible = makeModalVisible;
/**
 * @description Turn modal visibility off
 *
 * @return {void}
 */

function makeModalInvisible() {
  var container = document.getElementById('lenkie-widget');
  container.remove();
  var config = localStorage.getItem('lenkie-config');

  if (config) {
    installWidget(JSON.parse(config));
  }
}

exports.makeModalInvisible = makeModalInvisible;
/**
 * @description Dynamically load css file
 *
 * @return {void}
 */

function loadCss() {
  var _a;

  var link = document.createElement('link');
  link.href = ((_a = "http://localhost:1234") !== null && _a !== void 0 ? _a : '') + "/css/index.css";
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.media = 'screen,print';
  document.getElementsByTagName('head')[0].appendChild(link);
}

exports.loadCss = loadCss;
/**
 * @description Create modal backdrop
 *
 * @param {string} loaderParentName
 * @return {void}
 */

function createLoader(loaderParentName) {
  if (loaderParentName === void 0) {
    loaderParentName = 'lenkie-widget-loader';
  }

  var loaderParent = document.createElement('div');
  var loaderChild = document.createElement('div');
  loaderParent.setAttribute('id', loaderParentName);
  loaderParent.classList.add('widget_loader');
  loaderChild.classList.add('lenkie-widget_loader__spinner');

  for (var i = 0; i < 12; i++) {
    var div = document.createElement('div');
    loaderChild.appendChild(div);
  }

  loaderParent.appendChild(loaderChild);
  return loaderParent;
}

exports.createLoader = createLoader;
/**
 * @description Create modal backdrop
 *
 * @return {void}
 */

function createStylesheet() {
  var styleSheet = document.createElement('style');
  styleSheet.innerText = style_1.STYLE;
  document.head.appendChild(styleSheet);
}

exports.createStylesheet = createStylesheet;
/**
 * @description Factory for creating elements
 *
 * @param {WidgetCreateElement} args
 * @return {void}
 */

function createElement(args) {
  var el = document.createElement(args.name);
  if (args.html) el.innerHTML = args.html;
  if (args.text) el.innerHTML = args.text;
  args.attributes.forEach(function (_a) {
    var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];

    return el.setAttribute(key, value);
  });
  return el;
}

exports.createElement = createElement;
/**
 * @description Factory for navigating to initial screen
 *
 * @return {void}
 */

function navigateToInitialScreen() {
  // Show present state
  var stageTwoWrapper = document.getElementById('widget-stage-two__content');
  stageTwoWrapper.style.display = 'block';
  stageTwoWrapper.style.visibility = 'visible'; // SHow back button

  var backButton = document.getElementById('lenkie-back-button');
  backButton.style.visibility = 'hidden';
  backButton.addEventListener('click', function () {
    return window.dispatchEvent(new CustomEvent(constants_1.LENKIE_DATA_STATE.GO_BACK, {
      detail: {
        screen: 0
      }
    }));
  });
  var stageThreeWrapper = document.getElementById('widget-stage-three__content');
  stageThreeWrapper.style.display = 'none';
}
/**
 * @description Factory for navigating to not interested screen
 *
 * @return {void}
 */


function navigateToNotInterstedScreen() {
  // Hide present state
  var stageTwoWrapper = document.getElementById('widget-stage-two__content');
  stageTwoWrapper.style.display = 'none'; // SHow back button

  var backButton = document.getElementById('lenkie-back-button');
  backButton.style.visibility = 'visible';
  backButton.addEventListener('click', function () {
    return window.dispatchEvent(new CustomEvent(constants_1.LENKIE_DATA_STATE.CHANGE_SCREEN, {
      detail: {
        screen: 0
      }
    }));
  });
  screenNotInterested();
}
/**
 * @description Factory for creating elements
 *
 * @param {any} event
 * @return {void}
 */


function navigateScreen(event) {
  var _a;

  switch ((_a = event.detail) === null || _a === void 0 ? void 0 : _a.screen) {
    case 0:
      navigateToInitialScreen();
      return;

    case 1:
      navigateToNotInterstedScreen();
      return;
  }
}

exports.navigateScreen = navigateScreen;
/**
 * @description Display data not available
 *
 * @return {void}
 */

function displayDataNotAvailable() {
  alert('Data not loaded');
}

exports.displayDataNotAvailable = displayDataNotAvailable;
/**
 * Format number as currency
 *
 * @param {number} amount
 * @return {*}  {string}
 */

function formatToCurrency(amount) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0
  }).format(amount);
}
/**
 * Listen for other option selected
 *
 * @param {CustomEvent} evt
 * @return {void}
 */


function listenForOtherOptionSelectedForNotInterested(evt) {
  var textareaOption = document.getElementById('widget-content__na-other-option');

  if (evt.target.checked && evt.target.id === 'na-other') {
    textareaOption.setAttribute('required', 'required');
  } else {
    textareaOption.removeAttribute('required');
  }
}
/**
 * Set not interested values
 *
 * @param {CustomEvent} evt
 * @return {void}
 */


function setNotInterestedOptions(evt) {
  var options = evt.detail;
  options.forEach(function (o) {
    return NOT_INTERESTED_OPTIONS.add(o);
  });
}
},{"./api":"js/api.ts","./constants":"js/constants.ts","./style":"js/style.ts"}],"js/widget.ts":[function(require,module,exports) {
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var api_1 = require("./api");

var constants_1 = require("./constants");

var utils_1 = require("./utils");
/**
 * @description Lenkie factory
 *
 * @name lenkie
 */


var Lenkie = function () {
  /**
   * Creates an instance of Lenkie.
   * @param {config} [config={}]
   * @memberof Lenkie
   */
  function Lenkie(config) {
    this.defaultElementEvent = 'click';
    this.cashAdvancePrequalificationURL = "http://localhost:8005/CashAdvances/Prequalifications";
    this.notInterestedURLReasons = "http://localhost:8005/CashAdvances/Prequalifications" + '/Not-Interested/Reasons';
    this.notInterestedURL = "http://localhost:8005/CashAdvances/Prequalifications" + '/Not-Interested';
    this.backDropID = 'lenkie-widget';
    this.dataAttrLabel = 'lenkie'; // Load css file in browser

    (0, utils_1.loadCss)();

    if (_typeof(config) !== 'object' && config !== null) {
      throw new Error('Invalid config parameter provided.');
    }

    var platformId = config.platformId,
        sellerId = config.sellerId;
    this.platformId = platformId;
    this.sellerId = sellerId;
    this.config = config;
    this.cashAdvancePrequalificationURL = this.cashAdvancePrequalificationURL + ("/" + platformId + "/" + sellerId);

    if (typeof this.config.dataAttrLabel === 'string') {
      this.dataAttrLabel = this.config.dataAttrLabel;
    }

    this.initialize();
  }
  /**
   * @description Initializes lenkie pre-qualification
   */


  Lenkie.prototype.initialize = function () {
    return __awaiter(this, void 0, Promise, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (typeof this.platformId !== 'string' || typeof this.sellerId !== 'string' || this.platformId === '' || this.sellerId === '' || ['', undefined, null].includes(this.config.platformName)) {
              throw new Error('Invalid platform/user identifier or platform name supplied.');
            }

            return [4
            /*yield*/
            , this.authorize()];

          case 1:
            if (_a.sent() === false) {
              return [2
              /*return*/
              ];
            } // Create stylsheet based on config


            (0, utils_1.createStylesheet)(); // localStorage.setItem('lenkie_platformName', this.config.platformName);
            // Install nain widget modal

            (0, utils_1.installWidget)(this.config);
            localStorage.setItem('lenkie-config', JSON.stringify(this.config)); // Check permission to show top notification

            if (this.config.displayTopBanner) {
              this.displayTopBanner();
            }

            if (typeof this.config.dataAttrLabel === 'string') {
              this.listenOnElements();
            }

            return [2
            /*return*/
            ];
        }
      });
    });
  };
  /**
   * @description Authorizes the widget instance
   *
   * @return {boolean} boolean
   */


  Lenkie.prototype.authorize = function () {
    return __awaiter(this, void 0, void 0, function () {
      var isPermitted;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            isPermitted = localStorage.getItem(constants_1.LENKIE_DATA_STATE.NAME);
            if (isPermitted === '0') return [2
            /*return*/
            , false];
            return [4
            /*yield*/
            , this.loadLenkieData()];

          case 1:
            return [2
            /*return*/
            , _a.sent()];
        }
      });
    });
  };
  /**
   * @description Load lenkie data
   *
   * @return {void}
   */


  Lenkie.prototype.loadLenkieData = function () {
    return __awaiter(this, void 0, Promise, function () {
      var data;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , (0, api_1.callApi)(this.cashAdvancePrequalificationURL, {
              mode: 'cors'
            })];

          case 1:
            data = _a.sent();

            if (!data && this.config.platformId === '89151f3e-354c-4a1a-9e70-0c57341f88d3' && this.config.sellerId === '4e1482e4-c6f2-4bdd-88d8-efb34aa6ecae') {
              data = constants_1.LENKIE_SAMPLE_PREQUALIFICATION;
            }

            if (!(!data || data.status === 404)) return [3
            /*break*/
            , 2];
            window.dispatchEvent(new CustomEvent(constants_1.LENKIE_DATA_STATE.LOAD_ERROR));
            localStorage.setItem(constants_1.LENKIE_DATA_STATE.LOAD_ERROR, null);
            return [3
            /*break*/
            , 4];

          case 2:
            localStorage.setItem(constants_1.LENKIE_DATA_STATE.LOAD_SUCCESS, JSON.stringify(data));
            window.dispatchEvent(new CustomEvent(constants_1.LENKIE_DATA_STATE.LOAD_SUCCESS, {
              detail: data
            }));
            return [4
            /*yield*/
            , this.loadNotInterestedOptions()];

          case 3:
            _a.sent();

            return [2
            /*return*/
            , true];

          case 4:
            return [2
            /*return*/
            , false];
        }
      });
    });
  };
  /**
   * @description Load lenkie data
   *
   * @return {void}
   */


  Lenkie.prototype.loadNotInterestedOptions = function () {
    return __awaiter(this, void 0, Promise, function () {
      var data;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , (0, api_1.callApi)(this.notInterestedURLReasons)];

          case 1:
            data = _a.sent();

            if (!data) {
              window.dispatchEvent(new CustomEvent(constants_1.LENKIE_DATA_STATE.NOT_INTERESTED_OPTIONS_ERROR));
              localStorage.setItem(constants_1.LENKIE_DATA_STATE.NOT_INTERESTED_OPTIONS_ERROR, null);
            } else {
              localStorage.setItem(constants_1.LENKIE_DATA_STATE.NOT_INTERESTED_OPTIONS, JSON.stringify(data));
              window.dispatchEvent(new CustomEvent(constants_1.LENKIE_DATA_STATE.NOT_INTERESTED_OPTIONS, {
                detail: data
              }));
              return [2
              /*return*/
              , true];
            }

            return [2
            /*return*/
            , false];
        }
      });
    });
  };
  /**
   * @description Displays the modal box
   *
   * @return {void}
   */


  Lenkie.prototype.showModal = function () {
    (0, utils_1.openWidget)();
  };
  /**
   * @description Adjust top banner theme
   *
   * @return {void}
   */


  Lenkie.prototype.adjustTheme = function () {
    var _a, _b, _c;

    var primaryColor = (_a = this.config.theme) === null || _a === void 0 ? void 0 : _a.primaryColor;
    var secondaryColor = (_b = this.config.theme) === null || _b === void 0 ? void 0 : _b.secondaryColor;
    var underlineColor = (_c = this.config.theme) === null || _c === void 0 ? void 0 : _c.underlineColor;
    if (typeof primaryColor === 'string' && primaryColor.length > 0) this.setRootStyles('--lenkie-widget-primary', primaryColor);

    if (typeof secondaryColor === 'string' && secondaryColor.length > 0) {
      this.setRootStyles('--lenkie-widget-secondary', secondaryColor);
    }

    if (typeof underlineColor === 'string' && underlineColor.length > 0) {
      this.setRootStyles('--lenkie-widget-border-bottom-color', underlineColor);
    }
  };
  /**
   * @description Display top notifcation
   *
   * @return {void}
   */


  Lenkie.prototype.displayTopBanner = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;

    this.adjustTheme();
    var topNotification = (0, utils_1.createElement)({
      name: 'div',
      attributes: [['id', 'lenkie-top-banner'], ['class', 'lenkie-top-banner']]
    });
    var defaultOuterStatement = "\uD83D\uDE80 Scale your business with a cash advance from " + this.config.platformName;

    if (typeof ((_a = this.config.text) === null || _a === void 0 ? void 0 : _a.caption) === 'string' && ((_b = this.config.text) === null || _b === void 0 ? void 0 : _b.caption.length) > 0) {
      defaultOuterStatement = (_c = this.config.text) === null || _c === void 0 ? void 0 : _c.caption;
    }

    var defaultInnerStatement = 'check offers available to you';

    if (typeof ((_d = this.config.text) === null || _d === void 0 ? void 0 : _d.cta) === 'string' && ((_e = this.config.text) === null || _e === void 0 ? void 0 : _e.cta.length) > 0) {
      defaultInnerStatement = (_f = this.config.text) === null || _f === void 0 ? void 0 : _f.cta;
    }

    var html = defaultOuterStatement + ", <a data-" + this.dataAttrLabel + " class=\"lenkie-cta-link\">" + defaultInnerStatement + " <span id=\"lenkie-arrow\">&#x2192;</span></a>";

    if (typeof ((_g = this.config.text) === null || _g === void 0 ? void 0 : _g.html) === 'string' && ((_h = this.config.text) === null || _h === void 0 ? void 0 : _h.html.length) > 0) {
      html = (_j = this.config.text) === null || _j === void 0 ? void 0 : _j.html;
    }

    var content = (0, utils_1.createElement)({
      name: 'p',
      attributes: [['class', 'text'], ['style', 'font-family: BR Firma Regular; cursor: pointer'], ["data-" + this.dataAttrLabel]],
      html: html
    });
    var closeButton = (0, utils_1.createElement)({
      name: 'button',
      attributes: [['id', 'lenkie-top-banner-close'], ['style', 'background: transparent; border: 0; color: white; display: none;']],
      html: 'X'
    });
    closeButton.addEventListener('click', this.hideTopNotification);
    topNotification.appendChild(content);
    topNotification.appendChild(closeButton);
    var fChild = document.body.firstChild;
    fChild.parentNode.insertBefore(topNotification, fChild);
  };
  /**
   * @description Hide top navigation banner
   *
   * @return {void}
   */


  Lenkie.prototype.hideTopNotification = function () {
    var topNotification = document.getElementById('lenkie-top-banner');
    topNotification === null || topNotification === void 0 ? void 0 : topNotification.remove();
    localStorage.setItem(constants_1.LENKIE_DATA_STATE.NAME, '0');
  };
  /**
   * @description Listen on events triggered by elements
   *
   * @param {string} attrLabel
   * @return {void}
   */


  Lenkie.prototype.listenOnElements = function () {
    var _this = this;

    var isPermitted = localStorage.getItem(constants_1.LENKIE_DATA_STATE.NAME);
    if (isPermitted === '0') return;
    var attrLabel = this.config.dataAttrLabel;
    document.querySelectorAll("[data-" + attrLabel + "]").forEach(function (el) {
      return el.addEventListener(el.dataset[attrLabel] || _this.defaultElementEvent, _this.showModal);
    });
  };
  /**
   * @description Listen on events triggered by elements
   *
   * @param {string} attrLabel
   * @return {void}
   */


  Lenkie.prototype.installWidget = function () {
    (0, utils_1.installWidget)(__assign(__assign({}, this.config), {
      backdropId: this.backDropID
    }));
  };
  /**
   * @description Change root styles
   *
   * @export setRootStyles
   * @param {string} name
   * @param {string} color
   */


  Lenkie.prototype.setRootStyles = function (name, color) {
    var root = document.querySelector(':root');
    root === null || root === void 0 ? void 0 : root.style.setProperty(name, color);
  };

  return Lenkie;
}();

exports.default = Lenkie;
window.Lenkie = Lenkie;
},{"./api":"js/api.ts","./constants":"js/constants.ts","./utils":"js/utils.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62975" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/widget.ts"], null)
//# sourceMappingURL=/widget.b403c74f.js.map
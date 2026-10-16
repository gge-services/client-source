var __dep_exact_d8857732a937369e = require("gge-module:exact_d8857732a937369e");
var __s0local0 = exports;
function merge(__s1param0, __s1param1, __s1param2) {
  for (var __s1local0 = Object.keys(__s1param1), __s1local1 = 0; __s1local1 < __s1local0.length; ++__s1local1) {
    if (__s1param0[__s1local0[__s1local1]] === undefined || !__s1param2) {
      __s1param0[__s1local0[__s1local1]] = __s1param1[__s1local0[__s1local1]];
    }
  }
  return __s1param0;
}
function newError(__s6param0) {
  function CustomError(__s8param0, __s8param1) {
    if (!(this instanceof CustomError)) {
      return new CustomError(__s8param0, __s8param1);
    }
    Object.defineProperty(this, "message", {
      get: function () {
        return __s8param0;
      }
    });
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    } else {
      Object.defineProperty(this, "stack", {
        value: new Error().stack || ""
      });
    }
    if (__s8param1) {
      merge(this, __s8param1);
    }
  }
  (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError;
  Object.defineProperty(CustomError.prototype, "name", {
    get: function () {
      return __s6param0;
    }
  });
  CustomError.prototype.toString = function toString() {
    return this.name + ": " + this.message;
  };
  return CustomError;
}
__s0local0.asPromise = require("gge-module:exact_877cd94d7bdbb5d0");
__s0local0.base64 = require("gge-module:exact_9ce374dc1a5f1360");
__s0local0.EventEmitter = require("gge-module:exact_bb033ce81b4bf835");
__s0local0.float = require("gge-module:exact_a0a786e9d6e87848");
__s0local0.inquire = require("gge-module:exact_3b5b35a45529e710");
__s0local0.utf8 = require("gge-module:exact_5308611ce621e787");
__s0local0.pool = require("gge-module:exact_a0fa8e498013b56c");
__s0local0.LongBits = require("gge-module:class_LongBits");
__s0local0.global = typeof window != "undefined" && window || __dep_exact_d8857732a937369e !== undefined && __dep_exact_d8857732a937369e || typeof self != "undefined" && self || this;
__s0local0.emptyArray = Object.freeze ? Object.freeze([]) : [];
__s0local0.emptyObject = Object.freeze ? Object.freeze({}) : {};
__s0local0.isNode = Boolean(__s0local0.global.process && __s0local0.global.process.versions && __s0local0.global.process.versions.node);
__s0local0.isInteger = Number.isInteger || function isInteger(__s20param0) {
  return typeof __s20param0 == "number" && isFinite(__s20param0) && Math.floor(__s20param0) === __s20param0;
};
__s0local0.isString = function isString(__s22param0) {
  return typeof __s22param0 == "string" || __s22param0 instanceof String;
};
__s0local0.isObject = function isObject(__s24param0) {
  return __s24param0 && typeof __s24param0 == "object";
};
__s0local0.isset = __s0local0.isSet = function isSet(__s26param0, __s26param1) {
  var __s26local0 = __s26param0[__s26param1];
  return __s26local0 != null && !!__s26param0.hasOwnProperty(__s26param1) && (typeof __s26local0 != "object" || (Array.isArray(__s26local0) ? __s26local0.length : Object.keys(__s26local0).length) > 0);
};
__s0local0.Buffer = function () {
  try {
    var __s28local0 = __s0local0.inquire("buffer").Buffer;
    if (__s28local0.prototype.utf8Write) {
      return __s28local0;
    } else {
      return null;
    }
  } catch (__s33local0) {
    return null;
  }
}();
__s0local0._Buffer_from = null;
__s0local0._Buffer_allocUnsafe = null;
__s0local0.newBuffer = function newBuffer(__s35param0) {
  if (typeof __s35param0 == "number") {
    if (__s0local0.Buffer) {
      return __s0local0._Buffer_allocUnsafe(__s35param0);
    } else {
      return new __s0local0.Array(__s35param0);
    }
  } else if (__s0local0.Buffer) {
    return __s0local0._Buffer_from(__s35param0);
  } else if (typeof Uint8Array == "undefined") {
    return __s35param0;
  } else {
    return new Uint8Array(__s35param0);
  }
};
__s0local0.Array = typeof Uint8Array != "undefined" ? Uint8Array : Array;
__s0local0.Long = __s0local0.global.dcodeIO && __s0local0.global.dcodeIO.Long || __s0local0.global.Long || __s0local0.inquire("long");
__s0local0.key2Re = /^true|false|0|1$/;
__s0local0.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
__s0local0.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
__s0local0.longToHash = function longToHash(__s43param0) {
  if (__s43param0) {
    return __s0local0.LongBits.from(__s43param0).toHash();
  } else {
    return __s0local0.LongBits.zeroHash;
  }
};
__s0local0.longFromHash = function longFromHash(__s47param0, __s47param1) {
  var __s47local0 = __s0local0.LongBits.fromHash(__s47param0);
  if (__s0local0.Long) {
    return __s0local0.Long.fromBits(__s47local0.lo, __s47local0.hi, __s47param1);
  } else {
    return __s47local0.toNumber(Boolean(__s47param1));
  }
};
__s0local0.merge = merge;
__s0local0.lcFirst = function lcFirst(__s51param0) {
  return __s51param0.charAt(0).toLowerCase() + __s51param0.substring(1);
};
__s0local0.newError = newError;
__s0local0.ProtocolError = newError("ProtocolError");
__s0local0.oneOfGetter = function getOneOf(__s53param0) {
  var __s53local0 = {};
  for (var __s53local1 = 0; __s53local1 < __s53param0.length; ++__s53local1) {
    __s53local0[__s53param0[__s53local1]] = 1;
  }
  return function () {
    var __s57local0 = Object.keys(this);
    for (var __s57local1 = __s57local0.length - 1; __s57local1 > -1; --__s57local1) {
      if (__s53local0[__s57local0[__s57local1]] === 1 && this[__s57local0[__s57local1]] !== undefined && this[__s57local0[__s57local1]] !== null) {
        return __s57local0[__s57local1];
      }
    }
  };
};
__s0local0.oneOfSetter = function setOneOf(__s62param0) {
  return function (__s64param0) {
    for (var __s64local0 = 0; __s64local0 < __s62param0.length; ++__s64local0) {
      if (__s62param0[__s64local0] !== __s64param0) {
        delete this[__s62param0[__s64local0]];
      }
    }
  };
};
__s0local0.toJSONOptions = {
  longs: String,
  enums: String,
  bytes: String,
  json: true
};
__s0local0._configure = function () {
  var __s69local0 = __s0local0.Buffer;
  if (__s69local0) {
    __s0local0._Buffer_from = __s69local0.from !== Uint8Array.from && __s69local0.from || function Buffer_from(__s72param0, __s72param1) {
      return new __s69local0(__s72param0, __s72param1);
    };
    __s0local0._Buffer_allocUnsafe = __s69local0.allocUnsafe || function Buffer_allocUnsafe(__s74param0) {
      return new __s69local0(__s74param0);
    };
  } else {
    __s0local0._Buffer_from = __s0local0._Buffer_allocUnsafe = null;
  }
};

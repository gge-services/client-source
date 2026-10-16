var __dep_exact_2416fb10de508ed7 = require("gge-module:exact_2416fb10de508ed7");
var __s0local0 = Object.prototype.toString;
function isArray(__s1param0) {
  return __s0local0.call(__s1param0) === "[object Array]";
}
function isUndefined(__s3param0) {
  return __s3param0 === undefined;
}
function isObject(__s5param0) {
  return __s5param0 !== null && typeof __s5param0 == "object";
}
function isPlainObject(__s7param0) {
  if (__s0local0.call(__s7param0) !== "[object Object]") {
    return false;
  }
  var __s7local0 = Object.getPrototypeOf(__s7param0);
  return __s7local0 === null || __s7local0 === Object.prototype;
}
function isFunction(__s10param0) {
  return __s0local0.call(__s10param0) === "[object Function]";
}
function forEach(__s12param0, __s12param1) {
  if (__s12param0 !== null && __s12param0 !== undefined) {
    if (typeof __s12param0 != "object") {
      __s12param0 = [__s12param0];
    }
    if (isArray(__s12param0)) {
      for (var __s12local0 = 0, __s12local1 = __s12param0.length; __s12local0 < __s12local1; __s12local0++) {
        __s12param1.call(null, __s12param0[__s12local0], __s12local0, __s12param0);
      }
    } else {
      for (var __s12local2 in __s12param0) {
        if (Object.prototype.hasOwnProperty.call(__s12param0, __s12local2)) {
          __s12param1.call(null, __s12param0[__s12local2], __s12local2, __s12param0);
        }
      }
    }
  }
}
module.exports = {
  isArray: isArray,
  isArrayBuffer: function isArrayBuffer(__s23param0) {
    return __s0local0.call(__s23param0) === "[object ArrayBuffer]";
  },
  isBuffer: function isBuffer(__s25param0) {
    return __s25param0 !== null && !isUndefined(__s25param0) && __s25param0.constructor !== null && !isUndefined(__s25param0.constructor) && typeof __s25param0.constructor.isBuffer == "function" && __s25param0.constructor.isBuffer(__s25param0);
  },
  isFormData: function isFormData(__s27param0) {
    return typeof FormData != "undefined" && __s27param0 instanceof FormData;
  },
  isArrayBufferView: function isArrayBufferView(__s29param0) {
    if (typeof ArrayBuffer != "undefined" && ArrayBuffer.isView) {
      return ArrayBuffer.isView(__s29param0);
    } else {
      return __s29param0 && __s29param0.buffer && __s29param0.buffer instanceof ArrayBuffer;
    }
  },
  isString: function isString(__s33param0) {
    return typeof __s33param0 == "string";
  },
  isNumber: function isNumber(__s35param0) {
    return typeof __s35param0 == "number";
  },
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: function isDate(__s37param0) {
    return __s0local0.call(__s37param0) === "[object Date]";
  },
  isFile: function isFile(__s39param0) {
    return __s0local0.call(__s39param0) === "[object File]";
  },
  isBlob: function isBlob(__s41param0) {
    return __s0local0.call(__s41param0) === "[object Blob]";
  },
  isFunction: isFunction,
  isStream: function isStream(__s43param0) {
    return isObject(__s43param0) && isFunction(__s43param0.pipe);
  },
  isURLSearchParams: function isURLSearchParams(__s45param0) {
    return typeof URLSearchParams != "undefined" && __s45param0 instanceof URLSearchParams;
  },
  isStandardBrowserEnv: function isStandardBrowserEnv() {
    return (typeof navigator == "undefined" || navigator.product !== "ReactNative" && navigator.product !== "NativeScript" && navigator.product !== "NS") && typeof window != "undefined" && typeof document != "undefined";
  },
  forEach: forEach,
  merge: function merge() {
    var __s49local0 = {};
    function assignValue(__s51param0, __s51param1) {
      if (isPlainObject(__s49local0[__s51param1]) && isPlainObject(__s51param0)) {
        __s49local0[__s51param1] = merge(__s49local0[__s51param1], __s51param0);
      } else if (isPlainObject(__s51param0)) {
        __s49local0[__s51param1] = merge({}, __s51param0);
      } else if (isArray(__s51param0)) {
        __s49local0[__s51param1] = __s51param0.slice();
      } else {
        __s49local0[__s51param1] = __s51param0;
      }
    }
    for (var __s49local1 = 0, __s49local2 = arguments.length; __s49local1 < __s49local2; __s49local1++) {
      forEach(arguments[__s49local1], assignValue);
    }
    return __s49local0;
  },
  extend: function extend(__s59param0, __s59param1, __s59param2) {
    forEach(__s59param1, function assignValue(__s61param0, __s61param1) {
      __s59param0[__s61param1] = __s59param2 && typeof __s61param0 == "function" ? __dep_exact_2416fb10de508ed7(__s61param0, __s59param2) : __s61param0;
    });
    return __s59param0;
  },
  trim: function trim(__s63param0) {
    return __s63param0.replace(/^\s*/, "").replace(/\s*$/, "");
  },
  stripBOM: function stripBOM(__s65param0) {
    if (__s65param0.charCodeAt(0) === 65279) {
      __s65param0 = __s65param0.slice(1);
    }
    return __s65param0;
  }
};

var __dep_exact_d8857732a937369e = require("gge-module:exact_d8857732a937369e");
var __dep_class_Item = require("gge-module:class_Item");
var __s0local0 = /%[sdj%]/g;
exports.format = function (__s1param0) {
  if (!isString(__s1param0)) {
    var __s1local0 = [];
    for (var __s1local1 = 0; __s1local1 < arguments.length; __s1local1++) {
      __s1local0.push(inspect(arguments[__s1local1]));
    }
    return __s1local0.join(" ");
  }
  __s1local1 = 1;
  for (var __s1local2 = arguments, __s1local3 = __s1local2.length, __s1local4 = String(__s1param0).replace(__s0local0, function (__s7param0) {
      if (__s7param0 === "%%") {
        return "%";
      }
      if (__s1local1 >= __s1local3) {
        return __s7param0;
      }
      switch (__s7param0) {
        case "%s":
          return String(__s1local2[__s1local1++]);
        case "%d":
          return Number(__s1local2[__s1local1++]);
        case "%j":
          try {
            return JSON.stringify(__s1local2[__s1local1++]);
          } catch (__s13local0) {
            return "[Circular]";
          }
        default:
          return __s7param0;
      }
    }), __s1local5 = __s1local2[__s1local1]; __s1local1 < __s1local3; __s1local5 = __s1local2[++__s1local1]) {
    if (isNull(__s1local5) || !isObject(__s1local5)) {
      __s1local4 += " " + __s1local5;
    } else {
      __s1local4 += " " + inspect(__s1local5);
    }
  }
  return __s1local4;
};
exports.deprecate = function (__s18param0, __s18param1) {
  if (isUndefined(__dep_exact_d8857732a937369e.process)) {
    return function () {
      return exports.deprecate(__s18param0, __s18param1).apply(this, arguments);
    };
  }
  if (__dep_class_Item.noDeprecation === true) {
    return __s18param0;
  }
  var __s18local0 = false;
  return function deprecated() {
    if (!__s18local0) {
      if (__dep_class_Item.throwDeprecation) {
        throw new Error(__s18param1);
      }
      if (__dep_class_Item.traceDeprecation) {
        console.trace(__s18param1);
      } else {
        console.error(__s18param1);
      }
      __s18local0 = true;
    }
    return __s18param0.apply(this, arguments);
  };
};
var __s0local1;
var __s0local2 = {};
function inspect(__s30param0, __s30param1) {
  var __s30local0 = {
    seen: [],
    stylize: stylizeNoColor
  };
  if (arguments.length >= 3) {
    __s30local0.depth = arguments[2];
  }
  if (arguments.length >= 4) {
    __s30local0.colors = arguments[3];
  }
  if (isBoolean(__s30param1)) {
    __s30local0.showHidden = __s30param1;
  } else if (__s30param1) {
    exports._extend(__s30local0, __s30param1);
  }
  if (isUndefined(__s30local0.showHidden)) {
    __s30local0.showHidden = false;
  }
  if (isUndefined(__s30local0.depth)) {
    __s30local0.depth = 2;
  }
  if (isUndefined(__s30local0.colors)) {
    __s30local0.colors = false;
  }
  if (isUndefined(__s30local0.customInspect)) {
    __s30local0.customInspect = true;
  }
  if (__s30local0.colors) {
    __s30local0.stylize = stylizeWithColor;
  }
  return formatValue(__s30local0, __s30param0, __s30local0.depth);
}
function stylizeWithColor(__s41param0, __s41param1) {
  var __s41local0 = inspect.styles[__s41param1];
  if (__s41local0) {
    return "[" + inspect.colors[__s41local0][0] + "m" + __s41param0 + "[" + inspect.colors[__s41local0][1] + "m";
  } else {
    return __s41param0;
  }
}
function stylizeNoColor(__s45param0, __s45param1) {
  return __s45param0;
}
function formatValue(__s47param0, __s47param1, __s47param2) {
  if (__s47param0.customInspect && __s47param1 && isFunction(__s47param1.inspect) && __s47param1.inspect !== exports.inspect && (!__s47param1.constructor || __s47param1.constructor.prototype !== __s47param1)) {
    var __s47local0 = __s47param1.inspect(__s47param2, __s47param0);
    if (!isString(__s47local0)) {
      __s47local0 = formatValue(__s47param0, __s47local0, __s47param2);
    }
    return __s47local0;
  }
  var __s47local1 = function formatPrimitive(__s51param0, __s51param1) {
    if (isUndefined(__s51param1)) {
      return __s51param0.stylize("undefined", "undefined");
    }
    if (isString(__s51param1)) {
      var __s51local0 = "'" + JSON.stringify(__s51param1).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, "\"") + "'";
      return __s51param0.stylize(__s51local0, "string");
    }
    if (isNumber(__s51param1)) {
      return __s51param0.stylize("" + __s51param1, "number");
    }
    if (isBoolean(__s51param1)) {
      return __s51param0.stylize("" + __s51param1, "boolean");
    }
    if (isNull(__s51param1)) {
      return __s51param0.stylize("null", "null");
    }
  }(__s47param0, __s47param1);
  if (__s47local1) {
    return __s47local1;
  }
  var __s47local2 = Object.keys(__s47param1);
  var __s47local3 = function arrayToHash(__s59param0) {
    var __s59local0 = {};
    __s59param0.forEach(function (__s61param0, __s61param1) {
      __s59local0[__s61param0] = true;
    });
    return __s59local0;
  }(__s47local2);
  if (__s47param0.showHidden) {
    __s47local2 = Object.getOwnPropertyNames(__s47param1);
  }
  if (isError(__s47param1) && (__s47local2.indexOf("message") >= 0 || __s47local2.indexOf("description") >= 0)) {
    return formatError(__s47param1);
  }
  if (__s47local2.length === 0) {
    if (isFunction(__s47param1)) {
      var __s47local4 = __s47param1.name ? ": " + __s47param1.name : "";
      return __s47param0.stylize("[Function" + __s47local4 + "]", "special");
    }
    if (isRegExp(__s47param1)) {
      return __s47param0.stylize(RegExp.prototype.toString.call(__s47param1), "regexp");
    }
    if (isDate(__s47param1)) {
      return __s47param0.stylize(Date.prototype.toString.call(__s47param1), "date");
    }
    if (isError(__s47param1)) {
      return formatError(__s47param1);
    }
  }
  var __s47local5;
  var __s47local6 = "";
  var __s47local7 = false;
  var __s47local8 = ["{", "}"];
  if (isArray(__s47param1)) {
    __s47local7 = true;
    __s47local8 = ["[", "]"];
  }
  if (isFunction(__s47param1)) {
    __s47local6 = " [Function" + (__s47param1.name ? ": " + __s47param1.name : "") + "]";
  }
  if (isRegExp(__s47param1)) {
    __s47local6 = " " + RegExp.prototype.toString.call(__s47param1);
  }
  if (isDate(__s47param1)) {
    __s47local6 = " " + Date.prototype.toUTCString.call(__s47param1);
  }
  if (isError(__s47param1)) {
    __s47local6 = " " + formatError(__s47param1);
  }
  if (__s47local2.length !== 0 || __s47local7 && __s47param1.length != 0) {
    if (__s47param2 < 0) {
      if (isRegExp(__s47param1)) {
        return __s47param0.stylize(RegExp.prototype.toString.call(__s47param1), "regexp");
      } else {
        return __s47param0.stylize("[Object]", "special");
      }
    } else {
      __s47param0.seen.push(__s47param1);
      __s47local5 = __s47local7 ? function formatArray(__s80param0, __s80param1, __s80param2, __s80param3, __s80param4) {
        var __s80local0 = [];
        for (var __s80local1 = 0, __s80local2 = __s80param1.length; __s80local1 < __s80local2; ++__s80local1) {
          if (hasOwnProperty(__s80param1, String(__s80local1))) {
            __s80local0.push(formatProperty(__s80param0, __s80param1, __s80param2, __s80param3, String(__s80local1), true));
          } else {
            __s80local0.push("");
          }
        }
        __s80param4.forEach(function (__s86param0) {
          if (!__s86param0.match(/^\d+$/)) {
            __s80local0.push(formatProperty(__s80param0, __s80param1, __s80param2, __s80param3, __s86param0, true));
          }
        });
        return __s80local0;
      }(__s47param0, __s47param1, __s47param2, __s47local3, __s47local2) : __s47local2.map(function (__s89param0) {
        return formatProperty(__s47param0, __s47param1, __s47param2, __s47local3, __s89param0, __s47local7);
      });
      __s47param0.seen.pop();
      return function reduceToSingleString(__s91param0, __s91param1, __s91param2) {
        if (__s91param0.reduce(function (__s93param0, __s93param1) {
          0;
          if (__s93param1.indexOf("\n") >= 0) {
            0;
          }
          return __s93param0 + __s93param1.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0) > 60) {
          return __s91param2[0] + (__s91param1 === "" ? "" : __s91param1 + "\n ") + " " + __s91param0.join(",\n  ") + " " + __s91param2[1];
        }
        return __s91param2[0] + __s91param1 + " " + __s91param0.join(", ") + " " + __s91param2[1];
      }(__s47local5, __s47local6, __s47local8);
    }
  } else {
    return __s47local8[0] + __s47local6 + __s47local8[1];
  }
}
function formatError(__s98param0) {
  return "[" + Error.prototype.toString.call(__s98param0) + "]";
}
function formatProperty(__s100param0, __s100param1, __s100param2, __s100param3, __s100param4, __s100param5) {
  var __s100local0;
  var __s100local1;
  var __s100local2;
  if ((__s100local2 = Object.getOwnPropertyDescriptor(__s100param1, __s100param4) || {
    value: __s100param1[__s100param4]
  }).get) {
    __s100local1 = __s100local2.set ? __s100param0.stylize("[Getter/Setter]", "special") : __s100param0.stylize("[Getter]", "special");
  } else if (__s100local2.set) {
    __s100local1 = __s100param0.stylize("[Setter]", "special");
  }
  if (!hasOwnProperty(__s100param3, __s100param4)) {
    __s100local0 = "[" + __s100param4 + "]";
  }
  if (!__s100local1) {
    if (__s100param0.seen.indexOf(__s100local2.value) < 0) {
      if ((__s100local1 = isNull(__s100param2) ? formatValue(__s100param0, __s100local2.value, null) : formatValue(__s100param0, __s100local2.value, __s100param2 - 1)).indexOf("\n") > -1) {
        __s100local1 = __s100param5 ? __s100local1.split("\n").map(function (__s108param0) {
          return "  " + __s108param0;
        }).join("\n").substr(2) : "\n" + __s100local1.split("\n").map(function (__s110param0) {
          return "   " + __s110param0;
        }).join("\n");
      }
    } else {
      __s100local1 = __s100param0.stylize("[Circular]", "special");
    }
  }
  if (isUndefined(__s100local0)) {
    if (__s100param5 && __s100param4.match(/^\d+$/)) {
      return __s100local1;
    }
    if ((__s100local0 = JSON.stringify("" + __s100param4)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      __s100local0 = __s100local0.substr(1, __s100local0.length - 2);
      __s100local0 = __s100param0.stylize(__s100local0, "name");
    } else {
      __s100local0 = __s100local0.replace(/'/g, "\\'").replace(/\\"/g, "\"").replace(/(^"|"$)/g, "'");
      __s100local0 = __s100param0.stylize(__s100local0, "string");
    }
  }
  return __s100local0 + ": " + __s100local1;
}
function isArray(__s117param0) {
  return Array.isArray(__s117param0);
}
function isBoolean(__s119param0) {
  return typeof __s119param0 == "boolean";
}
function isNull(__s121param0) {
  return __s121param0 === null;
}
function isNumber(__s123param0) {
  return typeof __s123param0 == "number";
}
function isString(__s125param0) {
  return typeof __s125param0 == "string";
}
function isUndefined(__s127param0) {
  return __s127param0 === undefined;
}
function isRegExp(__s129param0) {
  return isObject(__s129param0) && objectToString(__s129param0) === "[object RegExp]";
}
function isObject(__s131param0) {
  return typeof __s131param0 == "object" && __s131param0 !== null;
}
function isDate(__s133param0) {
  return isObject(__s133param0) && objectToString(__s133param0) === "[object Date]";
}
function isError(__s135param0) {
  return isObject(__s135param0) && (objectToString(__s135param0) === "[object Error]" || __s135param0 instanceof Error);
}
function isFunction(__s137param0) {
  return typeof __s137param0 == "function";
}
function objectToString(__s139param0) {
  return Object.prototype.toString.call(__s139param0);
}
function pad(__s141param0) {
  if (__s141param0 < 10) {
    return "0" + __s141param0.toString(10);
  } else {
    return __s141param0.toString(10);
  }
}
exports.debuglog = function (__s145param0) {
  if (isUndefined(__s0local1)) {
    __s0local1 = __dep_class_Item.env.NODE_DEBUG || "";
  }
  __s145param0 = __s145param0.toUpperCase();
  if (!__s0local2[__s145param0]) {
    if (new RegExp("\\b" + __s145param0 + "\\b", "i").test(__s0local1)) {
      var __s145local0 = __dep_class_Item.pid;
      __s0local2[__s145param0] = function () {
        var __s150local0 = exports.format.apply(exports, arguments);
        console.error("%s %d: %s", __s145param0, __s145local0, __s150local0);
      };
    } else {
      __s0local2[__s145param0] = function () {};
    }
  }
  return __s0local2[__s145param0];
};
exports.inspect = inspect;
inspect.colors = {
  bold: [1, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  white: [37, 39],
  grey: [90, 39],
  black: [30, 39],
  blue: [34, 39],
  cyan: [36, 39],
  green: [32, 39],
  magenta: [35, 39],
  red: [31, 39],
  yellow: [33, 39]
};
inspect.styles = {
  special: "cyan",
  number: "yellow",
  boolean: "yellow",
  undefined: "grey",
  null: "bold",
  string: "green",
  date: "magenta",
  regexp: "red"
};
exports.isArray = isArray;
exports.isBoolean = isBoolean;
exports.isNull = isNull;
exports.isNullOrUndefined = function isNullOrUndefined(__s155param0) {
  return __s155param0 == null;
};
exports.isNumber = isNumber;
exports.isString = isString;
exports.isSymbol = function isSymbol(__s157param0) {
  return typeof __s157param0 == "symbol";
};
exports.isUndefined = isUndefined;
exports.isRegExp = isRegExp;
exports.isObject = isObject;
exports.isDate = isDate;
exports.isError = isError;
exports.isFunction = isFunction;
exports.isPrimitive = function isPrimitive(__s159param0) {
  return __s159param0 === null || typeof __s159param0 == "boolean" || typeof __s159param0 == "number" || typeof __s159param0 == "string" || typeof __s159param0 == "symbol" || __s159param0 === undefined;
};
exports.isBuffer = require("gge-module:exact_407ab3fd7a408a0e");
var __s0local3 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function hasOwnProperty(__s161param0, __s161param1) {
  return Object.prototype.hasOwnProperty.call(__s161param0, __s161param1);
}
exports.log = function () {
  console.log("%s - %s", function timestamp() {
    var __s165local0 = new Date();
    var __s165local1 = [pad(__s165local0.getHours()), pad(__s165local0.getMinutes()), pad(__s165local0.getSeconds())].join(":");
    return [__s165local0.getDate(), __s0local3[__s165local0.getMonth()], __s165local1].join(" ");
  }(), exports.format.apply(exports, arguments));
};
exports.inherits = require("gge-module:opaque_abbdd9b5728f0d40f7dc71b1__1");
exports._extend = function (__s167param0, __s167param1) {
  if (!__s167param1 || !isObject(__s167param1)) {
    return __s167param0;
  }
  var __s167local0 = Object.keys(__s167param1);
  for (var __s167local1 = __s167local0.length; __s167local1--;) {
    __s167param0[__s167local0[__s167local1]] = __s167param1[__s167local0[__s167local1]];
  }
  return __s167param0;
};

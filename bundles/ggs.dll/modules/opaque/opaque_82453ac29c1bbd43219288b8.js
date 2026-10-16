var __dep_exact_d8857732a937369e = require("gge-module:exact_d8857732a937369e");
var __s0local0 = Infinity;
var __s0local1 = "[object Symbol]";
var __s0local2 = /^\s+/;
var __s0local3 = "[\\ud800-\\udfff]";
var __s0local4 = "[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]";
var __s0local5 = "\\ud83c[\\udffb-\\udfff]";
var __s0local6 = "[^\\ud800-\\udfff]";
var __s0local7 = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var __s0local8 = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var __s0local9 = "(?:" + __s0local4 + "|" + __s0local5 + ")?";
var __s0local10 = "[\\ufe0e\\ufe0f]?" + __s0local9 + ("(?:\\u200d(?:" + [__s0local6, __s0local7, __s0local8].join("|") + ")[\\ufe0e\\ufe0f]?" + __s0local9 + ")*");
var __s0local11 = "(?:" + [__s0local6 + __s0local4 + "?", __s0local4, __s0local7, __s0local8, __s0local3].join("|") + ")";
var __s0local12 = RegExp(__s0local5 + "(?=" + __s0local5 + ")|" + __s0local11 + __s0local10, "g");
var __s0local13 = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]");
var __s0local14 = typeof __dep_exact_d8857732a937369e == "object" && __dep_exact_d8857732a937369e && __dep_exact_d8857732a937369e.Object === Object && __dep_exact_d8857732a937369e;
var __s0local15 = typeof self == "object" && self && self.Object === Object && self;
var __s0local16 = __s0local14 || __s0local15 || Function("return this")();
function baseIndexOf(__s1param0, __s1param1, __s1param2) {
  if (__s1param1 != __s1param1) {
    return function baseFindIndex(__s4param0, __s4param1, __s4param2, __s4param3) {
      for (var __s4local0 = __s4param0.length, __s4local1 = __s4param2 + (__s4param3 ? 1 : -1); __s4param3 ? __s4local1-- : ++__s4local1 < __s4local0;) {
        if (__s4param1(__s4param0[__s4local1], __s4local1, __s4param0)) {
          return __s4local1;
        }
      }
      return -1;
    }(__s1param0, baseIsNaN, __s1param2);
  }
  for (var __s1local0 = __s1param2 - 1, __s1local1 = __s1param0.length; ++__s1local0 < __s1local1;) {
    if (__s1param0[__s1local0] === __s1param1) {
      return __s1local0;
    }
  }
  return -1;
}
function baseIsNaN(__s12param0) {
  return __s12param0 != __s12param0;
}
function stringToArray(__s14param0) {
  if (function hasUnicode(__s16param0) {
    return __s0local13.test(__s16param0);
  }(__s14param0)) {
    return function unicodeToArray(__s19param0) {
      return __s19param0.match(__s0local12) || [];
    }(__s14param0);
  } else {
    return function asciiToArray(__s22param0) {
      return __s22param0.split("");
    }(__s14param0);
  }
}
var __s0local17 = Object.prototype.toString;
var __s0local18 = __s0local16.Symbol;
var __s0local19 = __s0local18 ? __s0local18.prototype : undefined;
var __s0local20 = __s0local19 ? __s0local19.toString : undefined;
function baseToString(__s24param0) {
  if (typeof __s24param0 == "string") {
    return __s24param0;
  }
  if (function isSymbol(__s27param0) {
    return typeof __s27param0 == "symbol" || function isObjectLike(__s29param0) {
      return !!__s29param0 && typeof __s29param0 == "object";
    }(__s27param0) && __s0local17.call(__s27param0) == __s0local1;
  }(__s24param0)) {
    if (__s0local20) {
      return __s0local20.call(__s24param0);
    } else {
      return "";
    }
  }
  var __s24local0 = __s24param0 + "";
  if (__s24local0 == "0" && 1 / __s24param0 == -__s0local0) {
    return "-0";
  } else {
    return __s24local0;
  }
}
function castSlice(__s36param0, __s36param1, __s36param2) {
  var __s36local0 = __s36param0.length;
  __s36param2 = __s36param2 === undefined ? __s36local0 : __s36param2;
  if (!__s36param1 && __s36param2 >= __s36local0) {
    return __s36param0;
  } else {
    return function baseSlice(__s40param0, __s40param1, __s40param2) {
      var __s40local0 = -1;
      var __s40local1 = __s40param0.length;
      if (__s40param1 < 0) {
        __s40param1 = -__s40param1 > __s40local1 ? 0 : __s40local1 + __s40param1;
      }
      if ((__s40param2 = __s40param2 > __s40local1 ? __s40local1 : __s40param2) < 0) {
        __s40param2 += __s40local1;
      }
      __s40local1 = __s40param1 > __s40param2 ? 0 : __s40param2 - __s40param1 >>> 0;
      __s40param1 >>>= 0;
      var __s40local2 = Array(__s40local1);
      while (++__s40local0 < __s40local1) {
        __s40local2[__s40local0] = __s40param0[__s40local0 + __s40param1];
      }
      return __s40local2;
    }(__s36param0, __s36param1, __s36param2);
  }
}
module.exports = function trimStart(__s46param0, __s46param1, __s46param2) {
  if ((__s46param0 = function toString(__s48param0) {
    if (__s48param0 == null) {
      return "";
    } else {
      return baseToString(__s48param0);
    }
  }(__s46param0)) && (__s46param2 || __s46param1 === undefined)) {
    return __s46param0.replace(__s0local2, "");
  }
  if (!__s46param0 || !(__s46param1 = baseToString(__s46param1))) {
    return __s46param0;
  }
  var __s46local0 = stringToArray(__s46param0);
  return castSlice(__s46local0, function charsStartIndex(__s54param0, __s54param1) {
    for (var __s54local0 = -1, __s54local1 = __s54param0.length; ++__s54local0 < __s54local1 && baseIndexOf(__s54param1, __s54param0[__s54local0], 0) > -1;);
    return __s54local0;
  }(__s46local0, stringToArray(__s46param1))).join("");
};

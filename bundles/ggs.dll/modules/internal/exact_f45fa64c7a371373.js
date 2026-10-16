var __dep_exact_d8857732a937369e = require("gge-module:exact_d8857732a937369e");
var __s0local0 = 9007199254740991;
var __s0local1 = "[object Arguments]";
var __s0local2 = "[object Function]";
var __s0local3 = "[object GeneratorFunction]";
var __s0local4 = typeof __dep_exact_d8857732a937369e == "object" && __dep_exact_d8857732a937369e && __dep_exact_d8857732a937369e.Object === Object && __dep_exact_d8857732a937369e;
var __s0local5 = typeof self == "object" && self && self.Object === Object && self;
var __s0local6 = __s0local4 || __s0local5 || Function("return this")();
function arrayPush(__s1param0, __s1param1) {
  for (var __s1local0 = -1, __s1local1 = __s1param1.length, __s1local2 = __s1param0.length; ++__s1local0 < __s1local1;) {
    __s1param0[__s1local2 + __s1local0] = __s1param1[__s1local0];
  }
  return __s1param0;
}
var __s0local7 = Object.prototype;
var __s0local8 = __s0local7.hasOwnProperty;
var __s0local9 = __s0local7.toString;
var __s0local10 = __s0local6.Symbol;
var __s0local11 = __s0local7.propertyIsEnumerable;
var __s0local12 = __s0local10 ? __s0local10.isConcatSpreadable : undefined;
function isFlattenable(__s5param0) {
  return __s0local13(__s5param0) || function isArguments(__s7param0) {
    return function isArrayLikeObject(__s9param0) {
      return function isObjectLike(__s11param0) {
        return !!__s11param0 && typeof __s11param0 == "object";
      }(__s9param0) && function isArrayLike(__s13param0) {
        return __s13param0 != null && function isLength(__s15param0) {
          return typeof __s15param0 == "number" && __s15param0 > -1 && __s15param0 % 1 == 0 && __s15param0 <= __s0local0;
        }(__s13param0.length) && !function isFunction(__s17param0) {
          var __s17local0 = function isObject(__s19param0) {
            var __s19local0 = typeof __s19param0;
            return !!__s19param0 && (__s19local0 == "object" || __s19local0 == "function");
          }(__s17param0) ? __s0local9.call(__s17param0) : "";
          return __s17local0 == __s0local2 || __s17local0 == __s0local3;
        }(__s13param0);
      }(__s9param0);
    }(__s7param0) && __s0local8.call(__s7param0, "callee") && (!__s0local11.call(__s7param0, "callee") || __s0local9.call(__s7param0) == __s0local1);
  }(__s5param0) || !!__s0local12 && !!__s5param0 && !!__s5param0[__s0local12];
}
var __s0local13 = Array.isArray;
module.exports = function flatten(__s21param0) {
  if (__s21param0 && __s21param0.length) {
    return function baseFlatten(__s24param0, __s24param1, __s24param2, __s24param3, __s24param4) {
      var __s24local0 = -1;
      var __s24local1 = __s24param0.length;
      __s24param2 ||= isFlattenable;
      __s24param4 ||= [];
      while (++__s24local0 < __s24local1) {
        var __s24local2 = __s24param0[__s24local0];
        if (__s24param1 > 0 && __s24param2(__s24local2)) {
          if (__s24param1 > 1) {
            baseFlatten(__s24local2, __s24param1 - 1, __s24param2, __s24param3, __s24param4);
          } else {
            arrayPush(__s24param4, __s24local2);
          }
        } else if (!__s24param3) {
          __s24param4[__s24param4.length] = __s24local2;
        }
      }
      return __s24param4;
    }(__s21param0, 1);
  } else {
    return [];
  }
};

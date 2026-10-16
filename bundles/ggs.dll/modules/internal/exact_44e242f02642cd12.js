var __dep_exact_d8857732a937369e = require("gge-module:exact_d8857732a937369e");
var __s0local0 = Infinity;
var __s0local1 = "[object Symbol]";
var __s0local2 = /&(?:amp|lt|gt|quot|#39|#96);/g;
var __s0local3 = RegExp(__s0local2.source);
var __s0local4 = typeof __dep_exact_d8857732a937369e == "object" && __dep_exact_d8857732a937369e && __dep_exact_d8857732a937369e.Object === Object && __dep_exact_d8857732a937369e;
var __s0local5 = typeof self == "object" && self && self.Object === Object && self;
var __s0local6 = __s0local4 || __s0local5 || Function("return this")();
var __s0local7 = function basePropertyOf(__s1param0) {
  return function (__s3param0) {
    if (__s1param0 == null) {
      return undefined;
    } else {
      return __s1param0[__s3param0];
    }
  };
}({
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": "\"",
  "&#39;": "'",
  "&#96;": "`"
});
var __s0local8 = Object.prototype.toString;
var __s0local9 = __s0local6.Symbol;
var __s0local10 = __s0local9 ? __s0local9.prototype : undefined;
var __s0local11 = __s0local10 ? __s0local10.toString : undefined;
function baseToString(__s7param0) {
  if (typeof __s7param0 == "string") {
    return __s7param0;
  }
  if (function isSymbol(__s10param0) {
    return typeof __s10param0 == "symbol" || function isObjectLike(__s12param0) {
      return !!__s12param0 && typeof __s12param0 == "object";
    }(__s10param0) && __s0local8.call(__s10param0) == __s0local1;
  }(__s7param0)) {
    if (__s0local11) {
      return __s0local11.call(__s7param0);
    } else {
      return "";
    }
  }
  var __s7local0 = __s7param0 + "";
  if (__s7local0 == "0" && 1 / __s7param0 == -__s0local0) {
    return "-0";
  } else {
    return __s7local0;
  }
}
module.exports = function unescape(__s19param0) {
  if ((__s19param0 = function toString(__s21param0) {
    if (__s21param0 == null) {
      return "";
    } else {
      return baseToString(__s21param0);
    }
  }(__s19param0)) && __s0local3.test(__s19param0)) {
    return __s19param0.replace(__s0local2, __s0local7);
  } else {
    return __s19param0;
  }
};

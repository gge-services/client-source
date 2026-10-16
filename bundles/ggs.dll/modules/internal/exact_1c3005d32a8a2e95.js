var __dep_exact_e086beeaf80eddb9 = require("gge-module:exact_e086beeaf80eddb9");
function __s0local0(__s1param0) {
  return function () {
    var __s3local0;
    var __s3local1;
    var __s3local2 = 48;
    var __s3local3 = 1;
    var __s3local4 = __s3local2;
    var __s3local5 = new Array(__s3local2);
    var __s3local6 = 0;
    var __s3local7 = new function () {
      var __s5local0 = 4022871197;
      return function (__s7param0) {
        if (__s7param0) {
          __s7param0 = __s7param0.toString();
          for (var __s7local0 = 0; __s7local0 < __s7param0.length; __s7local0++) {
            var __s7local1 = (__s5local0 += __s7param0.charCodeAt(__s7local0)) * 0.02519603282416938;
            __s7local1 -= __s5local0 = __s7local1 >>> 0;
            __s5local0 = (__s7local1 *= __s5local0) >>> 0;
            __s5local0 += (__s7local1 -= __s5local0) * 4294967296;
          }
          return (__s5local0 >>> 0) * 2.3283064365386963e-10;
        }
        __s5local0 = 4022871197;
      };
    }();
    for (__s3local0 = 0; __s3local0 < __s3local2; __s3local0++) {
      __s3local5[__s3local0] = __s3local7(Math.random());
    }
    function __s3local8() {
      if (++__s3local4 >= __s3local2) {
        __s3local4 = 0;
      }
      var __s14local0 = __s3local5[__s3local4] * 1768863 + __s3local3 * 2.3283064365386963e-10;
      return __s3local5[__s3local4] = __s14local0 - (__s3local3 = __s14local0 | 0);
    }
    function __s3local9(__s17param0) {
      return Math.floor(__s17param0 * (__s3local8() + (__s3local8() * 2097152 | 0) * 1.1102230246251565e-16));
    }
    __s3local9.string = function (__s19param0) {
      var __s19local0;
      var __s19local1 = "";
      for (__s19local0 = 0; __s19local0 < __s19param0; __s19local0++) {
        __s19local1 += String.fromCharCode(33 + __s3local9(94));
      }
      return __s19local1;
    };
    __s3local9.cleanString = function (__s23param0) {
      return __s23param0 = (__s23param0 = (__s23param0 = __s23param0.replace(/(^\s*)|(\s*$)/gi, "")).replace(/[\x00-\x1F]/gi, "")).replace(/\n /, "\n");
    };
    __s3local9.hashString = function (__s25param0) {
      __s25param0 = __s3local9.cleanString(__s25param0);
      __s3local7(__s25param0);
      __s3local0 = 0;
      for (; __s3local0 < __s25param0.length; __s3local0++) {
        __s3local6 = __s25param0.charCodeAt(__s3local0);
        __s3local1 = 0;
        for (; __s3local1 < __s3local2; __s3local1++) {
          __s3local5[__s3local1] -= __s3local7(__s3local6);
          if (__s3local5[__s3local1] < 0) {
            __s3local5[__s3local1] += 1;
          }
        }
      }
    };
    __s3local9.seed = function (__s32param0) {
      if (__s32param0 === undefined || __s32param0 === null) {
        __s32param0 = Math.random();
      }
      if (typeof __s32param0 != "string") {
        __s32param0 = __dep_exact_e086beeaf80eddb9(__s32param0, function (__s36param0, __s36param1) {
          if (typeof __s36param1 == "function") {
            return __s36param1.toString();
          } else {
            return __s36param1;
          }
        });
      }
      __s3local9.initState();
      __s3local9.hashString(__s32param0);
    };
    __s3local9.addEntropy = function () {
      var __s40local0 = [];
      for (__s3local0 = 0; __s3local0 < arguments.length; __s3local0++) {
        __s40local0.push(arguments[__s3local0]);
      }
      (function () {
        var __s44local0 = Array.prototype.slice.call(arguments);
        for (__s3local0 = 0; __s3local0 < __s44local0.length; __s3local0++) {
          for (__s3local1 = 0; __s3local1 < __s3local2; __s3local1++) {
            __s3local5[__s3local1] -= __s3local7(__s44local0[__s3local0]);
            if (__s3local5[__s3local1] < 0) {
              __s3local5[__s3local1] += 1;
            }
          }
        }
      })(__s3local6++ + new Date().getTime() + __s40local0.join("") + Math.random());
    };
    __s3local9.initState = function () {
      __s3local7();
      __s3local0 = 0;
      for (; __s3local0 < __s3local2; __s3local0++) {
        __s3local5[__s3local0] = __s3local7(" ");
      }
      __s3local3 = 1;
      __s3local4 = __s3local2;
    };
    __s3local9.done = function () {
      __s3local7 = null;
    };
    if (__s1param0 !== undefined) {
      __s3local9.seed(__s1param0);
    }
    __s3local9.range = function (__s58param0) {
      return __s3local9(__s58param0);
    };
    __s3local9.random = function () {
      return __s3local9(Number.MAX_VALUE - 1) / Number.MAX_VALUE;
    };
    __s3local9.floatBetween = function (__s62param0, __s62param1) {
      return __s3local9.random() * (__s62param1 - __s62param0) + __s62param0;
    };
    __s3local9.intBetween = function (__s64param0, __s64param1) {
      return Math.floor(__s3local9.random() * (__s64param1 - __s64param0 + 1)) + __s64param0;
    };
    return __s3local9;
  }();
}
__s0local0.create = function (__s66param0) {
  return new __s0local0(__s66param0);
};
module.exports = __s0local0;

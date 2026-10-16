Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleMathHelper() {}
  CastleMathHelper.getRandomInt = function (__s5param0, __s5param1) {
    return Math.floor(__s5param0 + Math.random() * (__s5param1 - __s5param0 + 1));
  };
  CastleMathHelper.clamp = function (__s7param0, __s7param1, __s7param2) {
    return Math.max(__s7param1, Math.min(__s7param0, __s7param2));
  };
  CastleMathHelper.getIndicesOfMaxToMinSorting = function (__s9param0) {
    var __s9local0 = __s9param0;
    var __s9local1 = [];
    var __s9local2 = __s9local0[CastleMathHelper.getIndexOfHighestValue(__s9local0)];
    for (var __s9local3 = 0, __s9local4 = 0; __s9local3 < __s9param0.length;) {
      __s9local4 = __dep_exact_f855840627e6e145.int(CastleMathHelper.getIndexOfHighestValue(__s9local0, __s9local2));
      __s9local1.push(__s9local4);
      __s9local0[__s9local4] = Number.MIN_VALUE;
      __s9local3++;
    }
    return __s9local1;
  };
  CastleMathHelper.getIndexOfHighestValue = function (__s13param0, __s13param1 = Number.MAX_VALUE) {
    var __s13local0 = 0;
    var __s13local1 = -1;
    var __s13local2 = 0;
    if (__s13param1 == 0) {
      __s13param1 = Number.MAX_VALUE;
    }
    if (__s13param0 != null) {
      for (var __s13local3 = 0, __s13local4 = __s13param0; __s13local3 < __s13local4.length; __s13local3++) {
        var __s13local5 = __s13local4[__s13local3];
        if (__s13local5 !== undefined) {
          if (__s13local5 > __s13local0 && __s13local5 <= __s13param1) {
            __s13local0 = __s13local5;
            __s13local1 = __s13local2;
          }
          __s13local2++;
        }
      }
    }
    return __s13local1;
  };
  CastleMathHelper.bubbleSort = function (__s21param0, __s21param1 = true, __s21param2 = false) {
    for (var __s21local0 = 0, __s21local1 = false; __s21param0.length - 1 > 0;) {
      if (__s21param1) {
        if (__s21param0[0] < __s21param0[1]) {
          __s21local0 = __s21param0[0];
          __s21param0[0] = __s21param0[1];
          __s21param0[1] = __s21local0;
          __s21local1 = true;
        }
      } else if (__s21param0[0] > __s21param0[1]) {
        __s21local0 = __s21param0[0];
        __s21param0[0] = __s21param0[1];
        __s21param0[1] = __s21local0;
        __s21local1 = true;
      }
    }
    if (__s21local1 && __s21param2) {
      __s21param0 = CastleMathHelper.bubbleSort(__s21param0, __s21param1, __s21param2);
    }
    return __s21param0;
  };
  CastleMathHelper.numberArrayToVector = function (__s29param0) {
    var __s29local0 = [];
    if (__s29param0 != null) {
      for (var __s29local1 = 0, __s29local2 = __s29param0; __s29local1 < __s29local2.length; __s29local1++) {
        var __s29local3 = __s29local2[__s29local1];
        if (__s29local3 !== undefined) {
          __s29local0.push(__s29local3);
        }
      }
    }
    return __s29local0;
  };
  CastleMathHelper.limit = function (__s35param0, __s35param1 = 1, __s35param2 = 0) {
    if (__s35param1 < __s35param2) {
      var __s35local0 = __s35param1;
      __s35param1 = __s35param2;
      __s35param2 = __s35local0;
    }
    return Math.max(Math.min(__s35param0, __s35param1), __s35param2);
  };
  return CastleMathHelper;
}();
exports.CastleMathHelper = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function MathBase() {
    throw new Error("MathBase is a static class and cannot be instantiated.");
  }
  MathBase.toFloatString = function (__s5param0, __s5param1 = 4) {
    __s5param1 = Math.pow(10, __s5param1);
    return (Math.round(__s5param0 * __s5param1) / __s5param1).toString();
  };
  MathBase.max = function () {
    var __s7local0 = [];
    for (var __s7local1 = 0; __s7local1 < arguments.length; __s7local1++) {
      __s7local0[__s7local1] = arguments[__s7local1];
    }
    return MathBase.maxArray(__s7local0);
  };
  MathBase.min = function () {
    var __s11local0 = [];
    for (var __s11local1 = 0; __s11local1 < arguments.length; __s11local1++) {
      __s11local0[__s11local1] = arguments[__s11local1];
    }
    return MathBase.minArray(__s11local0);
  };
  MathBase.maxArray = function (__s15param0) {
    return Math.max.apply(MathBase, __s15param0);
  };
  MathBase.minArray = function (__s17param0) {
    return Math.min.apply(MathBase, __s17param0);
  };
  MathBase.floor = function (__s19param0, __s19param1) {
    var __s19local0 = Math.pow(10, __s19param1);
    return Math.floor(__s19param0 * __s19local0) / __s19local0;
  };
  MathBase.ceil = function (__s21param0, __s21param1) {
    var __s21local0 = Math.pow(10, __s21param1);
    return Math.ceil(__s21param0 * __s21local0) / __s21local0;
  };
  MathBase.round = function (__s23param0, __s23param1) {
    return Math.round(__s23param0 * Math.pow(10, __s23param1)) / Math.pow(10, __s23param1);
  };
  MathBase.random = function (__s25param0, __s25param1, __s25param2 = true) {
    if (__s25param2) {
      return Math.round(Math.random() * (__s25param1 - __s25param0)) + __s25param0;
    } else {
      return Math.random() * (__s25param1 - __s25param0) + __s25param0;
    }
  };
  MathBase.constrain = function (__s29param0, __s29param1, __s29param2) {
    if (__s29param0 < __s29param1) {
      __s29param0 = __s29param1;
    } else if (__s29param0 > __s29param2) {
      __s29param0 = __s29param2;
    }
    return __s29param0;
  };
  MathBase.clamp = function (__s33param0, __s33param1, __s33param2) {
    if (__s33param0 < __s33param1) {
      return __s33param1;
    } else if (__s33param0 > __s33param2) {
      return __s33param2;
    } else {
      return __s33param0;
    }
  };
  MathBase.limit = function (__s38param0, __s38param1, __s38param2, __s38param3 = false) {
    if (!__s38param3) {
      return MathBase.clamp(__s38param0, __s38param1, __s38param2);
    }
    while (__s38param0 > __s38param2) {
      __s38param0 -= __s38param2 - __s38param1;
    }
    while (__s38param0 < __s38param1) {
      __s38param0 += __s38param2 - __s38param1;
    }
    return __s38param0;
  };
  MathBase.distance = function (__s45param0, __s45param1, __s45param2, __s45param3) {
    var __s45local0 = __s45param0 - __s45param1;
    var __s45local1 = __s45param2 - __s45param3;
    return Math.sqrt(__s45local0 * __s45local0 + __s45local1 * __s45local1);
  };
  MathBase.proportion = function (__s47param0, __s47param1, __s47param2, __s47param3, __s47param4 = 1) {
    return (__s47param3 - __s47param2) / (__s47param1 - __s47param0) * ((__s47param4 || 1) - __s47param0) + __s47param2;
  };
  MathBase.percent = function (__s49param0, __s49param1) {
    if (__s49param1 == 0) {
      return 0;
    } else {
      return __s49param0 / __s49param1 * 100;
    }
  };
  MathBase.isPositive = function (__s53param0) {
    return __s53param0 >= 0;
  };
  MathBase.isNegative = function (__s55param0) {
    return __s55param0 < 0;
  };
  MathBase.isOdd = function (__s57param0) {
    return ~~__s57param0 % 2 == 1;
  };
  MathBase.isEven = function (__s59param0) {
    return ~~__s59param0 % 2 == 0;
  };
  MathBase.isPrime = function (__s61param0) {
    if (__s61param0 > 2 && __s61param0 % 2 == 0) {
      return false;
    }
    for (var __s61local0 = Math.sqrt(__s61param0), __s61local1 = 3; __s61local1 <= __s61local0; __s61local1 += 2) {
      if (__s61param0 % __s61local1 == 0) {
        return false;
      }
    }
    return true;
  };
  MathBase.factorial = function (__s67param0) {
    if (__s67param0 == 0) {
      return 1;
    }
    var __s67local0 = __s67param0.valueOf();
    for (var __s67local1 = __s67local0 - 1; __s67local1;) {
      __s67local0 *= __s67local1;
      __s67local1--;
    }
    return __s67local0;
  };
  MathBase.getDivisors = function (__s72param0) {
    var __s72local0 = new Array();
    for (var __s72local1 = 1, __s72local2 = __s72param0 / 2; __s72local1 <= __s72local2; __s72local1++) {
      if (__s72param0 % __s72local1 == 0) {
        __s72local0.push(__s72local1);
      }
    }
    if (__s72param0 != 0) {
      __s72local0.push(__s72param0.valueOf());
    }
    return __s72local0;
  };
  MathBase.isInteger = function (__s78param0) {
    return __s78param0 % 1 == 0;
  };
  MathBase.isNatural = function (__s80param0) {
    return __s80param0 >= 0 && __s80param0 % 1 == 0;
  };
  MathBase.sanitizeFloat = function (__s82param0, __s82param1 = 5) {
    var __s82local0 = Math.pow(10, __s82param1);
    return Math.round(__s82local0 * __s82param0) / __s82local0;
  };
  MathBase.fuzzyEqual = function (__s84param0, __s84param1, __s84param2 = 5) {
    var __s84local0 = __s84param0 - __s84param1;
    var __s84local1 = Math.pow(10, -__s84param2);
    return __s84local0 < __s84local1 && __s84local0 > -__s84local1;
  };
  MathBase.getSign = function (__s86param0) {
    if (__s86param0 < 0) {
      return -1;
    } else {
      return 1;
    }
  };
  return MathBase;
}();
exports.MathBase = __s0local0;

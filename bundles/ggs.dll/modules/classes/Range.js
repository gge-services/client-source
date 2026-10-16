Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function Range() {
    throw new Error("Range is a static class and cannot be instantiated.");
  }
  Range.isInRange = function (__s5param0, __s5param1, __s5param2, __s5param3 = null) {
    __s5param3 ||= new Array();
    if (__s5param3.length > 0) {
      for (var __s5local0 in __s5param3) {
        if (__s5param0 == __s5param3[__s5local0]) {
          return false;
        }
      }
    }
    return __s5param0 >= __s5param1 && __s5param0 <= __s5param2;
  };
  Range.randRangeSet = function (__s11param0, __s11param1, __s11param2, __s11param3) {
    var __s11local0 = new Array();
    if (__s11param3 && __s11param2 <= __s11param1 - __s11param0 + 1) {
      var __s11local1 = new Array();
      for (var __s11local2 = __s11param0; __s11local2 <= __s11param1; __s11local2++) {
        __s11local1.push(__s11local2);
      }
      for (var __s11local3 = 1; __s11local3 <= __s11param2; __s11local3++) {
        var __s11local4 = Math.floor(Math.random() * __s11local1.length);
        __s11local0.push(__s11local1[__s11local4]);
        __s11local1.splice(__s11local4, 1);
      }
    } else {
      for (var __s11local5 = 1; __s11local5 <= __s11param2; __s11local5++) {
        __s11local0.push(Range.randRangeInt(__s11param0, __s11param1));
      }
    }
    return __s11local0;
  };
  Range.randRangeFloat = function (__s21param0, __s21param1) {
    return Math.random() * (__s21param1 - __s21param0) + __s21param0;
  };
  Range.randRangeInt = function (__s23param0, __s23param1) {
    return Math.floor(Math.random() * (__s23param1 - __s23param0 + 1) + __s23param0);
  };
  Range.resolve = function (__s25param0, __s25param1, __s25param2) {
    return Math.max(Math.min(__s25param0, __s25param2), __s25param1);
  };
  Range.center = function (__s27param0, __s27param1, __s27param2) {
    if (__s27param0 > __s27param1 && __s27param0 > __s27param2) {
      if (__s27param1 > __s27param2) {
        return __s27param1;
      } else {
        return __s27param2;
      }
    } else if (__s27param1 > __s27param0 && __s27param1 > __s27param2) {
      if (__s27param0 > __s27param2) {
        return __s27param0;
      } else {
        return __s27param2;
      }
    } else if (__s27param0 > __s27param1) {
      return __s27param0;
    } else {
      return __s27param1;
    }
  };
  return Range;
}();
exports.Range = __s0local0;

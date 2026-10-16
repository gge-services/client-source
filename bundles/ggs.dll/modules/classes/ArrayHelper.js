Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ArrayHelper() {}
  ArrayHelper.cloneArray = function (__s5param0) {
    return __s5param0.concat();
  };
  ArrayHelper.shuffleArray = function (__s7param0) {
    for (var __s7local0 = 0; __s7local0 < __s7param0.length; __s7local0++) {
      var __s7local1 = Math.floor(Math.random() * __s7param0.length);
      var __s7local2 = __s7param0[__s7local0];
      __s7param0[__s7local0] = __s7param0[__s7local1];
      __s7param0[__s7local1] = __s7local2;
    }
  };
  ArrayHelper.getRange = function (__s11param0, __s11param1 = 0, __s11param2 = -1) {
    var __s11local0 = [];
    if (__s11param2 == -1) {
      __s11param2 = __s11param0.length;
    }
    for (var __s11local1 = 0; __s11local1 <= Math.min(__s11param0.length - 1, __s11param2); __s11local1++) {
      if (__s11local1 >= __s11param1) {
        __s11local0.push(__s11param0[__s11local1]);
      }
    }
    return __s11local0;
  };
  ArrayHelper.mirrorArray = function (__s17param0) {
    for (var __s17local0 = __s17param0[0].length, __s17local1 = __s17param0.length, __s17local2 = new Array(__s17local0), __s17local3 = 0; __s17local3 < __s17local0; __s17local3++) {
      __s17local2[__s17local3] = new Array(__s17local1);
      for (var __s17local4 = 0; __s17local4 < __s17local1; __s17local4++) {
        __s17local2[__s17local3][__s17local4] = __s17param0[__s17local4][__s17local3];
      }
    }
    return __s17local2;
  };
  ArrayHelper.createUniqueCopy = function (__s23param0) {
    var __s23local0;
    var __s23local1 = new Array();
    for (var __s23local2 = __s23param0.length, __s23local3 = 0; __s23local3 < __s23local2; ++__s23local3) {
      __s23local0 = __s23param0[__s23local3];
      if (!(__s23local1.indexOf(__s23local0) >= 0)) {
        __s23local1.push(__s23local0);
      }
    }
    return __s23local1;
  };
  return ArrayHelper;
}();
exports.ArrayHelper = __s0local0;

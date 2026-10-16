Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ValidationError = require("gge-module:export_ValidationError");
exports.Contract = function Contract() {
  var __s1local0 = [];
  for (var __s1local1 = 0; __s1local1 < arguments.length; __s1local1++) {
    __s1local0[__s1local1] = arguments[__s1local1];
  }
  var __s1local2 = __s1local0.length - 1;
  var __s1local3 = __s1local0.slice(0, __s1local2);
  var __s1local4 = __s1local0[__s1local2];
  return {
    enforce: function (__s5param0) {
      return function () {
        var __s7local0 = [];
        for (var __s7local1 = 0; __s7local1 < arguments.length; __s7local1++) {
          __s7local0[__s7local1] = arguments[__s7local1];
        }
        if (__s7local0.length < __s1local3.length) {
          throw __dep_export_ValidationError.validationError("Expected " + __s1local3.length + " arguments but only received " + __s7local0.length);
        }
        for (var __s7local2 = 0; __s7local2 < __s1local3.length; __s7local2++) {
          __s1local3[__s7local2].check(__s7local0[__s7local2]);
        }
        return __s1local4.check(__s5param0.apply(undefined, __s7local0));
      };
    }
  };
};

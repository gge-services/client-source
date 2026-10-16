Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ValidationError = require("gge-module:export_ValidationError");
var __dep_export_Always = require("gge-module:export_Always");
var __dep_export_Array = require("gge-module:export_Array");
exports.Tuple = function Tuple() {
  var __s1local0 = [];
  for (var __s1local1 = 0; __s1local1 < arguments.length; __s1local1++) {
    __s1local0[__s1local1] = arguments[__s1local1];
  }
  return __dep_export_ValidationError.create(function (__s5param0) {
    var __s5local0 = __dep_export_Array.Array(__dep_export_Always.Always).check(__s5param0);
    if (__s5local0.length < __s1local0.length) {
      throw __dep_export_ValidationError.validationError("Expected array of " + __s1local0.length + " but was " + __s5local0.length);
    }
    for (var __s5local1 = 0; __s5local1 < __s1local0.length; __s5local1++) {
      __s1local0[__s5local1].check(__s5local0[__s5local1]);
    }
    return __s5param0;
  }, {
    tag: "tuple",
    components: __s1local0
  });
};

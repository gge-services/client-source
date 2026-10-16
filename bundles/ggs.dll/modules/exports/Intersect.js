Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ValidationError = require("gge-module:export_ValidationError");
exports.Intersect = function Intersect() {
  var __s1local0 = [];
  for (var __s1local1 = 0; __s1local1 < arguments.length; __s1local1++) {
    __s1local0[__s1local1] = arguments[__s1local1];
  }
  return __dep_export_ValidationError.create(function (__s5param0) {
    for (var __s5local0 = 0, __s5local1 = __s1local0; __s5local0 < __s5local1.length; __s5local0++) {
      (0, __s5local1[__s5local0].check)(__s5param0);
    }
    return __s5param0;
  }, {
    tag: "intersect",
    intersectees: __s1local0
  });
};

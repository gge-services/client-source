Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_ValidationError = require("gge-module:export_ValidationError");
exports.Lazy = function Lazy(__s1param0) {
  var __s1local0;
  var __s1local1 = {
    get tag() {
      return getWrapped().tag;
    }
  };
  function getWrapped() {
    if (!__s1local0) {
      for (var __s5local0 in __s1local0 = __s1param0()) {
        if (__s5local0 !== "tag") {
          __s1local1[__s5local0] = __s1local0[__s5local0];
        }
      }
    }
    return __s1local0;
  }
  return __dep_export_ValidationError.create(function (__s11param0) {
    return getWrapped().check(__s11param0);
  }, __s1local1);
};

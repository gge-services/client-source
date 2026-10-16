Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function StringUtils() {}
  StringUtils.isEmpty = function (__s5param0) {
    return __s5param0 == null || __s5param0.length == 0;
  };
  StringUtils.safeRemove = function (__s7param0, __s7param1) {
    if (StringUtils.isEmpty(__s7param0)) {
      return __s7param0;
    } else {
      return __s7param0.replace(__s7param1, "");
    }
  };
  StringUtils.remove = function (__s11param0, __s11param1) {
    return StringUtils.safeRemove(__s11param0, new RegExp(__s11param1, "g"));
  };
  StringUtils.removeEnd = function (__s13param0, __s13param1) {
    if (!StringUtils.isEmpty(__s13param0)) {
      __s13param1 = __s13param1.replace(/([\^\$\(\[\]\)\.\?])/g, "\\$1");
    }
    return StringUtils.safeRemove(__s13param0, new RegExp(__s13param1 + "$", ""));
  };
  return StringUtils;
}();
exports.StringUtils = __s0local0;

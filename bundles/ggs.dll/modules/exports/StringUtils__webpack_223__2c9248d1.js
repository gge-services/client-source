// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 223
// Export: StringUtils; preserved source: modules/internal/exact_31799b4faed13bdc.js
// Original canonical SHA-256: 407bc3d34d8bfd54912d424b237e608407cf94b189bae75d6f3cf4236e97d8d7
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

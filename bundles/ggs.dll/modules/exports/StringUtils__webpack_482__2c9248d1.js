// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 482
// Export: StringUtils; preserved source: modules/internal/exact_c7978b33cc5e93f6.js
// Original canonical SHA-256: 6c4b2eb742e722c45e26ea25d0975c71fd6c86962898467b612b0232595498ec
var __s0local0 = function () {
  function StringUtils() {}
  StringUtils.encrypt = function (__s5param0) {
    return StringUtils.invertString(__s5param0);
  };
  StringUtils.decrypt = function (__s7param0) {
    return StringUtils.invertString(__s7param0);
  };
  StringUtils.invertString = function (__s9param0) {
    var __s9local0 = [];
    for (var __s9local1 = 0; __s9local1 < __s9param0.length; __s9local1++) {
      __s9local0.push(String.fromCharCode(__s9param0.charCodeAt(__s9local1) ^ 255));
    }
    return __s9local0.join("");
  };
  return StringUtils;
}();
exports.StringUtils = __s0local0;

// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 749
// Export: reversePunctuation; preserved source: modules/webpack/exports/NOBREAK_SPACE_CHAR.js
// Original canonical SHA-256: fa5dcf415c3228a7d9f0ab103ee49326e822b23141dca512beb19eb98b8abc6d
exports.reversePunctuation = function (__s8param0) {
  var __s8local0;
  __s8local0 = exports.RIGHT_TO_LEFT_MARK + "$1" + exports.RIGHT_TO_LEFT_MARK;
  __s8param0 = __s8param0.replace(/([\!\.\+\-\•])/g, __s8local0);
  (function () {
    var __s10local0 = "$1" + exports.RIGHT_TO_LEFT_MARK + ")" + exports.RIGHT_TO_LEFT_MARK;
    __s8param0 = __s8param0.replace(/([^0-9a-zA-Z])\)/g, __s10local0);
  })();
  (function () {
    var __s12local0 = exports.RIGHT_TO_LEFT_MARK + "(" + exports.RIGHT_TO_LEFT_MARK;
    __s8param0 = __s8param0.replace(/\((?![0-9a-zA-Z])/g, __s12local0);
  })();
  (function () {
    var __s14local0 = "$1" + exports.RIGHT_TO_LEFT_MARK + ":" + exports.RIGHT_TO_LEFT_MARK;
    __s8param0 = __s8param0.replace(/([^"]):(?![{}])/g, __s14local0);
  })();
  (function () {
    var __s16local0 = "\"" + exports.RIGHT_TO_LEFT_MARK + "$1" + exports.RIGHT_TO_LEFT_MARK;
    __s8param0 = __s8param0.replace(/"([0-9])(?![0-9a-zA-Z])/g, __s16local0);
  })();
  return __s8param0;
};

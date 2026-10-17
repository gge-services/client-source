// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 749
// Export: reverseSinglePlaceholder; preserved source: modules/webpack/exports/NOBREAK_SPACE_CHAR.js
// Original canonical SHA-256: fa5dcf415c3228a7d9f0ab103ee49326e822b23141dca512beb19eb98b8abc6d
exports.reverseSinglePlaceholder = function (__s1param0) {
  var __s1local0 = function (__s3param0) {
    var __s3local0 = __s3param0.match(__s0local0);
    if (__s3local0) {
      return __s3local0.index;
    } else {
      return -1;
    }
  }(__s1param0);
  if (__s1local0 != -1) {
    var __s1local1 = __s1param0.slice(0, __s1local0);
    var __s1local2 = __s1param0.slice(__s1local0).split("");
    __s1local2.push(__s1local2.shift());
    return __s1local2.join("") + __s1local1;
  }
  return __s1param0;
};

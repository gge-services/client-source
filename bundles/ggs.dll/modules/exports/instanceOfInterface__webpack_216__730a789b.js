// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 216
// Export: instanceOfInterface; preserved source: modules/webpack/internal/exact_639b6152d2719a46.js
// Original canonical SHA-256: 4749283254ca14ce34ded9134800b1260bb41cf635d0bfd583e30e136bf35c20
exports.instanceOfInterface = function instanceOfInterface(__s1param0, __s1param1) {
  if (__s1param0 === undefined || __s1param0 === null) {
    return false;
  }
  var __s1local0 = __s1param0.__proto__ && __s1param0.__proto__[__s0local0];
  return Boolean(__s1local0 && __s1local0.has(__s1param1));
};

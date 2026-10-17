// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 134
// Export: _extend; preserved source: modules/webpack/exports/_extend.js
// Original canonical SHA-256: 904ddcd74133a3f10ecafafb51c9ed08ee75f062e993851215f616d90fcb0656
exports._extend = function (__s167param0, __s167param1) {
  if (!__s167param1 || !isObject(__s167param1)) {
    return __s167param0;
  }
  var __s167local0 = Object.keys(__s167param1);
  for (var __s167local1 = __s167local0.length; __s167local1--;) {
    __s167param0[__s167local0[__s167local1]] = __s167param1[__s167local0[__s167local1]];
  }
  return __s167param0;
};

// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 134
// Export: debuglog; preserved source: modules/webpack/exports/_extend.js
// Original canonical SHA-256: 904ddcd74133a3f10ecafafb51c9ed08ee75f062e993851215f616d90fcb0656
exports.debuglog = function (__s145param0) {
  if (isUndefined(__s0local1)) {
    __s0local1 = __dep_class_Item.env.NODE_DEBUG || "";
  }
  __s145param0 = __s145param0.toUpperCase();
  if (!__s0local2[__s145param0]) {
    if (new RegExp("\\b" + __s145param0 + "\\b", "i").test(__s0local1)) {
      var __s145local0 = __dep_class_Item.pid;
      __s0local2[__s145param0] = function () {
        var __s150local0 = exports.format.apply(exports, arguments);
        console.error("%s %d: %s", __s145param0, __s145local0, __s150local0);
      };
    } else {
      __s0local2[__s145param0] = function () {};
    }
  }
  return __s0local2[__s145param0];
};

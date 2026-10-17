// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 134
// Export: deprecate; preserved source: modules/webpack/exports/_extend.js
// Original canonical SHA-256: 904ddcd74133a3f10ecafafb51c9ed08ee75f062e993851215f616d90fcb0656
exports.deprecate = function (__s18param0, __s18param1) {
  if (isUndefined(__dep_exact_d8857732a937369e.process)) {
    return function () {
      return exports.deprecate(__s18param0, __s18param1).apply(this, arguments);
    };
  }
  if (__dep_class_Item.noDeprecation === true) {
    return __s18param0;
  }
  var __s18local0 = false;
  return function deprecated() {
    if (!__s18local0) {
      if (__dep_class_Item.throwDeprecation) {
        throw new Error(__s18param1);
      }
      if (__dep_class_Item.traceDeprecation) {
        console.trace(__s18param1);
      } else {
        console.error(__s18param1);
      }
      __s18local0 = true;
    }
    return __s18param0.apply(this, arguments);
  };
};

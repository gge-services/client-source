// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 739
// Export: doReplacements; preserved source: modules/webpack/exports/doReplacements.js
// Original canonical SHA-256: 7e07b90aca151ceb331f41dce3e4569d7619eca613f38cf350e67c31de34da7e
exports.doReplacements = function (__s145param0, __s145param1, __s145param2 = true) {
  if (__s145param1) {
    var __s145local0 = __s145param0 && Object.keys(__s145param0);
    if (__s145local0) {
      if (__s145param2 && __s145local0.length == 1 && __s145param1) {
        var __s145local1 = __s145local0[0];
        if (__s145param0[__s145local1] && /^[A-Za-z0-9]*$/.test(__s145param0[__s145local1])) {
          __s145param1 = __dep_export_NOBREAK_SPACE_CHAR.reverseSinglePlaceholder(__s145param1);
        }
      }
      __s145local0.forEach(function (__s151param0) {
        var __s151local0 = __s145param0[__s151param0];
        var __s151local1 = new RegExp("\\{" + __s151param0 + "}", "ig");
        __s145param1 = __s145param1.replace(__s151local1, __s151local0);
      });
    }
  }
  return __s145param1;
};

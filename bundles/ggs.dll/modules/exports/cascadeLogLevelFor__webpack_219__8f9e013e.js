// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 219
// Export: cascadeLogLevelFor; preserved source: modules/webpack/internal/exact_a99112fb7b17b590.js
// Original canonical SHA-256: 9f788c3d19bb4abb1b8b575ca6d07d61486c4a79d3910fd57731a3a30f36f77f
exports.cascadeLogLevelFor = function cascadeLogLevelFor(__s5param0, __s5param1) {
  __dep_export_getLoggerHierarchyFor.getLoggerHierarchyFor(__s5param0).forEach(function (__s7param0) {
    __s7param0.setLevel(__s5param1);
  });
};

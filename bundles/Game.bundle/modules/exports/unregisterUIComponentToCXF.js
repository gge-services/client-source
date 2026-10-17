// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: Game.bundle; Webpack module: 273
// Export: unregisterUIComponentToCXF; preserved source: modules/webpack/exports/cxfResetCommandCache.js
// Original canonical SHA-256: e1e3c4ed197739184eae8c740f5b35de38ea6efc618134e6f0008ccc16aaa261
exports.unregisterUIComponentToCXF = function (__s33param0) {
  if (__s0local5.has(__s33param0)) {
    __s0local5.get(__s33param0).undecorate();
    __s0local5.delete(__s33param0);
  }
};

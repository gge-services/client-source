// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 874
// Export: loadAssets; preserved source: modules/webpack/internal/exact_077efcab74effb33.js
// Original canonical SHA-256: 5b924af93b81d2fbdf3ac7775d4d0b04bc8109dde375fd480f7c41ba11ede425
exports.loadAssets = function loadAssets(__s19param0, __s19param1 = __s0local0.PARALLEL, __s19param2 = 0) {
  __s0local2.debug("loadAssets list - " + __s19param0 + ", flowType: " + __s19param1 + ", prio: " + __s19param2);
  if (__s19param1 == __s0local0.PARALLEL) {
    return Promise.all(__s19param0.map(function (__s22param0) {
      return loadAsset(__s22param0, __s19param2);
    }));
  }
  if (__s19param1 == __s0local0.SEQUENTIAL) {
    var __s19local0 = [];
    return __s19param0.reduce(function (__s25param0, __s25param1) {
      return __s25param0.then(function (__s27param0) {
        return loadAsset(__s25param1, __s19param2).then(function (__s29param0) {
          return __s19local0.push(__s29param0);
        });
      });
    }, Promise.resolve());
  }
  return null;
};

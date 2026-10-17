// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 72
// Export: findPreferredInstanceForCountry; preserved source: modules/webpack/exports/NetworkInstancesManager.js
// Original canonical SHA-256: 24892bb524375e0b714f335857c06fb010c21c10ffffe6554fd36c2029e336bd
exports.findPreferredInstanceForCountry = function (__s59param0, __s59param1) {
  var __s59local0 = exports.getInstancesByCountryCode(__s59param0, __s59param1);
  return __s0local2(__s59local0.filter(function (__s61param0) {
    return !__s61param0.isInternational;
  })) || __s0local2(__s59local0.filter(function (__s63param0) {
    return __s63param0.isInternational;
  }));
};

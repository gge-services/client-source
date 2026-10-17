// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 72
// Export: getInstancesByCountryCode; preserved source: modules/webpack/exports/NetworkInstancesManager.js
// Original canonical SHA-256: 24892bb524375e0b714f335857c06fb010c21c10ffffe6554fd36c2029e336bd
exports.getInstancesByCountryCode = function (__s41param0, __s41param1) {
  function __s41local0(__s43param0) {
    return __s43param0.ggsCountryCode === __s41param1;
  }
  return __s41param0.filter(function (__s45param0) {
    return __s45param0.countries.some(__s41local0);
  });
};

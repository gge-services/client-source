// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 147
// Export: filterCountriesByCountryCode; preserved source: modules/webpack/exports/filterCountriesByBrowserLanguage.js
// Original canonical SHA-256: 2031ff8743ce32dbd1a0ccba7fbef449fe3b05d785f3f0db626ccfaf0f6052f8
exports.filterCountriesByCountryCode = function (__s1param0, __s1param1) {
  return __s1param0.filter(function (__s3param0) {
    return __s3param0.ggsCountryCode.toLowerCase() === __s1param1.toLowerCase();
  });
};

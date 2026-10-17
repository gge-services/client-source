// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 147
// Export: filterCountriesByBrowserLanguage; preserved source: modules/webpack/exports/filterCountriesByBrowserLanguage.js
// Original canonical SHA-256: 2031ff8743ce32dbd1a0ccba7fbef449fe3b05d785f3f0db626ccfaf0f6052f8
exports.filterCountriesByBrowserLanguage = function (__s11param0, __s11param1) {
  return __s11param0.filter(function (__s13param0) {
    return __s13param0.browserLanguageCodes.map(function (__s15param0) {
      return __s15param0.toLocaleLowerCase();
    }).includes(__s11param1.toLocaleLowerCase());
  });
};

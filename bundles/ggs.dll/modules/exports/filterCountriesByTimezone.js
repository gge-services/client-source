// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 147
// Export: filterCountriesByTimezone; preserved source: modules/webpack/exports/filterCountriesByBrowserLanguage.js
// Original canonical SHA-256: 2031ff8743ce32dbd1a0ccba7fbef449fe3b05d785f3f0db626ccfaf0f6052f8
exports.filterCountriesByTimezone = function (__s17param0, __s17param1) {
  return __s17param0.filter(function (__s19param0) {
    return __s19param0.isUTCTimezoneInRange(__s17param1);
  });
};

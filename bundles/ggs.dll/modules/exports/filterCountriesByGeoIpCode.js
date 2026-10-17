// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 147
// Export: filterCountriesByGeoIpCode; preserved source: modules/webpack/exports/filterCountriesByBrowserLanguage.js
// Original canonical SHA-256: 2031ff8743ce32dbd1a0ccba7fbef449fe3b05d785f3f0db626ccfaf0f6052f8
exports.filterCountriesByGeoIpCode = function (__s5param0, __s5param1) {
  return __s5param0.filter(function (__s7param0) {
    return __s7param0.geoIpCodes.map(function (__s9param0) {
      return __s9param0.toLocaleLowerCase();
    }).includes(__s5param1.toLocaleLowerCase());
  });
};

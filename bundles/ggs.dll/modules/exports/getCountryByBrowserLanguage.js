// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 620
// Export: getCountryByBrowserLanguage; preserved source: modules/webpack/exports/getCountryByBrowserLanguage.js
// Original canonical SHA-256: 6fcd9424453ce8affa65a86b76ecccd3b995d83ac00815bb26d48c2a032f2d89
exports.getCountryByBrowserLanguage = function (__s7param0, __s7param1) {
  if (__s7param0 && __s7param1) {
    return __dep_export_filterCountriesByBrowserLanguage.filterCountriesByBrowserLanguage(__s7param0, __s7param1)[0];
  }
  __s0local0.debug("CountrySelector.getCountryByBrowserLanguage: error with countries || countryCode", __s7param0, __s7param1);
};

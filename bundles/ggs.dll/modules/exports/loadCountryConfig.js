// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 629
// Export: loadCountryConfig; preserved source: modules/webpack/exports/detectCountry.js
// Original canonical SHA-256: a6f606f86dd11db61bb6b41644598796c32f4da93fc4bc78100956a4ef04fb0f
exports.loadCountryConfig = function (__s1param0) {
  return __dep_opaque_1bc5cb62fa0fa0642df721a1__1.__awaiter(__s0local0, undefined, undefined, function () {
    return __dep_opaque_1bc5cb62fa0fa0642df721a1__1.__generator(this, function (__s5param0) {
      if (__s1param0) {
        __s1param0(__dep_class_WorldAssignmentTrackingConstants.WorldAssignmentTrackingConstants.COUNTRY_XML_START);
      }
      __s0local1.debug("loadCountryConfig: load country.xml from", __dep_export_Context.Context.instance.globals.countriesConfigUrl);
      return [2, new __dep_exact_551693c13e511709.Service(__dep_export_Context.Context.instance.globals.countriesConfigUrl).load().then(function (__s8param0) {
        if (__s1param0) {
          __s1param0(__dep_class_WorldAssignmentTrackingConstants.WorldAssignmentTrackingConstants.COUNTRY_XML_END);
        }
        var __s8local0 = __dep_export_parseCountries.parseCountries(__s8param0);
        __dep_export_Context.Context.instance.get(__dep_export_CountriesManager.CountriesManager).initCountries(__s8local0);
      }).catch(function () {
        throw new __dep_class_WorldAssignmentError.WorldAssignmentError(__dep_class_WorldAssignmentErrorCodes.WorldAssignmentErrorCodes.COUNTRY_FAILED_TO_LOAD, "Failed to load country.xml from " + __dep_export_Context.Context.instance.globals.countriesConfigUrl);
      })];
    });
  });
};

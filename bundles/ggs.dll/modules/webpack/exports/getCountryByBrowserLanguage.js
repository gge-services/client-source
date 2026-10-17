Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_export_filterCountriesByBrowserLanguage = require("gge-module:export_filterCountriesByBrowserLanguage");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger("WorldAssignment.CountrySelector");
exports.getCountryByCountryCode = function (__s1param0, __s1param1) {
  if (__s1param0 && __s1param1) {
    return __dep_export_filterCountriesByBrowserLanguage.filterCountriesByCountryCode(__s1param0, __s1param1)[0];
  }
  __s0local0.debug("CountrySelector.getCountryByCountryCode: error with countries || countryCode", __s1param0, __s1param1);
};
exports.getCountryByGeoIpCode = function (__s4param0, __s4param1) {
  if (__s4param0 && __s4param1) {
    return __dep_export_filterCountriesByBrowserLanguage.filterCountriesByGeoIpCode(__s4param0, __s4param1)[0];
  }
  __s0local0.debug("CountrySelector.getCountryByGeoIpCode: error with countries || countryCode", __s4param0, __s4param1);
};
exports.getCountryByBrowserLanguage = function (__s7param0, __s7param1) {
  if (__s7param0 && __s7param1) {
    return __dep_export_filterCountriesByBrowserLanguage.filterCountriesByBrowserLanguage(__s7param0, __s7param1)[0];
  }
  __s0local0.debug("CountrySelector.getCountryByBrowserLanguage: error with countries || countryCode", __s7param0, __s7param1);
};

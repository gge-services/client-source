// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 631
// Export: getCountryCodeByFriendInvite; preserved source: modules/webpack/exports/getCountryCodeByDefaultInstance.js
// Original canonical SHA-256: 1c143fe850a0fdd8cdfd3ba3f53b32696f3e0084c257b5f2ea46595c990bc283
exports.getCountryCodeByFriendInvite = function (__s9param0, __s9param1) {
  var __s9local0 = __dep_export_Context.Context.instance.get(__dep_export_NetworkInstancesManager.NetworkInstancesManager);
  if (__s9local0) {
    if (__s9param0 > 0) {
      var __s9local1 = __s9local0.getInstanceByZoneId(__s9param0);
      if (__s9local1 && __s9local1.countries) {
        var __s9local2 = __dep_export_filterCountriesByBrowserLanguage.filterCountriesByCountryCode(__s9local1.countries, __s9param1);
        if (__s9local2.length) {
          return __s9local2[0].ggsCountryCode;
        } else {
          return __s9local1.countries[0].ggsCountryCode;
        }
      }
      __s0local0.error("getCountryCodeByFriendInvite: instance provided by friend invite code is not valid");
    }
  } else {
    __s0local0.error("getCountryCodeByFriendInvite: NetworkInstancesManager not initialized");
  }
};

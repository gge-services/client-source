// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 629
// Export: detectCountry; preserved source: modules/webpack/exports/detectCountry.js
// Original canonical SHA-256: a6f606f86dd11db61bb6b41644598796c32f4da93fc4bc78100956a4ef04fb0f
exports.detectCountry = function () {
  return __dep_opaque_1bc5cb62fa0fa0642df721a1__1.__awaiter(__s0local0, undefined, undefined, function () {
    var __s15local0;
    var __s15local1;
    var __s15local2;
    var __s15local3;
    var __s15local4;
    var __s15local5;
    return __dep_opaque_1bc5cb62fa0fa0642df721a1__1.__generator(this, function (__s17param0) {
      switch (__s17param0.label) {
        case 0:
          __s0local1.debug("detectCountry: START");
          __s15local0 = __dep_export_Context.Context.instance.globals;
          __s15local1 = __dep_export_Context.Context.instance.get(__dep_export_CountriesManager.CountriesManager);
          __s15local2 = new __dep_export_CountryDetectionVO.CountryDetectionVO(__s15local0.browserLanguage, __s15local0.timezoneOffset, __s15local0.countryCodeFromNetworkCookie, __s15local0.countryCodeFromQueryString, __dep_export_getCountryCodeByDefaultInstance.getCountryCodeByPresetInstance(__s15local0.presetInstanceId), __dep_export_getCountryCodeByDefaultInstance.getCountryCodeByFriendInvite(__s15local0.zoneIdFromFriendInviteCode, __s15local0.countryCodeFromFriendInviteCode), __dep_export_getCountryCodeByDefaultInstance.getCountryCodeByDefaultInstance(__dep_export_Context.Context.instance.networkSettings.defaultInstanceId), __s15local0.fakeGeoIpResponse, __s15local0.alsoDetectUnavailableCountries);
          return [4, __dep_export_runCountryDetection.runCountryDetection(__s15local2, __s15local1)];
        case 1:
          __s15local3 = __s17param0.sent();
          __s15local4 = __s15local3.country;
          __s15local5 = __s15local3.factor;
          __s15local1.detectionFactor = __s15local5;
          __s15local1.currentCountry = __dep_export_forceEnglishForSupportAgents.forceEnglishForSupportAgents(__s15local4, __s15local0.isHydraLogin);
          return [2, __s15local1.currentCountry];
      }
    });
  });
};

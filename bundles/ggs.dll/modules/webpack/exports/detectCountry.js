var __s0local0 = this;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_opaque_1bc5cb62fa0fa0642df721a1__1 = require("gge-module:opaque_1bc5cb62fa0fa0642df721a1__1");
var __dep_exact_551693c13e511709 = require("gge-module:exact_551693c13e511709");
var __dep_export_CountriesManager = require("gge-module:export_CountriesManager");
var __dep_export_Context = require("gge-module:export_Context");
var __dep_export_CountryDetectionVO = require("gge-module:export_CountryDetectionVO");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_class_WorldAssignmentTrackingConstants = require("gge-module:class_WorldAssignmentTrackingConstants");
var __dep_class_WorldAssignmentError = require("gge-module:class_WorldAssignmentError");
var __dep_class_WorldAssignmentErrorCodes = require("gge-module:class_WorldAssignmentErrorCodes");
var __dep_export_getCountryCodeByDefaultInstance = require("gge-module:export_getCountryCodeByDefaultInstance");
var __dep_export_runCountryDetection = require("gge-module:export_runCountryDetection");
var __dep_export_parseCountries = require("gge-module:export_parseCountries");
var __dep_export_forceEnglishForSupportAgents = require("gge-module:export_forceEnglishForSupportAgents");
var __s0local1 = __dep_export_LoggerConfigurator.getLogger("WorldAssignment.CountriesController");
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

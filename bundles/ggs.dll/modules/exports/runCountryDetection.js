var __s0local0 = this;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_opaque_1bc5cb62fa0fa0642df721a1__1 = require("gge-module:opaque_1bc5cb62fa0fa0642df721a1__1");
var __dep_exact_877bc301dee292e0 = require("gge-module:exact_877bc301dee292e0");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_export_Context = require("gge-module:export_Context");
var __dep_exact_551693c13e511709 = require("gge-module:exact_551693c13e511709");
var __dep_export_GeoIPUtils = require("gge-module:export_GeoIPUtils");
var __dep_export_filterCountriesByBrowserLanguage = require("gge-module:export_filterCountriesByBrowserLanguage");
var __dep_class_CountryDetectionConstants = require("gge-module:class_CountryDetectionConstants");
var __s0local1 = __dep_export_LoggerConfigurator.getLogger("WorldAssignment.CountryDetector");
exports.runCountryDetection = function (__s1param0, __s1param1) {
  return __dep_opaque_1bc5cb62fa0fa0642df721a1__1.__awaiter(__s0local0, undefined, undefined, function () {
    var __s3local0;
    var __s3local1;
    var __s3local2;
    var __s3local3;
    var __s3local4;
    var __s3local5;
    return __dep_opaque_1bc5cb62fa0fa0642df721a1__1.__generator(this, function (__s5param0) {
      switch (__s5param0.label) {
        case 0:
          __s0local1.debug("CountryDetector.run { " + __s1param0.toString() + " }");
          __s5param0.label = 1;
        case 1:
          __s5param0.trys.push([1, 4,, 5]);
          if (__s1param0.countryByPresetInstance) {
            __s3local1 = __dep_exact_877bc301dee292e0.CountryDetectorFactors.FACTOR_BY_INSTANCE;
            __s3local0 = __s1param1.getCountryByCountryCode(__s1param0.countryByPresetInstance, __s1param0.alsoDetectUnavailableCountries);
          }
          if (!__s3local0 && __s1param0.zoneIdFromFriendInviteCode) {
            __s3local1 = __dep_exact_877bc301dee292e0.CountryDetectorFactors.FACTOR_BY_FRIEND_INVITE_CODE;
            __s3local0 = __s1param1.getCountryByCountryCode(__s1param0.zoneIdFromFriendInviteCode, __s1param0.alsoDetectUnavailableCountries);
          }
          if (!__s3local0 && __s1param0.countryByDefaultInstance && __s1param0.countryByDefaultInstance !== __dep_class_CountryDetectionConstants.CountryDetectionConstants.INSTANCE_COUNTRY_DEFAULT) {
            __s3local1 = __dep_exact_877bc301dee292e0.CountryDetectorFactors.FACTOR_BY_DEFAULT_INSTANCE;
            __s3local0 = __s1param1.getCountryByCountryCode(__s1param0.countryByDefaultInstance, __s1param0.alsoDetectUnavailableCountries);
          }
          if (!__s3local0 && __s1param0.countryCodeFromNetworkCookie) {
            __s3local1 = __dep_exact_877bc301dee292e0.CountryDetectorFactors.FACTOR_BY_NETWORK_COOKIE;
            __s3local0 = __s1param1.getCountryByCountryCode(__s1param0.countryCodeFromNetworkCookie, __s1param0.alsoDetectUnavailableCountries);
          }
          if (!__s3local0 && __s1param0.countryCodeFromQueryString) {
            __s3local1 = __dep_exact_877bc301dee292e0.CountryDetectorFactors.FACTOR_BY_QUERY_STRING;
            __s3local0 = __s1param1.getCountryByCountryCode(__s1param0.countryCodeFromQueryString, __s1param0.alsoDetectUnavailableCountries);
          }
          if (!__s3local0 && __s1param0.browserLanguage && __s1param0.browserLanguage !== "n.a.") {
            __s3local2 = __s1param0.alsoDetectUnavailableCountries ? __s1param1.allCountries : __s1param1.activeCountries;
            if ((__s3local3 = __dep_export_filterCountriesByBrowserLanguage.filterCountriesByBrowserLanguage(__s3local2, __s1param0.browserLanguage)).length === 1) {
              __s3local1 = __dep_exact_877bc301dee292e0.CountryDetectorFactors.FACTOR_BY_BROWSER_LANGUAGE;
              __s3local0 = __s3local3[0];
            }
            if (__s3local3.length > 1 && (__s3local3 = __dep_export_filterCountriesByBrowserLanguage.filterCountriesByTimezone(__s3local3, __s1param0.timezoneOffset)).length === 1) {
              __s3local1 = __dep_exact_877bc301dee292e0.CountryDetectorFactors.FACTOR_BY_BROWSER_LANGUAGE_AND_TIMEZONE;
              __s3local0 = __s3local3[0];
            }
          }
          if (__s3local0) {
            return [3, 3];
          } else {
            __s3local4 = new __dep_exact_551693c13e511709.Service(__dep_export_Context.Context.instance.globals.geoIPUrl);
            __s3local1 = __dep_exact_877bc301dee292e0.CountryDetectorFactors.FACTOR_BY_GEOIP;
            return [4, __s3local4.load().then(function (__s18param0) {
              return __s0local2(__s18param0);
            }).then(function (__s20param0) {
              return __s1param1.getCountryByGeoIpCode(__s20param0, __s1param0.alsoDetectUnavailableCountries);
            })];
          }
        case 2:
          __s3local0 = __s5param0.sent();
          __s5param0.label = 3;
        case 3:
          return [3, 5];
        case 4:
          __s3local5 = __s5param0.sent();
          __s0local1.error("Error while detecting country", __s3local5);
          return [3, 5];
        case 5:
          if (!__s3local0) {
            __s3local0 = __s1param1.defaultCountry;
            __s3local1 = __dep_exact_877bc301dee292e0.CountryDetectorFactors.FACTOR_BY_FALLBACK;
          }
          __s0local1.debug("Country was detected by " + __dep_exact_877bc301dee292e0.CountryDetectorFactors[__s3local1] + ":  " + __s3local0);
          return [2, {
            country: __s3local0,
            factor: __s3local1
          }];
      }
    });
  });
};
function __s0local2(__s23param0) {
  return __dep_opaque_1bc5cb62fa0fa0642df721a1__1.__awaiter(__s0local0, undefined, undefined, function () {
    var __s25local0;
    var __s25local1;
    var __s25local2;
    return __dep_opaque_1bc5cb62fa0fa0642df721a1__1.__generator(this, function (__s27param0) {
      __s0local1.debug("onGeoIPReceived");
      __s25local0 = __dep_export_GeoIPUtils.GeoIPUtils.hexStringToBytes(__s23param0);
      __s25local1 = __dep_export_GeoIPUtils.GeoIPUtils.bytesToAsciiString(__s25local0);
      __s25local2 = window.atob(__s25local1);
      __s0local1.debug("onGeoIPReceived  countryCode", __s25local2);
      return [2, __s25local2];
    });
  });
}

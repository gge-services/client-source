Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_Context = require("gge-module:export_Context");
var __dep_export_NetworkInstancesManager = require("gge-module:export_NetworkInstancesManager");
var __dep_export_filterCountriesByBrowserLanguage = require("gge-module:export_filterCountriesByBrowserLanguage");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("WorldAssignment.CountryUtils");
exports.getCountryCodeByPresetInstance = function (__s1param0) {
  var __s1local0 = __dep_export_Context.Context.instance.get(__dep_export_NetworkInstancesManager.NetworkInstancesManager);
  if (__s1local0) {
    if (__s1param0 > 0) {
      var __s1local1 = __s1local0.getInstanceById(__s1param0);
      if (__s1local1 && __s1local1.countries) {
        if (__s1local1.countries.length == 1) {
          return __s1local1.countries[0].ggsCountryCode;
        }
        __s0local0.warn("getCountryCodeByPreselectedInstance: found an instance for the presetInstanceID but could not determine Country because there are more than one,  following steps in CountryDetection will  find the right one");
      } else {
        __s0local0.error("getCountryCodeByPreselectedInstance: unable to select instance by preset instanceId, wrong network.xml?");
      }
    }
  } else {
    __s0local0.error("getCountryCodeByPreselectedInstance: NetworkInstancesManager not initialized");
  }
};
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
exports.getCountryCodeByDefaultInstance = function (__s17param0) {
  var __s17local0 = __dep_export_Context.Context.instance.get(__dep_export_NetworkInstancesManager.NetworkInstancesManager);
  if (__s17local0) {
    var __s17local1 = __s17local0.getInstanceById(__s17param0);
    if (__s17local1 && __s17local1.defaultcountry) {
      return __s17local1.defaultcountry;
    }
    __s0local0.error("getCountryCodeByDefaultInstance: unable to select instance by default instance, wrong network.xml?");
  } else {
    __s0local0.error("getCountryCodeByDefaultInstance: NetworkInstancesManager not initialized");
  }
};

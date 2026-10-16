Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_getCountryByBrowserLanguage = require("gge-module:export_getCountryByBrowserLanguage");
var __dep_class_CountryCodes = require("gge-module:class_CountryCodes");
var __dep_export_CountrySorters = require("gge-module:export_CountrySorters");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("WorldAssignment.CountriesManager");
var __s0local1 = function () {
  function CountriesManager() {
    this.detectionFactor = 0;
    this.allCountries = [];
    this.activeCountries = [];
    this.notSupportedCountries = [];
  }
  CountriesManager.prototype.initCountries = function (__s5param0) {
    var __s5local0;
    this.allCountries = __s5param0;
    for (var __s5local1 = 0; __s5local1 < this.allCountries.length; __s5local1++) {
      var __s5local2 = this.allCountries[__s5local1];
      if (__s5local2.ggsCountryCode.toLowerCase() === __dep_class_CountryCodes.CountryCodes.INTERNATIONAL.toLowerCase()) {
        __s5local0 = __s5local2;
      }
      if (__s5local2.isDefault) {
        this.defaultCountry = __s5local2;
        break;
      }
    }
    if (!this.defaultCountry) {
      __s0local0.warn("There is no default country specified in the country.xml, using 'XX' as default instead. Check country.xml configuration!");
      this.defaultCountry = __s5local0;
    }
  };
  CountriesManager.prototype.initActiveCountries = function (__s12param0, __s12param1) {
    for (var __s12local0 = 0; __s12local0 < __s12param0.length; __s12local0++) {
      this.activeCountries = this.activeCountries.concat(__s12param0[__s12local0].countries);
    }
    this.activeCountries = this.removeDuplicatedActiveCountries();
    this.activeCountries.sort(__dep_export_CountrySorters.CountrySorters.sortAlphabetically);
    this.initNotSupportedCountries();
    if (__s12param1) {
      __s12param1();
    }
  };
  CountriesManager.prototype.getCountryByCountryCode = function (__s17param0, __s17param1) {
    return __dep_export_getCountryByBrowserLanguage.getCountryByCountryCode(__s17param1 ? this.allCountries : this.activeCountries, __s17param0);
  };
  CountriesManager.prototype.getCountryByGeoIpCode = function (__s19param0, __s19param1) {
    return __dep_export_getCountryByBrowserLanguage.getCountryByGeoIpCode(__s19param1 ? this.allCountries : this.activeCountries, __s19param0);
  };
  CountriesManager.prototype.isCountryWithBrowserLanguageAvailable = function (__s21param0, __s21param1 = true) {
    return __dep_export_getCountryByBrowserLanguage.getCountryByBrowserLanguage(__s21param1 ? this.activeCountries : this.allCountries, __s21param0) !== undefined;
  };
  CountriesManager.prototype.initNotSupportedCountries = function () {
    for (var __s23local0 = this.allCountries.length, __s23local1 = 0; __s23local1 < __s23local0;) {
      if (this.activeCountries.indexOf(this.allCountries[__s23local1]) === -1 && this.allCountries[__s23local1].ggsCountryCode !== __dep_class_CountryCodes.CountryCodes.INTERNATIONAL) {
        this.notSupportedCountries.push(this.allCountries[__s23local1]);
      }
      __s23local1++;
    }
  };
  CountriesManager.prototype.removeDuplicatedActiveCountries = function () {
    var __s28local0 = [];
    for (var __s28local1 = this.activeCountries.length, __s28local2 = 0; __s28local2 < __s28local1;) {
      if (__s28local0.indexOf(this.activeCountries[__s28local2]) === -1) {
        __s28local0.push(this.activeCountries[__s28local2]);
      }
      __s28local2++;
    }
    return __s28local0;
  };
  return CountriesManager;
}();
exports.CountriesManager = __s0local1;

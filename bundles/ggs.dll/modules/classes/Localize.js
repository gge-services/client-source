Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_LocalizationModuleError = require("gge-module:export_LocalizationModuleError");
var __dep_class_DateTimeStyle = require("gge-module:class_DateTimeStyle");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("LocalizationJS.Localize");
var __s0local1 = function () {
  function Localize() {}
  Localize.setService = function (__s5param0) {
    if (Localize._service != null) {
      __s0local0.warn("LocalizeService was already setup - it is going to be overridden!");
    }
    Localize._service = __s5param0;
  };
  Localize.text = function (__s8param0, __s8param1 = null, __s8param2 = true) {
    Localize.assertModuleIsInstalled();
    return Localize._service.text(__s8param0, __s8param1, __s8param2);
  };
  Localize.hasText = function (__s10param0) {
    Localize.assertModuleIsInstalled();
    return Localize._service.hasText(__s10param0);
  };
  Localize.number = function (__s12param0, __s12param1 = false, __s12param2 = -1, __s12param3 = false, __s12param4 = true) {
    Localize.assertModuleIsInstalled();
    return Localize._service.number(__s12param0, __s12param1, __s12param2, __s12param3, __s12param4);
  };
  Localize.integer = function (__s14param0) {
    Localize.assertModuleIsInstalled();
    return Localize._service.integer(__s14param0);
  };
  Localize.decimal = function (__s16param0) {
    Localize.assertModuleIsInstalled();
    return Localize._service.decimal(__s16param0);
  };
  Localize.datetime = function (__s18param0, __s18param1 = __dep_class_DateTimeStyle.DateTimeStyle.SHORT, __s18param2 = __dep_class_DateTimeStyle.DateTimeStyle.SHORT) {
    Localize.assertModuleIsInstalled();
    return Localize._service.datetime(__s18param0, __s18param1, __s18param2);
  };
  Localize.time = function (__s20param0, __s20param1 = 2, __s20param2 = true, __s20param3 = null) {
    Localize.assertModuleIsInstalled();
    return Localize._service.time(__s20param0, __s20param1, __s20param2, __s20param3);
  };
  Localize.digitalClock = function (__s22param0) {
    return Localize._service.digitalClock(__s22param0);
  };
  Localize.numberForArabic = function (__s24param0) {
    return Localize._service.numberForArabic(__s24param0);
  };
  Localize.timeCustom = function (__s26param0, __s26param1, __s26param2 = null) {
    Localize.assertModuleIsInstalled();
    return Localize._service.timeCustom(__s26param0, __s26param1, __s26param2);
  };
  Localize.htmlText = function (__s28param0) {
    Localize.assertModuleIsInstalled();
    return Localize._service.htmlText(__s28param0);
  };
  Localize.updateCurrencyFormatter = function (__s30param0, __s30param1) {
    Localize._service.updateCurrencyFormatter(__s30param0, __s30param1);
  };
  Localize.formatCurrency = function (__s32param0, __s32param1 = false) {
    return Localize._service.formatCurrency(__s32param0, __s32param1);
  };
  Localize.assertModuleIsInstalled = function () {
    if (Localize._service == null) {
      throw new __dep_export_LocalizationModuleError.LocalizationModuleError(Localize.MESSAGE_LOCALIZE_SERVICE_NOT_ASSIGNED, Localize.CODE_LOCALIZE_SERVICE_NOT_ASSIGNED);
    }
  };
  Localize.CODE_LOCALIZE_SERVICE_NOT_ASSIGNED = "001";
  Localize.MESSAGE_LOCALIZE_SERVICE_NOT_ASSIGNED = "Localize Service was not assigned to Static Localize Helper (use setService to do so)";
  return Localize;
}();
exports.Localize = __s0local1;

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_class_Localize = require("gge-module:class_Localize");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger("LocalizationJS.CurrencyFormatter");
var __s0local1 = function () {
  function CurrencyFormatter(__s3param0) {
    this.requestedLocaleIDName = __s3param0;
    CurrencyFormatter.localize ||= __dep_class_Localize.Localize;
  }
  Object.defineProperty(CurrencyFormatter.prototype, "currencyISOCode", {
    get: function () {
      return this._currencyISOCode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CurrencyFormatter.prototype, "currencySymbol", {
    get: function () {
      return this._currencySymbol;
    },
    enumerable: true,
    configurable: true
  });
  CurrencyFormatter.prototype.format = function (__s9param0, __s9param1 = false) {
    return CurrencyFormatter.localize.formatCurrency(__s9param0, __s9param1);
  };
  CurrencyFormatter.prototype.setCurrency = function (__s11param0, __s11param1) {
    this._currencyISOCode = __s11param0;
    this._currencySymbol = __s11param1;
    CurrencyFormatter.localize.updateCurrencyFormatter(__s11param0, __s11param1);
  };
  CurrencyFormatter.prototype.formattingWithCurrencySymbolIsSafe = function (__s13param0) {
    __s0local0.warn("formattingWithCurrencySymbolIsSafe is not surpported");
    return false;
  };
  CurrencyFormatter.prototype.getAvailableLocaleIDNames = function () {
    __s0local0.warn("getAvailableLocaleIDNames is not surpported");
    return [];
  };
  CurrencyFormatter.prototype.parse = function (__s17param0) {
    __s0local0.warn("parse is not supported");
    return {
      currencyString: "",
      value: 0
    };
  };
  CurrencyFormatter.localize = null;
  return CurrencyFormatter;
}();
exports.CurrencyFormatter = __s0local1;

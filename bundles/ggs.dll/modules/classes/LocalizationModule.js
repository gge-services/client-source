Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_LocalizationService = require("gge-module:export_LocalizationService");
var __dep_export_LocalizeService = require("gge-module:export_LocalizeService");
var __dep_class_Localize = require("gge-module:class_Localize");
var __dep_class_Localization = require("gge-module:class_Localization");
var __s0local0 = function () {
  function LocalizationModule(__s3param0, __s3param1 = false) {
    this._processor = __s3param0;
    this.setupGlobalHelpers = __s3param1;
    this._localizationService = new __dep_export_LocalizationService.LocalizationService(__s3param0);
    this._localizeService = new __dep_export_LocalizeService.LocalizeService(__s3param0, this._localizationService);
    if (__s3param1) {
      __dep_class_Localize.Localize.setService(this._localizeService);
      __dep_class_Localization.Localization.setService(this._localizationService);
    }
  }
  LocalizationModule.prototype.initialize = function (__s6param0, __s6param1, __s6param2, __s6param3 = false) {
    this._localizationService.initialize(__s6param0, __s6param1, __s6param2, __s6param3);
  };
  LocalizationModule.prototype.setLanguageAsync = function (__s8param0, __s8param1) {
    return this._localizationService.setLanguageAsync(__s8param0, __s8param1);
  };
  LocalizationModule.prototype.setTexts = function (__s10param0) {
    this._localizationService.setTexts(__s10param0);
  };
  Object.defineProperty(LocalizationModule.prototype, "localizationService", {
    get: function () {
      return this._localizationService;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizationModule.prototype, "localizeService", {
    get: function () {
      return this._localizeService;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizationModule.prototype, "processorType", {
    get: function () {
      return this._processor.processorType;
    },
    enumerable: true,
    configurable: true
  });
  return LocalizationModule;
}();
exports.LocalizationModule = __s0local0;

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_export_AssetLoadingFlowType = require("gge-module:export_AssetLoadingFlowType");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger(__dep_export_AssetLoadingFlowType.TEXT_FIELDS_LOGGER + ".BasicFontData");
var __s0local1 = function () {
  function BasicFontData() {
    this.initialize();
  }
  BasicFontData.prototype.initialize = function () {
    this.initializeRuntimeLoadedFontConfigurations();
  };
  Object.defineProperty(BasicFontData.prototype, "runtimeLoadedFontsConfigurations", {
    get: function () {
      return this._runtimeLoadedFontsConfigurations;
    },
    enumerable: true,
    configurable: true
  });
  BasicFontData.prototype.getFontNameByGGSLanguageCode = function (__s9param0 = "") {
    return this.env.gameTitle + "Fonts";
  };
  BasicFontData.prototype.currentLanguageRequiresRuntimeLoadedFont = function (__s11param0 = "") {
    __s0local0.debug("currentLanguageRequiresRuntimeLoadedFont for ", __s11param0);
    return this.isRuntimeLoadedFont(this.getFontNameByGGSLanguageCode(__s11param0));
  };
  BasicFontData.prototype.isRuntimeLoadedFont = function (__s13param0 = "") {
    if (__s13param0 === "") {
      __s0local0.warn("isRuntimeLoadedFont::  Why is fontname EMPTY?? ");
      return false;
    }
    for (var __s13local0 = 0, __s13local1 = this._runtimeLoadedFontsConfigurations; __s13local0 < __s13local1.length; __s13local0++) {
      if (__s13param0 == __s13local1[__s13local0].fontName) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(BasicFontData.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return BasicFontData;
}();
exports.BasicFontData = __s0local1;

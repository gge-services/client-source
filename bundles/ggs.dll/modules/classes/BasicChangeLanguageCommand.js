Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_GGSCountryController = require("gge-module:class_GGSCountryController");
var __dep_class_GoodgameTextFieldManager = require("gge-module:class_GoodgameTextFieldManager");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_CountryInstanceMappingEvent = require("gge-module:class_CountryInstanceMappingEvent");
var __dep_class_IdleScreenEvent = require("gge-module:class_IdleScreenEvent");
var __dep_class_LanguageDataEvent = require("gge-module:class_LanguageDataEvent");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_BasicLanguageFontManager = require("gge-module:class_BasicLanguageFontManager");
var __dep_class_BasicLayoutManager = require("gge-module:class_BasicLayoutManager");
var __dep_class_ConfigFilesVersionsModel = require("gge-module:class_ConfigFilesVersionsModel");
var __dep_export_AssetLoadingFlowType = require("gge-module:export_AssetLoadingFlowType");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger(__dep_export_AssetLoadingFlowType.TEXT_FIELDS_LOGGER + ".BasicChangeLanguageCommand");
var __s0local1 = function (__s1param0) {
  function BasicChangeLanguageCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicChangeLanguageCommand, __s1param0);
  BasicChangeLanguageCommand.prototype.execute = function (__s5param0 = null) {
    __s0local0.debug(": load language XML", __s5param0);
    if (__dep_class_BasicModel.BasicModel.languageData.hasEventListener(__dep_class_LanguageDataEvent.LanguageDataEvent.XML_LOAD_COMPLETE)) {
      __dep_class_BasicModel.BasicModel.languageData.removeEventListener(__dep_class_LanguageDataEvent.LanguageDataEvent.XML_LOAD_COMPLETE, this.bindFunction(this.onLanguageXMLComplete));
    }
    __dep_class_BasicModel.BasicModel.languageData.languageXMLLoaded = false;
    __dep_class_BasicModel.BasicModel.languageData.addEventListener(__dep_class_LanguageDataEvent.LanguageDataEvent.XML_LOAD_COMPLETE, this.bindFunction(this.onLanguageXMLComplete));
    this.env.currentCountryLanguageCode = __dep_class_GGSCountryController.GGSCountryController.instance.currentCountry.ggsLanguageCode;
    this.env.currentCountryLanguageVersion = __dep_class_ConfigFilesVersionsModel.ConfigFilesVersionsModel.instance.languageVersion(this.env.currentCountryLanguageCode);
    __dep_class_BasicModel.BasicModel.languageData.loadLanguage(undefined, this.env.currentCountryLanguageCode);
  };
  BasicChangeLanguageCommand.prototype.onLanguageXMLComplete = function (__s8param0) {
    __dep_class_BasicModel.BasicModel.languageData.removeEventListener(__dep_class_LanguageDataEvent.LanguageDataEvent.XML_LOAD_COMPLETE, this.bindFunction(this.onLanguageXMLComplete));
    var __s8local0 = __dep_class_BasicLanguageFontManager.BasicLanguageFontManager.getInstance();
    __s8local0.addEventListener(__dep_class_LanguageDataEvent.LanguageDataEvent.FONT_LOAD_COMPLETE, this.bindFunction(this.onFontLoadComplete));
    __s0local0.debug(": onLanguageXMLComplete() -> Load font SWF");
    __s8local0.loadFontsByLanguage();
  };
  BasicChangeLanguageCommand.prototype.onFontLoadComplete = function (__s10param0) {
    __dep_class_BasicLanguageFontManager.BasicLanguageFontManager.getInstance().removeEventListener(__dep_class_LanguageDataEvent.LanguageDataEvent.FONT_LOAD_COMPLETE, this.bindFunction(this.onFontLoadComplete));
    __s0local0.debug(": onFontLoadComplete()");
    __dep_class_GoodgameTextFieldManager.GoodgameTextFieldManager.getInstance().updateTextInAllTextFields();
    __dep_class_BasicController.BasicController.getInstance().dispatchEvent(new __dep_class_IdleScreenEvent.IdleScreenEvent(__dep_class_IdleScreenEvent.IdleScreenEvent.HIDE));
    __dep_class_BasicController.BasicController.getInstance().dispatchEvent(new __dep_class_CountryInstanceMappingEvent.CountryInstanceMappingEvent(__dep_class_CountryInstanceMappingEvent.CountryInstanceMappingEvent.PROCESS_COMPLETE));
    __dep_class_BasicLayoutManager.BasicLayoutManager.getInstance().showServerAndClientVersion();
  };
  Object.defineProperty(BasicChangeLanguageCommand.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  BasicChangeLanguageCommand.NAME = "BasicChangeLanguageCommand";
  return BasicChangeLanguageCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicChangeLanguageCommand = __s0local1;

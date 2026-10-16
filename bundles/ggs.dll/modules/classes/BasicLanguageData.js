Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicContextMenuController = require("gge-module:class_BasicContextMenuController");
var __dep_class_LanguageDataEvent = require("gge-module:class_LanguageDataEvent");
var __dep_opaque_c83528567256175cfb346d7d = require("gge-module:opaque_c83528567256175cfb346d7d");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger("BasicLanguageData");
var __s0local1 = createjs.EventDispatcher;
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __s0local2 = function (__s1param0) {
  function BasicLanguageData(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.versionInformation = __s3param0;
    __s3local0.pathProvider = __s3param1;
    __s3local0.locaModule = __s3param2;
    __s3local0._addPipeToEndOfString = true;
    __s3local0._worldAssignemnt = window.ggs.worldAssignment;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicLanguageData, __s1param0);
  BasicLanguageData.prototype.checkSingleOrMultiText = function (__s5param0, __s5param1, __s5param2 = null) {
    if (__s5param0 === 1) {
      return this.getTextById(__s5param1 + "_single", __s5param2);
    } else {
      return this.getTextById(__s5param1, __s5param2);
    }
  };
  BasicLanguageData.prototype.getTextById = function (__s9param0, __s9param1 = null) {
    return this.locaModule.localizeService.text(__s9param0, __s9param1);
  };
  BasicLanguageData.prototype.onLanguageDataLoaded = function (__s11param0) {
    var __s11local0 = this;
    __s0local0.debug("onLanguageDataLoaded " + this._languageCode + " version: " + __s11param0["@metadata"].versionNo);
    this.versionInformation.parseLanguageXml(__s11param0);
    var __s11local1 = new __dep_opaque_c83528567256175cfb346d7d.LanguageVO(this._worldAssignemnt.facade.currentCountry.ggsCountryCode, this._languageCode, this.env.neverUseAbbreviations, this.env.abbreviationThreshold, this.env.fractionalDigits, this.env.leadingZero, this.env.trailingZeros);
    this.locaModule.setLanguageAsync(__s11local1, __s11param0).then(function () {
      __dep_class_BasicContextMenuController.BasicContextMenuController.instance.refreshVersionInfo();
      __s11local0._languageDataLoaded = true;
      __s11local0.dispatchEvent(new __dep_class_LanguageDataEvent.LanguageDataEvent(__dep_class_LanguageDataEvent.LanguageDataEvent.XML_LOAD_COMPLETE));
    }).catch(function (__s15param0) {
      __s0local0.error("Error in Globalize loader: " + __s15param0);
    });
  };
  Object.defineProperty(BasicLanguageData.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  BasicLanguageData.prototype.getLanguageFromUrl = function (__s19param0) {
    return __s19param0.match(/([^\/]+)(?=\.\w+$)/)[0];
  };
  BasicLanguageData.prototype.loadLanguage = function (__s21param0, __s21param1) {
    var __s21local0 = this;
    if (__s21param0 === undefined) {
      __s21param0 = this.pathProvider.languageConfigURL;
    }
    if (__s21param1 === undefined) {
      __s21param1 = null;
    }
    __s0local0.debug("will load language from " + __s21param0);
    if (this._languageDataLoaded) {
      __s0local0.warn("load language not executed because it was already loaded.  if you want to change the language use BasicChangeLanguageCommand");
    } else {
      this._languageCode = __s21param1 || this.getLanguageFromUrl(__s21param0);
      var __s21local1 = new __dep_export_CSSMouseCursor.URLLoaderService(new __dep_export_CSSMouseCursor.URLRequest(__s21param0));
      __s21local1.load().then(function (__s27param0) {
        __s0local0.debug("language loaded successfully");
        __s21local0.onLanguageDataLoaded(JSON.parse(__s27param0));
        __s21local1.dispose();
      }).catch(function (__s29param0) {
        __s0local0.error("Error while loading/parsing json", __s29param0);
        __s21local1.dispose();
        __s21local0.dispatchEvent(new __dep_class_LanguageDataEvent.LanguageDataEvent(__dep_class_LanguageDataEvent.LanguageDataEvent.LANGUAGE_GENERIC_ERROR));
      });
    }
  };
  Object.defineProperty(BasicLanguageData.prototype, "languageXMLLoaded", {
    get: function () {
      return this._languageDataLoaded;
    },
    set: function (__s33param0) {
      this._languageDataLoaded = __s33param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicLanguageData.prototype, "addPipeToEndOfString", {
    get: function () {
      return this._addPipeToEndOfString;
    },
    set: function (__s37param0) {
      this._addPipeToEndOfString = __s37param0;
    },
    enumerable: true,
    configurable: true
  });
  BasicLanguageData.GAME_LANGUAGE_DICTIONARY = "gameLanguageDict";
  return BasicLanguageData;
}(__s0local1);
exports.BasicLanguageData = __s0local2;

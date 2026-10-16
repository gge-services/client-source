Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_LanguageDataEvent = require("gge-module:class_LanguageDataEvent");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_export_AssetLoadingFlowType = require("gge-module:export_AssetLoadingFlowType");
var __dep_exact_4ae7962bf9aa01f7 = require("gge-module:exact_4ae7962bf9aa01f7");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = createjs.EventDispatcher;
var __s0local1 = __dep_export_LoggerConfigurator.getLogger(__dep_export_AssetLoadingFlowType.TEXT_FIELDS_LOGGER + ".BasicLanguageFontManager");
var __s0local2 = function (__s1param0) {
  function BasicLanguageFontManager() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0.onlyKeepOneCCSActive = false;
    __s3local0._fontsLoaded = false;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicLanguageFontManager, __s1param0);
  BasicLanguageFontManager.getInstance = function () {
    return __s0local3;
  };
  BasicLanguageFontManager.prototype.loadFontsByLanguage = function () {
    var __s7local0 = this;
    var __s7local1 = window.ggs.fontConfigResolver ? window.ggs.fontConfigResolver() : __s0local4();
    __s0local1.warn("will load custom webfonts ", __s7local1);
    this._fontsLoaded = false;
    this.onlyKeepOneCCSActive = __dep_export_CSSMouseCursor.currentBrowserInfo.isFireFox;
    __dep_exact_4ae7962bf9aa01f7.load.call(this, {
      loading: function () {
        return __s0local1.debug("webfont loader started loading css and fonts");
      },
      active: function () {
        if (document && __s7local0.onlyKeepOneCCSActive) {
          if (__s7local0.lastLoadedCSSDoc) {
            __s7local0.lastLoadedCSSDoc.disabled = true;
          }
          __s7local0.lastLoadedCSSDoc = document.styleSheets.item(document.styleSheets.length - 1);
          __s7local0.lastLoadedCSSDoc.disabled = false;
        }
        __s7local0._fontsLoaded = true;
        __s0local1.info("All fonts were loaded successfully");
        __s7local0.dispatchEvent(new __dep_class_LanguageDataEvent.LanguageDataEvent(__dep_class_LanguageDataEvent.LanguageDataEvent.FONT_LOAD_COMPLETE));
      },
      inactive: function () {
        __s0local1.error("Something went wrong with Font loading (it was not possible to load one or more fonts)");
        __s7local0._fontsLoaded = true;
        __s7local0.dispatchEvent(new __dep_class_LanguageDataEvent.LanguageDataEvent(__dep_class_LanguageDataEvent.LanguageDataEvent.FONT_LOAD_COMPLETE));
      },
      fontactive: function (__s17param0, __s17param1) {
        return __s0local1.info(__s17param0 + " was successfully loaded");
      },
      fontinactive: function (__s19param0, __s19param1) {
        return __s0local1.warn(__s19param0 + "  could not be loaded");
      },
      custom: __s7local1
    });
  };
  Object.defineProperty(BasicLanguageFontManager.prototype, "fontsLoaded", {
    get: function () {
      return this._fontsLoaded;
    },
    enumerable: true,
    configurable: true
  });
  return BasicLanguageFontManager;
}(__s0local0);
exports.BasicLanguageFontManager = __s0local2;
var __s0local3 = new __s0local2();
function __s0local4() {
  return {
    urls: ["./css/" + window.ggs.worldAssignment.facade.currentCountry.ggsLanguageCode + ".css"],
    families: ["_BodyFont", "_HeaderFont"]
  };
}

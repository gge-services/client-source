Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_LocalizationModuleError = require("gge-module:export_LocalizationModuleError");
var __dep_export_LocalizationModuleErrorConstants = require("gge-module:export_LocalizationModuleErrorConstants");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("LocalizationJS.LocalizationService");
var __s0local1 = function () {
  function LocalizationService(__s3param0) {
    this._processor = __s3param0;
    this._usePipe = false;
  }
  LocalizationService.prototype.initialize = function (__s5param0, __s5param1, __s5param2, __s5param3 = false) {
    if (!__s5param0) {
      throw new __dep_export_LocalizationModuleError.LocalizationModuleError(__dep_export_LocalizationModuleErrorConstants.LocalizationModuleErrorConstants.MESSAGE_LANGUAGE_VO_IS_MANDATORY, __dep_export_LocalizationModuleErrorConstants.LocalizationModuleErrorConstants.CODE_LANGUAGE_VO_IS_MANDATORY);
    }
    this._usePipe = __s5param3;
    __s0local0.debug("initializing service with lang ", __s5param0.locale);
    this._processor.initialize(__s5param0, __s5param1, __s5param2);
  };
  LocalizationService.prototype.finalize = function () {
    __s0local0.debug("finalize service");
  };
  LocalizationService.prototype.setTexts = function (__s10param0) {
    this._processor.setTexts(__s10param0);
  };
  LocalizationService.prototype.setLanguageAsync = function (__s12param0, __s12param1) {
    return this._processor.setLanguageAsync(__s12param0, __s12param1);
  };
  Object.defineProperty(LocalizationService.prototype, "initialized", {
    get: function () {
      return this._processor.initialized;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizationService.prototype, "usePipe", {
    get: function () {
      return this._usePipe;
    },
    set: function (__s18param0) {
      this._usePipe = __s18param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizationService.prototype, "pipe", {
    get: function () {
      if (this._usePipe) {
        return LocalizationService.PIPE_CHAR;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizationService.prototype, "localizeReplacements", {
    get: function () {
      return this._processor.localizeReplacements;
    },
    set: function (__s26param0) {
      this._processor.localizeReplacements = __s26param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizationService.prototype, "locale", {
    get: function () {
      return this._processor.getLocale();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizationService.prototype, "language", {
    get: function () {
      return this.locale;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizationService.prototype, "timeZone", {
    get: function () {
      return this._processor.getTimeZone();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizationService.prototype, "languageDataVersion", {
    get: function () {
      return this._processor.textsVersionNo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizationService.prototype, "languageDataTimestamp", {
    get: function () {
      return this._processor.textsDeployTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizationService.prototype, "processorType", {
    get: function () {
      return this._processor.processorType;
    },
    enumerable: true,
    configurable: true
  });
  LocalizationService.PIPE_CHAR = "|";
  return LocalizationService;
}();
exports.LocalizationService = __s0local1;

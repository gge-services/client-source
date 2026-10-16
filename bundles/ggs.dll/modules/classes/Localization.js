Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_LocalizationModuleError = require("gge-module:export_LocalizationModuleError");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("LocalizationJS.Localization");
var __s0local1 = function () {
  function Localization() {}
  Localization.assertServiceAlreadyInstalled = function () {
    if (Localization._service == null) {
      throw new __dep_export_LocalizationModuleError.LocalizationModuleError(Localization.MESSAGE_LOCALIZATION_SERVICE_NOT_ASSIGNED, Localization.CODE_LOCALIZATION_SERVICE_NOT_ASSIGNED);
    }
  };
  Localization.setService = function (__s8param0) {
    if (Localization._service != null) {
      __s0local0.warn("LocalizeService was already setup for static Localize - it is going to be overridden!  hopefully you know what you are doing");
    }
    Localization._service = __s8param0;
  };
  Localization.initialize = function (__s11param0, __s11param1, __s11param2, __s11param3 = false) {
    if (Localization._service == null) {
      throw new __dep_export_LocalizationModuleError.LocalizationModuleError(Localization.MESSAGE_LOCALIZATION_SERVICE_NOT_ASSIGNED, Localization.CODE_LOCALIZATION_SERVICE_NOT_ASSIGNED);
    }
    Localization._service.initialize(__s11param0, __s11param1, __s11param2, __s11param3);
  };
  Localization.finalize = function () {
    Localization.assertServiceAlreadyInstalled();
    Localization._service.finalize();
  };
  Localization.setTexts = function (__s16param0) {
    Localization.assertServiceAlreadyInstalled();
    Localization._service.setTexts(__s16param0);
  };
  Object.defineProperty(Localization, "installed", {
    get: function () {
      return Localization._service != null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Localization, "initialized", {
    get: function () {
      Localization.assertServiceAlreadyInstalled();
      return Localization._service.initialized;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Localization, "usePipe", {
    get: function () {
      Localization.assertServiceAlreadyInstalled();
      return Localization._service.usePipe;
    },
    set: function (__s24param0) {
      Localization.assertServiceAlreadyInstalled();
      Localization._service.usePipe = __s24param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Localization, "pipe", {
    get: function () {
      Localization.assertServiceAlreadyInstalled();
      return Localization._service.pipe;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Localization, "localizeReplacements", {
    get: function () {
      Localization.assertServiceAlreadyInstalled();
      return Localization._service.localizeReplacements;
    },
    set: function (__s30param0) {
      Localization.assertServiceAlreadyInstalled();
      Localization._service.localizeReplacements = __s30param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Localization, "locale", {
    get: function () {
      Localization.assertServiceAlreadyInstalled();
      return Localization._service.locale;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Localization, "language", {
    get: function () {
      Localization.assertServiceAlreadyInstalled();
      return Localization._service.language;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Localization, "timeZone", {
    get: function () {
      Localization.assertServiceAlreadyInstalled();
      return Localization._service.timeZone;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Localization, "languageXMLVersion", {
    get: function () {
      Localization.assertServiceAlreadyInstalled();
      return Localization._service.languageDataVersion;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Localization, "languageXMLTimeStamp", {
    get: function () {
      Localization.assertServiceAlreadyInstalled();
      return Localization._service.languageDataTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Localization, "processorType", {
    get: function () {
      Localization.assertServiceAlreadyInstalled();
      return Localization._service.processorType;
    },
    enumerable: true,
    configurable: true
  });
  Localization.CODE_LOCALIZATION_SERVICE_NOT_ASSIGNED = "001";
  Localization.MESSAGE_LOCALIZATION_SERVICE_NOT_ASSIGNED = "Localization Service was not assigned to Static Localization Helper (use setService to do so)";
  return Localization;
}();
exports.Localization = __s0local1;

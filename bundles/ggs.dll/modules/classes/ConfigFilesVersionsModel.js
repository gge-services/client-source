Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger("ConfigFilesVersionsModel");
var __s0local1 = function () {
  function ConfigFilesVersionsModel() {}
  Object.defineProperty(ConfigFilesVersionsModel, "instance", {
    get: function () {
      if (ConfigFilesVersionsModel._instance == null) {
        ConfigFilesVersionsModel._instance = new ConfigFilesVersionsModel();
      }
      return ConfigFilesVersionsModel._instance;
    },
    enumerable: true,
    configurable: true
  });
  ConfigFilesVersionsModel.prototype.loadVersionJson = function (__s8param0) {
    var __s8local0 = this;
    return new Promise(function (__s10param0, __s10param1) {
      if (__s8local0._versionData) {
        __s0local0.debug("ConfigFilesVersionsModel already contains data, loading of " + __s8param0 + " will be skipped.");
        __s10param0();
      } else {
        var __s10local0 = new __dep_export_CSSMouseCursor.URLLoaderService(new __dep_export_CSSMouseCursor.URLRequest(__s8param0));
        __s10local0.load().then(function (__s14param0) {
          __s0local0.debug("versions loaded successfully");
          __s8local0._versionData = JSON.parse(__s14param0);
          __s10local0.dispose();
          __s10param0();
        }).catch(function (__s16param0) {
          __s0local0.warn("Error while loading/parsing version json");
          __s10local0.dispose();
          __s10param1(__s16param0);
        });
      }
    });
  };
  ConfigFilesVersionsModel.prototype.languageVersion = function (__s18param0) {
    return this._versionData.languages[__s18param0];
  };
  ConfigFilesVersionsModel.prototype.networkVersion = function (__s20param0) {
    return this._versionData.networks[__s20param0];
  };
  Object.defineProperty(ConfigFilesVersionsModel.prototype, "countryVersion", {
    get: function () {
      return this._versionData.country;
    },
    enumerable: true,
    configurable: true
  });
  ConfigFilesVersionsModel.prototype.dispose = function () {
    this._versionData = null;
    ConfigFilesVersionsModel._instance = null;
  };
  return ConfigFilesVersionsModel;
}();
exports.ConfigFilesVersionsModel = __s0local1;

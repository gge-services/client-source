Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_export_AbstractLocalStorage = require("gge-module:export_AbstractLocalStorage");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("LocalStorage.LandinPageStorage");
var __s0local1 = function (__s1param0) {
  function LandinPageStorage() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(LandinPageStorage, __s1param0);
  LandinPageStorage.prototype.read = function () {
    var __s5local0 = this;
    return new Promise(function (__s7param0, __s7param1) {
      __s0local0.info("reading data from landing page using ggsGetStoredGameData.");
      __dep_export_CSSMouseCursor.ExternalInterface.asyncCall("ggsGetStoredGameData", __s5local0._section).then(function (__s9param0) {
        __s0local0.info("got data from ggsGetStoredGameData.");
        __s0local0.info(__s9param0);
        __s5local0._data = __s9param0 || {};
        __s7param0(__s5local0._data);
      }).catch(function (__s11param0) {
        __s0local0.error("failed to read data from ggsGetStoredGameData.");
        __s5local0._data = {};
        __s7param0(__s5local0._data);
      });
    });
  };
  LandinPageStorage.prototype.write = function () {
    try {
      __s0local0.info("writing data on landing page using ggsStoreGameData.");
      __dep_export_CSSMouseCursor.ExternalInterface.call("ggsStoreGameData", this._section, this._data);
    } catch (__s16local0) {
      __s0local0.error("failed to store data using ggsStoreGameData.");
    }
  };
  return LandinPageStorage;
}(__dep_export_AbstractLocalStorage.AbstractLocalStorage);
exports.LandinPageStorage = __s0local1;

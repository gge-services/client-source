Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_export_AbstractLocalStorage = require("gge-module:export_AbstractLocalStorage");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("LocalStorage.WindowLocalStorage");
var __s0local1 = function (__s1param0) {
  function WindowLocalStorage() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(WindowLocalStorage, __s1param0);
  Object.defineProperty(WindowLocalStorage.prototype, "localStorageKey", {
    get: function () {
      return ["ggs.gameData", __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.gameId, __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.networkId, this._section].join("_");
    },
    enumerable: true,
    configurable: true
  });
  WindowLocalStorage.prototype.read = function () {
    var __s7local0 = JSON.parse(window.localStorage.getItem(this.localStorageKey));
    __s0local0.info("reading data from window.localStorage.");
    __s0local0.info(__s7local0);
    this._data = __s7local0 || {};
    return Promise.resolve(this._data);
  };
  WindowLocalStorage.prototype.write = function () {
    __s0local0.info("writing data on window.localStorage.");
    window.localStorage.setItem(this.localStorageKey, JSON.stringify(this._data));
  };
  return WindowLocalStorage;
}(__dep_export_AbstractLocalStorage.AbstractLocalStorage);
exports.WindowLocalStorage = __s0local1;

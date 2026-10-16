Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_export_AbstractLocalStorage = require("gge-module:export_AbstractLocalStorage");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("LocalStorage.MemoryStorage");
var __s0local1 = function (__s1param0) {
  function MemoryStorage() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(MemoryStorage, __s1param0);
  MemoryStorage.prototype.read = function () {
    __s0local0.warn("using memory as fail back, no data will be persisted.");
    this._data = {};
    return Promise.resolve(this._data);
  };
  MemoryStorage.prototype.write = function () {
    __s0local0.warn("keeping data on memory as fail back, no data will be persisted.");
  };
  return MemoryStorage;
}(__dep_export_AbstractLocalStorage.AbstractLocalStorage);
exports.MemoryStorage = __s0local1;

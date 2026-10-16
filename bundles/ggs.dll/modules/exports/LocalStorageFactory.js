Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_LandinPageStorage = require("gge-module:export_LandinPageStorage");
var __dep_export_MemoryStorage = require("gge-module:export_MemoryStorage");
var __dep_export_WindowLocalStorage = require("gge-module:export_WindowLocalStorage");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = function () {
  function LocalStorageFactory() {}
  LocalStorageFactory.isWindowLocalStorageAvailable = function () {
    var __s5local0;
    var __s5local1;
    try {
      __s5local0 = window.localStorage;
      __s5local1 = "__storage_test__";
      __s5local0.setItem(__s5local1, __s5local1);
      __s5local0.getItem(__s5local1);
      __s5local0.removeItem(__s5local1);
      return true;
    } catch (__s8local0) {
      return false;
    }
  };
  LocalStorageFactory.createLocalStorage = function (__s10param0) {
    if (__dep_export_CSSMouseCursor.ExternalInterface.available) {
      return new __dep_export_LandinPageStorage.LandinPageStorage(__s10param0);
    } else if (LocalStorageFactory.isWindowLocalStorageAvailable()) {
      return new __dep_export_WindowLocalStorage.WindowLocalStorage(__s10param0);
    } else {
      return new __dep_export_MemoryStorage.MemoryStorage(__s10param0);
    }
  };
  return LocalStorageFactory;
}();
exports.LocalStorageFactory = __s0local0;

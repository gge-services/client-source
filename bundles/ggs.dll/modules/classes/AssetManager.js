Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_DefaultAssetManager = require("gge-module:class_DefaultAssetManager");
var __s0local0 = function () {
  function AssetManager() {}
  Object.defineProperty(AssetManager, "manager", {
    get: function () {
      if (AssetManager._manager == null) {
        AssetManager._manager = new __dep_class_DefaultAssetManager.DefaultAssetManager();
      }
      return AssetManager._manager;
    },
    set: function (__s8param0) {
      AssetManager._manager = __s8param0;
    },
    enumerable: true,
    configurable: true
  });
  return AssetManager;
}();
exports.AssetManager = __s0local0;

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_048b0d27b75c40dd = require("gge-module:exact_048b0d27b75c40dd");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = function () {
  function DefaultAssetManager() {}
  DefaultAssetManager.prototype.doesExist = function (__s5param0) {
    try {
      this.getDefinition(__s5param0);
    } catch (__s8local0) {
      return false;
    }
    return true;
  };
  DefaultAssetManager.prototype.getDefinition = function (__s10param0) {
    var __s10local0;
    try {
      __s10local0 = __dep_export_CSSMouseCursor.getDefinitionByNameFromLibrary(String(__s10param0));
    } catch (__s13local0) {
      __dep_exact_048b0d27b75c40dd.error("error: {e}.\nidentifier: " + __s10param0);
    }
    return __s10local0;
  };
  DefaultAssetManager.prototype.getClass = function (__s15param0) {
    return this.getDefinition(__s15param0);
  };
  return DefaultAssetManager;
}();
exports.DefaultAssetManager = __s0local0;

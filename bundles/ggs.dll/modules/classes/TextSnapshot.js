Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_exact_d080a25fe68bd590 = require("gge-module:exact_d080a25fe68bd590");
var __s0local0 = __dep_export_LoggerConfigurator.getLogger(__dep_exact_d080a25fe68bd590.CREATEJS_UTILITIES_LOGGER);
var __s0local1 = function () {
  function TextSnapshot() {
    this.charCount = 0;
  }
  TextSnapshot.prototype.findText = function (__s5param0, __s5param1, __s5param2) {
    __s0local0.warn("TextSnapshot.findText is not implemented");
    return 0;
  };
  TextSnapshot.prototype.getSelected = function (__s7param0, __s7param1) {
    __s0local0.warn("TextSnapshot.getSelected is not implemented");
    return false;
  };
  TextSnapshot.prototype.getSelectedText = function (__s9param0 = false) {
    __s0local0.warn("TextSnapshot.getSelectedTExt is not implemented");
    return "";
  };
  TextSnapshot.prototype.getText = function (__s11param0, __s11param1, __s11param2 = false) {
    __s0local0.warn("TextSnapshot.getText is not implemented");
    return "";
  };
  TextSnapshot.prototype.getTextRunInfo = function (__s13param0, __s13param1) {
    __s0local0.warn("TextSnapshot.getTextRunInfo is not implemented");
    return [];
  };
  TextSnapshot.prototype.hitTestTextNearPos = function (__s15param0, __s15param1, __s15param2 = 0) {
    __s0local0.warn("TextSnapshot.hitTestTextNearPos is not implemented");
    return 0;
  };
  TextSnapshot.prototype.setSelectColor = function (__s17param0 = 1) {
    __s0local0.warn("TextSnapshot.setSelectColor is not implemented");
  };
  TextSnapshot.prototype.setSelected = function (__s19param0, __s19param1, __s19param2) {
    __s0local0.warn("TextSnapshot.setSelected is not implemented");
  };
  return TextSnapshot;
}();
exports.TextSnapshot = __s0local1;

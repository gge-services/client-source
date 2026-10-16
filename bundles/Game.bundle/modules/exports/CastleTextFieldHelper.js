Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleTextFieldHelper() {}
  CastleTextFieldHelper.safeSetText = function (__s5param0, __s5param1, __s5param2 = null) {
    if (!__dep_exact_81dacdf05bd32292.instanceOfClass(__s5param0.textContentVO, "LocalizedTextVO")) {
      __s5param0.textContentVO = new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("");
    }
    __s5param0.textContentVO.textId = __s5param1;
    if (__s5param2 != null) {
      __s5param0.textContentVO.textReplacements = __s5param2;
    }
  };
  CastleTextFieldHelper.safeSetNumber = function (__s9param0, __s9param1, __s9param2 = false, __s9param3 = 0, __s9param4 = false) {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s9param0.textContentVO, "LocalizedNumberVO")) {
      __s9param0.textContentVO.numberValue = __s9param1;
    } else {
      __s9param0.textContentVO = new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s9param1, __s9param2, __s9param3, __s9param4);
    }
  };
  CastleTextFieldHelper.restoreWidth = function (__s13param0) {
    if (__s13param0.width < __s13param0.textWidth) {
      var __s13local0 = __s13param0.width;
      __s13param0.width = __s13param0.textWidth;
      var __s13local1 = __s13param0.textWidth - __s13local0;
      __s13param0.x -= __s13local1 / 2;
    }
  };
  CastleTextFieldHelper.removeInputFocus = function () {
    document.activeElement.blur();
  };
  return CastleTextFieldHelper;
}();
exports.CastleTextFieldHelper = __s0local0;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");

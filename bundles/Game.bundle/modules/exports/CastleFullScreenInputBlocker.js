Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleFullScreenInputBlocker(__s3param0) {
    this.mc = __s3param0;
    this.mc.visible = false;
  }
  CastleFullScreenInputBlocker.prototype.onFullScreenChanged = function (__s5param0) {
    this.mc.visible = __s5param0.fullScreen;
  };
  CastleFullScreenInputBlocker.prototype.onChangeDisplayState = function (__s7param0) {
    switch (__s7param0.params[0]) {
      case __dep_exact_81dacdf05bd32292_1.StageDisplayState.FULL_SCREEN:
        this.mc.visible = true;
        break;
      case __dep_exact_81dacdf05bd32292_1.StageDisplayState.NORMAL:
        this.mc.visible = false;
    }
  };
  CastleFullScreenInputBlocker.prototype.removeListeners = function () {
    if (!__dep_exact_81dacdf05bd32292.currentBrowserInfo.isMobile) {
      __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_DISPLAYSTATE, this.bindFunction(this.onChangeDisplayState));
      if (this.mc.stage) {
        this.mc.stage.removeEventListener(__dep_exact_81dacdf05bd32292.FullScreenEvent.FULL_SCREEN, this.bindFunction(this.onFullScreenChanged));
      }
    }
  };
  return CastleFullScreenInputBlocker;
}();
exports.CastleFullScreenInputBlocker = __s0local0;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");

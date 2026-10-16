Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function ClickFeedbackButtonBackground(__s3param0 = null, __s3param1 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this;
    __s3local0._disp.mc_background.gotoAndStop(__dep_export_ClickFeedbackButton.ClickFeedbackButton.FRAME_DEFAULT);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ClickFeedbackButtonBackground, __s1param0);
  ClickFeedbackButtonBackground.prototype.onMouseDown = function (__s5param0) {
    if (this.enabled) {
      this._disp.mc_background.gotoAndStop(__dep_export_ClickFeedbackButton.ClickFeedbackButton.FRAME_CLICKED);
      if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isMobile && __dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s5param0)) {
        this._disp.stage.addEventListener(__s0local0.STAGE_MOUSE_UP, this.bindFunction(this.onMobileStageMouseUp));
      }
    }
  };
  ClickFeedbackButtonBackground.prototype.onMobileStageMouseUp = function (__s9param0) {
    if (this._disp.stage) {
      this._disp.stage.removeEventListener(__s0local0.STAGE_MOUSE_UP, this.bindFunction(this.onMobileStageMouseUp));
    }
    this.onMouseUp(__s9param0);
  };
  ClickFeedbackButtonBackground.prototype.onMouseUp = function (__s12param0) {
    if (this.enabled && this._disp.mc_background.currentFrame != __dep_export_ClickFeedbackButton.ClickFeedbackButton.FRAME_DEFAULT - 1) {
      this._disp.mc_background.gotoAndStop(__dep_export_ClickFeedbackButton.ClickFeedbackButton.FRAME_DEFAULT);
    }
  };
  ClickFeedbackButtonBackground.prototype.onRollOut = function (__s15param0) {
    __s1param0.prototype.onRollOut.call(this, __s15param0);
    this._disp.mc_background.gotoAndStop(__dep_export_ClickFeedbackButton.ClickFeedbackButton.FRAME_DEFAULT);
    if (this._disp.cacheCanvas) {
      this._disp.updateCache();
    }
  };
  return ClickFeedbackButtonBackground;
}(__dep_export_ClickFeedbackButton.ClickFeedbackButton);
exports.ClickFeedbackButtonBackground = __s0local1;

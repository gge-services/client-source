Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function ClickFeedbackButtonHover(__s3param0 = null, __s3param1 = false) {
    return __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ClickFeedbackButtonHover, __s1param0);
  ClickFeedbackButtonHover.prototype.onMouseDown = function (__s5param0) {
    if (this.enabled) {
      this._disp.gotoAndStop(ClickFeedbackButtonHover.FRAME_CLICKED);
      if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isMobile && __dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s5param0)) {
        this._disp.stage.addEventListener(__s0local0.STAGE_MOUSE_UP, this.bindFunction(this.onMobileStageMouseUp));
      }
    }
  };
  ClickFeedbackButtonHover.prototype.onRollOver = function (__s9param0) {
    if (this.enabled) {
      this._disp.gotoAndStop(ClickFeedbackButtonHover.FRAME_HOVERED);
      __s1param0.prototype.onRollOver.call(this, __s9param0);
      if (this._disp.cacheCanvas) {
        this._disp.updateCache();
      }
    }
  };
  ClickFeedbackButtonHover.FRAME_DEFAULT = 1;
  ClickFeedbackButtonHover.FRAME_HOVERED = 2;
  ClickFeedbackButtonHover.FRAME_CLICKED = 3;
  return ClickFeedbackButtonHover;
}(__dep_export_ClickFeedbackButton.ClickFeedbackButton);
exports.ClickFeedbackButtonHover = __s0local1;

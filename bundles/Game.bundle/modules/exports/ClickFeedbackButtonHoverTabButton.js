Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function ClickFeedbackButtonHoverTabButton(__s3param0 = null, __s3param1 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this;
    __s3local0.select = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ClickFeedbackButtonHoverTabButton, __s1param0);
  ClickFeedbackButtonHoverTabButton.prototype.onMouseDown = function (__s5param0) {
    if (this.enabled && !this.select) {
      this._disp.gotoAndStop(__dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover.FRAME_CLICKED);
      if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isMobile && __dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s5param0)) {
        this._disp.stage.addEventListener(__s0local0.STAGE_MOUSE_UP, this.bindFunction(this.onMobileStageMouseUp));
      }
    }
  };
  ClickFeedbackButtonHoverTabButton.prototype.onRollOver = function (__s9param0) {
    if (this.enabled && !this.select) {
      this._disp.gotoAndStop(__dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover.FRAME_HOVERED);
      __s1param0.prototype.onRollOver.call(this, __s9param0);
      if (this._disp.cacheCanvas) {
        this._disp.updateCache();
      }
    }
  };
  ClickFeedbackButtonHoverTabButton.prototype.onMouseUp = function (__s13param0) {
    if (!this.select) {
      __s1param0.prototype.onMouseUp.call(this, __s13param0);
    }
  };
  ClickFeedbackButtonHoverTabButton.prototype.onRollOut = function (__s16param0) {
    if (!this.select) {
      __s1param0.prototype.onRollOut.call(this, __s16param0);
    }
  };
  ClickFeedbackButtonHoverTabButton.prototype.selected = function () {
    this.select = true;
    this._disp.gotoAndStop(ClickFeedbackButtonHoverTabButton.FRAME_SELECTED);
  };
  ClickFeedbackButtonHoverTabButton.prototype.deselected = function () {
    this.select = false;
    this._disp.gotoAndStop(ClickFeedbackButtonHoverTabButton.FRAME_DEFAULT);
  };
  ClickFeedbackButtonHoverTabButton.FRAME_SELECTED = 4;
  return ClickFeedbackButtonHoverTabButton;
}(__dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
exports.ClickFeedbackButtonHoverTabButton = __s0local1;

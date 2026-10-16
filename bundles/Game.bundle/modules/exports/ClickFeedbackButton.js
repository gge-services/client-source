Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function ClickFeedbackButton(__s3param0 = null, __s3param1 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this;
    __s3local0._disp.gotoAndStop(ClickFeedbackButton.FRAME_DEFAULT);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ClickFeedbackButton, __s1param0);
  ClickFeedbackButton.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this._disp.addEventListener("mousedown", this.bindFunction(this.onMouseDown));
    this._disp.addEventListener("click", this.bindFunction(this.onMouseUp));
  };
  ClickFeedbackButton.prototype.addMouseEventListener = function () {
    __s1param0.prototype.addMouseEventListener.call(this);
    this._disp.addEventListener("mousedown", this.bindFunction(this.onMouseDown));
    this._disp.addEventListener("click", this.bindFunction(this.onMouseUp));
  };
  ClickFeedbackButton.prototype.removeMouseEventListener = function () {
    __s1param0.prototype.removeMouseEventListener.call(this);
    this._disp.removeEventListener("mousedown", this.bindFunction(this.onMouseDown));
    this._disp.removeEventListener("click", this.bindFunction(this.onMouseUp));
  };
  ClickFeedbackButton.prototype.onRemoveToStage = function (__s11param0) {
    __s1param0.prototype.onRemoveToStage.call(this, __s11param0);
    this._disp.removeEventListener("mousedown", this.bindFunction(this.onMouseDown));
    this._disp.removeEventListener("click", this.bindFunction(this.onMouseUp));
  };
  ClickFeedbackButton.prototype.onMouseDown = function (__s13param0) {
    if (this.enabled) {
      this._disp.gotoAndStop(ClickFeedbackButton.FRAME_CLICKED);
      if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isMobile && __dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s13param0)) {
        this._disp.stage.addEventListener(__s0local0.STAGE_MOUSE_UP, this.bindFunction(this.onMobileStageMouseUp));
      }
    }
  };
  ClickFeedbackButton.prototype.onMobileStageMouseUp = function (__s17param0) {
    if (this._disp.stage) {
      this._disp.stage.removeEventListener(__s0local0.STAGE_MOUSE_UP, this.bindFunction(this.onMobileStageMouseUp));
    }
    this.onMouseUp(__s17param0);
  };
  ClickFeedbackButton.prototype.onMouseUp = function (__s20param0) {
    if (this.enabled && this._disp.currentFrame != ClickFeedbackButton.FRAME_DEFAULT - 1) {
      this._disp.gotoAndStop(ClickFeedbackButton.FRAME_DEFAULT);
    }
  };
  ClickFeedbackButton.prototype.onRollOut = function (__s23param0) {
    this._disp.gotoAndStop(ClickFeedbackButton.FRAME_DEFAULT);
    __s1param0.prototype.onRollOut.call(this, __s23param0);
    if (this._disp.cacheCanvas) {
      this._disp.updateCache();
    }
  };
  ClickFeedbackButton.FRAME_DEFAULT = 1;
  ClickFeedbackButton.FRAME_CLICKED = 2;
  return ClickFeedbackButton;
}(__dep_exact_84d43d9c404bd4d8.BasicButton);
exports.ClickFeedbackButton = __s0local1;

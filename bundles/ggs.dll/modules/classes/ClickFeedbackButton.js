var __s0local0;
var __s0local1 = this && this.__extends || (__s0local0 = Object.setPrototypeOf || {
  __proto__: []
} instanceof Array && function (__s1param0, __s1param1) {
  __s1param0.__proto__ = __s1param1;
} || function (__s3param0, __s3param1) {
  for (var __s3local0 in __s3param1) {
    if (__s3param1.hasOwnProperty(__s3local0)) {
      __s3param0[__s3local0] = __s3param1[__s3local0];
    }
  }
}, function (__s8param0, __s8param1) {
  function __s8local0() {
    this.constructor = __s8param0;
  }
  __s0local0(__s8param0, __s8param1);
  __s8param0.prototype = __s8param1 === null ? Object.create(__s8param1) : (__s8local0.prototype = __s8param1.prototype, new __s8local0());
});
Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_BasicButton = require("gge-module:class_BasicButton");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local2 = createjs.MouseEvent;
var __s0local3 = function (__s12param0) {
  function ClickFeedbackButton(__s14param0 = null, __s14param1 = false) {
    var __s14local0 = __s12param0.call(this, __s14param0, __s14param1) || this;
    __s14local0._disp.gotoAndStop(ClickFeedbackButton.FRAME_DEFAULT);
    return __s14local0;
  }
  __s0local1(ClickFeedbackButton, __s12param0);
  ClickFeedbackButton.prototype.init = function () {
    __s12param0.prototype.init.call(this);
    this._disp.addEventListener("mousedown", this.bindFunction(this.onMouseDown));
    this._disp.addEventListener("click", this.bindFunction(this.onMouseUp));
  };
  ClickFeedbackButton.prototype.addMouseEventListener = function () {
    __s12param0.prototype.addMouseEventListener.call(this);
    this._disp.addEventListener("mousedown", this.bindFunction(this.onMouseDown));
    this._disp.addEventListener("click", this.bindFunction(this.onMouseUp));
  };
  ClickFeedbackButton.prototype.removeMouseEventListener = function () {
    __s12param0.prototype.removeMouseEventListener.call(this);
    this._disp.removeEventListener("mousedown", this.bindFunction(this.onMouseDown));
    this._disp.removeEventListener("click", this.bindFunction(this.onMouseUp));
  };
  ClickFeedbackButton.prototype.onRemoveToStage = function (__s22param0) {
    __s12param0.prototype.onRemoveToStage.call(this, __s22param0);
    this._disp.removeEventListener("mousedown", this.bindFunction(this.onMouseDown));
    this._disp.removeEventListener("click", this.bindFunction(this.onMouseUp));
  };
  ClickFeedbackButton.prototype.onMouseDown = function (__s24param0) {
    if (this.enabled) {
      this._disp.gotoAndStop(ClickFeedbackButton.FRAME_CLICKED);
      if (__dep_export_CSSMouseCursor.currentBrowserInfo.isMobile && __dep_export_CSSMouseCursor.currentBrowserInfo.isTouchEvent(__s24param0)) {
        this._disp.stage.addEventListener(__s0local2.STAGE_MOUSE_UP, this.bindFunction(this.onMobileStageMouseUp));
      }
    }
  };
  ClickFeedbackButton.prototype.onMobileStageMouseUp = function (__s28param0) {
    if (this._disp.stage) {
      this._disp.stage.removeEventListener(__s0local2.STAGE_MOUSE_UP, this.bindFunction(this.onMobileStageMouseUp));
    }
    this.onMouseUp(__s28param0);
  };
  ClickFeedbackButton.prototype.onMouseUp = function (__s31param0) {
    if (this.enabled && this._disp.currentFrame != ClickFeedbackButton.FRAME_DEFAULT - 1) {
      this._disp.gotoAndStop(ClickFeedbackButton.FRAME_DEFAULT);
    }
  };
  ClickFeedbackButton.prototype.onRollOut = function (__s34param0) {
    this._disp.gotoAndStop(ClickFeedbackButton.FRAME_DEFAULT);
    __s12param0.prototype.onRollOut.call(this, __s34param0);
  };
  ClickFeedbackButton.FRAME_DEFAULT = 1;
  ClickFeedbackButton.FRAME_CLICKED = 2;
  return ClickFeedbackButton;
}(__dep_class_BasicButton.BasicButton);
exports.ClickFeedbackButton = __s0local3;

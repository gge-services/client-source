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
var __dep_class_ClickFeedbackButton = require("gge-module:class_ClickFeedbackButton");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local2 = createjs.MouseEvent;
var __s0local3 = function (__s12param0) {
  function ClickFeedbackButtonHover(__s14param0 = null, __s14param1 = false) {
    return __s12param0.call(this, __s14param0, __s14param1) || this;
  }
  __s0local1(ClickFeedbackButtonHover, __s12param0);
  ClickFeedbackButtonHover.prototype.onMouseDown = function (__s16param0) {
    if (this.enabled) {
      this._disp.gotoAndStop(ClickFeedbackButtonHover.FRAME_CLICKED);
      if (__dep_export_CSSMouseCursor.currentBrowserInfo.isMobile && __dep_export_CSSMouseCursor.currentBrowserInfo.isTouchEvent(__s16param0)) {
        this._disp.stage.addEventListener(__s0local2.STAGE_MOUSE_UP, this.bindFunction(this.onMobileStageMouseUp));
      }
    }
  };
  ClickFeedbackButtonHover.prototype.onRollOver = function (__s20param0) {
    this._disp.gotoAndStop(ClickFeedbackButtonHover.FRAME_HOVERED);
    __s12param0.prototype.onRollOver.call(this, __s20param0);
  };
  ClickFeedbackButtonHover.FRAME_DEFAULT = 1;
  ClickFeedbackButtonHover.FRAME_HOVERED = 2;
  ClickFeedbackButtonHover.FRAME_CLICKED = 3;
  return ClickFeedbackButtonHover;
}(__dep_class_ClickFeedbackButton.ClickFeedbackButton);
exports.ClickFeedbackButtonHover = __s0local3;

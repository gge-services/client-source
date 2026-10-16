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
var __s0local2 = createjs.GlowFilter;
var __s0local3 = function (__s12param0) {
  function BigGlowableButton() {
    var __s14local0 = __s12param0.call(this) || this;
    __s14local0._glowable = false;
    __s14local0.mouseOverScale = 1.025;
    return __s14local0;
  }
  __s0local1(BigGlowableButton, __s12param0);
  BigGlowableButton.prototype.init = function () {
    __s12param0.prototype.init.call(this);
    this._glowable = true;
  };
  BigGlowableButton.prototype.onRollOver = function (__s18param0) {
    __s12param0.prototype.onRollOver.call(this, __s18param0);
    if (this._glowable && this._disp.enabled) {
      this.useFilters(BigGlowableButton.GLOW_FILTER);
    }
  };
  BigGlowableButton.prototype.onRollOut = function (__s21param0) {
    __s12param0.prototype.onRollOut.call(this, __s21param0);
    if (this._disp.enabled) {
      this.useFilters(BigGlowableButton.NO_FILTER);
    }
  };
  BigGlowableButton.GLOW_FILTER = [new __s0local2(16774335, 1, 4.5, 4.5, 2, __dep_export_CSSMouseCursor.BitmapFilterQuality.HIGH)];
  BigGlowableButton.NO_FILTER = [];
  return BigGlowableButton;
}(__dep_class_BasicButton.BasicButton);
exports.BigGlowableButton = __s0local3;

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
var __s0local2 = function (__s12param0) {
  function HeroTwoStateButton(__s14param0 = null, __s14param1 = true) {
    var __s14local0 = __s12param0.call(this, __s14param0, __s14param1) || this;
    __s14local0._disp.mouse_over.visible = false;
    __s14local0._disp.addEventListener("mouseover", __s14local0.bindFunction(__s14local0.onRollOver));
    __s14local0._disp.addEventListener("mouseout", __s14local0.bindFunction(__s14local0.onRollOut));
    for (var __s14local1 = 0; __s14local1 < __s14local0._disp.numChildren; ++__s14local1) {
      var __s14local2 = __s14local0._disp.getChildAt(__s14local1);
      if (__s14local2 && __s14local2.name == "mc_ani") {
        __s14local2.play();
      }
    }
    return __s14local0;
  }
  __s0local1(HeroTwoStateButton, __s12param0);
  HeroTwoStateButton.prototype.onRollOut = function (__s19param0) {
    if (!this.isSelected) {
      this._disp.mouse_over.visible = false;
    }
  };
  HeroTwoStateButton.prototype.selected = function () {
    __s12param0.prototype.selected.call(this);
  };
  HeroTwoStateButton.prototype.deselected = function () {
    __s12param0.prototype.deselected.call(this);
    this._disp.mouse_over.visible = false;
  };
  HeroTwoStateButton.prototype.onRollOver = function (__s26param0) {
    if (!this.isSelected) {
      this._disp.mouse_over.visible = true;
    }
  };
  return HeroTwoStateButton;
}(require("gge-module:class_TwoStateButton").TwoStateButton);
exports.HeroTwoStateButton = __s0local2;

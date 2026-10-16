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
  function CheckBoxButton(__s14param0 = null, __s14param1 = false) {
    var __s14local0 = __s12param0.call(this, __s14param0, __s14param1) || this;
    __s14local0._isSelected = false;
    __s14local0._zoomOnMouseOver = true;
    return __s14local0;
  }
  __s0local1(CheckBoxButton, __s12param0);
  CheckBoxButton.prototype.init = function () {
    if (!this._isSelected) {
      this.deselected();
    }
    this.disp.actLikeButton = true;
    __s12param0.prototype.init.call(this);
  };
  Object.defineProperty(CheckBoxButton.prototype, "isSelected", {
    get: function () {
      return this._isSelected;
    },
    set: function (__s21param0) {
      this._isSelected = __s21param0;
      if (this._isSelected) {
        this.selected();
      } else {
        this.deselected();
      }
    },
    enumerable: true,
    configurable: true
  });
  CheckBoxButton.prototype.selected = function () {
    if (this.enabled) {
      this._isSelected = true;
      this.disp.gotoAndStop(2);
    }
  };
  CheckBoxButton.prototype.deselected = function () {
    if (this.enabled) {
      this._isSelected = false;
      this.disp.gotoAndStop(1);
    }
  };
  CheckBoxButton.prototype.toggleSelected = function () {
    this.isSelected = !this.isSelected;
  };
  Object.defineProperty(CheckBoxButton.prototype, "enableZoomOnMouseOver", {
    set: function (__s33param0) {
      this._zoomOnMouseOver = __s33param0;
    },
    enumerable: true,
    configurable: true
  });
  CheckBoxButton.prototype.onRollOut = function (__s35param0) {
    if (this.enabled && this._zoomOnMouseOver) {
      this.disp.scaleX = this.disp.scaleY = this.initScale;
    }
  };
  CheckBoxButton.prototype.onRollOver = function (__s38param0) {
    if (this.enabled && this._zoomOnMouseOver) {
      this.disp.scaleX = this.disp.scaleY = this.initScale * this._mouseOverScale;
    }
  };
  return CheckBoxButton;
}(require("gge-module:class_BasicButton").BasicButton);
exports.CheckBoxButton = __s0local2;

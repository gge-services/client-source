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
  function TwoStateButton(__s14param0 = null, __s14param1 = false) {
    return __s12param0.call(this, __s14param0, __s14param1) || this;
  }
  __s0local1(TwoStateButton, __s12param0);
  Object.defineProperty(TwoStateButton.prototype, "isSelected", {
    get: function () {
      return this._disp.currentFrame == 1;
    },
    enumerable: true,
    configurable: true
  });
  TwoStateButton.prototype.selected = function () {
    this._disp.gotoAndStop(2);
  };
  TwoStateButton.prototype.deselected = function () {
    this._disp.gotoAndStop(1);
  };
  return TwoStateButton;
}(require("gge-module:class_BasicButton").BasicButton);
exports.TwoStateButton = __s0local2;

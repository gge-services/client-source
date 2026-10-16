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
  function Icon_PlaqueCR() {
    return __s12param0.call(this) || this;
  }
  __s0local1(Icon_PlaqueCR, __s12param0);
  Icon_PlaqueCR.prototype.getOriginWidth = function () {
    return 26.05;
  };
  Icon_PlaqueCR.prototype.getOriginHeight = function () {
    return 32;
  };
  return Icon_PlaqueCR;
}(require("gge-module:class_BaseContentReplacer").BaseContentReplacer);
exports.Icon_PlaqueCR = __s0local2;

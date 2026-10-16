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
  function Signal() {
    var __s14local0 = [];
    for (var __s14local1 = 0; __s14local1 < arguments.length; __s14local1++) {
      __s14local0[__s14local1] = arguments[__s14local1];
    }
    __s14local0 = __s14local0.length == 1 && __s14local0[0] instanceof Array ? __s14local0[0] : __s14local0;
    return __s12param0.call(this, __s14local0) || this;
  }
  __s0local1(Signal, __s12param0);
  Signal.prototype.add = function (__s18param0) {
    return this.registerListener(__s18param0);
  };
  return Signal;
}(require("gge-module:class_OnceSignal").OnceSignal);
exports.Signal = __s0local2;

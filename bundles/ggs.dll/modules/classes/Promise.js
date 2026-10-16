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
  function Promise() {
    return __s12param0 !== null && __s12param0.apply(this, arguments) || this;
  }
  __s0local1(Promise, __s12param0);
  Promise.prototype.addOnce = function (__s16param0) {
    var __s16local0 = __s12param0.prototype.addOnce.call(this, __s16param0);
    if (this.isDispatched) {
      __s16local0.execute(this.valueObjects);
      __s16local0.remove();
    }
    return __s16local0;
  };
  Promise.prototype.dispatch = function () {
    var __s19local0 = [];
    for (var __s19local1 = 0; __s19local1 < arguments.length; __s19local1++) {
      __s19local0[__s19local1] = arguments[__s19local1];
    }
    if (this.isDispatched) {
      throw new Error("You cannot dispatch() a Promise more than once");
    }
    this.isDispatched = true;
    this.valueObjects = __s19local0;
    __s12param0.prototype.dispatch.apply(this, __s19local0);
  };
  return Promise;
}(require("gge-module:class_OnceSignal").OnceSignal);
exports.Promise = __s0local2;

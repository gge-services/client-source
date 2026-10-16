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
  function DeluxeSignal(__s14param0 = null) {
    var __s14local0 = [];
    for (var __s14local1 = 1; __s14local1 < arguments.length; __s14local1++) {
      __s14local0[__s14local1 - 1] = arguments[__s14local1];
    }
    var __s14local2 = this;
    __s14local0 = __s14local0.length == 1 && __s14local0[0] instanceof Array ? __s14local0[0] : __s14local0;
    (__s14local2 = __s12param0.call(this, __s14local0) || this)._target = __s14param0;
    return __s14local2;
  }
  __s0local1(DeluxeSignal, __s12param0);
  Object.defineProperty(DeluxeSignal.prototype, "target", {
    get: function () {
      return this._target;
    },
    set: function (__s20param0) {
      if (__s20param0 != this._target) {
        this.removeAll();
        this._target = __s20param0;
      }
    },
    enumerable: true,
    configurable: true
  });
  DeluxeSignal.prototype.dispatch = function () {
    var __s23local0 = [];
    for (var __s23local1 = 0; __s23local1 < arguments.length; __s23local1++) {
      __s23local0[__s23local1] = arguments[__s23local1];
    }
    var __s23local2 = this._valueClasses.length;
    var __s23local3 = __s23local0.length;
    if (__s23local3 < __s23local2) {
      throw new Error("Incorrect number of arguments. Expected at least " + __s23local2 + " but received " + __s23local3 + ".");
    }
    for (var __s23local4 = 0; __s23local4 < __s23local2; __s23local4++) {
      if (__s23local0[__s23local4] !== null && __s23local0[__s23local4].constructor !== this._valueClasses[__s23local4]) {
        throw new Error("Value object <" + __s23local0[__s23local4] + "> is not an instance of <" + this._valueClasses[__s23local4] + ">.");
      }
    }
    var __s23local5 = __s23local0[0];
    if (__s23local5) {
      if (__s23local5.target) {
        __s23local5 = __s23local5.clone();
        __s23local0[0] = __s23local5;
      }
      __s23local5.target = this.target;
      __s23local5.currentTarget = this.target;
      __s23local5.signal = this;
    }
    for (var __s23local6 = this.slots; __s23local6.nonEmpty;) {
      __s23local6.head.execute(__s23local0);
      __s23local6 = __s23local6.tail;
    }
    if (__s23local5 && __s23local5.bubbles) {
      for (var __s23local7 = this.target; __s23local7 && __s23local7.hasOwnProperty("parent") && (__s23local7 = __s23local7.parent) && (__s23local7.onEventBubbled === undefined || (__s23local5.currentTarget = __s23local7, !__s23local7.onEventBubbled(__s23local5))););
    }
  };
  return DeluxeSignal;
}(require("gge-module:class_PrioritySignal").PrioritySignal);
exports.DeluxeSignal = __s0local2;

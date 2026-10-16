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
var __dep_class_Signal = require("gge-module:class_Signal");
var __dep_class_Slot = require("gge-module:class_Slot");
var __s0local2 = function (__s12param0) {
  function PrioritySignal() {
    var __s14local0 = [];
    for (var __s14local1 = 0; __s14local1 < arguments.length; __s14local1++) {
      __s14local0[__s14local1] = arguments[__s14local1];
    }
    __s14local0 = __s14local0.length == 1 && __s14local0[0] instanceof Array ? __s14local0[0] : __s14local0;
    return __s12param0.call(this, __s14local0) || this;
  }
  __s0local1(PrioritySignal, __s12param0);
  PrioritySignal.prototype.addWithPriority = function (__s18param0, __s18param1 = 0) {
    return this.registerListenerWithPriority(__s18param0, false, __s18param1);
  };
  PrioritySignal.prototype.addOnceWithPriority = function (__s20param0, __s20param1 = 0) {
    return this.registerListenerWithPriority(__s20param0, true, __s20param1);
  };
  PrioritySignal.prototype.registerListener = function (__s22param0, __s22param1 = false) {
    return this.registerListenerWithPriority(__s22param0, __s22param1);
  };
  PrioritySignal.prototype.registerListenerWithPriority = function (__s24param0, __s24param1 = false, __s24param2 = 0) {
    if (this.registrationPossible(__s24param0, __s24param1)) {
      var __s24local0 = new __dep_class_Slot.Slot(__s24param0, this, __s24param1, __s24param2);
      this.slots = this.slots.insertWithPriority(__s24local0);
      return __s24local0;
    }
    return this.slots.find(__s24param0);
  };
  return PrioritySignal;
}(__dep_class_Signal.Signal);
exports.PrioritySignal = __s0local2;

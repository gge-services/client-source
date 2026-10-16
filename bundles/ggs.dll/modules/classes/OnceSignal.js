Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_SlotList = require("gge-module:class_SlotList");
var __dep_class_Slot = require("gge-module:class_Slot");
var __s0local0 = function () {
  function OnceSignal() {
    var __s3local0 = [];
    for (var __s3local1 = 0; __s3local1 < arguments.length; __s3local1++) {
      __s3local0[__s3local1] = arguments[__s3local1];
    }
    this.slots = __dep_class_SlotList.SlotList.NIL;
    this.valueClasses = __s3local0.length == 1 && __s3local0[0] instanceof Array ? __s3local0[0] : __s3local0;
  }
  Object.defineProperty(OnceSignal.prototype, "valueClasses", {
    get: function () {
      return this._valueClasses;
    },
    set: function (__s9param0) {
      this._valueClasses = __s9param0 ? __s9param0.slice() : [];
      for (var __s9local0 = this._valueClasses.length; __s9local0--;) {
        if (!(this._valueClasses[__s9local0] instanceof Object)) {
          throw new Error("Invalid valueClasses argument: item at index " + __s9local0 + " should be a Class but was:<" + this._valueClasses[__s9local0] + ">." + this._valueClasses[__s9local0]);
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OnceSignal.prototype, "numListeners", {
    get: function () {
      return this.slots.length;
    },
    enumerable: true,
    configurable: true
  });
  OnceSignal.prototype.addOnce = function (__s16param0) {
    return this.registerListener(__s16param0, true);
  };
  OnceSignal.prototype.remove = function (__s18param0) {
    var __s18local0 = this.slots.find(__s18param0);
    if (__s18local0) {
      this.slots = this.slots.filterNot(__s18param0);
      return __s18local0;
    } else {
      return null;
    }
  };
  OnceSignal.prototype.removeAll = function () {
    this.slots = __dep_class_SlotList.SlotList.NIL;
  };
  OnceSignal.prototype.dispatch = function () {
    var __s24local0 = [];
    for (var __s24local1 = 0; __s24local1 < arguments.length; __s24local1++) {
      __s24local0[__s24local1] = arguments[__s24local1];
    }
    var __s24local2 = this._valueClasses.length;
    var __s24local3 = __s24local0.length;
    if (__s24local3 < __s24local2) {
      throw new Error("Incorrect number of arguments. Expected at least " + __s24local2 + " but received " + __s24local3 + ".");
    }
    for (var __s24local4 = 0; __s24local4 < __s24local2; __s24local4++) {
      if (__s24local0[__s24local4] !== null && !(__s24local0[__s24local4] instanceof this._valueClasses[__s24local4]) && __s24local0[__s24local4].constructor !== this._valueClasses[__s24local4]) {
        throw new Error("Value object <" + __s24local0[__s24local4] + "> is not an instance of <" + this._valueClasses[__s24local4] + ">.");
      }
    }
    var __s24local5 = this.slots;
    if (__s24local5.nonEmpty) {
      while (__s24local5.nonEmpty) {
        __s24local5.head.execute(__s24local0);
        __s24local5 = __s24local5.tail;
      }
    }
  };
  OnceSignal.prototype.registerListener = function (__s35param0, __s35param1 = false) {
    if (this.registrationPossible(__s35param0, __s35param1)) {
      var __s35local0 = new __dep_class_Slot.Slot(__s35param0, this, __s35param1);
      this.slots = this.slots.prepend(__s35local0);
      return __s35local0;
    }
    return this.slots.find(__s35param0);
  };
  OnceSignal.prototype.registrationPossible = function (__s38param0, __s38param1) {
    if (!this.slots.nonEmpty) {
      return true;
    }
    var __s38local0 = this.slots.find(__s38param0);
    if (!__s38local0) {
      return true;
    }
    if (__s38local0.once != __s38param1) {
      throw new Error("You cannot addOnce() then add() the same listener without removing the relationship first.");
    }
    return false;
  };
  return OnceSignal;
}();
exports.OnceSignal = __s0local0;

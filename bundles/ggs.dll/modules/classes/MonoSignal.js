Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_Slot = require("gge-module:class_Slot");
var __s0local0 = function () {
  function MonoSignal() {
    var __s3local0 = [];
    for (var __s3local1 = 0; __s3local1 < arguments.length; __s3local1++) {
      __s3local0[__s3local1] = arguments[__s3local1];
    }
    this.valueClasses = __s3local0.length == 1 && __s3local0[0] instanceof Array ? __s3local0[0] : __s3local0;
  }
  Object.defineProperty(MonoSignal.prototype, "valueClasses", {
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
  Object.defineProperty(MonoSignal.prototype, "numListeners", {
    get: function () {
      if (this.slot) {
        return 1;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  MonoSignal.prototype.add = function (__s18param0) {
    return this.registerListener(__s18param0);
  };
  MonoSignal.prototype.addOnce = function (__s20param0) {
    return this.registerListener(__s20param0, true);
  };
  MonoSignal.prototype.remove = function (__s22param0) {
    if (this.slot && this.slot.listener == __s22param0) {
      var __s22local0 = this.slot;
      this.slot = null;
      return __s22local0;
    }
    return null;
  };
  MonoSignal.prototype.removeAll = function () {
    if (this.slot) {
      this.slot.remove();
    }
  };
  MonoSignal.prototype.dispatch = function () {
    var __s28local0 = [];
    for (var __s28local1 = 0; __s28local1 < arguments.length; __s28local1++) {
      __s28local0[__s28local1] = arguments[__s28local1];
    }
    var __s28local2 = this._valueClasses.length;
    var __s28local3 = __s28local0.length;
    if (__s28local3 < __s28local2) {
      throw new Error("Incorrect number of arguments. Expected at least " + __s28local2 + " but received " + __s28local3 + ".");
    }
    for (var __s28local4 = 0; __s28local4 < __s28local2; __s28local4++) {
      if (__s28local0[__s28local4] !== null && !(__s28local0[__s28local4] instanceof this._valueClasses[__s28local4]) && __s28local0[__s28local4].constructor !== this._valueClasses[__s28local4]) {
        throw new Error("Value object <" + __s28local0[__s28local4] + "> is not an instance of <" + this._valueClasses[__s28local4] + ">.");
      }
    }
    if (this.slot) {
      this.slot.execute(__s28local0);
    }
  };
  MonoSignal.prototype.registerListener = function (__s37param0, __s37param1 = false) {
    if (this.slot) {
      throw new Error("You cannot add or addOnce with a listener already added, remove the current listener first.");
    }
    return this.slot = new __dep_class_Slot.Slot(__s37param0, this, __s37param1);
  };
  return MonoSignal;
}();
exports.MonoSignal = __s0local0;

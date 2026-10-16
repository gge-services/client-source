Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function Slot(__s3param0, __s3param1, __s3param2 = false, __s3param3 = 0) {
    this._enabled = true;
    this._once = false;
    this._priority = 0;
    this._listener = __s3param0;
    this._once = __s3param2;
    this._signal = __s3param1;
    this._priority = __s3param3;
    this.verifyListener(__s3param0);
  }
  Slot.prototype.execute0 = function () {
    if (this._enabled) {
      if (this._once) {
        this.remove();
      }
      if (this._params && this._params.length) {
        this._listener.apply(null, this._params);
      } else {
        this._listener();
      }
    }
  };
  Slot.prototype.execute1 = function (__s11param0) {
    if (this._enabled) {
      if (this._once) {
        this.remove();
      }
      if (this._params && this._params.length) {
        this._listener.apply(null, [__s11param0].concat(this._params));
      } else {
        this._listener(__s11param0);
      }
    }
  };
  Slot.prototype.execute = function (__s17param0) {
    if (this._enabled) {
      if (this._once) {
        this.remove();
      }
      if (this._params && this._params.length) {
        __s17param0 = __s17param0.concat(this._params);
      }
      var __s17local0 = __s17param0.length;
      if (__s17local0 == 0) {
        this._listener();
      } else if (__s17local0 == 1) {
        this._listener(__s17param0[0]);
      } else if (__s17local0 == 2) {
        this._listener(__s17param0[0], __s17param0[1]);
      } else if (__s17local0 == 3) {
        this._listener(__s17param0[0], __s17param0[1], __s17param0[2]);
      } else {
        this._listener.apply(null, __s17param0);
      }
    }
  };
  Object.defineProperty(Slot.prototype, "listener", {
    get: function () {
      return this._listener;
    },
    set: function (__s29param0) {
      if (__s29param0 == null) {
        throw new Error("Given listener is null.\nDid you want to set enabled to false instead?");
      }
      this.verifyListener(__s29param0);
      this._listener = __s29param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Slot.prototype, "once", {
    get: function () {
      return this._once;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Slot.prototype, "priority", {
    get: function () {
      return this._priority;
    },
    enumerable: true,
    configurable: true
  });
  Slot.prototype.toString = function () {
    return "[Slot listener: " + this._listener + ", once: " + this._once + ", priority: " + this._priority + ", enabled: " + this._enabled + "]";
  };
  Object.defineProperty(Slot.prototype, "enabled", {
    get: function () {
      return this._enabled;
    },
    set: function (__s40param0) {
      this._enabled = __s40param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Slot.prototype, "params", {
    get: function () {
      return this._params;
    },
    set: function (__s44param0) {
      this._params = __s44param0;
    },
    enumerable: true,
    configurable: true
  });
  Slot.prototype.remove = function () {
    this._signal.remove(this._listener);
  };
  Slot.prototype.verifyListener = function (__s48param0) {
    if (__s48param0 == null) {
      throw new Error("Given listener is null.");
    }
    if (this._signal == null) {
      throw new Error("Internal signal reference has not been set yet.");
    }
  };
  return Slot;
}();
exports.Slot = __s0local0;

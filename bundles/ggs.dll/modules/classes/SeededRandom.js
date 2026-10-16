Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.BitmapData;
var __s0local1 = require("gge-module:exact_1c3005d32a8a2e95").create();
var __s0local2 = function () {
  function SeededRandom(__s3param0 = 0) {
    this._seed = 0;
    this._pointer = 0;
    this.seedInvalid = true;
    this._seed = __s3param0;
    this.bmpd = new __s0local0(1000, 200);
  }
  Object.defineProperty(SeededRandom, "instance", {
    get: function () {
      if (SeededRandom._instance == null) {
        SeededRandom._instance = new SeededRandom();
      }
      return SeededRandom._instance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeededRandom, "seed", {
    get: function () {
      return __s0local1.seed;
    },
    set: function (__s10param0) {
      __s0local1.seed(__s10param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeededRandom, "pointer", {
    get: function () {
      return SeededRandom.instance.pointer;
    },
    set: function (__s14param0) {
      SeededRandom.instance.pointer = __s14param0;
    },
    enumerable: true,
    configurable: true
  });
  SeededRandom.random = function () {
    return SeededRandom.instance.random();
  };
  SeededRandom.float = function (__s18param0, __s18param1 = NaN) {
    return SeededRandom.instance.float(__s18param0, __s18param1);
  };
  SeededRandom.boolean = function (__s20param0 = 0.5) {
    return SeededRandom.instance.boolean(__s20param0);
  };
  SeededRandom.sign = function (__s22param0 = 0.5) {
    return SeededRandom.instance.sign(__s22param0);
  };
  SeededRandom.bit = function (__s24param0 = 0.5) {
    return SeededRandom.instance.bit(__s24param0);
  };
  SeededRandom.integer = function (__s26param0, __s26param1 = NaN) {
    return SeededRandom.instance.integer(__s26param0, __s26param1);
  };
  SeededRandom.reset = function () {};
  Object.defineProperty(SeededRandom.prototype, "seed", {
    get: function () {
      return this._seed;
    },
    set: function (__s32param0) {
      if (__s32param0 != this._seed) {
        this.seedInvalid = true;
        this._pointer = 0;
      }
      this._seed = __s32param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeededRandom.prototype, "pointer", {
    get: function () {
      return this._pointer;
    },
    set: function (__s37param0) {
      this._pointer = __s37param0;
    },
    enumerable: true,
    configurable: true
  });
  SeededRandom.prototype.random = function () {
    return __s0local1.random();
  };
  SeededRandom.prototype.float = function (__s41param0, __s41param1 = NaN) {
    if (isNaN(__s41param1)) {
      __s41param1 = __s41param0;
      __s41param0 = 0;
    }
    return __s0local1.floatBetween(__s41param0, __s41param1);
  };
  SeededRandom.prototype.boolean = function (__s44param0 = 0.5) {
    return SeededRandom.random() < __s44param0;
  };
  SeededRandom.prototype.sign = function (__s46param0 = 0.5) {
    if (SeededRandom.random() < __s46param0) {
      return 1;
    } else {
      return -1;
    }
  };
  SeededRandom.prototype.bit = function (__s50param0 = 0.5) {
    if (SeededRandom.random() < __s50param0) {
      return 1;
    } else {
      return 0;
    }
  };
  SeededRandom.prototype.integer = function (__s54param0, __s54param1 = NaN) {
    if (isNaN(__s54param1)) {
      __s54param1 = __s54param0;
      __s54param0 = 0;
    }
    return __s0local1.intBetween(__s54param0, __s54param1);
  };
  SeededRandom.prototype.reset = function () {
    this._pointer = 0;
  };
  return SeededRandom;
}();
exports.SeededRandom = __s0local2;

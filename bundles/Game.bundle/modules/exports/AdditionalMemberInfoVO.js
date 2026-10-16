Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AdditionalMemberInfoVO() {
    this._playerId = -1;
    this._givenC1 = 0;
    this._givenC2 = 0;
    this._givenResources = 0;
    this._loginActivity = 0;
    this._capitalCount = 0;
    this._metropolCount = 0;
    this._kingstowerCount = 0;
    this._monumentCount = 0;
    this._laboratoryCount = 0;
    this._dailyFame = 0;
  }
  AdditionalMemberInfoVO.prototype.parseAMI = function (__s5param0) {
    this._playerId = __dep_exact_f855840627e6e145.int(__s5param0.shift());
    this._givenC1 = __dep_exact_f855840627e6e145.int(__s5param0.shift());
    this._givenC2 = __dep_exact_f855840627e6e145.int(__s5param0.shift());
    this._givenResources = __dep_exact_f855840627e6e145.int(__s5param0.shift());
    this._loginActivity = __dep_exact_f855840627e6e145.int(__s5param0.shift());
    this._capitalCount = __dep_exact_f855840627e6e145.int(__s5param0.shift());
    this._metropolCount = __dep_exact_f855840627e6e145.int(__s5param0.shift());
    this._kingstowerCount = __dep_exact_f855840627e6e145.int(__s5param0.shift());
    this._monumentCount = __dep_exact_f855840627e6e145.int(__s5param0.shift());
    this._laboratoryCount = __dep_exact_f855840627e6e145.int(__s5param0.shift());
    this._dailyFame = __dep_exact_f855840627e6e145.int(__s5param0.shift());
  };
  Object.defineProperty(AdditionalMemberInfoVO.prototype, "hasLandmark", {
    get: function () {
      return this.capitalCount > 0 || this.metropolCount > 0 || this.kingstowerCount > 0 || this.monumentCount > 0 || this.laboratoryCount > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdditionalMemberInfoVO.prototype, "playerId", {
    get: function () {
      return this._playerId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdditionalMemberInfoVO.prototype, "givenC1", {
    get: function () {
      return this._givenC1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdditionalMemberInfoVO.prototype, "givenC2", {
    get: function () {
      return this._givenC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdditionalMemberInfoVO.prototype, "givenResources", {
    get: function () {
      return this._givenResources;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdditionalMemberInfoVO.prototype, "loginActivity", {
    get: function () {
      return this._loginActivity;
    },
    set: function (__s19param0) {
      this._loginActivity = __s19param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdditionalMemberInfoVO.prototype, "capitalCount", {
    get: function () {
      return this._capitalCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdditionalMemberInfoVO.prototype, "metropolCount", {
    get: function () {
      return this._metropolCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdditionalMemberInfoVO.prototype, "kingstowerCount", {
    get: function () {
      return this._kingstowerCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdditionalMemberInfoVO.prototype, "monumentCount", {
    get: function () {
      return this._monumentCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdditionalMemberInfoVO.prototype, "laboratoryCount", {
    get: function () {
      return this._laboratoryCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdditionalMemberInfoVO.prototype, "dailyFame", {
    get: function () {
      return this._dailyFame;
    },
    set: function (__s33param0) {
      this._dailyFame = __s33param0;
    },
    enumerable: true,
    configurable: true
  });
  return AdditionalMemberInfoVO;
}();
exports.AdditionalMemberInfoVO = __s0local0;
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");

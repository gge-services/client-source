Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AreaDataStorageItem(__s3param0) {
    this._amount = 0;
    this._maxAmount = 0;
    this._resourceType = __dep_export_CollectableEnum.CollectableEnum.UNKNOWN;
    this._fieldEfficiency = -1;
    this._productionPerSec = 0;
    this._boostFactor = 1;
    this._resourceType = __s3param0;
  }
  AreaDataStorageItem.prototype.parseGPA = function (__s5param0) {
    var __s5local0 = this._resourceType.serverKey;
    this._productionPerSec = __s5param0["D" + __s5local0] / 10;
    this._maxAmount = __s5param0["MR" + __s5local0];
    this._boostFactor = __s5param0[__s5local0 + "M"] / 100;
  };
  AreaDataStorageItem.prototype.parseGCA = function (__s7param0) {
    this._fieldEfficiency = __dep_exact_f855840627e6e145.int(__s7param0["RA" + this._resourceType.serverKey]);
  };
  AreaDataStorageItem.prototype.parseGRC = function (__s9param0) {
    if (__s9param0[this._resourceType.serverKey] != null) {
      var __s9local0 = __s9param0[this._resourceType.serverKey];
      this._amount = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(__s9local0));
    }
  };
  AreaDataStorageItem.prototype.timeTillHasEnoughResources = function (__s12param0) {
    var __s12local0 = (__s12param0 - this._amount) / this._productionPerSec;
    return __dep_exact_f855840627e6e145.int(Math.max(__s12local0 * 60 * 60, 0));
  };
  Object.defineProperty(AreaDataStorageItem.prototype, "filledInPercent", {
    get: function () {
      return Math.max(0, Math.min(1, this._amount / this._maxAmount));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataStorageItem.prototype, "isFull", {
    get: function () {
      return this._amount >= this._maxAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataStorageItem.prototype, "freeSpace", {
    get: function () {
      return Math.max(0, this._maxAmount - this._amount);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataStorageItem.prototype, "fieldEfficiency", {
    get: function () {
      return this._fieldEfficiency;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataStorageItem.prototype, "amount", {
    get: function () {
      return this._amount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataStorageItem.prototype, "maxAmount", {
    get: function () {
      return this._maxAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataStorageItem.prototype, "productionPerSec", {
    get: function () {
      return this._productionPerSec;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataStorageItem.prototype, "boostFactor", {
    get: function () {
      return this._boostFactor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataStorageItem.prototype, "resourceType", {
    get: function () {
      return this._resourceType;
    },
    enumerable: true,
    configurable: true
  });
  return AreaDataStorageItem;
}();
exports.AreaDataStorageItem = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");

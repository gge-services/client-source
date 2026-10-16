Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ResourceCartData() {
    this._resourceType = __dep_export_CollectableEnum.CollectableEnum.UNKNOWN;
    this._amount = 0;
    this._receivedRemainingSeconds = 0;
    this._startTimestamp = NaN;
  }
  ResourceCartData.prototype.parseRciItem = function (__s5param0) {
    this._resourceType = __dep_export_CastleResourceCartsData.CastleResourceCartsData.getEnumItemFromIndex(__s5param0.RT);
    this._amount = __dep_exact_f855840627e6e145.int(__s5param0.A);
    this._startTimestamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    this._receivedRemainingSeconds = __s5param0.RS;
  };
  Object.defineProperty(ResourceCartData.prototype, "isCollectable", {
    get: function () {
      return this.secondsUntilCollect <= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceCartData.prototype, "secondsUntilCollect", {
    get: function () {
      var __s9local0 = __dep_export_CachedTimer.CachedTimer.getCachedTimer() * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
      return this._receivedRemainingSeconds - (__s9local0 - this._startTimestamp);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceCartData.prototype, "resourceType", {
    get: function () {
      return this._resourceType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceCartData.prototype, "amount", {
    get: function () {
      return this._amount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceCartData.prototype, "totalDuration", {
    get: function () {
      return __dep_exact_26a421b704832cff.ResourceCartConst.CHARGETIME[__dep_export_CastleResourceCartsData.CastleResourceCartsData.getIndexFromEnumItem(this.resourceType)];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceCartData.prototype, "receivedRemainingSeconds", {
    get: function () {
      return this._receivedRemainingSeconds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceCartData.prototype, "startTimestamp", {
    get: function () {
      return this._startTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  return ResourceCartData;
}();
exports.ResourceCartData = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleResourceCartsData = require("gge-module:export_CastleResourceCartsData");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");

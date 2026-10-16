Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_SubscriptionPackageEnum = require("gge-module:export_SubscriptionPackageEnum");
var __s0local0 = function () {
  function SubscriptionActivePackageVO() {
    this._serverId = -1;
    this._endTimestamp = 0;
    this._endTimestampWithGracePeriod = 0;
    this._type = __dep_export_SubscriptionPackageEnum.SubscriptionPackageEnum.UNKNOWN;
  }
  SubscriptionActivePackageVO.prototype.parseServerObject = function (__s5param0) {
    this._serverId = __dep_exact_f855840627e6e145.int(__s5param0.STID);
    this._endTimestamp = __dep_export_CachedTimer.CachedTimer.getFreshTimer() + __s5param0.RS * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this._endTimestampWithGracePeriod = __dep_export_CachedTimer.CachedTimer.getFreshTimer() + __s5param0.RSGP * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this._type = __dep_export_SubscriptionPackageEnum.SubscriptionPackageEnum.getTypeByServerId(this._serverId);
  };
  SubscriptionActivePackageVO.prototype.isActive = function () {
    return this.getRemainingSecondWithGracePeriod() > 0;
  };
  SubscriptionActivePackageVO.prototype.getRemainingSeconds = function () {
    return __dep_exact_f855840627e6e145.int((this._endTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
  };
  SubscriptionActivePackageVO.prototype.getRemainingSecondWithGracePeriod = function () {
    return __dep_exact_f855840627e6e145.int((this._endTimestampWithGracePeriod - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
  };
  Object.defineProperty(SubscriptionActivePackageVO.prototype, "serverId", {
    get: function () {
      return this._serverId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SubscriptionActivePackageVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SubscriptionActivePackageVO.prototype, "endTimestamp", {
    get: function () {
      return this._endTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SubscriptionActivePackageVO.prototype, "endTimestampWithGracePeriod", {
    get: function () {
      return this._endTimestampWithGracePeriod;
    },
    enumerable: true,
    configurable: true
  });
  return SubscriptionActivePackageVO;
}();
exports.SubscriptionActivePackageVO = __s0local0;

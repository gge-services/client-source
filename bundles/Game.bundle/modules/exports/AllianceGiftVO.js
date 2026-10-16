Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AllianceGiftVO() {
    this._id = 0;
    this._expiredTimeStamp = NaN;
    this._collectInProgress = false;
  }
  AllianceGiftVO.prototype.parseArray = function (__s5param0) {
    if (__s5param0) {
      this._reward = __dep_export_CollectableManager.CollectableManager.parser.s2cParamList.createList([__s5param0]).getFirstItemOfType(__dep_export_CollectableEnum.CollectableEnum.ALLIANCE_GIFT);
      this._expiredTimeStamp = __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s5param0[2] * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
      this._id = __dep_exact_f855840627e6e145.int(__s5param0[3]);
    }
  };
  Object.defineProperty(AllianceGiftVO.prototype, "reward", {
    get: function () {
      return this._reward;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceGiftVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceGiftVO.prototype, "expiredTimeStamp", {
    get: function () {
      return this._expiredTimeStamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceGiftVO.prototype, "remainingTimeInSeconds", {
    get: function () {
      return (this._expiredTimeStamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceGiftVO.prototype, "collectInProgress", {
    get: function () {
      return this._collectInProgress;
    },
    set: function (__s18param0) {
      this._collectInProgress = __s18param0;
    },
    enumerable: true,
    configurable: true
  });
  return AllianceGiftVO;
}();
exports.AllianceGiftVO = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");

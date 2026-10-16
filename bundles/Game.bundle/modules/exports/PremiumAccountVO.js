Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __s0local0 = function () {
  function PremiumAccountVO() {
    this._isActive = false;
    this._remainingTime = 0;
    this._accountType = -1;
    this._startTime = 0;
    this._isOutrun = false;
  }
  PremiumAccountVO.prototype.parseServerInfo = function (__s5param0) {
    this._remainingTime = __s5param0.PA * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    this._startTime = __dep_export_CachedTimer.CachedTimer.getCachedTimer();
    this._isActive = this._remainingTime > 0;
  };
  Object.defineProperty(PremiumAccountVO.prototype, "isActive", {
    get: function () {
      return this._remainingTime - (__dep_export_CachedTimer.CachedTimer.getCachedTimer() - this._startTime) > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumAccountVO.prototype, "remainingTimeInSeconds", {
    get: function () {
      if (this.isActive) {
        return (this._remainingTime - (__dep_export_CachedTimer.CachedTimer.getCachedTimer() - this._startTime)) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumAccountVO.prototype, "premiumAccountType", {
    get: function () {
      if (this.isActive) {
        return this._accountType;
      } else {
        return -1;
      }
    },
    set: function (__s17param0) {
      this._accountType = __s17param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumAccountVO.prototype, "factor_C2", {
    get: function () {
      return __dep_exact_26a421b704832cff.PremiumConst.FACTOR_C2[this._accountType];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumAccountVO.prototype, "factor_C1", {
    get: function () {
      return __dep_exact_26a421b704832cff.PremiumConst.FACTOR_C1[this._accountType];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumAccountVO.prototype, "bribe_C2_Factor", {
    get: function () {
      return __dep_exact_26a421b704832cff.PremiumConst.FACTOR_BRIBE_TAX_C2[this._accountType];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumAccountVO.prototype, "isOutrun", {
    get: function () {
      return this._isOutrun;
    },
    set: function (__s27param0) {
      this._isOutrun = __s27param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumAccountVO.prototype, "level", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumAccountVO.prototype, "bonusValue", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  return PremiumAccountVO;
}();
exports.PremiumAccountVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDefaultBoosterDataVO", "IBoosterDataVO");

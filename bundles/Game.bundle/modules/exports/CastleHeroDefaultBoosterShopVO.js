Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleHeroBoosterShopVO = require("gge-module:export_CastleHeroBoosterShopVO");
var __s0local0 = function (__s1param0) {
  function CastleHeroDefaultBoosterShopVO(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = this;
    __s3local0._endTime = NaN;
    __s3local0._isPermanentBooster = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleHeroDefaultBoosterShopVO, __s1param0);
  CastleHeroDefaultBoosterShopVO.prototype.reset = function () {
    __s1param0.prototype.reset.call(this);
    this._endTime = 0;
    this._isPermanentBooster = false;
  };
  CastleHeroDefaultBoosterShopVO.prototype.parseServerInfo = function (__s7param0) {
    var __s7local0 = __dep_exact_f855840627e6e145.int(__s7param0.RT);
    if (__s7local0 == __dep_exact_26a421b704832cff.BoosterConst.PERMANENT_BOOSTER_DURATION) {
      this._isPermanentBooster = true;
    } else {
      this._endTime = Math.max(0, __dep_export_CachedTimer.CachedTimer.getCachedTimer() + __s7local0 * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
    }
    this.level = __s7param0.L;
    if (typeof __s7param0.PC == "number") {
      this._continuousPurchaseCount = __s7param0.PC;
    }
  };
  Object.defineProperty(CastleHeroDefaultBoosterShopVO.prototype, "remainingTimeInSeconds", {
    get: function () {
      return Math.max(-1, (this._endTime - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) * __dep_export_ClientConstTime.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroDefaultBoosterShopVO.prototype, "endTime", {
    get: function () {
      return this._endTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroDefaultBoosterShopVO.prototype, "isActive", {
    get: function () {
      if (this.isPermanentBooster) {
        return this.level > 0;
      } else {
        return this.remainingTimeInSeconds >= 0;
      }
    },
    set: function (__s20param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroBoosterShopVO.CastleHeroBoosterShopVO.prototype, "isActive").set.call(this, __s20param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroDefaultBoosterShopVO.prototype, "isPermanentBooster", {
    get: function () {
      return this._isPermanentBooster;
    },
    set: function (__s24param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroBoosterShopVO.CastleHeroBoosterShopVO.prototype, "isPermanentBooster").set.call(this, __s24param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroDefaultBoosterShopVO.prototype, "isMaxLevel", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  return CastleHeroDefaultBoosterShopVO;
}(__dep_export_CastleHeroBoosterShopVO.CastleHeroBoosterShopVO);
exports.CastleHeroDefaultBoosterShopVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IPremiumMarketShopVO", "IDefaultBoosterDataVO", "IBoosterDataVO");

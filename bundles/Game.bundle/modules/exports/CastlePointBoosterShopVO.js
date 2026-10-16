Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleHeroDefaultBoosterShopVO = require("gge-module:export_CastleHeroDefaultBoosterShopVO");
var __s0local0 = function (__s1param0) {
  function CastlePointBoosterShopVO(__s3param0) {
    var __s3local0 = this;
    __s3local0._bonusPercentage = 0;
    __s3local0._pointBoosterID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, "", "", 0, "") || this)._pointBoosterID = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePointBoosterShopVO, __s1param0);
  CastlePointBoosterShopVO.prototype.reset = function () {
    __s1param0.prototype.reset.call(this);
    this._bonusPercentage = 0;
  };
  CastlePointBoosterShopVO.prototype.parseServerInfo = function (__s7param0) {
    __s1param0.prototype.parseServerInfo.call(this, __s7param0);
    this._bonusPercentage = __dep_exact_f855840627e6e145.int(__s7param0.B);
  };
  Object.defineProperty(CastlePointBoosterShopVO.prototype, "id", {
    get: function () {
      return this._pointBoosterID;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "id").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePointBoosterShopVO.prototype, "isVisible", {
    get: function () {
      return false;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "isVisible").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePointBoosterShopVO.prototype, "canBeBought", {
    get: function () {
      return false;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "canBeBought").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePointBoosterShopVO.prototype, "hasRebuyDiscount", {
    get: function () {
      return false;
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "hasRebuyDiscount").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePointBoosterShopVO.prototype, "isExtendable", {
    get: function () {
      return false;
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "isExtendable").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePointBoosterShopVO.prototype, "bonusPercentage", {
    get: function () {
      return this._bonusPercentage;
    },
    enumerable: true,
    configurable: true
  });
  return CastlePointBoosterShopVO;
}(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO);
exports.CastlePointBoosterShopVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IPremiumMarketShopVO", "IDefaultBoosterDataVO", "IBoosterDataVO");

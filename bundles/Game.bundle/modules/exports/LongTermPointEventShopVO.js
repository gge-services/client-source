Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleHeroDefaultBoosterShopVO = require("gge-module:export_CastleHeroDefaultBoosterShopVO");
var __s0local0 = function (__s1param0) {
  function LongTermPointEventShopVO() {
    var __s3local0 = this;
    __s3local0._bonusPercentage = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, "", "", 0, "") || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LongTermPointEventShopVO, __s1param0);
  LongTermPointEventShopVO.prototype.reset = function () {
    __s1param0.prototype.reset.call(this);
    this._bonusPercentage = 0;
  };
  LongTermPointEventShopVO.prototype.parseServerInfo = function (__s7param0) {
    __s1param0.prototype.parseServerInfo.call(this, __s7param0);
    this._bonusPercentage = __dep_exact_f855840627e6e145.int(__s7param0.B);
  };
  Object.defineProperty(LongTermPointEventShopVO.prototype, "id", {
    get: function () {
      return __dep_exact_26a421b704832cff.BoosterConst.LONGTERM_POINT_EVENT_BOOST_ID;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "id").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventShopVO.prototype, "isVisible", {
    get: function () {
      return false;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "isVisible").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventShopVO.prototype, "canBeBought", {
    get: function () {
      return false;
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "canBeBought").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventShopVO.prototype, "hasRebuyDiscount", {
    get: function () {
      return false;
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "hasRebuyDiscount").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventShopVO.prototype, "isExtendable", {
    get: function () {
      return false;
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "isExtendable").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventShopVO.prototype, "bonusPercentage", {
    get: function () {
      return this._bonusPercentage;
    },
    enumerable: true,
    configurable: true
  });
  return LongTermPointEventShopVO;
}(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO);
exports.LongTermPointEventShopVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IPremiumMarketShopVO", "IDefaultBoosterDataVO", "IBoosterDataVO");

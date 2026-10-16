Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastlePremiumMarketShopVO = require("gge-module:export_CastlePremiumMarketShopVO");
var __s0local0 = function (__s1param0) {
  function CastleHeroBoosterShopVO(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = this;
    __s3local0._level = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param1, [__dep_export_CastlePremiumMarketCollectionData.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_HERO], __s3param2) || this)._heroName = __s3param3;
    __s3local0._level = 0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleHeroBoosterShopVO, __s1param0);
  CastleHeroBoosterShopVO.prototype.reset = function () {
    __s1param0.prototype.reset.call(this);
    this._level = 0;
  };
  Object.defineProperty(CastleHeroBoosterShopVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    set: function (__s9param0) {
      this._level = __s9param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroBoosterShopVO.prototype, "costString", {
    get: function () {
      if (this.isActive) {
        return String(Math.ceil(this.finalCostsC2));
      } else {
        return Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "costString").get.call(this);
      }
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "costString").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroBoosterShopVO.prototype, "finalCostsC2", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(this.baseCosts, this.hasRebuyDiscount, __dep_export_CastleModel.CastleModel.boosterSaleData.getDiscount(this.id) * 0.01);
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "finalCostsC2").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroBoosterShopVO.prototype, "rebuyDiscount", {
    get: function () {
      return __dep_exact_26a421b704832cff.BoosterConst.DISCOUNT_FACTOR * 100;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroBoosterShopVO.prototype, "rebuyDiscountString", {
    get: function () {
      return String(this.rebuyDiscount);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroBoosterShopVO.prototype, "hasVisualBonus", {
    get: function () {
      return true;
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "hasVisualBonus").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroBoosterShopVO.prototype, "hasVisualTimeWhenNotActive", {
    get: function () {
      return true;
    },
    set: function (__s31param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenNotActive").set.call(this, __s31param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroBoosterShopVO.prototype, "cantBeBoughtButtonToolTip", {
    get: function () {
      return "noAvailableOffer";
    },
    set: function (__s35param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "cantBeBoughtButtonToolTip").set.call(this, __s35param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroBoosterShopVO.prototype, "id", {
    get: function () {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroBoosterShopVO.prototype, "heroName", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text(this._heroName);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroBoosterShopVO.prototype, "nonLocalizedHeroName", {
    get: function () {
      return this._heroName;
    },
    enumerable: true,
    configurable: true
  });
  return CastleHeroBoosterShopVO;
}(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO);
exports.CastleHeroBoosterShopVO = __s0local0;
var __dep_export_CastlePremiumMarketCollectionData = require("gge-module:export_CastlePremiumMarketCollectionData");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IPremiumMarketShopVO");

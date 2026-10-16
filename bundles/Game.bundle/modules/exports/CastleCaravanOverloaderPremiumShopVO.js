Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CharacterHelper = require("gge-module:export_CharacterHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleHeroDefaultBoosterShopVO = require("gge-module:export_CastleHeroDefaultBoosterShopVO");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastleCaravanOverloaderPremiumShopVO() {
    return __s1param0.call(this, "dialog_marketCaravanCapacity_title", "dialog_marketCaravanCapacity_copy", 1, "caravanGuy") || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCaravanOverloaderPremiumShopVO, __s1param0);
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "bonusValue", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.caravanBoostAndCosts.get(this.level)[0];
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "bonusValue").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "bonusValueDifference", {
    get: function () {
      return this.bonusValueForNextLevel - this.bonusValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "bonusValueForNextLevel", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.boostData.getCaravanBoosterMaxLevel() >= this.level + 1) {
        return __dep_export_CastleModel.CastleModel.boostData.caravanBoostAndCosts.get(this.level + 1)[0];
      } else {
        return -1;
      }
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "bonusValueForNextLevel").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "singleCarriageCapacityForCurrentLevel", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.getResourcesTransportablePerCarriageIgnoringResearch(__dep_export_CastleModel.CastleModel.boostData.caravanOverloaderVO.level);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "singleCarriageCapacityForNextLevel", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.boostData.getCaravanBoosterMaxLevel() >= __dep_export_CastleModel.CastleModel.boostData.caravanOverloaderVO.level + 1) {
        return __dep_export_CastleModel.CastleModel.boostData.getResourcesTransportablePerCarriageIgnoringResearch(__dep_export_CastleModel.CastleModel.boostData.caravanOverloaderVO.level + 1);
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "bonusText", {
    get: function () {
      return [__dep_export_CastleModel.CastleModel.boostData.getResourcesTransportablePerCarriageIgnoringResearch(__dep_export_CastleModel.CastleModel.boostData.caravanOverloaderVO.level).toString(), null];
    },
    set: function (__s25param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "bonusText").set.call(this, __s25param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "bonusTextForNextLevel", {
    get: function () {
      return [__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD, [this.bonusValueDifference]];
    },
    set: function (__s29param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "bonusTextForNextLevel").set.call(this, __s29param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "listSortPriority", {
    get: function () {
      return 10;
    },
    set: function (__s33param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "listSortPriority").set.call(this, __s33param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleCaravanOverloaderPremiumShopVO.prototype.clickedBuyButton = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleBuyCaravanOverloaderDialog.CastleBuyCaravanOverloaderDialog);
  };
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "bonusIconFrame", {
    get: function () {
      return 9;
    },
    set: function (__s39param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "bonusIconFrame").set.call(this, __s39param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "baseIconFrame", {
    get: function () {
      return 1;
    },
    set: function (__s43param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "baseIconFrame").set.call(this, __s43param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "offsetIcon", {
    get: function () {
      return new __s0local1(-3, -5);
    },
    set: function (__s47param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "offsetIcon").set.call(this, __s47param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleCaravanOverloaderPremiumShopVO.prototype.createVisualMovieClip = function () {
    var __s49local0 = new __s0local0();
    var __s49local1 = __dep_export_CharacterHelper.CharacterHelper.createCharacterBig(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_MERCHANT, __s49local0, -1, -1, false, this.bindFunction(this.onLoadedIcon));
    if (!__s49local1.isLoaded) {
      __s49local0.visible = false;
    }
    __s49local0.addChild(__s49local1);
    return __s49local0;
  };
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "bonusToolTip", {
    get: function () {
      return "dialog_currentCapacity_copy";
    },
    set: function (__s54param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "bonusToolTip").set.call(this, __s54param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "nextBonusToolTip", {
    get: function () {
      return {
        t: "dialog_marketCapacityIncrease_tooltip",
        p: [this.bonusValueDifference]
      };
    },
    set: function (__s58param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "nextBonusToolTip").set.call(this, __s58param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "isMaxLevel", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.getCaravanBoosterMaxLevel() == this.level;
    },
    set: function (__s62param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "isMaxLevel").set.call(this, __s62param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "finalCostsC2", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_export_CastleModel.CastleModel.boostData.getCostsForNextCaravanLevel(this.level), this.hasRebuyDiscount, __dep_export_CastleModel.CastleModel.boosterSaleData.getDiscount(this.id) * 0.01);
    },
    set: function (__s66param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "finalCostsC2").set.call(this, __s66param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "isVisible", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.getCaravanBoosterMaxLevel() > this.level;
    },
    set: function (__s70param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "isVisible").set.call(this, __s70param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "id", {
    get: function () {
      return __dep_exact_26a421b704832cff.BoosterConst.CARAVAN_OVERLOADER;
    },
    set: function (__s74param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "id").set.call(this, __s74param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "isExtendable", {
    get: function () {
      return false;
    },
    set: function (__s78param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "isExtendable").set.call(this, __s78param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "baseCosts", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.getCostsForNextCaravanLevel(this.level);
    },
    set: function (__s82param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "baseCosts").set.call(this, __s82param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "isPermanentBooster", {
    get: function () {
      return true;
    },
    set: function (__s86param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "isPermanentBooster").set.call(this, __s86param0);
    },
    enumerable: true,
    configurable: true
  });
  return CastleCaravanOverloaderPremiumShopVO;
}(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO);
exports.CastleCaravanOverloaderPremiumShopVO = __s0local2;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleBuyCaravanOverloaderDialog = require("gge-module:export_CastleBuyCaravanOverloaderDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "IPremiumMarketShopVO", "IDefaultBoosterDataVO", "IBoosterDataVO");

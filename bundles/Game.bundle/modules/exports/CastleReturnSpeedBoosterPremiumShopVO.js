Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleHeroDefaultBoosterShopVO = require("gge-module:export_CastleHeroDefaultBoosterShopVO");
var __s0local0 = createjs.MovieClip;
var __s0local1 = function (__s1param0) {
  function CastleReturnSpeedBoosterPremiumShopVO() {
    return __s1param0.call(this, "dialog_marketReturnSpeed_title", "dialog_marketReturnSpeed_desc", 990, "returnSpeedGuy") || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleReturnSpeedBoosterPremiumShopVO, __s1param0);
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "bonusValue", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.getBoostForReturningSpeedLevel(this.level);
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "bonusValue").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "bonusValueDifference", {
    get: function () {
      return this.bonusValueForNextLevel - this.bonusValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "bonusValueForNextLevel", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.getBoostForReturningSpeedLevel(this.level + 1);
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "bonusValueForNextLevel").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleReturnSpeedBoosterPremiumShopVO.prototype.createVisualMovieClip = function () {
    var __s15local0 = new __s0local0();
    var __s15local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("ReturnSpeedBoosterIcon", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("ReturnSpeedBoosterIcon"), null, 0, false);
    __s15local0.addChild(__s15local1);
    __s15local1.doWhenLoaded(this.bindFunction(this.onLoadedIcon));
    return __s15local0;
  };
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "listSortPriority", {
    get: function () {
      return 80;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "bonusIconFrame", {
    get: function () {
      return 10;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "bonusIconFrame").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "baseIconFrame", {
    get: function () {
      return 2;
    },
    set: function (__s25param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "baseIconFrame").set.call(this, __s25param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "bonusToolTip", {
    get: function () {
      return "dialog_marketCurrentSpeed_tooltip";
    },
    set: function (__s29param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "bonusToolTip").set.call(this, __s29param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "nextBonusToolTip", {
    get: function () {
      return {
        t: "dialog_marketFutureSpeed_tooltip",
        p: [this.bonusValueDifference]
      };
    },
    set: function (__s33param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "nextBonusToolTip").set.call(this, __s33param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "isMaxLevel", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.getReturningSpeedBoosterMaxLevel() == this.level;
    },
    set: function (__s37param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "isMaxLevel").set.call(this, __s37param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "finalCostsC2", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(__dep_export_CastleModel.CastleModel.boostData.getCostsForNextReturningSpeedLevel(this.level), this.hasRebuyDiscount, __dep_export_CastleModel.CastleModel.boosterSaleData.getDiscount(this.id) * 0.01);
    },
    set: function (__s41param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "finalCostsC2").set.call(this, __s41param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "baseCosts", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.getCostsForNextReturningSpeedLevel(this.level);
    },
    set: function (__s45param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "baseCosts").set.call(this, __s45param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "isVisible", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.getReturningSpeedBoosterMaxLevel() > this.level;
    },
    set: function (__s49param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "isVisible").set.call(this, __s49param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "id", {
    get: function () {
      return __dep_exact_26a421b704832cff.BoosterConst.RETURNING_SPEED;
    },
    set: function (__s53param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "id").set.call(this, __s53param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "isExtendable", {
    get: function () {
      return false;
    },
    set: function (__s57param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "isExtendable").set.call(this, __s57param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleReturnSpeedBoosterPremiumShopVO.prototype.clickedBuyButton = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleBuyReturnSpeedBoosterDialog.CastleBuyReturnSpeedBoosterDialog);
  };
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "bonusTextForNextLevel", {
    get: function () {
      return [__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE, this.bonusValueForNextLevel];
    },
    set: function (__s63param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "bonusTextForNextLevel").set.call(this, __s63param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "returnSpeedForCurrentLevel", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.getBoostForReturningSpeedLevel(this.level);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "returnSpeedForNextLevel", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.getBoostForReturningSpeedLevel(this.level + 1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "isPermanentBooster", {
    get: function () {
      return true;
    },
    set: function (__s71param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "isPermanentBooster").set.call(this, __s71param0);
    },
    enumerable: true,
    configurable: true
  });
  return CastleReturnSpeedBoosterPremiumShopVO;
}(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO);
exports.CastleReturnSpeedBoosterPremiumShopVO = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleBuyReturnSpeedBoosterDialog = require("gge-module:export_CastleBuyReturnSpeedBoosterDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IPremiumMarketShopVO", "IDefaultBoosterDataVO", "IBoosterDataVO");

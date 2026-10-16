Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CharacterHelper = require("gge-module:export_CharacterHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleHeroDefaultBoosterShopVO = require("gge-module:export_CastleHeroDefaultBoosterShopVO");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastleTaxCollectorPremiumShopVO() {
    var __s3local0 = __s1param0.call(this, "bribe_taxcollector", "bribe_taxcollector_copy", __dep_exact_26a421b704832cff.BoosterConst.TAX_BRIBE_COSTS_C2, "taxcollector") || this;
    __s3local0.shopTypes.push(__dep_export_CastlePremiumMarketCollectionData.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_EVENT, __dep_export_CastlePremiumMarketCollectionData.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_HERO);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTaxCollectorPremiumShopVO, __s1param0);
  Object.defineProperty(CastleTaxCollectorPremiumShopVO.prototype, "duration", {
    get: function () {
      if (this.isActive) {
        return __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getCommaTimeStringFromSeconds(this.remainingTimeInSeconds, __dep_exact_92d05af59ee2ff30.Localize.text);
      } else {
        return __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getCommaTimeStringFromSeconds(__dep_exact_26a421b704832cff.BoosterConst.TAX_BRIBE_DURATION, __dep_exact_92d05af59ee2ff30.Localize.text);
      }
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "duration").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTaxCollectorPremiumShopVO.prototype, "bonusValue", {
    get: function () {
      return Math.round(__dep_exact_26a421b704832cff.BoosterConst.TAX_BRIBE_BOOST * 100);
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "bonusValue").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTaxCollectorPremiumShopVO.prototype, "bonusText", {
    get: function () {
      return [__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [this.bonusValue]];
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "bonusText").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTaxCollectorPremiumShopVO.prototype, "listSortPriority", {
    get: function () {
      return 200;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "listSortPriority").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleTaxCollectorPremiumShopVO.prototype.clickedBuyButton = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleBribeDialog.CastleBribeDialog);
  };
  Object.defineProperty(CastleTaxCollectorPremiumShopVO.prototype, "bonusIconFrame", {
    get: function () {
      return 6;
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "bonusIconFrame").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleTaxCollectorPremiumShopVO.prototype.createVisualMovieClip = function () {
    var __s29local0 = new __s0local0();
    var __s29local1 = __dep_export_CharacterHelper.CharacterHelper.createCharacterBig(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_TAXCOLLECTOR, __s29local0, -1, -1, false, this.bindFunction(this.onLoadedIcon));
    __s29local1.recycleAsset = false;
    if (!__s29local1.isLoaded) {
      __s29local0.visible = false;
    }
    __s29local0.addChild(__s29local1);
    return __s29local0;
  };
  CastleTaxCollectorPremiumShopVO.prototype.createVisualMovieClipForBuyDialog = function () {
    var __s32local0 = new __s0local0();
    __s32local0.addChild(__dep_export_CharacterHelper.CharacterHelper.createCharacterBig(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_TAXCOLLECTOR, __s32local0, __dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.MAX_BUY_DIALOG_ICON_WIDTH, __dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.MAX_BUY_DIALOG_ICON_HEIGHT, false));
    return __s32local0;
  };
  Object.defineProperty(CastleTaxCollectorPremiumShopVO.prototype, "offsetIcon", {
    get: function () {
      return new __s0local1(-5, -5);
    },
    set: function (__s36param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "offsetIcon").set.call(this, __s36param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTaxCollectorPremiumShopVO.prototype, "finalCostsC2", {
    get: function () {
      var __s38local0 = Math.max(__dep_export_CastleModel.CastleModel.boostData.premiumAccountVO.isActive ? __dep_export_CastleModel.CastleModel.boostData.premiumAccountVO.bribe_C2_Factor : 0, __dep_export_CastleModel.CastleModel.boosterSaleData.getDiscount(this.id) * 0.01);
      return __dep_export_CastleModel.CastleModel.costsData.getFinalCostsC2(this.baseCosts, this.hasRebuyDiscount, __s38local0);
    },
    set: function (__s40param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "finalCostsC2").set.call(this, __s40param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTaxCollectorPremiumShopVO.prototype, "id", {
    get: function () {
      return __dep_exact_26a421b704832cff.BoosterConst.TAX;
    },
    set: function (__s44param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "id").set.call(this, __s44param0);
    },
    enumerable: true,
    configurable: true
  });
  return CastleTaxCollectorPremiumShopVO;
}(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO);
exports.CastleTaxCollectorPremiumShopVO = __s0local2;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleBribeDialog = require("gge-module:export_CastleBribeDialog");
var __dep_export_CastlePremiumMarketCollectionData = require("gge-module:export_CastlePremiumMarketCollectionData");
var __dep_export_CastlePremiumMarketShopVO = require("gge-module:export_CastlePremiumMarketShopVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "IPremiumMarketShopVO", "IDefaultBoosterDataVO", "IBoosterDataVO");

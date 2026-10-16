Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleBuyResourceBoostDialogProperties = require("gge-module:export_CastleBuyResourceBoostDialogProperties");
var __dep_export_CharacterHelper = require("gge-module:export_CharacterHelper");
var __dep_export_CastleHeroDefaultBoosterShopVO = require("gge-module:export_CastleHeroDefaultBoosterShopVO");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastleOverseerMeadPremiumShopVO() {
    var __s3local0 = __s1param0.call(this, "dialog_resourcesBoost_hireOverseer", "overseer_mead_copy_short", __dep_exact_26a421b704832cff.BoosterConst.OVERSEER_COST_C2, "overseer") || this;
    __s3local0.shopTypes.push(__dep_export_CastlePremiumMarketCollectionData.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_EVENT, __dep_export_CastlePremiumMarketCollectionData.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_HERO);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleOverseerMeadPremiumShopVO, __s1param0);
  Object.defineProperty(CastleOverseerMeadPremiumShopVO.prototype, "duration", {
    get: function () {
      if (this.isActive) {
        return __dep_exact_9e901e8e2483a22f.TimeStringHelper.getCommaTimeStringFromSeconds(this.remainingTimeInSeconds, __dep_exact_92d05af59ee2ff30.Localize.text);
      } else {
        return __dep_exact_9e901e8e2483a22f.TimeStringHelper.getCommaTimeStringFromSeconds(__dep_exact_26a421b704832cff.BoosterConst.OVERSEER_DURATION, __dep_exact_92d05af59ee2ff30.Localize.text);
      }
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "duration").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleOverseerMeadPremiumShopVO.prototype, "bonusValue", {
    get: function () {
      return __dep_exact_26a421b704832cff.BoosterConst.OVERSEER_BOOST;
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "bonusValue").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleOverseerMeadPremiumShopVO.prototype, "listSortPriority", {
    get: function () {
      return 60;
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "listSortPriority").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleOverseerMeadPremiumShopVO.prototype.clickedBuyButton = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleBuyResourceBoostDialog.CastleBuyResourceBoostDialog, new __dep_export_CastleBuyResourceBoostDialogProperties.CastleBuyResourceBoostDialogProperties(__dep_export_CastlePremiumBoostData.CastlePremiumBoostData.BOOST_MEAD));
  };
  Object.defineProperty(CastleOverseerMeadPremiumShopVO.prototype, "bonusIconFrame", {
    get: function () {
      return 11;
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "bonusIconFrame").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleOverseerMeadPremiumShopVO.prototype.createVisualMovieClip = function () {
    var __s25local0 = new Library.CastleInterfaceElements.CharOverseer_WithBonus();
    var __s25local1 = __dep_export_CharacterHelper.CharacterHelper.createCharacterBig(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_OVERSEER, __s25local0.mc_charPlaceHolder, -1, -1, false, this.bindFunction(this.onLoadedIcon));
    __s25local1.recycleAsset = false;
    if (!__s25local1.isLoaded) {
      __s25local0.visible = false;
    }
    __s25local0.mc_charPlaceHolder.addChild(__s25local1);
    __s25local0.mc_icon.gotoAndStop(14);
    return __s25local0;
  };
  CastleOverseerMeadPremiumShopVO.prototype.createVisualMovieClipForBuyDialog = function () {
    var __s28local0 = new __s0local0();
    __s28local0.addChild(__dep_export_CharacterHelper.CharacterHelper.createCharacterBig(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_OVERSEER, __s28local0, __dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.MAX_BUY_DIALOG_ICON_WIDTH, __dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.MAX_BUY_DIALOG_ICON_HEIGHT, false));
    return __s28local0;
  };
  Object.defineProperty(CastleOverseerMeadPremiumShopVO.prototype, "offsetIcon", {
    get: function () {
      return new __s0local1(-5, -5);
    },
    set: function (__s32param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "offsetIcon").set.call(this, __s32param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleOverseerMeadPremiumShopVO.prototype, "id", {
    get: function () {
      return __dep_export_CastlePremiumBoostData.CastlePremiumBoostData.BOOST_MEAD;
    },
    set: function (__s36param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "id").set.call(this, __s36param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleOverseerMeadPremiumShopVO.prototype, "isVisible", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.legendSkillData.getSceatSkillEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_ENABLE_BUILDINGS).rawValues.indexOf(CastleOverseerMeadPremiumShopVO.BREWERY_WODID) > -1;
    },
    enumerable: true,
    configurable: true
  });
  CastleOverseerMeadPremiumShopVO.BREWERY_WODID = 1959;
  return CastleOverseerMeadPremiumShopVO;
}(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO);
exports.CastleOverseerMeadPremiumShopVO = __s0local2;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleBuyResourceBoostDialog = require("gge-module:export_CastleBuyResourceBoostDialog");
var __dep_export_CastlePremiumBoostData = require("gge-module:export_CastlePremiumBoostData");
var __dep_export_CastlePremiumMarketCollectionData = require("gge-module:export_CastlePremiumMarketCollectionData");
var __dep_export_CastlePremiumMarketShopVO = require("gge-module:export_CastlePremiumMarketShopVO");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "IPremiumMarketShopVO", "IDefaultBoosterDataVO", "IBoosterDataVO");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_FlagHelper = require("gge-module:export_FlagHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastlePremiumMarketShopVO = require("gge-module:export_CastlePremiumMarketShopVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleFlagPremiumShopVO() {
    var __s3local0 = __s1param0.call(this, "flag", "flag_copy_short", [__dep_export_CastlePremiumMarketCollectionData.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_EVENT, __dep_export_CastlePremiumMarketCollectionData.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_REST], __dep_exact_26a421b704832cff.PlayerConst.PREMIUM_FLAG_COST_C2) || this;
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_AVATAR, __s3local0.bindFunction(__s3local0.onCrestUpdated));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_AVATAR, __s3local0.bindFunction(__s3local0.onCrestUpdated));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFlagPremiumShopVO, __s1param0);
  Object.defineProperty(CastleFlagPremiumShopVO.prototype, "isActive", {
    get: function () {
      return false;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "isActive").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFlagPremiumShopVO.prototype, "listSortPriority", {
    get: function () {
      return 5;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "listSortPriority").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleFlagPremiumShopVO.prototype.clickedBuyButton = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleBuyPremiumFlagDialog.CastleBuyPremiumFlagDialog);
  };
  CastleFlagPremiumShopVO.prototype.createVisualMovieClip = function () {
    return new Library.CastleInterfaceElements_Icons.Icon_PremiumFlag();
  };
  CastleFlagPremiumShopVO.prototype.onCrestUpdated = function (__s17param0 = null) {
    if (this._iconMC) {
      this._iconMC = this.createVisualMovieClip();
      this.onLoadedIcon(this._iconMC);
    }
  };
  Object.defineProperty(CastleFlagPremiumShopVO.prototype, "canBeBought", {
    get: function () {
      return !__dep_export_CastleModel.CastleModel.userData.hasPremiumFlag;
    },
    set: function (__s22param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "canBeBought").set.call(this, __s22param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFlagPremiumShopVO.prototype, "cantBeBoughtButtonToolTip", {
    get: function () {
      return "premiumFlag_cantbuy";
    },
    set: function (__s26param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "cantBeBoughtButtonToolTip").set.call(this, __s26param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFlagPremiumShopVO.prototype, "hasVisualTimeWhenActive", {
    get: function () {
      return false;
    },
    set: function (__s30param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenActive").set.call(this, __s30param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFlagPremiumShopVO.prototype, "offsetIcon", {
    get: function () {
      return new __s0local0(0, -7);
    },
    set: function (__s34param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "offsetIcon").set.call(this, __s34param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleFlagPremiumShopVO.prototype.applyFilter = function () {
    __s1param0.prototype.applyFilter.call(this);
    if (this._iconMC) {
      __dep_export_FlagHelper.FlagHelper.colorFlag(this._iconMC.mc_flag, __dep_export_CastleModel.CastleModel.userData.playerCrest);
    }
  };
  return CastleFlagPremiumShopVO;
}(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO);
exports.CastleFlagPremiumShopVO = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleBuyPremiumFlagDialog = require("gge-module:export_CastleBuyPremiumFlagDialog");
var __dep_export_CastlePremiumMarketCollectionData = require("gge-module:export_CastlePremiumMarketCollectionData");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IPremiumMarketShopVO");

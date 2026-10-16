Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_CastleStartPeaceModeDialogProperties = require("gge-module:export_CastleStartPeaceModeDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastlePremiumMarketShopVO = require("gge-module:export_CastlePremiumMarketShopVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastlePeaceProtectionPremiumShopVO() {
    return __s1param0.call(this, "dialog_startPeaceMode_title", "peaceProtection_copy_short", [__dep_export_CastlePremiumMarketCollectionData.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_REST], __dep_exact_26a421b704832cff_1.PlayerConst.PEACE_MODE_C2[0]) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePeaceProtectionPremiumShopVO, __s1param0);
  Object.defineProperty(CastlePeaceProtectionPremiumShopVO.prototype, "isActive", {
    get: function () {
      return false;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "isActive").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePeaceProtectionPremiumShopVO.prototype, "canBeBought", {
    get: function () {
      if (!__dep_export_CastleModel.CastleModel.userData.noobProtected) {
        __dep_export_CastleModel.CastleModel.userData.userLevel;
        __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_MANAGEMENT;
      }
      return __dep_export_CastleModel.CastleModel.userData.peaceModeStatus == __dep_export_CastleUserData.CastleUserData.PEACEMODE_STATUS_OFF && !__dep_export_CastleModel.CastleModel.userData.noobProtected;
    },
    set: function (__s12param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "canBeBought").set.call(this, __s12param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePeaceProtectionPremiumShopVO.prototype, "buttonBuyToolTipEnabled", {
    get: function () {
      return "dialog_management_openGateNotInNoobProtection";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePeaceProtectionPremiumShopVO.prototype, "cantBeBoughtButtonToolTip", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.userData.noobProtected) {
        return "dialog_management_openGateNotInNoobProtection";
      }
      switch (__dep_export_CastleModel.CastleModel.userData.peaceModeStatus) {
        case __dep_export_CastleUserData.CastleUserData.PEACEMODE_STATUS_PEACETIME:
          return "premiumFlag_cantbuy";
        case __dep_export_CastleUserData.CastleUserData.PEACEMODE_STATUS_POSTTIME:
          return {
            t: "dialog_management_reStartableIn_tt",
            p: [this.duration]
          };
        case __dep_export_CastleUserData.CastleUserData.PEACEMODE_STATUS_PRETIME:
          return {
            t: "dialog_management_startIn_tt",
            p: [this.duration]
          };
      }
      return "runTime";
    },
    set: function (__s20param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "cantBeBoughtButtonToolTip").set.call(this, __s20param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePeaceProtectionPremiumShopVO.prototype, "timeStringTooltip", {
    get: function () {
      switch (__dep_export_CastleModel.CastleModel.userData.peaceModeStatus) {
        case __dep_export_CastleUserData.CastleUserData.PEACEMODE_STATUS_PEACETIME:
          return __dep_exact_92d05af59ee2ff30.Localize.text("runTime");
        case __dep_export_CastleUserData.CastleUserData.PEACEMODE_STATUS_POSTTIME:
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_management_reStartableIn");
        case __dep_export_CastleUserData.CastleUserData.PEACEMODE_STATUS_PRETIME:
          return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_management_startIn");
      }
      return __dep_exact_92d05af59ee2ff30.Localize.text("runTime");
    },
    set: function (__s25param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "timeStringTooltip").set.call(this, __s25param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePeaceProtectionPremiumShopVO.prototype, "hasRebuyDiscount", {
    get: function () {
      return false;
    },
    set: function (__s29param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "hasRebuyDiscount").set.call(this, __s29param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePeaceProtectionPremiumShopVO.prototype, "hasVisualBonus", {
    get: function () {
      return false;
    },
    set: function (__s33param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "hasVisualBonus").set.call(this, __s33param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePeaceProtectionPremiumShopVO.prototype, "hasVisualTimeWhenNotActive", {
    get: function () {
      return true;
    },
    set: function (__s37param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenNotActive").set.call(this, __s37param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePeaceProtectionPremiumShopVO.prototype, "hasVisualTimeWhenActive", {
    get: function () {
      return true;
    },
    set: function (__s41param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenActive").set.call(this, __s41param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePeaceProtectionPremiumShopVO.prototype, "duration", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.userData.peaceModeStatus != __dep_export_CastleUserData.CastleUserData.PEACEMODE_STATUS_OFF) {
        return __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getCantAttackTimeString(__dep_export_CastleModel.CastleModel.userData.getRemainingPeaceStatusTime());
      } else {
        return __dep_exact_92d05af59ee2ff30.Localize.text("variable");
      }
    },
    set: function (__s47param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "duration").set.call(this, __s47param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePeaceProtectionPremiumShopVO.prototype, "listSortPriority", {
    get: function () {
      return 10;
    },
    set: function (__s51param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "listSortPriority").set.call(this, __s51param0);
    },
    enumerable: true,
    configurable: true
  });
  CastlePeaceProtectionPremiumShopVO.prototype.clickedBuyButton = function () {
    if (__dep_export_CastleModel.CastleModel.userData.peaceModeStatus == __dep_export_CastleUserData.CastleUserData.PEACEMODE_STATUS_OFF) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStartPeaceModeDialog.CastleStartPeaceModeDialog, new __dep_export_CastleStartPeaceModeDialogProperties.CastleStartPeaceModeDialogProperties());
    }
  };
  CastlePeaceProtectionPremiumShopVO.prototype.createVisualMovieClip = function () {
    return new Library.CastleInterfaceElements_Icons.Icon_PeaceProtection();
  };
  Object.defineProperty(CastlePeaceProtectionPremiumShopVO.prototype, "isVisible", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID && !__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isOnSpecialServer;
    },
    set: function (__s60param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "isVisible").set.call(this, __s60param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePeaceProtectionPremiumShopVO.prototype, "offsetIcon", {
    get: function () {
      return new __s0local0(5, -3);
    },
    set: function (__s64param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "offsetIcon").set.call(this, __s64param0);
    },
    enumerable: true,
    configurable: true
  });
  return CastlePeaceProtectionPremiumShopVO;
}(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO);
exports.CastlePeaceProtectionPremiumShopVO = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStartPeaceModeDialog = require("gge-module:export_CastleStartPeaceModeDialog");
var __dep_export_CastlePremiumMarketCollectionData = require("gge-module:export_CastlePremiumMarketCollectionData");
var __dep_export_CastleUserData = require("gge-module:export_CastleUserData");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IPremiumMarketShopVO");

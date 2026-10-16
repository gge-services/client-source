Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastlePremiumMarketShopVO = require("gge-module:export_CastlePremiumMarketShopVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleFactionProtectionPremiumShopVO() {
    return __s1param0.call(this, "factionProtection_title", "factionProtection_copy_short", [__dep_export_CastlePremiumMarketCollectionData.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_REST, __dep_export_CastlePremiumMarketCollectionData.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_EVENT], __dep_exact_26a421b704832cff_1.FactionConst.getPeaceC2Cost()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionProtectionPremiumShopVO, __s1param0);
  Object.defineProperty(CastleFactionProtectionPremiumShopVO.prototype, "isActive", {
    get: function () {
      return false;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "isActive").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionProtectionPremiumShopVO.prototype, "canBeBought", {
    get: function () {
      return this.factionEventVO.remainingFactionProtectionTimeInSeconds < 1 && this.factionEventVO.remainingNoobProtectionTimeInSeconds < 1;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "canBeBought").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionProtectionPremiumShopVO.prototype, "factionEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionProtectionPremiumShopVO.prototype, "cantBeBoughtButtonToolTip", {
    get: function () {
      if (this.factionEventVO.remainingNoobProtectionTimeInSeconds > 0) {
        return "dialog_management_openGateNotInNoobProtection";
      }
      switch (this.factionEventVO.factionProtectionStatus) {
        case __dep_export_FactionEventVO.FactionEventVO.FACTION_PROTECTION_STATUS_ACTIVE:
          return "premiumFlag_cantbuy";
        case __dep_export_FactionEventVO.FactionEventVO.FACTION_PROTECTION_STATUS_COOLDOWN:
          return {
            t: "dialog_management_reStartableIn_tt",
            p: [this.duration]
          };
        case __dep_export_FactionEventVO.FactionEventVO.FACTION_PROTECTION_STATUS_PRETIME:
          return {
            t: "dialog_management_startIn_tt",
            p: [this.duration]
          };
      }
      return "runTime";
    },
    set: function (__s19param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "cantBeBoughtButtonToolTip").set.call(this, __s19param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionProtectionPremiumShopVO.prototype, "timeStringTooltip", {
    get: function () {
      switch (this.factionEventVO.factionProtectionStatus) {
        case __dep_export_FactionEventVO.FactionEventVO.FACTION_PROTECTION_STATUS_ACTIVE:
          return __dep_exact_92d05af59ee2ff30.Localize.text("runTime");
        case __dep_export_FactionEventVO.FactionEventVO.FACTION_PROTECTION_STATUS_COOLDOWN:
          return "dialog_management_reStartableIn";
        case __dep_export_FactionEventVO.FactionEventVO.FACTION_PROTECTION_STATUS_PRETIME:
          return "dialog_management_startIn";
      }
      return "runTime";
    },
    set: function (__s24param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "timeStringTooltip").set.call(this, __s24param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionProtectionPremiumShopVO.prototype, "hasRebuyDiscount", {
    get: function () {
      return false;
    },
    set: function (__s28param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "hasRebuyDiscount").set.call(this, __s28param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionProtectionPremiumShopVO.prototype, "hasVisualBonus", {
    get: function () {
      return false;
    },
    set: function (__s32param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "hasVisualBonus").set.call(this, __s32param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionProtectionPremiumShopVO.prototype, "hasVisualTimeWhenNotActive", {
    get: function () {
      return true;
    },
    set: function (__s36param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenNotActive").set.call(this, __s36param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionProtectionPremiumShopVO.prototype, "hasVisualTimeWhenActive", {
    get: function () {
      return true;
    },
    set: function (__s40param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenActive").set.call(this, __s40param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionProtectionPremiumShopVO.prototype, "duration", {
    get: function () {
      if (this.factionEventVO.remainingFactionProtectionTimeInSeconds > 0) {
        return __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getCommaTimeStringFromSeconds(this.factionEventVO.remainingFactionProtectionTimeInSeconds, __dep_exact_92d05af59ee2ff30.Localize.text);
      } else {
        return __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getCommaTimeStringFromSeconds(__dep_exact_26a421b704832cff_1.FactionConst.getPeaceDuration(__dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals.isTest), __dep_exact_92d05af59ee2ff30.Localize.text);
      }
    },
    set: function (__s46param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "duration").set.call(this, __s46param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionProtectionPremiumShopVO.prototype, "listSortPriority", {
    get: function () {
      return 1;
    },
    set: function (__s50param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "listSortPriority").set.call(this, __s50param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionProtectionPremiumShopVO.prototype.clickedBuyButton = function () {
    if (this.factionEventVO.remainingFactionProtectionTimeInSeconds < 0 || this.factionEventVO.factionProtectionStatus == __dep_export_FactionEventVO.FactionEventVO.FACTION_PROTECTION_STATUS_OFF) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleFactionProtectionModeDialog.CastleFactionProtectionModeDialog);
    }
  };
  CastleFactionProtectionPremiumShopVO.prototype.createVisualMovieClip = function () {
    return new Library.CastleInterfaceElements_Icons.Icon_FactionProtection();
  };
  Object.defineProperty(CastleFactionProtectionPremiumShopVO.prototype, "isVisible", {
    get: function () {
      return this.factionEventVO != null && !this.factionEventVO.isLocked && !this.factionEventVO.isOneLMSActive;
    },
    set: function (__s59param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "isVisible").set.call(this, __s59param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionProtectionPremiumShopVO.prototype, "offsetIcon", {
    get: function () {
      return new __s0local0(0, 0);
    },
    set: function (__s63param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "offsetIcon").set.call(this, __s63param0);
    },
    enumerable: true,
    configurable: true
  });
  return CastleFactionProtectionPremiumShopVO;
}(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO);
exports.CastleFactionProtectionPremiumShopVO = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleFactionProtectionModeDialog = require("gge-module:export_CastleFactionProtectionModeDialog");
var __dep_export_CastlePremiumMarketCollectionData = require("gge-module:export_CastlePremiumMarketCollectionData");
var __dep_export_FactionEventVO = require("gge-module:export_FactionEventVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IPremiumMarketShopVO");

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
  function CastleRelocateShopVO() {
    return __s1param0.call(this, "panel_relocate_title", "relocate_decription_short", [__dep_export_CastlePremiumMarketCollectionData.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_REST], 0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRelocateShopVO, __s1param0);
  Object.defineProperty(CastleRelocateShopVO.prototype, "isActive", {
    get: function () {
      return false;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "isActive").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRelocateShopVO.prototype, "baseCosts", {
    get: function () {
      return __dep_exact_26a421b704832cff.RelocationConst.getRelocationCost(__dep_export_CastleModel.CastleModel.userData.relocationCount);
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "baseCosts").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRelocateShopVO.prototype, "listSortPriority", {
    get: function () {
      return 531;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "listSortPriority").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleRelocateShopVO.prototype.clickedBuyButton = function () {
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_TO_RELOCATEWORLDMAP_COMMAND);
  };
  Object.defineProperty(CastleRelocateShopVO.prototype, "canBeBought", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.remainingRelocationCooldown <= 0 && __dep_export_CastleModel.CastleModel.userData.remainingRelocationDuration <= 0 && __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_exact_26a421b704832cff.RelocationConst.MIN_RELOCATION_LEVEL && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID;
    },
    set: function (__s21param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "canBeBought").set.call(this, __s21param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRelocateShopVO.prototype, "cantBeBoughtButtonToolTip", {
    get: function () {
      var __s23local0 = "";
      if (__dep_export_CastleModel.CastleModel.userData.userLevel < __dep_exact_26a421b704832cff.RelocationConst.MIN_RELOCATION_LEVEL) {
        __s23local0 = {
          t: "expansion_higherLevelNeeded",
          p: [__dep_exact_26a421b704832cff.RelocationConst.MIN_RELOCATION_LEVEL]
        };
      } else if (__dep_export_CastleModel.CastleModel.userData.remainingRelocationDuration > 0) {
        __s23local0 = {
          t: "dialog_management_inprogress_tt",
          p: [__dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getTimeToString(__dep_export_CastleModel.CastleModel.userData.remainingRelocationDuration, __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text)]
        };
      } else if (__dep_export_CastleModel.CastleModel.userData.remainingRelocationCooldown > 0) {
        __s23local0 = {
          t: "dialog_management_reStartableIn_tt",
          p: [__dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getTimeToString(__dep_export_CastleModel.CastleModel.userData.remainingRelocationCooldown, __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text)]
        };
      }
      return __s23local0;
    },
    set: function (__s28param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "cantBeBoughtButtonToolTip").set.call(this, __s28param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleRelocateShopVO.prototype.createVisualMovieClip = function () {
    return new Library.CastleInterfaceElements_Icons.Icon_Relocate();
  };
  Object.defineProperty(CastleRelocateShopVO.prototype, "isVisible", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID) {
        return false;
      }
      var __s32local0 = true;
      switch (__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().currentState) {
        case __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_KINGDOMMAP:
        case __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_SEASON_WORLDMAP:
          __s32local0 = false;
      }
      if (__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO && __dep_export_Iso.Iso.renderer.isoData.areaData.isTreasureCamp) {
        __s32local0 = false;
      }
      return __s32local0;
    },
    set: function (__s37param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "isVisible").set.call(this, __s37param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRelocateShopVO.prototype, "hasVisualTimeWhenActive", {
    get: function () {
      return false;
    },
    set: function (__s41param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenActive").set.call(this, __s41param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRelocateShopVO.prototype, "hasVisualTimeWhenNotActive", {
    get: function () {
      return false;
    },
    set: function (__s45param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenNotActive").set.call(this, __s45param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRelocateShopVO.prototype, "payType", {
    get: function () {
      return __dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.PAYTYPE_C2;
    },
    set: function (__s49param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "payType").set.call(this, __s49param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRelocateShopVO.prototype, "isExtendable", {
    get: function () {
      return false;
    },
    set: function (__s53param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "isExtendable").set.call(this, __s53param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRelocateShopVO.prototype, "offsetIcon", {
    get: function () {
      return new __s0local0(3, 0);
    },
    set: function (__s57param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "offsetIcon").set.call(this, __s57param0);
    },
    enumerable: true,
    configurable: true
  });
  return CastleRelocateShopVO;
}(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO);
exports.CastleRelocateShopVO = __s0local1;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastlePremiumMarketCollectionData = require("gge-module:export_CastlePremiumMarketCollectionData");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IPremiumMarketShopVO");

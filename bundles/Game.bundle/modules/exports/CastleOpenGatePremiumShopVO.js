Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_CastleStartOpenGateDialogProperties = require("gge-module:export_CastleStartOpenGateDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastlePremiumMarketShopVO = require("gge-module:export_CastlePremiumMarketShopVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleOpenGatePremiumShopVO() {
    return __s1param0.call(this, "dialog_startOpenGate_title", "dialog_startOpenGate_decription_short", [__dep_export_CastlePremiumMarketCollectionData.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_REST], CastleOpenGatePremiumShopVO.getCosts()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleOpenGatePremiumShopVO, __s1param0);
  Object.defineProperty(CastleOpenGatePremiumShopVO.prototype, "cantBeBoughtButtonToolTip", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.userData.isInNormalNoobProtection()) {
        return "dialog_management_openGateNotInNoobProtection";
      } else {
        return {
          t: "expansion_higherLevelNeeded",
          p: [__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_OPENGATE]
        };
      }
    },
    set: function (__s9param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "cantBeBoughtButtonToolTip").set.call(this, __s9param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleOpenGatePremiumShopVO.prototype, "finalCostsC2", {
    get: function () {
      return CastleOpenGatePremiumShopVO.getCosts();
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "finalCostsC2").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleOpenGatePremiumShopVO.getCosts = function () {
    var __s15local0 = CastleOpenGatePremiumShopVO.getRelevantCastle();
    if (__s15local0) {
      return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.PlayerConst.getOpenGateCosts(0, __s15local0.openGateCounter + 1));
    } else {
      return __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.PlayerConst.getOpenGateCosts(0, 1));
    }
  };
  CastleOpenGatePremiumShopVO.getRelevantCastle = function () {
    if (__dep_export_CastleModel.CastleModel.userData.castleList) {
      if (__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().isInMyCastle) {
        return __dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.kingdomID);
      } else {
        return __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_exact_26a421b704832cff_1.WorldClassic.KINGDOM_ID);
      }
    } else {
      return null;
    }
  };
  Object.defineProperty(CastleOpenGatePremiumShopVO.prototype, "isActive", {
    get: function () {
      var __s25local0 = CastleOpenGatePremiumShopVO.getRelevantCastle();
      return !!__s25local0 && __s25local0.remainingOpenGateTime > 0;
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "isActive").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleOpenGatePremiumShopVO.prototype, "duration", {
    get: function () {
      var __s29local0 = CastleOpenGatePremiumShopVO.getRelevantCastle();
      if (__s29local0 && this.isActive) {
        return __dep_exact_9e901e8e2483a22f.TimeStringHelper.getCommaTimeStringFromSeconds(__s29local0.remainingOpenGateTime, __dep_exact_92d05af59ee2ff30.Localize.text);
      } else {
        return __dep_exact_92d05af59ee2ff30.Localize.text("variable");
      }
    },
    set: function (__s33param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "duration").set.call(this, __s33param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleOpenGatePremiumShopVO.prototype, "listSortPriority", {
    get: function () {
      return 200;
    },
    set: function (__s37param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "listSortPriority").set.call(this, __s37param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleOpenGatePremiumShopVO.prototype.clickedBuyButton = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStartOpenGateDialog.CastleStartOpenGateDialog, new __dep_export_CastleStartOpenGateDialogProperties.CastleStartOpenGateDialogProperties(__dep_export_CastleModel.CastleModel.areaData.activeArea.areaId, __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.kingdomID, true));
  };
  CastleOpenGatePremiumShopVO.prototype.createVisualMovieClip = function () {
    return new Library.CastleInterfaceElements_Icons.Icon_OpenGate();
  };
  Object.defineProperty(CastleOpenGatePremiumShopVO.prototype, "isVisible", {
    get: function () {
      return true;
    },
    set: function (__s45param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "isVisible").set.call(this, __s45param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleOpenGatePremiumShopVO.prototype, "hasVisualTimeWhenNotActive", {
    get: function () {
      return true;
    },
    set: function (__s49param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenNotActive").set.call(this, __s49param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleOpenGatePremiumShopVO.prototype, "hasVisualTimeWhenActive", {
    get: function () {
      return true;
    },
    set: function (__s53param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenActive").set.call(this, __s53param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleOpenGatePremiumShopVO.prototype, "offsetIcon", {
    get: function () {
      return new __s0local0(3, -3);
    },
    set: function (__s57param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "offsetIcon").set.call(this, __s57param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleOpenGatePremiumShopVO.prototype, "canBeBought", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.hasLevelFor(__dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_OPENGATE);
    },
    set: function (__s61param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "canBeBought").set.call(this, __s61param0);
    },
    enumerable: true,
    configurable: true
  });
  return CastleOpenGatePremiumShopVO;
}(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO);
exports.CastleOpenGatePremiumShopVO = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleStartOpenGateDialog = require("gge-module:export_CastleStartOpenGateDialog");
var __dep_export_CastlePremiumMarketCollectionData = require("gge-module:export_CastlePremiumMarketCollectionData");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IPremiumMarketShopVO");

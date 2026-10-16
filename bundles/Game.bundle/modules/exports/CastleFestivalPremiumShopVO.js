Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleExtendFestivalDialog = require("gge-module:export_CastleExtendFestivalDialog");
var __dep_export_CastleFestivalDialogProperties = require("gge-module:export_CastleFestivalDialogProperties");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastlePremiumMarketShopVO = require("gge-module:export_CastlePremiumMarketShopVO");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleFestivalPremiumShopVO() {
    return __s1param0.call(this, "festival_title", "festival_decription_short", [__dep_export_CastlePremiumMarketCollectionData.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_REST], __dep_export_CastleModel.CastleModel.premiumData.getFestivalItemBySortorder(0).cost) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFestivalPremiumShopVO, __s1param0);
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "activeFestivalItemVO", {
    get: function () {
      if (this.isActive && __dep_export_CastleModel.CastleModel.boostData && __dep_export_CastleModel.CastleModel.boostData.festivalVO) {
        return __dep_export_CastleModel.CastleModel.boostData.festivalVO.activeFestivalVO;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "isActive", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.festivalVO.isActive;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "isActive").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "duration", {
    get: function () {
      if (this.isActive) {
        return __dep_exact_9e901e8e2483a22f.TimeStringHelper.getCommaTimeStringFromSeconds(__dep_export_CastleModel.CastleModel.boostData.festivalVO.remainingTimeInSeconds, __dep_exact_92d05af59ee2ff30.Localize.text);
      } else {
        return __dep_exact_92d05af59ee2ff30.Localize.text("variable");
      }
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "duration").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "costString", {
    get: function () {
      if (this.isActive) {
        if (this.activeFestivalItemVO) {
          return __dep_exact_92d05af59ee2ff30.Localize.number(this.activeFestivalItemVO.cost);
        } else {
          return "-";
        }
      } else {
        return "variable";
      }
    },
    set: function (__s25param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "costString").set.call(this, __s25param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "listSortPriority", {
    get: function () {
      return 530;
    },
    set: function (__s29param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "listSortPriority").set.call(this, __s29param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "baseCosts", {
    get: function () {
      if (this.activeFestivalItemVO) {
        return this.activeFestivalItemVO.cost;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleFestivalPremiumShopVO.prototype.clickedBuyButton = function () {
    if (this.isActive) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleExtendFestivalDialog.CastleExtendFestivalDialog);
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleFestivalDialog.CastleFestivalDialog, new __dep_export_CastleFestivalDialogProperties.CastleFestivalDialogProperties());
    }
  };
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "canBeBought", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.userData.level >= __dep_export_CastleModel.CastleModel.premiumData.getFestivalItemBySortorder(0).minLevel && !this.isActiveFeastOutdated;
    },
    set: function (__s41param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "canBeBought").set.call(this, __s41param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "cantBeBoughtButtonToolTip", {
    get: function () {
      if (this.isActiveFeastOutdated) {
        return {
          t: "dialog_festival_extend_invalid_tooltip",
          p: []
        };
      } else {
        return {
          t: "expansion_higherLevelNeeded",
          p: [__dep_export_CastleModel.CastleModel.premiumData.getFestivalItemBySortorder(0).minLevel]
        };
      }
    },
    set: function (__s47param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "cantBeBoughtButtonToolTip").set.call(this, __s47param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "buttonBuyToolTipEnabled", {
    get: function () {
      if (this.isActive && this.isExtendable) {
        return "festival_extend_tooltip";
      } else {
        return __dep_export_ClientConstTextIds.ClientConstTextIds.BUY;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "isActiveFeastOutdated", {
    get: function () {
      return !!this.activeFestivalItemVO && this.isActive && (__dep_export_CastleModel.CastleModel.userData.level < this.activeFestivalItemVO.minLevel || __dep_export_CastleModel.CastleModel.userData.level > this.activeFestivalItemVO.maxLevel);
    },
    enumerable: true,
    configurable: true
  });
  CastleFestivalPremiumShopVO.prototype.createVisualMovieClip = function () {
    return new Library.CastleInterfaceElements_Icons.Icon_Festival();
  };
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "isVisible", {
    get: function () {
      return true;
    },
    set: function (__s59param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "isVisible").set.call(this, __s59param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "hasVisualTimeWhenActive", {
    get: function () {
      return true;
    },
    set: function (__s63param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenActive").set.call(this, __s63param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "hasVisualTimeWhenNotActive", {
    get: function () {
      return true;
    },
    set: function (__s67param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenNotActive").set.call(this, __s67param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "payType", {
    get: function () {
      if (this.activeFestivalItemVO && this.activeFestivalItemVO.hasC2Costs()) {
        return __dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.PAYTYPE_C2;
      } else {
        return __dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.PAYTYPE_FOOD;
      }
    },
    set: function (__s73param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "payType").set.call(this, __s73param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "offsetIcon", {
    get: function () {
      return new __s0local0(5, -5);
    },
    set: function (__s77param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "offsetIcon").set.call(this, __s77param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "isExtendable", {
    get: function () {
      return true;
    },
    set: function (__s81param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.prototype, "isExtendable").set.call(this, __s81param0);
    },
    enumerable: true,
    configurable: true
  });
  return CastleFestivalPremiumShopVO;
}(__dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO);
exports.CastleFestivalPremiumShopVO = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleFestivalDialog = require("gge-module:export_CastleFestivalDialog");
var __dep_export_CastlePremiumMarketCollectionData = require("gge-module:export_CastlePremiumMarketCollectionData");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IPremiumMarketShopVO");

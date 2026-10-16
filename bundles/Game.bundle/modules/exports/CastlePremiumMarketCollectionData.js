Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_PremiumFestivalItemVO = require("gge-module:export_PremiumFestivalItemVO");
var __s0local0 = function (__s1param0) {
  function CastlePremiumMarketCollectionData() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePremiumMarketCollectionData, __s1param0);
  CastlePremiumMarketCollectionData.prototype.reset = function () {
    __s1param0.prototype.reset.call(this);
    if (this.premiumShopVOs != null) {
      for (var __s5local0 = 0, __s5local1 = this.premiumShopVOs; __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        if (__s5local2 !== undefined) {
          __s5local2.reset();
        }
      }
    }
    this.initShopVOList();
  };
  CastlePremiumMarketCollectionData.prototype.init = function (__s11param0) {
    this.parseXML(__s11param0);
    this.initShopVOList();
  };
  CastlePremiumMarketCollectionData.prototype.initShopVOList = function () {
    this.premiumShopVOs = [];
    this.premiumShopVOs.push(__dep_export_CastleModel.CastleModel.boostData.taxBribeVO);
    this.premiumShopVOs.push(__dep_export_CastleModel.CastleModel.boostData.marauderVO);
    this.premiumShopVOs.push(__dep_export_CastleModel.CastleModel.boostData.overseerFoodVO);
    this.premiumShopVOs.push(__dep_export_CastleModel.CastleModel.boostData.overseerWoodVO);
    this.premiumShopVOs.push(__dep_export_CastleModel.CastleModel.boostData.overseerStoneVO);
    this.premiumShopVOs.push(__dep_export_CastleModel.CastleModel.boostData.overseerMeadVO);
    this.premiumShopVOs.push(__dep_export_CastleModel.CastleModel.boostData.overseerBeefVO);
    this.premiumShopVOs.push(__dep_export_CastleModel.CastleModel.boostData.overseerHoneyVO);
    this.premiumShopVOs.push(new __dep_export_CastlePeaceProtectionPremiumShopVO.CastlePeaceProtectionPremiumShopVO());
    this.premiumShopVOs.push(new __dep_export_CastleFactionProtectionPremiumShopVO.CastleFactionProtectionPremiumShopVO());
    this.premiumShopVOs.push(new __dep_export_CastleUnitSlotPremiumShopVO.CastleUnitSlotPremiumShopVO());
    this.premiumShopVOs.push(new __dep_export_CastleToolSlotPremiumShopVO.CastleToolSlotPremiumShopVO());
    this.premiumShopVOs.push(__dep_export_CastleModel.CastleModel.boostData.instructorVO);
    this.premiumShopVOs.push(__dep_export_CastleModel.CastleModel.boostData.caravanOverloaderVO);
    this.premiumShopVOs.push(__dep_export_CastleModel.CastleModel.boostData.returnSpeedBoosterVO);
    this.premiumShopVOs.push(new __dep_export_CastleFlagPremiumShopVO.CastleFlagPremiumShopVO());
    this.premiumShopVOs.push(new __dep_export_CastleOpenGatePremiumShopVO.CastleOpenGatePremiumShopVO());
    this.premiumShopVOs.push(new __dep_export_CastleFestivalPremiumShopVO.CastleFestivalPremiumShopVO());
    this.premiumShopVOs.push(new __dep_export_CastleRelocateShopVO.CastleRelocateShopVO());
  };
  CastlePremiumMarketCollectionData.prototype.getShopVOsByType = function (__s15param0) {
    var __s15local0 = [];
    if (this.premiumShopVOs != null) {
      for (var __s15local1 = 0, __s15local2 = this.premiumShopVOs; __s15local1 < __s15local2.length; __s15local1++) {
        var __s15local3 = __s15local2[__s15local1];
        if (__s15local3 !== undefined && __s15local3.isType(__s15param0) && __s15local3.isVisible) {
          __s15local0.push(__s15local3);
        }
      }
    }
    __s15local0.sort(this.bindFunction(this.sortByPriorty));
    return __s15local0;
  };
  CastlePremiumMarketCollectionData.prototype.sortByPriorty = function (__s21param0, __s21param1) {
    return __s21param0.listSortPriority - __s21param1.listSortPriority;
  };
  CastlePremiumMarketCollectionData.prototype.parseXML = function (__s23param0) {
    var __s23local0;
    var __s23local1 = __s23param0.feasts;
    var __s23local2 = __s23local1.length;
    var __s23local3 = 0;
    var __s23local4 = 0;
    var __s23local5 = 0;
    var __s23local6 = 0;
    var __s23local7 = 0;
    var __s23local8 = 0;
    var __s23local9 = 0;
    var __s23local10 = 0;
    this._festivalItemVOs = [];
    for (var __s23local11 = 0; __s23local11 < __s23local2; __s23local11++) {
      __s23local3 = parseInt(__s23local1[__s23local11].feastID);
      __s23local4 = parseInt(__s23local1[__s23local11].minLevel);
      __s23local5 = parseInt(__s23local1[__s23local11].maxLevel);
      __s23local7 = parseInt(__s23local1[__s23local11].duration);
      __s23local8 = parseInt(__s23local1[__s23local11].costFood);
      __s23local9 = parseInt(__s23local1[__s23local11].costC2);
      __s23local6 = parseInt(__s23local1[__s23local11].productionBoost);
      __s23local10 = parseInt(__s23local1[__s23local11].sortOrder) - 1;
      __s23local0 = __s23local1[__s23local11].type;
      this._festivalItemVOs.push(new __dep_export_PremiumFestivalItemVO.PremiumFestivalItemVO(__s23local3, __s23local4, __s23local5, __s23local7, __s23local6, __s23local8, __s23local9, __s23local0, __s23local10));
    }
    this._festivalItemVOs.sort(this.bindFunction(this.sortBySortOrder));
  };
  CastlePremiumMarketCollectionData.prototype.sortBySortOrder = function (__s27param0, __s27param1) {
    if (__s27param0.sortOrder < __s27param1.sortOrder) {
      return -1;
    } else if (__s27param0.sortOrder > __s27param1.sortOrder) {
      return 1;
    } else {
      return 0;
    }
  };
  Object.defineProperty(CastlePremiumMarketCollectionData.prototype, "numFestivalItems", {
    get: function () {
      return this._festivalItemVOs.length;
    },
    enumerable: true,
    configurable: true
  });
  CastlePremiumMarketCollectionData.prototype.getFestivalItemBySortorder = function (__s34param0) {
    if (this._festivalItemVOs != null) {
      for (var __s34local0 = 0, __s34local1 = this._festivalItemVOs; __s34local0 < __s34local1.length; __s34local0++) {
        var __s34local2 = __s34local1[__s34local0];
        if (__s34local2 !== undefined && __s34local2.sortOrder == __s34param0) {
          return __s34local2;
        }
      }
    }
    return null;
  };
  CastlePremiumMarketCollectionData.prototype.getFestivalItemByID = function (__s40param0) {
    if (this._festivalItemVOs != null) {
      for (var __s40local0 = 0, __s40local1 = this._festivalItemVOs; __s40local0 < __s40local1.length; __s40local0++) {
        var __s40local2 = __s40local1[__s40local0];
        if (__s40local2 !== undefined && __s40local2.id == __s40param0) {
          return __s40local2;
        }
      }
    }
    return null;
  };
  CastlePremiumMarketCollectionData.prototype.getFestivalItemsByLevel = function (__s46param0) {
    var __s46local0 = [];
    if (this._festivalItemVOs != null) {
      for (var __s46local1 = 0, __s46local2 = this._festivalItemVOs; __s46local1 < __s46local2.length; __s46local1++) {
        var __s46local3 = __s46local2[__s46local1];
        if (__s46local3 !== undefined && __s46param0 >= __s46local3.minLevel && __s46param0 <= __s46local3.maxLevel) {
          __s46local0.push(__s46local3);
        }
      }
    }
    __s46local0.sort(this.bindFunction(this.sortBySortOrder));
    return __s46local0;
  };
  CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_HERO = "hero";
  CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_TOOL = "tool";
  CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_REST = "rest";
  CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_EVENT = "event";
  return CastlePremiumMarketCollectionData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.CastlePremiumMarketCollectionData = __s0local0;
var __dep_export_CastleFactionProtectionPremiumShopVO = require("gge-module:export_CastleFactionProtectionPremiumShopVO");
var __dep_export_CastleFestivalPremiumShopVO = require("gge-module:export_CastleFestivalPremiumShopVO");
var __dep_export_CastleFlagPremiumShopVO = require("gge-module:export_CastleFlagPremiumShopVO");
var __dep_export_CastleOpenGatePremiumShopVO = require("gge-module:export_CastleOpenGatePremiumShopVO");
var __dep_export_CastlePeaceProtectionPremiumShopVO = require("gge-module:export_CastlePeaceProtectionPremiumShopVO");
var __dep_export_CastleRelocateShopVO = require("gge-module:export_CastleRelocateShopVO");
var __dep_export_CastleToolSlotPremiumShopVO = require("gge-module:export_CastleToolSlotPremiumShopVO");
var __dep_export_CastleUnitSlotPremiumShopVO = require("gge-module:export_CastleUnitSlotPremiumShopVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");

import { CastleBasicData } from "./CastleBasicData";
import { CastleFactionProtectionPremiumShopVO } from "./CastleFactionProtectionPremiumShopVO";
import { CastleFestivalPremiumShopVO } from "./CastleFestivalPremiumShopVO";
import { CastleFlagPremiumShopVO } from "./CastleFlagPremiumShopVO";
import { CastleModel } from "./CastleModel";
import { CastleOpenGatePremiumShopVO } from "./CastleOpenGatePremiumShopVO";
import { CastlePeaceProtectionPremiumShopVO } from "./CastlePeaceProtectionPremiumShopVO";
import { CastleRelocateShopVO } from "./CastleRelocateShopVO";
import { CastleToolSlotPremiumShopVO } from "./CastleToolSlotPremiumShopVO";
import { CastleUnitSlotPremiumShopVO } from "./CastleUnitSlotPremiumShopVO";
import { PremiumFestivalItemVO } from "./PremiumFestivalItemVO";
export class CastlePremiumMarketCollectionData extends CastleBasicData {
  _festivalItemVOs: any;
  premiumShopVOs: any;

  reset() {
    super.reset();
    if (this.premiumShopVOs != null) {
      for (var __s5local0 = 0, __s5local1 = this.premiumShopVOs; __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        if (__s5local2 !== undefined) {
          __s5local2.reset();
        }
      }
    }
    this.initShopVOList();
  }
  init(argument0) {
    this.parseXML(argument0);
    this.initShopVOList();
  }
  initShopVOList() {
    this.premiumShopVOs = [];
    this.premiumShopVOs.push(CastleModel.boostData.taxBribeVO);
    this.premiumShopVOs.push(CastleModel.boostData.marauderVO);
    this.premiumShopVOs.push(CastleModel.boostData.overseerFoodVO);
    this.premiumShopVOs.push(CastleModel.boostData.overseerWoodVO);
    this.premiumShopVOs.push(CastleModel.boostData.overseerStoneVO);
    this.premiumShopVOs.push(CastleModel.boostData.overseerMeadVO);
    this.premiumShopVOs.push(CastleModel.boostData.overseerBeefVO);
    this.premiumShopVOs.push(CastleModel.boostData.overseerHoneyVO);
    this.premiumShopVOs.push(new CastlePeaceProtectionPremiumShopVO());
    this.premiumShopVOs.push(new CastleFactionProtectionPremiumShopVO());
    this.premiumShopVOs.push(new CastleUnitSlotPremiumShopVO());
    this.premiumShopVOs.push(new CastleToolSlotPremiumShopVO());
    this.premiumShopVOs.push(CastleModel.boostData.instructorVO);
    this.premiumShopVOs.push(CastleModel.boostData.caravanOverloaderVO);
    this.premiumShopVOs.push(CastleModel.boostData.returnSpeedBoosterVO);
    this.premiumShopVOs.push(new CastleFlagPremiumShopVO());
    this.premiumShopVOs.push(new CastleOpenGatePremiumShopVO());
    this.premiumShopVOs.push(new CastleFestivalPremiumShopVO());
    this.premiumShopVOs.push(new CastleRelocateShopVO());
  }
  getShopVOsByType(argument0) {
    var __s15local0 = [];
    if (this.premiumShopVOs != null) {
      for (var __s15local1 = 0, __s15local2 = this.premiumShopVOs; __s15local1 < __s15local2.length; __s15local1++) {
        var __s15local3 = __s15local2[__s15local1];
        if (__s15local3 !== undefined && __s15local3.isType(argument0) && __s15local3.isVisible) {
          __s15local0.push(__s15local3);
        }
      }
    }
    __s15local0.sort(this.bindFunction(this.sortByPriorty));
    return __s15local0;
  }
  sortByPriorty(argument0, argument1) {
    return argument0.listSortPriority - argument1.listSortPriority;
  }
  parseXML(argument0) {
    var __s23local0;
    var __s23local1 = argument0.feasts;
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
      this._festivalItemVOs.push(new PremiumFestivalItemVO(__s23local3, __s23local4, __s23local5, __s23local7, __s23local6, __s23local8, __s23local9, __s23local0, __s23local10));
    }
    this._festivalItemVOs.sort(this.bindFunction(this.sortBySortOrder));
  }
  sortBySortOrder(argument0, argument1) {
    if (argument0.sortOrder < argument1.sortOrder) {
      return -1;
    } else if (argument0.sortOrder > argument1.sortOrder) {
      return 1;
    } else {
      return 0;
    }
  }
  get numFestivalItems() {
    return this._festivalItemVOs.length;
  }
  getFestivalItemBySortorder(argument0) {
    if (this._festivalItemVOs != null) {
      for (var __s34local0 = 0, __s34local1 = this._festivalItemVOs; __s34local0 < __s34local1.length; __s34local0++) {
        var __s34local2 = __s34local1[__s34local0];
        if (__s34local2 !== undefined && __s34local2.sortOrder == argument0) {
          return __s34local2;
        }
      }
    }
    return null;
  }
  getFestivalItemByID(argument0) {
    if (this._festivalItemVOs != null) {
      for (var __s40local0 = 0, __s40local1 = this._festivalItemVOs; __s40local0 < __s40local1.length; __s40local0++) {
        var __s40local2 = __s40local1[__s40local0];
        if (__s40local2 !== undefined && __s40local2.id == argument0) {
          return __s40local2;
        }
      }
    }
    return null;
  }
  getFestivalItemsByLevel(argument0) {
    var __s46local0 = [];
    if (this._festivalItemVOs != null) {
      for (var __s46local1 = 0, __s46local2 = this._festivalItemVOs; __s46local1 < __s46local2.length; __s46local1++) {
        var __s46local3 = __s46local2[__s46local1];
        if (__s46local3 !== undefined && argument0 >= __s46local3.minLevel && argument0 <= __s46local3.maxLevel) {
          __s46local0.push(__s46local3);
        }
      }
    }
    __s46local0.sort(this.bindFunction(this.sortBySortOrder));
    return __s46local0;
  }
  static PREMIUMMARKET_TYPE_HERO = "hero";
  static PREMIUMMARKET_TYPE_TOOL = "tool";
  static PREMIUMMARKET_TYPE_REST = "rest";
  static PREMIUMMARKET_TYPE_EVENT = "event";
}

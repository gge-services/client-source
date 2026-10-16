Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_EventPackageVO = require("gge-module:export_EventPackageVO");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CollectableItemUnitVO = require("gge-module:export_CollectableItemUnitVO");
var __dep_export_ToolUnitVO = require("gge-module:export_ToolUnitVO");
var __dep_export_ClientConstPackages = require("gge-module:export_ClientConstPackages");
var __dep_export_CollectableItemBuildingVO = require("gge-module:export_CollectableItemBuildingVO");
var __dep_export_ACollectableItemResourceVO = require("gge-module:export_ACollectableItemResourceVO");
var __dep_export_ACollectableItemGemVO = require("gge-module:export_ACollectableItemGemVO");
var __dep_export_ACollectableItemEquipmentVO = require("gge-module:export_ACollectableItemEquipmentVO");
var __dep_export_CollectableItemPlagueDoctorVO = require("gge-module:export_CollectableItemPlagueDoctorVO");
var __dep_export_CollectableItemVipPointVO = require("gge-module:export_CollectableItemVipPointVO");
var __dep_export_CollectableItemVipTimeVO = require("gge-module:export_CollectableItemVipTimeVO");
var __dep_export_CollectableItemConstructionItemVO = require("gge-module:export_CollectableItemConstructionItemVO");
var __dep_export_CollectableItemRelicVO = require("gge-module:export_CollectableItemRelicVO");
var __dep_export_ACollectableItemPercentageBoosterVE = require("gge-module:export_ACollectableItemPercentageBoosterVE");
var __s0local0 = function (__s1param0) {
  function PrivateBestsellerShopPackageVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PrivateBestsellerShopPackageVO, __s1param0);
  PrivateBestsellerShopPackageVO.prototype.fillFromPBSOffer = function (__s5param0, __s5param1) {
    this._parentOfferID = __s5param1;
    this._rewards = __s5param0.getTotalRewardListFromOfferVO();
    this._costs = __s5param0.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_COSTS).costList;
    this._packageType = this.createPackageType();
    this._ignoreResourceStorageCapacity = __s5param0.getRewardComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_REWARD_EMPIRE_STANDARD).getOverload();
    var __s5local0 = __s5param0.getQuestConditionByName(__dep_export_ClientConstOffer.ClientConstOffer.QUEST_CONDITION_INTEGER_BOUGHT_OFFER_REWARD);
    if (__s5local0) {
      var __s5local1 = __s5local0.conditionTextReplacements;
      this._stock = __s5local1[1];
      this.boughtCount = __s5local1[0];
    }
  };
  PrivateBestsellerShopPackageVO.prototype.createPackageType = function () {
    var __s8local0 = this._rewards.getItemByIndex(0);
    if (__s8local0 instanceof __dep_export_CollectableItemUnitVO.CollectableItemUnitVO) {
      if (__s8local0.unitVO instanceof __dep_export_ToolUnitVO.ToolUnitVO) {
        return __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_TOOL;
      } else {
        return __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_SOLDIER;
      }
    } else if (__s8local0 instanceof __dep_export_CollectableItemBuildingVO.CollectableItemBuildingVO) {
      return __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_DECO;
    } else if (__s8local0 instanceof __dep_export_ACollectableItemResourceVO.ACollectableItemResourceVO) {
      return __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_RESOURCES;
    } else if (__s8local0 instanceof __dep_export_ACollectableItemGemVO.ACollectableItemGemVO) {
      return __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_GEM;
    } else if (__s8local0 instanceof __dep_export_ACollectableItemEquipmentVO.ACollectableItemEquipmentVO) {
      return __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_ITEM;
    } else if (__s8local0 instanceof __dep_export_ACollectableItemEquipmentVO.ACollectableItemEquipmentVO) {
      return __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_HERO;
    } else if (__s8local0 instanceof __dep_export_ACollectableItemPercentageBoosterVE.ACollectableItemPercentageBoosterVE) {
      return __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_BOOSTER;
    } else if (__s8local0 instanceof __dep_export_CollectableItemPlagueDoctorVO.CollectableItemPlagueDoctorVO) {
      return __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_PLAGUEMONK;
    } else if (__s8local0 instanceof __dep_export_CollectableItemVipPointVO.CollectableItemVipPointVO || __s8local0 instanceof __dep_export_CollectableItemVipTimeVO.CollectableItemVipTimeVO) {
      return __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_VIP;
    } else if (__s8local0 instanceof __dep_export_CollectableItemConstructionItemVO.CollectableItemConstructionItemVO) {
      return __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_CONSTRUCTION_ITEM;
    } else if (__s8local0 instanceof __dep_export_CollectableItemRelicVO.CollectableItemRelicVO) {
      if (__s8local0.type == __dep_export_CollectableItemRelicVO.CollectableItemRelicVO.TYPE_GEM) {
        return __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_RELIC_GEM;
      } else {
        return __dep_export_ClientConstPackages.ClientConstPackages.PACKAGE_TYPE_RELIC_ITEM;
      }
    } else {
      return "";
    }
  };
  Object.defineProperty(PrivateBestsellerShopPackageVO.prototype, "usePackageNameAndDescription", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateBestsellerShopPackageVO.prototype, "nameTextID", {
    get: function () {
      return this.firstReward.getNameTextId();
    },
    enumerable: true,
    configurable: true
  });
  PrivateBestsellerShopPackageVO.prototype.getCostList = function () {
    return this._costs.clone();
  };
  Object.defineProperty(PrivateBestsellerShopPackageVO.prototype, "c2Discount", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateBestsellerShopPackageVO.prototype, "parentOfferID", {
    get: function () {
      return this._parentOfferID;
    },
    enumerable: true,
    configurable: true
  });
  return PrivateBestsellerShopPackageVO;
}(__dep_export_EventPackageVO.EventPackageVO);
exports.PrivateBestsellerShopPackageVO = __s0local0;

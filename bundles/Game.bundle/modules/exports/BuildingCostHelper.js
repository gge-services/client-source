Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __s0local0 = function () {
  function BuildingCostHelper() {}
  BuildingCostHelper.getUpgradeCostList = function (__s5param0) {
    var __s5local0 = __s5param0.getUpgradeVO();
    var __s5local1 = __dep_export_CastleModel.CastleModel.areaData.activeCommonInfo.builderDiscount * __s5param0.builderMultiplier;
    var __s5local2 = __dep_export_CastleModel.CastleModel.subscriptionData.isEffectTypeActive(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_BUILDING_COSTS_BONUS);
    if (__s5local2) {
      __s5local1 += __dep_export_CastleModel.CastleModel.subscriptionData.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_BUILDING_COSTS_BONUS) * -1 / 100;
    }
    if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID) {
      var __s5local3 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
      if (__s5local3 && !__s5local3.isOneLMSActive) {
        __s5local1 = __s5local3.ownFaction == __dep_exact_26a421b704832cff_1.FactionConst.BLUE_FACTION ? Math.max(__s5local1, __dep_exact_26a421b704832cff_1.FactionConst.getCostReductionBonus(1 - __s5local3.factionBalanceRed)) : Math.max(__s5local1, __dep_exact_26a421b704832cff_1.FactionConst.getCostReductionBonus(__s5local3.factionBalanceRed));
      }
    }
    var __s5local4 = __dep_export_CastleModel.CastleModel.primeSaleData.getBestDiscountPrimeSaleComponentByShopVO(__s5param0, true);
    var __s5local5 = new __dep_export_CollectableList.CollectableList();
    if (__s5local0) {
      for (var __s5local6 = 0, __s5local7 = __s5local0.costs.getContainingTypes(); __s5local6 < __s5local7.length; __s5local6++) {
        var __s5local8 = __s5local7[__s5local6];
        var __s5local9 = __dep_exact_f855840627e6e145.int(__s5local0.getCost(__s5local8));
        if (__s5local8.type == __dep_export_CollectableEnum.CollectableEnum.C2 && __s5local4) {
          __s5local9 = __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s5local4, "PrimeSaleUpgradeComponent") ? __dep_exact_f855840627e6e145.int(__s5local4.getFinalPriceC2ForNextUpgrade(__s5local0)) : __s5local4.finalePriceC2;
        }
        var __s5local10 = __dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_RESOURCES.indexOf(__s5local8.type) >= 0;
        if (__s5local10) {
          __s5local9 *= 1 - __s5local1;
        }
        __s5local5.addItem(__dep_export_CollectableHelper.CollectableHelper.createVO(__s5local8.type, __s5local9, __s5local8.id, __s5local2 && __s5local10));
      }
    }
    return __s5local5;
  };
  return BuildingCostHelper;
}();
exports.BuildingCostHelper = __s0local0;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");

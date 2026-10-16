Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CollectableParserX2CEventPackages() {}
  CollectableParserX2CEventPackages.prototype.createCostList = function (__s5param0) {
    if (__dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_GOODS[0] == null) {
      __dep_export_ClientConstCollectable.ClientConstCollectable.__initialize_static_members();
    }
    var __s5local0 = new __dep_export_CollectableList.CollectableList();
    for (var __s5local1 = 0, __s5local2 = __dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_GOODS; __s5local1 < __s5local2.length; __s5local1++) {
      var __s5local3 = __s5local2[__s5local1];
      if (__s5local3 !== undefined) {
        var __s5local4 = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("packagePrice" + __dep_export_CollectableHelper.CollectableHelper.getGoodsKeySuffix(__s5local3), __s5param0, 0));
        if (__s5local4 > 0) {
          __s5local0.addItem(__dep_export_CollectableHelper.CollectableHelper.createVO(__s5local3, __s5local4));
        }
      }
    }
    __s5local0.addList(__dep_export_CollectableManager.CollectableManager.parser.x2cList.createList(__s5param0, __dep_export_ClientConstCollectable.ClientConstCollectable.XML_PREFIX_COST));
    if (__s5local0.length <= 0) {
      __s5local0.addItem(__dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.C2, 0));
    }
    return __s5local0;
  };
  CollectableParserX2CEventPackages.prototype.createRewardList = function (__s13param0) {
    var __s13local0 = new __dep_export_CollectableList.CollectableList();
    __s13local0.addList(__dep_export_CollectableManager.CollectableManager.parser.x2cList.createList(__s13param0, __dep_export_ClientConstCollectable.ClientConstCollectable.XML_PREFIX_ADD), true);
    __s13local0.addList(__dep_export_CollectableManager.CollectableManager.parser.x2cList.createList(__s13param0, __dep_export_ClientConstCollectable.ClientConstCollectable.XML_PREFIX_AMOUNT), true);
    __s13local0.addList(__dep_export_CollectableManager.CollectableManager.parser.x2cList.createList(__s13param0, ""), true);
    for (var __s13local1 in __s13param0) {
      switch (String(__s13local1)) {
        case "buildingID":
          __s13local0.addItem(new __dep_export_CollectableItemBuildingVO.CollectableItemBuildingVO(parseInt(__s13param0.buildingID || ""), parseInt(__s13param0.buildingAmount || "1")));
          break;
        case "unitID":
          __s13local0.addItem(new __dep_export_CollectableItemUnitVO.CollectableItemUnitVO(parseInt(__s13param0.unitID || ""), parseInt(__s13param0.unitAmount || "")));
          break;
        case "lootBox":
          var __s13local2 = String(__s13param0.lootBox).split("+");
          __s13local0.list[0].updateLootBoxVO(parseInt(__s13local2[0] || ""), parseInt(__s13local2[1] || ""));
          break;
        case "heroAmount":
          __s13local0.addItem(new __dep_export_CollectableItemHeroRandomVO.CollectableItemHeroRandomVO(-parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("specialHeroOfRarenessID", __s13param0, "0")), parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("heroAmount", __s13param0, "0"))));
          break;
        case "constructionItemID":
          __s13local0.addItem(new __dep_export_CollectableItemConstructionItemVO.CollectableItemConstructionItemVO(parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("constructionItemID", __s13param0, "0")), parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("constructionItemAmount", __s13param0, "0"))));
          break;
        case "plagueMonkCount":
          __s13local0.addItem(new __dep_export_CollectableItemPlagueDoctorVO.CollectableItemPlagueDoctorVO(parseInt(__s13param0.plagueMonkCount || "")));
          break;
        case "packageIDs":
          var __s13local3 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("packageIDs", __s13param0, "");
          for (var __s13local4 = __s13local3 != "" ? __s13local3.split(",") : [], __s13local5 = 0; __s13local5 < __s13local4.length; ++__s13local5) {
            var __s13local6 = __dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(__dep_exact_f855840627e6e145.int(__s13local4[__s13local5]));
            if (__s13local6) {
              __s13local0.addList(__s13local6.rewards, true);
            }
          }
          break;
        case "equipmentAmount":
          var __s13local7 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("equipmentAmount", __s13param0, "0"));
          var __s13local8 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("specialEquipmentOfRarenessID", __s13param0, "0"));
          var __s13local9 = __dep_export_CastleXMLUtils.CastleXMLUtils.getIntArrayFromString(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("equipmentIDs", __s13param0, ""), ",");
          var __s13local10 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("enchantedEquipmentIDs", __s13param0, "");
          if (__s13local9.length <= 0 && __s13local10.length <= 0) {
            if (__s13local8 > 0) {
              __s13local0.addItem(new __dep_export_CollectableItemEquipmentRarenessVO.CollectableItemEquipmentRarenessVO(-__s13local8, __s13local7));
            } else {
              __s13local0.addItem(new __dep_export_CollectableItemRandomRewardVO.CollectableItemRandomRewardVO(__dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_RARENESS, __s13local7));
            }
          }
          break;
        case "gemAmount":
          var __s13local11 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("gemAmount", __s13param0, "0"));
          var __s13local12 = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("specialGemOfLevelID", __s13param0, "0"));
          var __s13local13 = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("gemIDs", __s13param0, "");
          if ((__s13local13 != "" ? __s13local13.split(",") : []).length <= 0) {
            if (__s13local12 > 0) {
              __s13local0.addItem(new __dep_export_CollectableItemGemRandomVO.CollectableItemGemRandomVO(-__s13local12, __s13local11));
            } else {
              __s13local0.addItem(new __dep_export_CollectableItemRandomRewardVO.CollectableItemRandomRewardVO(__dep_export_CollectableEnum.CollectableEnum.GEM_RANDOM, __s13local11));
            }
          }
          break;
        case "amountXP":
          var __s13local14 = parseInt(__s13param0.amountXP || "");
          __s13local0.addItem(new __dep_export_CollectableItemXpVO.CollectableItemXpVO(__s13local14));
      }
    }
    return __s13local0;
  };
  return CollectableParserX2CEventPackages;
}();
exports.CollectableParserX2CEventPackages = __s0local0;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableItemEquipmentRarenessVO = require("gge-module:export_CollectableItemEquipmentRarenessVO");
var __dep_export_CollectableItemGemRandomVO = require("gge-module:export_CollectableItemGemRandomVO");
var __dep_export_CollectableItemBuildingVO = require("gge-module:export_CollectableItemBuildingVO");
var __dep_export_CollectableItemConstructionItemVO = require("gge-module:export_CollectableItemConstructionItemVO");
var __dep_export_CollectableItemHeroRandomVO = require("gge-module:export_CollectableItemHeroRandomVO");
var __dep_export_CollectableItemRandomRewardVO = require("gge-module:export_CollectableItemRandomRewardVO");
var __dep_export_CollectableItemXpVO = require("gge-module:export_CollectableItemXpVO");
var __dep_export_CollectableItemPlagueDoctorVO = require("gge-module:export_CollectableItemPlagueDoctorVO");
var __dep_export_CollectableItemUnitVO = require("gge-module:export_CollectableItemUnitVO");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");

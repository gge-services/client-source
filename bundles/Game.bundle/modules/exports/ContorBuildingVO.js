Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function ContorBuildingVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ContorBuildingVO, __s1param0);
  ContorBuildingVO.prototype.createInfoPanelItems = function (__s5param0) {
    var __s5local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
    var __s5local1 = __dep_export_CastleModel.CastleModel.userData.villageList;
    __s5param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourFood, "kingdom_villageFoodBoost", new __dep_exact_92d05af59ee2ff30.TextVO(__s5local1.getBonusStringByKingdomID(__s5local0, "Food")));
    __s5param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourStone, "kingdom_villageStoneBoost", new __dep_exact_92d05af59ee2ff30.TextVO(__s5local1.getBonusStringByKingdomID(__s5local0, "Stone")));
    __s5param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourWood, "kingdom_villageWoodBoost", new __dep_exact_92d05af59ee2ff30.TextVO(__s5local1.getBonusStringByKingdomID(__s5local0, "Wood")));
  };
  return ContorBuildingVO;
}(require("gge-module:export_AEffectBuildingVO").AEffectBuildingVO);
exports.ContorBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_AResourceProductionBuildingVO = require("gge-module:export_AResourceProductionBuildingVO");
var __s0local0 = function (__s1param0) {
  function FactionMaintentBuildingVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionMaintentBuildingVO, __s1param0);
  FactionMaintentBuildingVO.prototype.getFinalProductionValue = function () {
    return this.getBaseProductionValue() * this.getFinalProductivityFactor();
  };
  FactionMaintentBuildingVO.prototype.getBaseProductivityFactor = function () {
    return 1;
  };
  Object.defineProperty(FactionMaintentBuildingVO.prototype, "resourceType", {
    get: function () {
      return __dep_export_CollectableEnum.CollectableEnum.FOOD;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResourceProductionBuildingVO.AResourceProductionBuildingVO.prototype, "resourceType").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  FactionMaintentBuildingVO.prototype.createInfoPanelItems = function (__s13param0) {
    var __s13local0 = __dep_export_Iso.Iso.data.areaData.storage;
    __s13param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourFood, {
      t: "xPerHour",
      p: [__dep_exact_92d05af59ee2ff30.Localize.text("food")]
    }, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s13local0.getItem(__dep_export_CollectableEnum.CollectableEnum.FOOD).productionPerSec));
    __s13param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourWood, {
      t: "xPerHour",
      p: [__dep_exact_92d05af59ee2ff30.Localize.text("wood")]
    }, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s13local0.getItem(__dep_export_CollectableEnum.CollectableEnum.WOOD).productionPerSec));
    __s13param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourStone, {
      t: "xPerHour",
      p: [__dep_exact_92d05af59ee2ff30.Localize.text("stone")]
    }, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s13local0.getItem(__dep_export_CollectableEnum.CollectableEnum.STONE).productionPerSec));
    __s13param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Storage, "storage_capacity", new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.maxStorageValue), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    __s13param0.addInfoItem(Library.CastleInterfaceElements.Icon_UnitAmount_Keep, "unitsInCourtyard_limit_player_tooltip", new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_YARD_BONUS).strength), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    __s13param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_AllianceDefenseUnitAmountYardBonus, "allianceDefenseUnitAmount", new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_ALLIANCE_DEFENSE_UNIT_AMOUNT_YARD_BONUS).strength), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return FactionMaintentBuildingVO;
}(__dep_export_AResourceProductionBuildingVO.AResourceProductionBuildingVO);
exports.FactionMaintentBuildingVO = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");

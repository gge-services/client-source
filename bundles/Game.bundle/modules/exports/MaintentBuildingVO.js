Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleEffectEnum = require("gge-module:export_CastleEffectEnum");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_AResourceProductionBuildingVO = require("gge-module:export_AResourceProductionBuildingVO");
var __s0local0 = function (__s1param0) {
  function MaintentBuildingVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MaintentBuildingVO, __s1param0);
  MaintentBuildingVO.prototype.getFinalProductionValue = function () {
    return this.getBaseProductionValue() * this.getFinalProductivityFactor();
  };
  MaintentBuildingVO.prototype.getBaseProductivityFactor = function () {
    return 1;
  };
  Object.defineProperty(MaintentBuildingVO.prototype, "resourceType", {
    get: function () {
      return __dep_export_CollectableEnum.CollectableEnum.FOOD;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_AResourceProductionBuildingVO.AResourceProductionBuildingVO.prototype, "resourceType").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  MaintentBuildingVO.prototype.createInfoPanelItems = function (__s13param0) {
    __s13param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Storage, "storage_capacity", new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.maxStorageValue));
    __s13param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Food, {
      t: "xPerHour",
      p: [__dep_exact_92d05af59ee2ff30.Localize.text("food")]
    }, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.getFinalProductionValue()), this.getInfoItemTextColor(__dep_export_CastleEffectEnum.CastleEffectEnum.UNBOOSTEDFOODPRODUCTION));
    if (!__dep_export_SpecialServerHelper.SpecialServerHelper.isOnSpecialServer) {
      __s13param0.addInfoItem(Library.CastleInterfaceElements.Icon_UnitAmount_Keep, "unitsInCourtyard_limit_player_tooltip", new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_YARD_BONUS).strength));
    }
  };
  MaintentBuildingVO.prototype.createInfoDialogItems = function (__s16param0) {
    __s16param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Storage, "storage_capacity", new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.maxStorageValue));
    __s16param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Food, "foodproduction", new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.resourceProductions.getAmountOrDefaultByType(this.resourceType)));
    if (!__dep_export_SpecialServerHelper.SpecialServerHelper.isOnSpecialServer) {
      __s16param0.addInfoItem(Library.CastleInterfaceElements.Icon_UnitAmount_Keep, "unitsInCourtyard_limit_player_tooltip", new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.getEffectValue(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_YARD_BONUS).strength), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  return MaintentBuildingVO;
}(__dep_export_AResourceProductionBuildingVO.AResourceProductionBuildingVO);
exports.MaintentBuildingVO = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");

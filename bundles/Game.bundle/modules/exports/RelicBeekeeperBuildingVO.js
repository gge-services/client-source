Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_AResourceProductionBuildingVO = require("gge-module:export_AResourceProductionBuildingVO");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __s0local0 = function (__s1param0) {
  function RelicBeekeeperBuildingVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RelicBeekeeperBuildingVO, __s1param0);
  RelicBeekeeperBuildingVO.prototype.createInfoPanelItems = function (__s5param0) {
    __s5param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourHoney, "basicProduktion", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__dep_exact_9e901e8e2483a22f.MathBase.round(this.getBaseProductionValue(), 1)), this.getInfoItemTextColor2(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_HONEY_PRODUCTION_INCREASE), false);
    __s5param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Honey, "utilization", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [this.efficiency]));
    __s5param0.addInfoItem(Library.CastleInterfaceElements.Icon_Productivity, "productivity", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [Math.round(this.getBaseProductivityFactor() * 100)]), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, false);
    __s5param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourHoney, {
      t: "xPerHour",
      p: [__dep_exact_92d05af59ee2ff30_2.Localize.text("honey")]
    }, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__dep_exact_9e901e8e2483a22f.MathBase.round(this.getFinalProductionValue(), 1)), this.getInfoItemTextColor2(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_UNBOOSTED_HONEY_PRODUCTION), false);
    if (this.decoPoints > 0) {
      __s5param0.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.decoPoints), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  RelicBeekeeperBuildingVO.prototype.createInfoDialogItems = function (__s8param0) {
    __s1param0.prototype.createInfoDialogItems.call(this, __s8param0);
    __s8param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourHoney, "honeyproduction", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.resourceProductions.getAmountOrDefaultByType(this.resourceType)), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    __s8param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_HoneyStorage, "honeyStorage_capacityBonus_tt", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.maxStorageValue), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  Object.defineProperty(RelicBeekeeperBuildingVO.prototype, "resourceType", {
    get: function () {
      return __dep_export_CollectableEnum.CollectableEnum.HONEY;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicBeekeeperBuildingVO.prototype, "isBoostableBuilding", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  return RelicBeekeeperBuildingVO;
}(__dep_export_AResourceProductionBuildingVO.AResourceProductionBuildingVO);
exports.RelicBeekeeperBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");

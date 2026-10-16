Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleEffectEnum = require("gge-module:export_CastleEffectEnum");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __s0local0 = function (__s1param0) {
  function RelicWoodcutterBuildingVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RelicWoodcutterBuildingVO, __s1param0);
  RelicWoodcutterBuildingVO.prototype.createInfoPanelItems = function (__s5param0) {
    var __s5local0 = __dep_export_CastleModel.CastleModel.subscriptionData.isEffectTypeActive(__dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_WOOD_PRODUCTION_BOOST);
    __s5param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourWood, "basicProduktion", new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__dep_exact_9e901e8e2483a22f_1.MathBase.round(this.getBaseProductionValue(), 1)), this.getInfoItemTextColor(__dep_export_CastleEffectEnum.CastleEffectEnum.WOODPRODUCTION));
    __s5param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Forest, "utilization", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [this.efficiency]));
    __s5param0.addInfoItem(Library.CastleInterfaceElements.Icon_Productivity, "productivity", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [Math.round(this.getBaseProductivityFactor() * 100)]), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, false, __s5local0);
    __s5param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourWood, {
      t: "xPerHour",
      p: [__dep_exact_92d05af59ee2ff30.Localize.text("wood")]
    }, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__dep_exact_9e901e8e2483a22f_1.MathBase.round(this.getFinalProductionValue(), 1)), this.getInfoItemTextColor(__dep_export_CastleEffectEnum.CastleEffectEnum.UNBOOSTEDWOODPRODUCTION), false, __s5local0);
    if (this.maxStorageValue > 0) {
      __s5param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Storage, "woodStorage_capacityBonus_tt", new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.maxStorageValue), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
    if (this.decoPoints > 0) {
      __s5param0.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(__dep_export_CastleEffectEnum.CastleEffectEnum.DECOPOINTS), true);
    }
  };
  RelicWoodcutterBuildingVO.prototype.createInfoDialogItems = function (__s9param0) {
    __s1param0.prototype.createInfoDialogItems.call(this, __s9param0);
    if (this.maxStorageValue > 0) {
      __s9param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Storage, "woodStorage_capacityBonus_tt", new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.maxStorageValue), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
    if (this.decoPoints > 0) {
      __s9param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.decoPoints), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  RelicWoodcutterBuildingVO.prototype.createStorageDialogItems = function (__s13param0) {
    __s1param0.prototype.createStorageDialogItems.call(this, __s13param0);
    __s13param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourWood, "woodproduction", new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.resourceProductions.getAmountOrDefaultByType(this.resourceType)));
    if (this.decoPoints > 0) {
      __s13param0.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.decoPoints));
    }
  };
  return RelicWoodcutterBuildingVO;
}(require("gge-module:export_WoodcutterBuildingVO").WoodcutterBuildingVO);
exports.RelicWoodcutterBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");

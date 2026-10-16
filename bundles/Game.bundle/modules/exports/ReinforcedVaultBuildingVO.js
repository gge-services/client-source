Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function (__s1param0) {
  function ReinforcedVaultBuildingVO() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0._addEquipmentStorageCapacity = 0;
    __s3local0._addGemStorageCapacity = 0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ReinforcedVaultBuildingVO, __s1param0);
  ReinforcedVaultBuildingVO.prototype.parseXmlNode = function (__s5param0) {
    __s1param0.prototype.parseXmlNode.call(this, __s5param0);
    this._addEquipmentStorageCapacity = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("addEquipmentStorageCapacity", __s5param0));
    this._addGemStorageCapacity = __dep_exact_f855840627e6e145.int(__dep_export_CastleXMLUtils.CastleXMLUtils.getIntAttribute("addGemStorageCapacity", __s5param0));
  };
  ReinforcedVaultBuildingVO.prototype.createInfoPanelItems = function (__s7param0) {
    __s1param0.prototype.createInfoPanelItems.call(this, __s7param0);
    if (this.decoPoints > 0) {
      __s7param0.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.decoPoints), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
    this.allShowableBuildingEffects.forEach(function (__s10param0) {
      var __s10local0 = __s10param0.effect.effectType.type.simpleEffectIconClass;
      var __s10local1 = {
        t: "effect_name_" + __s10param0.effect.getEnhancedName(__s10param0.effectValue),
        p: __s10param0.effectValue.textReplacements
      };
      var __s10local2 = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s10param0.effect.effectType.type.simpleValueTextID, __s10param0.effectValue.textReplacements);
      __s7param0.addInfoItem(__s10local0, __s10local1, __s10local2, __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true, false, false);
    });
    __s7param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Equipment, "equipmentStorage_capacityBonus_tt", new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD, [this._addEquipmentStorageCapacity]), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    __s7param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_GemStorage, "gemStorage_capacityBonus_tt", new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD, [this._addGemStorageCapacity]), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  ReinforcedVaultBuildingVO.prototype.createInfoDialogItems = function (__s12param0) {
    __s1param0.prototype.createInfoDialogItems.call(this, __s12param0);
    if (this.mightValue > 0) {
      __s12param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Might, "playerMight", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.mightValue), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, false);
    }
  };
  ReinforcedVaultBuildingVO.prototype.parseAreaSpecificEffects = function () {
    __s1param0.prototype.parseAreaSpecificEffects.call(this);
  };
  return ReinforcedVaultBuildingVO;
}(require("gge-module:export_AEffectBuildingVO").AEffectBuildingVO);
exports.ReinforcedVaultBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");

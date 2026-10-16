Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __s0local0 = function (__s1param0) {
  function DragonBreathForgeBuildingVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DragonBreathForgeBuildingVO, __s1param0);
  DragonBreathForgeBuildingVO.prototype.createInfoPanelItems = function (__s5param0) {
    __s1param0.prototype.createInfoPanelItems.call(this, __s5param0);
    if (this.decoPoints > 0) {
      __s5param0.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.decoPoints), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
    if (this.mightValue > 0) {
      __s5param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Might, "playerMight", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.mightValue), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, false);
    }
    this.allShowableBuildingEffects.forEach(function (__s9param0) {
      var __s9local0 = __s9param0.effect.effectType.type.simpleEffectIconClass;
      var __s9local1 = {
        t: "effect_name_" + __s9param0.effect.getEnhancedName(__s9param0.effectValue),
        p: __s9param0.effectValue.textReplacements
      };
      var __s9local2 = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s9param0.effect.effectType.type.simpleValueTextID, __s9param0.effectValue.textReplacements);
      __s5param0.addInfoItem(__s9local0, __s9local1, __s9local2, __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true, false, false);
    });
  };
  DragonBreathForgeBuildingVO.prototype.createInfoDialogItems = function (__s11param0) {
    __s1param0.prototype.createInfoDialogItems.call(this, __s11param0);
  };
  DragonBreathForgeBuildingVO.prototype.parseAreaSpecificEffects = function () {
    __s1param0.prototype.parseAreaSpecificEffects.call(this);
  };
  return DragonBreathForgeBuildingVO;
}(require("gge-module:export_ACraftingBuildingVO").ACraftingBuildingVO);
exports.DragonBreathForgeBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");

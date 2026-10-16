Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __s0local0 = function (__s1param0) {
  function ButcherShopBuildingVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ButcherShopBuildingVO, __s1param0);
  Object.defineProperty(ButcherShopBuildingVO.prototype, "resourceType", {
    get: function () {
      return __dep_export_CollectableEnum.CollectableEnum.BEEF;
    },
    enumerable: true,
    configurable: true
  });
  ButcherShopBuildingVO.prototype.createInfoPanelItems = function (__s7param0) {
    __s1param0.prototype.createInfoPanelItems.call(this, __s7param0);
    if (this.decoPoints > 0) {
      __s7param0.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.decoPoints), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
    if (this.mightValue > 0) {
      __s7param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Might, "playerMight", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.mightValue), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, false);
    }
    this.allShowableBuildingEffects.forEach(function (__s11param0) {
      var __s11local0 = __s11param0.effect.effectType.type.simpleEffectIconClass;
      var __s11local1 = {
        t: "effect_name_" + __s11param0.effect.getEnhancedName(__s11param0.effectValue),
        p: __s11param0.effectValue.textReplacements
      };
      var __s11local2 = new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s11param0.effect.effectType.type.simpleValueTextID, __s11param0.effectValue.textReplacements);
      __s7param0.addInfoItem(__s11local0, __s11local1, __s11local2, __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true, false, false);
    });
    __s7param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BeefBoost, "beefbooster", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE, [this.resourceBoosts.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.BEEF)]), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  ButcherShopBuildingVO.prototype.createInfoDialogItems = function (__s13param0) {
    __s1param0.prototype.createInfoDialogItems.call(this, __s13param0);
  };
  return ButcherShopBuildingVO;
}(require("gge-module:export_AEffectBuildingVO").AEffectBuildingVO);
exports.ButcherShopBuildingVO = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");

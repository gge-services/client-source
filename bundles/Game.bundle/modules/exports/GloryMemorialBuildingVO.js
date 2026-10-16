Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __s0local0 = function (__s1param0) {
  function GloryMemorialBuildingVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GloryMemorialBuildingVO, __s1param0);
  GloryMemorialBuildingVO.prototype.getVisualClassName = function () {
    return "GloryMemorial_Building_Level1";
  };
  GloryMemorialBuildingVO.prototype.createInfoPanelItems = function (__s7param0) {
    __s7param0.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.decoPoints), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    for (var __s7local0 = 0, __s7local1 = this.allShowableBuildingEffects; __s7local0 < __s7local1.length; __s7local0++) {
      var __s7local2 = __s7local1[__s7local0];
      if (__s7local2.effect.effectType.id == __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_FAME_BOOST.id) {
        __s7param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_GloryBooster, "gloryMemorial_info_glory", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD, [__s7local2.strength]), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
      }
    }
  };
  return GloryMemorialBuildingVO;
}(require("gge-module:export_AEffectBuildingVO").AEffectBuildingVO);
exports.GloryMemorialBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");

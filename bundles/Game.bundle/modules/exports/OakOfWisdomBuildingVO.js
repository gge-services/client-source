Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __s0local0 = function (__s1param0) {
  function OakOfWisdomBuildingVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OakOfWisdomBuildingVO, __s1param0);
  OakOfWisdomBuildingVO.prototype.getVisualClassName = function () {
    return "OakOfWisdom_Building";
  };
  OakOfWisdomBuildingVO.prototype.getUpgradeInfoString = function () {
    return "xpBoosterBuilding_upgrade_info";
  };
  OakOfWisdomBuildingVO.prototype.getNameString = function () {
    return "xpBoosterBuilding_name";
  };
  OakOfWisdomBuildingVO.prototype.getShortInfoString = function () {
    return "xpBoosterBuilding_short_info";
  };
  Object.defineProperty(OakOfWisdomBuildingVO, "xpBoosterIconClass", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.userData.isLegend) {
        return Library.CastleInterfaceElements_Icons.Icon_OakOfWisdom_Legend;
      } else {
        return Library.CastleInterfaceElements_Icons.Icon_OakOfWisdom;
      }
    },
    enumerable: true,
    configurable: true
  });
  OakOfWisdomBuildingVO.prototype.createInfoPanelItems = function (__s17param0) {
    __s17param0.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.decoPoints), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
    for (var __s17local0 = 0, __s17local1 = this.allShowableBuildingEffects; __s17local0 < __s17local1.length; __s17local0++) {
      var __s17local2 = __s17local1[__s17local0];
      if (__s17local2.effect.effectType.id == __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_XP_BONUS.id) {
        __s17param0.addInfoItem(OakOfWisdomBuildingVO.xpBoosterIconClass, "xpBoosterBuilding_info_xp", new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD, [__s17local2.strength]), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
      }
    }
  };
  return OakOfWisdomBuildingVO;
}(require("gge-module:export_AEffectBuildingVO").AEffectBuildingVO);
exports.OakOfWisdomBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");

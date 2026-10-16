Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __s0local0 = function (__s1param0) {
  function CraneBuildingVO() {
    var __s3local0 = this;
    __s3local0._constructionSlotCount = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CraneBuildingVO, __s1param0);
  CraneBuildingVO.prototype.parseXmlNode = function (__s5param0) {
    var __s5local0 = this;
    __s1param0.prototype.parseXmlNode.call(this, __s5param0);
    this.allShowableBuildingEffects.forEach(function (__s7param0) {
      if (__s7param0.effect.effectType.type == __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_CONSTRUCTION_QUEUE) {
        __s5local0._constructionSlotCount = __s7param0.strength;
      }
    });
  };
  CraneBuildingVO.prototype.createInfoPanelItems = function (__s10param0) {
    __s10param0.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Crane, "crane_slot_number", new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_NOMINAL_ADD, [this.constructionSlotCount]), __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  Object.defineProperty(CraneBuildingVO.prototype, "constructionSlotCount", {
    get: function () {
      return this._constructionSlotCount;
    },
    enumerable: true,
    configurable: true
  });
  return CraneBuildingVO;
}(require("gge-module:export_AEffectBuildingVO").AEffectBuildingVO);
exports.CraneBuildingVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IShopVO", "ICostVO", "IInventoryVO");

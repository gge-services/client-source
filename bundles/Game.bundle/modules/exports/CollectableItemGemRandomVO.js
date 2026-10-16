Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function CollectableItemGemRandomVO(__s3param0 = __dep_exact_f855840627e6e145.int(-__dep_exact_26a421b704832cff.EquipmentConst.RARENESS_COMMON), __s3param1 = 1) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemGemRandomVO, __s1param0);
  CollectableItemGemRandomVO.prototype.parseServerObject = function (__s5param0) {
    __s1param0.prototype.parseServerObject.call(this, __s5param0);
    this.id = -__s5param0;
  };
  CollectableItemGemRandomVO.prototype.parseXmlObject = function (__s7param0) {
    this.id = -__dep_exact_f855840627e6e145.int(__s7param0);
  };
  CollectableItemGemRandomVO.prototype.getTooltipTextId = function () {
    return "equipmentRareness_name";
  };
  CollectableItemGemRandomVO.prototype.getDescriptionTextId = function () {
    return "randomEquipment_short_info";
  };
  CollectableItemGemRandomVO.__initialize_static_members = function () {
    CollectableItemGemRandomVO.SERVER_KEY = "GLID";
    CollectableItemGemRandomVO.XML_KEY = "gemLevelIDs";
  };
  return CollectableItemGemRandomVO;
}(require("gge-module:export_ACollectableItemGemVO").ACollectableItemGemVO);
exports.CollectableItemGemRandomVO = __s0local0;
__s0local0.__initialize_static_members();

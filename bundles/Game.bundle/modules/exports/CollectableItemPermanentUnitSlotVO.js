Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CollectableItemPermanentUnitSlotVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, 1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemPermanentUnitSlotVO, __s1param0);
  CollectableItemPermanentUnitSlotVO.prototype.getTooltipTextId = function () {
    return "recruitmentSlot_name";
  };
  CollectableItemPermanentUnitSlotVO.prototype.getDescriptionTextId = function () {
    return "recruitmentSlot_short_info";
  };
  CollectableItemPermanentUnitSlotVO.prototype.isCombineAbleWith = function (__s9param0) {
    return false;
  };
  CollectableItemPermanentUnitSlotVO.__initialize_static_members = function () {
    CollectableItemPermanentUnitSlotVO.SERVER_KEY = "PUS";
    CollectableItemPermanentUnitSlotVO.XML_KEY = "unitSlot";
  };
  return CollectableItemPermanentUnitSlotVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.CollectableItemPermanentUnitSlotVO = __s0local0;
__s0local0.__initialize_static_members();

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CollectableItemPermanentToolSlotVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, 1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemPermanentToolSlotVO, __s1param0);
  CollectableItemPermanentToolSlotVO.prototype.getTooltipTextId = function () {
    return "productionSlot_name";
  };
  CollectableItemPermanentToolSlotVO.prototype.getDescriptionTextId = function () {
    return "productionSlot_short_info";
  };
  CollectableItemPermanentToolSlotVO.prototype.isCombineAbleWith = function (__s9param0) {
    return false;
  };
  CollectableItemPermanentToolSlotVO.__initialize_static_members = function () {
    CollectableItemPermanentToolSlotVO.SERVER_KEY = "PTS";
    CollectableItemPermanentToolSlotVO.XML_KEY = "toolSlot";
  };
  return CollectableItemPermanentToolSlotVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.CollectableItemPermanentToolSlotVO = __s0local0;
__s0local0.__initialize_static_members();

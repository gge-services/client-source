Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CollectableItemRageBoosterVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemRageBoosterVO, __s1param0);
  CollectableItemRageBoosterVO.prototype.getTooltipTextId = function () {
    return "rageBooster_name";
  };
  CollectableItemRageBoosterVO.prototype.getDescriptionTextId = function () {
    return "rageBooster_short_info";
  };
  CollectableItemRageBoosterVO.__initialize_static_members = function () {
    CollectableItemRageBoosterVO.SERVER_KEY = "RPB";
  };
  return CollectableItemRageBoosterVO;
}(require("gge-module:export_ACollectableItemPercentageBoosterVO").ACollectableItemPercentageBoosterVO);
exports.CollectableItemRageBoosterVO = __s0local0;
__s0local0.__initialize_static_members();

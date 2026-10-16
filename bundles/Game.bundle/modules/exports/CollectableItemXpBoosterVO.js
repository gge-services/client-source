Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CollectableItemXpBoosterVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemXpBoosterVO, __s1param0);
  CollectableItemXpBoosterVO.prototype.getTooltipTextId = function () {
    return "xpBooster_name";
  };
  CollectableItemXpBoosterVO.prototype.getDescriptionTextId = function () {
    return "xpBooster_short_info";
  };
  CollectableItemXpBoosterVO.__initialize_static_members = function () {
    CollectableItemXpBoosterVO.SERVER_KEY = "XPB";
  };
  return CollectableItemXpBoosterVO;
}(require("gge-module:export_ACollectableItemPercentageBoosterVO").ACollectableItemPercentageBoosterVO);
exports.CollectableItemXpBoosterVO = __s0local0;
__s0local0.__initialize_static_members();

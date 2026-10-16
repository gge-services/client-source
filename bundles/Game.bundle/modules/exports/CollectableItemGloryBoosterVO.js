Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CollectableItemGloryBoosterVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemGloryBoosterVO, __s1param0);
  CollectableItemGloryBoosterVO.prototype.getTooltipTextId = function () {
    return "fameBoost_name";
  };
  CollectableItemGloryBoosterVO.prototype.getDescriptionTextId = function () {
    return "fameBoost_short_info";
  };
  CollectableItemGloryBoosterVO.__initialize_static_members = function () {
    CollectableItemGloryBoosterVO.SERVER_KEY = "PG";
  };
  return CollectableItemGloryBoosterVO;
}(require("gge-module:export_ACollectableItemPercentageBoosterVO").ACollectableItemPercentageBoosterVO);
exports.CollectableItemGloryBoosterVO = __s0local0;
__s0local0.__initialize_static_members();

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CollectableItemKhanTabletBoosterVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemKhanTabletBoosterVO, __s1param0);
  CollectableItemKhanTabletBoosterVO.prototype.getTooltipTextId = function () {
    return "nomadeBooster_name";
  };
  CollectableItemKhanTabletBoosterVO.prototype.getDescriptionTextId = function () {
    return "nomadBooster_short_info";
  };
  CollectableItemKhanTabletBoosterVO.__initialize_static_members = function () {
    CollectableItemKhanTabletBoosterVO.SERVER_KEY = "KTB";
  };
  return CollectableItemKhanTabletBoosterVO;
}(require("gge-module:export_ACollectableItemPercentageBoosterVO").ACollectableItemPercentageBoosterVO);
exports.CollectableItemKhanTabletBoosterVO = __s0local0;
__s0local0.__initialize_static_members();

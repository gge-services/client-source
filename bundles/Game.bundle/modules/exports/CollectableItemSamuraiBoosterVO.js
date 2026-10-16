Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CollectableItemSamuraiBoosterVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemSamuraiBoosterVO, __s1param0);
  CollectableItemSamuraiBoosterVO.prototype.getTooltipTextId = function () {
    return "samuraiBooster_name";
  };
  CollectableItemSamuraiBoosterVO.prototype.getDescriptionTextId = function () {
    return "samuraiBooster_short_info";
  };
  CollectableItemSamuraiBoosterVO.__initialize_static_members = function () {
    CollectableItemSamuraiBoosterVO.SERVER_KEY = "STB";
  };
  return CollectableItemSamuraiBoosterVO;
}(require("gge-module:export_ACollectableItemPercentageBoosterVO").ACollectableItemPercentageBoosterVO);
exports.CollectableItemSamuraiBoosterVO = __s0local0;
__s0local0.__initialize_static_members();

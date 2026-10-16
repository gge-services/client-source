Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CollectableItemGallantryBoosterVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemGallantryBoosterVO, __s1param0);
  CollectableItemGallantryBoosterVO.prototype.getTooltipTextId = function () {
    return "gallantryBooster_name";
  };
  CollectableItemGallantryBoosterVO.prototype.getDescriptionTextId = function () {
    return "gallantryBooster_short_info";
  };
  CollectableItemGallantryBoosterVO.__initialize_static_members = function () {
    CollectableItemGallantryBoosterVO.SERVER_KEY = "GPB";
  };
  return CollectableItemGallantryBoosterVO;
}(require("gge-module:export_ACollectableItemPercentageBoosterVO").ACollectableItemPercentageBoosterVO);
exports.CollectableItemGallantryBoosterVO = __s0local0;
__s0local0.__initialize_static_members();

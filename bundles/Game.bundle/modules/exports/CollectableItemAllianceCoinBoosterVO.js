Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CollectableItemAllianceCoinBoosterVO() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemAllianceCoinBoosterVO, __s1param0);
  CollectableItemAllianceCoinBoosterVO.prototype.getTooltipTextId = function () {
    return "royalCoinsBooster_name";
  };
  CollectableItemAllianceCoinBoosterVO.prototype.getDescriptionTextId = function () {
    return "royalCoinsBooster_short_info";
  };
  CollectableItemAllianceCoinBoosterVO.__initialize_static_members = function () {
    CollectableItemAllianceCoinBoosterVO.SERVER_KEY = "ACB";
  };
  return CollectableItemAllianceCoinBoosterVO;
}(require("gge-module:export_ACollectableItemPercentageBoosterVO").ACollectableItemPercentageBoosterVO);
exports.CollectableItemAllianceCoinBoosterVO = __s0local0;
__s0local0.__initialize_static_members();

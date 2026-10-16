Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CollectableItemKahnMedalBoosterVO() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemKahnMedalBoosterVO, __s1param0);
  CollectableItemKahnMedalBoosterVO.prototype.getTooltipTextId = function () {
    return "khanMedalBooster_name";
  };
  CollectableItemKahnMedalBoosterVO.prototype.getDescriptionTextId = function () {
    return "khanMedalBooster_short_info";
  };
  CollectableItemKahnMedalBoosterVO.SERVER_KEY = "KMB";
  return CollectableItemKahnMedalBoosterVO;
}(require("gge-module:export_ACollectableItemPercentageBoosterVO").ACollectableItemPercentageBoosterVO);
exports.CollectableItemKahnMedalBoosterVO = __s0local0;

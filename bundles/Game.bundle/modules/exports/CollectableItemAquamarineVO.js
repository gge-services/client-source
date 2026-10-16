Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CollectableItemAquamarineVO(__s3param0 = 0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemAquamarineVO, __s1param0);
  CollectableItemAquamarineVO.prototype.getTooltipTextId = function () {
    return "aquamarin_tooltip";
  };
  CollectableItemAquamarineVO.prototype.getDescriptionTextId = function () {
    return "aquamarin_short_info";
  };
  CollectableItemAquamarineVO.SERVER_KEY = "A";
  CollectableItemAquamarineVO.XML_KEY = "aquamarine";
  return CollectableItemAquamarineVO;
}(require("gge-module:export_ACollectableItemResourceVO").ACollectableItemResourceVO);
exports.CollectableItemAquamarineVO = __s0local0;

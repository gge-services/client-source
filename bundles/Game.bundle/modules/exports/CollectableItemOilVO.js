Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CollectableItemOilVO(__s3param0 = 0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemOilVO, __s1param0);
  CollectableItemOilVO.prototype.getTooltipTextId = function () {
    return "oliveoil";
  };
  CollectableItemOilVO.prototype.getDescriptionTextId = function () {
    return "oliveoil_short_info";
  };
  CollectableItemOilVO.SERVER_KEY = "O";
  CollectableItemOilVO.XML_KEY = "oil";
  return CollectableItemOilVO;
}(require("gge-module:export_ACollectableItemResourceVO").ACollectableItemResourceVO);
exports.CollectableItemOilVO = __s0local0;

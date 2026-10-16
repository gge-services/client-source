Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function ACollectableItemGoodsVO(__s3param0 = 0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACollectableItemGoodsVO, __s1param0);
  ACollectableItemGoodsVO.prototype.parseServerObject = function (__s5param0) {
    __s1param0.prototype.parseServerObject.call(this, __s5param0);
    this.amount = __s5param0;
  };
  ACollectableItemGoodsVO.prototype.getTooltipTextId = function () {
    return this.itemType.name;
  };
  ACollectableItemGoodsVO.prototype.getDescriptionTextId = function () {
    return this.itemType.name + "_short_info";
  };
  return ACollectableItemGoodsVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.ACollectableItemGoodsVO = __s0local0;

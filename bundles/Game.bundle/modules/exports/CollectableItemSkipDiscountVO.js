Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_SkipDiscountBoosterVO = require("gge-module:export_SkipDiscountBoosterVO");
var __s0local0 = function (__s1param0) {
  function CollectableItemSkipDiscountVO(__s3param0 = 0, __s3param1 = 0) {
    var __s3local0 = __s1param0.call(this, 1) || this;
    __s3local0._skipDiscountVO = new __dep_export_SkipDiscountBoosterVO.SkipDiscountBoosterVO(__s3param0, __s3param1);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemSkipDiscountVO, __s1param0);
  CollectableItemSkipDiscountVO.prototype.parseServerObject = function (__s5param0) {
    __s1param0.prototype.parseServerObject.call(this, __s5param0);
    this._skipDiscountVO = new __dep_export_SkipDiscountBoosterVO.SkipDiscountBoosterVO(__s5param0[0], __s5param0[1]);
  };
  CollectableItemSkipDiscountVO.prototype.getTooltipTextId = function () {
    return "skipDiscount_tooltip";
  };
  CollectableItemSkipDiscountVO.prototype.clone = function () {
    var __s9local0 = __s1param0.prototype.clone.call(this);
    __s9local0.skipDiscountVO = this.skipDiscountVO.clone();
    return __s9local0;
  };
  CollectableItemSkipDiscountVO.prototype.isCombineAbleWith = function (__s11param0) {
    return false;
  };
  Object.defineProperty(CollectableItemSkipDiscountVO.prototype, "skipDiscountVO", {
    get: function () {
      return this._skipDiscountVO;
    },
    set: function (__s15param0) {
      this._skipDiscountVO = __s15param0;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemSkipDiscountVO.SERVER_KEY = "SD_DISABLED";
  CollectableItemSkipDiscountVO.XML_KEY = "skipDiscount";
  return CollectableItemSkipDiscountVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.CollectableItemSkipDiscountVO = __s0local0;

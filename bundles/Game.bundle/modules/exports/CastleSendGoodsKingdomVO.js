Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function CastleSendGoodsKingdomVO(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4) {
    var __s3local0 = __s1param0.call(this, CastleSendGoodsKingdomVO.getSendableResourceList(__s3param0, __s3param2, __s3param3, __s3param1), Number.MAX_VALUE, null) || this;
    __s3local0._taxRate = NaN;
    __s3local0._isSubscriptionBuffed = false;
    __s3local0._taxRate = __s3param1;
    __s3local0._targetResources = __s3param2;
    __s3local0._storageSpace = __s3param3;
    __s3local0._isSubscriptionBuffed = __s3param4;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSendGoodsKingdomVO, __s1param0);
  CastleSendGoodsKingdomVO.getSendableResourceList = function (__s5param0, __s5param1, __s5param2, __s5param3) {
    var __s5local0;
    var __s5local1 = new __dep_export_CollectableList.CollectableList();
    for (var __s5local2 = 0; __s5local2 < __s5param0.length; __s5local2++) {
      __s5local0 = __s5param0.getItemByIndexSave(__s5local2);
      if (__s5param1.getItemByType(__s5local0.itemType) != null) {
        var __s5local3 = __dep_exact_f855840627e6e145.int(Math.min(Math.max(0, (__s5param2.getAmountOrDefaultByType(__s5local0.itemType) - __s5param1.getAmountOrDefaultByType(__s5local0.itemType)) / __s5param3), __s5local0.amount));
        __s5local1.addItem(__dep_export_CollectableHelper.CollectableHelper.createVO(__s5local0.itemType, __s5local3));
      }
    }
    return __s5local1;
  };
  Object.defineProperty(CastleSendGoodsKingdomVO.prototype, "taxRate", {
    get: function () {
      return this._taxRate;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSendGoodsKingdomVO.prototype, "targetResources", {
    get: function () {
      return this._targetResources;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSendGoodsKingdomVO.prototype, "storageSpace", {
    get: function () {
      return this._storageSpace;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSendGoodsKingdomVO.prototype, "isSubscriptionBuffed", {
    get: function () {
      return this._isSubscriptionBuffed;
    },
    enumerable: true,
    configurable: true
  });
  return CastleSendGoodsKingdomVO;
}(require("gge-module:export_CastleSendGoodsVO").CastleSendGoodsVO);
exports.CastleSendGoodsKingdomVO = __s0local0;
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");

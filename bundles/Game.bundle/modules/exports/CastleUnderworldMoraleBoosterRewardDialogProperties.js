Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleUnderworldMoraleBoosterRewardDialogProperties(__s3param0) {
    var __s3local0 = this;
    __s3local0._rewardId = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._rewardId = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(__s3param0));
    var __s3local1 = __dep_export_CastleModel.CastleModel.rewardData.getListById(__s3local0._rewardId);
    if (__s3local1 && __s3local1.length > 0) {
      __s3local0._decoCollectableItem = __s3local1.getItemByIndex(0);
    }
    __s3local1 = null;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleUnderworldMoraleBoosterRewardDialogProperties, __s1param0);
  Object.defineProperty(CastleUnderworldMoraleBoosterRewardDialogProperties.prototype, "rewardId", {
    get: function () {
      return this._rewardId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnderworldMoraleBoosterRewardDialogProperties.prototype, "decoCollectableItem", {
    get: function () {
      return this._decoCollectableItem;
    },
    enumerable: true,
    configurable: true
  });
  return CastleUnderworldMoraleBoosterRewardDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleUnderworldMoraleBoosterRewardDialogProperties = __s0local0;

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CollectableItemRandomRewardVO(__s3param0 = null, __s3param1 = 1) {
    var __s3local0 = __s1param0.call(this, __s3param1) || this;
    __s3local0._rewardType = __dep_export_CollectableEnum.CollectableEnum.UNKNOWN;
    __s3local0._rewardType = __s3param0 || __dep_export_CollectableEnum.CollectableEnum.UNKNOWN;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemRandomRewardVO, __s1param0);
  Object.defineProperty(CollectableItemRandomRewardVO.prototype, "rewardType", {
    get: function () {
      return this._rewardType;
    },
    set: function (__s7param0) {
      this._rewardType = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemRandomRewardVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.CollectableItemRandomRewardVO = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");

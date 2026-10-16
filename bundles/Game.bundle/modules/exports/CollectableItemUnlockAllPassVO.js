Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CollectableItemUnlockAllPassVO() {
    return __s1param0.call(this, 1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemUnlockAllPassVO, __s1param0);
  Object.defineProperty(CollectableItemUnlockAllPassVO.prototype, "hubRewardIdsToUnlock", {
    get: function () {
      return this._hubRewardIdsToUnlock;
    },
    set: function (__s7param0) {
      this._hubRewardIdsToUnlock = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemUnlockAllPassVO.prototype.getTooltipTextId = function () {
    return "dialog_unlockAllExtraTierRewards_name";
  };
  CollectableItemUnlockAllPassVO.prototype.getDescriptionTextId = function () {
    return "dialog_rewardHub_unlockAll_rewardPasses_desc";
  };
  return CollectableItemUnlockAllPassVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.CollectableItemUnlockAllPassVO = __s0local0;

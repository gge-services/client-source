Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function RewardTierVO(__s3param0, __s3param1, __s3param2, __s3param3) {
    this._rewardType = __s3param0;
    this._isCollected = __s3param1;
    this._rewards = __s3param2;
    this._rewardIds = __s3param3;
  }
  Object.defineProperty(RewardTierVO.prototype, "rewardType", {
    get: function () {
      return this._rewardType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardTierVO.prototype, "isCollected", {
    get: function () {
      return this._isCollected;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardTierVO.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardTierVO.prototype, "rewardIds", {
    get: function () {
      return this._rewardIds;
    },
    enumerable: true,
    configurable: true
  });
  return RewardTierVO;
}();
exports.RewardTierVO = __s0local0;

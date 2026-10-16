Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function GenericScoreBarRewardListSublayerProperties(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4 = "", __s3param5 = "", __s3param6 = true) {
    var __s3local0 = this;
    __s3local0._rewardsReceived = 0;
    __s3local0._isPlayerQualifiedForRewards = true;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._rewardList = __s3param0;
    __s3local0._pointThreshholds = __s3param1;
    __s3local0._rewardsReceived = __s3param2;
    __s3local0._additionalText = __s3param3;
    __s3local0._customPointTextID = __s3param4;
    __s3local0._customGrantTypeTextID = __s3param5;
    __s3local0._isPlayerQualifiedForRewards = __s3param6;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GenericScoreBarRewardListSublayerProperties, __s1param0);
  GenericScoreBarRewardListSublayerProperties.prototype.isPlayerQualifiedForRewards = function () {
    return this._isPlayerQualifiedForRewards;
  };
  Object.defineProperty(GenericScoreBarRewardListSublayerProperties.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericScoreBarRewardListSublayerProperties.prototype, "pointThreshholds", {
    get: function () {
      return this._pointThreshholds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericScoreBarRewardListSublayerProperties.prototype, "rewardsReceived", {
    get: function () {
      return this._rewardsReceived;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericScoreBarRewardListSublayerProperties.prototype, "additionalText", {
    get: function () {
      return this._additionalText;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericScoreBarRewardListSublayerProperties.prototype, "customPointTextID", {
    get: function () {
      return this._customPointTextID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericScoreBarRewardListSublayerProperties.prototype, "customGrantTypeTextID", {
    get: function () {
      return this._customGrantTypeTextID;
    },
    enumerable: true,
    configurable: true
  });
  return GenericScoreBarRewardListSublayerProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.GenericScoreBarRewardListSublayerProperties = __s0local0;

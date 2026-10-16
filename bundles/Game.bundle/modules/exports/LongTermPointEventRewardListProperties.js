Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function LongTermPointEventRewardListProperties(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = this;
    __s3local0._rewardsReceived = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._rewardList = __s3param0;
    __s3local0._pointThreshholds = __s3param1;
    __s3local0._rewardsReceived = __s3param2;
    __s3local0._skin = __s3param3;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LongTermPointEventRewardListProperties, __s1param0);
  Object.defineProperty(LongTermPointEventRewardListProperties.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventRewardListProperties.prototype, "pointThreshholds", {
    get: function () {
      return this._pointThreshholds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventRewardListProperties.prototype, "rewardsReceived", {
    get: function () {
      return this._rewardsReceived;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventRewardListProperties.prototype, "skin", {
    get: function () {
      return this._skin;
    },
    enumerable: true,
    configurable: true
  });
  return LongTermPointEventRewardListProperties;
}(require("gge-module:exact_9e901e8e2483a22f").BasicProperties);
exports.LongTermPointEventRewardListProperties = __s0local0;

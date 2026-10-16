Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleScoreEventScoreBarProperties = require("gge-module:export_CastleScoreEventScoreBarProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleFactionInvasionEventTopXScoreBarProperties(__s3param0, __s3param1, __s3param2, __s3param3 = null, __s3param4 = null, __s3param5 = __dep_exact_f855840627e6e145.int(__dep_export_CastleScoreEventScoreBarProperties.CastleScoreEventScoreBarProperties.NUMBER_OF_THRESHOLD_REWARDS), __s3param6 = __dep_exact_f855840627e6e145.int(__dep_export_CastleScoreEventScoreBarProperties.CastleScoreEventScoreBarProperties.NUMBER_OF_RANK_REWARDS)) {
    var __s3local0 = this;
    __s3local0._topXRewardStartIndex = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5, __s3param6) || this)._topXRewardStartIndex = __dep_exact_f855840627e6e145.int(__s3param0.length - __s3local0.numRankRewards - __s3local0.numThresholdRewards);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionInvasionEventTopXScoreBarProperties, __s1param0);
  CastleFactionInvasionEventTopXScoreBarProperties.prototype.getReward = function (__s5param0) {
    if (__s5param0 >= this.numThresholdRewards) {
      return __s1param0.prototype.getReward.call(this, this._topXRewardStartIndex + __s5param0);
    } else {
      return __s1param0.prototype.getReward.call(this, __s5param0);
    }
  };
  Object.defineProperty(CastleFactionInvasionEventTopXScoreBarProperties.prototype, "rewardIconDimension", {
    get: function () {
      return CastleFactionInvasionEventTopXScoreBarProperties.REWARD_ICON_DIMENSIONS_0;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleScoreEventScoreBarProperties.CastleScoreEventScoreBarProperties.prototype, "rewardIconDimension").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionInvasionEventTopXScoreBarProperties.__initialize_static_members = function () {
    CastleFactionInvasionEventTopXScoreBarProperties.REWARD_ICON_DIMENSIONS_0 = new __s0local0(37, 37);
  };
  return CastleFactionInvasionEventTopXScoreBarProperties;
}(__dep_export_CastleScoreEventScoreBarProperties.CastleScoreEventScoreBarProperties);
exports.CastleFactionInvasionEventTopXScoreBarProperties = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IScorebarProperties");
__s0local1.__initialize_static_members();

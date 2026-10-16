Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function CastlePaginatedScoreEventScoreBarProperties(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4 = null, __s3param5 = null, __s3param6 = CastlePaginatedScoreEventScoreBarProperties.NUMBER_OF_THRESHOLD_REWARDS_0, __s3param7 = CastlePaginatedScoreEventScoreBarProperties.NUMBER_OF_RANK_REWARDS_0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5, __s3param6, __s3param7) || this)._pagination = __s3param0;
    __s3local0._pagination.maxPages = __dep_exact_f855840627e6e145.int(__s3param1.length - __s3local0.numRankRewards - (__s3local0.numThresholdRewards - 1));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePaginatedScoreEventScoreBarProperties, __s1param0);
  CastlePaginatedScoreEventScoreBarProperties.prototype.getToolTip = function (__s5param0, __s5param1) {
    var __s5local0 = __s1param0.prototype.getToolTip.call(this, __s5param0, __s5param1);
    __s5local0.p = [this._toolTipValues[this.getPaginatedIndex(__s5param0)] ? this._toolTipValues[this.getPaginatedIndex(__s5param0)] : 1];
    return __s5local0;
  };
  CastlePaginatedScoreEventScoreBarProperties.prototype.getLabel = function (__s7param0) {
    if (isNaN(this._labels[this.getPaginatedIndex(__s7param0)])) {
      return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this._labels[this.getPaginatedIndex(__s7param0)]);
    } else {
      return new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this._labels[this.getPaginatedIndex(__s7param0)]);
    }
  };
  CastlePaginatedScoreEventScoreBarProperties.prototype.getDescription = function (__s11param0) {
    return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this._descriptions[this.getPaginatedIndex(__s11param0)]);
  };
  CastlePaginatedScoreEventScoreBarProperties.prototype.getReward = function (__s13param0) {
    return this._rewardList[this.getPaginatedIndex(__s13param0)];
  };
  CastlePaginatedScoreEventScoreBarProperties.prototype.getPaginatedIndex = function (__s15param0) {
    if (__s15param0 >= this.numThresholdRewards) {
      return __s15param0 + this._pagination.maxPages - 1;
    } else {
      return __s15param0 + this._pagination.currentPageIndex;
    }
  };
  CastlePaginatedScoreEventScoreBarProperties.prototype.thresholdProgress = function (__s19param0, __s19param1, __s19param2) {
    return __s1param0.prototype.thresholdProgress.call(this, this.getPaginatedIndex(__s19param0), __s19param1, __s19param2);
  };
  CastlePaginatedScoreEventScoreBarProperties.__initialize_static_members = function () {
    CastlePaginatedScoreEventScoreBarProperties.NUMBER_OF_THRESHOLD_REWARDS_0 = 2;
    CastlePaginatedScoreEventScoreBarProperties.NUMBER_OF_RANK_REWARDS_0 = 3;
  };
  return CastlePaginatedScoreEventScoreBarProperties;
}(require("gge-module:export_CastleScoreEventScoreBarProperties").CastleScoreEventScoreBarProperties);
exports.CastlePaginatedScoreEventScoreBarProperties = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IScorebarProperties");
__s0local0.__initialize_static_members();

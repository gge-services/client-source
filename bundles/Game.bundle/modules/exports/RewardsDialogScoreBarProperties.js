Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function RewardsDialogScoreBarProperties(__s3param0, __s3param1, __s3param2, __s3param3 = null, __s3param4 = null, __s3param5 = 1, __s3param6 = 3) {
    var __s3local0 = this;
    __s3local0.nextRewardIndex = 0;
    __s3local0._nextRewardTextColor = -1;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5, __s3param6) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RewardsDialogScoreBarProperties, __s1param0);
  RewardsDialogScoreBarProperties.prototype.getToolTip = function (__s5param0, __s5param1) {
    if (this._classTextID == null) {
      return null;
    }
    var __s5local0 = __s1param0.prototype.getToolTip.call(this, __s5param0, __s5param1);
    __s5local0.p = [this._toolTipValues[this.getRewardIndex(__s5param0)] ? this._toolTipValues[this.getRewardIndex(__s5param0)] : 1];
    return __s5local0;
  };
  RewardsDialogScoreBarProperties.prototype.getLabel = function (__s8param0) {
    var __s8local0 = this.getRewardIndex(__s8param0);
    if (!isNaN(this._labels[__s8local0])) {
      return new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this._labels[__s8local0]);
    }
    if (this._labels[__s8local0]) {
      return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this._labels[__s8local0]);
    }
    var __s8local1 = this._labels.length - 1 - RewardsDialogScoreBarProperties.MAX_TOP_X;
    return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this._labels[__s8local1 + __s8param0]);
  };
  RewardsDialogScoreBarProperties.prototype.getDescription = function (__s12param0) {
    return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this._descriptions[this.getRewardIndex(__s12param0)]);
  };
  RewardsDialogScoreBarProperties.prototype.getReward = function (__s14param0) {
    return this._rewardList[this.getRewardIndex(__s14param0)];
  };
  RewardsDialogScoreBarProperties.prototype.getRewardIndex = function (__s16param0) {
    if (__s16param0) {
      return __dep_exact_f855840627e6e145.int(__s16param0 - 1 + this._rewardList.length - this.numRankRewards);
    } else {
      return this.nextRewardIndex;
    }
  };
  RewardsDialogScoreBarProperties.prototype.thresholdProgress = function (__s20param0, __s20param1, __s20param2) {
    for (var __s20local0 = __dep_exact_f855840627e6e145.int(__s20param1.length - 1); __s20local0 >= 0; --__s20local0) {
      if (__s20param1[__s20local0] <= __s20param2) {
        this.nextRewardIndex = __dep_exact_f855840627e6e145.int(Math.min(__s20local0 + 1, __s20param1.length - 1));
        break;
      }
    }
    return __s1param0.prototype.thresholdProgress.call(this, this.getRewardIndex(__s20param0), __s20param1, __s20param2);
  };
  Object.defineProperty(RewardsDialogScoreBarProperties.prototype, "nextRewardTextColor", {
    get: function () {
      return this._nextRewardTextColor;
    },
    set: function (__s27param0) {
      this._nextRewardTextColor = __s27param0;
    },
    enumerable: true,
    configurable: true
  });
  RewardsDialogScoreBarProperties.MAX_TOP_X = 3;
  return RewardsDialogScoreBarProperties;
}(require("gge-module:export_CastleScoreEventScoreBarProperties").CastleScoreEventScoreBarProperties);
exports.RewardsDialogScoreBarProperties = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IScorebarProperties");

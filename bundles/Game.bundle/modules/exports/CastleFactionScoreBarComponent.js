Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function CastleFactionScoreBarComponent(__s3param0, __s3param1) {
    return __s1param0.call(this, __s3param0, __s3param1) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleFactionScoreBarComponent, __s1param0);
  CastleFactionScoreBarComponent.prototype.updateReward = function (__s5param0, __s5param1) {
    __s1param0.prototype.updateReward.call(this, __s5param0, __s5param1);
    var __s5local0;
    var __s5local1 = __dep_exact_f855840627e6e145.int(this.factionScorebarProperties.currentPage());
    var __s5local2 = __dep_exact_f855840627e6e145.int(this.factionScorebarProperties.maxPages());
    var __s5local3 = 0;
    if (__s5param0 == 0) {
      __s5local0 = this.disp["bar" + __s5param0 + "_short"];
      __s5local3 = __s5local1 == 1 ? __s5param1 : 0;
    } else if (__s5param0 == this.factionScorebarProperties.numThresholdRewards - 1) {
      __s5local0 = this.disp["bar" + __s5param0 + "_next"];
      __s5local3 = __s5local1 < __s5local2 ? this.factionScorebarProperties.nextThresholdProgress(__s5param0, this.scoreBarProgress.pointThresholds, this.scoreBarProgress.ownPoints) : this.rankProgress(0);
    }
    if (__s5local0) {
      this.setProgressBar(__s5local0, __s5local3);
    }
  };
  Object.defineProperty(CastleFactionScoreBarComponent.prototype, "factionScorebarProperties", {
    get: function () {
      return this.scorebarProperties;
    },
    enumerable: true,
    configurable: true
  });
  return CastleFactionScoreBarComponent;
}(require("gge-module:export_CastleScoreBarComponent").CastleScoreBarComponent);
exports.CastleFactionScoreBarComponent = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");

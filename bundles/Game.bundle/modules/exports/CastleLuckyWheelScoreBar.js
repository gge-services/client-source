Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function CastleLuckyWheelScoreBar(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this;
    __s3local0._eventVO = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLuckyWheelScoreBar, __s1param0);
  CastleLuckyWheelScoreBar.prototype.updateThresholdRewards = function () {
    var __s5local0 = 0;
    for (var __s5local1 = 0; __s5local1 < this.numThresholdRewards; __s5local1++) {
      __s5local0 = __s5local1 == 0 ? 1 : __dep_exact_f855840627e6e145.int(this.luckyWheelData.pointThresholds[__s5local1 - 1]);
      this.updateReward(__s5local1, this.luckyThresholdProgress(this.luckyWheelData.pointThresholds[__s5local1], this.luckyWheelData.currentWinClass, this.luckyWheelData.winClassProgress, __s5local0));
    }
  };
  CastleLuckyWheelScoreBar.prototype.luckyThresholdProgress = function (__s9param0, __s9param1, __s9param2, __s9param3) {
    var __s9local0 = 0;
    if (__s9param1 == __s9param0 || __s9param1 > __s9param0) {
      return 1;
    }
    if (__s9param1 < __s9param3) {
      return 0;
    }
    var __s9local1 = 1 / (__s9param0 - __s9param3);
    __s9local0 = (__s9param1 - __s9param3) * __s9local1;
    __s9local0 += __s9param2 / this.luckyWheelData.getNeededSpinsForClass(__s9param1) * __s9local1;
    return __s9local0 = Math.min(1, __s9local0);
  };
  Object.defineProperty(CastleLuckyWheelScoreBar.prototype, "luckyWheelData", {
    get: function () {
      return this._eventVO.luckyWheelData;
    },
    enumerable: true,
    configurable: true
  });
  return CastleLuckyWheelScoreBar;
}(require("gge-module:export_CastleScoreBarComponent").CastleScoreBarComponent);
exports.CastleLuckyWheelScoreBar = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");

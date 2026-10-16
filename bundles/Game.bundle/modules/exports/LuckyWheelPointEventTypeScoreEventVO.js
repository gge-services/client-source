Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function LuckyWheelPointEventTypeScoreEventVO(__s3param0 = 0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LuckyWheelPointEventTypeScoreEventVO, __s1param0);
  Object.defineProperty(LuckyWheelPointEventTypeScoreEventVO.prototype, "pointThresholds", {
    get: function () {
      return this._pointThreshholds;
    },
    set: function (__s7param0) {
      this._pointThreshholds = __s7param0;
    },
    enumerable: true,
    configurable: true
  });
  LuckyWheelPointEventTypeScoreEventVO.prototype.parseBasicsFromParamObject = function (__s9param0) {
    if (__s9param0.CR) {
      this.addRewardsToList(__s9param0.CR);
    }
    __s1param0.prototype.parseBasicsFromParamObject.call(this, __s9param0);
  };
  return LuckyWheelPointEventTypeScoreEventVO;
}(require("gge-module:export_APointEventTypeScoreEventVO").APointEventTypeScoreEventVO);
exports.LuckyWheelPointEventTypeScoreEventVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable", "IScoreBarVO", "IScoreUpdatable");

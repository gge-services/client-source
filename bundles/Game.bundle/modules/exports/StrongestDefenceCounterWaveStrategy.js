Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function StrongestDefenceCounterWaveStrategy() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.loadFlankFillStrategy(new __dep_export_StrongestDefenceCounterRatioConsideredFlankStrategy.StrongestDefenceCounterRatioConsideredFlankStrategy());
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StrongestDefenceCounterWaveStrategy, __s1param0);
  return StrongestDefenceCounterWaveStrategy;
}(require("gge-module:export_AFillWaveStrategy").AFillWaveStrategy);
exports.StrongestDefenceCounterWaveStrategy = __s0local0;
var __dep_export_StrongestDefenceCounterRatioConsideredFlankStrategy = require("gge-module:export_StrongestDefenceCounterRatioConsideredFlankStrategy");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IFillWaveStrategy");

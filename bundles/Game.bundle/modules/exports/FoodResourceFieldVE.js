Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_AExpandingResourceFieldVE = require("gge-module:export_AExpandingResourceFieldVE");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function FoodResourceFieldVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FoodResourceFieldVE, __s1param0);
  FoodResourceFieldVE.prototype.getClipDeltaTilePosByIndex = function (__s5param0) {
    return new __s0local0(this.vo.width * __s5param0, 0);
  };
  FoodResourceFieldVE.prototype.getJudgementSpotGridPos = function () {
    return this.expandingResourceFieldVO.pos.add(new __s0local0(this.expandingResourceFieldVO.totalWidth - 4, 1));
  };
  return FoodResourceFieldVE;
}(__dep_export_AExpandingResourceFieldVE.AExpandingResourceFieldVE);
exports.FoodResourceFieldVE = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "IIngameUICapable");

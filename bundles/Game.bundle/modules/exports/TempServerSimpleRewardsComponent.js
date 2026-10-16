Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ItemCenterAlignComponent = require("gge-module:export_ItemCenterAlignComponent");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_SeasonLeagueSimpleRewardsComponent = require("gge-module:export_SeasonLeagueSimpleRewardsComponent");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function TempServerSimpleRewardsComponent(__s3param0, __s3param1 = true, __s3param2 = true, __s3param3 = 7, __s3param4 = new __s0local0(15, 15)) {
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3, __s3param4) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TempServerSimpleRewardsComponent, __s1param0);
  TempServerSimpleRewardsComponent.prototype.init = function () {
    this._numberOfItems = 0;
    for (var __s5local0 = 0; this.disp.getChildByName("mc_item" + __s5local0) != null; ++__s5local0) {
      this._numberOfItems++;
    }
    this._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.disp), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical());
    this._rewardAlign = new __dep_export_ItemCenterAlignComponent.ItemCenterAlignComponent(this.disp, "mc_item", true);
  };
  return TempServerSimpleRewardsComponent;
}(__dep_export_SeasonLeagueSimpleRewardsComponent.SeasonLeagueSimpleRewardsComponent);
exports.TempServerSimpleRewardsComponent = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");

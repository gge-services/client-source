Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_SimpleProgressBarComponent = require("gge-module:export_SimpleProgressBarComponent");
var __s0local0 = function (__s1param0) {
  function SeasonLeaguePromotionProgressBarComponent(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._rank = 0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeaguePromotionProgressBarComponent, __s1param0);
  SeasonLeaguePromotionProgressBarComponent.prototype.update = function (__s5param0, __s5param1 = -1) {
    if (__s5param1 >= 0) {
      this._rank = __s5param1;
    }
    var __s5local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.seasonLeagueData.server.medalPoints);
    var __s5local1 = __s5local0 + __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.seasonLeagueData.xml.getSeasonMedalForRank(this.rank).medalPoints);
    var __s5local2 = __dep_export_CastleModel.CastleModel.seasonLeagueData.hasReachedHighestPromotion();
    var __s5local3 = __dep_export_CastleModel.CastleModel.seasonLeagueData.getCurrentPlayerPromotion();
    var __s5local4 = __dep_export_CastleModel.CastleModel.seasonLeagueData.xml.getPromotion(__s5local3.id + 1);
    var __s5local5 = !!__s5local4 && __s5local1 >= __s5local4.minMedalPointsForUnlock;
    var __s5local6 = new __dep_export_SimpleProgressBarComponent.SimpleProgressBarComponent(this.disp, 238);
    var __s5local7 = 0;
    __s5local7 = __s5local2 ? 1 : __s5local0 / __s5local4.minMedalPointsForUnlock;
    __s5local6.setProgressByPercent(__s5local7);
    __s5local6.fillMc = this.disp.mc_addition;
    var __s5local8 = 0;
    __s5local8 = __s5param0 ? __s5local2 ? 0 : __s5local5 ? 1 : __s5local1 / __s5local4.minMedalPointsForUnlock : 0;
    __s5local6.setProgressByPercent(__s5local8);
  };
  Object.defineProperty(SeasonLeaguePromotionProgressBarComponent.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeaguePromotionProgressBarComponent;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.SeasonLeaguePromotionProgressBarComponent = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function SeasonLeagueMainDialogPromotionTooltip(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueMainDialogPromotionTooltip, __s1param0);
  SeasonLeagueMainDialogPromotionTooltip.prototype.init = function () {
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.mc_info.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_seasonLeague_promotionRanks_progressBar_text")).autoFitToBounds = true;
    this._promotionBar = new __dep_export_SeasonLeaguePromotionProgressBarComponent.SeasonLeaguePromotionProgressBarComponent(this.disp.mc_info.mc_progress);
  };
  SeasonLeagueMainDialogPromotionTooltip.prototype.update = function () {
    this._promotionBar.update(__dep_export_CastleModel.CastleModel.seasonLeagueData.getActiveSeasonEventVO() != null, __dep_export_CastleModel.CastleModel.seasonLeagueData.server.playerSeasonEventRank);
  };
  SeasonLeagueMainDialogPromotionTooltip.prototype.setPosition = function (__s9param0, __s9param1) {
    this.disp.x = __s9param0;
    switch (__s9param1) {
      case SeasonLeagueMainDialogPromotionTooltip.ALIGN_LEFT:
        this.disp.mc_info.x = 76;
        break;
      case SeasonLeagueMainDialogPromotionTooltip.ALIGN_CENTER:
        this.disp.mc_info.x = 0;
        break;
      case SeasonLeagueMainDialogPromotionTooltip.ALIGN_RIGHT:
        this.disp.mc_info.x = -76;
    }
  };
  SeasonLeagueMainDialogPromotionTooltip.ALIGN_LEFT = "aLeft";
  SeasonLeagueMainDialogPromotionTooltip.ALIGN_CENTER = "aCenter";
  SeasonLeagueMainDialogPromotionTooltip.ALIGN_RIGHT = "aRight";
  return SeasonLeagueMainDialogPromotionTooltip;
}(require("gge-module:export_CastleItemRenderer").CastleItemRenderer);
exports.SeasonLeagueMainDialogPromotionTooltip = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_SeasonLeaguePromotionProgressBarComponent = require("gge-module:export_SeasonLeaguePromotionProgressBarComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");

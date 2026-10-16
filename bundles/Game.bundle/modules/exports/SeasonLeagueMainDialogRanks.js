Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstSeasonLeague = require("gge-module:export_ClientConstSeasonLeague");
var __s0local0 = function (__s1param0) {
  function SeasonLeagueMainDialogRanks(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = this;
    __s3local0._showPoints = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._showPoints = __s3param3;
    if (__s3param0) {
      __s3param0.mc_icon_rank.toolTipText = "dialog_seasonLeague_divisionRanking_position_tooltip";
      __s3param0.mc_icon_promotion.toolTipText = "dialog_seasonLeague_divisionRanking_rank_tooltip";
      __s3param0.mc_icon_gold.toolTipText = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.SEASON_LEAGUE_MEDALS, 1, __dep_export_ClientConstSeasonLeague.ClientConstSeasonLeague.MEDAL_ID_GOLD).getTooltipTextId();
      __s3param0.mc_icon_silver.toolTipText = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.SEASON_LEAGUE_MEDALS, 1, __dep_export_ClientConstSeasonLeague.ClientConstSeasonLeague.MEDAL_ID_SILVER).getTooltipTextId();
      __s3param0.mc_icon_bronze.toolTipText = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.SEASON_LEAGUE_MEDALS, 1, __dep_export_ClientConstSeasonLeague.ClientConstSeasonLeague.MEDAL_ID_BRONZE).getTooltipTextId();
      if (__s3param0.mc_icon_rank_alliance) {
        __s3param0.mc_icon_rank_alliance.toolTipText = "allianceRank";
      }
    }
    __s3local0._highscore = new __dep_export_ModernHighscoreComponent.ModernHighscoreComponent(__s3param0, SeasonLeagueMainDialogRanks.MAX_VISIBLE_ITEMS, __dep_export_SeasonLeagueMainDialogRanksItem.SeasonLeagueMainDialogRanksItem, __s3param1, __s3param2);
    for (var __s3local1 = 0, __s3local2 = __s3local0._highscore.items; __s3local1 < __s3local2.length; __s3local1++) {
      var __s3local3 = __s3local2[__s3local1];
      if (__s3local3 !== undefined) {
        __s3local3.showPoints = __s3param3;
      }
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SeasonLeagueMainDialogRanks, __s1param0);
  SeasonLeagueMainDialogRanks.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._highscore.onShow();
    this.updateHeader();
  };
  SeasonLeagueMainDialogRanks.prototype.onHide = function () {
    this._highscore.onHide();
    __s1param0.prototype.onHide.call(this);
  };
  SeasonLeagueMainDialogRanks.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventsChanged));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventsChanged));
  };
  SeasonLeagueMainDialogRanks.prototype.removeEventListener = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventsChanged));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventsChanged));
    __s1param0.prototype.removeEventListener.call(this);
  };
  SeasonLeagueMainDialogRanks.prototype.updateHeader = function () {
    var __s18local0 = this.isAllianceScore() && !!this.disp.mc_icon_rank_alliance;
    this.disp.mc_icon_rank.visible = !__s18local0;
    if (this.disp.mc_icon_rank_alliance) {
      this.disp.mc_icon_rank_alliance.visible = __s18local0;
    }
    this.disp.mc_icon_promotion.visible = !__s18local0;
    this.updatePointsIcon();
    var __s18local1 = __s18local0 ? "allianceName" : "generic_playerName";
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s18local1))).autoFitToBounds = true;
  };
  SeasonLeagueMainDialogRanks.prototype.updatePointsIcon = function () {
    if (this.disp && this.disp.mc_icon_points) {
      this.disp.mc_icon_points.visible = this.showPoints;
      var __s21local0 = __dep_export_CastleModel.CastleModel.seasonLeagueData.getActiveSeasonEventVO();
      var __s21local1 = __dep_exact_f855840627e6e145.int(__s21local0 ? __s21local0.eventId : -1);
      if (this.showPoints) {
        this.disp.mc_icon_points.gotoAndStop(__dep_export_ClientConstSeasonLeague.ClientConstSeasonLeague.getPointsIconFrame(__s21local1));
      }
      this.disp.mc_icon_points.toolTipText = __dep_export_ClientConstSeasonLeague.ClientConstSeasonLeague.getPointsIconTooltipTextId(__s21local1);
    }
  };
  SeasonLeagueMainDialogRanks.prototype.changeHighscoreId = function (__s25param0) {
    this._highscore.highscoreId = __s25param0;
    this.updateHeader();
  };
  SeasonLeagueMainDialogRanks.prototype.isAllianceScore = function () {
    return this._highscore.highscoreId == __dep_exact_26a421b704832cff.HighscoreConst.ALLIANCE_KINGDOMS_LEAGUE_SEASON_EVENT || this._highscore.highscoreId == __dep_exact_26a421b704832cff.HighscoreConst.ALLIANCE_KINGDOMS_LEAGUE_SEASON;
  };
  SeasonLeagueMainDialogRanks.prototype.onEventsChanged = function (__s29param0) {
    this.updatePointsIcon();
  };
  Object.defineProperty(SeasonLeagueMainDialogRanks.prototype, "highscore", {
    get: function () {
      return this._highscore;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueMainDialogRanks.prototype, "showPoints", {
    get: function () {
      return this._showPoints;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueMainDialogRanks.MAX_VISIBLE_ITEMS = 6;
  return SeasonLeagueMainDialogRanks;
}(require("gge-module:export_CastleItemRenderer").CastleItemRenderer);
exports.SeasonLeagueMainDialogRanks = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ModernHighscoreComponent = require("gge-module:export_ModernHighscoreComponent");
var __dep_export_SeasonLeagueMainDialogRanksItem = require("gge-module:export_SeasonLeagueMainDialogRanksItem");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");

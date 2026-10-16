Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceCrestVO = require("gge-module:export_AllianceCrestVO");
var __dep_export_AllianceMobilizationEventEventVO = require("gge-module:export_AllianceMobilizationEventEventVO");
var __dep_export_AGlobalLeaderBoardItem = require("gge-module:export_AGlobalLeaderBoardItem");
var __dep_export_AllianceCrestEnum = require("gge-module:export_AllianceCrestEnum");
var __dep_export_AllianceCrestSizeEnum = require("gge-module:export_AllianceCrestSizeEnum");
var __dep_export_CastleAllianceCrestHelper = require("gge-module:export_CastleAllianceCrestHelper");
var __s0local0 = function (__s1param0) {
  function AllianceMobilizationEventDialogLeaderboardItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._eventID = 0;
    __s3local0._allianceCrestVO = new __dep_export_AllianceCrestVO.AllianceCrestVO();
    __s3local0.disp.mc_promotionLine.visible = false;
    __s3local0.disp.mc_promotionIndicator.visible = false;
    __s3local0.disp.mc_promotionLine.gotoAndStop(1);
    __s3local0.disp.mc_promotionIndicator.gotoAndStop(1);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceMobilizationEventDialogLeaderboardItem, __s1param0);
  AllianceMobilizationEventDialogLeaderboardItem.prototype.getAdditionalData = function (__s5param0) {
    this._totalNumberOfScores = __s5param0.totalNumberOfScores;
    this._leagueTypeID = __s5param0.leagueTypeID;
    this._subDivisionID = __s5param0.additionalData && __s5param0.additionalData.SDI != undefined ? __s5param0.additionalData.SDI : -1;
    this._eventID = __s5param0.additionalData && __s5param0.additionalData.EID ? __s5param0.additionalData.EID : 0;
  };
  AllianceMobilizationEventDialogLeaderboardItem.prototype.update = function () {
    this.setVisibility(this._data != null);
    if (this.disp.visible) {
      if (this.disp.mc_searched) {
        this.disp.mc_searched.visible = this._searchScoreID != "" && this._searchScoreID == this.scoreID;
      }
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_rank, new __dep_exact_92d05af59ee2ff30.TextVO(this.rankText)).autoFitToBounds = true;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_allianceName, new __dep_exact_92d05af59ee2ff30.TextVO(this.allianceName)).autoFitToBounds = true;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_server, new __dep_exact_92d05af59ee2ff30.TextVO(this.serverName)).autoFitToBounds = true;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_points, new __dep_exact_92d05af59ee2ff30.TextVO(this.points)).autoFitToBounds = true;
      this.updateAllianceCoatOfArms();
      this.updateDivisionElements();
      this.updateRankIndicator();
    }
  };
  AllianceMobilizationEventDialogLeaderboardItem.prototype.updateRankIndicator = function () {
    var __s11local0 = this.getPrefixFrame();
    this.disp.rank_indicator.visible = __s11local0 > 0;
    this.disp.rank_indicator.gotoAndStop(this.getPrefixFrame());
  };
  AllianceMobilizationEventDialogLeaderboardItem.prototype.getPrefixFrame = function () {
    if (this.allianceName == __dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.allianceName) {
      return 6;
    }
    if (this._subDivisionID >= 0) {
      var __s13local0 = this.eventVO.getRewardBracketFromRank(this.rank);
      if (__s13local0 <= 5) {
        return __s13local0;
      } else {
        return 0;
      }
    }
    return 0;
  };
  AllianceMobilizationEventDialogLeaderboardItem.prototype.updateAllianceCoatOfArms = function () {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.mc_ACoA);
    if (this._data && this._data.SM) {
      var __s19local0 = this._data.SM;
      this._allianceCrestVO.fillWithData(__s19local0);
      __dep_export_CastleAllianceCrestHelper.CastleAllianceCrestHelper.setCrestGraphics(this.disp.mc_ACoA, this._allianceCrestVO, __dep_export_AllianceCrestSizeEnum.AllianceCrestSizeEnum.CREST_LEADERBOARD, __dep_export_AllianceCrestEnum.AllianceCrestEnum.DEFAULT_CREST);
    }
  };
  AllianceMobilizationEventDialogLeaderboardItem.prototype.updateDivisionElements = function () {
    var __s22local0 = this;
    this.disp.mc_promotionLine.visible = false;
    this.disp.mc_promotionIndicator.visible = false;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.mc_divisionIcon);
    var __s22local1 = this._leagueTypeID;
    if (this.eventVO && this._data && this.rank > -1 && (this.eventVO.mode == __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.MODE_NORMAL && this._subDivisionID >= 0 || this.eventVO.mode != __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.MODE_NORMAL && this._subDivisionID == -1)) {
      var __s22local2 = this.eventVO.divisionRoundVO;
      switch (this.eventVO.mode) {
        case __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.MODE_QUALIFICATION:
          var __s22local3 = __s22local2.getTotalPromotes();
          this.disp.mc_promotionLine.visible = this.rank == __s22local3;
          this.disp.mc_promotionIndicator.visible = this.rank <= __s22local3;
          this.disp.mc_promotionIndicator.gotoAndStop(1);
          __s22local1 = __s22local2.getQualificationNewDivison(this.rank);
          break;
        case __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.MODE_NORMAL:
        case __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.MODE_ADJUSTMENT:
          var __s22local4 = __s22local2.getPromotesForDivision(this._leagueTypeID);
          var __s22local5 = __s22local2.getDemotesForDivision(this._leagueTypeID);
          var __s22local6 = this._totalNumberOfScores - __s22local5 + 1;
          var __s22local7 = this.rank >= __s22local6;
          var __s22local8 = this.rank <= __s22local4;
          this.disp.mc_promotionLine.visible = this.rank == __s22local4 || this.rank == __s22local6 - 1;
          if (this.disp.mc_promotionLine.visible) {
            this.disp.mc_promotionLine.gotoAndStop(this.rank == __s22local4 ? 1 : 2);
          }
          this.disp.mc_promotionIndicator.visible = __s22local8 || __s22local7;
          this.disp.mc_promotionIndicator.gotoAndStop(__s22local8 ? 1 : 2);
          __s22local1 = __s22local8 ? __s22local1 + 1 : __s22local7 ? __s22local1 - 1 : __s22local1;
      }
      var __s22local9 = __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.getDivisionIconClip(__s22local1);
      __s22local9.doWhenLoaded(function () {
        var __s27local0 = (1 + __s22local1 * 0.1) * 25;
        __dep_exact_9e901e8e2483a22f.MovieClipHelper.scaleToFit(__s22local9, __s27local0, __s27local0);
        __s22local0.disp.mc_divisionIcon.addChild(__s22local9);
      });
    }
  };
  Object.defineProperty(AllianceMobilizationEventDialogLeaderboardItem.prototype, "eventVO", {
    get: function () {
      return __dep_export_AllianceMobilizationEventEventVO.AllianceMobilizationEventEventVO.getActiveEventVO(this._eventID);
    },
    enumerable: true,
    configurable: true
  });
  return AllianceMobilizationEventDialogLeaderboardItem;
}(__dep_export_AGlobalLeaderBoardItem.AGlobalLeaderBoardItem);
exports.AllianceMobilizationEventDialogLeaderboardItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");

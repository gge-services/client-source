Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SPointEventGetPointsVO = require("gge-module:export_C2SPointEventGetPointsVO");
var __dep_export_Pagination = require("gge-module:export_Pagination");
var __dep_export_PaginationArrows = require("gge-module:export_PaginationArrows");
var __dep_export_CastleGenericRankingComponentEvent = require("gge-module:export_CastleGenericRankingComponentEvent");
var __dep_export_CastleScoreEventEvent = require("gge-module:export_CastleScoreEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleScoreBarProgressVO = require("gge-module:export_CastleScoreBarProgressVO");
var __s0local0 = function (__s1param0) {
  function FactionEventRankingsSublayer(__s3param0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).textFieldManager.registerTextField(__s3param0.txt_header, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_factionhighscore_header"));
    __s3local0.initBasicButtons([__s3local0.subLayerDisp.mc_rankingContainer.btn_search, __s3local0.subLayerDisp.mc_rankingContainer.btn_top, __s3local0.subLayerDisp.mc_rankingContainer.btn_up, __s3local0.subLayerDisp.mc_rankingContainer.btn_down, __s3local0.subLayerDisp.mc_rankingContainer.btn_leagueUp, __s3local0.subLayerDisp.mc_rankingContainer.btn_leagueDown]);
    __s3local0.subLayerDisp.mc_scoreBarComponent.mc_pointsTooltip.toolTipText = "dialog_berimond_nobilityPoints";
    __s3local0.subLayerDisp.mc_scoreBarComponent.mc_ownRank.toolTipText = "rank";
    __s3local0.subLayerDisp.mc_scoreBarComponent.mc_ownRank.mouseChildren = false;
    var __s3local1 = __s3local0.factionEventVO.ownRank > 0 ? new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s3local0.factionEventVO.ownRank) : new __dep_exact_92d05af59ee2ff30_3.TextVO("-");
    __s3local0.itxt_rank = __s3local0.textFieldManager.registerTextField(__s3local0.subLayerDisp.mc_scoreBarComponent.mc_ownRank.txt_ownRank, __s3local1);
    __s3local0.ranking = new __dep_export_FactionRankingComponent.FactionRankingComponent(__s3local0.subLayerDisp.mc_rankingContainer);
    __s3local0.pagination = new __dep_export_Pagination.Pagination(__s3local0, FactionEventRankingsSublayer.MAX_PAGES, false);
    __s3local0.pagination.addControl(new __dep_export_PaginationArrows.PaginationArrows(__s3local0, __s3local0.pagination));
    __s3local0.pagination.addControl(new __dep_export_PaginationMouseWheel.PaginationMouseWheel(__s3local0.subLayerDisp.mc_scoreBarComponent, __s3local0.pagination));
    __s3local0.attackTowersBox = new __dep_export_FactionAttackPveBox.FactionAttackPveBox(__s3local0.subLayerDisp.mc_objective_0);
    __s3local0.attackCampsBox = new __dep_export_FactionAttackPvpBox.FactionAttackPvpBox(__s3local0.subLayerDisp.mc_objective_1);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionEventRankingsSublayer, __s1param0);
  FactionEventRankingsSublayer.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SPointEventGetPointsVO.C2SPointEventGetPointsVO(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION));
    this.attackTowersBox.show();
    this.attackCampsBox.show();
    this.ranking.reset();
    this.initScoreBar();
    this.addEventListener();
  };
  FactionEventRankingsSublayer.prototype.initScoreBar = function () {
    if (this.scoreBar) {
      this.scoreBar.destroy();
    }
    var __s7local0 = this.currentLeagueVO.pointThresholds.concat(this.currentLeagueVO.topX);
    var __s7local1 = new __dep_export_CastleFactionEventScoreBarProperties.CastleFactionEventScoreBarProperties(this.pagination, this.currentLeagueVO.rewardLists, "berimond", __s7local0, this.levelLabels);
    this.scoreBar = new __dep_export_CastleFactionScoreBarComponent.CastleFactionScoreBarComponent(this.subLayerDisp.mc_scoreBarComponent, __s7local1);
    this.pagination.currentPage = this.getScoreBarStartPage();
    this.pagination.enable();
    this.updateScoreBar();
    this.subLayerDisp.mc_scoreBarComponent.mc_thresholdBar.gotoAndStop(this.currentLeagueVO.subTypeID + 1);
    this.subLayerDisp.mc_scoreBarComponent.mc_thresholdBar_bg.gotoAndStop(this.currentLeagueVO.subTypeID + 1);
    for (var __s7local2 = 0; __s7local2 < __s7local1.numThresholdRewards; __s7local2++) {
      this.subLayerDisp.mc_scoreBarComponent["reward" + __s7local2].mc_text.gotoAndStop(this.currentLeagueVO.subTypeID + 1);
    }
  };
  FactionEventRankingsSublayer.prototype.getScoreBarStartPage = function () {
    var __s12local0 = 0;
    if (this.currentLeagueVO.leagueID == this.factionEventVO.ownLeagueID) {
      for (; __s12local0 < this.pagination.maxPages && !(this.factionEventVO.ownPoints < this.currentLeagueVO.pointThresholds[__s12local0]); __s12local0++);
    }
    return __dep_exact_f855840627e6e145.int(Math.max(1, __s12local0));
  };
  FactionEventRankingsSublayer.prototype.updateScoreBar = function () {
    this.scoreBar.update(new __dep_export_CastleScoreBarProgressVO.CastleScoreBarProgressVO(this.currentLeagueVO.ownPoints, this.currentLeagueVO.ownRank, this.currentLeagueVO.pointThresholds, this.currentLeagueVO.topX));
    var __s16local0 = this.factionEventVO.ownRank > 0 ? new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.factionEventVO.ownRank) : new __dep_exact_92d05af59ee2ff30_3.TextVO("-");
    this.itxt_rank = this.textFieldManager.registerTextField(this.subLayerDisp.mc_scoreBarComponent.mc_ownRank.txt_ownRank, __s16local0);
  };
  Object.defineProperty(FactionEventRankingsSublayer.prototype, "levelLabels", {
    get: function () {
      var __s18local0 = [];
      var __s18local1 = 0;
      for (__s18local1 = 0; __s18local1 < this.currentLeagueVO.pointThresholds.length; __s18local1++) {
        __s18local0.push(this.currentLeagueVO.pointThresholds[__s18local1]);
      }
      for (__s18local1 = 0; __s18local1 < this.currentLeagueVO.topX.length; __s18local1++) {
        __s18local0.push(__dep_exact_92d05af59ee2ff30.Localize.text("Ranking_TopX", [this.currentLeagueVO.topX[__s18local1]]));
      }
      __s18local0.push(__dep_exact_92d05af59ee2ff30.Localize.text("Ranking_Top1"));
      return __s18local0;
    },
    enumerable: true,
    configurable: true
  });
  FactionEventRankingsSublayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this.attackTowersBox.hide();
    this.attackCampsBox.hide();
    this.ranking.hide();
    if (this.scoreBar) {
      this.scoreBar.destroy();
    }
    this.pagination.disable();
    this.removeEventListener();
  };
  FactionEventRankingsSublayer.prototype.onClick = function (__s27param0) {
    this.pagination.handleClick(__s27param0);
  };
  FactionEventRankingsSublayer.prototype.addEventListener = function () {
    this.controller.addEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
    this.ranking.addEventListener(__dep_export_CastleGenericRankingComponentEvent.CastleGenericRankingComponentEvent.LEAGUETYPE_CHANGED, this.bindFunction(this.onLeagueTypeChanged));
  };
  FactionEventRankingsSublayer.prototype.removeEventListener = function () {
    this.controller.removeEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
    this.ranking.removeEventListener(__dep_export_CastleGenericRankingComponentEvent.CastleGenericRankingComponentEvent.LEAGUETYPE_CHANGED, this.bindFunction(this.onLeagueTypeChanged));
  };
  FactionEventRankingsSublayer.prototype.onLeagueTypeChanged = function (__s33param0) {
    this.pagination.disable();
    this.initScoreBar();
  };
  FactionEventRankingsSublayer.prototype.onUpdatePoints = function (__s35param0) {
    this.updateScoreBar();
  };
  Object.defineProperty(FactionEventRankingsSublayer.prototype, "factionEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  FactionEventRankingsSublayer.prototype.updatePages = function (__s39param0, __s39param1) {
    if (this.scoreBar) {
      this.scoreBar.executeFullUpdate();
    }
  };
  FactionEventRankingsSublayer.prototype.changeArrow = function (__s42param0, __s42param1) {
    return false;
  };
  FactionEventRankingsSublayer.prototype.getLeftArrow = function () {
    return this.subLayerDisp.mc_scoreBarComponent.btn_left;
  };
  FactionEventRankingsSublayer.prototype.getRightArrow = function () {
    return this.subLayerDisp.mc_scoreBarComponent.btn_right;
  };
  Object.defineProperty(FactionEventRankingsSublayer.prototype, "currentLeagueVO", {
    get: function () {
      return this.factionEventVO.leaguetypes.get(this.ranking.currentLeagueId).get(this.factionEventVO.rewardSetId);
    },
    enumerable: true,
    configurable: true
  });
  FactionEventRankingsSublayer.__initialize_static_members = function () {
    FactionEventRankingsSublayer.MAX_PAGES = 5;
  };
  return FactionEventRankingsSublayer;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.FactionEventRankingsSublayer = __s0local0;
var __dep_export_PaginationMouseWheel = require("gge-module:export_PaginationMouseWheel");
var __dep_export_CastleFactionEventScoreBarProperties = require("gge-module:export_CastleFactionEventScoreBarProperties");
var __dep_export_CastleFactionScoreBarComponent = require("gge-module:export_CastleFactionScoreBarComponent");
var __dep_export_FactionAttackPveBox = require("gge-module:export_FactionAttackPveBox");
var __dep_export_FactionAttackPvpBox = require("gge-module:export_FactionAttackPvpBox");
var __dep_export_FactionRankingComponent = require("gge-module:export_FactionRankingComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer", "IPaginationContainer", "IPaginationArrowsContainer");
__s0local0.__initialize_static_members();

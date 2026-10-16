Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_C2SGetHighscoreVO = require("gge-module:export_C2SGetHighscoreVO");
var __dep_export_C2SPointEventGetPointsVO = require("gge-module:export_C2SPointEventGetPointsVO");
var __dep_export_Pagination = require("gge-module:export_Pagination");
var __dep_export_PaginationArrows = require("gge-module:export_PaginationArrows");
var __dep_export_CastleScoreEventEvent = require("gge-module:export_CastleScoreEventEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleScoreBarProgressVO = require("gge-module:export_CastleScoreBarProgressVO");
var __dep_export_ACastleTournamentEventDialog = require("gge-module:export_ACastleTournamentEventDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleAllianceTournamentEventDialog() {
    return __s1param0.call(this, CastleAllianceTournamentEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceTournamentEventDialog, __s1param0);
  CastleAllianceTournamentEventDialog.prototype.initRankListComponent = function () {
    this._rankList = new __dep_export_CastleTournamentRankListComponent.CastleTournamentRankListComponent(this.dialogDisp.mc_rankList, __dep_export_CastleAllianceTournamentRankListItem.CastleAllianceTournamentRankListItem, "dialog_highscore_search", "dialog_highscore_search_alliance");
  };
  CastleAllianceTournamentEventDialog.prototype.updateStaticText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_speachBubble, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliancetournament_speachBubble"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copyBold, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tournament_boldText"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliancetournament_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_yourFameTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_allianceTournament_nobilityPoints"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_yourRankTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tournament_yourCurrentRank"));
  };
  CastleAllianceTournamentEventDialog.prototype.updateDialog = function () {
    __s1param0.prototype.updateDialog.call(this);
    this.setOwnRankTexts(this.scoreBarData.ownRank, this.scoreBarData.ownPoints);
  };
  CastleAllianceTournamentEventDialog.prototype.requestHighscoreData = function (__s11param0) {
    if (!this.isWaitingForServerMessage) {
      this.isWaitingForServerMessage = true;
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetHighscoreVO.C2SGetHighscoreVO(__s11param0, __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_ALLIANCE_TOURNAMENT_FAME));
    }
  };
  Object.defineProperty(CastleAllianceTournamentEventDialog.prototype, "defaultRewardIconDimension", {
    get: function () {
      return CastleAllianceTournamentEventDialog.DEFAULT_ICON_DIMENSION_0;
    },
    set: function (__s16param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastleTournamentEventDialog.ACastleTournamentEventDialog.prototype, "defaultRewardIconDimension").set.call(this, __s16param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceTournamentEventDialog.prototype.showLoaded = function (__s18param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s18param0);
    this.initBasicButtons([this.dialogDisp.btn_ltpe]);
    this.dialogDisp.icon_ltpe_points.toolTipText = "dialog_longPointsEvent_seasonalPoints";
    this.dialogDisp.btn_ltpe.toolTipText = "dialog_alliancetournament_longPointsEvent_button";
    if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_TOURNAMENT)) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SPointEventGetPointsVO.C2SPointEventGetPointsVO(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_TOURNAMENT));
    }
    this.pagination = new __dep_export_Pagination.Pagination(this, CastleAllianceTournamentEventDialog.MAX_PAGES, false);
    this.pagination.addControl(new __dep_export_PaginationArrows.PaginationArrows(this, this.pagination));
    this.pagination.addControl(new __dep_export_PaginationMouseWheel.PaginationMouseWheel(this.dialogDisp.mc_scoreBarComponent, this.pagination));
    if (this.scoreBar) {
      this.scoreBar.destroy();
    }
    this.scoreBar = new __dep_export_CastleScoreBarComponent.CastleScoreBarComponent(this.dialogDisp.mc_scoreBarComponent, new __dep_export_CastlePaginatedScoreEventScoreBarProperties.CastlePaginatedScoreEventScoreBarProperties(this.pagination, this.scoreBarData.rewardLists, "allianceTournament", this.tooltipValues, this.levelLabels, this.descriptions));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
    this.pagination.enable();
    this.updateProgressBars();
    for (var __s18local0 = 1; __s18local0 < this.levelLabels.length; __s18local0++) {
      if (__dep_exact_f855840627e6e145.int(this.levelLabels[__s18local0]) > this.scoreBarData.ownPoints) {
        this.pagination.currentPage = __s18local0;
        break;
      }
    }
    if (__dep_exact_f855840627e6e145.int(this.levelLabels[this.levelLabels.length - 1 - this.scoreBar.numRankRewards]) <= this.scoreBarData.ownPoints) {
      this.pagination.currentPage = __dep_exact_f855840627e6e145.int(this.levelLabels.length - 1 - this.scoreBar.numRankRewards);
    }
  };
  CastleAllianceTournamentEventDialog.prototype.onUpdatePoints = function (__s26param0) {
    this.updateDialog();
    this.updateProgressBars();
  };
  CastleAllianceTournamentEventDialog.prototype.updateProgressBars = function () {
    this.scoreBar.update(new __dep_export_CastleScoreBarProgressVO.CastleScoreBarProgressVO(this.scoreBarData.ownPoints, this.scoreBarData.ownRank, this.scoreBarData.pointThresholds, this.scoreBarData.topX));
  };
  Object.defineProperty(CastleAllianceTournamentEventDialog.prototype, "dialogProperties_0", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceTournamentEventDialog.prototype.updatePages = function (__s32param0, __s32param1) {
    if (this.scoreBar) {
      this.scoreBar.executeFullUpdate();
    }
  };
  CastleAllianceTournamentEventDialog.prototype.changeArrow = function (__s35param0, __s35param1) {
    return false;
  };
  CastleAllianceTournamentEventDialog.prototype.getLeftArrow = function () {
    return this.dialogDisp.mc_scoreBarComponent.btn_left;
  };
  CastleAllianceTournamentEventDialog.prototype.getRightArrow = function () {
    return this.dialogDisp.mc_scoreBarComponent.btn_right;
  };
  Object.defineProperty(CastleAllianceTournamentEventDialog.prototype, "tooltipValues", {
    get: function () {
      var __s41local0 = [];
      for (var __s41local1 = 0; __s41local1 < this.scoreBarData.pointThresholds.length && this.scoreBarData.pointThresholds[__s41local1] != 0; __s41local1++) {
        __s41local0.push(this.scoreBarData.pointThresholds[__s41local1]);
      }
      for (var __s41local2 = 0; __s41local2 < this.scoreBarData.topX.length; __s41local2++) {
        __s41local0.push(this.scoreBarData.topX[__s41local2]);
      }
      return __s41local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceTournamentEventDialog.prototype, "levelLabels", {
    get: function () {
      var __s47local0 = [];
      var __s47local1 = 0;
      for (__s47local1 = 0; __s47local1 < this.scoreBarData.pointThresholds.length && this.scoreBarData.pointThresholds[__s47local1] != 0; __s47local1++) {
        __s47local0.push(this.scoreBarData.pointThresholds[__s47local1]);
      }
      for (__s47local1 = 0; __s47local1 < this.scoreBarData.topX.length; __s47local1++) {
        __s47local0.push(__dep_exact_92d05af59ee2ff30.Localize.text("Ranking_TopX", [this.scoreBarData.topX[__s47local1]]));
      }
      __s47local0.push(__dep_exact_92d05af59ee2ff30.Localize.text("Ranking_Winner"));
      return __s47local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceTournamentEventDialog.prototype, "descriptions", {
    get: function () {
      var __s53local0 = [];
      for (var __s53local1 = 0; __s53local1 < this.scoreBarData.rewardLists.length; __s53local1++) {
        if (this.scoreBarData.rewardLists[__s53local1].grantType == __dep_exact_26a421b704832cff_1.RewardConst.ALLIANCE) {
          __s53local0.push("reward_forAllianceFunds");
        } else if (this.scoreBarData.rewardLists[__s53local1].grantType == __dep_exact_26a421b704832cff_1.RewardConst.ALLIANCE_MEMBER) {
          __s53local0.push("reward_forAllianceMembers");
        } else {
          __s53local0.push("forAllianceFundsAndMembers");
        }
      }
      return __s53local0;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceTournamentEventDialog.prototype.hideLoaded = function (__s60param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s60param0);
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleScoreEventEvent.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
    this.pagination.disable();
  };
  CastleAllianceTournamentEventDialog.prototype.onClick = function (__s62param0) {
    __s1param0.prototype.onClick.call(this, __s62param0);
    this.pagination.handleClick(__s62param0);
    if (__s62param0.target == this.dialogDisp.btn_ltpe) {
      var __s62local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT);
      if (__s62local0) {
        this.hide();
        __s62local0.openDialog();
      }
    }
  };
  Object.defineProperty(CastleAllianceTournamentEventDialog.prototype, "scoreBarData", {
    get: function () {
      return this.dialogProperties_0.eventVO.scoreEventVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceTournamentEventDialog.__initialize_static_members = function () {
    CastleAllianceTournamentEventDialog.DEFAULT_ICON_DIMENSION_0 = new __s0local0(36, 36);
  };
  CastleAllianceTournamentEventDialog.NAME = "CastleAllianceTournamentEvent_S";
  CastleAllianceTournamentEventDialog.MAX_PAGES = 1;
  return CastleAllianceTournamentEventDialog;
}(__dep_export_ACastleTournamentEventDialog.ACastleTournamentEventDialog);
exports.CastleAllianceTournamentEventDialog = __s0local1;
__s0local1.__initialize_static_members();
var __dep_export_PaginationMouseWheel = require("gge-module:export_PaginationMouseWheel");
var __dep_export_CastlePaginatedScoreEventScoreBarProperties = require("gge-module:export_CastlePaginatedScoreEventScoreBarProperties");
var __dep_export_CastleScoreBarComponent = require("gge-module:export_CastleScoreBarComponent");
var __dep_export_CastleTournamentRankListComponent = require("gge-module:export_CastleTournamentRankListComponent");
var __dep_export_CastleAllianceTournamentRankListItem = require("gge-module:export_CastleAllianceTournamentRankListItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList", "IPaginationContainer", "IPaginationArrowsContainer");
__s0local1.__initialize_static_members();

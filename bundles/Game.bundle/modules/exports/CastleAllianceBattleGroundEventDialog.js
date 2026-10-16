Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleAllianceBattleGroundEventDialog() {
    var __s3local0 = this;
    __s3local0.lastRankingTab = CastleAllianceBattleGroundEventDialog.TAB_RANKING_ALLIANCE;
    __s3local0.lastPerformanceTab = "";
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleAllianceBattleGroundEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceBattleGroundEventDialog, __s1param0);
  CastleAllianceBattleGroundEventDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_tab_main, this.dialogDisp.btn_tab_ranking1, this.dialogDisp.btn_tab_scoring, this.dialogDisp.btn_tab_performance]);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this._subLayer = new Map();
    this._subLayer.set(CastleAllianceBattleGroundEventDialog.TAB_MAIN, new __dep_export_CastleAllianceBattlegroundEventDialogOverview.CastleAllianceBattlegroundEventDialogOverview(this.dialogDisp.tab_main));
    this._subLayer.set(CastleAllianceBattleGroundEventDialog.TAB_RANKING_ALLIANCE, new __dep_export_CastleAllianceBattlegroundEventDialogRankingAlliance.CastleAllianceBattlegroundEventDialogRankingAlliance(this.dialogDisp.tab_rankingAlliance, this));
    this._subLayer.set(CastleAllianceBattleGroundEventDialog.TAB_RANKING_PLAYER, new __dep_export_CastleAllianceBattlegroundEventDialogRankingPlayer.CastleAllianceBattlegroundEventDialogRankingPlayer(this.dialogDisp.tab_rankingPlayer, this));
    this._subLayer.set(CastleAllianceBattleGroundEventDialog.TAB_SCORING, new __dep_export_CastleAllianceBattleGroundEventDialogScoring.CastleAllianceBattleGroundEventDialogScoring(this.dialogDisp.tab_scoring, this));
    this._subLayer.set(CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_ALLIANCE_COLLECTOR, new __dep_export_CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector.CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector(this.dialogDisp.tab_performanceAlliance_collector, this));
    this._subLayer.set(CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_ALLIANCE_TOWER, new __dep_export_CastleAllianceBattlegroundEventDialogPerformanceAllianceTower.CastleAllianceBattlegroundEventDialogPerformanceAllianceTower(this.dialogDisp.tab_performanceAlliance_tower, this));
    this._subLayer.set(CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_PLAYER_COLLECTOR, new __dep_export_CastleAllianceBattlegroundEventDialogPerformancePlayerCollector.CastleAllianceBattlegroundEventDialogPerformancePlayerCollector(this.dialogDisp.tab_performancePlayer_collector, this));
    this._subLayer.set(CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_PLAYER_TOWER, new __dep_export_CastleAllianceBattlegroundEventDialogPerformancePlayerTower.CastleAllianceBattlegroundEventDialogPerformancePlayerTower(this.dialogDisp.tab_performancePlayer_tower, this));
    this._subLayer.set(CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_TOWER, new __dep_export_CastleAllianceBattlegroundEventDialogPerformanceTower.CastleAllianceBattlegroundEventDialogPerformanceTower(this.dialogDisp.tab_abgTowers, this));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_timeTitle, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("remainingTime")));
  };
  CastleAllianceBattleGroundEventDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    if (this.lastPerformanceTab == "") {
      this.lastPerformanceTab = this.defaultPerformanceTab;
    }
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.serverMessageArrived));
    this.changeCategory(this.startTab ? this.startTab : CastleAllianceBattleGroundEventDialog.TAB_MAIN);
    this.updateRemainingEventTime();
    this.dialogDisp.btn_tab_main.toolTipText = "dialog_beyondTheHorizon_main_overview_title";
    this.dialogDisp.btn_tab_ranking1.toolTipText = "dialog_beyondTheHorizon_main_allianceRankings_title";
    this.dialogDisp.btn_tab_scoring.toolTipText = "dialog_beyondTheHorizon_main_journey_AllianceCollector_title";
    this.dialogDisp.btn_tab_performance.toolTipText = "dialog_beyondTheHorizon_main_performance_title";
    this.dialogDisp.btn_tab_ranking1.visible = __dep_export_ABGHelper.ABGHelper.isOnABGServer;
    this.dialogDisp.btn_tab_performance.visible = __dep_export_ABGHelper.ABGHelper.isOnABGServer;
  };
  Object.defineProperty(CastleAllianceBattleGroundEventDialog.prototype, "defaultPerformanceTab", {
    get: function () {
      if (__dep_export_ABGHelper.ABGHelper.isAllianceCollectorScoring) {
        return CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_ALLIANCE_COLLECTOR;
      } else if (__dep_export_ABGHelper.ABGHelper.isOnABGAndTower) {
        return CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_TOWER;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattleGroundEventDialog.prototype.hide = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.serverMessageArrived));
    __s1param0.prototype.hide.call(this);
  };
  CastleAllianceBattleGroundEventDialog.prototype.setCategory = function (__s17param0) {
    this.changeCategory(__s17param0);
  };
  CastleAllianceBattleGroundEventDialog.prototype.changeCategory = function (__s19param0) {
    if (this._currentCategory != __s19param0) {
      if (__dep_export_ABGHelper.ABGHelper.abgEvent) {
        __s1param0.prototype.changeCategory.call(this, __s19param0);
        this.showSublayer(this._subLayer.get(__s19param0), []);
        this.updateButton(this.dialogDisp.btn_tab_main, this._currentCategory == CastleAllianceBattleGroundEventDialog.TAB_MAIN);
        this.updateButton(this.dialogDisp.btn_tab_ranking1, this.isInRankingTab);
        this.updateButton(this.dialogDisp.btn_tab_performance, this.isInPerformanceTab);
        this.updateButton(this.dialogDisp.btn_tab_scoring, this._currentCategory == CastleAllianceBattleGroundEventDialog.TAB_SCORING);
        this.updateRemainingEventTime();
        if (this.isInRankingTab) {
          this.lastRankingTab = __s19param0;
        }
        if (this.isInPerformanceTab) {
          this.lastPerformanceTab = __s19param0;
        }
      } else {
        this.hide();
      }
    }
  };
  Object.defineProperty(CastleAllianceBattleGroundEventDialog.prototype, "isInRankingTab", {
    get: function () {
      switch (this._currentCategory) {
        case CastleAllianceBattleGroundEventDialog.TAB_RANKING_ALLIANCE:
        case CastleAllianceBattleGroundEventDialog.TAB_RANKING_PLAYER:
          return true;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattleGroundEventDialog.prototype, "isInPerformanceTab", {
    get: function () {
      switch (this._currentCategory) {
        case CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_ALLIANCE_COLLECTOR:
        case CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_PLAYER_COLLECTOR:
        case CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_ALLIANCE_TOWER:
        case CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_PLAYER_TOWER:
        case CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_TOWER:
          return true;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattleGroundEventDialog.prototype.updateButton = function (__s32param0, __s32param1) {
    __s32param0.gotoAndStop(__s32param1 ? 2 : 1);
  };
  CastleAllianceBattleGroundEventDialog.prototype.updateRemainingEventTime = function () {
    if (__dep_export_ABGHelper.ABGHelper.abgEvent) {
      var __s34local0 = __dep_exact_f855840627e6e145.int(__dep_export_ABGHelper.ABGHelper.abgEvent.remainingEventTimeInSeconds);
      __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.dialogDisp.txt_text, __s34local0);
    }
  };
  CastleAllianceBattleGroundEventDialog.prototype.onClick = function (__s37param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s37param0.target)) {
      __s1param0.prototype.onClick.call(this, __s37param0);
      switch (__s37param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_tab_main:
          this.changeCategory(CastleAllianceBattleGroundEventDialog.TAB_MAIN);
          break;
        case this.dialogDisp.btn_tab_ranking1:
          this.changeCategory(this.lastRankingTab);
          break;
        case this.dialogDisp.btn_tab_performance:
          this.changeCategory(this.lastPerformanceTab);
          break;
        case this.dialogDisp.btn_tab_scoring:
          this.changeCategory(CastleAllianceBattleGroundEventDialog.TAB_SCORING);
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30_1.Localize.text("help_beyondTheHorizon"));
      }
    }
  };
  CastleAllianceBattleGroundEventDialog.prototype.serverMessageArrived = function (__s41param0) {
    this.isWaitingForServerMessage = false;
    if (__dep_export_ABGHelper.ABGHelper.abgEvent) {
      this.updateRemainingEventTime();
    } else {
      this.hide();
    }
  };
  CastleAllianceBattleGroundEventDialog.prototype.onTickEvent = function (__s45param0) {
    this.updateRemainingEventTime();
  };
  Object.defineProperty(CastleAllianceBattleGroundEventDialog.prototype, "startTab", {
    get: function () {
      if (this.dialogProp) {
        return this.dialogProp.startTab;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattleGroundEventDialog.prototype, "dialogProp", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattleGroundEventDialog.NAME = "CastleAllianceBattleGroundEvent_3_0";
  CastleAllianceBattleGroundEventDialog.TAB_MAIN = "tab_main";
  CastleAllianceBattleGroundEventDialog.TAB_RANKING_ALLIANCE = "tab_ranking_alliance";
  CastleAllianceBattleGroundEventDialog.TAB_RANKING_PLAYER = "tab_ranking_player";
  CastleAllianceBattleGroundEventDialog.TAB_SCORING = "tab_scoring";
  CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_ALLIANCE_COLLECTOR = "tab_performanceAlliance_collector";
  CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_PLAYER_COLLECTOR = "tab_performance_player_collector";
  CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_ALLIANCE_TOWER = "tab_performanceAlliance_tower";
  CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_PLAYER_TOWER = "tab_performance_player_tower";
  CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_TOWER = "tab_performance_tower";
  return CastleAllianceBattleGroundEventDialog;
}(require("gge-module:export_CastleExternalSubLayerDialog").CastleExternalSubLayerDialog);
exports.CastleAllianceBattleGroundEventDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleAllianceBattlegroundEventDialogOverview = require("gge-module:export_CastleAllianceBattlegroundEventDialogOverview");
var __dep_export_CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector = require("gge-module:export_CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector");
var __dep_export_CastleAllianceBattlegroundEventDialogPerformanceAllianceTower = require("gge-module:export_CastleAllianceBattlegroundEventDialogPerformanceAllianceTower");
var __dep_export_CastleAllianceBattlegroundEventDialogPerformancePlayerCollector = require("gge-module:export_CastleAllianceBattlegroundEventDialogPerformancePlayerCollector");
var __dep_export_CastleAllianceBattlegroundEventDialogPerformancePlayerTower = require("gge-module:export_CastleAllianceBattlegroundEventDialogPerformancePlayerTower");
var __dep_export_CastleAllianceBattlegroundEventDialogPerformanceTower = require("gge-module:export_CastleAllianceBattlegroundEventDialogPerformanceTower");
var __dep_export_CastleAllianceBattlegroundEventDialogRankingAlliance = require("gge-module:export_CastleAllianceBattlegroundEventDialogRankingAlliance");
var __dep_export_CastleAllianceBattlegroundEventDialogRankingPlayer = require("gge-module:export_CastleAllianceBattlegroundEventDialogRankingPlayer");
var __dep_export_CastleAllianceBattleGroundEventDialogScoring = require("gge-module:export_CastleAllianceBattleGroundEventDialogScoring");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");

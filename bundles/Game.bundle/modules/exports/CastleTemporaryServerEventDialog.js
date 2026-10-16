Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SSpecialEventInfoVO = require("gge-module:export_C2SSpecialEventInfoVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_TempServerHelper = require("gge-module:export_TempServerHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_TempServerConfigurationVO = require("gge-module:export_TempServerConfigurationVO");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleTemporaryServerEventDialog() {
    var __s3local0 = this;
    __s3local0.currentRankingType = CastleTemporaryServerEventDialog.TAB_RANKING2;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleTemporaryServerEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTemporaryServerEventDialog, __s1param0);
  CastleTemporaryServerEventDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_tab_main, this.dialogDisp.btn_tab_main_castletransportation, this.dialogDisp.btn_tab_main_crossplay, this.dialogDisp.btn_tab_ranking1, this.dialogDisp.btn_tab_tasks, this.dialogDisp.btn_tab_scoring]);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    this._subLayer = new Map();
    this._subLayer.set(CastleTemporaryServerEventDialog.TAB_MAIN, new __dep_export_CastleTemporaryServerEventDialogOverview.CastleTemporaryServerEventDialogOverview(this.dialogDisp.tab_main));
    this._subLayer.set(CastleTemporaryServerEventDialog.TAB_RANKING2, new __dep_export_CastleTemporaryServerEventDialogRanking.CastleTemporaryServerEventDialogRanking(this.dialogDisp.tab_ranking2, this.globalHighScoreType, this));
    this._subLayer.set(CastleTemporaryServerEventDialog.TAB_SCORING, new __dep_export_CastleTemporaryServerEventDialogScoring.CastleTemporaryServerEventDialogScoring(this.dialogDisp.tab_scoring));
    this._subLayer.set(CastleTemporaryServerEventDialog.TAB_TASKS, new __dep_export_CastleTemporaryServerEventDialogTasks.CastleTemporaryServerEventDialogTasks(this.dialogDisp.tab_tasks));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_timeTitle, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_shapeshifter_timer")));
  };
  Object.defineProperty(CastleTemporaryServerEventDialog.prototype, "globalHighScoreType", {
    get: function () {
      return __dep_exact_26a421b704832cff.HighscoreConst.TEMP_SERVER_GLOBAL;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTemporaryServerEventDialog.prototype, "dailyHighScoreType", {
    get: function () {
      switch (this.eventVO.settingVO.scoringSystem) {
        case __dep_export_TempServerConfigurationVO.TempServerConfigurationVO.SCORING_SYSTEM_COLLECTOR:
          return __dep_exact_26a421b704832cff.HighscoreConst.TEMP_SERVER_DAILY_COLLECTOR_POINTS;
        case __dep_export_TempServerConfigurationVO.TempServerConfigurationVO.SCORING_SYSTEM_MIGHT:
          return __dep_exact_26a421b704832cff.HighscoreConst.TEMP_SERVER_DAILY_MIGHT_POINTS_BUILDINGS;
        case __dep_export_TempServerConfigurationVO.TempServerConfigurationVO.SCORING_SYSTEM_RANK_SWAP:
          return __dep_exact_26a421b704832cff.HighscoreConst.TEMP_SERVER_DAILY_RANK_SWAP;
      }
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  CastleTemporaryServerEventDialog.prototype.showLoaded = function (__s12param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s12param0);
    this._subLayer.set(CastleTemporaryServerEventDialog.TAB_RANKING1, new __dep_export_CastleTemporaryServerEventDialogRanking.CastleTemporaryServerEventDialogRanking(this.dialogDisp.tab_ranking1, this.dailyHighScoreType, this));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.serverMessageArrived));
    this.changeCategory(CastleTemporaryServerEventDialog.TAB_MAIN);
    this.updateRemainingEventTime();
    this.dialogDisp.btn_tab_main.visible = !this.eventVO.settingVO.isCastleTransportationOnly && !this.eventVO.isCrossPlay;
    this.dialogDisp.btn_tab_main_castletransportation.visible = this.eventVO.settingVO.isCastleTransportationOnly && !this.eventVO.isCrossPlay;
    this.dialogDisp.btn_tab_main_crossplay.visible = this.eventVO.isCrossPlay;
    this.dialogDisp.btn_tab_main.toolTipText = "panel_action_overview_tooltip";
    this.dialogDisp.btn_tab_main_castletransportation.toolTipText = "panel_action_overview_tooltip";
    this.dialogDisp.btn_tab_main_crossplay.toolTipText = "panel_action_overview_tooltip";
    this.dialogDisp.btn_tab_ranking1.toolTipText = "dialog_tempServer_Ranking_title";
    this.dialogDisp.btn_tab_tasks.toolTipText = this.env.isOnTemporaryServer ? "dialog_tempServer_dailyTask_header" : "dialog_accountInfo_notAvailable_tooltip";
    this.dialogDisp.btn_tab_scoring.toolTipText = "dialog_tempServer_scoring_title";
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_tab_tasks, this.env.isOnTemporaryServer);
    if (this.dialogDisp.btn_tab_main_crossplay.visible) {
      this.dialogDisp.btn_tab_main_crossplay.mc_icon.gotoAndStop(__dep_export_TempServerHelper.TempServerHelper.getAssetFrame());
      this.dialogDisp.btn_tab_main_crossplay.gotoAndStop(2);
      this.dialogDisp.btn_tab_main_crossplay.mc_icon.gotoAndStop(__dep_export_TempServerHelper.TempServerHelper.getAssetFrame());
      this.dialogDisp.btn_tab_main_crossplay.gotoAndStop(1);
    }
  };
  CastleTemporaryServerEventDialog.prototype.hideLoaded = function (__s15param0 = null) {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.serverMessageArrived));
    __s1param0.prototype.hideLoaded.call(this, __s15param0);
  };
  CastleTemporaryServerEventDialog.prototype.changeCategory = function (__s17param0) {
    if (this._currentCategory != __s17param0) {
      if (__dep_export_TempServerHelper.TempServerHelper.tmpServerEvent) {
        __s1param0.prototype.changeCategory.call(this, __s17param0);
        this.showSublayer(this._subLayer.get(__s17param0), []);
        if (this.isInRankingTab) {
          this.currentRankingType = __s17param0;
        }
        if (this._currentCategory == CastleTemporaryServerEventDialog.TAB_RANKING1 || this._currentCategory == CastleTemporaryServerEventDialog.TAB_TASKS) {
          this.textFieldManager.registerTextField(this.dialogDisp.txt_timeTitle, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_timeUntilPoints_desc")));
        } else {
          this.textFieldManager.registerTextField(this.dialogDisp.txt_timeTitle, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_shapeshifter_timer")));
        }
        this.updateButton(this.dialogDisp.btn_tab_main, this._currentCategory == CastleTemporaryServerEventDialog.TAB_MAIN);
        this.updateButton(this.dialogDisp.btn_tab_main_castletransportation, this._currentCategory == CastleTemporaryServerEventDialog.TAB_MAIN);
        this.updateButton(this.dialogDisp.btn_tab_main_crossplay, this._currentCategory == CastleTemporaryServerEventDialog.TAB_MAIN);
        this.updateButton(this.dialogDisp.btn_tab_ranking1, this.isInRankingTab);
        this.updateButton(this.dialogDisp.btn_tab_tasks, this._currentCategory == CastleTemporaryServerEventDialog.TAB_TASKS);
        this.updateButton(this.dialogDisp.btn_tab_scoring, this._currentCategory == CastleTemporaryServerEventDialog.TAB_SCORING);
        this.updateRemainingEventTime();
        this.dialogDisp.icon_time.gotoAndStop(this._currentCategory == CastleTemporaryServerEventDialog.TAB_RANKING1 ? 2 : 1);
      } else {
        this.hide();
      }
    }
  };
  Object.defineProperty(CastleTemporaryServerEventDialog.prototype, "isInRankingTab", {
    get: function () {
      return this._currentCategory == CastleTemporaryServerEventDialog.TAB_RANKING1 || this._currentCategory == CastleTemporaryServerEventDialog.TAB_RANKING2;
    },
    enumerable: true,
    configurable: true
  });
  CastleTemporaryServerEventDialog.prototype.updateButton = function (__s27param0, __s27param1) {
    __s27param0.gotoAndStop(__s27param1 ? 2 : 1);
  };
  Object.defineProperty(CastleTemporaryServerEventDialog.prototype, "eventVO", {
    get: function () {
      return __dep_export_TempServerHelper.TempServerHelper.tmpServerEvent;
    },
    enumerable: true,
    configurable: true
  });
  CastleTemporaryServerEventDialog.prototype.updateRemainingEventTime = function () {
    if (this.eventVO) {
      var __s31local0 = 0;
      if (this._currentCategory == CastleTemporaryServerEventDialog.TAB_RANKING1 || this._currentCategory == CastleTemporaryServerEventDialog.TAB_TASKS) {
        if ((__s31local0 = __dep_exact_f855840627e6e145.int(this.eventVO.remainingTimeInSecondsUntilDailyReset)) <= 0 && !this.isWaitingForServerMessage) {
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSpecialEventInfoVO.C2SSpecialEventInfoVO());
        }
      } else {
        __s31local0 = __dep_exact_f855840627e6e145.int(this.eventVO.remainingEventTimeInSeconds);
      }
      __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.dialogDisp.txt_text, __s31local0);
    } else {
      this.hide();
    }
  };
  CastleTemporaryServerEventDialog.prototype.toggleRankingType = function () {
    if (this._currentCategory == CastleTemporaryServerEventDialog.TAB_RANKING1) {
      this.changeCategory(CastleTemporaryServerEventDialog.TAB_RANKING2);
    } else if (this._currentCategory == CastleTemporaryServerEventDialog.TAB_RANKING2) {
      this.changeCategory(CastleTemporaryServerEventDialog.TAB_RANKING1);
    }
  };
  CastleTemporaryServerEventDialog.prototype.onClick = function (__s42param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s42param0.target)) {
      __s1param0.prototype.onClick.call(this, __s42param0);
      switch (__s42param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_tab_main:
        case this.dialogDisp.btn_tab_main_castletransportation:
        case this.dialogDisp.btn_tab_main_crossplay:
          this.changeCategory(CastleTemporaryServerEventDialog.TAB_MAIN);
          break;
        case this.dialogDisp.btn_tab_ranking1:
          this.changeCategory(this.currentRankingType);
          break;
        case this.dialogDisp.btn_tab_tasks:
          this.changeCategory(CastleTemporaryServerEventDialog.TAB_TASKS);
          break;
        case this.dialogDisp.btn_tab_scoring:
          this.changeCategory(CastleTemporaryServerEventDialog.TAB_SCORING);
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_tempServer"));
      }
    }
  };
  CastleTemporaryServerEventDialog.prototype.serverMessageArrived = function (__s46param0) {
    this.isWaitingForServerMessage = false;
    if (__dep_export_TempServerHelper.TempServerHelper.tmpServerEvent) {
      this.updateRemainingEventTime();
    } else {
      this.hide();
    }
  };
  CastleTemporaryServerEventDialog.prototype.onTickEvent = function (__s50param0) {
    this.updateRemainingEventTime();
  };
  CastleTemporaryServerEventDialog.NAME = "CastleTemporaryServerEvent_9_0";
  CastleTemporaryServerEventDialog.TAB_MAIN = "tab_main";
  CastleTemporaryServerEventDialog.TAB_RANKING1 = "tab_ranking1";
  CastleTemporaryServerEventDialog.TAB_RANKING2 = "tab_ranking2";
  CastleTemporaryServerEventDialog.TAB_SCORING = "tab_scoring";
  CastleTemporaryServerEventDialog.TAB_TASKS = "tab_tasks";
  return CastleTemporaryServerEventDialog;
}(require("gge-module:export_CastleExternalSubLayerDialog").CastleExternalSubLayerDialog);
exports.CastleTemporaryServerEventDialog = __s0local0;
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleTemporaryServerEventDialogOverview = require("gge-module:export_CastleTemporaryServerEventDialogOverview");
var __dep_export_CastleTemporaryServerEventDialogRanking = require("gge-module:export_CastleTemporaryServerEventDialogRanking");
var __dep_export_CastleTemporaryServerEventDialogScoring = require("gge-module:export_CastleTemporaryServerEventDialogScoring");
var __dep_export_CastleTemporaryServerEventDialogTasks = require("gge-module:export_CastleTemporaryServerEventDialogTasks");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");

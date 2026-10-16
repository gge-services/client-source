Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleQuestDataEvent = require("gge-module:export_CastleQuestDataEvent");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleScoreBarProgressVO = require("gge-module:export_CastleScoreBarProgressVO");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastleDailyQuestDialog() {
    var __s3local0 = this;
    __s3local0.DAILY_QUESTS_AMOUNT = 12;
    __s3local0.DEFAULT_QUEST_INDEX = 0;
    __s3local0.REWARD_DIMENSION = new __s0local1(45, 45);
    __s3local0.selectedQuestIndex = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleDailyQuestDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDailyQuestDialog, __s1param0);
  CastleDailyQuestDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    var __s5local0 = [this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_showMe];
    for (var __s5local1 = 0; __s5local1 < this.DAILY_QUESTS_AMOUNT; __s5local1++) {
      __s5local0.push(this.dialogDisp["quest" + __s5local1]);
      this.dialogDisp["quest" + __s5local1].active.visible = false;
    }
    this.initBasicButtons(__s5local0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_dailyQuests_desc")).verticalAlign = __dep_exact_9e901e8e2483a22f_1.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_scoreBarComponent.txt_pointsDescription, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_dailyQuests_counter2"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_questRewards, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_dailyQuests_rewards"));
    this.itxt_timer = this.textFieldManager.registerTextField(this.dialogDisp.mc_resetTimer.txt_time, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this.itxt_questTitle = this.textFieldManager.registerTextField(this.dialogDisp.txt_questTitle, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.itxt_questDescription = this.textFieldManager.registerTextField(this.dialogDisp.txt_questDescription, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.itxt_showMe = this.textFieldManager.registerTextField(this.dialogDisp.btn_showMe.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this.itxt_showMe.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.dialogDisp.mc_scoreBarComponent.mc_pointsTooltip.toolTipText = "dialog_dailyQuests_counter_tooltip";
    this.dialogDisp.mc_resetTimer.toolTipText = "dialog_dailyQuests_timer_tooltip";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.mc_resetTimer.mouseChildren = false;
  };
  CastleDailyQuestDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    if (this.questData.currentQuests.length <= 0) {
      this.hide();
    } else {
      this.updateTimer();
      this.updateQuests();
      if (this.selectedQuest) {
        this.updateQuestInfo();
      } else {
        this.selectDailyQuest(this.DEFAULT_QUEST_INDEX);
      }
      if (this.scoreBar) {
        this.scoreBar.destroy();
      }
      this.scoreBar = new __dep_export_CastleScoreBarComponent.CastleScoreBarComponent(this.dialogDisp.mc_scoreBarComponent, new __dep_export_DailyQuestScoreBarProperties.DailyQuestScoreBarProperties(this.questData.thresholdRewards));
      this.scoreBar.update(new __dep_export_CastleScoreBarProgressVO.CastleScoreBarProgressVO(this.questData.getFinishedQuests().length, 0, __dep_export_CastleQuestData.CastleQuestData.DAILY_QUEST_THRESHOLDS, []));
    }
  };
  CastleDailyQuestDialog.prototype.updateTimer = function () {
    this.itxt_timer.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__dep_export_CastleModel.CastleModel.timerData.timeTillDailyResetInSec);
  };
  CastleDailyQuestDialog.prototype.updateQuests = function () {
    var __s18local0;
    var __s18local1;
    for (var __s18local2 = 0; __s18local2 < Math.min(this.questData.currentQuests.length, this.DAILY_QUESTS_AMOUNT); __s18local2++) {
      __s18local0 = this.questData.currentQuests[__s18local2];
      __s18local1 = this.dialogDisp["quest" + __s18local2];
      __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(__s18local1.mc_questIcon);
      __s18local1.mc_questIcon.addChild(__s18local0.getQuestIcon());
      __s18local1.gotoAndStop(__s18local0.isFinished ? 2 : 1);
      __s18local1.toolTipText = __s18local0.getQuestName();
    }
  };
  CastleDailyQuestDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this.questData.addEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.DAILYQUEST_REFRESHED, this.bindFunction(this.onQuestRefresh));
  };
  CastleDailyQuestDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this.questData.removeEventListener(__dep_export_CastleQuestDataEvent.CastleQuestDataEvent.DAILYQUEST_REFRESHED, this.bindFunction(this.onQuestRefresh));
  };
  CastleDailyQuestDialog.prototype.onTimer = function (__s26param0) {
    this.updateTimer();
  };
  CastleDailyQuestDialog.prototype.onQuestRefresh = function (__s28param0) {
    this.updateQuests();
    this.updateQuestInfo();
    this.scoreBar.update(new __dep_export_CastleScoreBarProgressVO.CastleScoreBarProgressVO(this.questData.getFinishedQuests().length, 0, __dep_export_CastleQuestData.CastleQuestData.DAILY_QUEST_THRESHOLDS, []));
  };
  CastleDailyQuestDialog.prototype.onClick = function (__s30param0) {
    __s1param0.prototype.onClick.call(this, __s30param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s30param0.target) && __s30param0.target instanceof __s0local0) {
      var __s30local0 = __s30param0.target.name.match(/quest[0-9]+/);
      if (__s30local0 && __s30local0.length > 0) {
        this.selectDailyQuest(__dep_exact_f855840627e6e145.int(__s30local0.pop().replace("quest", "")));
      }
      switch (__s30param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_showMe:
          __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SHOW_HOW_TODO_QUESTCONDITION_COMMAND, [this.selectedQuest, this.selectedQuest.conditions[0]]);
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_dailyQuests"));
      }
    }
  };
  CastleDailyQuestDialog.prototype.selectDailyQuest = function (__s35param0) {
    if (this.selectedQuestMC) {
      this.selectedQuestMC.active.visible = false;
    }
    this.selectedQuestIndex = __s35param0;
    if (!this.selectedQuest && __s35param0 != this.DEFAULT_QUEST_INDEX) {
      this.selectDailyQuest(this.DEFAULT_QUEST_INDEX);
    }
    if (this.selectedQuest) {
      this.selectedQuestMC = this.dialogDisp["quest" + __s35param0];
      this.selectedQuestMC.active.visible = true;
      this.updateQuestInfo();
    }
  };
  CastleDailyQuestDialog.prototype.updateQuestInfo = function () {
    this.itxt_questTitle.textContentVO.textId = this.selectedQuest.getQuestName();
    this.itxt_questDescription.textContentVO.textId = this.selectedQuest.getQuestDescription();
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dialogDisp.currentQuest.mc_questIcon);
    this.dialogDisp.currentQuest.mc_questIcon.addChild(this.selectedQuest.getQuestIcon(true));
    this.dialogDisp.currentQuest.gotoAndStop(this.selectedQuest.isFinished ? 2 : 1);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList(this.dialogDisp, "reward").addItemMcs("mc_item").addInfoBtns("parent.btn_info"), this.selectedQuest.rewards, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, this.REWARD_DIMENSION));
    if (this.selectedQuest.isFinished) {
      this.itxt_showMe.textContentVO.textId = "dialog_dailyQuests_completed";
      this.itxt_showMe.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_showMe, false);
    } else {
      this.itxt_showMe.textContentVO.textId = "dialog_dailyQuests_showMe";
      this.itxt_showMe.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_showMe, true);
    }
  };
  Object.defineProperty(CastleDailyQuestDialog.prototype, "questData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.dailyQuestData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDailyQuestDialog.prototype, "selectedQuest", {
    get: function () {
      return this.questData.currentQuests[this.selectedQuestIndex];
    },
    enumerable: true,
    configurable: true
  });
  CastleDailyQuestDialog.NAME = "CastleDailyQuest";
  return CastleDailyQuestDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleDailyQuestDialog = __s0local2;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleQuestData = require("gge-module:export_CastleQuestData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleScoreBarComponent = require("gge-module:export_CastleScoreBarComponent");
var __dep_export_DailyQuestScoreBarProperties = require("gge-module:export_DailyQuestScoreBarProperties");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");

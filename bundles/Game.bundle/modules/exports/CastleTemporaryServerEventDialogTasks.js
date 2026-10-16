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
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_SeasonLeagueRewardOverviewDialog = require("gge-module:export_SeasonLeagueRewardOverviewDialog");
var __dep_export_SeasonLeagueRewardOverviewDialogProperties = require("gge-module:export_SeasonLeagueRewardOverviewDialogProperties");
var __dep_export_TempServerSimpleRewardsComponent = require("gge-module:export_TempServerSimpleRewardsComponent");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __s0local0 = function (__s1param0) {
  function CastleTemporaryServerEventDialogTasks(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTemporaryServerEventDialogTasks, __s1param0);
  CastleTemporaryServerEventDialogTasks.prototype.init = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_dailyTask_header")));
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_rewards.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("rewards")));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tempServer_dailyTask_desc"));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_points0, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("currency_name_DailyDutyPoints")));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_points1, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_dailyTask_RewardStep")));
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.subLayerDisp.mc_task0.btn_showMe, this.subLayerDisp.mc_task1.btn_showMe, this.subLayerDisp.mc_task2.btn_showMe, this.subLayerDisp.btn_rewards], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.subLayerDisp.btn_left, this.subLayerDisp.btn_right]);
    this._rewards = new __dep_export_TempServerSimpleRewardsComponent.TempServerSimpleRewardsComponent(this.subLayerDisp, true, true, 0);
  };
  CastleTemporaryServerEventDialogTasks.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    this.updateData();
    this._rewards.updateWithNewData(this.rewardList);
    this._rewards.onShow();
  };
  Object.defineProperty(CastleTemporaryServerEventDialogTasks.prototype, "rewardList", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.tempServerData.getDailyTaskRewardsByPoints(this.dailyTaskPoints);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTemporaryServerEventDialogTasks.prototype, "dailyTaskPoints", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_ClientConstCurrency.ClientConstCurrency.ID_DAILY_TASK_POINTS_KEY);
    },
    enumerable: true,
    configurable: true
  });
  CastleTemporaryServerEventDialogTasks.prototype.updateData = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_value0, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(this.dailyTaskPoints));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_rewards, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_dailyTask_CurrentReward")));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_noRewards, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_tempServer_dailyTask_noCurrentReward")).visible = this.rewardList.length <= 0;
    var __s13local0 = __dep_export_CastleModel.CastleModel.tempServerData.getReachedRewardStepsByPoints(this.dailyTaskPoints);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_value1, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [__s13local0[0], __s13local0[1]]));
    this.quests = __dep_export_CastleModel.CastleModel.dailyQuestData.getTempServerQuests();
    for (var __s13local1 = 0; __s13local1 < 3; __s13local1++) {
      if (this.quests.length > __s13local1) {
        this.updateQuest(this.subLayerDisp["mc_task" + __s13local1], this.quests[__s13local1]);
      } else {
        this.subLayerDisp["mc_task" + __s13local1].visible = false;
      }
    }
  };
  CastleTemporaryServerEventDialogTasks.prototype.updateQuest = function (__s19param0, __s19param1) {
    __s19param0.visible = true;
    this.textFieldManager.registerTextField(__s19param0.txt_task, new __dep_exact_92d05af59ee2ff30.TextVO(__s19param1.conditions[0].getConditionText(false)));
    this.textFieldManager.registerTextField(__s19param0.mc_progress.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [__s19param1.conditions[0].conditionCounter, __s19param1.conditions[0].conditionMaxCounter]));
    __s19param0.mc_progress.mc_bar.scaleX = __dep_exact_9e901e8e2483a22f.MathBase.clamp(__s19param1.conditions[0].conditionCounter / __s19param1.conditions[0].conditionMaxCounter, 0, 1);
    this.textFieldManager.registerTextField(__s19param0.txt_points, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("currency_name_DailyDutyPoints"));
    this.textFieldManager.registerTextField(__s19param0.txt_value, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s19param1.addDailyTaskPoints));
    __s19param0.btn_showMe.toolTipText = "showMe_simple";
  };
  CastleTemporaryServerEventDialogTasks.prototype.onClick = function (__s21param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s21param0.target)) {
      __s1param0.prototype.onClick.call(this, __s21param0);
      switch (__s21param0.target) {
        case this.subLayerDisp.mc_task0.btn_showMe:
          __dep_exact_9e901e8e2483a22f_2.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SHOW_HOW_TODO_QUESTCONDITION_COMMAND, [this.quests[0], this.quests[0].conditions[0]]);
          break;
        case this.subLayerDisp.mc_task1.btn_showMe:
          __dep_exact_9e901e8e2483a22f_2.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SHOW_HOW_TODO_QUESTCONDITION_COMMAND, [this.quests[1], this.quests[2].conditions[0]]);
          break;
        case this.subLayerDisp.mc_task2.btn_showMe:
          __dep_exact_9e901e8e2483a22f_2.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SHOW_HOW_TODO_QUESTCONDITION_COMMAND, [this.quests[2], this.quests[2].conditions[0]]);
          break;
        case this.subLayerDisp.btn_rewards:
          __dep_export_CastleDialogSubLayer.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(__dep_export_SeasonLeagueRewardOverviewDialog.SeasonLeagueRewardOverviewDialog, new __dep_export_SeasonLeagueRewardOverviewDialogProperties.SeasonLeagueRewardOverviewDialogProperties(__dep_export_CastleModel.CastleModel.tempServerData.getDailyTaskRewardsAsOverviewItems(), "dialog_tempServer_dailyTask_rewards_header", "dialog_tempServer_dailyTask_rewards_desc", "dialog_tempServer_dailyTask_rewards_help"));
          break;
        case this.subLayerDisp.btn_left:
        case this.subLayerDisp.btn_right:
      }
    }
  };
  CastleTemporaryServerEventDialogTasks.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._rewards.onHide();
  };
  return CastleTemporaryServerEventDialogTasks;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleTemporaryServerEventDialogTasks = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");

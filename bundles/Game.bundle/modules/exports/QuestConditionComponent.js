Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function QuestConditionComponent(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._disp = __s3param0;
    __s3local0.itxt_condition = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param0.txt_condition, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    __s3local0.itxt_condition.autoFitToBounds = true;
    __s3local0.itxt_condition.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    __s3local0.itxt_progress = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s3param0.quest_progressbar.txt_progress, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE));
    __s3local0.progressBar = new __dep_exact_84d43d9c404bd4d8.BasicProgressBar(__s3param0.quest_progressbar.progressbar);
    __dep_export_ButtonHelper.ButtonHelper.initButton(__s3param0.btn_showMe, -1, __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param0.btn_donate);
    __s3param0.btn_showMe.toolTipText = "dialog_questInfo_showMe";
    __s3param0.btn_donate.toolTipText = "dialog_questInfo_showMe";
    __s3param0.icon_done.toolTipText = "dialog_questbook_taskfinished_tt";
    __s3param0.icon_failed.toolTipText = "dialog_questbook_taskfailed_tt";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(QuestConditionComponent, __s1param0);
  QuestConditionComponent.prototype.show = function (__s5param0, __s5param1) {
    this._disp.visible = true;
    this._quest = __s5param0;
    this._condition = __s5param1;
    this.itxt_condition.textContentVO.stringValue = __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__s5param1.getConditionText());
    var __s5local0 = this.getProgress();
    this.itxt_progress.textContentVO.textReplacements = [new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s5local0), new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s5param1.conditionMaxCounter)];
    this.progressBar.scaleX = __dep_exact_9e901e8e2483a22f_2.MathBase.clamp(__s5local0 / __s5param1.conditionMaxCounter, 0, 1);
    var __s5local1 = __s5local0 >= __s5param1.conditionMaxCounter;
    this._disp.btn_showMe.visible = __s5param1.hasConditionShowHowTo && !__s5local1 && !this._quest.isFailed && !this._quest.isCompleted && !__s5param0.isLocked;
    this._disp.icon_done.visible = __s5local1;
    this._disp.icon_failed.visible = this._quest.isFailed && !__s5local1;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.btn_showMe, !__s5param0.isLocked);
    this.updateDonationButton();
    this._disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onCLick));
  };
  QuestConditionComponent.prototype.getProgress = function () {
    return __dep_exact_f855840627e6e145.int(this._condition.isDone() ? this._condition.conditionMaxCounter : Math.min(this._condition.conditionMaxCounter, Math.max(this._condition.conditionCounter, 0)));
  };
  QuestConditionComponent.prototype.updateDonationButton = function () {
    var __s9local0 = this.getProgress() >= this._condition.conditionMaxCounter;
    this._disp.btn_donate.visible = this._condition.isDonationQuest && !__s9local0 && !this._quest.isFailed && !this._quest.isCompleted && !this._quest.isLocked;
    if (__dep_export_CastleComponent.CastleComponent.layoutManager.isInEventState || this._quest.xmlTriggerKingdomID != __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID && this._quest.xmlTriggerKingdomID != -1) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.btn_donate, false);
      this._disp.btn_donate.toolTipText = "questbook_notice_notrightKingdom";
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this._disp.btn_donate, !this._quest.isLocked);
      this._disp.btn_donate.toolTipText = "dialog_questInfo_Donate";
    }
  };
  QuestConditionComponent.prototype.hide = function () {
    this._disp.visible = false;
    this._disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onCLick));
  };
  QuestConditionComponent.prototype.onCLick = function (__s15param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s15param0.target)) {
      switch (__s15param0.target) {
        case this._disp.btn_donate:
          __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.DONATE_FOR_QUEST_COMMAND, [this._quest, this._condition, this.bindFunction(this.onDonation), this.bindFunction(this.onDonation)]);
          break;
        case this._disp.btn_showMe:
          __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SHOW_HOW_TODO_QUESTCONDITION_COMMAND, [this._quest, this._condition]);
      }
    }
  };
  QuestConditionComponent.prototype.onDonation = function (__s19param0) {
    this.updateDonationButton();
  };
  return QuestConditionComponent;
}(__dep_export_CastleComponent.CastleComponent);
exports.QuestConditionComponent = __s0local1;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");

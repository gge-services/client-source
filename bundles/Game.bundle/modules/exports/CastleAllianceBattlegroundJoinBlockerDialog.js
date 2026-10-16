Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleAllianceBattlegroundJoinBlockerDialog() {
    return __s1param0.call(this, CastleAllianceBattlegroundJoinBlockerDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceBattlegroundJoinBlockerDialog, __s1param0);
  CastleAllianceBattlegroundJoinBlockerDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_showMe, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
  };
  CastleAllianceBattlegroundJoinBlockerDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_eventParticipationBlocker_infoDialog_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_beyondTheHorizon_eventParticipationBlocker_infoDialog_desc"));
    this.itxt_remain = this.textFieldManager.registerTextField(this.dialogDisp.txt_remain, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_eventParticipationBlocker_infoDialog_timer")));
    this.itxt_remain.autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_showMe.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("showMe_simple")));
    this.itxt_timer = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(" "));
    this.updateTime();
  };
  CastleAllianceBattlegroundJoinBlockerDialog.prototype.addEventListenerOnShow = function () {
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
  };
  CastleAllianceBattlegroundJoinBlockerDialog.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
  };
  CastleAllianceBattlegroundJoinBlockerDialog.prototype.updateTime = function (__s13param0 = null) {
    if (__dep_export_ABGHelper.ABGHelper.abgEvent.remainingTimeInSecondsUntilJoinBlock > 0) {
      this.itxt_timer.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__dep_export_ABGHelper.ABGHelper.abgEvent.remainingTimeInSecondsUntilJoinBlock);
      this.itxt_remain.textContentVO.stringValue = __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_eventParticipationBlocker_infoDialog_timer");
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_showMe, true);
      this.dialogDisp.btn_showMe.toolTipText = null;
      this.dialogDisp.mc_time.visible = true;
    } else {
      this.itxt_timer.textContentVO.stringValue = " ";
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_showMe, __dep_export_ABGHelper.ABGHelper.abgEvent.castleBought);
      this.itxt_remain.textContentVO.stringValue = __dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_main_eventParticipationBlocker_blocked");
      this.dialogDisp.btn_showMe.toolTipText = __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.dialogDisp.btn_showMe) ? null : "dialog_beyondTheHorizon_main_eventParticipationBlocker_blocked_tooltip";
      this.dialogDisp.mc_time.visible = false;
    }
  };
  CastleAllianceBattlegroundJoinBlockerDialog.prototype.onClick = function (__s17param0) {
    __s1param0.prototype.onClick.call(this, __s17param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s17param0.target)) {
      switch (__s17param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_showMe:
          this.onOK();
      }
    }
  };
  CastleAllianceBattlegroundJoinBlockerDialog.prototype.onOK = function () {
    if (!__dep_export_ABGHelper.ABGHelper.abgEvent.castleBought) {
      __dep_exact_9e901e8e2483a22f.BasicDialogHandler.getInstance().registerDialogs(__dep_export_CastleAllianceBattleGroundBuyInfoDialog.CastleAllianceBattleGroundBuyInfoDialog);
    }
    this.hide();
  };
  CastleAllianceBattlegroundJoinBlockerDialog.NAME = "CastleAllianceBattleGroundMessage";
  return CastleAllianceBattlegroundJoinBlockerDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleAllianceBattlegroundJoinBlockerDialog = __s0local0;
var __dep_export_CastleAllianceBattleGroundBuyInfoDialog = require("gge-module:export_CastleAllianceBattleGroundBuyInfoDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");

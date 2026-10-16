Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
var __s0local0 = function (__s1param0) {
  function CastleAllianceBattlegroundMessageDialog() {
    return __s1param0.call(this, CastleAllianceBattlegroundMessageDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceBattlegroundMessageDialog, __s1param0);
  CastleAllianceBattlegroundMessageDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_showMe, this.dialogDisp.btn_close], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
  };
  CastleAllianceBattlegroundMessageDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("event_title_113")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_beyondTheHorizon_inboxMessage_desc_" + (__dep_export_ABGHelper.ABGHelper.abgEvent ? __dep_export_ABGHelper.ABGHelper.abgEvent.settingVO.scoringSystemVO.scoring : "AllianceTower")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_remain, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("countdown_restTime_noValue", [new __dep_exact_92d05af59ee2ff30.TextVO("  ")])));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_showMe.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("showMe_simple")));
    this.itxt_timer = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(" "));
    this.updateTime();
  };
  CastleAllianceBattlegroundMessageDialog.prototype.addEventListenerOnShow = function () {
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
  };
  CastleAllianceBattlegroundMessageDialog.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
  };
  CastleAllianceBattlegroundMessageDialog.prototype.updateTime = function (__s13param0 = null) {
    if (__dep_export_ABGHelper.ABGHelper.abgEvent) {
      if (this.itxt_timer.textContentVO) {
        this.itxt_timer.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(__dep_export_ABGHelper.ABGHelper.abgEvent.remainingEventTimeInSeconds);
      }
    } else {
      this.hide();
    }
  };
  CastleAllianceBattlegroundMessageDialog.prototype.onClick = function (__s18param0) {
    __s1param0.prototype.onClick.call(this, __s18param0);
    switch (__s18param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_showMe:
        this.onOK();
    }
  };
  CastleAllianceBattlegroundMessageDialog.prototype.onOK = function () {
    if (__dep_export_ABGHelper.ABGHelper.abgEvent) {
      __dep_export_ABGHelper.ABGHelper.abgEvent.openDialog();
    }
    this.hide();
  };
  CastleAllianceBattlegroundMessageDialog.NAME = "CastleAllianceBattleGroundMessage";
  return CastleAllianceBattlegroundMessageDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleAllianceBattlegroundMessageDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");

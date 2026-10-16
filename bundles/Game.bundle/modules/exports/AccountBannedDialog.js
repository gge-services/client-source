Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.TimerEvent;
var __s0local1 = function (__s1param0) {
  function AccountBannedDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, AccountBannedDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AccountBannedDialog, __s1param0);
  AccountBannedDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
  };
  AccountBannedDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.dialogProperties.title)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProperties.copy));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_banned, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("countdown_restTime_noValue"));
    this.timer = new __dep_exact_81dacdf05bd32292.Timer(1000, 0);
    this.timer.start();
    this.timer.addEventListener(__s0local0.TIMER, this.bindFunction(this.onTimer));
    this.onTimer();
  };
  AccountBannedDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    this.timer.removeEventListener(__s0local0.TIMER, this.bindFunction(this.onTimer));
    this.timer.stop();
  };
  AccountBannedDialog.prototype.onTimer = function (__s11param0 = null) {
    var __s11local0 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(this.dialogProperties.remainingTimeInSeconds);
    if (this.tf_Timer) {
      this.tf_Timer.text = __s11local0;
    } else {
      this.tf_Timer = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(__s11local0));
    }
  };
  AccountBannedDialog.prototype.onClick = function (__s15param0) {
    __s1param0.prototype.onClick.call(this, __s15param0);
    switch (__s15param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(AccountBannedDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AccountBannedDialog.__initialize_static_members = function () {
    AccountBannedDialog.NAME = "AccountBanned";
  };
  return AccountBannedDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.AccountBannedDialog = __s0local1;
__s0local1.__initialize_static_members();

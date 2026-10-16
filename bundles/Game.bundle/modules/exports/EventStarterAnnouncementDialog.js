Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function EventStarterAnnouncementDialog() {
    return __s1param0.call(this, EventStarterAnnouncementDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EventStarterAnnouncementDialog, __s1param0);
  EventStarterAnnouncementDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.dialogDisp.icon_timer.toolTipText = "resttime";
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_goto], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
  };
  EventStarterAnnouncementDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.dialogProperties.getTitleTextID())));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.dialogProperties.getDescriptionTextID()));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_goto.txt_label, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("joinEvent")));
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_teaser);
    var __s7local0 = "EventStarterAnnouncementTeaser_" + this.dialogProperties.eventID;
    var __s7local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s7local0, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s7local0), null, 0, false);
    this.dialogDisp.mc_teaser.addChild(__s7local1);
    this._itxt_timer = this.textFieldManager.registerTextField(this.dialogDisp.txt_timer, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this._itxt_timer.visible = false;
    this.dialogDisp.icon_timer.visible = false;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_join, false);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  EventStarterAnnouncementDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  EventStarterAnnouncementDialog.prototype.onTimerUpdate = function (__s11param0) {
    var __s11local0 = 0;
    if (this.dialogProperties.eventVO) {
      __s11local0 = this.dialogProperties.getRemainingTime();
    }
    if (!this.dialogProperties.eventVO || __s11local0 <= 0) {
      this.hide();
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_join, true);
      this._itxt_timer.visible = true;
      this.dialogDisp.icon_timer.visible = true;
      this._itxt_timer.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getHoureMinuteSecondTimeString(__s11local0);
    }
  };
  EventStarterAnnouncementDialog.prototype.onClick = function (__s16param0) {
    __s1param0.prototype.onClick.call(this, __s16param0);
    switch (__s16param0.target) {
      case this.dialogDisp.btn_goto:
        if (this.dialogProperties.eventVO) {
          this.dialogProperties.eventVO.openDialog();
        }
        this.hide();
        break;
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(EventStarterAnnouncementDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  EventStarterAnnouncementDialog.NAME = "EventStarterAnnouncementDialogExt";
  return EventStarterAnnouncementDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.EventStarterAnnouncementDialog = __s0local0;

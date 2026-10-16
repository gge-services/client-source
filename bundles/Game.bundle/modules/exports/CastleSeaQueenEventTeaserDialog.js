Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __s0local0 = function (__s1param0) {
  function CastleSeaQueenEventTeaserDialog() {
    return __s1param0.call(this, CastleSeaQueenEventTeaserDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSeaQueenEventTeaserDialog, __s1param0);
  CastleSeaQueenEventTeaserDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_okay]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("message_header_seaqueen_start")).autoFitToBounds = true;
    if (this.getEventVO().mapID == __dep_exact_26a421b704832cff.TreasureMapsConst.MAP_ID_SEAQUEEN_EXTRA_HARD || this.getEventVO().mapID == __dep_exact_26a421b704832cff.TreasureMapsConst.MAP_ID_SEAQUEEN_HARD) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_seaqueen_message2"));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_seaqueen_message"));
    }
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_timer.txt_time, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.itxt_time.textAlign = __dep_exact_9e901e8e2483a22f.GGSTextAlign.LEFT;
  };
  CastleSeaQueenEventTeaserDialog.prototype.applyPropertiesLoaded = function (__s9param0 = null) {
    __s1param0.prototype.applyProperties.call(this);
    this.onUpdateEventTime(null);
  };
  CastleSeaQueenEventTeaserDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
  };
  CastleSeaQueenEventTeaserDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
  };
  CastleSeaQueenEventTeaserDialog.prototype.onUpdateEventTime = function (__s15param0) {
    var __s15local0 = 0;
    var __s15local1 = this.getEventVO();
    if (__s15local1 && this.itxt_time.textContentVO) {
      __s15local0 = __dep_exact_f855840627e6e145.int(__s15local1.remainingEventTimeInSeconds);
    }
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_timer.txt_time, __s15local0);
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_timer, __s15local0);
  };
  CastleSeaQueenEventTeaserDialog.prototype.onClick = function (__s18param0) {
    __s1param0.prototype.onClick.call(this, __s18param0);
    switch (__s18param0.target) {
      case this.dialogDisp.btn_okay:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleSeaQueenEventTeaserDialog.prototype.getEventVO = function () {
    return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN);
  };
  CastleSeaQueenEventTeaserDialog.prototype.onEventRemoved = function (__s23param0) {
    this.hide();
  };
  CastleSeaQueenEventTeaserDialog.NAME = "CastleSeaqueenEventTeaser";
  return CastleSeaQueenEventTeaserDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleSeaQueenEventTeaserDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleWorldCupDialogProperties = require("gge-module:export_CastleWorldCupDialogProperties");
var __s0local0 = function (__s1param0) {
  function StatusIconWorldCup() {
    var __s3local0 = __s1param0.call(this, "Btn_WorldCup", new __dep_exact_92d05af59ee2ff30.TextVO(""), __dep_export_ACastleStatusIcon.ACastleStatusIcon.PRIORITY_MIDDLE) || this;
    __s3local0.setTooltip("dialog_worldCup");
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconWorldCup, __s1param0);
  StatusIconWorldCup.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onVoteStarted));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnded));
  };
  StatusIconWorldCup.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onVoteStarted));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnded));
  };
  StatusIconWorldCup.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconWorldCup.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconWorldCup.prototype.setVisibilityLoaded = function () {
    this.worldCupEventVO = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_WORLD_CUP);
    if (this.worldCupEventVO && this.worldCupEventVO.remainingEventTimeInSeconds > 0 && __dep_export_CastleModel.CastleModel.userData.userLevel >= this.worldCupEventVO.minLevel && !__dep_export_CastleModel.CastleModel.privateOfferData.isHiddenEvent(this.worldCupEventVO.eventId)) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconWorldCup.prototype.onClick = function () {
    if (this.isOutOfTutorial()) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleWorldCupDialog.CastleWorldCupDialog, new __dep_export_CastleWorldCupDialogProperties.CastleWorldCupDialogProperties(this.worldCupEventVO));
    }
  };
  StatusIconWorldCup.prototype.onTimerUpdate = function (__s20param0 = null) {
    this.itxt_label.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.worldCupEventVO.remainingEventTimeInSeconds);
  };
  StatusIconWorldCup.prototype.onEventEnded = function (__s22param0) {
    this.setVisibility();
  };
  StatusIconWorldCup.prototype.onVoteStarted = function (__s24param0) {
    this.setVisibility();
  };
  StatusIconWorldCup.prototype.showLoaded = function (__s26param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s26param0);
    this.onTimerUpdate();
  };
  return StatusIconWorldCup;
}(require("gge-module:export_AOfferHubItemStatusIcon").AOfferHubItemStatusIcon);
exports.StatusIconWorldCup = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleWorldCupDialog = require("gge-module:export_CastleWorldCupDialog");
var __dep_export_ACastleStatusIcon = require("gge-module:export_ACastleStatusIcon");

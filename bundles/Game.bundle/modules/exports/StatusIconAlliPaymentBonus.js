Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function StatusIconAlliPaymentBonus() {
    var __s3local0 = __s1param0.call(this, "Btn_AlliPaymentBonus", new __dep_exact_92d05af59ee2ff30.TextVO(""), __dep_export_AOfferHubBaseStatusIcon.AOfferHubBaseStatusIcon.PRIORITY_ALLIANCE_PRIME_TIME) || this;
    __s3local0.setTooltip("dialog_specialOffer_HappyHourTooltip");
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconAlliPaymentBonus, __s1param0);
  StatusIconAlliPaymentBonus.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onEventRefresh));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemove));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
  };
  StatusIconAlliPaymentBonus.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onEventRefresh));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemove));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
  };
  StatusIconAlliPaymentBonus.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconAlliPaymentBonus.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconAlliPaymentBonus.prototype.onClick = function () {
    if (this.isOutOfTutorial()) {
      __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_EVENT_DIALOG_COMMAND, this.alliPaymentBonusEventVO);
    }
  };
  StatusIconAlliPaymentBonus.prototype.setVisibilityLoaded = function () {
    if (this.alliPaymentBonusEventVO && __dep_export_CastleModel.CastleModel.userData.isInAlliance && !__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive && !__dep_export_CastleModel.CastleModel.privateOfferData.isHiddenEvent(this.alliPaymentBonusEventVO.eventId)) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconAlliPaymentBonus.prototype.onTimerUpdate = function (__s20param0 = null) {
    if (this.alliPaymentBonusEventVO) {
      this.itxt_label.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.alliPaymentBonusEventVO.remainingEventTimeInSeconds);
    }
  };
  StatusIconAlliPaymentBonus.prototype.onEventRefresh = function (__s23param0) {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s23param0.specialEventVO, "AlliPaymentBonusEventVO")) {
      this.setVisibility();
    }
  };
  StatusIconAlliPaymentBonus.prototype.onEventRemove = function (__s26param0) {
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s26param0.specialEventVO, "AlliPaymentBonusEventVO")) {
      this.hide();
    }
  };
  StatusIconAlliPaymentBonus.prototype.onAllianceStatusChanged = function (__s29param0) {
    this.setVisibility();
  };
  Object.defineProperty(StatusIconAlliPaymentBonus.prototype, "alliPaymentBonusEventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIPAYMENT);
    },
    enumerable: true,
    configurable: true
  });
  StatusIconAlliPaymentBonus.prototype.showLoaded = function (__s33param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s33param0);
    this.onTimerUpdate();
  };
  return StatusIconAlliPaymentBonus;
}(require("gge-module:export_AOfferHubItemStatusIcon").AOfferHubItemStatusIcon);
exports.StatusIconAlliPaymentBonus = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_AOfferHubBaseStatusIcon = require("gge-module:export_AOfferHubBaseStatusIcon");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");

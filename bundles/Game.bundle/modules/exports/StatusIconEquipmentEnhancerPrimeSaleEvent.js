Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function StatusIconEquipmentEnhancerPrimeSaleEvent() {
    var __s3local0 = __s1param0.call(this, "Btn_EquipmentEnhancerPrimeSale", null, __dep_export_AOfferHubBaseStatusIcon.AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_TECHNICUS) || this;
    __s3local0.setTooltip("dialog_primeday_primesale_enchanterHudIcon_tooltip");
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconEquipmentEnhancerPrimeSaleEvent, __s1param0);
  StatusIconEquipmentEnhancerPrimeSaleEvent.prototype.setVisibilityLoaded = function () {
    this._equipmentEnhancerprimeSaleEventVO = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_PRIME_SALES_TECHNICUS);
    if (this._equipmentEnhancerprimeSaleEventVO && __dep_export_CastleModel.CastleModel.userData.userLevel >= this._equipmentEnhancerprimeSaleEventVO.minLevel && !__dep_export_CastleModel.CastleModel.privateOfferData.isHiddenEvent(this._equipmentEnhancerprimeSaleEventVO.eventId) && __dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ENCHANTER)) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconEquipmentEnhancerPrimeSaleEvent.prototype.onClick = function () {
    if (!__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive && this._equipmentEnhancerprimeSaleEventVO) {
      this._equipmentEnhancerprimeSaleEventVO.openDialog();
    }
  };
  StatusIconEquipmentEnhancerPrimeSaleEvent.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateStatusIcon));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconEquipmentEnhancerPrimeSaleEvent.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateStatusIcon));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconEquipmentEnhancerPrimeSaleEvent.prototype.onTimerUpdate = function (__s16param0 = null) {
    if (this.icon && this._equipmentEnhancerprimeSaleEventVO) {
      var __s16local0 = this._equipmentEnhancerprimeSaleEventVO ? __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this._equipmentEnhancerprimeSaleEventVO.remainingEventTimeInSeconds) : "-";
      this.itxt_label.textContentVO.stringValue = __s16local0;
    }
    this.updateCache();
  };
  StatusIconEquipmentEnhancerPrimeSaleEvent.prototype.updateStatusIcon = function (__s19param0) {
    this.setVisibility();
  };
  StatusIconEquipmentEnhancerPrimeSaleEvent.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconEquipmentEnhancerPrimeSaleEvent.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  return StatusIconEquipmentEnhancerPrimeSaleEvent;
}(require("gge-module:export_AOfferHubItemStatusIcon").AOfferHubItemStatusIcon);
exports.StatusIconEquipmentEnhancerPrimeSaleEvent = __s0local0;
var __dep_export_AOfferHubBaseStatusIcon = require("gge-module:export_AOfferHubBaseStatusIcon");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function StatusIconSeasonPassSale() {
    var __s3local0 = __s1param0.call(this, "Btn_EventPackagePrimeSales", null, __dep_export_AOfferHubBaseStatusIcon.AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_KL_SEASON_PASS) || this;
    __s3local0.setTooltip("dialog_primeday_primesale_kingdomsLeague_seasonPass_HudIcon_tooltip");
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconSeasonPassSale, __s1param0);
  StatusIconSeasonPassSale.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  StatusIconSeasonPassSale.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconSeasonPassSale.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconSeasonPassSale.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onEventsUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventsUpdated));
  };
  StatusIconSeasonPassSale.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onEventsUpdated));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventsUpdated));
  };
  StatusIconSeasonPassSale.prototype.setVisibilityLoaded = function () {
    if (__dep_export_CastleModel.CastleModel.specialEventData.isEventActive(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_PRIME_SALES_KINGDOM_LEAGUE_PASS)) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconSeasonPassSale.prototype.showLoaded = function (__s19param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s19param0);
    this.onTimerUpdate();
  };
  StatusIconSeasonPassSale.prototype.onClick = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastlePrimeSaleSeasonPassDialog.CastlePrimeSaleSeasonPassDialog);
  };
  StatusIconSeasonPassSale.prototype.onTimerUpdate = function (__s23param0 = null) {
    if (this.icon && this.icon.txt_label) {
      var __s23local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_PRIME_SALES_KINGDOM_LEAGUE_PASS);
      this.itxt_label.textContentVO.stringValue = __s23local0 ? __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s23local0.remainingEventTimeInSeconds) : "-";
    }
  };
  StatusIconSeasonPassSale.prototype.onEventsUpdated = function (__s26param0 = null) {
    this.setVisibility();
  };
  return StatusIconSeasonPassSale;
}(require("gge-module:export_AOfferHubItemStatusIcon").AOfferHubItemStatusIcon);
exports.StatusIconSeasonPassSale = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastlePrimeSaleSeasonPassDialog = require("gge-module:export_CastlePrimeSaleSeasonPassDialog");
var __dep_export_AOfferHubBaseStatusIcon = require("gge-module:export_AOfferHubBaseStatusIcon");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");

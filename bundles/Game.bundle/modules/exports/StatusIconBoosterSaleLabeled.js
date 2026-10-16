Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function StatusIconBoosterSaleLabeled() {
    var __s3local0 = __s1param0.call(this, "Btn_BoosterSale", null, __dep_export_AOfferHubBaseStatusIcon.AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_BOOSTER) || this;
    __s3local0.setTooltip("dialog_specialOfferDeco_title");
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconBoosterSaleLabeled, __s1param0);
  StatusIconBoosterSaleLabeled.prototype.onClick = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastlePrimeSaleBoosterDialog.CastlePrimeSaleBoosterDialog);
  };
  StatusIconBoosterSaleLabeled.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.onTimerUpdate();
  };
  StatusIconBoosterSaleLabeled.prototype.setVisibilityLoaded = function () {
    if (__dep_export_CastleModel.CastleModel.boosterSaleData.isAnyBoosterOnSale() && __dep_export_CastleModel.CastleModel.boosterSaleData.anyTimeLeft() > 0) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconBoosterSaleLabeled.prototype.onSaleUpdate = function (__s13param0) {
    this.setVisibilityLoaded();
  };
  StatusIconBoosterSaleLabeled.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.boosterSaleData.addEventListener(__dep_export_CastleBoosterSaleData.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onSaleUpdate));
  };
  StatusIconBoosterSaleLabeled.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.boosterSaleData.removeEventListener(__dep_export_CastleBoosterSaleData.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.onSaleUpdate));
  };
  StatusIconBoosterSaleLabeled.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconBoosterSaleLabeled.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconBoosterSaleLabeled.prototype.onTimerUpdate = function (__s23param0 = null) {
    var __s23local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.boosterSaleData.anyTimeLeft());
    if (__s23local0 < 0) {
      this.hide();
    } else {
      this.itxt_label.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s23local0);
    }
  };
  return StatusIconBoosterSaleLabeled;
}(require("gge-module:export_AOfferHubItemStatusIcon").AOfferHubItemStatusIcon);
exports.StatusIconBoosterSaleLabeled = __s0local0;
var __dep_export_CastleBoosterSaleData = require("gge-module:export_CastleBoosterSaleData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastlePrimeSaleBoosterDialog = require("gge-module:export_CastlePrimeSaleBoosterDialog");
var __dep_export_AOfferHubBaseStatusIcon = require("gge-module:export_AOfferHubBaseStatusIcon");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");

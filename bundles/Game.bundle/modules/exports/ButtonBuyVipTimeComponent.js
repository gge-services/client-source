Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleVIPBuyPointsTimeDialogProperties = require("gge-module:export_CastleVIPBuyPointsTimeDialogProperties");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __s0local0 = function (__s1param0) {
  function ButtonBuyVipTimeComponent(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.textBtnLabel = __s3local0.textFieldManager.registerTextField(__s3param1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    __s3local0.textBtnLabel.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    __s3local0._button.mouseChildren = false;
    __s3local0.onShow();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ButtonBuyVipTimeComponent, __s1param0);
  ButtonBuyVipTimeComponent.prototype.onShow = function () {
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    this.init();
  };
  ButtonBuyVipTimeComponent.prototype.onHide = function () {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  ButtonBuyVipTimeComponent.prototype.onTimerUpdate = function (__s9param0) {
    this.init();
  };
  ButtonBuyVipTimeComponent.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._button, true);
    this.setTextValues();
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this._button, this.buttonEnable());
  };
  ButtonBuyVipTimeComponent.prototype.setTextValues = function () {
    if (this.textBtnLabel) {
      if (__dep_export_CastleModel.CastleModel.vipData.vipModeActive) {
        this.textBtnLabel.textContentVO.textId = "dialog_VipScreen_continueVIP_tooltip_v2";
      } else {
        this.textBtnLabel.textContentVO.textId = "dialog_VipScreen_activateVIP_tooltip_v2";
      }
    }
    this._button.disp.toolTipText = this.buttonEnable() ? "" : "dialog_buyVipTime_maxAmountTotal";
  };
  ButtonBuyVipTimeComponent.prototype.onClickButton = function () {
    if (this.buttonEnable()) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleVIPBuyPointsTimeDialog.CastleVIPBuyPointsTimeDialog, new __dep_export_CastleVIPBuyPointsTimeDialogProperties.CastleVIPBuyPointsTimeDialogProperties(__dep_export_CollectableEnum.CollectableEnum.VIP_TIME));
    }
  };
  ButtonBuyVipTimeComponent.prototype.buttonEnable = function () {
    return __dep_export_CastleModel.CastleModel.vipData.remainingVIPTimeInSeconds + __dep_export_CastleModel.CastleModel.vipData.minBuyableVipTime <= __dep_export_ClientConstTime.ClientConstTime.SECONDS_PER_DAY * __dep_export_CastleVIPData.CastleVIPData.MAX_VIPTIME_DAYS;
  };
  ButtonBuyVipTimeComponent.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  return ButtonBuyVipTimeComponent;
}(require("gge-module:export_ButtonBasicComponent").ButtonBasicComponent);
exports.ButtonBuyVipTimeComponent = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleVIPData = require("gge-module:export_CastleVIPData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleVIPBuyPointsTimeDialog = require("gge-module:export_CastleVIPBuyPointsTimeDialog");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");

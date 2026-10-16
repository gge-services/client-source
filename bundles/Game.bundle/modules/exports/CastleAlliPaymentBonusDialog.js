Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleOpenShopExecutor = require("gge-module:export_CastleOpenShopExecutor");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Event;
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CXFSourceTrackingConstants = require("gge-module:export_CXFSourceTrackingConstants");
var __s0local1 = function (__s1param0) {
  function CastleAlliPaymentBonusDialog() {
    return __s1param0.call(this, CastleAlliPaymentBonusDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAlliPaymentBonusDialog, __s1param0);
  CastleAlliPaymentBonusDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_shop]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliancePT_title")).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliancePT_copy1"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_shop.txt_shop, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("add_Gold"));
    this.dialogDisp.btn_shop.toolTipText = "add_Gold";
    this.itxt_percent = this.textFieldManager.registerTextField(this.dialogDisp.txt_percent, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PERCENTAGE_ADD));
    this.itxt_copy3 = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy3, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliancePT_copy3"));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
  };
  CastleAlliPaymentBonusDialog.prototype.setCopyTexts = function () {
    if (this.eventVO) {
      this.itxt_percent.textContentVO.textReplacements = [this.eventVO.primeFactorInPercent];
      this.itxt_copy3.textContentVO.textReplacements = [CastleAlliPaymentBonusDialog.EXAMPLE_GOLD, this.eventVO.primeFactorInPercent * 0.01 * CastleAlliPaymentBonusDialog.EXAMPLE_GOLD];
    } else {
      this.hide();
    }
  };
  CastleAlliPaymentBonusDialog.prototype.showLoaded = function (__s11param0 = null) {
    if (this.eventVO) {
      __s1param0.prototype.showLoaded.call(this);
      this.onUpdateEventTime(new __s0local0("", false, false));
    } else {
      this.hide();
    }
  };
  CastleAlliPaymentBonusDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onPrimeAlliBonusEnd));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
  };
  CastleAlliPaymentBonusDialog.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onPrimeAlliBonusEnd));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    __s1param0.prototype.removeEventListenerOnHide.call(this);
  };
  CastleAlliPaymentBonusDialog.prototype.onPrimeAlliBonusEnd = function (__s19param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s19param0.specialEventVO, "AlliPaymentBonusEventVO")) {
      this.hide();
    }
  };
  CastleAlliPaymentBonusDialog.prototype.onUpdateEventTime = function (__s22param0) {
    this.itxt_time.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.eventVO.remainingEventTimeInSeconds);
  };
  Object.defineProperty(CastleAlliPaymentBonusDialog.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIPAYMENT);
    },
    enumerable: true,
    configurable: true
  });
  CastleAlliPaymentBonusDialog.prototype.onClick = function (__s26param0) {
    __s1param0.prototype.onClick.call(this, __s26param0);
    if (__s26param0.target == this.dialogDisp.btn_ok) {
      this.hide();
    } else if (__s26param0.target == this.dialogDisp.btn_shop) {
      __dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.open(__dep_export_CastleOpenShopExecutor.CastleOpenShopExecutor.SOURCE_ALLIANCE_PAYMENT_BONUS, __dep_export_CXFSourceTrackingConstants.CXFSourceTrackingConstants.SOURCE_ALLIANCE_PAYMENT_BONUS);
      this.hide();
    }
  };
  CastleAlliPaymentBonusDialog.__initialize_static_members = function () {
    CastleAlliPaymentBonusDialog.NAME = "CastleAlliPaymentBonusExternal";
    CastleAlliPaymentBonusDialog.EXAMPLE_GOLD = 50000;
  };
  return CastleAlliPaymentBonusDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleAlliPaymentBonusDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();

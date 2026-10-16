Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = function (__s1param0) {
  function CastlePrimeAlliBonusDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastlePrimeAlliBonusDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePrimeAlliBonusDialog, __s1param0);
  CastlePrimeAlliBonusDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_showMe]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliancePA_title")).verticalAlign = __dep_exact_9e901e8e2483a22f_1.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliancePA_copy1"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_showMe.txt_showMe, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_questInfo_showMe"));
    this.itxt_percent = this.textFieldManager.registerTextField(this.dialogDisp.txt_percent, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PERCENTAGE_ADD));
    this.itxt_copy3 = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy3, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliancePA_copy3"));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.dialogDisp.btn_showMe.toolTipText = "dialog_questInfo_showMe";
  };
  CastlePrimeAlliBonusDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    this.setCopyTexts();
  };
  CastlePrimeAlliBonusDialog.prototype.setCopyTexts = function () {
    if (this.eventVO) {
      this.itxt_percent.textContentVO.textReplacements = [this.eventVO.primeFactorInPercent];
      this.itxt_copy3.textContentVO.textReplacements = [CastlePrimeAlliBonusDialog.EXAMPLE_GOLD, (1 + this.eventVO.primeFactorInPercent * 0.01) * CastlePrimeAlliBonusDialog.EXAMPLE_GOLD];
    } else {
      this.hide();
    }
  };
  CastlePrimeAlliBonusDialog.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onPrimeAlliBonusEnd));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
  };
  CastlePrimeAlliBonusDialog.prototype.addEventListenerOnShow = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onPrimeAlliBonusEnd));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
  };
  CastlePrimeAlliBonusDialog.prototype.onPrimeAlliBonusEnd = function (__s17param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s17param0.specialEventVO, "PrimeAlliBonusEventVO")) {
      this.hide();
    }
  };
  CastlePrimeAlliBonusDialog.prototype.onUpdateEventTime = function (__s20param0) {
    this.itxt_time.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.eventVO.remainingEventTimeInSeconds);
  };
  Object.defineProperty(CastlePrimeAlliBonusDialog.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIPRIME);
    },
    enumerable: true,
    configurable: true
  });
  CastlePrimeAlliBonusDialog.prototype.onClick = function (__s24param0) {
    __s1param0.prototype.onClick.call(this, __s24param0);
    if (__s24param0.target == this.dialogDisp.btn_ok) {
      this.hide();
    } else if (__s24param0.target == this.dialogDisp.btn_showMe) {
      __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleAllianceDonateDialog.CastleAllianceDonateDialog, null, true, __dep_exact_9e901e8e2483a22f.BasicDialogHandler.PRIORITY_MIDDLE);
      this.hide();
    }
  };
  CastlePrimeAlliBonusDialog.__initialize_static_members = function () {
    CastlePrimeAlliBonusDialog.NAME = "CastlePrimeAlliBonusExternal";
    CastlePrimeAlliBonusDialog.EXAMPLE_GOLD = 2500;
  };
  return CastlePrimeAlliBonusDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastlePrimeAlliBonusDialog = __s0local0;
var __dep_export_CastleAllianceDonateDialog = require("gge-module:export_CastleAllianceDonateDialog");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();

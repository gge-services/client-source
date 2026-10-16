Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_TimeSelectionComponent = require("gge-module:export_TimeSelectionComponent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleMovementSetTimeDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleMovementSetTimeDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMovementSetTimeDialog, __s1param0);
  CastleMovementSetTimeDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.timeSelector = new __dep_export_TimeSelectionComponent.TimeSelectionComponent(this.dialogDisp, "dialog_slowArmy_time_minTime_tooltip", "dialog_slowArmy_time_maxTime_tooltip", this.bindFunction(this.onTimeChanged));
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok, this.dialogDisp.btn_help, this.dialogDisp.btn_maxTime, this.dialogDisp.btn_reset]);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.mc_cost.toolTipText = "gold";
    this.dialogDisp.mc_cost.mouseChildren = false;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_slowArmy_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_slowArmy_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_timeTitle, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_slowArmy_arrivalTime"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_dateTitle, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_slowArmy_arrivalDate"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_hoursTitle, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_slowArmy_hours"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_minutesTitle, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_slowArmy_minutes"));
    this.txt_arrival = this.textFieldManager.registerTextField(this.dialogDisp.txt_arrival, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_slowArmy_arrival"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_reset.txt_value, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_slowArmy_reset")).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_maxTime.txt_value, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_slowArmy_maxDelay"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_costTitle, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("cost"));
    this.txt_cost = this.textFieldManager.registerTextField(this.dialogDisp.mc_cost.txt_cost, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(0));
  };
  CastleMovementSetTimeDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.timeSelector.show(this.dialogProperties.preselectedTime, this.dialogProperties.minDelayInSeconds, this.dialogProperties.maxDelayInSeconds);
  };
  CastleMovementSetTimeDialog.prototype.hideLoaded = function (__s9param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s9param0);
    this.timeSelector.hide();
  };
  CastleMovementSetTimeDialog.prototype.onTimeChanged = function () {
    var __s11local0 = new Date();
    __s11local0.setTime(this.timeSelector.selectedTime);
    this.txt_arrival.textContentVO.textReplacements = [__dep_exact_92d05af59ee2ff30_1.Localize.datetime(__s11local0, __dep_exact_92d05af59ee2ff30.DateTimeStyle.SHORT, __dep_exact_92d05af59ee2ff30.DateTimeStyle.NONE), __dep_exact_92d05af59ee2ff30_1.Localize.datetime(__s11local0, __dep_exact_92d05af59ee2ff30.DateTimeStyle.NONE, __dep_exact_92d05af59ee2ff30.DateTimeStyle.SHORT)];
    var __s11local1 = __s11local0.getTime() - this.minimumTime >= __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    var __s11local2 = __dep_exact_f855840627e6e145.int(__s11local1 ? __dep_exact_26a421b704832cff.TravelConst.SLOWDOWN_C2_COSTS : 0);
    this.txt_cost.textContentVO.numberValue = __s11local2;
    var __s11local3 = __dep_export_CastleModel.CastleModel.currencyData.c2Amount >= __s11local2;
    this.txt_cost.color = __s11local3 ? __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_maxTime, this.timeSelector.canIncreaseTime());
  };
  CastleMovementSetTimeDialog.prototype.onClick = function (__s13param0) {
    __s1param0.prototype.onClick.call(this, __s13param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s13param0.target)) {
      switch (__s13param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.acceptCurrentEditTime();
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30_1.Localize.text("help_slowArmy"));
          break;
        case this.dialogDisp.btn_maxTime:
          this.timeSelector.reset(this.maximumTime);
          break;
        case this.dialogDisp.btn_reset:
          this.timeSelector.reset(this.minimumTime);
      }
    }
  };
  Object.defineProperty(CastleMovementSetTimeDialog.prototype, "maximumTime", {
    get: function () {
      return new Date().getTime() + this.dialogProperties.maxDelayInSeconds * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMovementSetTimeDialog.prototype, "minimumTime", {
    get: function () {
      return new Date().getTime() + this.dialogProperties.minDelayInSeconds * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
    },
    enumerable: true,
    configurable: true
  });
  CastleMovementSetTimeDialog.prototype.acceptCurrentEditTime = function () {
    if (this.dialogProperties.timeWasSetCallback) {
      this.dialogProperties.timeWasSetCallback(this.timeSelector.selectedTime);
    }
  };
  Object.defineProperty(CastleMovementSetTimeDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleMovementSetTimeDialog.__initialize_static_members = function () {
    CastleMovementSetTimeDialog.NAME = "CastleMovementSetTime";
  };
  return CastleMovementSetTimeDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleMovementSetTimeDialog = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleLuckyWheelCheckboxWrapper = require("gge-module:export_CastleLuckyWheelCheckboxWrapper");
var __dep_export_CastleLuckyWheelSpinButton = require("gge-module:export_CastleLuckyWheelSpinButton");
var __s0local0 = function () {
  function CastleLuckyWheelSpinComponent(__s3param0, __s3param1) {
    this._eventID = 0;
    this.disp = __s3param0;
    this._eventID = __s3param1;
    this._spinButton = new __dep_export_CastleLuckyWheelSpinButton.CastleLuckyWheelSpinButton(__s3param0.btn_spin, __s3param1);
    this._autoPlayButton = new __dep_export_CastleLuckyWheelCheckboxWrapper.CastleLuckyWheelCheckboxWrapper(__s3param0.checkbox_autospin, "mc_box", "dialog_luckyWheel_fastSpinBox_checked", "dialog_luckyWheel_fastStopBox_empty");
    __s3param0.checkbox_autospin.mc_spin.mouseChildren = false;
    __s3param0.checkbox_autospin.mc_spin.toolTipText = "dialog_luckyWheel_fastSpinIcon";
    __s3param0.box_ticketCount.toolTipText = "tooltip_tickets";
    __s3param0.box_ticketCount.mouseChildren = false;
  }
  CastleLuckyWheelSpinComponent.prototype.updateTicketCount = function (__s5param0) {
    var __s5local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this._eventID);
    if (__s5local0) {
      if (this._itxt_TicketCount) {
        this._itxt_TicketCount.textContentVO.textReplacements = [__s5param0];
      } else {
        this._itxt_TicketCount = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.box_ticketCount.txt_amt, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("generic_amount_times", [__s5param0]));
      }
      if (__s5param0 > __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__s5local0.currencyID)) {
        this._itxt_TicketCount.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_RED;
      } else {
        this._itxt_TicketCount.color = __dep_export_ClientConstColor.ClientConstColor.GENERIC_BLACK;
      }
    }
  };
  Object.defineProperty(CastleLuckyWheelSpinComponent.prototype, "spinButton", {
    get: function () {
      return this._spinButton;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelSpinComponent.prototype, "isAutoSpin", {
    get: function () {
      return this._autoPlayButton.isEnabled;
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyWheelSpinComponent.prototype.addEventListenerOnShow = function () {
    this._autoPlayButton.addEventListenerOnShow();
  };
  CastleLuckyWheelSpinComponent.prototype.removeEventListenersOnHide = function () {
    this._autoPlayButton.removeEventListenersOnHide();
  };
  return CastleLuckyWheelSpinComponent;
}();
exports.CastleLuckyWheelSpinComponent = __s0local0;

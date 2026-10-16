Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function CastleLuckyWheelSpinButton(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0, true) || this;
    __s3local0._allStates = [CastleLuckyWheelSpinButton.STATE_FREE_SPIN, CastleLuckyWheelSpinButton.STATE_START_SPIN, CastleLuckyWheelSpinButton.STATE_STOP_SPIN, CastleLuckyWheelSpinButton.STATE_NOT_ENOUGH_TICKETS];
    __s3local0._currentState = 0;
    __s3local0._autoSpinEnabled = false;
    __s3local0._textIDs = ["dialog_luckyWheel_freeSpin", "dialog_luckyWheel_spin", "dialog_luckyWheel_stop", "dialog_luckyWheel_buyTickets"];
    __s3local0._eventID = 0;
    __s3local0._eventID = __s3param1;
    if (__s3local0._eventID == __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_LUCKYWHEEL_SD) {
      __s3local0._textIDs = ["dialog_luckyWheel_freeSpin", "dialog_luckyWheel_spin", "dialog_luckyWheel_stop", "dialog_luckyWheel_spin"];
    }
    if (__s3local0._eventID = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_LUCKYWHEEL_SD)) {
      __s3local0._textIDs = ["dialog_luckyWheel_freeSpin", "dialog_luckyWheel_spin", "dialog_luckyWheel_stop", "dialog_luckyWheel_spin"];
    }
    __s3param0.changeTextFieldCacheScale(2);
    __s3local0._tfLabel = __s3param0.tf_label;
    __s3local0._tfLabel.mouseEnabled = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLuckyWheelSpinButton, __s1param0);
  Object.defineProperty(CastleLuckyWheelSpinButton.prototype, "state", {
    get: function () {
      return this._currentState;
    },
    set: function (__s9param0) {
      if (this._allStates.indexOf(__s9param0) != -1) {
        this._currentState = __s9param0;
        __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this._tfLabel, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this._textIDs[this._currentState]));
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyWheelSpinButton.STATE_FREE_SPIN = 0;
  CastleLuckyWheelSpinButton.STATE_START_SPIN = 1;
  CastleLuckyWheelSpinButton.STATE_STOP_SPIN = 2;
  CastleLuckyWheelSpinButton.STATE_NOT_ENOUGH_TICKETS = 3;
  return CastleLuckyWheelSpinButton;
}(require("gge-module:export_ClickFeedbackButton").ClickFeedbackButton);
exports.CastleLuckyWheelSpinButton = __s0local0;

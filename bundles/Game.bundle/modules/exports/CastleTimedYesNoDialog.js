Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerComponentEvent = require("gge-module:export_CastleTimerComponentEvent");
var __dep_export_CastleTimerComponent = require("gge-module:export_CastleTimerComponent");
var __s0local0 = function (__s1param0) {
  function CastleTimedYesNoDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleTimedYesNoDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTimedYesNoDialog, __s1param0);
  CastleTimedYesNoDialog.prototype.initLoaded = function (__s5param0 = null) {
    this.timerField ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_timer, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s1param0.prototype.initLoaded.call(this, __s5param0);
  };
  CastleTimedYesNoDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s7param0);
    this.timer = new __dep_export_CastleTimerComponent.CastleTimerComponent(this.timerField, this.bindFunction(this.getTimeString), this.timedDialogProperties.remainingTimeInSeconds);
    this.timer.addEventListener(__dep_export_CastleTimerComponentEvent.CastleTimerComponentEvent.TIMER_EXPIRED, this.bindFunction(this.onTimerExpired));
  };
  CastleTimedYesNoDialog.prototype.getTimeString = function (__s9param0) {
    return __dep_exact_92d05af59ee2ff30.Localize.text(this.timedDialogProperties.timerTextID, [__dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeStringBySeconds(__s9param0, __dep_exact_9e901e8e2483a22f.TimeStringHelper.HOURS_MINUTES_SECONDS_FORMAT)]);
  };
  CastleTimedYesNoDialog.prototype.onTimerExpired = function (__s11param0) {
    this.hide();
  };
  CastleTimedYesNoDialog.prototype.hideLoaded = function (__s13param0 = null) {
    if (!this.timer.isExpired()) {
      this.timer.stop();
    }
    __s1param0.prototype.hideLoaded.call(this, __s13param0);
  };
  Object.defineProperty(CastleTimedYesNoDialog.prototype, "timedDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTimedYesNoDialog.__initialize_static_members = function () {
    CastleTimedYesNoDialog.NAME = "CastleTimedYesNoEx";
  };
  return CastleTimedYesNoDialog;
}(require("gge-module:export_CastleLargeYesNoDialog").CastleLargeYesNoDialog);
exports.CastleTimedYesNoDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();

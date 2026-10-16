Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __s0local0 = function (__s1param0) {
  function CastleBasicSpecialEventTeaserDialog(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBasicSpecialEventTeaserDialog, __s1param0);
  CastleBasicSpecialEventTeaserDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_exit, this.dialogDisp.btn_ok]);
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    this.itxt_time.textAlign = __dep_exact_9e901e8e2483a22f.GGSTextAlign.LEFT;
  };
  CastleBasicSpecialEventTeaserDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyProperties.call(this);
    this.setText();
    this.onUpdateEventTime(null);
  };
  CastleBasicSpecialEventTeaserDialog.prototype.setText = function () {};
  CastleBasicSpecialEventTeaserDialog.prototype.showLoaded = function (__s11param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s11param0);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
  };
  CastleBasicSpecialEventTeaserDialog.prototype.hideLoaded = function (__s13param0 = null) {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    __s1param0.prototype.hideLoaded.call(this);
  };
  CastleBasicSpecialEventTeaserDialog.prototype.onUpdateEventTime = function (__s15param0) {
    var __s15local0 = this.getEventVO();
    var __s15local1 = 0;
    if (__s15local0 && this.itxt_time.textContentVO) {
      __s15local1 = __s15local0.remainingEventTimeInSeconds;
    }
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_time.txt_time, __s15local1);
    __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_time, __s15local1);
    if (__s15local1 <= 0) {
      this.hide();
    }
  };
  CastleBasicSpecialEventTeaserDialog.prototype.onClick = function (__s19param0) {
    __s1param0.prototype.onClick.call(this, __s19param0);
    switch (__s19param0.target) {
      case this.dialogDisp.btn_ok:
      case this.dialogDisp.btn_exit:
        this.hide();
    }
  };
  CastleBasicSpecialEventTeaserDialog.prototype.getEventVO = function () {
    return null;
  };
  return CastleBasicSpecialEventTeaserDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleBasicSpecialEventTeaserDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");

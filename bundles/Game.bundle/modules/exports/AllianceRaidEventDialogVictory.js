Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __s0local0 = function (__s1param0) {
  function AllianceRaidEventDialogVictory(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceRaidEventDialogVictory, __s1param0);
  AllianceRaidEventDialogVictory.prototype.init = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_timer.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("remainingTime"));
    this._itxt_title = this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_are_popup_finalbossdefeated_title"));
    this._itxt_description = this.textFieldManager.registerTextField(this.subLayerDisp.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_are_popup_finalbossdefeated_desc"));
    this._itxt_timer = this.textFieldManager.registerTextField(this.subLayerDisp.mc_timer.txt_remainingTime, new __dep_exact_92d05af59ee2ff30.TextVO(""));
  };
  AllianceRaidEventDialogVictory.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  AllianceRaidEventDialogVictory.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  AllianceRaidEventDialogVictory.prototype.onTimerUpdate = function (__s11param0 = null) {
    this._itxt_timer.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(this.eventVO.remainingEventTimeInSeconds);
  };
  AllianceRaidEventDialogVictory.prototype.updatePosition = function (__s13param0, __s13param1) {
    __s1param0.prototype.updatePosition.call(this, __s13param0, __s13param1);
    this._itxt_description.y = __s13param1 / 2 - 4;
    this._itxt_description.width = __s13param0 - this._itxt_description.x * 2;
    this._itxt_title.y = this._itxt_description.y - this._itxt_title.height - 7;
    this._itxt_title.width = __s13param0 - this._itxt_title.x * 2;
    this.subLayerDisp.mc_timer.x = __s13param0 / 2;
    this.subLayerDisp.mc_timer.y = this._itxt_description.y + this._itxt_description.height + 15;
  };
  return AllianceRaidEventDialogVictory;
}(require("gge-module:export_AllianceRaidEventDialogSublayer").AllianceRaidEventDialogSublayer);
exports.AllianceRaidEventDialogVictory = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");

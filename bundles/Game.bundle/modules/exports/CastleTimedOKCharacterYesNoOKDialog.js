Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleCharacterYesNoOKDialog = require("gge-module:export_CastleCharacterYesNoOKDialog");
var __s0local0 = createjs.TimerEvent;
var __s0local1 = function (__s1param0) {
  function CastleTimedOKCharacterYesNoOKDialog() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTimedOKCharacterYesNoOKDialog, __s1param0);
  CastleTimedOKCharacterYesNoOKDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    if (this.timedOKCharacterYesNOOKDialogProperties.disableOkButtonForSeconds > 0) {
      this.dialogDisp.btn_yes.enableButton = false;
      this._enableTimer = new __dep_exact_81dacdf05bd32292.Timer(this.timedOKCharacterYesNOOKDialogProperties.disableOkButtonForSeconds * 1000);
      this._enableTimer.addEventListener(__s0local0.TIMER, this.bindFunction(this.onEnableTimerComplete));
      this._enableTimer.start();
    }
  };
  CastleTimedOKCharacterYesNoOKDialog.prototype.hideLoaded = function (__s8param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s8param0);
    if (this._enableTimer) {
      this._enableTimer.stop();
      this._enableTimer.removeEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onEnableTimerComplete));
    }
  };
  CastleTimedOKCharacterYesNoOKDialog.prototype.onClick = function (__s11param0) {
    if (__s11param0.target != this.dialogDisp.btn_yes || this.dialogDisp.btn_yes.enabled) {
      __s1param0.prototype.onClick.call(this, __s11param0);
    }
  };
  CastleTimedOKCharacterYesNoOKDialog.prototype.onEnableTimerComplete = function (__s14param0) {
    this._enableTimer.stop();
    this.dialogDisp.btn_yes.enableButton = true;
  };
  Object.defineProperty(CastleTimedOKCharacterYesNoOKDialog.prototype, "timedOKCharacterYesNOOKDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTimedOKCharacterYesNoOKDialog;
}(__dep_export_CastleCharacterYesNoOKDialog.CastleCharacterYesNoOKDialog);
exports.CastleTimedOKCharacterYesNoOKDialog = __s0local1;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList");

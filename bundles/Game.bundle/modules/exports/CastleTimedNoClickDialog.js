Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialog = require("gge-module:export_CastleDialog");
var __s0local0 = createjs.TimerEvent;
var __s0local1 = function (__s1param0) {
  function CastleTimedNoClickDialog() {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, new (__dep_exact_81dacdf05bd32292.getDefinitionByName("CastleTimedNoClick"))()) || this).itxt_title = __s3local0.textFieldManager.registerTextField(__s3local0.timedNoClickDialog.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __s3local0.itxt_copy = __s3local0.textFieldManager.registerTextField(__s3local0.timedNoClickDialog.txt_copy, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __s3local0.itxt_copy.autoFitToBounds = true;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTimedNoClickDialog, __s1param0);
  CastleTimedNoClickDialog.prototype.applyProperties = function () {
    this.itxt_title.textContentVO.stringValue = this.dialogProperties.title;
    this.itxt_copy.textContentVO.stringValue = this.dialogProperties.copy;
    this.startCountdown();
  };
  CastleTimedNoClickDialog.prototype.hide = function () {
    __dep_export_CastleModel.CastleModel.userData.blockDialogs = false;
    this.stopCountdown();
    __s1param0.prototype.hide.call(this);
  };
  CastleTimedNoClickDialog.prototype.startCountdown = function () {
    if (this.dialogProperties.remainingTimeInSeconds > 0 && this.dialogProperties.remainingTimeInSeconds < __dep_export_ClientConstTime.ClientConstTime.SECONDS_PER_DAY) {
      this._timer = new __dep_exact_81dacdf05bd32292_1.Timer(this.dialogProperties.remainingTimeInSeconds * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC, 1);
      this._timer.addEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onTimerComplete));
      this._timer.start();
    }
  };
  CastleTimedNoClickDialog.prototype.onTimerComplete = function (__s12param0) {
    this.hide();
  };
  CastleTimedNoClickDialog.prototype.stopCountdown = function () {
    if (this._timer) {
      this._timer.stop();
      this._timer.removeEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onTimerComplete));
      this._timer = null;
    }
  };
  Object.defineProperty(CastleTimedNoClickDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTimedNoClickDialog.prototype, "timedNoClickDialog", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleTimedNoClickDialog.NAME = "CastleTimedNoClick";
  return CastleTimedNoClickDialog;
}(__dep_export_CastleDialog.CastleDialog);
exports.CastleTimedNoClickDialog = __s0local1;
__dep_exact_81dacdf05bd32292_2.classImplementsInterfaces(__s0local1, "ICollectableRendererList");

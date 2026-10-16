Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleTimerComponentEvent = require("gge-module:export_CastleTimerComponentEvent");
var __dep_export_CastleResourceBoosterEvent = require("gge-module:export_CastleResourceBoosterEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleTimerComponent = require("gge-module:export_CastleTimerComponent");
var __s0local0 = function (__s1param0) {
  function ACastlePointBoosterDialog(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACastlePointBoosterDialog, __s1param0);
  ACastlePointBoosterDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close]);
    this._itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.titleText));
    this._itxt_copy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.descriptionText));
    this._itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this._itxt_time.mouseEnabled = false;
    this._itxt_bonus = this.textFieldManager.registerTextField(this.dialogDisp.mc_bonus.txt_bonus, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("value_percentage_add"));
    this._itxt_bonus.mouseEnabled = false;
    this.dialogDisp.mc_time.toolTipText = "resttime";
    this.remainingTimeComponent = new __dep_export_CastleTimerComponent.CastleTimerComponent(this._itxt_time, this.bindFunction(this.getTimerText));
  };
  ACastlePointBoosterDialog.prototype.getTimerText = function (__s7param0) {
    return __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s7param0);
  };
  ACastlePointBoosterDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    this.updateDialog();
  };
  ACastlePointBoosterDialog.prototype.updateDialog = function () {
    this.remainingTimeComponent.start(this.boosterVO.remainingTimeInSeconds);
    this.dialogDisp.mc_bonus.toolTipText = {
      t: this.bonusToolTipTextID(),
      p: [this.boosterVO.bonusPercentage]
    };
    this._itxt_copy.textContentVO.textReplacements = [this.boosterVO.bonusPercentage];
    this._itxt_bonus.textContentVO.textReplacements = [this.boosterVO.bonusPercentage];
  };
  ACastlePointBoosterDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this.remainingTimeComponent.addEventListener(__dep_export_CastleTimerComponentEvent.CastleTimerComponentEvent.TIMER_EXPIRED, this.bindFunction(this.onTimerExpired));
    __dep_export_CastleModel.CastleModel.boostData.addEventListener(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterChanged));
  };
  ACastlePointBoosterDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    this.remainingTimeComponent.removeEventListener(__dep_export_CastleTimerComponentEvent.CastleTimerComponentEvent.TIMER_EXPIRED, this.bindFunction(this.onTimerExpired));
    __dep_export_CastleModel.CastleModel.boostData.removeEventListener(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterChanged));
  };
  ACastlePointBoosterDialog.prototype.onBoosterChanged = function (__s17param0) {
    this.updateDialog();
  };
  ACastlePointBoosterDialog.prototype.onTimerExpired = function (__s19param0) {
    this.hide();
  };
  ACastlePointBoosterDialog.prototype.hideLoaded = function (__s21param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s21param0);
    this.remainingTimeComponent.stop();
  };
  ACastlePointBoosterDialog.prototype.onClick = function (__s23param0) {
    __s1param0.prototype.onClick.call(this, __s23param0);
    if (__s23param0.target == this.dialogDisp.btn_close) {
      this.hide();
    }
  };
  Object.defineProperty(ACastlePointBoosterDialog.prototype, "boosterVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.getBoosterByID(this.dialogProperties.boosterID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastlePointBoosterDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastlePointBoosterDialog.prototype, "titleText", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastlePointBoosterDialog.prototype, "descriptionText", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  ACastlePointBoosterDialog.prototype.bonusToolTipTextID = function () {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  return ACastlePointBoosterDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.ACastlePointBoosterDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");

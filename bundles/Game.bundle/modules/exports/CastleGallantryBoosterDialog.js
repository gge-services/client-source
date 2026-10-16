Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __s0local0 = function (__s1param0) {
  function CastleGallantryBoosterDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleGallantryBoosterDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleGallantryBoosterDialog, __s1param0);
  CastleGallantryBoosterDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_gallantryBooster_title")).autoFitToBounds = true;
    this.txt_message = this.textFieldManager.registerTextField(this.dialogDisp.txt_message, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_gallantryBooster_copy", [0]));
    this.txt_message.autoFitToBounds = true;
    this.txt_time = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.txt_boost = this.textFieldManager.registerTextField(this.dialogDisp.txt_boost, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
  };
  CastleGallantryBoosterDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.txt_message.textContentVO.textReplacements = [this.dialogProperties.boost];
    this.dialogDisp.mc_gallantry.toolTipText = {
      t: "dialog_gallantryBooster_boost_tt",
      p: [this.dialogProperties.boost]
    };
    this.dialogDisp.mc_time.toolTipText = "dialog_gallantryBooster_time_tt";
    this.txt_boost.textContentVO.textId = __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD;
    this.txt_boost.textContentVO.textReplacements = [this.dialogProperties.boost];
    this.onTimerUpdate();
  };
  CastleGallantryBoosterDialog.prototype.applyPropertiesLoaded = function (__s9param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s9param0);
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastleGallantryBoosterDialog.prototype.hideLoaded = function (__s11param0 = null) {
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    __s1param0.prototype.hideLoaded.call(this);
  };
  CastleGallantryBoosterDialog.prototype.onClick = function (__s13param0) {
    __s1param0.prototype.onClick.call(this, __s13param0);
    switch (__s13param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleGallantryBoosterDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleGallantryBoosterDialog.prototype.onTimerUpdate = function (__s18param0 = null) {
    var __s18local0 = this.dialogProperties.remainingDuration(__s18param0 ? __s18param0.nowValue : __dep_export_CachedTimer.CachedTimer.getCachedTimer());
    if (this.txt_time) {
      this.txt_time.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s18local0);
      this.txt_time.autoFitToBounds = true;
    }
    if (__s18local0 <= 0) {
      this.hide();
    }
  };
  CastleGallantryBoosterDialog.__initialize_static_members = function () {
    CastleGallantryBoosterDialog.NAME = "CastleGallantryBooster";
  };
  return CastleGallantryBoosterDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleGallantryBoosterDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();

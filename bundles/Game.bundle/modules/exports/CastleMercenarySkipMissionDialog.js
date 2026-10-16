Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SMercenaryPackageVO = require("gge-module:export_C2SMercenaryPackageVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleTimerComponentEvent = require("gge-module:export_CastleTimerComponentEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimerComponent = require("gge-module:export_CastleTimerComponent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleMercenarySkipMissionDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleMercenarySkipMissionDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMercenarySkipMissionDialog, __s1param0);
  CastleMercenarySkipMissionDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_cancel, this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_mission_running")).verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    this.dialogDisp.mc_c2.mouseChildren = false;
    this.dialogDisp.mc_c2.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.dialogDisp.mc_missionInfo.mc_progress.mc_bar.gotoAndStop(1);
    this.dialogDisp.mc_missionInfo.mc_progress.mouseChildren = false;
    this.dialogDisp.mc_missionInfo.mc_progress.toolTipText = "resttime";
    this.progressBar = new __dep_exact_84d43d9c404bd4d8.BasicProgressBar(this.dialogDisp.mc_missionInfo.mc_progress.mc_bar);
    this.timerTextField = this.textFieldManager.registerTextField(this.dialogDisp.mc_missionInfo.mc_progress.txt_progress, new __dep_exact_92d05af59ee2ff30_3.TextVO(""));
  };
  CastleMercenarySkipMissionDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s7param0);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_missionInfo.txt_missionType, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(this.dialogProperties.missionVO.getMissionTypeTextID()));
    this.timerComponent = new __dep_export_CastleTimerComponent.CastleTimerComponent(this.timerTextField, this.bindFunction(this.getRemainingTimeString), this.dialogProperties.missionVO.remainingTime);
    this.timerComponent.addEventListener(__dep_export_CastleTimerComponentEvent.CastleTimerComponentEvent.TIMER_EXPIRED, this.bindFunction(this.onTimerExpired));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateProgress));
    this.updateProgress(null);
  };
  CastleMercenarySkipMissionDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.dialogDisp.btn_ok, true);
  };
  CastleMercenarySkipMissionDialog.prototype.getRemainingTimeString = function (__s11param0) {
    return __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getTimeToString(this.dialogProperties.missionVO.remainingTime, __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text);
  };
  CastleMercenarySkipMissionDialog.prototype.updateProgress = function (__s13param0) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_mission_running_desc", [__dep_exact_92d05af59ee2ff30.Localize.integer(this.dialogProperties.missionVO.skipCost)]));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_c2.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(this.dialogProperties.missionVO.skipCost));
    this.progressBar.scaleX = this.dialogProperties.missionVO.missionProgress;
  };
  CastleMercenarySkipMissionDialog.prototype.onTimerExpired = function (__s15param0) {
    this.hide();
  };
  CastleMercenarySkipMissionDialog.prototype.onClick = function (__s17param0) {
    __s1param0.prototype.onClick.call(this, __s17param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s17param0.target)) {
      switch (__s17param0.target) {
        case this.dialogDisp.btn_cancel:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.confirmSkip();
      }
    }
  };
  CastleMercenarySkipMissionDialog.prototype.confirmSkip = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SMercenaryPackageVO.C2SMercenaryPackageVO(this.dialogProperties.missionVO.missionID));
    if (__dep_export_CastleModel.CastleModel.currencyData.c2Amount >= this.dialogProperties.missionVO.skipCost) {
      this.dialogProperties.confirmStartCallback();
    }
    this.hide();
  };
  CastleMercenarySkipMissionDialog.prototype.hideLoaded = function (__s24param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s24param0);
    this.timerComponent.stop();
    this.timerComponent.removeEventListener(__dep_export_CastleTimerComponentEvent.CastleTimerComponentEvent.TIMER_EXPIRED, this.bindFunction(this.onTimerExpired));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateProgress));
  };
  Object.defineProperty(CastleMercenarySkipMissionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleMercenarySkipMissionDialog.__initialize_static_members = function () {
    CastleMercenarySkipMissionDialog.NAME = "CastleMercenarySkipMission";
  };
  return CastleMercenarySkipMissionDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleMercenarySkipMissionDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();

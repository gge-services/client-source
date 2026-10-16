Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerComponentEvent = require("gge-module:export_CastleTimerComponentEvent");
var __dep_export_CastleResourceBoosterEvent = require("gge-module:export_CastleResourceBoosterEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleTimerComponent = require("gge-module:export_CastleTimerComponent");
var __s0local0 = function (__s1param0) {
  function AllianceCoinBoosterDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, AllianceCoinBoosterDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceCoinBoosterDialog, __s1param0);
  AllianceCoinBoosterDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.closeBtn]);
    this.textFieldManager.registerTextField(this.dialogDisp.titleTxt, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_royalCoinsBooster_title")).autoFitToBounds = true;
    this.txt_message = this.textFieldManager.registerTextField(this.dialogDisp.msgTxt, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_royalCoinsBooster_copy", [0]));
    this.txt_message.autoFitToBounds = true;
    this.txt_time = this.textFieldManager.registerTextField(this.dialogDisp.timeTxt, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.txt_time.mouseEnabled = false;
    this.txt_boost = this.textFieldManager.registerTextField(this.dialogDisp.boostTxt, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.remainingTimeComponent = new __dep_export_CastleTimerComponent.CastleTimerComponent(this.txt_time, this.bindFunction(this.getTimerText));
  };
  AllianceCoinBoosterDialog.prototype.getTimerText = function (__s7param0) {
    return __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s7param0);
  };
  AllianceCoinBoosterDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    this.txt_message.textContentVO.textReplacements = [this.boosterVO.bonusPercentage];
    this.dialogDisp.boostMC.toolTipText = {
      t: "dialog_royalCoinsBooster_boost_tt",
      p: [this.boosterVO.bonusPercentage]
    };
    this.dialogDisp.timeMC.toolTipText = "dialog_royalCoinsBooster_time_tt";
    this.txt_boost.textContentVO.textId = __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD;
    this.txt_boost.textContentVO.textReplacements = [this.boosterVO.bonusPercentage];
    this.updateDialog();
  };
  AllianceCoinBoosterDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this.remainingTimeComponent.addEventListener(__dep_export_CastleTimerComponentEvent.CastleTimerComponentEvent.TIMER_EXPIRED, this.bindFunction(this.onTimerExpired));
    __dep_export_CastleModel.CastleModel.boostData.addEventListener(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterChanged));
  };
  AllianceCoinBoosterDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    this.remainingTimeComponent.removeEventListener(__dep_export_CastleTimerComponentEvent.CastleTimerComponentEvent.TIMER_EXPIRED, this.bindFunction(this.onTimerExpired));
    __dep_export_CastleModel.CastleModel.boostData.removeEventListener(__dep_export_CastleResourceBoosterEvent.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterChanged));
  };
  AllianceCoinBoosterDialog.prototype.onBoosterChanged = function (__s15param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s15param0.boosterVO, "AllianceCoinBoosterShopVO")) {
      this.updateDialog();
    }
  };
  AllianceCoinBoosterDialog.prototype.onTimerExpired = function (__s18param0) {
    this.hide();
  };
  AllianceCoinBoosterDialog.prototype.hideLoaded = function (__s20param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s20param0);
    this.remainingTimeComponent.stop();
  };
  AllianceCoinBoosterDialog.prototype.onClick = function (__s22param0) {
    __s1param0.prototype.onClick.call(this, __s22param0);
    switch (__s22param0.target) {
      case this.dialogDisp.closeBtn:
        this.hide();
    }
  };
  AllianceCoinBoosterDialog.prototype.updateDialog = function () {
    this.remainingTimeComponent.start(this.boosterVO.remainingTimeInSeconds);
    this.dialogDisp.boostMC.toolTipText = {
      t: "dialog_royalCoinsBooster_boost_tt",
      p: [this.boosterVO.bonusPercentage]
    };
    this.txt_message.textContentVO.textReplacements = [this.boosterVO.bonusPercentage];
    this.txt_boost.textContentVO.textReplacements = [this.boosterVO.bonusPercentage];
  };
  Object.defineProperty(AllianceCoinBoosterDialog.prototype, "boosterVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.getBoosterByID(__dep_exact_26a421b704832cff.BoosterConst.ALLIANCE_COIN_BOOST_ID);
    },
    enumerable: true,
    configurable: true
  });
  AllianceCoinBoosterDialog.__initialize_static_members = function () {
    AllianceCoinBoosterDialog.NAME = "AllianceCoinBooster";
  };
  return AllianceCoinBoosterDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.AllianceCoinBoosterDialog = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();

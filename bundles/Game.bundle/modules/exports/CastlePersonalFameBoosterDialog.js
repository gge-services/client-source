Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerComponentEvent = require("gge-module:export_CastleTimerComponentEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_CastleTimerComponent = require("gge-module:export_CastleTimerComponent");
var __s0local0 = function (__s1param0) {
  function CastlePersonalFameBoosterDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastlePersonalFameBoosterDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePersonalFameBoosterDialog, __s1param0);
  CastlePersonalFameBoosterDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btnClose]);
    this.tfTitle = this.textFieldManager.registerTextField(this.dialogDisp.tfTitle, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_fameBoost_package_title"));
    this.tfDesc = this.textFieldManager.registerTextField(this.dialogDisp.tfDesc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_fameBoost_package_description"));
    this.tfTime = this.textFieldManager.registerTextField(this.dialogDisp.timeContainer.tfTime, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.tfTime.mouseEnabled = false;
    this.tfBonus = this.textFieldManager.registerTextField(this.dialogDisp.bonusContainer.tfBonus, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("value_percentage_add"));
    this.tfBonus.mouseEnabled = false;
    this.dialogDisp.timeContainer.toolTipText = "resttime";
    this.remainingTimeComponent = new __dep_export_CastleTimerComponent.CastleTimerComponent(this.tfTime, this.bindFunction(this.getTimerText));
  };
  CastlePersonalFameBoosterDialog.prototype.getTimerText = function (__s7param0) {
    return __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s7param0);
  };
  CastlePersonalFameBoosterDialog.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    this.remainingTimeComponent.start(this.boosterVO.remainingTimeInSeconds);
    this.dialogDisp.bonusContainer.toolTipText = {
      t: "dialog_fameBoost_bonus_tooltip",
      p: [this.boosterVO.bonusPercentage]
    };
    this.tfDesc.textContentVO.textReplacements = [this.boosterVO.bonusPercentage];
    this.tfBonus.textContentVO.textReplacements = [this.boosterVO.bonusPercentage];
    this.colorCrest();
  };
  CastlePersonalFameBoosterDialog.prototype.colorCrest = function () {
    for (var __s11local0 = __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo, __s11local1 = 0; __s11local1 < __s11local0.length; __s11local1++) {
      var __s11local2 = new __dep_exact_81dacdf05bd32292.ColorTransform();
      __s11local2.color = __s11local0[__s11local1];
      this.dialogDisp.colorChange["cc" + __s11local1].useFilters([new createjs.ColorFilter(__s11local2.redMultiplier, __s11local2.greenMultiplier, __s11local2.blueMultiplier, __s11local2.alphaMultiplier, __s11local2.redOffset, __s11local2.greenOffset, __s11local2.blueOffset, __s11local2.alphaOffset)]);
    }
  };
  CastlePersonalFameBoosterDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this.remainingTimeComponent.addEventListener(__dep_export_CastleTimerComponentEvent.CastleTimerComponentEvent.TIMER_EXPIRED, this.bindFunction(this.onTimerExpired));
  };
  CastlePersonalFameBoosterDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    this.remainingTimeComponent.removeEventListener(__dep_export_CastleTimerComponentEvent.CastleTimerComponentEvent.TIMER_EXPIRED, this.bindFunction(this.onTimerExpired));
  };
  CastlePersonalFameBoosterDialog.prototype.onTimerExpired = function (__s19param0) {
    this.hide();
  };
  CastlePersonalFameBoosterDialog.prototype.hideLoaded = function (__s21param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s21param0);
    this.remainingTimeComponent.stop();
  };
  CastlePersonalFameBoosterDialog.prototype.onClick = function (__s23param0) {
    __s1param0.prototype.onClick.call(this, __s23param0);
    if (__s23param0.target == this.dialogDisp.btnClose) {
      this.hide();
    }
  };
  Object.defineProperty(CastlePersonalFameBoosterDialog.prototype, "boosterVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.getBoosterByID(__dep_exact_26a421b704832cff.BoosterConst.PERSONAL_GLORY_BOOST_ID);
    },
    enumerable: true,
    configurable: true
  });
  CastlePersonalFameBoosterDialog.__initialize_static_members = function () {
    CastlePersonalFameBoosterDialog.NAME = "CastlePersonalFameBoosterExternal";
  };
  return CastlePersonalFameBoosterDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastlePersonalFameBoosterDialog = __s0local0;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();

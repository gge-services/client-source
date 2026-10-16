Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastlePointBoosterDialogProperties = require("gge-module:export_CastlePointBoosterDialogProperties");
var __dep_export_ACastleBoosterStatusIcon = require("gge-module:export_ACastleBoosterStatusIcon");
var __s0local0 = function (__s1param0) {
  function StatusIconKhanTabletBooster() {
    return __s1param0.call(this, "Btn_KhanTabletBooster", new __dep_exact_92d05af59ee2ff30.TextVO(""), __dep_export_ACastleStatusIcon.ACastleStatusIcon.PRIORITY_MIDDLE) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconKhanTabletBooster, __s1param0);
  StatusIconKhanTabletBooster.prototype.onClick = function () {
    if (this.isOutOfTutorial()) {
      if (!this.boosterVO) {
        return;
      }
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleKhanTabletBoosterDialog.CastleKhanTabletBoosterDialog, new __dep_export_CastlePointBoosterDialogProperties.CastlePointBoosterDialogProperties(__dep_exact_26a421b704832cff.BoosterConst.KHAN_BOOST_ID));
    }
  };
  StatusIconKhanTabletBooster.prototype.showLoaded = function (__s9param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s9param0);
    this.setTooltip("nomadBoost_icon_tt", [this.boosterVO.bonusPercentage]);
  };
  Object.defineProperty(StatusIconKhanTabletBooster.prototype, "boosterVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.getBoosterByID(__dep_exact_26a421b704832cff.BoosterConst.KHAN_BOOST_ID);
    },
    set: function (__s13param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastleBoosterStatusIcon.ACastleBoosterStatusIcon.prototype, "boosterVO").set.call(this, __s13param0);
    },
    enumerable: true,
    configurable: true
  });
  StatusIconKhanTabletBooster.prototype.checkVisbilityCondition = function () {
    return !!this.boosterVO && this.boosterVO.remainingTimeInSeconds > 0;
  };
  return StatusIconKhanTabletBooster;
}(__dep_export_ACastleBoosterStatusIcon.ACastleBoosterStatusIcon);
exports.StatusIconKhanTabletBooster = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleKhanTabletBoosterDialog = require("gge-module:export_CastleKhanTabletBoosterDialog");
var __dep_export_ACastleStatusIcon = require("gge-module:export_ACastleStatusIcon");

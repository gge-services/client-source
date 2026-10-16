Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ACastleBoosterStatusIcon = require("gge-module:export_ACastleBoosterStatusIcon");
var __s0local0 = function (__s1param0) {
  function StatusIconSamuraiBooster() {
    return __s1param0.call(this, "Btn_SamuraiBooster", new __dep_exact_92d05af59ee2ff30.TextVO(""), __dep_export_ACastleStatusIcon.ACastleStatusIcon.PRIORITY_MIDDLE) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconSamuraiBooster, __s1param0);
  StatusIconSamuraiBooster.prototype.onClick = function () {
    if (this.boosterVO) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_SamuraiBoosterDialog.SamuraiBoosterDialog);
    }
  };
  StatusIconSamuraiBooster.prototype.showLoaded = function (__s8param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s8param0);
    this.setTooltip("samuraiBoost_icon_tt", [this.boosterVO.bonusPercentage]);
  };
  Object.defineProperty(StatusIconSamuraiBooster.prototype, "boosterVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.getBoosterByID(__dep_exact_26a421b704832cff.BoosterConst.SAMURA_TOKEN_BOOST_ID);
    },
    set: function (__s12param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastleBoosterStatusIcon.ACastleBoosterStatusIcon.prototype, "boosterVO").set.call(this, __s12param0);
    },
    enumerable: true,
    configurable: true
  });
  StatusIconSamuraiBooster.prototype.checkVisbilityCondition = function () {
    return !!this.boosterVO && this.boosterVO.remainingTimeInSeconds > 0;
  };
  return StatusIconSamuraiBooster;
}(__dep_export_ACastleBoosterStatusIcon.ACastleBoosterStatusIcon);
exports.StatusIconSamuraiBooster = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_SamuraiBoosterDialog = require("gge-module:export_SamuraiBoosterDialog");
var __dep_export_ACastleStatusIcon = require("gge-module:export_ACastleStatusIcon");

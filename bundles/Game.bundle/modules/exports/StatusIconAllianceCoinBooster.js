Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ACastleBoosterStatusIcon = require("gge-module:export_ACastleBoosterStatusIcon");
var __s0local0 = function (__s1param0) {
  function StatusIconAllianceCoinBooster() {
    return __s1param0.call(this, "Btn_AllianceCoinBooster", new __dep_exact_92d05af59ee2ff30.TextVO(""), __dep_export_ACastleStatusIcon.ACastleStatusIcon.PRIORITY_MIDDLE) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconAllianceCoinBooster, __s1param0);
  StatusIconAllianceCoinBooster.prototype.onClick = function () {
    if (this.boosterVO) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AllianceCoinBoosterDialog.AllianceCoinBoosterDialog);
    }
  };
  StatusIconAllianceCoinBooster.prototype.showLoaded = function (__s8param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s8param0);
    this.setTooltip("royalCoinsBoost_icon_tt", [this.boosterVO.bonusPercentage]);
  };
  Object.defineProperty(StatusIconAllianceCoinBooster.prototype, "boosterVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.getBoosterByID(__dep_exact_26a421b704832cff.BoosterConst.ALLIANCE_COIN_BOOST_ID);
    },
    set: function (__s12param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastleBoosterStatusIcon.ACastleBoosterStatusIcon.prototype, "boosterVO").set.call(this, __s12param0);
    },
    enumerable: true,
    configurable: true
  });
  StatusIconAllianceCoinBooster.prototype.checkVisbilityCondition = function () {
    return !!this.boosterVO && this.boosterVO.remainingTimeInSeconds > 0;
  };
  return StatusIconAllianceCoinBooster;
}(__dep_export_ACastleBoosterStatusIcon.ACastleBoosterStatusIcon);
exports.StatusIconAllianceCoinBooster = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_AllianceCoinBoosterDialog = require("gge-module:export_AllianceCoinBoosterDialog");
var __dep_export_ACastleStatusIcon = require("gge-module:export_ACastleStatusIcon");

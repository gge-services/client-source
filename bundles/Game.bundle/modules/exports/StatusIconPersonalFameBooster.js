Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ACastleBoosterStatusIcon = require("gge-module:export_ACastleBoosterStatusIcon");
var __s0local0 = function (__s1param0) {
  function StatusIconPersonalFameBooster() {
    var __s3local0 = __s1param0.call(this, "Btn_PersonalFameBooster", new __dep_exact_92d05af59ee2ff30.TextVO(""), __dep_export_ACastleStatusIcon.ACastleStatusIcon.PRIORITY_MIDDLE) || this;
    __s3local0.setTooltip("dialog_fameBoost_package_title");
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconPersonalFameBooster, __s1param0);
  StatusIconPersonalFameBooster.prototype.onClick = function () {
    if (this.isOutOfTutorial()) {
      if (!this.boosterVO) {
        return;
      }
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastlePersonalFameBoosterDialog.CastlePersonalFameBoosterDialog);
    }
  };
  StatusIconPersonalFameBooster.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onCrestChange));
  };
  StatusIconPersonalFameBooster.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onCrestChange));
  };
  StatusIconPersonalFameBooster.prototype.onCrestChange = function (__s13param0) {
    this.customizeInnerIconClip(this._innerIconClip);
  };
  StatusIconPersonalFameBooster.prototype.showLoaded = function (__s15param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s15param0);
    this.customizeInnerIconClip(this._innerIconClip);
  };
  StatusIconPersonalFameBooster.prototype.colorCrest = function (__s17param0) {
    for (var __s17local0 = __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo, __s17local1 = 0; __s17local1 < __s17local0.length; __s17local1++) {
      var __s17local2 = new __dep_exact_81dacdf05bd32292.ColorTransform();
      __s17local2.color = __s17local0[__s17local1];
      __s17param0.colorChange["cc" + __s17local1].useFilters([new createjs.ColorFilter(__s17local2.redMultiplier, __s17local2.greenMultiplier, __s17local2.blueMultiplier, __s17local2.alphaMultiplier, __s17local2.redOffset, __s17local2.greenOffset, __s17local2.blueOffset, __s17local2.alphaOffset)], this.allowCaching);
    }
  };
  Object.defineProperty(StatusIconPersonalFameBooster.prototype, "boosterVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.getBoosterByID(__dep_exact_26a421b704832cff.BoosterConst.PERSONAL_GLORY_BOOST_ID);
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACastleBoosterStatusIcon.ACastleBoosterStatusIcon.prototype, "boosterVO").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  StatusIconPersonalFameBooster.prototype.checkVisbilityCondition = function () {
    return !!this.boosterVO && this.boosterVO.remainingTimeInSeconds > 0;
  };
  StatusIconPersonalFameBooster.prototype.customizeInnerIconClip = function (__s27param0) {
    __s1param0.prototype.customizeInnerIconClip.call(this, __s27param0);
    if (__s27param0 && __s27param0.isLoaded) {
      this.colorCrest(__s27param0.currentshownDisplayObject);
    }
  };
  return StatusIconPersonalFameBooster;
}(__dep_export_ACastleBoosterStatusIcon.ACastleBoosterStatusIcon);
exports.StatusIconPersonalFameBooster = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastlePersonalFameBoosterDialog = require("gge-module:export_CastlePersonalFameBoosterDialog");
var __dep_export_ACastleStatusIcon = require("gge-module:export_ACastleStatusIcon");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_SublayerSwitcher = require("gge-module:export_SublayerSwitcher");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function ABasicScoreBarRewardListDialog(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ABasicScoreBarRewardListDialog, __s1param0);
  ABasicScoreBarRewardListDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_help]);
    this.sublayerSwitcher = new __dep_export_SublayerSwitcher.SublayerSwitcher(this.bindFunction(this.createProperties));
    this.generateSublayers();
  };
  ABasicScoreBarRewardListDialog.prototype.generateSublayers = function () {
    for (var __s7local0 = 0; this.dialogDisp["sublayer_" + __s7local0];) {
      this.sublayerSwitcher.add(__s7local0, this.dialogDisp["tab_" + __s7local0], new __dep_export_GenericScoreBarRewardListSublayer.GenericScoreBarRewardListSublayer(this.dialogDisp["sublayer_" + __s7local0]));
      __s7local0++;
    }
  };
  ABasicScoreBarRewardListDialog.prototype.onClick = function (__s11param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s11param0.target)) {
      switch (__s11param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          this.showHelp();
      }
    }
  };
  ABasicScoreBarRewardListDialog.prototype.showLoaded = function (__s15param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s15param0);
    this.sublayerSwitcher.switchTo(this.dialogProperties.tabID);
    this.sublayerSwitcher.show();
  };
  ABasicScoreBarRewardListDialog.prototype.hideLoaded = function (__s17param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s17param0);
    this.sublayerSwitcher.hide();
  };
  ABasicScoreBarRewardListDialog.prototype.addEventListenerOnShow = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
  };
  ABasicScoreBarRewardListDialog.prototype.onEventRemoved = function (__s21param0) {
    if (__s21param0.specialEventVO.eventId == this.dialogProperties.eventID) {
      this.hide();
    }
  };
  ABasicScoreBarRewardListDialog.prototype.removeEventListenerOnHide = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
  };
  ABasicScoreBarRewardListDialog.prototype.showHelp = function () {};
  ABasicScoreBarRewardListDialog.prototype.createProperties = function (__s28param0) {
    throw new __dep_export_AbstractMethodError.AbstractMethodError();
  };
  Object.defineProperty(ABasicScoreBarRewardListDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  return ABasicScoreBarRewardListDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.ABasicScoreBarRewardListDialog = __s0local0;
var __dep_export_GenericScoreBarRewardListSublayer = require("gge-module:export_GenericScoreBarRewardListSublayer");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");

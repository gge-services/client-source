Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_CastleManagementDialogProperties = require("gge-module:export_CastleManagementDialogProperties");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleTextFieldHelper = require("gge-module:export_CastleTextFieldHelper");
var __s0local0 = function (__s1param0) {
  function StatusIconNoobProtection() {
    var __s3local0 = __s1param0.call(this, "Btn_NoobProtection", "txt_label", new __dep_exact_92d05af59ee2ff30.TextVO("")) || this;
    __s3local0.setTooltip("panel_attackWarning_noobProtection");
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconNoobProtection, __s1param0);
  StatusIconNoobProtection.prototype.setVisibilityLoaded = function () {
    var __s5local0 = __dep_export_CastleModel.CastleModel.userData.isNoobProtectedInKingdom(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
    var __s5local1 = this.layoutManager.currentState != __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_KINGDOMMAP;
    var __s5local2 = !this.layoutManager.isInSpectatedCastle && !this.layoutManager.isInMyOccupiedCastle;
    var __s5local3 = !this.layoutManager.isInEventState;
    var __s5local4 = __dep_export_CastleModel.CastleModel.userData.userLevel >= 5;
    if (__s5local0 && __s5local1 && __s5local2 && __s5local3 && __s5local4) {
      if (this.layoutManager.currentState != __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.icon, true);
      } else {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.icon, false);
        this.icon.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER, this.allowCaching);
      }
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconNoobProtection.prototype.initLoaded = function (__s11param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.itxt_label.autoFitToBounds = true;
  };
  StatusIconNoobProtection.prototype.addEventListenerForVisibility = function () {
    __s1param0.prototype.addEventListenerForVisibility.call(this);
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.NOOB_PROTECTION, this.bindFunction(this.onNoobProtectionUpdate));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.NOOBTIME_FINISHED, this.bindFunction(this.onNoobProtectionFinished));
  };
  StatusIconNoobProtection.prototype.removeEventListenerForVisibility = function () {
    __s1param0.prototype.removeEventListenerForVisibility.call(this);
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.NOOB_PROTECTION, this.bindFunction(this.onNoobProtectionUpdate));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.NOOBTIME_FINISHED, this.bindFunction(this.onNoobProtectionFinished));
  };
  StatusIconNoobProtection.prototype.onNoobProtectionUpdate = function (__s17param0) {
    this.setVisibility();
  };
  StatusIconNoobProtection.prototype.onNoobProtectionFinished = function (__s19param0) {
    this.hide();
  };
  StatusIconNoobProtection.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconNoobProtection.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconNoobProtection.prototype.onTimerUpdate = function (__s25param0) {
    this.itxt_label.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getCantAttackTimeString(__dep_export_CastleModel.CastleModel.userData.getRemainingNoobTime());
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.restoreWidth(this.itxt_label);
  };
  StatusIconNoobProtection.prototype.onClick = function () {
    if (this.isOutOfTutorial() && this.layoutManager.currentState != __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
      var __s27local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(__dep_export_CastleModel.CastleModel.areaData.activeArea.areaId, __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
      if (__s27local0) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleManagementDialog.CastleManagementDialog, new __dep_export_CastleManagementDialogProperties.CastleManagementDialogProperties(__s27local0));
      }
    }
  };
  return StatusIconNoobProtection;
}(require("gge-module:export_ACastleLabeledStatusIcon").ACastleLabeledStatusIcon);
exports.StatusIconNoobProtection = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleManagementDialog = require("gge-module:export_CastleManagementDialog");

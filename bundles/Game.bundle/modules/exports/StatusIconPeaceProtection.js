Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstLevelRestrictions = require("gge-module:export_ClientConstLevelRestrictions");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_CastleManagementDialogProperties = require("gge-module:export_CastleManagementDialogProperties");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleTextFieldHelper = require("gge-module:export_CastleTextFieldHelper");
var __s0local0 = function (__s1param0) {
  function StatusIconPeaceProtection() {
    var __s3local0 = __s1param0.call(this, "Btn_NoobProtection", "txt_label", new __dep_exact_92d05af59ee2ff30.TextVO("")) || this;
    __s3local0.setTooltip("panel_attackWarning_noobProtection");
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconPeaceProtection, __s1param0);
  StatusIconPeaceProtection.prototype.setVisibilityLoaded = function () {
    if (!__dep_export_CastleModel.CastleModel.areaData.activeArea || !__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo || __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType != __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_CAPITAL && __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.areaType != __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_METROPOL && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
      var __s5local0 = !this.layoutManager.isInEventState;
      var __s5local1 = __dep_export_CastleModel.CastleModel.userData.userLevel >= __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_PEACE_PROTECTION_ICON;
      var __s5local2 = !this.layoutManager.isInSpectatedCastle && !this.layoutManager.isInMyOccupiedCastle;
      if (__s5local0 && __s5local1 && __s5local2 && __dep_export_CastleModel.CastleModel.userData.peaceModeStatus == __dep_export_CastleUserData.CastleUserData.PEACEMODE_STATUS_PEACETIME) {
        if (this.layoutManager.currentState != __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.icon, true);
        } else {
          __dep_export_ButtonHelper.ButtonHelper.enableButton(this.icon, false);
          this.icon.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER, this.allowCaching);
        }
        this.show();
        return;
      }
    }
    this.hide();
  };
  StatusIconPeaceProtection.prototype.initLoaded = function (__s11param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.itxt_label.autoFitToBounds = true;
  };
  StatusIconPeaceProtection.prototype.addEventListenerForVisibility = function () {
    __s1param0.prototype.addEventListenerForVisibility.call(this);
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.PEACE_PROTECTION, this.bindFunction(this.onProtectionUpdate));
  };
  StatusIconPeaceProtection.prototype.removeEventListenerForVisibility = function () {
    __s1param0.prototype.removeEventListenerForVisibility.call(this);
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.PEACE_PROTECTION, this.bindFunction(this.onProtectionUpdate));
  };
  StatusIconPeaceProtection.prototype.onProtectionUpdate = function (__s17param0) {
    this.setVisibility();
  };
  StatusIconPeaceProtection.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconPeaceProtection.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconPeaceProtection.prototype.onTimerUpdate = function (__s23param0) {
    this.itxt_label.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getCantAttackTimeString(__dep_export_CastleModel.CastleModel.userData.getRemainingPeaceStatusTime());
    __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.restoreWidth(this.itxt_label);
  };
  StatusIconPeaceProtection.prototype.onClick = function () {
    if (!(__dep_export_CastleModel.CastleModel.userData.userLevel < __dep_export_ClientConstLevelRestrictions.ClientConstLevelRestrictions.MIN_LEVEL_PEACE_PROTECTION_ICON) && this.layoutManager.currentState != __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
      var __s25local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(__dep_export_CastleModel.CastleModel.areaData.activeArea.areaId, __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleManagementDialog.CastleManagementDialog, new __dep_export_CastleManagementDialogProperties.CastleManagementDialogProperties(__s25local0));
    }
  };
  return StatusIconPeaceProtection;
}(require("gge-module:export_ACastleLabeledStatusIcon").ACastleLabeledStatusIcon);
exports.StatusIconPeaceProtection = __s0local0;
var __dep_export_CastleUserData = require("gge-module:export_CastleUserData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleManagementDialog = require("gge-module:export_CastleManagementDialog");

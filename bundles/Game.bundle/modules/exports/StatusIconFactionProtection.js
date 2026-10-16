Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleManagementDialogProperties = require("gge-module:export_CastleManagementDialogProperties");
var __dep_export_CastleTextFieldHelper = require("gge-module:export_CastleTextFieldHelper");
var __s0local0 = function (__s1param0) {
  function StatusIconFactionProtection() {
    var __s3local0 = __s1param0.call(this, "Btn_FactionProtection", "txt_label", new __dep_exact_92d05af59ee2ff30.TextVO("")) || this;
    __s3local0.setTooltip("panel_attackWarning_factionProtection");
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconFactionProtection, __s1param0);
  StatusIconFactionProtection.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.itxt_label.autoFitToBounds = true;
  };
  StatusIconFactionProtection.prototype.setVisibilityLoaded = function () {
    var __s7local0 = !this.layoutManager.isInSpectatedCastle && !this.layoutManager.isInMyOccupiedCastle;
    var __s7local1 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
    if (__s7local1 && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID && __s7local0 && __s7local1.factionProtectionStatus == __dep_export_FactionEventVO.FactionEventVO.FACTION_PROTECTION_STATUS_ACTIVE && __s7local1.remainingFactionProtectionTimeInSeconds > 0) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconFactionProtection.prototype.onClick = function () {
    __s1param0.prototype.onClick.call(this);
    if (this.layoutManager.currentState != __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID != __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleManagementDialog.CastleManagementDialog, new __dep_export_CastleManagementDialogProperties.CastleManagementDialogProperties(__dep_export_CastleModel.CastleModel.areaData.activeAreaInfo));
    }
  };
  StatusIconFactionProtection.prototype.addEventListenerForVisibility = function () {
    __s1param0.prototype.addEventListenerForVisibility.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_EVENT_FACTION_PROTECTION_UPDATED, this.bindFunction(this.onFactionProtectionUpdated));
  };
  StatusIconFactionProtection.prototype.removeEventListenerForVisibility = function () {
    __s1param0.prototype.removeEventListenerForVisibility.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_EVENT_FACTION_PROTECTION_UPDATED, this.bindFunction(this.onFactionProtectionUpdated));
  };
  StatusIconFactionProtection.prototype.onFactionProtectionUpdated = function (__s18param0) {
    this.setVisibility();
  };
  StatusIconFactionProtection.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_EVENT_FACTION_PROTECTION_TIMEUPDATE, this.bindFunction(this.onTimeUpdated));
  };
  StatusIconFactionProtection.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_EVENT_FACTION_PROTECTION_TIMEUPDATE, this.bindFunction(this.onTimeUpdated));
  };
  StatusIconFactionProtection.prototype.onTimeUpdated = function (__s24param0) {
    var __s24local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
    if (__s24local0) {
      this.itxt_label.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeStringBySeconds(__s24local0.remainingFactionProtectionTimeInSeconds, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT);
      __dep_export_CastleTextFieldHelper.CastleTextFieldHelper.restoreWidth(this.itxt_label);
    }
  };
  return StatusIconFactionProtection;
}(require("gge-module:export_ACastleLabeledStatusIcon").ACastleLabeledStatusIcon);
exports.StatusIconFactionProtection = __s0local0;
var __dep_export_FactionEventVO = require("gge-module:export_FactionEventVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleManagementDialog = require("gge-module:export_CastleManagementDialog");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleFactionEventLMSDialogProperties = require("gge-module:export_CastleFactionEventLMSDialogProperties");
var __dep_export_ACastleStatusIcon = require("gge-module:export_ACastleStatusIcon");
var __s0local0 = function (__s1param0) {
  function StatusIconLastManStanding(__s3param0) {
    var __s3local0 = this;
    __s3local0._factionID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, StatusIconLastManStanding.getIconName(__s3param0), StatusIconLastManStanding.getPriority(__s3param0)) || this)._factionID = __s3param0;
    __s3local0.setTooltip(__s3local0.getTooltip(__s3param0));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconLastManStanding, __s1param0);
  StatusIconLastManStanding.getIconName = function (__s5param0) {
    if (__s5param0 == __dep_exact_26a421b704832cff_1.FactionConst.BLUE_FACTION) {
      return "Btn_LMS_Blue";
    } else {
      return "Btn_LMS_Red";
    }
  };
  StatusIconLastManStanding.getPriority = function (__s9param0) {
    return __dep_exact_f855840627e6e145.int(__dep_export_ACastleStatusIcon.ACastleStatusIcon.PRIORITY_MIDDLE + (__s9param0 == __dep_exact_26a421b704832cff_1.FactionConst.BLUE_FACTION ? 1 : 2));
  };
  StatusIconLastManStanding.prototype.getTooltip = function (__s11param0) {
    if (__s11param0 == __dep_exact_26a421b704832cff_1.FactionConst.BLUE_FACTION) {
      return "hud_lms_blue";
    } else {
      return "hud_lms_red";
    }
  };
  StatusIconLastManStanding.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_EVENT_LAST_MAN_STANDING_UPDATE, this.bindFunction(this.onLMSUpdate));
  };
  StatusIconLastManStanding.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.FACTION_EVENT_LAST_MAN_STANDING_UPDATE, this.bindFunction(this.onLMSUpdate));
  };
  StatusIconLastManStanding.prototype.addEventListenerForShowTime = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  StatusIconLastManStanding.prototype.removeEventListenerForShowTime = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  StatusIconLastManStanding.prototype.onClick = function () {
    var __s23local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
    if (__s23local0) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleFactionEventLMSDialog.CastleFactionEventLMSDialog, new __dep_export_CastleFactionEventLMSDialogProperties.CastleFactionEventLMSDialogProperties(this._factionID, __s23local0.ownFaction));
    }
  };
  StatusIconLastManStanding.prototype.setVisibilityLoaded = function () {
    var __s26local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
    if (__s26local0 && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID && this.layoutManager.currentState != __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_KINGDOMMAP) {
      if (this._factionID == __dep_exact_26a421b704832cff_1.FactionConst.BLUE_FACTION && __s26local0.lastManStandingBlueActive) {
        this.show();
      } else if (this._factionID == __dep_exact_26a421b704832cff_1.FactionConst.RED_FACTION && __s26local0.lastManStandingRedActive) {
        this.show();
      } else {
        this.hide();
      }
    } else {
      this.hide();
    }
  };
  StatusIconLastManStanding.prototype.onLMSUpdate = function (__s33param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s33param0.specialEventVO, "FactionEventVO")) {
      this.setVisibility();
    }
  };
  StatusIconLastManStanding.prototype.onRemoveEvent = function (__s36param0) {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s36param0.specialEventVO, "FactionEventVO")) {
      this.setVisibility();
    }
  };
  return StatusIconLastManStanding;
}(__dep_export_ACastleStatusIcon.ACastleStatusIcon);
exports.StatusIconLastManStanding = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleFactionEventLMSDialog = require("gge-module:export_CastleFactionEventLMSDialog");

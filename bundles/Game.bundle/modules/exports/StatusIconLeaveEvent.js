Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2STreasureFinishMap = require("gge-module:export_C2STreasureFinishMap");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleTreasureMapEvent = require("gge-module:export_CastleTreasureMapEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleLargeYesNoDialogProperties = require("gge-module:export_CastleLargeYesNoDialogProperties");
var __dep_export_AEventHubItemStatusIcon = require("gge-module:export_AEventHubItemStatusIcon");
var __s0local0 = function (__s1param0) {
  function StatusIconLeaveEvent() {
    return __s1param0.call(this, "Btn_LeaveEvent", null, __dep_export_AEventHubItemStatusIcon.AEventHubItemStatusIcon.PRIORITY_EVENT_LEAVESEASON) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconLeaveEvent, __s1param0);
  StatusIconLeaveEvent.prototype.setVisibilityLoaded = function () {
    __s1param0.prototype.setVisibilityLoaded.call(this);
    if (__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO && !!__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO && __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.hasDefeatedEndNode && (this.layoutManager.currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_SEASON_WORLDMAP || this.layoutManager.isInMyCastle && __dep_export_CastleModel.CastleModel.areaData.activeArea.isSeasonCamp)) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconLeaveEvent.prototype.addEventListenerForVisibility = function () {
    this.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    __dep_export_CastleModel.CastleModel.treasureMapData.addEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onTreasureMapChanged));
  };
  StatusIconLeaveEvent.prototype.onTreasureMapChanged = function (__s11param0) {
    this.setVisibility();
  };
  StatusIconLeaveEvent.prototype.onChangeLayoutState = function (__s13param0) {
    this.setVisibility();
  };
  StatusIconLeaveEvent.prototype.removeEventListenerForVisibility = function () {
    this.controller.removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    __dep_export_CastleModel.CastleModel.treasureMapData.removeEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onTreasureMapChanged));
  };
  StatusIconLeaveEvent.prototype.showLoaded = function (__s17param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.customizeInnerIconClip(this._innerIconClip);
    this.updateCache();
  };
  StatusIconLeaveEvent.prototype.onClick = function () {
    var __s19local0;
    var __s19local1;
    switch (__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.eventId) {
      case __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_CRUSADE_THORNKING:
        __s19local0 = __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.mapID == __dep_exact_26a421b704832cff.TreasureMapsConst.MAP_ID_THORNKING_EASY ? "dialog_yesNo_leaveNormalMode_thornking_copy" : "dialog_yesNo_leaveSeasonEventForever_copy";
        __s19local1 = __dep_export_CastleLargeYesNoDialog.CastleLargeYesNoDialog;
        break;
      case __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
        __s19local0 = "dialog_seasonEvent_" + __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.mapID + "_leave_copy";
        __s19local1 = __dep_export_CastleLargeYesNoDialog.CastleLargeYesNoDialog;
        break;
      case __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
        __s19local0 = __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.mapID == __dep_exact_26a421b704832cff.TreasureMapsConst.MAP_ID_UNDERWORLD_EASY ? "dialog_yesNo_leaveNormalMode_underworld_copy" : "dialog_yesNo_leaveSeasonEventForever_underworld_copy";
        __s19local1 = __dep_export_CastleUnderworldFinishEasyModeDialog.CastleUnderworldFinishEasyModeDialog;
    }
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__s19local1, new __dep_export_CastleLargeYesNoDialogProperties.CastleLargeYesNoDialogProperties(__dep_exact_92d05af59ee2ff30.Localize.text("dialog_yesNo_leaveSeasonEventForever_title"), __dep_exact_92d05af59ee2ff30.Localize.text(__s19local0), this.bindFunction(this.leaveSeasonForever)));
  };
  StatusIconLeaveEvent.prototype.leaveSeasonForever = function (__s22param0 = null) {
    var __s22local0 = this.activeSeasonVO.treasureMapVO;
    if (__s22local0) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2STreasureFinishMap.C2STreasureFinishMap(__s22local0.mapID));
      __dep_export_CastleModel.CastleModel.treasureMapData.clearTreasureMap(__s22local0.mapID);
    }
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.JOIN_MAIN_CASTLE_COMMAND);
  };
  StatusIconLeaveEvent.prototype.customizeInnerIconClip = function (__s25param0) {
    if (__s25param0 && __s25param0.isLoaded && this.activeSeasonVO) {
      this.setTooltip("panel_actionSeason_leaveEvent");
      switch (this.activeSeasonVO.eventId) {
        case __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_CRUSADE_THORNKING:
          __s25param0.gotoAndStop(1);
          break;
        case __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
          __s25param0.gotoAndStop(2);
          break;
        case __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
          __s25param0.gotoAndStop(3);
      }
    }
  };
  Object.defineProperty(StatusIconLeaveEvent.prototype, "activeSeasonVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconLeaveEvent.prototype, "specialPriority", {
    get: function () {
      if (this.layoutManager.isInEventState) {
        return __dep_export_AEventHubItemStatusIcon.AEventHubItemStatusIcon.PRIORITY_EVENT_HIGH2;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconLeaveEvent.prototype, "eventID", {
    get: function () {
      if (this.activeSeasonVO) {
        return this.activeSeasonVO.eventId;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  return StatusIconLeaveEvent;
}(__dep_export_AEventHubItemStatusIcon.AEventHubItemStatusIcon);
exports.StatusIconLeaveEvent = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleLargeYesNoDialog = require("gge-module:export_CastleLargeYesNoDialog");
var __dep_export_CastleUnderworldFinishEasyModeDialog = require("gge-module:export_CastleUnderworldFinishEasyModeDialog");

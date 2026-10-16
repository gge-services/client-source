Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SeasonLeagueEvent = require("gge-module:export_SeasonLeagueEvent");
var __dep_export_AEventHubItemStatusIcon = require("gge-module:export_AEventHubItemStatusIcon");
var __s0local0 = function (__s1param0) {
  function StatusIconSeasonLeagueEvent() {
    return __s1param0.call(this, "SeasonLeagueEventButton", null, __dep_export_AEventHubItemStatusIcon.AEventHubItemStatusIcon.PRIORITY_EVENT_SEASONLEAGUE) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconSeasonLeagueEvent, __s1param0);
  StatusIconSeasonLeagueEvent.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onEventDataChanged));
    this.controller.addEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onSeasonInfoUpdated));
  };
  StatusIconSeasonLeagueEvent.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onEventDataChanged));
    this.controller.removeEventListener(__dep_export_SeasonLeagueEvent.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onSeasonInfoUpdated));
  };
  StatusIconSeasonLeagueEvent.prototype.setVisibilityLoaded = function () {
    if (this.getEventVO()) {
      this.show();
      if (this._innerIconClip) {
        this.customizeInnerIconClip(this._innerIconClip);
      }
      if (__dep_export_CastleModel.CastleModel.seasonLeagueData.server.seasonStartDialogSeen) {
        if (!__dep_export_CastleModel.CastleModel.seasonLeagueData.server.seasonEventStartDialogSeen && __dep_export_CastleModel.CastleModel.seasonLeagueData.isAnySeasonEventActive()) {
          this.setTooltip("dialog_seasonLeague_HUD_newDivision_tt");
        } else {
          this.setTooltip("dialog_seasonLeague_HUD_name");
        }
      } else {
        this.setTooltip("dialog_seasonLeague_HUD_newSeason_tt");
      }
    } else {
      this.hide();
    }
  };
  StatusIconSeasonLeagueEvent.prototype.setLabelVisibility = function (__s18param0) {
    this.itxt_label.visible = __s18param0;
  };
  StatusIconSeasonLeagueEvent.prototype.getEventVO = function () {
    return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_KINGDOMS_LEAGUE);
  };
  StatusIconSeasonLeagueEvent.prototype.onClick = function () {
    __dep_export_CastleModel.CastleModel.seasonLeagueData.openEventDialog();
  };
  StatusIconSeasonLeagueEvent.prototype.onSeasonInfoUpdated = function (__s24param0) {
    this.setVisibilityLoaded();
  };
  StatusIconSeasonLeagueEvent.prototype.onEventDataChanged = function (__s26param0) {
    this.setVisibility();
  };
  StatusIconSeasonLeagueEvent.prototype.onRemoveSpecialEvent = function (__s28param0) {
    if (!this.getEventVO()) {
      this.hide();
    }
  };
  Object.defineProperty(StatusIconSeasonLeagueEvent.prototype, "eventID", {
    get: function () {
      return __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_KINGDOMS_LEAGUE;
    },
    enumerable: true,
    configurable: true
  });
  StatusIconSeasonLeagueEvent.prototype.customizeInnerIconClip = function (__s33param0) {
    if (__s33param0 && __s33param0.isLoaded) {
      var __s33local0 = __dep_export_CastleModel.CastleModel.seasonLeagueData.isAnySeasonEventActive();
      __s33param0.currentshownDisplayObject.mc_background.gotoAndStop(__s33local0 ? 1 : 2);
    }
  };
  return StatusIconSeasonLeagueEvent;
}(__dep_export_AEventHubItemStatusIcon.AEventHubItemStatusIcon);
exports.StatusIconSeasonLeagueEvent = __s0local0;

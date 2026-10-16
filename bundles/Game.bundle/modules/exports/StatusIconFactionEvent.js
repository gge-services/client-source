Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStartQuestDialog = require("gge-module:export_CastleStartQuestDialog");
var __dep_export_CastleStartQuestDialogProperties = require("gge-module:export_CastleStartQuestDialogProperties");
var __dep_export_AEventHubItemStatusIcon = require("gge-module:export_AEventHubItemStatusIcon");
var __s0local0 = function (__s1param0) {
  function StatusIconFactionEvent() {
    return __s1param0.call(this, "FactionEventButton", null, __dep_export_AEventHubItemStatusIcon.AEventHubItemStatusIcon.PRIORITY_EVENT_BERIMOND) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconFactionEvent, __s1param0);
  StatusIconFactionEvent.prototype.setVisibilityLoaded = function () {
    var __s5local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION);
    if (__s5local0 && __s5local0.remainingEventTimeInSeconds > 5) {
      this.setTooltip("kingdomName_Faction");
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconFactionEvent.prototype.onClick = function () {
    var __s9local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION);
    if (__s9local0) {
      var __s9local1 = __dep_export_CastleModel.CastleModel.questData.getActiveStarterQuestByEventID(__s9local0.eventId);
      if (__s9local1 && __s9local1.requiredQuestID <= 0 && __s9local1.isStarterQuest) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStartQuestDialog.CastleStartQuestDialog, new __dep_export_CastleStartQuestDialogProperties.CastleStartQuestDialogProperties(__s9local1));
      } else {
        __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_FACTION_EVENT_MAIN_DIALOG);
      }
    } else {
      this.hide();
    }
  };
  StatusIconFactionEvent.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onChangePosibilityToShowMe));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onChangePosibilityToShowMe));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onChangePosibilityToShowMe));
  };
  StatusIconFactionEvent.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onChangePosibilityToShowMe));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onChangePosibilityToShowMe));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onChangePosibilityToShowMe));
  };
  StatusIconFactionEvent.prototype.onChangePosibilityToShowMe = function (__s19param0) {
    this.setVisibility();
  };
  Object.defineProperty(StatusIconFactionEvent.prototype, "specialPriority", {
    get: function () {
      if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
        return __dep_export_AEventHubItemStatusIcon.AEventHubItemStatusIcon.PRIORITY_EVENT_HIGH1;
      } else if (__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff_1.WorldIsland.KINGDOM_ID) {
        return __dep_export_AEventHubItemStatusIcon.AEventHubItemStatusIcon.PRIORITY_EVENT_HIGH2;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconFactionEvent.prototype, "eventID", {
    get: function () {
      return __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION;
    },
    enumerable: true,
    configurable: true
  });
  return StatusIconFactionEvent;
}(__dep_export_AEventHubItemStatusIcon.AEventHubItemStatusIcon);
exports.StatusIconFactionEvent = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");

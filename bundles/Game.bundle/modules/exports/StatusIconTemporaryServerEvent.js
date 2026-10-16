Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_TempServerHelper = require("gge-module:export_TempServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStartQuestDialog = require("gge-module:export_CastleStartQuestDialog");
var __dep_export_CastleStartQuestDialogProperties = require("gge-module:export_CastleStartQuestDialogProperties");
var __dep_export_AEventHubItemStatusIcon = require("gge-module:export_AEventHubItemStatusIcon");
var __s0local0 = function (__s1param0) {
  function StatusIconTemporaryServerEvent() {
    var __s3local0 = __s1param0.call(this, StatusIconTemporaryServerEvent.NAME, null, __dep_export_AEventHubItemStatusIcon.AEventHubItemStatusIcon.PRIORITY_EVENT_TEMPSERVER) || this;
    __s3local0._tooltipId = "temp_server_name_tooltip";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconTemporaryServerEvent, __s1param0);
  StatusIconTemporaryServerEvent.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateStatusIcon));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconTemporaryServerEvent.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.updateStatusIcon));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateStatusIcon));
  };
  StatusIconTemporaryServerEvent.prototype.onClick = function () {
    if (__dep_export_TempServerHelper.TempServerHelper.tmpServerEvent) {
      var __s9local0 = __dep_export_CastleModel.CastleModel.questData.getActiveStarterQuestByEventID(__dep_export_TempServerHelper.TempServerHelper.tmpServerEvent.eventId);
      if (__s9local0 && __s9local0.requiredQuestID <= 0 && __s9local0.isStarterQuest) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStartQuestDialog.CastleStartQuestDialog, new __dep_export_CastleStartQuestDialogProperties.CastleStartQuestDialogProperties(__s9local0));
      } else {
        __dep_export_TempServerHelper.TempServerHelper.tmpServerEvent.openDialog();
      }
    }
  };
  StatusIconTemporaryServerEvent.prototype.updateStatusIcon = function (__s14param0) {
    this.setVisibilityLoaded();
  };
  StatusIconTemporaryServerEvent.prototype.setVisibilityLoaded = function () {
    if (this.icon.visible == 1 && this.isVisible == 0 && this.env.isOnTemporaryServer && __dep_exact_81dacdf05bd32292.ExternalInterface.available) {
      try {
        __dep_exact_81dacdf05bd32292.ExternalInterface.call("function refresh(){location.reload();}");
      } catch (__s20local0) {
        __dep_exact_9e901e8e2483a22f_1.error("ExternalInterface call failed.");
      }
    }
    if (this.icon.visible != this.isVisible) {
      if (this.isVisible) {
        this.customizeInnerIconClip(this._innerIconClip);
        this.show();
      } else {
        this.hide();
      }
      if (this._changedVisibilityCallback != null) {
        this._changedVisibilityCallback();
      }
    }
    this.setTooltip(this._tooltipId);
  };
  Object.defineProperty(StatusIconTemporaryServerEvent.prototype, "isVisible", {
    get: function () {
      return !!__dep_export_TempServerHelper.TempServerHelper.tmpServerEvent && !this.env.isClosedBeta && this.env.networkId == 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconTemporaryServerEvent.prototype, "env", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconTemporaryServerEvent.prototype, "specialPriority", {
    get: function () {
      if (__dep_export_TempServerHelper.TempServerHelper.isOnTempServer) {
        return __dep_export_AEventHubItemStatusIcon.AEventHubItemStatusIcon.PRIORITY_EVENT_HIGH1;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconTemporaryServerEvent.prototype, "eventID", {
    get: function () {
      return __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_TEMPSERVER;
    },
    enumerable: true,
    configurable: true
  });
  StatusIconTemporaryServerEvent.prototype.customizeInnerIconClip = function (__s36param0) {
    if (__s36param0 && __s36param0.isLoaded && __dep_export_TempServerHelper.TempServerHelper.tmpServerEvent) {
      var __s36local0 = __dep_export_TempServerHelper.TempServerHelper.getAssetFrame();
      __s36param0.currentshownDisplayObject.gotoAndStop(__s36local0);
    }
  };
  StatusIconTemporaryServerEvent.NAME = "Btn_TempServerEvent";
  return StatusIconTemporaryServerEvent;
}(__dep_export_AEventHubItemStatusIcon.AEventHubItemStatusIcon);
exports.StatusIconTemporaryServerEvent = __s0local0;

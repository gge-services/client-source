Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleStartQuestDialog = require("gge-module:export_CastleStartQuestDialog");
var __dep_export_CastleStartQuestDialogProperties = require("gge-module:export_CastleStartQuestDialogProperties");
var __dep_export_AEventHubItemStatusIcon = require("gge-module:export_AEventHubItemStatusIcon");
var __s0local0 = function (__s1param0) {
  function StatusIconSeasonEvent() {
    return __s1param0.call(this, "SeasonEventButton", null, __dep_export_AEventHubItemStatusIcon.AEventHubItemStatusIcon.PRIORITY_EVENT_SEASON) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(StatusIconSeasonEvent, __s1param0);
  StatusIconSeasonEvent.prototype.setVisibilityLoaded = function () {
    var __s5local0 = __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO;
    if (__s5local0) {
      if (__s5local0.requiresAdditionalEventLib && !__s5local0.isAdditionalLibLoaded) {
        __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onChangePosibilityToShowMe));
        this.hide();
        return;
      }
      __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onChangePosibilityToShowMe));
      if (__s5local0.isActive && !__s5local0.finished) {
        if (this._innerIconClip.isLoaded) {
          this.customizeInnerIconClip(this._innerIconClip);
        }
        this.setTooltip("event_title_" + this.activeSeasonVO.eventId);
        this.onTimerUpdate(null);
        this.show();
      } else {
        this.hide();
      }
    } else {
      this.hide();
    }
  };
  StatusIconSeasonEvent.prototype.showLoaded = function (__s13param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s13param0);
    this.customizeInnerIconClip(this._innerIconClip);
  };
  StatusIconSeasonEvent.prototype.onClick = function () {
    var __s15local0 = __dep_export_CastleModel.CastleModel.questData.getActiveStarterQuestByEventID(this.activeSeasonVO.eventId);
    if (__s15local0 && __s15local0.requiredQuestID <= 0 && __s15local0.isStarterQuest) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStartQuestDialog.CastleStartQuestDialog, new __dep_export_CastleStartQuestDialogProperties.CastleStartQuestDialogProperties(__s15local0));
    } else {
      __dep_export_CastleModel.CastleModel.kingdomData.tempTargetSpaceID = this.activeSeasonVO.mapID;
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleHandleSeasonDialog.CastleHandleSeasonDialog, new __dep_export_CastleHandleSeasonDialogProperties.CastleHandleSeasonDialogProperties(this.activeSeasonVO));
    }
  };
  StatusIconSeasonEvent.prototype.addEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSeasonEventEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_PRIVATEEVENT, this.bindFunction(this.onRemoveSeasonEventEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onChangePosibilityToShowMe));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onChangePosibilityToShowMe));
    this.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconSeasonEvent.prototype.removeEventListenerForVisibility = function () {
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSeasonEventEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_PRIVATEEVENT, this.bindFunction(this.onRemoveSeasonEventEvent));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onChangePosibilityToShowMe));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onChangePosibilityToShowMe));
  };
  StatusIconSeasonEvent.prototype.onChangePosibilityToShowMe = function (__s23param0) {
    this.setVisibility();
  };
  StatusIconSeasonEvent.prototype.onRemoveSeasonEventEvent = function (__s25param0) {
    if (!this.activeSeasonVO || !!this.activeSeasonVO.finished) {
      this.hide();
    }
  };
  StatusIconSeasonEvent.prototype.customizeInnerIconClip = function (__s28param0) {
    if (__s28param0 && __s28param0.isLoaded) {
      __s28param0.gotoAndStop(this.buttonFrame);
    }
  };
  Object.defineProperty(StatusIconSeasonEvent.prototype, "buttonFrame", {
    get: function () {
      if (this.activeSeasonVO) {
        switch (this.activeSeasonVO.eventId) {
          case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_THORNKING:
            return 1;
          case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
            return 2;
          case __dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
            return 3;
        }
      }
      return 1;
    },
    enumerable: true,
    configurable: true
  });
  StatusIconSeasonEvent.prototype.hide = function () {
    if (this._innerIconClip) {
      this._innerIconClip.gotoAndStop(1);
    }
    __s1param0.prototype.hide.call(this);
  };
  Object.defineProperty(StatusIconSeasonEvent.prototype, "activeSeasonVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconSeasonEvent.prototype, "specialPriority", {
    get: function () {
      if (this.layoutManager.isInEventState) {
        return __dep_export_AEventHubItemStatusIcon.AEventHubItemStatusIcon.PRIORITY_EVENT_HIGH1;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconSeasonEvent.prototype, "eventID", {
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
  return StatusIconSeasonEvent;
}(__dep_export_AEventHubItemStatusIcon.AEventHubItemStatusIcon);
exports.StatusIconSeasonEvent = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleHandleSeasonDialog = require("gge-module:export_CastleHandleSeasonDialog");
var __dep_export_CastleHandleSeasonDialogProperties = require("gge-module:export_CastleHandleSeasonDialogProperties");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_AOfferHubItemStatusIcon = require("gge-module:export_AOfferHubItemStatusIcon");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SettingsEvent = require("gge-module:export_SettingsEvent");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_TwoStateButtonHover = require("gge-module:export_TwoStateButtonHover");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function AEventHubItemStatusIcon() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AEventHubItemStatusIcon, __s1param0);
  AEventHubItemStatusIcon.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.icon.btn_favourite], __dep_export_TwoStateButtonHover.TwoStateButtonHover);
    this.icon.btn_favourite.visible = true;
    this.onEventBookmarkChanged(null);
  };
  AEventHubItemStatusIcon.prototype.addEventListenerForShowTime = function () {
    __s1param0.prototype.addEventListenerForShowTime.call(this);
    this.icon.addEventListener(__s0local0.CLICK, this.bindFunction(this.onMouseClick));
    this.controller.addEventListener(__dep_export_SettingsEvent.SettingsEvent.EVENT_BOOKMARK_CHANGED, this.bindFunction(this.onEventBookmarkChanged));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  AEventHubItemStatusIcon.prototype.removeEventListenerForShowTime = function () {
    __s1param0.prototype.removeEventListenerForShowTime.call(this);
    this.icon.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onMouseClick));
    this.controller.removeEventListener(__dep_export_SettingsEvent.SettingsEvent.EVENT_BOOKMARK_CHANGED, this.bindFunction(this.onEventBookmarkChanged));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  AEventHubItemStatusIcon.prototype.onTimerUpdate = function (__s11param0 = null) {
    if (this.icon) {
      var __s11local0 = (this.eventEndTimestamp - __dep_export_CachedTimer.CachedTimer.getCachedTimer()) / __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
      this.itxt_label.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__s11local0);
    }
  };
  AEventHubItemStatusIcon.prototype.onMouseClick = function (__s14param0) {
    if (__s14param0.target == this.icon.btn_favourite) {
      this.onBookmarkEvent();
    }
  };
  AEventHubItemStatusIcon.prototype.onEventBookmarkChanged = function (__s17param0) {
    if (this.isBookmarked) {
      __dep_export_ButtonHelper.ButtonHelper.getBasicButton(this.icon.btn_favourite).selected();
      this.icon.btn_favourite.toolTipText = "starred_tt";
    } else {
      __dep_export_ButtonHelper.ButtonHelper.getBasicButton(this.icon.btn_favourite).deselected();
      this.icon.btn_favourite.toolTipText = "notStarred_tt";
    }
  };
  AEventHubItemStatusIcon.prototype.onBookmarkEvent = function () {
    if (this.isBookmarked) {
      __dep_export_CastleModel.CastleModel.settingsData.deleteEventBookmark();
    } else {
      __dep_export_CastleModel.CastleModel.settingsData.setEventBookmark(this._innerIconClassName, this.eventEndTimestamp);
    }
  };
  Object.defineProperty(AEventHubItemStatusIcon.prototype, "isBookmarked", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.settingsData.getEventBookmark().buttonName == this.innerIconClassName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEventHubItemStatusIcon.prototype, "priority", {
    get: function () {
      if (this.isBookmarked) {
        return AEventHubItemStatusIcon.PRIORITY_EVENT_BOOKMARKED;
      } else if (this.specialPriority > -1) {
        return this.specialPriority;
      } else {
        return this._priority;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEventHubItemStatusIcon.prototype, "eventEndTimestamp", {
    get: function () {
      var __s32local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this.eventID);
      if (__s32local0) {
        return __s32local0.endTimestamp;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEventHubItemStatusIcon.prototype, "specialPriority", {
    get: function () {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEventHubItemStatusIcon.prototype, "eventID", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  AEventHubItemStatusIcon.PRIORITY_EVENT_BOOKMARKED = 2;
  AEventHubItemStatusIcon.PRIORITY_EVENT_HIGH1 = 3;
  AEventHubItemStatusIcon.PRIORITY_EVENT_HIGH2 = 4;
  AEventHubItemStatusIcon.PRIORITY_EVENT_TEMPSERVER = 12;
  AEventHubItemStatusIcon.PRIORITY_EVENT_BATTLEGROUNDS = 13;
  AEventHubItemStatusIcon.PRIORITY_EVENT_SEASONLEAGUE = 14;
  AEventHubItemStatusIcon.PRIORITY_EVENT_COLLECTOR = 15;
  AEventHubItemStatusIcon.PRIORITY_EVENT_BERIMOND = 16;
  AEventHubItemStatusIcon.PRIORITY_EVENT_SEASON = 17;
  AEventHubItemStatusIcon.PRIORITY_EVENT_LEAVESEASON = 18;
  return AEventHubItemStatusIcon;
}(__dep_export_AOfferHubItemStatusIcon.AOfferHubItemStatusIcon);
exports.AEventHubItemStatusIcon = __s0local1;

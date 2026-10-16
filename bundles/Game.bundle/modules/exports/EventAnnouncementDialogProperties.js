Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function EventAnnouncementDialogProperties(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = this;
    __s3local0._eventId = 0;
    __s3local0._durationTS = 0;
    __s3local0._alreadyClaimed = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this)._eventId = __s3param0;
    __s3local0._durationTS = __s3param1;
    __s3local0._possibleRewards = __s3param2;
    __s3local0._claimableRewards = __s3param3;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EventAnnouncementDialogProperties, __s1param0);
  Object.defineProperty(EventAnnouncementDialogProperties.prototype, "eventId", {
    get: function () {
      return this._eventId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementDialogProperties.prototype, "durationTS", {
    get: function () {
      return this._durationTS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementDialogProperties.prototype, "alreadyClaimed", {
    get: function () {
      this._alreadyClaimed = __dep_export_CastleModel.CastleModel.eventAnnouncementData.isClaimed(this._durationTS);
      return this._alreadyClaimed;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementDialogProperties.prototype, "possibleRewards", {
    get: function () {
      return this._possibleRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementDialogProperties.prototype, "claimableRewards", {
    get: function () {
      return this._claimableRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementDialogProperties.prototype, "dialogTitleTextId", {
    get: function () {
      var __s15local0;
      switch (this.eventId) {
        case EventAnnouncementDialogProperties.EVENT_ID_ALIEN_INVASION:
          __s15local0 = "dialog_eventAnnouncement_alienInvasion_header";
          break;
        case EventAnnouncementDialogProperties.EVENT_ID_ALIEN_INVASION_ALLIANCE:
          __s15local0 = "dialog_eventAnnouncement_alienInvasionAlliance_header";
      }
      return __s15local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementDialogProperties.prototype, "eventTitleTextId", {
    get: function () {
      return "dialog_eventAnnoucement_startIn";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementDialogProperties.prototype, "durationText", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementDialogProperties.prototype, "possibleEventRewardsDescription", {
    get: function () {
      var __s22local0;
      switch (this.eventId) {
        case EventAnnouncementDialogProperties.EVENT_ID_ALIEN_INVASION:
        case EventAnnouncementDialogProperties.EVENT_ID_ALIEN_INVASION_ALLIANCE:
          __s22local0 = "dialog_eventAnnouncement_rewards";
      }
      return __s22local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementDialogProperties.prototype, "announcementDescription", {
    get: function () {
      var __s25local0;
      switch (this.eventId) {
        case EventAnnouncementDialogProperties.EVENT_ID_ALIEN_INVASION:
          __s25local0 = "dialog_eventAnnouncement_alienInvasion_description";
          break;
        case EventAnnouncementDialogProperties.EVENT_ID_ALIEN_INVASION_ALLIANCE:
          __s25local0 = "dialog_eventAnnouncement_alienInvasionAlliance_description";
      }
      return __s25local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementDialogProperties.prototype, "claimButtonLabel", {
    get: function () {
      if (this.alreadyClaimed) {
        return "dialog_eventAnnouncements_collectButton_collected";
      } else {
        return "dialog_eventAnnouncements_collectButton";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementDialogProperties.prototype, "backgroundName", {
    get: function () {
      var __s32local0;
      switch (this.eventId) {
        case EventAnnouncementDialogProperties.EVENT_ID_ALIEN_INVASION:
        case EventAnnouncementDialogProperties.EVENT_ID_ALIEN_INVASION_ALLIANCE:
          __s32local0 = "AlienEventTeaserTheme";
      }
      return __s32local0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementDialogProperties.prototype, "characterId", {
    get: function () {
      var __s35local0 = 0;
      switch (this.eventId) {
        case EventAnnouncementDialogProperties.EVENT_ID_ALIEN_INVASION:
        case EventAnnouncementDialogProperties.EVENT_ID_ALIEN_INVASION_ALLIANCE:
          __s35local0 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_SPY);
      }
      return __s35local0;
    },
    enumerable: true,
    configurable: true
  });
  EventAnnouncementDialogProperties.__initialize_static_members = function () {
    EventAnnouncementDialogProperties.EVENT_ID_ALIEN_INVASION = 11;
    EventAnnouncementDialogProperties.EVENT_ID_ALIEN_INVASION_ALLIANCE = 71;
  };
  return EventAnnouncementDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.EventAnnouncementDialogProperties = __s0local0;
__s0local0.__initialize_static_members();

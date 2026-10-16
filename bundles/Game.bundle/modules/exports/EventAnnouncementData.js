Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EventAnnouncementVO = require("gge-module:export_EventAnnouncementVO");
var __dep_export_LeagueTypeVO = require("gge-module:export_LeagueTypeVO");
var __s0local0 = createjs.Event;
var __s0local1 = function (__s1param0) {
  function EventAnnouncementData(__s3param0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).eventsAXML = __s3param0.eventannouncements;
    __s3local0.parseEventsAnnouncementsFromXML();
    __s3local0.parseLeagueTypesXML(__s3param0.leaguetypes);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EventAnnouncementData, __s1param0);
  EventAnnouncementData.prototype.parseLeagueTypesXML = function (__s5param0) {
    var __s5local0;
    var __s5local1;
    this._leagueTypeList = [];
    for (var __s5local2 = 0, __s5local3 = __s5param0; __s5local2 < __s5local3.length; __s5local2++) {
      __s5local0 = __s5local3[__s5local2];
      (__s5local1 = new __dep_export_LeagueTypeVO.LeagueTypeVO()).parseXML(__s5local0);
      this._leagueTypeList.push(__s5local1);
    }
  };
  EventAnnouncementData.prototype.getLeagueTypeId = function (__s9param0) {
    var __s9local0;
    var __s9local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.userData.userLevel);
    for (var __s9local2 = 0, __s9local3 = this._leagueTypeList; __s9local2 < __s9local3.length; __s9local2++) {
      if ((__s9local0 = __s9local3[__s9local2]).eventID == __s9param0 && __s9local1 >= __s9local0.minLevel && __s9local1 <= __s9local0.maxLevel) {
        return __s9local0.leaguetypeID;
      }
    }
    return -1;
  };
  EventAnnouncementData.prototype.parseEventsAnnouncementsFromXML = function () {
    var __s14local0;
    var __s14local1 = 0;
    var __s14local2 = 0;
    this._announcementsEventsList = new Map();
    for (var __s14local3 = 0, __s14local4 = this.eventsAXML; __s14local3 < __s14local4.length; __s14local3++) {
      __s14local0 = __s14local4[__s14local3];
      __s14local1 = parseInt(__s14local0.eventID || "");
      __s14local2 = parseInt(__s14local0.leaguetypeID || "");
      this._announcementsEventsList.set(this.createKeyForEventAnnouncementVO(__s14local1, __s14local2), new __dep_export_EventAnnouncementVO.EventAnnouncementVO());
      this._announcementsEventsList.get(this.createKeyForEventAnnouncementVO(__s14local1, __s14local2)).parseXML(__s14local0);
    }
  };
  EventAnnouncementData.prototype.getEventAnnouncementVO = function (__s18param0, __s18param1) {
    return this._announcementsEventsList.get(this.createKeyForEventAnnouncementVO(__s18param0, __s18param1));
  };
  EventAnnouncementData.prototype.createKeyForEventAnnouncementVO = function (__s20param0, __s20param1) {
    return __s20param0 + "_" + __s20param1;
  };
  Object.defineProperty(EventAnnouncementData.prototype, "announcementsEventsList", {
    get: function () {
      return this._announcementsEventsList;
    },
    enumerable: true,
    configurable: true
  });
  EventAnnouncementData.prototype.parseCAR = function (__s24param0) {
    __dep_export_CastleModel.CastleModel.specialEventData.activeEvents.get(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_EVENT_ANNOUNCEMENT).isCollected = true;
    this.dispatchEvent(new __s0local0(EventAnnouncementData.SHOW_EVENT_ANNOUNCEMENT_REWARD_COLLECTED, true, false));
  };
  EventAnnouncementData.prototype.isClaimed = function (__s26param0) {
    var __s26local0 = false;
    var __s26local1 = __dep_export_CastleModel.CastleModel.specialEventData.activeEvents.get(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_EVENT_ANNOUNCEMENT);
    if (__s26local1) {
      __s26local0 = __s26local1.isCollected;
    }
    return __s26local0;
  };
  EventAnnouncementData.prototype.isAvailable = function (__s29param0) {
    var __s29local0 = false;
    if (__dep_export_CastleModel.CastleModel.specialEventData.activeEvents.get(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_EVENT_ANNOUNCEMENT)) {
      __s29local0 = true;
      if (new Date().getTime() / 1000 > __s29param0) {
        __s29local0 = false;
      }
    }
    return __s29local0;
  };
  EventAnnouncementData.__initialize_static_members = function () {
    EventAnnouncementData.SHOW_EVENT_ANNOUNCEMENT_REWARD_COLLECTED = "SHOW_EVENT_ANNOUNCEMENT_REWARD_COLLECTED";
  };
  return EventAnnouncementData;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.EventAnnouncementData = __s0local1;
__s0local1.__initialize_static_members();

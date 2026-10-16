Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function EventAnnouncementVO() {
    this._eventAnnouncementID = 0;
    this._eventID = 0;
    this._leaguetypeID = 0;
    this._messageRewardID = 0;
  }
  EventAnnouncementVO.prototype.parseXML = function (__s5param0) {
    this._eventAnnouncementID = parseInt(__s5param0.eventAnnouncementID || "");
    this._eventID = parseInt(__s5param0.eventID || "");
    this._leaguetypeID = parseInt(__s5param0.leaguetypeID || "");
    this._teaserRewardIDs = (__s5param0.teaserRewardIDs || "").toString();
    this._messageRewardID = parseInt(__s5param0.messageRewardID || "");
  };
  Object.defineProperty(EventAnnouncementVO.prototype, "eventAnnouncementID", {
    get: function () {
      return this._eventAnnouncementID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementVO.prototype, "eventID", {
    get: function () {
      return this._eventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementVO.prototype, "leaguetypeID", {
    get: function () {
      return this._leaguetypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementVO.prototype, "teaserRewardIDs", {
    get: function () {
      return this._teaserRewardIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementVO.prototype, "messageRewardID", {
    get: function () {
      return this._messageRewardID;
    },
    enumerable: true,
    configurable: true
  });
  return EventAnnouncementVO;
}();
exports.EventAnnouncementVO = __s0local0;

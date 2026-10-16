Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_dc21bc5945239ede = require("gge-module:exact_dc21bc5945239ede");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function EventStarterAnnouncementDialogProperties(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.popUpId = 0;
    __s3local0.popUpId = __s3param0;
    __s3local0.eventID = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EventStarterAnnouncementDialogProperties, __s1param0);
  Object.defineProperty(EventStarterAnnouncementDialogProperties.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this.eventID);
    },
    enumerable: true,
    configurable: true
  });
  EventStarterAnnouncementDialogProperties.prototype.getRemainingTime = function () {
    if (this.eventVO) {
      return this.eventVO.remainingEventTimeInSeconds;
    } else {
      return 0;
    }
  };
  EventStarterAnnouncementDialogProperties.prototype.getTitleTextID = function () {
    return "dialog_event_announcement_header_" + this.eventID;
  };
  EventStarterAnnouncementDialogProperties.prototype.getDescriptionTextID = function () {
    return "dialog_event_announcement_description_" + this.eventID;
  };
  return EventStarterAnnouncementDialogProperties;
}(__dep_exact_dc21bc5945239ede.BasicProperties);
exports.EventStarterAnnouncementDialogProperties = __s0local0;

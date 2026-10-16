Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_TrackingEventIds = require("gge-module:class_TrackingEventIds");
var __dep_class_BasicTrackingEvent = require("gge-module:class_BasicTrackingEvent");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = function (__s1param0) {
  function DesktopDeviceInformationTrackingEvent(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.playerId = 0;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(DesktopDeviceInformationTrackingEvent, __s1param0);
  DesktopDeviceInformationTrackingEvent.prototype.getVars = function () {
    var __s5local0 = {
      eventId: __dep_class_TrackingEventIds.TrackingEventIds.DESKTOP_DEVICE_INFORMATION,
      event_mapping_version: 2,
      playerId: this.playerId,
      screenResolutionX: __dep_export_CSSMouseCursor.Capabilities.screenResolutionX,
      screenResolutionY: __dep_export_CSSMouseCursor.Capabilities.screenResolutionY,
      browserString: __dep_export_CSSMouseCursor.Capabilities.version,
      desktopOs: __dep_export_CSSMouseCursor.Capabilities.os,
      flashVersion: ""
    };
    return __s5local0;
  };
  return DesktopDeviceInformationTrackingEvent;
}(__dep_class_BasicTrackingEvent.BasicTrackingEvent);
exports.DesktopDeviceInformationTrackingEvent = __s0local0;

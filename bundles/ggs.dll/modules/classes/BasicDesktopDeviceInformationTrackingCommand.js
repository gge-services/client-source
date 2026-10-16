Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_TrackingEventIds = require("gge-module:class_TrackingEventIds");
var __dep_class_TrackingCache = require("gge-module:class_TrackingCache");
var __dep_class_BasicTrackingCommand = require("gge-module:class_BasicTrackingCommand");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __s0local0 = function (__s1param0) {
  function BasicDesktopDeviceInformationTrackingCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicDesktopDeviceInformationTrackingCommand, __s1param0);
  BasicDesktopDeviceInformationTrackingCommand.prototype.execute = function (__s5param0 = null) {
    __dep_class_TrackingCache.TrackingCache.getInstance().getEvent(__dep_class_TrackingEventIds.TrackingEventIds.DESKTOP_DEVICE_INFORMATION).playerId = __dep_class_BasicModel.BasicModel.userData.playerID;
    __dep_class_TrackingCache.TrackingCache.getInstance().sendEvent(__dep_class_TrackingEventIds.TrackingEventIds.DESKTOP_DEVICE_INFORMATION);
  };
  return BasicDesktopDeviceInformationTrackingCommand;
}(__dep_class_BasicTrackingCommand.BasicTrackingCommand);
exports.BasicDesktopDeviceInformationTrackingCommand = __s0local0;

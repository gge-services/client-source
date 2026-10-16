Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_export_AllianceCreate = require("gge-module:export_AllianceCreate");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __s0local0 = function (__s1param0) {
  function ProfilingTrackingEvent(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.downloadSpeed = 0;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(ProfilingTrackingEvent, __s1param0);
  ProfilingTrackingEvent.prototype.getVars = function () {
    var __s5local0 = {
      eventId: __dep_export_AllianceCreate.Profiling.ID,
      event_mapping_version: 2,
      playerId: __dep_class_BasicModel.BasicModel.userData ? __dep_class_BasicModel.BasicModel.userData.playerID : -1,
      level: this.level,
      dlr: this.downloadSpeed,
      fps: this.fps,
      deviceId: this.deviceId,
      storeId: this.storeId,
      connectionType: this.connectionType,
      maxFps: this.maxFps,
      memoryUsage: this.memoryUsage
    };
    __s5local0.user_agent = navigator.userAgent || "Not available";
    __s5local0.session_length_ms = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.sessionLength * 1000;
    return __s5local0;
  };
  return ProfilingTrackingEvent;
}(require("gge-module:class_BasicTrackingEvent").BasicTrackingEvent);
exports.ProfilingTrackingEvent = __s0local0;

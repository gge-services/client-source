Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_MeasurementResultsEvent = require("gge-module:class_MeasurementResultsEvent");
var __dep_export_AllianceCreate = require("gge-module:export_AllianceCreate");
var __s0local0 = function (__s1param0) {
  function InGamePerformanceEvent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(InGamePerformanceEvent, __s1param0);
  InGamePerformanceEvent.prototype.getVars = function () {
    var __s5local0 = __s1param0.prototype.getVars.call(this);
    return {
      animations: this.animations,
      eventId: __dep_export_AllianceCreate.InGamePerformance.ID,
      fps: this.fps,
      inGameState: this.inGameState,
      maxFps: this.maxFps,
      minFps: this.minFps,
      buildVersion: __s5local0.buildVersion,
      connectionType: __s5local0.connectionType,
      deviceId: __s5local0.deviceId,
      level: __s5local0.level,
      measurementDuration: __s5local0.measurementDuration,
      memoryUsage: __s5local0.memoryUsage,
      playerId: __s5local0.playerId,
      sessionId: parseInt(__s5local0.sessionId, 10),
      sessionTime: __s5local0.sessionTime,
      storeId: __s5local0.storeId
    };
  };
  return InGamePerformanceEvent;
}(__dep_class_MeasurementResultsEvent.MeasurementResultsEvent);
exports.InGamePerformanceEvent = __s0local0;

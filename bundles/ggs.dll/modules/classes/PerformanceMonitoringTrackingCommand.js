Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_TrackingCache = require("gge-module:class_TrackingCache");
var __dep_class_TrackingEventIds = require("gge-module:class_TrackingEventIds");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("PerformanceMonitoringTrackingCommand");
var __s0local1 = function () {
  function PerformanceMonitoringTrackingCommand() {}
  PerformanceMonitoringTrackingCommand.prototype.performTracking = function (__s5param0, __s5param1) {
    __s0local0.debug(__s5param0);
    if (PerformanceMonitoringTrackingCommand.ALLOW_EXECUTION === undefined) {
      PerformanceMonitoringTrackingCommand.ALLOW_EXECUTION = !!__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.isTest || Math.random() * 100 <= PerformanceMonitoringTrackingCommand.TRACK_ONLY_PERC;
    }
    if (PerformanceMonitoringTrackingCommand.ALLOW_EXECUTION) {
      var __s5local0 = __dep_class_TrackingCache.TrackingCache.getInstance().getEvent(__dep_class_TrackingEventIds.TrackingEventIds.PROFILING);
      __s5local0.level = __s5param1;
      __s5local0.fps = __s5param0.averageFPS;
      __s5local0.maxFps = __s5param0.maxFps;
      __s5local0.memoryUsage = window.performance && window.performance.memory && window.performance.memory.usedJSHeapSize || 0;
      __s5local0.storeId = __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.storeId;
      __dep_class_TrackingCache.TrackingCache.getInstance().sendEvent(__dep_class_TrackingEventIds.TrackingEventIds.PROFILING);
    }
  };
  PerformanceMonitoringTrackingCommand.TRACK_ONLY_PERC = 100;
  PerformanceMonitoringTrackingCommand.ALLOW_EXECUTION = undefined;
  return PerformanceMonitoringTrackingCommand;
}();
exports.PerformanceMonitoringTrackingCommand = __s0local1;

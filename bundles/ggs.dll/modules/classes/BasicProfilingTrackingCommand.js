Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_SimpleCommand = require("gge-module:class_SimpleCommand");
var __dep_class_PerformanceMonitoringService = require("gge-module:class_PerformanceMonitoringService");
var __dep_class_TrackingCache = require("gge-module:class_TrackingCache");
var __dep_class_TrackingEventIds = require("gge-module:class_TrackingEventIds");
var __s0local0 = function (__s1param0) {
  function BasicProfilingTrackingCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicProfilingTrackingCommand, __s1param0);
  BasicProfilingTrackingCommand.prototype.execute = function (__s5param0 = null) {
    var __s5local0 = __s5param0;
    var __s5local1 = __dep_class_PerformanceMonitoringService.PerformanceMonitoringService.getInstance();
    __s5local1.startMonitoring(__s5local0.measurements);
    __s5local1.onMeasurementFinished.add(function () {
      __dep_class_TrackingCache.TrackingCache.getInstance().getEvent(__dep_class_TrackingEventIds.TrackingEventIds.PROFILING);
      var __s7local0 = __s5local1.performanceMonitoringProxy.averageMeasurementResults;
      __s5local1.trackingCommand.performTracking(__s7local0, __dep_class_BasicModel.BasicModel.userData.userLevel);
      __s5local1.externalLogCommand.performLog(__s7local0, 1);
    });
  };
  return BasicProfilingTrackingCommand;
}(__dep_class_SimpleCommand.SimpleCommand);
exports.BasicProfilingTrackingCommand = __s0local0;

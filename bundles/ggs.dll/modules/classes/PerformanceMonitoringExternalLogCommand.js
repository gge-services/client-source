Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_ExternalLog = require("gge-module:class_ExternalLog");
var __dep_class_PerformanceMonitoringLogLOFactory = require("gge-module:class_PerformanceMonitoringLogLOFactory");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __s0local0 = require("gge-module:export_LoggerConfigurator").getLogger("PerformanceMonitoringExternalLogCommand");
var __s0local1 = function () {
  function PerformanceMonitoringExternalLogCommand(__s3param0) {
    this._userLevel = 1;
    this._type = __s3param0;
  }
  PerformanceMonitoringExternalLogCommand.prototype.performLog = function (__s5param0, __s5param1) {
    __s0local0.debug(__s5param0);
    if (PerformanceMonitoringExternalLogCommand.ALLOW_EXECUTION === undefined) {
      PerformanceMonitoringExternalLogCommand.ALLOW_EXECUTION = !!__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.isTest || Math.random() * 100 <= PerformanceMonitoringExternalLogCommand.LOG_PERC;
    }
    if (PerformanceMonitoringExternalLogCommand.ALLOW_EXECUTION) {
      __dep_class_ExternalLog.ExternalLog.logger.log(new __dep_class_PerformanceMonitoringLogLOFactory.PerformanceMonitoringLogLOFactory(__dep_class_PerformanceMonitoringLogLOFactory.PerformanceMonitoringLogLOFactory.AVERAGE_MEASUREMENT_DATA, __s5param0, this._userLevel, __s5param1, this._type, __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.sessionLength * 1000));
    }
  };
  Object.defineProperty(PerformanceMonitoringExternalLogCommand.prototype, "userLevel", {
    set: function (__s9param0) {
      this._userLevel = __s9param0;
    },
    enumerable: true,
    configurable: true
  });
  PerformanceMonitoringExternalLogCommand.LOG_PERC = 5;
  PerformanceMonitoringExternalLogCommand.ALLOW_EXECUTION = undefined;
  return PerformanceMonitoringExternalLogCommand;
}();
exports.PerformanceMonitoringExternalLogCommand = __s0local1;

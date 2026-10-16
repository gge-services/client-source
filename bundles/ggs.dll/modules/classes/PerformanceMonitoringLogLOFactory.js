Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_ExternalLoggingConstants = require("gge-module:class_ExternalLoggingConstants");
var __dep_exact_9fb3e1d9bd3c12ef = require("gge-module:exact_9fb3e1d9bd3c12ef");
var __s0local0 = function (__s1param0) {
  function PerformanceMonitoringLogLOFactory(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._subErrorId = __s3param0;
    __s3local0._averageMeasurementResults = __s3param1;
    __s3local0._userLevel = __s3param2;
    __s3local0._performanceCategory = __s3param3;
    __s3local0._type = __s3param4;
    __s3local0._sessionLengthMs = __s3param5;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(PerformanceMonitoringLogLOFactory, __s1param0);
  PerformanceMonitoringLogLOFactory.prototype.create = function () {
    var __s5local0 = __s1param0.prototype.create.call(this);
    __s5local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_LOG_TYPE, __dep_class_ExternalLoggingConstants.ExternalLoggingConstants.LOGGING_TYPE_LOG.toString());
    __s5local0.logData.set(__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, PerformanceMonitoringLogLOFactory.PERFORMANCE_MONITORING_LOG.toString());
    __s5local0.logData.set(PerformanceMonitoringLogLOFactory.PARAM_FPS, this._averageMeasurementResults.averageFPS.toString());
    __s5local0.logData.set(PerformanceMonitoringLogLOFactory.PARAM_MAX_FPS, this._averageMeasurementResults.maxFps.toString());
    __s5local0.logData.set(PerformanceMonitoringLogLOFactory.PARAM_TOTAL_MEMORY_USAGE, this._averageMeasurementResults.averageTotalMemoryUsageInMB.toString());
    __s5local0.logData.set(PerformanceMonitoringLogLOFactory.PARAM_PRIVATE_MEMORY_USAGE, this._averageMeasurementResults.averagePrivateMemoryUsageInMB.toString());
    __s5local0.logData.set(PerformanceMonitoringLogLOFactory.PARAM_USER_LEVEL, this._userLevel.toString());
    __s5local0.logData.set(PerformanceMonitoringLogLOFactory.PARAM_SESSION_LENGTH_MS, this._sessionLengthMs.toString());
    if (this._type === __dep_exact_9fb3e1d9bd3c12ef.PerformanceMonitoringEnvTypeEnum.Mobile) {
      __s5local0.logData.set(PerformanceMonitoringLogLOFactory.PARAM_PERFORMANCE_CATEGORY, this._performanceCategory.toString());
      __s5local0.logData.set(PerformanceMonitoringLogLOFactory.PARAM_DOWNLOAD_RATE, this._averageMeasurementResults.downloadRateInKBs.toString());
      __s5local0.logData.set(PerformanceMonitoringLogLOFactory.PARAM_DOWNLOAD_CONTENT_AMOUNT_EXTERNAL, this._averageMeasurementResults.downloadContentAmountExternal.toString());
      __s5local0.logData.set(PerformanceMonitoringLogLOFactory.PARAM_DOWNLOAD_CONTENT_AMOUNT_LOCAL, this._averageMeasurementResults.downloadContentAmountLocal.toString());
      __s5local0.logData.set(PerformanceMonitoringLogLOFactory.PARAM_DOWNLOAD_CONTENT_SIZE_EXTERNAL, this._averageMeasurementResults.downloadContentSizeExternalInKB.toString());
      __s5local0.logData.set(PerformanceMonitoringLogLOFactory.PARAM_DOWNLOAD_CONTENT_SIZE_LOCAL, this._averageMeasurementResults.downloadContentSizeLocalInKB.toString());
      __s5local0.logData.set(PerformanceMonitoringLogLOFactory.PARAM_LOGIN_TIME, this._averageMeasurementResults.loginTime.toString());
    }
    return __s5local0;
  };
  PerformanceMonitoringLogLOFactory.AVERAGE_MEASUREMENT_DATA = 40001;
  PerformanceMonitoringLogLOFactory.PERFORMANCE_MONITORING_LOG = 40;
  PerformanceMonitoringLogLOFactory.PARAM_FPS = "fps";
  PerformanceMonitoringLogLOFactory.PARAM_MAX_FPS = "maxFps";
  PerformanceMonitoringLogLOFactory.PARAM_TOTAL_MEMORY_USAGE = "totalMemoryUsageInMB";
  PerformanceMonitoringLogLOFactory.PARAM_PRIVATE_MEMORY_USAGE = "privateMemoryUsageInMB";
  PerformanceMonitoringLogLOFactory.PARAM_PERFORMANCE_CATEGORY = "performanceCategory";
  PerformanceMonitoringLogLOFactory.PARAM_USER_LEVEL = "userLevel";
  PerformanceMonitoringLogLOFactory.PARAM_DOWNLOAD_RATE = "downloadRateInKBs";
  PerformanceMonitoringLogLOFactory.PARAM_DOWNLOAD_CONTENT_AMOUNT_EXTERNAL = "downloadContentAmountExternal";
  PerformanceMonitoringLogLOFactory.PARAM_DOWNLOAD_CONTENT_AMOUNT_LOCAL = "downloadContentAmountLocal";
  PerformanceMonitoringLogLOFactory.PARAM_DOWNLOAD_CONTENT_SIZE_EXTERNAL = "downloadContentSizeExternalInKB";
  PerformanceMonitoringLogLOFactory.PARAM_DOWNLOAD_CONTENT_SIZE_LOCAL = "downloadContentSizeLocalInKB";
  PerformanceMonitoringLogLOFactory.PARAM_LOGIN_TIME = "loginTime";
  PerformanceMonitoringLogLOFactory.PARAM_SESSION_LENGTH_MS = "sessionLengthMs";
  return PerformanceMonitoringLogLOFactory;
}(require("gge-module:class_BasicLogObjectFactory").BasicLogObjectFactory);
exports.PerformanceMonitoringLogLOFactory = __s0local0;

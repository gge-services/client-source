Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_exact_02dda2200f38d991 = require("gge-module:exact_02dda2200f38d991");
var __dep_class_ExternalLoggingConstants = require("gge-module:class_ExternalLoggingConstants");
var __s0local0 = function (__s1param0) {
  function MeasurementLogFactory(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.logger = __dep_export_LoggerConfigurator.getLogger(__dep_exact_02dda2200f38d991.FPS_MEASUREMENT_LOGGER);
    __s3local0._subErrorId = 40002;
    __s3local0._eventData = __s3param0;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(MeasurementLogFactory, __s1param0);
  MeasurementLogFactory.prototype.create = function () {
    this._log = __s1param0.prototype.create.call(this);
    this.setLogData();
    this.logger.debug("Executing old method, result not guaranteed");
    return this._log;
  };
  MeasurementLogFactory.prototype.setLogData = function () {
    this._log.logData[__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_LOG_TYPE] = __dep_class_ExternalLoggingConstants.ExternalLoggingConstants.LOGGING_TYPE_LOG;
    this._log.logData[__dep_class_ExternalLoggingConstants.ExternalLoggingConstants.PARAM_LOG_EVENT_ID] = MeasurementLogFactory.PERFORMANCE_MONITORING_LOG;
    for (var __s7local0 in this._eventData) {
      this._log.logData[__s7local0] = this._eventData[__s7local0];
    }
    this.logger.debug("Executing old method, result not guaranteed");
  };
  MeasurementLogFactory.PERFORMANCE_MONITORING_LOG = 40;
  return MeasurementLogFactory;
}(require("gge-module:class_BasicLogObjectFactory").BasicLogObjectFactory);
exports.MeasurementLogFactory = __s0local0;

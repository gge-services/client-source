Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_02dda2200f38d991 = require("gge-module:exact_02dda2200f38d991");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __s0local0 = function () {
  function FpsMeasurementTrackingEventHandler() {
    this.logger = __dep_export_LoggerConfigurator.getLogger(__dep_exact_02dda2200f38d991.FPS_MEASUREMENT_LOGGER);
  }
  FpsMeasurementTrackingEventHandler.prototype.parse = function (__s5param0, __s5param1, __s5param2) {
    this.logger.debug("FpsMeasurementTrackingEventHandler.parse is not implemented yet");
  };
  FpsMeasurementTrackingEventHandler.prototype.send = function () {
    this.logger.debug("FpsMeasurementTrackingEventHandler.send is not implemented yet");
  };
  return FpsMeasurementTrackingEventHandler;
}();
exports.FpsMeasurementTrackingEventHandler = __s0local0;

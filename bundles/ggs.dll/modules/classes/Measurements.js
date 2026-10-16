Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_02dda2200f38d991 = require("gge-module:exact_02dda2200f38d991");
var __dep_export_MeasurementFacade = require("gge-module:export_MeasurementFacade");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __s0local0 = function () {
  function Measurements() {
    this.logger = __dep_export_LoggerConfigurator.getLogger(__dep_exact_02dda2200f38d991.FPS_MEASUREMENT_LOGGER);
  }
  Measurements.createMeasurement = function (__s5param0, __s5param1, __s5param2 = null, __s5param3 = null) {
    var __s5local0 = new __dep_export_MeasurementFacade.MeasurementFacade();
    __dep_export_LoggerConfigurator.getLogger("FPSMeasurement").debug("Measurements.createMeasurement is not implemented yet");
    return __s5local0;
  };
  Measurements.getMeasurement = function (__s7param0) {
    var __s7local0 = new __dep_export_MeasurementFacade.MeasurementFacade();
    __dep_export_LoggerConfigurator.getLogger("FPSMeasurement").debug("Measurements.getMeasurement is not implemented yet");
    return __s7local0;
  };
  Measurements.removeMeasurement = function (__s9param0) {
    __dep_export_LoggerConfigurator.getLogger("FPSMeasurement").debug("Measurements.removeMeasurement is not implemented yet");
  };
  Measurements.removeMeasurementsOf = function (__s11param0) {
    __dep_export_LoggerConfigurator.getLogger("FPSMeasurement").debug("Measurements.removeMeasurementsOf is not implemented yet");
  };
  return Measurements;
}();
exports.Measurements = __s0local0;

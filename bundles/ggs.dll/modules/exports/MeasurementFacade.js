Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_02dda2200f38d991 = require("gge-module:exact_02dda2200f38d991");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __s0local0 = function () {
  function MeasurementFacade() {
    this.logger = __dep_export_LoggerConfigurator.getLogger(__dep_exact_02dda2200f38d991.FPS_MEASUREMENT_LOGGER);
  }
  MeasurementFacade.prototype.start = function (__s5param0) {
    this.logger.debug("MeasurementFacade.start is not implemented yet");
  };
  MeasurementFacade.prototype.stop = function (__s7param0) {
    this.logger.debug("MeasurementFacade.stop is not implemented yet");
  };
  MeasurementFacade.prototype.activate = function () {
    this.logger.debug("MeasurementFacade.activate is not implemented yet");
  };
  MeasurementFacade.prototype.deactivate = function () {
    this.logger.debug("MeasurementFacade.deactivate is not implemented yet");
  };
  return MeasurementFacade;
}();
exports.MeasurementFacade = __s0local0;

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_02dda2200f38d991 = require("gge-module:exact_02dda2200f38d991");
var __dep_export_FpsMeasurementResults = require("gge-module:export_FpsMeasurementResults");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __s0local0 = createjs.Shape;
var __s0local1 = createjs.Event;
var __s0local2 = function () {
  function FpsMeasurement() {
    this.logger = __dep_export_LoggerConfigurator.getLogger(__dep_exact_02dda2200f38d991.FPS_MEASUREMENT_LOGGER);
    this._counterAsShape = new __s0local0();
    this._samples = [];
  }
  FpsMeasurement.prototype.start = function (__s5param0 = null) {
    this.cleanupSamples();
    this._samplingTime = Date.now();
    this._framesNumber = 0;
    this._counterAsShape.addEventListener(__s0local1.ENTER_FRAME, this.bindFunction(this.measure));
    this.logger.debug("Executing old method, result not guaranteed");
  };
  FpsMeasurement.prototype.stop = function (__s7param0 = null) {
    this._counterAsShape.removeEventListener(__s0local1.ENTER_FRAME, this.bindFunction(this.measure));
    this.logger.debug("Executing old method, result not guaranteed");
  };
  FpsMeasurement.prototype.dispose = function () {
    if (this._counterAsShape) {
      this._counterAsShape.removeEventListener(__s0local1.ENTER_FRAME, this.bindFunction(this.measure));
      this._counterAsShape = null;
    }
    this.logger.debug("Executing old method, result not guaranteed");
  };
  Object.defineProperty(FpsMeasurement.prototype, "results", {
    get: function () {
      var __s12local0 = new __dep_export_FpsMeasurementResults.FpsMeasurementResults();
      __s12local0.minFps = Math.min.apply(null, this._samples);
      __s12local0.maxFps = Math.max.apply(null, this._samples);
      __s12local0.averageFps = (__s12local0.minFps + __s12local0.maxFps) * 0.5;
      this.logger.debug("Executing old method, result not guaranteed");
      return __s12local0;
    },
    enumerable: true,
    configurable: true
  });
  FpsMeasurement.prototype.cleanupSamples = function () {
    while (this._samples.length > 0) {
      this._samples.shift();
    }
    this.logger.debug("Executing old method, result not guaranteed");
  };
  FpsMeasurement.prototype.measure = function (__s18param0) {
    var __s18local0 = Date.now() - this._samplingTime;
    this._framesNumber++;
    if (__s18local0 > 1000) {
      this._fps = this._framesNumber * 1000 / __s18local0;
      this._samples.push(this._fps);
      this._samplingTime = Date.now();
      this._framesNumber = 0;
      this._samplesSum += this._fps;
    }
    this.logger.debug("Executing old method, result not guaranteed");
  };
  return FpsMeasurement;
}();
exports.FpsMeasurement = __s0local2;

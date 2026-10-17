// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: ggs.dll; Webpack module: 120
// Export: PerformanceMonitoringService; preserved source: modules/webpack/classes/PerformanceMonitoringService.js
// Original canonical SHA-256: b246d8bd87915b5a1e4c671065774973bc3aa229039305a9229e112caecc4f81
var __s0local2 = function () {
  function PerformanceMonitoringService() {
    this._isInitialized = false;
    this._isPaused = false;
    this.onMeasurementFinished = new __dep_class_NoneValueSignal.NoneValueSignal();
    this._defaultMeasurements = [new __dep_class_MeasurementVO.MeasurementVO(5, 4, 40, 300)];
    if (PerformanceMonitoringService._PerformanceMonitoringService) {
      throw new Error("Calling constructor not allowed! Use getInstance instead.");
    }
  }
  PerformanceMonitoringService.getInstance = function () {
    if (PerformanceMonitoringService._PerformanceMonitoringService == null) {
      PerformanceMonitoringService._PerformanceMonitoringService = new PerformanceMonitoringService();
    }
    return PerformanceMonitoringService._PerformanceMonitoringService;
  };
  PerformanceMonitoringService.prototype.init = function (__s11param0, __s11param1) {
    if (this._isInitialized) {
      __s0local1.debug("PerformanceMonitoringService already initialized");
    } else {
      this.trackingCommand = new __dep_class_PerformanceMonitoringTrackingCommand.PerformanceMonitoringTrackingCommand();
      this.externalLogCommand = new __dep_class_PerformanceMonitoringExternalLogCommand.PerformanceMonitoringExternalLogCommand(__s11param0);
      this.performanceMonitoringProxy = new __dep_class_PerformanceMonitoringProxy.PerformanceMonitoringProxy();
      this._isInitialized = true;
    }
  };
  PerformanceMonitoringService.prototype.startMonitoring = function (__s15param0) {
    __s0local1.debug("PerformanceMonitoringService::startMonitoring");
    if (__s15param0 && __s15param0.length > 0) {
      this._measurements = __s15param0;
    } else {
      this._measurements = this._defaultMeasurements;
    }
    this._startedAt = Date.now();
    this._currentMeasurementIndex = 0;
    this._currentMeasurement = this._measurements[this._currentMeasurementIndex];
    this.startMeasurement();
  };
  PerformanceMonitoringService.prototype.stopMonitoring = function () {
    __s0local1.debug("PerformanceMonitoringService::STOP MONITORING");
    this.disposeSingleMeasurementTimer();
    clearTimeout(this._coolDownTimerId);
  };
  Object.defineProperty(PerformanceMonitoringService.prototype, "pause", {
    set: function (__s21param0) {
      if (__s21param0 == 1) {
        __s0local1.debug("PerformanceMonitoringService::measurements paused");
        this.performanceMonitoringProxy.pauseLoginTimeCounter();
      } else {
        __s0local1.debug("PerformanceMonitoringService::measurements resumed");
        this.performanceMonitoringProxy.resumeLoginTimeCounter();
      }
      this._isPaused = __s21param0;
    },
    enumerable: true,
    configurable: true
  });
  PerformanceMonitoringService.prototype.startMeasurement = function () {
    if (this._currentMeasurement) {
      __s0local1.debug("PerformanceMonitoringService::startMeasurement will now collect " + this._currentMeasurement.measurements + " measurements (one every " + this._currentMeasurement.intervalBetweenMeasurements + " secs)");
      clearTimeout(this._coolDownTimerId);
      this.disposeSingleMeasurementTimer();
      this.performanceMonitoringProxy.resetMeasurements();
      this.onSingleMeasurement();
      this._singleMeasurementTimer = new __dep_export_CSSMouseCursor.Timer(this._currentMeasurement.intervalBetweenMeasurements * 1000, this._currentMeasurement.measurements);
      this._singleMeasurementTimer.addEventListener(__s0local0.TIMER, this.bindFunction(this.onSingleMeasurement));
      this._singleMeasurementTimer.addEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onMeasurementsCompleted));
      this._singleMeasurementTimer.start();
    } else {
      this.stopMonitoring();
    }
  };
  PerformanceMonitoringService.prototype.onSingleMeasurement = function (__s29param0 = null) {
    if (!this._isPaused) {
      this.performanceMonitoringProxy.measure();
    }
  };
  PerformanceMonitoringService.prototype.onMeasurementsCompleted = function (__s32param0) {
    var __s32local0 = this;
    __s0local1.debug("PerformanceMonitoringService::FINISHED MONITORING");
    this.onMeasurementFinished.signal();
    this._coolDownTimerId = window.setTimeout(function () {
      if (Date.now() - __s32local0._startedAt > __s32local0._currentMeasurement.runUntil * 1000) {
        __s32local0._currentMeasurementIndex++;
        if (__s32local0._measurements[__s32local0._currentMeasurementIndex]) {
          __s32local0._currentMeasurement = __s32local0._measurements[__s32local0._currentMeasurementIndex];
        } else {
          __s32local0._currentMeasurement = null;
        }
      }
      __s32local0.startMeasurement();
    }, this._currentMeasurement.waitFor * 1000);
  };
  PerformanceMonitoringService.prototype.disposeSingleMeasurementTimer = function () {
    if (this._singleMeasurementTimer) {
      this._singleMeasurementTimer.stop();
      this._singleMeasurementTimer.removeEventListener(__s0local0.TIMER, this.onSingleMeasurement);
      this._singleMeasurementTimer.removeEventListener(__s0local0.TIMER_COMPLETE, this.onMeasurementsCompleted);
      this._singleMeasurementTimer = null;
    }
  };
  return PerformanceMonitoringService;
}();
exports.PerformanceMonitoringService = __s0local2;

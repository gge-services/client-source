Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_PerformanceMonitoringVO = require("gge-module:class_PerformanceMonitoringVO");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __s0local0 = createjs.Ticker;
var __s0local1 = __dep_export_LoggerConfigurator.getLogger("CoreJS.PerformanceMonitoring.Proxy");
exports.isCurrentFrameRateBelowTargetFramerate = function (__s1param0 = 5) {
  return __s0local0.getMeasuredFPS() < __s0local0.framerate - __s1param0;
};
var __s0local2 = function () {
  function PerformanceMonitoringProxy() {
    this.measuredFpsList = [];
    this._loginPausedTimeInMs = 0;
    this._loginPauseStartTimeInMS = -1;
  }
  PerformanceMonitoringProxy.prototype.measure = function () {
    this.maxFps = __s0local0.framerate;
    var __s7local0 = __s0local0.getMeasuredFPS();
    __s0local1.debug("PerformanceMonitoringProxy::measure @ ", new Date(), __s7local0);
    this.measuredFpsList.push(__s7local0);
  };
  Object.defineProperty(PerformanceMonitoringProxy.prototype, "averageMeasurementResults", {
    get: function () {
      var __s9local0 = new __dep_class_PerformanceMonitoringVO.PerformanceMonitoringVO();
      __s9local0.averageFPS = this.averageFps;
      __s9local0.maxFps = this.maxFps;
      __s0local1.debug("PerformanceMonitoringProxy::averageMeasurementResults ", __s9local0);
      return __s9local0;
    },
    enumerable: true,
    configurable: true
  });
  PerformanceMonitoringProxy.prototype.resetMeasurements = function () {
    while (this.measuredFpsList.length > 0) {
      this.measuredFpsList.pop();
    }
  };
  Object.defineProperty(PerformanceMonitoringProxy.prototype, "averageFps", {
    get: function () {
      var __s15local0;
      var __s15local1 = this.measuredFpsList.length > 0 ? (__s15local0 = this.measuredFpsList).reduce(function (__s17param0, __s17param1) {
        return __s17param0 + __s17param1;
      }) / __s15local0.length : __s0local0.getMeasuredFPS();
      __s15local1 = Math.round(__s15local1);
      __s0local1.debug("current target framerate " + __s0local0.framerate + " -   current avarage framerate " + __s15local1 + "  }");
      return __s15local1;
    },
    enumerable: true,
    configurable: true
  });
  PerformanceMonitoringProxy.prototype.isAvarageFrameRateBelowTargetFramerate = function (__s19param0 = 5) {
    return this.averageFps < __s0local0.framerate - __s19param0;
  };
  Object.defineProperty(PerformanceMonitoringProxy.prototype, "loginTime", {
    get: function () {
      __s0local1.debug("until logic and requirements of loginTime is understood i am returning milliseconds elapsed since first initialization of game");
      return __s0local0.getTime();
    },
    enumerable: true,
    configurable: true
  });
  PerformanceMonitoringProxy.prototype.pauseLoginTimeCounter = function () {
    if (this._loginPauseStartTimeInMS < 0) {
      this._loginPauseStartTimeInMS = Date.now();
    }
  };
  PerformanceMonitoringProxy.prototype.resumeLoginTimeCounter = function () {
    if (this._loginPauseStartTimeInMS >= 0) {
      this._loginPausedTimeInMs += Date.now() - this._loginPauseStartTimeInMS;
      this._loginPauseStartTimeInMS = -1;
    }
  };
  return PerformanceMonitoringProxy;
}();
exports.PerformanceMonitoringProxy = __s0local2;

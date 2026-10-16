Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_class_ClientFunnelGameStates = require("gge-module:class_ClientFunnelGameStates");
var __dep_export_ClientFunnelPlayTimeStateVO = require("gge-module:export_ClientFunnelPlayTimeStateVO");
__dep_export_LoggerConfigurator.getLogger("Tracking.ClientFunnelPlayTimeController");
var __s0local0 = [new __dep_export_ClientFunnelPlayTimeStateVO.ClientFunnelPlayTimeStateVO(0.5, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.PLAYTIME_0_5_MINUTES), new __dep_export_ClientFunnelPlayTimeStateVO.ClientFunnelPlayTimeStateVO(1, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.PLAYTIME_X_MINUTES_1), new __dep_export_ClientFunnelPlayTimeStateVO.ClientFunnelPlayTimeStateVO(2, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.PLAYTIME_X_MINUTES_2), new __dep_export_ClientFunnelPlayTimeStateVO.ClientFunnelPlayTimeStateVO(5, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.PLAYTIME_X_MINUTES_5), new __dep_export_ClientFunnelPlayTimeStateVO.ClientFunnelPlayTimeStateVO(10, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.PLAYTIME_X_MINUTES_10), new __dep_export_ClientFunnelPlayTimeStateVO.ClientFunnelPlayTimeStateVO(15, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.PLAYTIME_X_MINUTES_15), new __dep_export_ClientFunnelPlayTimeStateVO.ClientFunnelPlayTimeStateVO(30, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.PLAYTIME_X_MINUTES_30), new __dep_export_ClientFunnelPlayTimeStateVO.ClientFunnelPlayTimeStateVO(45, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.PLAYTIME_X_MINUTES_45), new __dep_export_ClientFunnelPlayTimeStateVO.ClientFunnelPlayTimeStateVO(60, __dep_class_ClientFunnelGameStates.ClientFunnelGameStates.PLAYTIME_X_MINUTES_60)];
var __s0local1 = function () {
  function ClientFunnelPlayTimeController(__s3param0, __s3param1) {
    var __s3local0 = this;
    this._stage = __s3param0;
    this._trackStateHandler = __s3param1;
    this._timeoutId = undefined;
    this._currentPlayTimeIndex = 0;
    this._startTime = 0;
    this._elapsedTime = 0;
    this._pauseTime = 0;
    this._resumeTime = 0;
    this.timerHandler = function () {
      if (__s3local0._currentPlayTimeIndex < __s0local0.length) {
        __s3local0._elapsedTime = __s0local0[__s3local0._currentPlayTimeIndex].timeDelayMilliseconds;
        __s3local0._trackStateHandler(__s0local0[__s3local0._currentPlayTimeIndex].eventState);
      }
      __s3local0._currentPlayTimeIndex++;
      if (__s3local0._currentPlayTimeIndex >= __s0local0.length) {
        __s3local0.dispose();
      } else {
        __s3local0._startTime = Date.now();
        __s3local0._timeoutId = window.setTimeout(__s3local0.timerHandler, __s3local0.currentDelay);
      }
    };
    this.visibilityHandler = function () {
      if (document[__s3local0._hiddenFlag]) {
        __s3local0.pausePlaytimeTracking();
      } else {
        __s3local0.resumePlaytimeTracking();
      }
    };
    if (!this._stage) {
      throw new Error("[ClientFunnelPlayTimeController] Stage must be defined");
    }
  }
  ClientFunnelPlayTimeController.prototype.start = function () {
    if (!this._timeoutId) {
      this._startTime = Date.now();
      this._elapsedTime = 0;
      this._currentPlayTimeIndex = 0;
      this._timeoutId = window.setTimeout(this.timerHandler, this.currentDelay);
      this.monitorVisibility();
    }
  };
  ClientFunnelPlayTimeController.prototype.monitorVisibility = function () {
    if (document.hidden !== undefined) {
      this._hiddenFlag = "hidden";
      this._visibilityChangeEvent = "visibilitychange";
    } else if (document.msHidden !== undefined) {
      this._hiddenFlag = "msHidden";
      this._visibilityChangeEvent = "msvisibilitychange";
    } else if (document.webkitHidden !== undefined) {
      this._hiddenFlag = "webkitHidden";
      this._visibilityChangeEvent = "webkitvisibilitychange";
    }
    document.addEventListener(this._visibilityChangeEvent, this.visibilityHandler, false);
  };
  ClientFunnelPlayTimeController.prototype.pausePlaytimeTracking = function () {
    this._pauseTime = Date.now();
    window.clearTimeout(this._timeoutId);
    this._timeoutId = undefined;
  };
  ClientFunnelPlayTimeController.prototype.resumePlaytimeTracking = function () {
    this._resumeTime = Date.now();
    this._timeoutId = window.setTimeout(this.timerHandler, this.currentDelay - (this._pauseTime - this._startTime));
    this._startTime += this._resumeTime - this._pauseTime;
  };
  ClientFunnelPlayTimeController.prototype.dispose = function () {
    if (this._timeoutId) {
      window.clearTimeout(this._timeoutId);
      this._timeoutId = undefined;
    }
    document.removeEventListener(this._visibilityChangeEvent, this.visibilityHandler);
  };
  Object.defineProperty(ClientFunnelPlayTimeController.prototype, "currentDelay", {
    get: function () {
      var __s30local0 = 0;
      if (this._currentPlayTimeIndex < __s0local0.length) {
        __s30local0 = __s0local0[this._currentPlayTimeIndex].timeDelayMilliseconds - this._elapsedTime;
      }
      return __s30local0;
    },
    enumerable: true,
    configurable: true
  });
  return ClientFunnelPlayTimeController;
}();
exports.ClientFunnelPlayTimeController = __s0local1;

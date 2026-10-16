Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __s0local0 = function () {
  function GZPTrackingController() {
    this._trackingTimeInterval = -1;
    this._isRunning = false;
  }
  GZPTrackingController.getInstance = function () {
    GZPTrackingController._instance ||= new GZPTrackingController();
    return GZPTrackingController._instance;
  };
  GZPTrackingController.prototype.startTracking = function () {
    if (this._isRunning) {
      this.stopTracking();
    }
    this._isRunning = true;
    this._trackingTimeInterval = this.getTimeInterval();
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
  };
  GZPTrackingController.prototype.onTickEvent = function (__s10param0) {
    if (this._trackingTimeInterval != -1) {
      this._trackingTimeInterval -= __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC;
      if (this.layoutManager.currentState == __dep_exact_9e901e8e2483a22f.BasicLayoutManager.STATE_CONNECT) {
        this.stopTracking();
      }
      if (this._isRunning && this._trackingTimeInterval <= 0) {
        __dep_exact_9e901e8e2483a22f.ClientFunnelTrackingController.getInstance().trackState(__dep_exact_9e901e8e2483a22f.ClientFunnelGameStates.GZP_RNG);
        this.stopTracking();
        this.startTracking();
      }
    }
  };
  GZPTrackingController.prototype.getTimeInterval = function () {
    var __s15local0 = Math.random() * (GZPTrackingController.MAX_INTERVAL - GZPTrackingController.MIN_INTERVAL + 1) + GZPTrackingController.MIN_INTERVAL;
    return Math.floor(__s15local0);
  };
  GZPTrackingController.prototype.stopTracking = function () {
    this._isRunning = false;
    this._trackingTimeInterval = -1;
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
  };
  Object.defineProperty(GZPTrackingController.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  GZPTrackingController.MAX_INTERVAL = 180000;
  GZPTrackingController.MIN_INTERVAL = 5000;
  return GZPTrackingController;
}();
exports.GZPTrackingController = __s0local0;

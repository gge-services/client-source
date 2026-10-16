Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_CommandController = require("gge-module:class_CommandController");
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_ConnectionTrackingCommandVO = require("gge-module:class_ConnectionTrackingCommandVO");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __s0local0 = createjs.TimerEvent;
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local1 = function () {
  function ConnectionTrackingUtil() {
    this._timers = new Array();
  }
  Object.defineProperty(ConnectionTrackingUtil, "instance", {
    get: function () {
      ConnectionTrackingUtil._instance ||= new ConnectionTrackingUtil();
      return ConnectionTrackingUtil._instance;
    },
    enumerable: true,
    configurable: true
  });
  ConnectionTrackingUtil.prototype.measureRTT = function (__s7param0) {
    this.startTimer(__s7param0);
  };
  ConnectionTrackingUtil.prototype.timerCompleteHandler = function (__s9param0) {
    var __s9local0 = __s9param0.target;
    this.disposeTimer(__s9local0);
    __dep_class_BasicModel.BasicModel.smartfoxClient.roundTripResponseSignal.addOnce(this.rttResponseHandler.bind(this, __s9local0.delay));
    __dep_class_BasicModel.BasicModel.smartfoxClient.executeRoundTrip();
  };
  ConnectionTrackingUtil.prototype.rttResponseHandler = function (__s11param0, __s11param1, __s11param2) {
    __dep_class_CommandController.CommandController.instance.executeCommand(__dep_class_BasicController.BasicController.COMMAND_TRACK_CONNECTION_TRACKING_EVENT, new __dep_class_ConnectionTrackingCommandVO.ConnectionTrackingCommandVO(__s11param0, __s11param1.toString(), __s11param2));
  };
  ConnectionTrackingUtil.prototype.startTimer = function (__s13param0) {
    var __s13local0 = new __dep_export_CSSMouseCursor.Timer(__s13param0, 1);
    __s13local0.addEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.timerCompleteHandler));
    __s13local0.start();
    this._timers.push(__s13local0);
  };
  ConnectionTrackingUtil.prototype.disposeTimer = function (__s15param0) {
    var __s15local0 = this._timers.indexOf(__s15param0);
    if (__s15local0 != -1) {
      (__s15param0 = this._timers.splice(__s15local0, 1)[0]).removeEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.timerCompleteHandler));
      __s15param0.stop();
    }
  };
  ConnectionTrackingUtil.prototype.dispose = function () {
    for (__dep_class_BasicModel.BasicModel.smartfoxClient.roundTripResponseSignal.removeAll(); this._timers.length;) {
      this.disposeTimer(this._timers[0]);
    }
  };
  ConnectionTrackingUtil.SECOND_CONNECTION_EVENT_DELAY = 60000;
  ConnectionTrackingUtil.THIRD_CONNECTION_EVENT_DELAY = 120000;
  return ConnectionTrackingUtil;
}();
exports.ConnectionTrackingUtil = __s0local1;

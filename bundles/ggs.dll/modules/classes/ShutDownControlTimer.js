Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_IdentityManagementConstants = require("gge-module:class_IdentityManagementConstants");
var __s0local0 = createjs.TimerEvent;
var __s0local1 = createjs.Text;
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __dep_exact_becd07da092f4a09 = require("gge-module:exact_becd07da092f4a09");
var __s0local2 = function () {
  function ShutDownControlTimer(__s3param0) {
    this.shutDownTimerText = new __s0local1();
    ShutDownControlTimer._secondsUntilShutDown = __s3param0;
    this.initCountDownTimer();
    this.showCountDownTimer = new __dep_exact_becd07da092f4a09.Signal();
    this.hideCountDownTimer = new __dep_exact_becd07da092f4a09.Signal();
  }
  ShutDownControlTimer.prototype.initCountDownTimer = function () {
    this.shutDownTimer = new __dep_export_CSSMouseCursor.Timer(1000, ShutDownControlTimer._secondsUntilShutDown);
  };
  ShutDownControlTimer.prototype.startCountDown = function () {
    this.startShutDownTimer();
  };
  ShutDownControlTimer.prototype.startShutDownTimer = function () {
    this.shutDownTimer.addEventListener(__s0local0.TIMER, this.bindFunction(this.onShutDownTimer));
    this.shutDownTimer.start();
  };
  ShutDownControlTimer.prototype.onShutDownTimer = function (__s11param0) {
    this.showCountDownTimer.dispatch();
    this.hideCountDown();
  };
  ShutDownControlTimer.prototype.hideCountDown = function () {
    this.shutDownTimer.addEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onShutDownTimerComplete));
  };
  ShutDownControlTimer.prototype.onShutDownTimerComplete = function (__s15param0) {
    this.hideCountDownTimer.dispatch();
  };
  ShutDownControlTimer.prototype.stopShutDownTimer = function () {
    this.showCountDownTimer.removeAll();
    this.hideCountDownTimer.removeAll();
    this.shutDownTimer.stop();
    this.shutDownTimer.removeEventListener(__s0local0.TIMER, this.bindFunction(this.onShutDownTimer));
    this.shutDownTimer.removeEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onShutDownTimerComplete));
  };
  Object.defineProperty(ShutDownControlTimer.prototype, "showTimerCountdown", {
    get: function () {
      var __s19local0 = Math.floor((__dep_class_IdentityManagementConstants.IdentityManagementConstants.SHUTDOWN_CONTROL_TIMER - this.shutDownTimer.currentCount) / 60);
      var __s19local1 = (__dep_class_IdentityManagementConstants.IdentityManagementConstants.SHUTDOWN_CONTROL_TIMER - this.shutDownTimer.currentCount) % 60;
      this.shutDownTimerText.text = __s19local1 >= 10 ? __s19local0 + ":" + __s19local1 : __s19local0 + ":0" + __s19local1;
      return this.shutDownTimerText.text.toString();
    },
    enumerable: true,
    configurable: true
  });
  ShutDownControlTimer.NAME = "ShutDownControlTimer";
  return ShutDownControlTimer;
}();
exports.ShutDownControlTimer = __s0local2;

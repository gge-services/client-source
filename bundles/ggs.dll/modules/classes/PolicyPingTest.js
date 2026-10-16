Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_ExternalLog = require("gge-module:class_ExternalLog");
var __dep_class_SocketErrorLOFactory = require("gge-module:class_SocketErrorLOFactory");
var __dep_exact_9036b0ddd67c3c6e = require("gge-module:exact_9036b0ddd67c3c6e");
var __s0local0 = createjs.TimerEvent;
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __dep_exact_becd07da092f4a09 = require("gge-module:exact_becd07da092f4a09");
var __s0local1 = function () {
  function PolicyPingTest(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5) {
    this.ip = __s3param0;
    this.port = __s3param1;
    this.blueBox = __s3param3;
    this.zone = __s3param2;
    this.testIsFinished = new __dep_exact_becd07da092f4a09.Signal();
    this.delay = __s3param4;
    this.playerId = __s3param5;
  }
  PolicyPingTest.prototype.startTimer = function () {
    this.delayTimer = new __dep_export_CSSMouseCursor.Timer(this.delay, 1);
    this.delayTimer.addEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.startTest));
    this.delayTimer.start();
  };
  PolicyPingTest.prototype.startTest = function (__s7param0) {
    this.disposeDelayTimer();
  };
  PolicyPingTest.prototype.disposeDelayTimer = function () {
    if (this.delayTimer) {
      this.delayTimer.stop();
      this.delayTimer.removeEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.startTest));
      this.delayTimer = null;
    }
  };
  PolicyPingTest.prototype.handleConnect = function (__s12param0) {
    __dep_exact_9036b0ddd67c3c6e.debug("successfully connected!");
    this.startTime = Date.now();
  };
  PolicyPingTest.prototype.handleData = function (__s14param0) {
    if (__s14param0.data.indexOf("policy") != -1) {
      this.endTime = Date.now();
      var __s14local0 = this.endTime - this.startTime;
      __dep_exact_9036b0ddd67c3c6e.debug("roundtrip time measured:" + __s14local0 + " ms");
      this.dispatchResults(__s14local0);
      this.closeConnection();
      this.removeSocketListeners();
    }
  };
  PolicyPingTest.prototype.dispatchResults = function (__s17param0) {
    this.testIsFinished.dispatch(this.delay, __s17param0, this.blueBox);
  };
  PolicyPingTest.prototype.onIOError = function (__s19param0) {
    __dep_exact_9036b0ddd67c3c6e.debug("IO error:" + __s19param0.text);
    __dep_class_ExternalLog.ExternalLog.logger.log(new __dep_class_SocketErrorLOFactory.SocketErrorLOFactory(__dep_class_SocketErrorLOFactory.SocketErrorLOFactory.POLICY_PING_TEST_IO_ERROR, this.ip, this.port, this.zone, __s19param0.text, this.blueBox));
    this.removeSocketListeners();
  };
  PolicyPingTest.prototype.onSecurityError = function (__s21param0) {
    __dep_exact_9036b0ddd67c3c6e.debug(" security error:" + __s21param0.text);
    __dep_class_ExternalLog.ExternalLog.logger.log(new __dep_class_SocketErrorLOFactory.SocketErrorLOFactory(__dep_class_SocketErrorLOFactory.SocketErrorLOFactory.POLICY_PING_TEST_SECURITY_ERROR, this.ip, this.port, this.zone, __s21param0.text, this.blueBox));
    this.removeSocketListeners();
  };
  PolicyPingTest.prototype.closeConnection = function () {
    __dep_exact_9036b0ddd67c3c6e.debug("connection closed");
  };
  PolicyPingTest.prototype.removeSocketListeners = function () {
    this.testSocket;
    if (this.testIsFinished) {
      this.testIsFinished.removeAll();
      this.testIsFinished = null;
    }
  };
  PolicyPingTest.prototype.dispose = function () {
    this.disposeDelayTimer();
    this.removeSocketListeners();
  };
  PolicyPingTest.TIMEOUT_TIME = 20000;
  return PolicyPingTest;
}();
exports.PolicyPingTest = __s0local1;

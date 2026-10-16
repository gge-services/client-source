Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_BasicController = require("gge-module:class_BasicController");
var __dep_class_BasicSmartfoxConstants = require("gge-module:class_BasicSmartfoxConstants");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_ExternalInterfaceController = require("gge-module:class_ExternalInterfaceController");
var __dep_class_JavascriptCallSetCashHashFactory = require("gge-module:class_JavascriptCallSetCashHashFactory");
var __dep_class_BasicPaymentEvent = require("gge-module:class_BasicPaymentEvent");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __s0local0 = createjs.TimerEvent;
var __s0local1 = __dep_export_LoggerConfigurator.getLogger("CoreJS.PaymentHashRefresher");
var __s0local2 = function () {
  function PaymentHashRefresher() {
    this.PAYMENT_HASH_EXPIRATION_TIME = 900000;
    this.PAYMENT_HASH_REQUEST_TIMEOUT = 30000;
    this.isRunning = false;
    this.isWaitingForResponse = false;
    this.hashExpirationTimer = new __dep_export_CSSMouseCursor.Timer(this.PAYMENT_HASH_EXPIRATION_TIME, 1);
    this.requestTimeoutTimer = new __dep_export_CSSMouseCursor.Timer(this.PAYMENT_HASH_REQUEST_TIMEOUT, 1);
  }
  PaymentHashRefresher.prototype.stopRefreshing = function () {
    this.isRunning = false;
    __dep_class_BasicController.BasicController.getInstance().removeEventListener(__dep_class_BasicPaymentEvent.BasicPaymentEvent.PAYMENT_HASH_CHANGED, this.bindFunction(this.onHashChanged));
    this.hashExpirationTimer.stop();
  };
  PaymentHashRefresher.prototype.resetAndStartRefreshing = function () {
    this.stopRefreshing();
    this.startRefreshing();
  };
  PaymentHashRefresher.prototype.startRefreshing = function () {
    if (!this.isRunning) {
      this.isRunning = true;
      __dep_class_BasicController.BasicController.getInstance().addEventListener(__dep_class_BasicPaymentEvent.BasicPaymentEvent.PAYMENT_HASH_CHANGED, this.bindFunction(this.onHashChanged));
      this.requestNewHash();
    }
  };
  PaymentHashRefresher.prototype.resetAndStartExpirationTimer = function () {
    if (this.env.useShortPaymentHashValidity && this.isRunning) {
      this.hashExpirationTimer.removeEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onHashExpired));
      this.hashExpirationTimer.addEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onHashExpired));
      this.hashExpirationTimer.reset();
      this.hashExpirationTimer.start();
    }
  };
  PaymentHashRefresher.prototype.requestNewHash = function () {
    this.isWaitingForResponse = true;
    this.requestTimeoutTimer.removeEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onResponseTimeout));
    this.requestTimeoutTimer.addEventListener(__s0local0.TIMER_COMPLETE, this.bindFunction(this.onResponseTimeout));
    this.requestTimeoutTimer.reset();
    this.requestTimeoutTimer.start();
    __dep_class_BasicModel.BasicModel.smartfoxClient.sendMessage(__dep_class_BasicSmartfoxConstants.BasicSmartfoxConstants.C2S_NEW_CASH_HASH, []);
  };
  PaymentHashRefresher.prototype.onHashExpired = function (__s17param0) {
    if (this.isRunning) {
      this.requestNewHash();
    }
  };
  PaymentHashRefresher.prototype.onResponseTimeout = function (__s20param0) {
    if (this.isWaitingForResponse) {
      __s0local1.info("response timeout, requesting again…");
      this.requestNewHash();
    }
  };
  PaymentHashRefresher.prototype.onHashChanged = function (__s23param0) {
    if (this.isWaitingForResponse) {
      this.isWaitingForResponse = false;
      this.requestTimeoutTimer.stop();
      __dep_class_ExternalInterfaceController.ExternalInterfaceController.instance.executeJavaScriptFunction(new __dep_class_JavascriptCallSetCashHashFactory.JavascriptCallSetCashHashFactory());
    }
    this.resetAndStartExpirationTimer();
  };
  Object.defineProperty(PaymentHashRefresher.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return PaymentHashRefresher;
}();
exports.PaymentHashRefresher = __s0local2;

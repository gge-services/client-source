Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_BasicDebugHud = require("gge-module:class_BasicDebugHud");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __s0local0 = createjs.Event;
var __s0local1 = createjs.TimerEvent;
var __s0local2 = function () {
  function ExtendedAwayFromKeyboardController(__s3param0) {
    this._userIsActive = true;
    __s3param0.addEventListener(__s0local0.ACTIVATE, this.activateHandler);
    __s3param0.addEventListener(__s0local0.DEACTIVATE, this.deactivateHandler);
    this._afkTimer = new __dep_export_CSSMouseCursor.Timer(ExtendedAwayFromKeyboardController.AFK_TIME, ExtendedAwayFromKeyboardController.AFK_COUNTER);
    this._afkTimer.addEventListener(__s0local1.TIMER_COMPLETE, this.bindFunction(this.afkTimerHandler));
    this._afkTimer.start();
  }
  ExtendedAwayFromKeyboardController.prototype.activateHandler = function (__s5param0) {
    this.stopAndResetTimer();
    if (!this._userIsActive && __dep_class_BasicModel.BasicModel.smartfoxClient.isConnected) {
      this._userIsActive = true;
      __dep_class_BasicDebugHud.BasicDebugHud.updateAwayFromKeyboardPixelVisibility(this._userIsActive);
      this.sendActivityStatusToServer();
    }
  };
  ExtendedAwayFromKeyboardController.prototype.deactivateHandler = function (__s8param0) {
    this._afkTimer.start();
  };
  ExtendedAwayFromKeyboardController.prototype.afkTimerHandler = function (__s10param0) {
    this.stopAndResetTimer();
    if (this._userIsActive && __dep_class_BasicModel.BasicModel.smartfoxClient.isConnected) {
      this._userIsActive = false;
      __dep_class_BasicDebugHud.BasicDebugHud.updateAwayFromKeyboardPixelVisibility(this._userIsActive);
      this.sendActivityStatusToServer();
    }
  };
  ExtendedAwayFromKeyboardController.prototype.stopAndResetTimer = function () {
    this._afkTimer.stop();
    this._afkTimer.reset();
  };
  ExtendedAwayFromKeyboardController.prototype.sendActivityStatusToServer = function () {
    __dep_class_BasicModel.BasicModel.smartfoxClient.sendMessage(ExtendedAwayFromKeyboardController.SERVER_COMMAND_ID, [this._userIsActive]);
  };
  ExtendedAwayFromKeyboardController.AFK_TIME = 300000;
  ExtendedAwayFromKeyboardController.AFK_COUNTER = 1;
  ExtendedAwayFromKeyboardController.SERVER_COMMAND_ID = "core_afk";
  return ExtendedAwayFromKeyboardController;
}();
exports.ExtendedAwayFromKeyboardController = __s0local2;

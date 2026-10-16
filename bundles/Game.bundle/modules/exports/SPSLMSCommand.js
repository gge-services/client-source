Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_SsoUserMoveTrackingEvent = require("gge-module:export_SsoUserMoveTrackingEvent");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __s0local0 = function (__s1param0) {
  function SPSLMSCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SPSLMSCommand, __s1param0);
  Object.defineProperty(SPSLMSCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_SET_PASSWORD_FOR_SOCIAL_LOGIN_MIGRATION;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  SPSLMSCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    this.controller.dispatchEvent(new __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.SPSLMS_ARRIVED, [__s9param0]));
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_CastleBasicController.CastleBasicController.TRACK_SSO_USER_MOVE_ACTION, [__dep_export_SsoUserMoveTrackingEvent.SsoUserMoveTrackingEvent.POPUP_CONFIRMED]);
        return true;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  return SPSLMSCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.SPSLMSCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");

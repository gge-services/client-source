Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __dep_export_GamesightEventConstants = require("gge-module:export_GamesightEventConstants");
var __dep_export_GameSightPayloadVO = require("gge-module:export_GameSightPayloadVO");
var __s0local0 = function (__s1param0) {
  function UPICommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(UPICommand, __s1param0);
  Object.defineProperty(UPICommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_GET_PAYMENT_INFO;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  UPICommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        if (__s9local0.PU == 0) {
          this.trackEvent("firstingamepurchase", __s9local0);
        } else {
          this.trackEvent("purchase", __s9local0);
        }
        __dep_export_CastleModel.CastleModel.userData.parse_UPI(__s9local0);
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  UPICommand.prototype.trackEvent = function (__s14param0, __s14param1) {
    if (__s14param1.A && __s14param1.CC) {
      var __s14local0 = __s14param1.A / 100;
      var __s14local1 = {
        userid: __dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals.gameId + "-" + __dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals.networkId + "-" + __dep_exact_9e901e8e2483a22f.BasicModel.instanceProxy.selectedInstanceVO.instanceId + "-" + __dep_exact_9e901e8e2483a22f.BasicModel.userData.playerID,
        value: __s14local0,
        currency: __s14param1.CC
      };
      if (__dep_exact_81dacdf05bd32292.ExternalInterface.available) {
        __dep_exact_81dacdf05bd32292.ExternalInterface.call("ggsTrackEvent", __s14param0, __s14local1);
        var __s14local2 = new __dep_export_GameSightPayloadVO.GameSightPayloadVO(__dep_export_GamesightEventConstants.GamesightEventConstants.PURCHASE);
        __s14local2.additionalInfo = __s14local1;
        __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.GAMESIGHT_CALL_GGS_TRACK_EVENT, __s14local2);
      }
    }
  };
  return UPICommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.UPICommand = __s0local0;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IExecCommand");

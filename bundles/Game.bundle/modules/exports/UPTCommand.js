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
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __dep_export_GameSightPayloadVO = require("gge-module:export_GameSightPayloadVO");
var __dep_export_GamesightEventConstants = require("gge-module:export_GamesightEventConstants");
var __s0local0 = function (__s1param0) {
  function UPTCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(UPTCommand, __s1param0);
  Object.defineProperty(UPTCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_GET_UNSENT_PRICE_TRACKING;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  UPTCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        this.trackEvent("purchase", __s9local0);
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  UPTCommand.prototype.trackEvent = function (__s12param0, __s12param1) {
    var __s12local0 = __s12param1.PD;
    if (__s12local0 && __s12local0 != null) {
      for (var __s12local1 = 0, __s12local2 = __s12local0; __s12local1 < __s12local2.length; __s12local1++) {
        var __s12local3 = __s12local2[__s12local1];
        if (__s12local3 !== undefined) {
          var __s12local4 = __s12local3[0] / 100;
          var __s12local5 = __s12local3[1];
          var __s12local6 = {
            userid: __dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals.gameId + "-" + __dep_exact_9e901e8e2483a22f_1.EnvGlobalsHandler.globals.networkId + "-" + __dep_exact_9e901e8e2483a22f.BasicModel.instanceProxy.selectedInstanceVO.instanceId + "-" + __dep_exact_9e901e8e2483a22f.BasicModel.userData.playerID,
            value: __s12local4,
            currency: __s12local5
          };
          if (__dep_exact_81dacdf05bd32292.ExternalInterface.available) {
            __dep_exact_81dacdf05bd32292.ExternalInterface.call("ggsTrackEvent", __s12param0, __s12local6);
            var __s12local7 = new __dep_export_GameSightPayloadVO.GameSightPayloadVO(__dep_export_GamesightEventConstants.GamesightEventConstants.PURCHASE);
            __s12local7.additionalInfo = __s12local6;
            __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.GAMESIGHT_CALL_GGS_TRACK_EVENT, __s12local7);
          }
        }
      }
    }
  };
  return UPTCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.UPTCommand = __s0local0;
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "IExecCommand");

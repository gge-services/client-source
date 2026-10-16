Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_6a641b3c8260d260 = require("gge-module:exact_6a641b3c8260d260");
var __dep_export_ClientConstSF = require("gge-module:export_ClientConstSF");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleCommand = require("gge-module:export_CastleCommand");
var __s0local0 = function (__s1param0) {
  function GLTCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GLTCommand, __s1param0);
  Object.defineProperty(GLTCommand.prototype, "cmdId", {
    get: function () {
      return __dep_export_ClientConstSF.ClientConstSF.S2C_GET_TEMPORARY_SERVER_LOGIN_TOKEN;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleCommand.CastleCommand.prototype, "cmdId").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  GLTCommand.prototype.executeCommand = function (__s9param0, __s9param1) {
    switch (__s9param0) {
      case __dep_exact_26a421b704832cff.ERROR.ALL_OK:
        var __s9local0 = JSON.parse(__s9param1[1]);
        __dep_export_CastleModel.CastleModel.userData.specialServerLoginToken = __s9local0.TLT;
        this.env.specialServer = this.buildInstanceVO(__s9local0);
        this.controller.dispatchEvent(new __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.SPECIAL_SEVER_INFO_ARRIVED));
        break;
      default:
        this.showErrorDialog(__s9param0, __s9param1);
    }
    return false;
  };
  GLTCommand.prototype.buildInstanceVO = function (__s12param0) {
    var __s12local0 = new __dep_exact_6a641b3c8260d260.NetworkInstance();
    __s12local0.ip = __s12param0.TSIP;
    __s12local0.port = __s12param0.TSP;
    __s12local0.zone = __s12param0.TSZ;
    __s12local0.zoneId = __s12param0.ZID;
    __s12local0.instanceId = __s12param0.IID;
    if (__dep_export_CastleModel.CastleModel.userData.connectToABGServer) {
      __s12local0.instanceLocaId = "event_title_113";
    }
    if (__dep_export_CastleModel.CastleModel.userData.connectToTempServer) {
      __s12local0.instanceLocaId = "event_title_106";
    }
    return __s12local0;
  };
  return GLTCommand;
}(__dep_export_CastleCommand.CastleCommand);
exports.GLTCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IExecCommand");

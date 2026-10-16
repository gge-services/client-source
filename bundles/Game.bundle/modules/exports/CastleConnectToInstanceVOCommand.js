Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleConnectToInstanceVOCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleConnectToInstanceVOCommand, __s1param0);
  CastleConnectToInstanceVOCommand.prototype.onConnectionEstablished = function (__s5param0) {
    if (__dep_exact_9e901e8e2483a22f_1.BasicModel.localData) {
      if (__dep_exact_9e901e8e2483a22f_2.EnvGlobalsHandler.globals.suk == "" && !__dep_export_CastleModel.CastleModel.userData.connectToSpecialServer) {
        __dep_exact_9e901e8e2483a22f_1.BasicModel.localData.saveInstance(__dep_exact_9e901e8e2483a22f_1.BasicModel.instanceProxy.selectedInstanceVO.instanceId, __dep_exact_9e901e8e2483a22f_1.BasicModel.instanceProxy.selectedInstanceVO.zoneId);
      }
    }
    __dep_exact_9e901e8e2483a22f_1.BasicModel.smartfoxClient.removeEventListener(__dep_exact_9e901e8e2483a22f_3.SmartfoxEvent.CONNECT_SUCCESS, this.bindFunction(this.onConnectionEstablished));
  };
  CastleConnectToInstanceVOCommand.NAME = "BasicConnectToInstanceVOCommand";
  return CastleConnectToInstanceVOCommand;
}(__dep_exact_9e901e8e2483a22f.BasicConnectToInstanceVOCommand);
exports.CastleConnectToInstanceVOCommand = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");

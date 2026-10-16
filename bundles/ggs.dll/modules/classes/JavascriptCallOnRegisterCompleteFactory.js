Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_JavascriptCallOnRegisterCompleteVO = require("gge-module:class_JavascriptCallOnRegisterCompleteVO");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __s0local0 = function () {
  function JavascriptCallOnRegisterCompleteFactory() {}
  JavascriptCallOnRegisterCompleteFactory.prototype.createVO = function () {
    return new __dep_class_JavascriptCallOnRegisterCompleteVO.JavascriptCallOnRegisterCompleteVO(__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.accountId, __dep_class_BasicModel.BasicModel.userData.playerID, __dep_class_BasicModel.BasicModel.instanceProxy.selectedInstanceVO.instanceId, __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.networkId, __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.gameId);
  };
  return JavascriptCallOnRegisterCompleteFactory;
}();
exports.JavascriptCallOnRegisterCompleteFactory = __s0local0;

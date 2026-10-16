Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_JavascriptCallOnLoginCompleteVO = require("gge-module:class_JavascriptCallOnLoginCompleteVO");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __s0local0 = function () {
  function JavascriptCallOnLoginCompleteFactory() {}
  JavascriptCallOnLoginCompleteFactory.prototype.createVO = function () {
    return new __dep_class_JavascriptCallOnLoginCompleteVO.JavascriptCallOnLoginCompleteVO(__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.accountId, __dep_class_BasicModel.BasicModel.userData.playerID, __dep_class_BasicModel.BasicModel.instanceProxy.selectedInstanceVO.instanceId, __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.networkId, __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.gameId);
  };
  return JavascriptCallOnLoginCompleteFactory;
}();
exports.JavascriptCallOnLoginCompleteFactory = __s0local0;

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_GGSCountryController = require("gge-module:class_GGSCountryController");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __dep_class_JavascriptCallSetSessionParametersVO = require("gge-module:class_JavascriptCallSetSessionParametersVO");
var __s0local0 = function () {
  function JavascriptCallOnSetSessionParametersFactory(__s3param0 = -1) {
    this._playerID = __s3param0;
  }
  JavascriptCallOnSetSessionParametersFactory.prototype.createVO = function () {
    return new __dep_class_JavascriptCallSetSessionParametersVO.JavascriptCallSetSessionParametersVO(__dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.gameId, __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.networkId, __dep_class_BasicModel.BasicModel.instanceProxy.selectedInstanceVO.instanceId, this._playerID == -1 ? __dep_class_BasicModel.BasicModel.userData.playerID : this._playerID, __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.accountId, __dep_class_GGSCountryController.GGSCountryController.instance.currentCountry.ggsLanguageCode, __dep_class_GGSCountryController.GGSCountryController.instance.currentCountry.ggsCountryCode, __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.pln, __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.displayName, __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.versionInformation.buildNumberGame, __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals.versionInformation.buildNumberServer);
  };
  return JavascriptCallOnSetSessionParametersFactory;
}();
exports.JavascriptCallOnSetSessionParametersFactory = __s0local0;
